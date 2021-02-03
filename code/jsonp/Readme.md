---
date: 2020-12-17 22:00
loc: 武汉江汉区
keywords: "jsonp原理,jsonp原理解析,面试题,头条,jsonp跨域原理,jsonp跨域,jsonp请求"
description: 有可能是讲解JSONP最好的文章

---

# 如何实现 jsonp 及其原理

## 一个正常的请求: JSON

正常发请求时，`curl` 示例:

``` bash
$ curl https://shanyue.tech/api/user?id=100

{
  "id": 100,
  "name": "shanyue",
  "wechat": "xxxxx",
  "phone": "183xxxxxxxx"
}
```

使用 `fetch` 发送请求，示例:

``` js
const data = await fetch('https://shanyue.tech/api/user?id=100', {
  headers: {
    'content-type': 'application/json',
  },
  method: 'GET',
}).then(res => res.json())
```

请求数据后，使用一个函数来处理数据

``` js
handleData(data)
```

## 一个 JSONP 请求

`JSONP`，全称 `JSON with Padding`，为了解决跨域的问题而出现。虽然它只能处理 GET 跨域，虽然现在基本上都使用 CORS 跨域，但仍然要知道它，毕竟**面试会问**。

`curl` 示例

``` bash
$ curl https://shanyue.tech/api/user?id=100&callback=padding

padding({
  "id": 100,
  "name": "shanyue",
  "wechat": "xxxxx",
  "phone": "183xxxxxxxx"
})
```

对于正常的请求有何不同一目了然: **多了一个 callback=padding, 并且响应数据被 padding 包围**，这就是 JSONP


**那请求数据后，如何处理数据呢？此时的 padding 就是处理数据的函数**

``` js
window.padding = handleData
```

这里实现一个 jsonp 函数

``` js
function jsonp_simple ({ url, onData, params }) {
  const script = document.createElement('script')

  // 一、默认 callback 函数为 padding
  script.src = `${url}?${stringify({ callback: 'padding', ...params })}`
  // 二、使用 onData 作为 window.padding 函数，接收数据
  window['padding'] = onData

  document.body.appendChild(script)
}
```

此时会有一个问题: **window.padding 函数会污染全局，如果有多个请求发送如何处理？**

**使 jsonp 的回调函数名作为一个随机变量**，代码如下

``` js
function jsonp ({ url, onData, params }) {
  const script = document.createElement('script')

  // 一、为了避免全局污染，使用一个随机函数名
  const cbFnName = `JSONP_PADDING_${Math.random().toString().slice(2)}`
  // 二、默认 callback 函数为 cbFnName
  script.src = `${url}?${stringify({ callback: cbFnName, ...params })}`
  // 三、使用 onData 作为 cbFnName 回调函数，接收数据
  window[cbFnName] = onData;

  document.body.appendChild(script)
}

// 发送 JSONP 请求
jsonp({
  url: 'http://localhost:10010',
  params: { id: 10000 },
  onData (data) {
    console.log('Data:', data)
  }
})
```

## 代码附录

完整代码可见[山月博客的 github 仓库](https://github.com/shfshanyue/blog/tree/master/code): <https://github.com/shfshanyue/blog/tree/master/code/jsonp/>

**JSONP 实现完整代码:**

``` js
function stringify (data) {
  const pairs = Object.entries(data)
  const qs = pairs.map(([k, v]) => {
    let noValue = false
    if (v === null || v === undefined || typeof v === 'object') {
      noValue = true
    }
    return `${encodeURIComponent(k)}=${noValue ? '' : encodeURIComponent(v)}`
  }).join('&')
  return qs
}

function jsonp ({ url, onData, params }) {
  const script = document.createElement('script')

  // 一、为了避免全局污染，使用一个随机函数名
  const cbFnName = `JSONP_PADDING_${Math.random().toString().slice(2)}`
  // 二、默认 callback 函数为 cbFnName
  script.src = `${url}?${stringify({ callback: cbFnName, ...params })}`
  // 三、使用 onData 作为 cbFnName 回调函数，接收数据
  window[cbFnName] = onData;

  document.body.appendChild(script)
}
```

**JSONP 服务端适配相关代码:**

``` js
const http = require('http')
const url = require('url')
const qs = require('querystring')

const server = http.createServer((req, res) => {
  const { pathname, query } = url.parse(req.url)
  const params = qs.parse(query)

  const data = { name: 'shanyue', id: params.id }

  if (params.callback) {
    str = `${params.callback}(${JSON.stringify(data)})`
    res.end(str)
  } else {
    res.end()
  }

})

server.listen(10010, () => console.log('Done'))
```

**JSONP 页面调用相关代码**

``` html

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title></title>
</head>
<body>
  <script src="./index.js" type="text/javascript"></script>
  <script type="text/javascript">
  jsonp({
    url: 'http://localhost:10010',
    params: { id: 10000 },
    onData (data) {
      console.log('Data:', data)
    }
  })
  </script>
</body>
</html>
```

## JSONP 实现代码示例演示

从中克隆代码: [山月博客的 github 仓库](https://github.com/shfshanyue/blog/tree/master/code)

### 文件结构

+ `index.js`: jsonp 的简单与复杂实现
+ `server.js`: 服务器接口形式
+ `demo.html`: 前端如何调用 JSONP

### 快速演示

``` js
// 开启服务端
$ node server.js

// 对 demo.html 起一个服务，并且按照提示在浏览器中打开地址，应该是 http://localhost:5000
// 观察控制台输出 JSONP 的回调结果
$ serve .
```
