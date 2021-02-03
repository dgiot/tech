---
title: 面向面试编程，面向掘金面试，一入掘金门，方知面试易
keywords: 前端面试,后端面试
date: 2019-11-17 10:00

---

一九年已末，二零年将至。

我使用 `curl` 与 `jq` 一行简单的命令爬取了掘金的面试集合榜单，有兴趣的同学可以看看爬取过程: [使用 jq 与 sed 制作掘金面试文章排行榜](https://github.com/shfshanyue/op-note/blob/master/jq-sed-case.md)，可以提高你使用命令行的乐趣

关于前端，后端，移动端的面试，这里统统都有，希望可以在面试的过程中帮助到你。另外我也有一个仓库 [日问](https://github.com/shfshanyue/Daily-Question) 来记录前后端以及 devops 一些有意思的问题，欢迎交流

<!--more-->

+ 原文地址: <https://github.com/shfshanyue/blog/blob/master/post/juejin-interview.md>，欢迎 Star

## 生成过程

**面试集合榜单的 markdown 制作只需要一行命令，详细过程如下**

[使用一行命令制作掘金面试文章榜单](https://juejin.im/post/5dd1d58e6fb9a0202646cfa8)

使用以下命令，可以直接获取前端面试榜单

``` bash
$ curl -s 'https://web-api.juejin.im/query' -H 'Content-Type: application/json' -H 'X-Agent: Juejin/Web' --data-binary '{"operationName":"","query":"","variables":{"tags":["55979fe6e4b08a686ce562fe"],"category":"5562b415e4b00c57d9b94ac8","first":100,"after":"","order":"HOTTEST"},"extensions":{"query":{"id":"653b587c5c7c8a00ddf67fc66f989d42"}}}' --compressed | \
 jq -c '.data.articleFeed.items.edges | .[].node | { likeCount, title, originalUrl } | select(.likeCount > 600) ' | jq -cs '. | sort_by(-.likeCount) | .[] | "+ 【👍 \(.likeCount)】[\(.title)](\(.originalUrl))"' | sed s/\"//g

+ 【👍 5059】[一个合格(优秀)的前端都应该阅读这些文章](https://juejin.im/post/5d387f696fb9a07eeb13ea60)
+ 【👍 4695】[2018前端面试总结，看完弄懂，工资少说加3K | 掘金技术征文](https://juejin.im/post/5b94d8965188255c5a0cdc02)
+ 【👍 4425】[中高级前端大厂面试秘籍，为你保驾护航金三银四，直通大厂(上)](https://juejin.im/post/5c64d15d6fb9a049d37f9c20)
+ 【👍 3013】[2018春招前端面试: 闯关记(精排精校) | 掘金技术征文](https://juejin.im/post/5a998991f265da237f1dbdf9)
+ 【👍 2493】[前端面试考点多？看这些文章就够了（2019年6月更新版）](https://juejin.im/post/5aae076d6fb9a028cc6100a9)
```

## 前端

+ 【👍  5053】[一个合格(优秀)的前端都应该阅读这些文章](https://juejin.im/post/5d387f696fb9a07eeb13ea60)
+ 【👍  4691】[2018前端面试总结，看完弄懂，工资少说加3K | 掘金技术征文](https://juejin.im/post/5b94d8965188255c5a0cdc02)
+ 【👍  4424】[中高级前端大厂面试秘籍，为你保驾护航金三银四，直通大厂(上)](https://juejin.im/post/5c64d15d6fb9a049d37f9c20)
+ 【👍  3013】[2018春招前端面试: 闯关记(精排精校) | 掘金技术征文](https://juejin.im/post/5a998991f265da237f1dbdf9)
+ 【👍  2492】[前端面试考点多？看这些文章就够了（2019年6月更新版）](https://juejin.im/post/5aae076d6fb9a028cc6100a9)
+ 【👍  2359】[「中高级前端面试」JavaScript手写代码无敌秘籍](https://juejin.im/post/5c9c3989e51d454e3a3902b6)
+ 【👍  2248】[四月前端知识集锦（每月不可错过的文章集锦）](https://juejin.im/post/5ae95f17f265da0b93481dec)
+ 【👍  2168】[记录面试中一些回答不够好的题（Vue 居多） | 掘金技术征文](https://juejin.im/post/5a9b8417518825558251ce15)
+ 【👍  2162】[如何写出一个惊艳面试官的深拷贝?](https://juejin.im/post/5d6aa4f96fb9a06b112ad5b1)
+ 【👍  2071】[30 道 Vue 面试题，内含详细讲解（涵盖入门到精通，自测 Vue 掌握程度）](https://juejin.im/post/5d59f2a451882549be53b170)
+ 【👍  2012】[面试的信心来源于过硬的基础](https://segmentfault.com/a/1190000013331105)
+ 【👍  1990】[[译] 送你 43 道 JavaScript 面试题](https://juejin.im/post/5d0644976fb9a07ed064b0ca)
+ 【👍  1973】[【面试篇】寒冬求职季之你必须要懂的原生JS(上)](https://juejin.im/post/5cab0c45f265da2513734390)
+ 【👍  1971】[这儿有20道大厂面试题等你查收](https://juejin.im/post/5d124a12f265da1b9163a28d)
+ 【👍  1884】[BAT前端经典面试问题：史上最最最详细的手写Promise教程](https://juejin.im/post/5b2f02cd5188252b937548ab)
+ 【👍  1801】[几道高级前端面试题解析](https://juejin.im/post/5aa8a07cf265da238a3022a4)
+ 【👍  1787】[从2.4万篇文章中挑出的最棒的 JavaScript 学习指南（2018版）](https://zhuanlan.zhihu.com/p/33298555)
+ 【👍  1737】[小哥哥,小姐姐,我有一份tcp、http面试指南你要吗？](https://juejin.im/post/5ad4094e6fb9a028d7011069)
+ 【👍  1685】[JavaScript 工具函数大全（新）](https://juejin.im/post/5da1a04ae51d45783d6122bf)
+ 【👍  1647】[面试分享：两年工作经验成功面试阿里P6总结](https://juejin.im/post/5d690c726fb9a06b155dd40d)
+ 【👍  1619】[16年毕业的前端er在杭州求职ing](https://juejin.im/post/5a64541bf265da3e2d338862)
+ 【👍  1579】[前端笔试&面试爬坑系列---算法](https://juejin.im/post/5b72f0caf265da282809f3b5)
+ 【👍  1545】[3月前端知识集锦](https://juejin.im/post/5abb22925188255c4c1050e0)
+ 【👍  1533】[面试精选之Promise](https://juejin.im/post/5b31a4b7f265da595725f322)
+ 【👍  1470】[面试官:请你实现一个深克隆](https://juejin.im/post/5abb55ee6fb9a028e33b7e0a)
+ 【👍  1441】[当面试官问你如何进行性能优化时，你该这么回答(一)](https://juejin.im/post/5a99f80cf265da238c3a1e16)
+ 【👍  1408】[腾讯前端面试篇（一）](https://juejin.im/post/5c19c1b6e51d451d1e06c163)
+ 【👍  1399】[面试官到底想看什么样的简历？](https://juejin.im/post/5d1d52aff265da1bb2774de0)
+ 【👍  1379】[前端笔试题面试题记录（上）](https://juejin.im/post/5aad40e4f265da237f1e12ed)
+ 【👍  1352】[深拷贝的终极探索（90%的人都不知道）](https://juejin.im/post/5bc1ae9be51d450e8b140b0c)
+ 【👍  1330】[毕业一年左右的前端妹子面经总结](https://juejin.im/post/5af99678f265da0b8e7f881e)
+ 【👍  1303】[地表最强面试图谱](https://juejin.im/post/5b4a9136f265da0f990d49cb)
+ 【👍  1301】[面试分享：专科半年经验面试阿里前端P6+总结(附面试真题及答案)](https://juejin.im/post/5a92c23b5188257a6b06110b)
+ 【👍  1252】[(中篇)中高级前端大厂面试秘籍，寒冬中为您保驾护航，直通大厂](https://juejin.im/post/5c92f499f265da612647b754)
+ 【👍  1247】[面试官(6): 写过『通用前端组件』吗?](https://juejin.im/post/5c02142fe51d4511be77aad7)
+ 【👍  1236】[社招中级前端笔试面试题总结](https://juejin.im/post/5af3cc4af265da0ba3521028)
+ 【👍  1233】[一点感悟：当走完所有大厂的实习面试后](https://juejin.im/post/5b68f384f265da0fa00a3df0)
+ 【👍  1220】[2019年前端面试都聊啥？一起来看看](https://juejin.im/post/5bf5610be51d452a1353b08d)
+ 【👍  1145】[三年前端，面试思考（头条蚂蚁美团offer）](https://juejin.im/post/5bd97627f265da39651c0a4b)
+ 【👍  1052】[jsliang 的 2019 面试准备](https://juejin.im/post/5c8e4cd3f265da67c87454a0)
+ 【👍  984】[面试图谱：前端基础技术知识讲解](https://juejin.im/post/5b5567b25188256256696ee0)
+ 【👍  979】[大厂前端面试考什么? | 掘金技术征文](https://juejin.im/post/5ab70735f265da237a4cf9b1)
+ 【👍  965】[web前端面试总结(自认为还算全面哈哈哈哈哈！！！！）](https://juejin.im/post/5dafb263f265da5b9b80244d)
+ 【👍  951】[20W字囊括上百个前端面试题的项目开源了](https://juejin.im/post/5d55de676fb9a06b0d7c8130)
+ 【👍  945】[腾讯校招前端三面,虐完继续撸|掘金技术征文](https://juejin.im/post/59c907d46fb9a00a4746e2db)
+ 【👍  924】[面试分享：2018阿里巴巴前端面试总结 | 掘金技术征文](https://juejin.im/post/5ab0da85f265da23866fb9b7)
+ 【👍  895】[面试精选之http缓存](https://juejin.im/post/5b3c87386fb9a04f9a5cb037)
+ 【👍  890】[面试之JavaScript篇](https://segmentfault.com/a/1190000014321635?utm_source=index-hottest)
+ 【👍  869】[写给初级前端的面试经验](https://juejin.im/post/5c8bb79e6fb9a04a006fe79a)
+ 【👍  864】[公司要求会使用框架vue，面试题会被问及哪些？](https://juejin.im/post/5cf495e96fb9a07ef5622025)
+ 【👍  863】[25 岁，毕业写前端的这三年](https://juejin.im/post/5cd8c361f265da03a33c5521)
+ 【👍  800】[前端工程师面试必备（持续更新中）](https://juejin.im/post/5cd0bdfc6fb9a031f10ca08c)
+ 【👍  792】[如何通过饿了么 Node.js 面试](https://elemefe.github.io/node-interview/#/sections/zh-cn/)
+ 【👍  787】[分享收集的一大波前端面试题和答案](https://github.com/qiu-deqing/FE-interview)
+ 【👍  774】[你不知道的js中关于this绑定机制的解析[看完还不懂算我输]](https://juejin.im/post/5b3715def265da59af40a630)
+ 【👍  723】[2019 面试准备 - JS 原型与原型链](https://juejin.im/post/5c72a1766fb9a049ea3993e6)
+ 【👍  710】[记一次凉凉的小米面试](https://juejin.im/post/5b4d543ce51d4519610dea67)
+ 【👍  693】[2019 面试准备 - JS 防抖与节流](https://juejin.im/post/5c87b54ce51d455f7943dddb)
+ 【👍  673】[面试前如何准备才能提高成功率（含前端面试押题）](https://juejin.im/post/5c6d4789f265da2d8e70e164)
+ 【👍  673】[七年切图仔如何面试大厂web前端？（沟通软技能总结） | 掘金技术征文](https://juejin.im/post/5b984950f265da0afc2be3bf)
+ 【👍  662】[让我印象深刻的 JavaScript 面试题](https://juejin.im/post/5a0c170c6fb9a0451c39eff2)
+ 【👍  655】[大揭秘！“恐怖”的阿里一面，我究竟想问什么](https://juejin.im/post/5d4cd42a6fb9a06aea618155)
+ 【👍  651】[2019年17道高频React面试题及详解](https://juejin.im/post/5d5f44dae51d4561df7805b4)
+ 【👍  641】[[译] 以面试官的角度来看 React 工作面试](https://juejin.im/post/5bca74cfe51d450e9163351b)
+ 【👍  637】[前端进阶系列-目录](http://hpoenixf.com/前端进阶系列-目录.html)
+ 【👍  621】[2018web前端面试总结](https://juejin.im/post/59ec3d50f265da431c6f7339)
+ 【👍  602】[杭州17届前端期待加入一个更好的团队](https://juejin.im/post/5a718cd36fb9a01caa20d8a8)

## 后端

+ 【👍 1605】[可能是一份最适合你的后端面试指南（部分内容前端同样适用）| 掘金技术征文](https://juejin.im/post/5ba591386fb9a05cd31eb85f)
+ 【👍 1461】[我的阿里之路+Java面经考点](https://juejin.im/post/5aa4a2e35188255589496eb8)
+ 【👍 1444】[Java面试通关要点汇总集](https://juejin.im/post/5a94a8ca6fb9a0635c049e67)
+ 【👍 1442】[漫画：什么是红黑树？](https://juejin.im/post/5a27c6946fb9a04509096248)
+ 【👍 836】[面试中关于Redis的问题看这篇就够了](https://juejin.im/post/5ad6e4066fb9a028d82c4b66)
+ 【👍 669】[互联网公司面试必问的Redis题目](https://juejin.im/post/5b99d4bce51d450e7a24b66e)
+ 【👍 595】[金九银十铁12，目前腾讯、美团等五家大厂都收到意向offer | 掘金技术征文](https://juejin.im/post/5b98bf7be51d450e7e5133f2)
+ 【👍 541】[关于三次握手与四次挥手面试官想考我们什么？--- 不看后悔系列](https://juejin.im/post/5ccd0dfc6fb9a0324a08bb73)
+ 【👍 527】[漫画：什么是HashMap？](https://juejin.im/post/5a215783f265da431d3c7bba)
+ 【👍 506】[[算法总结] 13 道题搞定 BAT 面试——字符串](https://juejin.im/post/5b8f9aed6fb9a05d2e1b75d9)
+ 【👍 492】[互联网公司面试必问的mysql题目(下）](https://juejin.im/post/5ba1f32ee51d450e805b43f2)
+ 【👍 471】[国内Java面试总是问StringBuffer，StringBuilder区别是啥？档次为什么这么低？](https://juejin.im/post/5d5217246fb9a06ae61aabf5)
+ 【👍 461】[搞定计算机网络面试，看这篇就够了](https://juejin.im/post/5b5f20686fb9a04f844adbdd)
+ 【👍 459】[Java 最常见的 200+ 面试题：面试必备](https://juejin.im/post/5c788d986fb9a049f154e479)
+ 【👍 453】[如何判断一个元素在亿级数据中是否存在？](https://juejin.im/post/5bfc90be5188254e2a04374b)
+ 【👍 453】[高级java工程师面试必备：jvm知识体系总揽](http://mp.weixin.qq.com/s/ebg0bT_xBahGV7OAKorBAw)
+ 【👍 441】[什么样的简历不会被丢进回收站](https://juejin.im/post/5b7b66556fb9a01a0a4ead9c)
+ 【👍 425】[Java高并发综合](https://juejin.im/post/59e0110e6fb9a0452b483c9d)
+ 【👍 406】[搞定计算机网络面试，看这篇就够了（补充版）](https://juejin.im/post/5b7be0b2e51d4538db34a51e)
+ 【👍 406】[Java面试必问，ThreadLocal终极篇](https://juejin.im/post/5a64a581f265da3e3b7aa02d)
+ 【👍 405】[我的奇葩面试经历分享：喊价25K，HR 却给了30K。。。](https://juejin.im/post/5cff9f3cf265da1b8a4f13f8)
+ 【👍 399】[这几道Java集合框架面试题在面试中几乎必问](https://juejin.im/post/5b7e955be51d4538de11550c)
+ 【👍 392】[你离BAT之间，只差这一套Java面试题  | 掘金技术征文](https://juejin.im/post/5ad54bae6fb9a028d7011770)
+ 【👍 391】[一个16年毕业生所经历的php面试](https://juejin.im/post/5a143ba05188253edc7f8d2d)
+ 【👍 382】[超详细的Java面试题总结（一）之Java基础知识篇](https://juejin.im/post/5a02cd53f265da431b6ca326)
+ 【👍 358】[你离BAT之间，只差这一套Java面试题。](https://mp.weixin.qq.com/s/5nOqRQwq9sykLN2fvRak6w)
+ 【👍 342】[天下无难试之HTTP协议面试刁难大全（上）](https://juejin.im/post/5ab308e9f265da238e0da39b)
+ 【👍 336】[如何优雅的使用和理解线程池](https://juejin.im/post/5b5e5fa96fb9a04fb900e1ce)
+ 【👍 321】[关于MySQL的知识点与面试常见问题都在这里](https://juejin.im/post/5b24cf7e51882574c020bd56)
+ 【👍 312】[2年java，蚂蚁一面，卒](https://juejin.im/post/5cf79083f265da1b957045d1)
+ 【👍 304】[彻底理解synchronized](https://juejin.im/post/5ae6dc04f265da0ba351d3ff)

## Android/IOS

+ 【👍 1268】[面试带你飞：这是一份全面的 计算机网络基础 总结攻略](https://juejin.im/post/5ad7e6c35188252ebd06acfa)
+ 【👍 1037】[2018年Android面试题整理](https://juejin.im/post/5a82a07df265da4e7071c78f)
+ 【👍 917】[2017下半年掘金日报优质文章合集：Android篇](https://juejin.im/post/5a430ac05188252b145b51ad)
+ 【👍 911】[Android 知识体系脑图「android篇」](https://fashare2015.github.io/2018/04/24/android-skill-tree[android]/)
+ 【👍 843】[一篇文章，全面总结Android面试知识点](https://juejin.im/post/59e54b9051882578cb511f00)
+ 【👍 719】[2018年 iOS 面试心得](https://juejin.im/post/5b4cd5aae51d455b5d3efa2c)
+ 【👍 683】[出一套 iOS 高级面试题](https://juejin.im/post/5b56155e6fb9a04f8b78619b)
+ 【👍 587】[Android 面试题(附答案) | 掘金技术征文](https://juejin.im/post/5b8f15e26fb9a01a031b12d9)
+ 【👍 564】[2018年android面试分享和学习总结](http://blog.csdn.net/qian520ao/article/details/79601179)
+ 【👍 407】[2017年下半年面试问题以及解析精华整理（上）](https://ailoli.me/2018/03/10/2018_face_book/)
+ 【👍 385】[2018大厂Android面试经验 | 掘金技术征文](https://juejin.im/post/5ad958666fb9a07acf55b21d)
+ 【👍 375】[2018Android面试经历](https://juejin.im/post/5afb87e0f265da0b8262f486)
+ 【👍 372】[腾讯社招iOS面试记录](https://juejin.im/post/5b3c40f4e51d45191a0d0aae)
+ 【👍 371】[ RecyclerView 性能优化 | 安卓 offer 收割基](https://juejin.im/post/5baedbf05188255c596714ab)
+ 【👍 356】[Android技能树 — 屏幕适配小结](https://juejin.im/post/5b5315c8e51d45198565b172)
+ 【👍 324】[一线互联网公司内部面试题库 v1.1](https://mp.weixin.qq.com/s/kpxswYcT57ZWB5WEKZKgjg)
+ 【👍 314】[你不应该错过的 Android 全方位面试总结](http://mp.weixin.qq.com/s/yKsgPWx1WBvQg5geiW5PPg)
+ 【👍 313】[Android技能树 — 树基础知识小结(一)](https://juejin.im/post/5aebfb7a6fb9a07ab1110a0f)
+ 【👍 302】[2018年6月份Android上海找工作经历](https://juejin.im/post/5b43f2e06fb9a04fbe12c222)

