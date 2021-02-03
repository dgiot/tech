---
title: 如何实现图片懒加载
date: 2019-11-03 10:00
keywords: IntersectionObserver,懒加载
tags:
  - html

---

懒加载，顾名思义，在当前网页，滑动页面到能看到图片的时候再加载图片

故问题拆分成两个：

1. 如何判断图片出现在了当前视口 （即如何判断我们能够看到图片）
2. 如何控制图片的加载

本篇文章原文地址: [如何实现图片懒加载](https://shanyue.tech/post/image-lazy-load)，另存到 [我的每日一题](https://github.com/shfshanyue/Daily-Question/issues/1)

## 方案一

### 如何判断图片出现在了当前视口

`clientTop`，`offsetTop`，`clientHeight` 以及 `scrollTop` 各种关于图片的高度作比对

这些高度都代表了什么意思？

这我以前有可能是知道的，那时候我比较单纯，喜欢死磕。我现在想通了，背不过的东西就不要背了

**所以它有一个问题：复杂琐碎不好理解！**

仅仅知道它静态的高度还不够，我们还需要知道动态的

**如何动态？监听 `window.scroll` 事件**

### 如何控制图片的加载

``` html
<img data-src="shanyue.jpg">
```

首先设置一个临时属性 `data-src`，控制加载时使用 `src` 代替 `data-src`

## 方案二

改进一下

### 如何判断图片出现在了当前视口

引入一个新的 API， **`Element.getBoundingClientRect()` 方法返回元素的大小及其相对于视口的位置。**

<img alt="getBoundingClientRect示例图" src="https://mdn.mozillademos.org/files/15087/rect.png">

那如何判断图片出现在了当前视口呢，根据示例图示意，代码如下，这个就比较好理解了，就可以很容易地背会(就可以愉快地去面试了)。

``` js
// clientHeight 代表当前视口的高度
img.getBoundingClientRect().top < document.documentElement.clientHeight
```

**监听 `window.scroll` 事件也优化一下**

加个节流器，提高性能。工作中一般使用 `lodash.throttle` 就可以了，万能的 `lodash` 啊！

``` js
_.throttle(func, [wait=0], [options={}])
```

参考 [什么是防抖和节流，他们的应用场景有哪些](https://github.com/shfshanyue/Daily-Question/issues/3)

## 方案三

再改进一下

### 如何判断图片出现在了当前视口

**方案二使用的方法是: `window.scroll` 监听 `Element.getBoundingClientRect()` 并使用 `_.throttle` 节流**

**一系列组合动作太复杂了，于是浏览器出了一个三合一事件: `IntersectionObserver` API，一个能够监听元素是否到了当前视口的事件，一步到位！**

事件回调的参数是 [IntersectionObserverEntry](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserverEntry) 的集合，代表关于是否在可见视口的一系列值

其中，`entry.isIntersecting` 代表目标元素可见

``` javascript
const observer = new IntersectionObserver((changes) => {
  // changes: 目标元素集合
  changes.forEach((change) => {
    // intersectionRatio
    if (change.isIntersecting) {
      const img = change.target
      img.src = img.dataset.src
      observer.unobserve(img)
    }
  })
})

observer.observe(img)
```

**当然，`IntersectionObserver` 除了给图片做懒加载外，还可以对单页应用资源做预加载。**

如在 `next.js v9` 中，会对视口内的资源做预加载，可以参考 [next 9 production optimizations](https://nextjs.org/blog/next-9#production-optimizations)

``` jsx
<Link href="/about">
  <a>关于山月</a>
</Link>
```

## 方案四

浏览器觉得懒加载这事可以交给自己做，你们开发者加个属性就好了。实在是...！

``` html
<img src="shanyue.jpg" loading="lazy">
```

不过目前浏览器兼容性不太好，关于 `loading` 属性的文章也可以查看 [Native image lazy-loading for the web!](https://addyosmani.com/blog/lazy-loading/)

## 总结

总结一下

+ `window.scroll` 监听各种 `top` 与 `height` 并使用 `_.throttle` 节流，但是不好理解各种 `top` 与 `hegith`
+ `window.scroll` 监听 `getBoundingClientRect` 并使用 `_.throttle` 节流，没有一个统一事件，相对复杂
+ `IntersectionObserver`，浏览器推出了一个事件，方便简单
+ `img.loading=lazy`，浏览器直接给你解决，开发者直接标注属性

