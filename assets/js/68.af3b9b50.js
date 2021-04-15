(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{740:function(t,e,v){"use strict";v.r(e);var _=v(8),a=Object(_.a)({},(function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"多语言-协议接入"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#多语言-协议接入"}},[t._v("#")]),t._v(" 多语言 - 协议接入")]),t._v(" "),v("p",[t._v("多语言的 "),v("strong",[t._v("协议接入")]),t._v(" 处理由 "),v("a",{attrs:{href:"https://github.com/emqx/emqx-exproto",target:"_blank",rel:"noopener noreferrer"}},[t._v("emqx-exproto"),v("OutboundLink")],1),t._v(" 插件进行支持。该插件在 4.2.0 中首次引入。它允许用户使用其它的编程语言实现私有的，自定义的协议接入。例如：")]),t._v(" "),v("ul",[v("li",[t._v("可接收基于 TCP/UDP/TLS/DTLS 及 PSK 的终端连接。")]),t._v(" "),v("li",[t._v("允许 Python, Java 代码侧订阅主题，或发布消息到 EMQ X 系统。")])]),t._v(" "),v("h2",{attrs:{id:"设计"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#设计"}},[t._v("#")]),t._v(" 设计")]),t._v(" "),v("p",[t._v("多语言系统的通信及过程调用的逻辑参见："),v("RouterLink",{attrs:{to:"/zh/backend/emqx/advanced/lang-exhook.html#design"}},[t._v("多语言 - 钩子扩展#设计")]),t._v("。")],1),t._v(" "),v("h3",{attrs:{id:"回调与函数接口"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#回调与函数接口"}},[t._v("#")]),t._v(" 回调与函数接口")]),t._v(" "),v("p",[t._v("与 "),v("code",[t._v("emqx-extension-hook")]),t._v(" 不同的是，"),v("code",[t._v("emqx-exproto")]),t._v(" 提供的是完全不同的回调和函数接口以实现协议接入的处理：")]),t._v(" "),v("p",[v("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/backend/emqx/advanced/assets/exproto-arch.jpg",alt:"exproto-arch.jpg"}})]),t._v(" "),v("p",[v("code",[t._v("emqx-exproto")]),t._v(" 会提供函数接口供 Python/Java 侧调用；也设计了回调函数去通知 Python/Java 侧 "),v("code",[t._v("emqx-exproto")]),t._v(" 有新的事件产生。")]),t._v(" "),v("p",[t._v("我们按层级将它分为：")]),t._v(" "),v("h4",{attrs:{id:"连接层"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#连接层"}},[t._v("#")]),t._v(" 连接层")]),t._v(" "),v("p",[t._v("该部分主要 维持 Socket 的生命周期和数据的收发：")]),t._v(" "),v("ul",[v("li",[t._v("调用 "),v("code",[t._v("init")]),t._v(" 回调。用于通知外部模块"),v("strong",[t._v("已新建立了一个连接")]),t._v("。")]),t._v(" "),v("li",[t._v("调用 "),v("code",[t._v("terminated")]),t._v(" 回调。用于通知外部模块连接"),v("strong",[t._v("已关闭")]),t._v("。")]),t._v(" "),v("li",[t._v("调用 "),v("code",[t._v("received")]),t._v(" 回调。用于通知外部模块"),v("strong",[t._v("该连接新收到的数据包")]),t._v("。")]),t._v(" "),v("li",[t._v("提供 "),v("code",[t._v("send")]),t._v(" 接口。供外部模块调用，"),v("strong",[t._v("用于发送数据包")]),t._v("。")]),t._v(" "),v("li",[t._v("提供 "),v("code",[t._v("close")]),t._v(" 接口。供外部模块调用，"),v("strong",[t._v("用于主动关闭连接")]),t._v("。")])]),t._v(" "),v("h4",{attrs:{id:"协议-会话层"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#协议-会话层"}},[t._v("#")]),t._v(" 协议/会话层")]),t._v(" "),v("p",[t._v("该部分主要提供 PUB/SUB 接口，以实现与 EMQ X Broker 系统的消息互通。包括：")]),t._v(" "),v("ul",[v("li",[t._v("提供 "),v("code",[t._v("register")]),t._v(" 接口。供外部模块调用，用于向集群注册客户端。")]),t._v(" "),v("li",[t._v("提供 "),v("code",[t._v("publish")]),t._v(" 接口。供外部模块调用，用于发布消息 EMQ X Broker 中。")]),t._v(" "),v("li",[t._v("提供 "),v("code",[t._v("subscribe")]),t._v(" 接口。供外部模块调用，用于订阅某主题，以实现从 EMQ X Broker 中接收某些下行消息。")]),t._v(" "),v("li",[t._v("提供 "),v("code",[t._v("unsubscribe")]),t._v(" 接口。供外部模块调用，用于取消订阅某主题。")]),t._v(" "),v("li",[t._v("调用 "),v("code",[t._v("deliver")]),t._v(" 回调。用于接收下行消息（在订阅主题成功后，如果主题上有消息，便会回调该方法）")])]),t._v(" "),v("p",[t._v("注：函数，及参数的类型定义等，可参考 SDK 的实现。")]),t._v(" "),v("h3",{attrs:{id:"sdk"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#sdk"}},[t._v("#")]),t._v(" SDK")]),t._v(" "),v("p",[t._v("目前对于 "),v("code",[t._v("emqx-exproto")]),t._v(" 提供的 SDK 有：")]),t._v(" "),v("ul",[v("li",[t._v("Python: https://github.com/emqx/emqx-exproto-python-sdk")]),t._v(" "),v("li",[t._v("Java: https://github.com/emqx/emqx-exproto-java-sdk")])]),t._v(" "),v("p",[t._v("注：SDK 版本与 EMQ X 的第二位版本号进行兼容。例如，在 EMQ X v4.1.4 中，应该使用 v4.1.x 的 SDK")]),t._v(" "),v("p",[t._v("SDK 的概念参考："),v("RouterLink",{attrs:{to:"/zh/backend/emqx/advanced/lang-exhook.html#sdk"}},[t._v("多语言 - 钩子扩展#SDK")])],1),t._v(" "),v("h2",{attrs:{id:"快速上手"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#快速上手"}},[t._v("#")]),t._v(" 快速上手")]),t._v(" "),v("h3",{attrs:{id:"python"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#python"}},[t._v("#")]),t._v(" Python")]),t._v(" "),v("p",[t._v("参考："),v("a",{attrs:{href:"https://github.com/emqx/emqx-exproto-python-sdk#get-started",target:"_blank",rel:"noopener noreferrer"}},[t._v("emqx-exproto-python-sdk - Get Started"),v("OutboundLink")],1)]),t._v(" "),v("h3",{attrs:{id:"java"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#java"}},[t._v("#")]),t._v(" Java")]),t._v(" "),v("p",[t._v("参考："),v("a",{attrs:{href:"https://github.com/emqx/emqx-exproto-java-sdk#get-started",target:"_blank",rel:"noopener noreferrer"}},[t._v("emqx-exproto-java-sdk - Get Started"),v("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=a.exports}}]);