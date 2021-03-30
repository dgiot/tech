(window.webpackJsonp=window.webpackJsonp||[]).push([[125],{592:function(e,s,n){"use strict";n.r(s);var t=n(42),o=Object(t.a)({},(function(){var e=this,s=e.$createElement,n=e._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"多语言扩展-钩子"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#多语言扩展-钩子"}},[e._v("#")]),e._v(" 多语言扩展 - 钩子")]),e._v(" "),n("p",[e._v("在 EMQ X e4.2.0 中，我们提供了多语言扩展的支持。其中 "),n("strong",[e._v("多语言扩展钩子")]),e._v(" 模块允许使用其他编程语言（例如：Python，Java 等）直接向 EMQ X 系统挂载钩子，以接收并处理 EMQ X 系统的钩子事件，达到扩展和定制 EMQ X 的目的。例如，用户可以使用其他编程语言来自定义：")]),e._v(" "),n("ul",[n("li",[e._v("客户端接入的认证授权")]),e._v(" "),n("li",[e._v("发布/订阅的 ACL 鉴权")]),e._v(" "),n("li",[e._v("消息的持久化，桥接")]),e._v(" "),n("li",[e._v("发布/订阅，或者客户端上下线事件的通知处理")])]),e._v(" "),n("h2",{attrs:{id:"设计"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#设计"}},[e._v("#")]),e._v(" 设计")]),e._v(" "),n("p",[n("strong",[e._v("多语言扩展钩子")]),e._v("  功能由 "),n("code",[e._v("emqx-exhook")]),e._v(" 插件提供。它使用 "),n("a",{attrs:{href:"https://www.grpc.io",target:"_blank",rel:"noopener noreferrer"}},[e._v("gRPC"),n("OutboundLink")],1),e._v(" 作为 RPC 的通信框架。")]),e._v(" "),n("p",[e._v("架构如下图：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("  EMQ X\n+========================+                 +========+==========+\n|    ExHook              |                 |        |          |\n|   +----------------+   |      gRPC       | gRPC   |  User's  |\n|   |   gRPC Client  | ------------------\x3e | Server |  Codes   |\n|   +----------------+   |    (HTTP/2)     |        |          |\n|                        |                 |        |          |\n+========================+                 +========+==========+\n")])])]),n("p",[e._v("它表明：EMQ X 中的 ExHook 模块作为一个 gRPC 客户端，将系统中所有的钩子事件发送到用户的 gRPC 服务端。")]),e._v(" "),n("p",[e._v("和 EMQ X 原生的钩子一致，它也支持链式的方式计算和返回：")]),e._v(" "),n("p",[n("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/develop_png/zh_CN/advanced/assets/chain_of_responsiblity.png",alt:"chain_of_responsiblity.png"}})]),e._v(" "),n("h2",{attrs:{id:"接口设计"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#接口设计"}},[e._v("#")]),e._v(" 接口设计")]),e._v(" "),n("p",[e._v("作为事件的处理端，即 gRPC 的服务端。它需要用户自定义实现需要挂载的钩子列表，和每个钩子事件到达后如何去处理的回调函数。这些接口在 "),n("strong",[e._v("多语言扩展钩子")]),e._v(" 中被定义为一个名为 "),n("code",[e._v("HookProvider")]),e._v("的 gRPC 服务，其需要实现的接口的列表包含：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('syntax = "proto3";\n\npackage emqx.exhook.v1;\n\nservice HookProvider {\n\n  rpc OnProviderLoaded(ProviderLoadedRequest) returns (LoadedResponse) {};\n\n  rpc OnProviderUnloaded(ProviderUnloadedRequest) returns (EmptySuccess) {};\n\n  rpc OnClientConnect(ClientConnectRequest) returns (EmptySuccess) {};\n\n  rpc OnClientConnack(ClientConnackRequest) returns (EmptySuccess) {};\n\n  rpc OnClientConnected(ClientConnectedRequest) returns (EmptySuccess) {};\n\n  rpc OnClientDisconnected(ClientDisconnectedRequest) returns (EmptySuccess) {};\n\n  rpc OnClientAuthenticate(ClientAuthenticateRequest) returns (ValuedResponse) {};\n\n  rpc OnClientCheckAcl(ClientCheckAclRequest) returns (ValuedResponse) {};\n\n  rpc OnClientSubscribe(ClientSubscribeRequest) returns (EmptySuccess) {};\n\n  rpc OnClientUnsubscribe(ClientUnsubscribeRequest) returns (EmptySuccess) {};\n\n  rpc OnSessionCreated(SessionCreatedRequest) returns (EmptySuccess) {};\n\n  rpc OnSessionSubscribed(SessionSubscribedRequest) returns (EmptySuccess) {};\n\n  rpc OnSessionUnsubscribed(SessionUnsubscribedRequest) returns (EmptySuccess) {};\n\n  rpc OnSessionResumed(SessionResumedRequest) returns (EmptySuccess) {};\n\n  rpc OnSessionDiscarded(SessionDiscardedRequest) returns (EmptySuccess) {};\n\n  rpc OnSessionTakeovered(SessionTakeoveredRequest) returns (EmptySuccess) {};\n\n  rpc OnSessionTerminated(SessionTerminatedRequest) returns (EmptySuccess) {};\n\n  rpc OnMessagePublish(MessagePublishRequest) returns (ValuedResponse) {};\n\n  rpc OnMessageDelivered(MessageDeliveredRequest) returns (EmptySuccess) {};\n\n  rpc OnMessageDropped(MessageDroppedRequest) returns (EmptySuccess) {};\n\n  rpc OnMessageAcked(MessageAckedRequest) returns (EmptySuccess) {};\n}\n')])])]),n("p",[e._v("其中 HookProvider 部分：")]),e._v(" "),n("ul",[n("li",[n("code",[e._v("OnProviderLoaded")]),e._v("：定义 HookProvider 如何被加载，返回需要挂载的钩子列表。仅在该列表中的钩子会被回调到 HookProivder 服务。")]),e._v(" "),n("li",[n("code",[e._v("OnProviderUnloaded")]),e._v("：定义 HookProvider 如何被卸载，仅用作通知。")])]),e._v(" "),n("p",[e._v("钩子事件部分：")]),e._v(" "),n("ul",[n("li",[n("code",[e._v("OnClient*")]),e._v("，"),n("code",[e._v("OnSession*")]),e._v("，"),n("code",[e._v("OnMessage*")]),e._v(" 为前缀的方法与 "),n("RouterLink",{attrs:{to:"/zh/backend/emqx/modules/hooks.html"}},[e._v("钩子")]),e._v(" 的当中的方法一一对应。它们有着相同的调用时机和相似的参数列表。")],1),e._v(" "),n("li",[e._v("仅 "),n("code",[e._v("OnClientAuthenticate")]),e._v("，"),n("code",[e._v("OnClientCheckAcl")]),e._v("，"),n("code",[e._v("OnMessagePublish")]),e._v(" 允许携带返回值到 EMQ X 系统，其它回调则不支持。")])]),e._v(" "),n("p",[e._v("其中接口和参数数据结构的详情参考："),n("a",{attrs:{href:"https://github.com/emqx/emqx-exhook/blob/dev/e4.2.0/priv/protos/exhook.proto",target:"_blank",rel:"noopener noreferrer"}},[e._v("exhook.proto"),n("OutboundLink")],1)]),e._v(" "),n("h2",{attrs:{id:"开发指南"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#开发指南"}},[e._v("#")]),e._v(" 开发指南")]),e._v(" "),n("p",[e._v("用户在使用多语言扩展钩子的功能时，需要先实现 "),n("code",[e._v("HookProvider")]),e._v(" 的 gRPC 服务来接收 ExHook 发送出来的回调事件。")]),e._v(" "),n("p",[e._v("其步骤如下：")]),e._v(" "),n("ol",[n("li",[e._v("拷贝出当前版本的 "),n("code",[e._v("lib/emqx_exhook-<x.y.z>/priv/protos/exhook.proto")]),e._v(" 文件。")]),e._v(" "),n("li",[e._v("使用对应编程语言的 gRPC 框架，生成 "),n("code",[e._v("exhook.proto")]),e._v(" 的 gRPC 服务端的代码。")]),e._v(" "),n("li",[e._v("按需实现 exhook.proto 当中定义的接口。")])]),e._v(" "),n("p",[e._v("开发完成后，需将该服务部署到与 EMQ X 能够通信的服务器上，并保证端口的开放。")]),e._v(" "),n("p",[e._v("其中各个语言的 gRPC 框架可参考："),n("a",{attrs:{href:"https://github.com/grpc-ecosystem/awesome-grpc",target:"_blank",rel:"noopener noreferrer"}},[e._v("grpc-ecosystem/awesome-grpc"),n("OutboundLink")],1)]),e._v(" "),n("h2",{attrs:{id:"创建模块"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#创建模块"}},[e._v("#")]),e._v(" 创建模块")]),e._v(" "),n("p",[e._v("在成功部署 "),n("code",[e._v("HookProvider")]),e._v(" 服务后，通过 dashboard 页面可以开启多语言钩子扩展模块，并配置其服务地址即可正常使用。")]),e._v(" "),n("p",[e._v("打开 "),n("a",{attrs:{href:"http://127.0.0.1:18083/#/modules",target:"_blank",rel:"noopener noreferrer"}},[e._v("EMQ X Dashboard"),n("OutboundLink")],1),e._v("，点击左侧的 “模块” 选项卡，选择添加：")]),e._v(" "),n("p",[n("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/develop_png/zh_CN/modules/assets/modules.png",alt:"modules.png"}})]),e._v(" "),n("p",[e._v("选择 “多语言扩展钩子”：")]),e._v(" "),n("p",[n("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/develop_png/zh_CN/modules/assets/exhook-add.jpg",alt:"exhook-add.jpg"}})]),e._v(" "),n("p",[e._v("配置 "),n("code",[e._v("HookProvider")]),e._v(" 服务相关参数：")]),e._v(" "),n("p",[n("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/develop_png/zh_CN/modules/assets/exhook-conf.jpg",alt:"exhook-conf.jpg"}})]),e._v(" "),n("p",[e._v("点击添加后，模块添加完成")]),e._v(" "),n("p",[n("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/develop_png/zh_CN/modules/assets/exhook-succ.jpg",alt:"exhook-succ.jpg"}})]),e._v(" "),n("p",[e._v("至此，多语言扩展钩子的配置已经完成。")])])}),[],!1,null,null,null);s.default=o.exports}}]);