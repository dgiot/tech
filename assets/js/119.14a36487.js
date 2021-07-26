(window.webpackJsonp=window.webpackJsonp||[]).push([[119],{548:function(t,s,a){"use strict";a.r(s);var n=a(11),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"实时请求"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实时请求"}},[t._v("#")]),t._v(" 实时请求")]),t._v(" "),a("blockquote",[a("p",[t._v("译者注：介绍下实时请求的使用场景，比如，某商品的扫码付款页面，在用户付款后，服务端确认付款成功后通知客户端成功付款的事件，客户端收到事件，知道用户付款成功，然后做对应的交互，完成付款。")])]),t._v(" "),a("h2",{attrs:{id:"标准api-standard-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#标准api-standard-api"}},[t._v("#")]),t._v(" 标准API {#standard-api}")]),t._v(" "),a("p",[t._v("就像我们在"),a("a",{attrs:{href:"https://github.com/parse-community/parse-server/wiki/Parse-LiveQuery-Protocol-Specification",target:"_blank",rel:"noopener noreferrer"}},[t._v("LiveQuery protocol"),a("OutboundLink")],1),t._v("里面说到的，我们保留了一个WebSocket连接来与Parse实时请求服务通信。当实时请求在服务端使用时，使用的是"),a("a",{attrs:{href:"https://www.npmjs.com/package/ws",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("ws")]),a("OutboundLink")],1),t._v("包，当在浏览器端使用时，使用的是window.WebSocket。我们考虑到在大多数使用场景下，WebSocket不是必需的，所以我们提供了简单的API让你可以专注于你的业务逻辑。")]),t._v(" "),a("p",[t._v("提示：实时请求只在"),a("a",{attrs:{href:"https://www.gitbook.com/book/jaweii/parse/edit#",target:"_blank",rel:"noopener noreferrer"}},[t._v("JS SDK ~1.8"),a("OutboundLink")],1),t._v("版本以上支持。")]),t._v(" "),a("h2",{attrs:{id:"创建订阅-create-a-subscription"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建订阅-create-a-subscription"}},[t._v("#")]),t._v(" 创建订阅 {#create-a-subscription}")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" query "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Parse"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Query")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Game'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" subscription "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" query"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("subscribe")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("你创建的"),a("code",[t._v("subscription")]),t._v("实际上是一个事件触发器，关于事件触发器的更多信息，"),a("a",{attrs:{href:"https://www.gitbook.com/book/jaweii/parse/edit#",target:"_blank",rel:"noopener noreferrer"}},[t._v("查看这里"),a("OutboundLink")],1),t._v("。你将会通过"),a("code",[t._v("subscription")]),t._v("拿到实时请求事件，我们会为你打开WebSocket连接到实时请求服务。")]),t._v(" "),a("h2",{attrs:{id:"事件处理-event-handling"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#事件处理-event-handling"}},[t._v("#")]),t._v(" 事件处理 {#event-handling}")]),t._v(" "),a("p",[t._v("我们定义了一些事件类型，你可以通过"),a("code",[t._v("subscription")]),t._v("对象拿到：")]),t._v(" "),a("h3",{attrs:{id:"open-事件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#open-事件"}},[t._v("#")]),t._v(" OPEN 事件")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("subscription"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'open'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'subscription opened'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("当你调用"),a("code",[t._v("query.subscribe()")]),t._v("，我们发送了一个订阅请求到实时请求服务器，当我们从实时请求服务器的得到确认消息，就会触发open事件。")]),t._v(" "),a("p",[t._v("当客户端关闭WebSocket连接后，我们会自动重连到实时请求服务器，如果重连成功，也会触发open事件。")]),t._v(" "),a("h3",{attrs:{id:"creat事件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#creat事件"}},[t._v("#")]),t._v(" CREAT事件")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("subscription"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'create'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("object")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'object created'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("当一个新的Parse对象被创建，并且它满足你订阅的"),a("code",[t._v("ParseQuery")]),t._v("时，将会触发create事件。"),a("code",[t._v("object")]),t._v("是指创建的对象。")]),t._v(" "),a("h3",{attrs:{id:"update事件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#update事件"}},[t._v("#")]),t._v(" UPDATE事件")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("subscription"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'update'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("object")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'object updated'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("当一个已经存在的，满足你订阅的"),a("code",[t._v("ParseQuery")]),t._v("的"),a("code",[t._v("ParseObject")]),t._v("被更新，将会触发update事件。object是指更新后的ParseObject对象。")]),t._v(" "),a("h3",{attrs:{id:"enter事件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#enter事件"}},[t._v("#")]),t._v(" ENTER事件")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("subscription"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'enter'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("object")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'object entered'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("当一个已存在的，不满足"),a("code",[t._v("ParseQuery")]),t._v("的"),a("code",[t._v("ParseObject")]),t._v("变得满足后，就会触发enter事件。object是指变更后的最新对象。")]),t._v(" "),a("h3",{attrs:{id:"leave事件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#leave事件"}},[t._v("#")]),t._v(" LEAVE事件")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("subscription"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'leave'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("object")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'object left'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("和enter事件相反，当一个已存在的"),a("code",[t._v("ParseObject")]),t._v("对象从满足变成不满足"),a("code",[t._v("ParseQuery")]),t._v("后，就会触发leave事件。")]),t._v(" "),a("h3",{attrs:{id:"delete-事件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#delete-事件"}},[t._v("#")]),t._v(" DELETE 事件")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("subscription"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'delete'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("object")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'object deleted'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("当一个已存在，满足"),a("code",[t._v("ParseQuery")]),t._v("的"),a("code",[t._v("ParseObject")]),t._v("对象被删除后，就会触发delete事件。object对象是指被删除的对象。")]),t._v(" "),a("h3",{attrs:{id:"close-事件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#close-事件"}},[t._v("#")]),t._v(" CLOSE 事件")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("subscription"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'close'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'subscription closed'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("当客户端断开和LiveQuery服务的WebSocket连接后，就会触发close事件。")]),t._v(" "),a("h2",{attrs:{id:"取消订阅-unsubscribe"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#取消订阅-unsubscribe"}},[t._v("#")]),t._v(" 取消订阅 {#unsubscribe}")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("subscription"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("unsubscribe")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("如果你想停止从"),a("code",[t._v("ParseQuery")]),t._v("接收事件，你可以使用"),a("code",[t._v("unsubscribe")]),t._v("方法取消订阅。然后，你将不能从"),a("code",[t._v("subscription")]),t._v("收到任何事件。")]),t._v(" "),a("h1",{attrs:{id:"关闭"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关闭"}},[t._v("#")]),t._v(" 关闭")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("Parse"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("LiveQuery"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("close")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("当你使用完实时请求，你可以调用close方法，WebSocket将会断开和实时请求服务器的链接，取消重连，取消订阅所有的订阅。在此之后，如果你再次调用"),a("code",[t._v("query.subscribe()")]),t._v("，将会创建一个新的连接。")]),t._v(" "),a("h2",{attrs:{id:"设置服务地址-setup-server-url"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设置服务地址-setup-server-url"}},[t._v("#")]),t._v(" 设置服务地址 {#setup-server-url}")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("Parse"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("liveQueryServerURL "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ws://XXXX'")]),t._v("\n")])])]),a("p",[t._v("大多数的情况你不需要设置这个，如果你设置了服务地址，我们将会提取出主机地址，并使用ws://hostname作为默认的实时请求服务地址。总之，如果你想定义你自己的实时请求地址，或使用不同的协议，比如wss，你可以通过这个来设置。")]),t._v(" "),a("h2",{attrs:{id:"websocket-状态-websocket-status"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#websocket-状态-websocket-status"}},[t._v("#")]),t._v(" WebSocket 状态 {#websocket-status}")]),t._v(" "),a("p",[t._v("我们暴露出了3个方法来为你监控WebSocket链接的状态。")]),t._v(" "),a("h3",{attrs:{id:"open-事件-open-event-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#open-事件-open-event-1"}},[t._v("#")]),t._v(" OPEN 事件 {#open-event-1}")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("Parse"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("LiveQuery"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'open'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'socket connection established'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("当WebSocket完成了连接到实时请求服务器，将会触发open事件。")]),t._v(" "),a("h3",{attrs:{id:"close-事件-close-event-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#close-事件-close-event-1"}},[t._v("#")]),t._v(" CLOSE 事件 {#close-event-1}")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("Parse"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("LiveQuery"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'close'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'socket connection closed'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("当WebSocket关闭了和实时请求服务器的链接，将会触发close事件。")]),t._v(" "),a("h3",{attrs:{id:"error-事件-error-event"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#error-事件-error-event"}},[t._v("#")]),t._v(" ERROR 事件 {#error-event}")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("Parse"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("LiveQuery"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'error'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("error")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("error"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("当出现某个网络错误，或者实时请求服务器发生错误，将会触发error事件。")]),t._v(" "),a("h2",{attrs:{id:"重连-reconnect"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#重连-reconnect"}},[t._v("#")]),t._v(" 重连 {#reconnect}")]),t._v(" "),a("p",[t._v("由于实时请求功能依赖WebSocket连接，为了保持WebScoket连接是一直打开的，每当我们发现连接丢失后，就会自动尝试重连，我们会在后台按间隔指数级增加的时间重连。不过，如果WebScoket连接时通过"),a("code",[t._v("Parse.LiveQuery.close()")]),t._v("或"),a("code",[t._v("client.close()")]),t._v("关闭的，将不会重连。")]),t._v(" "),a("h2",{attrs:{id:"sessiontoken-sessiontoken"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sessiontoken-sessiontoken"}},[t._v("#")]),t._v(" SessionToken {#sessiontoken}")]),t._v(" "),a("p",[t._v("当你订阅一个ParseQuery，我们会发送一个当前用户的sessionToken到实时请求服务器。有一点要注意，当你退出当前用户后，sessionToken将失效，你应该取消订阅后重新订阅；否则，你可能会面临安全问题，因为你会收到不应发送给你的事件。")])])}),[],!1,null,null,null);s.default=e.exports}}]);