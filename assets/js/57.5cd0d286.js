(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{534:function(_,t,v){"use strict";v.r(t);var e=v(42),s=Object(e.a)({},(function(){var _=this,t=_.$createElement,v=_._self._c||t;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("h1",{attrs:{id:"钩子"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#钩子"}},[_._v("#")]),_._v(" 钩子")]),_._v(" "),v("h2",{attrs:{id:"定义"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#定义"}},[_._v("#")]),_._v(" 定义")]),_._v(" "),v("p",[v("strong",[_._v("钩子(Hooks)")]),_._v(" 是 EMQ X 提供的一种机制，它通过拦截模块间的函数调用、消息传递、事件传递来修改或扩展系统功能。")]),_._v(" "),v("p",[_._v("简单来讲，该机制目的在于增强软件系统的扩展性、方便与其他三方系统的集成、或者改变其系统原有的默认行为。如：")]),_._v(" "),v("p",[v("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/develop_png/zh_CN/advanced/assets/hooks_in_system.png",alt:"hooks_in_system.png"}})]),_._v(" "),v("p",[_._v("当系统中不存在 "),v("strong",[_._v("钩子 (Hooks)")]),_._v(" 机制时，整个事件处理流程 "),v("em",[_._v("从 事件 (Event) 的输入，到 处理 (Handler)，再到完成后的返回 结果 (Result)")]),_._v(" 对于系统外部而讲，都是不可见、且无法修改的。")]),_._v(" "),v("p",[_._v("而在这个过程中加入一个可挂载函数的点 (HookPoint)，允许外部插件挂载多个回调函数，形成一个调用链。达到对内部事件处理过程的扩展和修改。")]),_._v(" "),v("p",[_._v("系统中常用到的认证插件则是按照该逻辑进行实现的。以最简单的 "),v("a",{attrs:{href:"https://github.com/emqx/emqx-auth-username",target:"_blank",rel:"noopener noreferrer"}},[_._v("emqx_auth_username"),v("OutboundLink")],1),_._v(" 为例：")]),_._v(" "),v("p",[_._v("在只开启 "),v("code",[_._v("emqx_auth_username")]),_._v(" 认证插件，且关闭匿名用户登录时。按照上图对事件的处理逻辑可知，此时认证模块的逻辑为：")]),_._v(" "),v("ol",[v("li",[_._v("收到用户认证请求 (Authenticate)")]),_._v(" "),v("li",[_._v("读取 "),v("em",[_._v("是否允许匿名登录")]),_._v(" 参数，得到 "),v("strong",[_._v("拒绝登录")])]),_._v(" "),v("li",[_._v("执行 "),v("em",[_._v("认证事件的钩子")]),_._v("，即回调到 "),v("code",[_._v("emqx_auth_username")]),_._v(" 插件中，假设其认为此次登录合法，得到 "),v("strong",[_._v("允许登录")])]),_._v(" "),v("li",[_._v("返回 "),v("strong",[_._v("认证成功")]),_._v("，成功接入系统")])]),_._v(" "),v("p",[_._v("即，如下图所示：")]),_._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[_._v("                     EMQ X Core          Hooks & Plugins     \n                |<---  Scope  ---\x3e|<-------  Scope  --------\x3e|\n                |                 |                          |\n  Authenticate  |     Allow       |   emqx_auth_username     | Authenticate\n =============> > - - - - - - No -> - - - - - - - - - - -Yes->==============> Success\n     Request    |    Anonymous?   |     authenticate?        |     Result\n                |                 |                          |\n                +-----------------+--------------------------+\n")])])]),v("p",[_._v("因此，在 EMQ X 中，"),v("strong",[_._v("钩子 (Hooks)")]),_._v(" 这种机制极大地方便了系统的扩展。我们不需要修改 "),v("a",{attrs:{href:"https://github.com/emqx/emqx",target:"_blank",rel:"noopener noreferrer"}},[_._v("emqx"),v("OutboundLink")],1),_._v(" 核心代码，仅需要在特定的位置埋下 "),v("strong",[_._v("挂载点 (HookPoint)")]),_._v(" ，便能允许外部插件扩展 EMQ X 的各种行为。")]),_._v(" "),v("p",[_._v("对于实现者来说仅需要关注：")]),_._v(" "),v("ol",[v("li",[v("strong",[_._v("挂载点 (HookPoint)")]),_._v(" 的位置：包括其作用、执行的时机、和如何挂载和取消挂载。")]),_._v(" "),v("li",[v("strong",[_._v("回调函数")]),_._v(" 的实现：包括回调函数的入参个数、作用、数据结构等，及返回值代表的含义。")]),_._v(" "),v("li",[_._v("了解回调函数在 "),v("strong",[_._v("链")]),_._v(" 上执行的机制：包括回调函数执行的顺序，及如何提前终止链的执行。")])]),_._v(" "),v("p",[_._v("如果你是在开发扩展插件中使用钩子，你应该能 "),v("strong",[_._v("完全地明白这三点，且尽量不要在钩子内部使用阻塞函数，这会影响系统的吞吐")]),_._v("。")]),_._v(" "),v("h2",{attrs:{id:"回调链"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#回调链"}},[_._v("#")]),_._v(" 回调链")]),_._v(" "),v("p",[_._v("单个 "),v("strong",[_._v("挂载点")]),_._v(" 上可能会存在多个插件都需要关心该事件并执行相应操作，所以每个 "),v("strong",[_._v("挂载点")]),_._v(" 上都可能会存在多个回调函数。")]),_._v(" "),v("p",[_._v("我们称这种由多个回调函数顺序执行所构成的链为 "),v("strong",[_._v("回调链 (Callback Functions Chain)")]),_._v("。")]),_._v(" "),v("p",[v("strong",[_._v("回调链")]),_._v(" 目前按照 "),v("a",{attrs:{href:"https://en.wikipedia.org/wiki/Chain-of-responsibility_pattern",target:"_blank",rel:"noopener noreferrer"}},[_._v("职责链(Chain-of-Responsibility)"),v("OutboundLink")],1),_._v(" 的理念进行实现。为了满足钩子的功能和使用的灵活性，它必须具有以下属性：")]),_._v(" "),v("ul",[v("li",[v("p",[v("strong",[_._v("回调链")]),_._v(" 上的回调函数必须按某种先后顺序执行。")])]),_._v(" "),v("li",[v("p",[v("strong",[_._v("回调链")]),_._v(" 一定会存在一个输入、和输出 (在通知类事件输出则是非必须的，例如 “某客户端已成功登陆”)。")])]),_._v(" "),v("li",[v("p",[v("strong",[_._v("回调链")]),_._v(" 具有传递性，意思是指，链会将输入给链的入参输入给第一个回调函数，第一个回调函数的返回值会传递给第二个回调函数，直到最后一个函数，最后一个函数的返回值则为整个链的返回值。")])]),_._v(" "),v("li",[v("p",[v("strong",[_._v("回调链")]),_._v(" 需要允许其上面的函数 "),v("em",[_._v("提前终止链")]),_._v(" 和 "),v("em",[_._v("忽略本次操作")]),_._v("。")]),_._v(" "),v("ul",[v("li",[v("strong",[_._v("提前终止")]),_._v("：本函数执行完成后，直接终止链的执行。忽略链上后续所有的回调函数。例如：某认证插件认为，此类客户端允许登录后便不需要再检查其他认证插件，所以需要提前终止。")]),_._v(" "),v("li",[v("strong",[_._v("忽略本次操作")]),_._v("：不修改链上的处理结果，直接透传给下一个回调函数。例如：存在多个认证插件的情况下，某认证插件认为，此类客户端不属于其认证范围，所以我不需要修改认证结果，应当忽略本次操作，直接将前一个函数的返回值传递给链上的下一个函数。")])])])]),_._v(" "),v("p",[_._v("由此，我们可以得到一个链的设计简图：")]),_._v(" "),v("p",[v("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/develop_png/zh_CN/advanced/assets/chain_of_responsiblity.png",alt:"chain_of_responsiblity.png"}})]),_._v(" "),v("p",[_._v("该图的含义是指：")]),_._v(" "),v("ol",[v("li",[_._v("链的入参为只读的 "),v("code",[_._v("Args")]),_._v(" 与用于链上的函数修改的参数 "),v("code",[_._v("Acc")])]),_._v(" "),v("li",[_._v("链无论以何种方式终止执行，其返回值均为新的 "),v("code",[_._v("Acc")])]),_._v(" "),v("li",[_._v("图中链上一共注册了三个回调函数；分别为 "),v("code",[_._v("Fun1")]),_._v(" "),v("code",[_._v("Fun2")]),_._v(" "),v("code",[_._v("Fun3")]),_._v(" 并按所表示的顺序执行")]),_._v(" "),v("li",[_._v("回调函数执行顺序，由一个优先级确定，同一优先级的按挂载的先后顺序执行")]),_._v(" "),v("li",[_._v("回调函数通过返回：\n"),v("ul",[v("li",[v("code",[_._v("ok")]),_._v("：忽略本次操作，以只读的 "),v("code",[_._v("Args")]),_._v(" 和上个函数返回的 "),v("code",[_._v("Acc")]),_._v(" 继续链的执行")]),_._v(" "),v("li",[v("code",[_._v("{ok, NewAcc}")]),_._v("：执行了某些操作，修改了 Acc 内容，以只读的 "),v("code",[_._v("Args")]),_._v(" 和新的 "),v("code",[_._v("NewAcc")]),_._v(" 继续链的执行")])])]),_._v(" "),v("li",[_._v("回调函数也可通过返回：\n"),v("ul",[v("li",[v("code",[_._v("stop")]),_._v("：表示终止链的传递，立即返回上个函数的结果 "),v("code",[_._v("Acc")])]),_._v(" "),v("li",[v("code",[_._v("{stop, NewAcc}")]),_._v("：表示终止链的传递，立即返回本次修改的结果 "),v("code",[_._v("NewAcc")])])])])]),_._v(" "),v("p",[_._v("以上为回调链的主要设计理念，它规范了钩子上的回调函数的执行逻辑。")]),_._v(" "),v("p",[_._v("接下来 "),v("a",{attrs:{href:"#hookpoint"}},[_._v("挂载点")]),_._v("，"),v("a",{attrs:{href:"#callback"}},[_._v("回调函数")]),_._v(" 两节中，对于钩子的所有操作都是依赖于 "),v("a",{attrs:{href:"https://github.com/emqx/emqx",target:"_blank",rel:"noopener noreferrer"}},[_._v("emqx"),v("OutboundLink")],1),_._v(" 提供的 Erlang 代码级的 API。他们是整个钩子逻辑实现的基础。如需寻求：")]),_._v(" "),v("ul",[v("li",[_._v("钩子和 HTTP 服务器的应用，参见： "),v("RouterLink",{attrs:{to:"/zh/backend/emqx/advanced/webhook.html"}},[_._v("WebHook")])],1),_._v(" "),v("li",[_._v("钩子与其他语言的应用，参见： "),v("RouterLink",{attrs:{to:"/zh/backend/emqx/advanced/lang.html"}},[_._v("Multipe-Language-Support")])],1)]),_._v(" "),v("h2",{attrs:{id:"挂载点"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#挂载点"}},[_._v("#")]),_._v(" 挂载点")]),_._v(" "),v("p",[_._v("EMQ X 以一个客户端在其生命周期内的关键活动为基础，预置了大量的 "),v("strong",[_._v("挂载点 (HookPoint)")]),_._v("。目前系统中预置的挂载点有：")]),_._v(" "),v("table",[v("thead",[v("tr",[v("th",[_._v("名称")]),_._v(" "),v("th",[_._v("说明")]),_._v(" "),v("th",[_._v("执行时机")])])]),_._v(" "),v("tbody",[v("tr",[v("td",[_._v("client.connect")]),_._v(" "),v("td",[_._v("处理连接报文")]),_._v(" "),v("td",[_._v("服务端收到客户端的连接报文时")])]),_._v(" "),v("tr",[v("td",[_._v("client.connack")]),_._v(" "),v("td",[_._v("下发连接应答")]),_._v(" "),v("td",[_._v("服务端准备下发连接应答报文时")])]),_._v(" "),v("tr",[v("td",[_._v("client.connected")]),_._v(" "),v("td",[_._v("成功接入")]),_._v(" "),v("td",[_._v("客户端认证完成并成功接入系统后")])]),_._v(" "),v("tr",[v("td",[_._v("client.disconnected")]),_._v(" "),v("td",[_._v("连接断开")]),_._v(" "),v("td",[_._v("客户端连接层在准备关闭时")])]),_._v(" "),v("tr",[v("td",[_._v("client.authenticate")]),_._v(" "),v("td",[_._v("连接认证")]),_._v(" "),v("td",[_._v("执行完 "),v("code",[_._v("client.connect")]),_._v(" 后")])]),_._v(" "),v("tr",[v("td",[_._v("client.check_acl")]),_._v(" "),v("td",[_._v("ACL 鉴权")]),_._v(" "),v("td",[_._v("执行 "),v("code",[_._v("发布/订阅")]),_._v(" 操作前")])]),_._v(" "),v("tr",[v("td",[_._v("client.subscribe")]),_._v(" "),v("td",[_._v("订阅主题")]),_._v(" "),v("td",[_._v("收到订阅报文后，执行 "),v("code",[_._v("client.check_acl")]),_._v(" 鉴权前")])]),_._v(" "),v("tr",[v("td",[_._v("client.unsubscribe")]),_._v(" "),v("td",[_._v("取消订阅")]),_._v(" "),v("td",[_._v("收到取消订阅报文后")])]),_._v(" "),v("tr",[v("td",[_._v("session.created")]),_._v(" "),v("td",[_._v("会话创建")]),_._v(" "),v("td",[v("code",[_._v("client.connected")]),_._v(" 执行完成，且创建新的会话后")])]),_._v(" "),v("tr",[v("td",[_._v("session.subscribed")]),_._v(" "),v("td",[_._v("会话订阅主题")]),_._v(" "),v("td",[_._v("完成订阅操作后")])]),_._v(" "),v("tr",[v("td",[_._v("session.unsubscribed")]),_._v(" "),v("td",[_._v("会话取消订阅")]),_._v(" "),v("td",[_._v("完成取消订阅操作后")])]),_._v(" "),v("tr",[v("td",[_._v("session.resumed")]),_._v(" "),v("td",[_._v("会话恢复")]),_._v(" "),v("td",[v("code",[_._v("client.connected")]),_._v(" 执行完成，且成功恢复旧的会话信息后")])]),_._v(" "),v("tr",[v("td",[_._v("session.discarded")]),_._v(" "),v("td",[_._v("会话被移除")]),_._v(" "),v("td",[_._v("会话由于被"),v("strong",[_._v("移除")]),_._v("而终止后")])]),_._v(" "),v("tr",[v("td",[_._v("session.takeovered")]),_._v(" "),v("td",[_._v("会话被接管")]),_._v(" "),v("td",[_._v("会话由于被"),v("strong",[_._v("接管")]),_._v("而终止后")])]),_._v(" "),v("tr",[v("td",[_._v("session.terminated")]),_._v(" "),v("td",[_._v("会话终止")]),_._v(" "),v("td",[_._v("会话由于其他原因被终止后")])]),_._v(" "),v("tr",[v("td",[_._v("message.publish")]),_._v(" "),v("td",[_._v("消息发布")]),_._v(" "),v("td",[_._v("服务端在发布（路由）消息前")])]),_._v(" "),v("tr",[v("td",[_._v("message.delivered")]),_._v(" "),v("td",[_._v("消息投递")]),_._v(" "),v("td",[_._v("消息准备投递到客户端前")])]),_._v(" "),v("tr",[v("td",[_._v("message.acked")]),_._v(" "),v("td",[_._v("消息回执")]),_._v(" "),v("td",[_._v("服务端在收到客户端发回的消息 ACK 后")])]),_._v(" "),v("tr",[v("td",[_._v("message.dropped")]),_._v(" "),v("td",[_._v("消息丢弃")]),_._v(" "),v("td",[_._v("发布出的消息被丢弃后")])])])]),_._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[_._v("提示")]),_._v(" "),v("ul",[v("li",[v("p",[v("strong",[_._v("会话被移除")]),_._v(" 是指：当客户端以 "),v("code",[_._v("清除会话")]),_._v(" 的方式登入时，如果服务端中已存在该客户端的会话，那么旧的会话就会被丢弃。")])]),_._v(" "),v("li",[v("p",[v("strong",[_._v("会话被接管")]),_._v(" 是指：当客户端以 "),v("code",[_._v("保留会话")]),_._v(" 的方式登入时，如果服务端中已存在该客户端的会话，那么旧的会话就会被新的连接所接管。")])])])]),_._v(" "),v("h3",{attrs:{id:"挂载与取消挂载"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#挂载与取消挂载"}},[_._v("#")]),_._v(" 挂载与取消挂载")]),_._v(" "),v("p",[_._v("EMQ X 提供了 API 进行钩子的挂载与取消挂载的操作。")]),_._v(" "),v("p",[v("strong",[_._v("挂载")]),_._v("：")]),_._v(" "),v("div",{staticClass:"language-erlang extra-class"},[v("pre",{pre:!0,attrs:{class:"language-erlang"}},[v("code",[v("span",{pre:!0,attrs:{class:"token comment"}},[_._v("%% Name: 钩子的名称（挂载点）如：'client.authenticate'")]),_._v("\n"),v("span",{pre:!0,attrs:{class:"token comment"}},[_._v("%% {Module, Function, Args}: 回调函数的模块、方法、和附加参数")]),_._v("\n"),v("span",{pre:!0,attrs:{class:"token comment"}},[_._v("%% Priority：优先级，整数; 不提供则默认为 0")]),_._v("\n"),v("span",{pre:!0,attrs:{class:"token atom"}},[_._v("emqx")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(":")]),v("span",{pre:!0,attrs:{class:"token function"}},[_._v("hook")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v("(")]),v("span",{pre:!0,attrs:{class:"token variable"}},[_._v("Name")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(",")]),_._v(" "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v("{")]),v("span",{pre:!0,attrs:{class:"token variable"}},[_._v("Module")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(",")]),_._v(" "),v("span",{pre:!0,attrs:{class:"token variable"}},[_._v("Function")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(",")]),_._v(" "),v("span",{pre:!0,attrs:{class:"token variable"}},[_._v("Args")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v("}")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(",")]),_._v(" "),v("span",{pre:!0,attrs:{class:"token variable"}},[_._v("Priority")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(")")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(".")]),_._v("\n")])])]),v("p",[_._v("挂载完成后，回调函数会按优先级从大到小执行，同一优先级按挂载的先后顺序执行。所有官方插件挂载的钩子优先级都为 "),v("code",[_._v("0")]),_._v("。")]),_._v(" "),v("p",[v("strong",[_._v("取消挂载")]),_._v("：")]),_._v(" "),v("div",{staticClass:"language-erlang extra-class"},[v("pre",{pre:!0,attrs:{class:"language-erlang"}},[v("code",[v("span",{pre:!0,attrs:{class:"token comment"}},[_._v("%% Name: 钩子的名称（挂载点）如：'client.authenticate'")]),_._v("\n"),v("span",{pre:!0,attrs:{class:"token comment"}},[_._v("%% {Module, Function}: 回调函数的模块、方法")]),_._v("\n"),v("span",{pre:!0,attrs:{class:"token atom"}},[_._v("emqx")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(":")]),v("span",{pre:!0,attrs:{class:"token function"}},[_._v("unhook")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v("(")]),v("span",{pre:!0,attrs:{class:"token variable"}},[_._v("Name")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(",")]),_._v(" "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v("{")]),v("span",{pre:!0,attrs:{class:"token variable"}},[_._v("Module")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(",")]),_._v(" "),v("span",{pre:!0,attrs:{class:"token variable"}},[_._v("Function")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v("}")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(")")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(".")]),_._v("\n")])])]),v("h2",{attrs:{id:"回调函数"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#回调函数"}},[_._v("#")]),_._v(" 回调函数")]),_._v(" "),v("p",[_._v("回调函数的入参及返回值要求，见下表：")]),_._v(" "),v("p",[_._v("(参数数据结构参见："),v("a",{attrs:{href:"https://github.com/emqx/emqx/blob/master/src/emqx_types.erl",target:"_blank",rel:"noopener noreferrer"}},[_._v("emqx_types.erl"),v("OutboundLink")],1),_._v(")")]),_._v(" "),v("table",[v("thead",[v("tr",[v("th",[_._v("名称")]),_._v(" "),v("th",[_._v("入参")]),_._v(" "),v("th",[_._v("返回")])])]),_._v(" "),v("tbody",[v("tr",[v("td",[_._v("client.connect")]),_._v(" "),v("td",[v("code",[_._v("ConnInfo")]),_._v("：客户端连接层参数"),v("br"),v("code",[_._v("Props")]),_._v("：MQTT v5.0  连接报文的 Properties 属性")]),_._v(" "),v("td",[_._v("新的 "),v("code",[_._v("Props")])])]),_._v(" "),v("tr",[v("td",[_._v("client.connack")]),_._v(" "),v("td",[v("code",[_._v("ConnInfo")]),_._v("：客户端连接层参数 "),v("br"),v("code",[_._v("Rc")]),_._v("：返回码"),v("br"),v("code",[_._v("Props")]),_._v(": MQTT v5.0  连接应答报文的 Properties 属性")]),_._v(" "),v("td",[_._v("新的 "),v("code",[_._v("Props")])])]),_._v(" "),v("tr",[v("td",[_._v("client.connected")]),_._v(" "),v("td",[v("code",[_._v("ClientInfo")]),_._v(":  客户端信息参数"),v("br"),v("code",[_._v("ConnInfo")]),_._v("： 客户端连接层参数")]),_._v(" "),v("td",[_._v("-")])]),_._v(" "),v("tr",[v("td",[_._v("client.disconnected")]),_._v(" "),v("td",[v("code",[_._v("ClientInfo")]),_._v("：客户端信息参数"),v("br"),v("code",[_._v("ConnInfo")]),_._v("：客户端连接层参数"),v("br"),v("code",[_._v("ReasonCode")]),_._v("：错误码")]),_._v(" "),v("td",[_._v("-")])]),_._v(" "),v("tr",[v("td",[_._v("client.authenticate")]),_._v(" "),v("td",[v("code",[_._v("ClientInfo")]),_._v("：客户端信息参数"),v("br"),v("code",[_._v("AuthResult")]),_._v("：认证结果")]),_._v(" "),v("td",[_._v("新的 "),v("code",[_._v("AuthResult")])])]),_._v(" "),v("tr",[v("td",[_._v("client.check_acl")]),_._v(" "),v("td",[v("code",[_._v("ClientInfo")]),_._v("：客户端信息参数"),v("br"),v("code",[_._v("Topic")]),_._v("：发布/订阅的主题"),v("br"),v("code",[_._v("PubSub")]),_._v(":  发布或订阅"),v("br"),v("code",[_._v("ACLResult")]),_._v("：鉴权结果")]),_._v(" "),v("td",[_._v("新的 "),v("code",[_._v("ACLResult")])])]),_._v(" "),v("tr",[v("td",[_._v("client.subscribe")]),_._v(" "),v("td",[v("code",[_._v("ClientInfo")]),_._v("：客户端信息参数"),v("br"),v("code",[_._v("Props")]),_._v("：MQTT v5.0 订阅报文的 Properties 参数"),v("br"),v("code",[_._v("TopicFilters")]),_._v("：需订阅的主题列表")]),_._v(" "),v("td",[_._v("新的 "),v("code",[_._v("TopicFilters")])])]),_._v(" "),v("tr",[v("td",[_._v("client.unsubscribe")]),_._v(" "),v("td",[v("code",[_._v("ClientInfo")]),_._v("：客户端信息参数"),v("br"),v("code",[_._v("Props")]),_._v("：MQTT v5.0 取消订阅报文的 Properties 参数"),v("br"),v("code",[_._v("TopicFilters")]),_._v("：需取消订阅的主题列表")]),_._v(" "),v("td",[_._v("新的 "),v("code",[_._v("TopicFilters")])])]),_._v(" "),v("tr",[v("td",[_._v("session.created")]),_._v(" "),v("td",[v("code",[_._v("ClientInfo")]),_._v("：客户端信息参数"),v("br"),v("code",[_._v("SessInfo")]),_._v("：会话信息")]),_._v(" "),v("td",[_._v("-")])]),_._v(" "),v("tr",[v("td",[_._v("session.subscribed")]),_._v(" "),v("td",[v("code",[_._v("ClientInfo")]),_._v("：客户端信息参数"),v("br"),v("code",[_._v("Topic")]),_._v("：订阅的主题"),v("br"),v("code",[_._v("SubOpts")]),_._v("：订阅操作的配置选项")]),_._v(" "),v("td",[_._v("-")])]),_._v(" "),v("tr",[v("td",[_._v("session.unsubscribed")]),_._v(" "),v("td",[v("code",[_._v("ClientInfo")]),_._v("：客户端信息参数"),v("br"),v("code",[_._v("Topic")]),_._v("：取消订阅的主题"),v("br"),v("code",[_._v("SubOpts")]),_._v("：取消订阅操作的配置选项")]),_._v(" "),v("td",[_._v("-")])]),_._v(" "),v("tr",[v("td",[_._v("session.resumed")]),_._v(" "),v("td",[v("code",[_._v("ClientInfo")]),_._v("：客户端信息参数"),v("br"),v("code",[_._v("SessInfo")]),_._v("：会话信息")]),_._v(" "),v("td",[_._v("-")])]),_._v(" "),v("tr",[v("td",[_._v("session.discarded")]),_._v(" "),v("td",[v("code",[_._v("ClientInfo")]),_._v("：客户端信息参数"),v("br"),v("code",[_._v("SessInfo")]),_._v("：会话信息")]),_._v(" "),v("td",[_._v("-")])]),_._v(" "),v("tr",[v("td",[_._v("session.takeovered")]),_._v(" "),v("td",[v("code",[_._v("ClientInfo")]),_._v("：客户端信息参数"),v("br"),v("code",[_._v("SessInfo")]),_._v("：会话信息")]),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td",[_._v("session.terminated")]),_._v(" "),v("td",[v("code",[_._v("ClientInfo")]),_._v("：客户端信息参数"),v("br"),v("code",[_._v("Reason")]),_._v("：终止原因 "),v("br"),v("code",[_._v("SessInfo")]),_._v("：会话信息")]),_._v(" "),v("td",[_._v("-")])]),_._v(" "),v("tr",[v("td",[_._v("message.publish")]),_._v(" "),v("td",[v("code",[_._v("Message")]),_._v("：消息对象")]),_._v(" "),v("td",[_._v("新的 "),v("code",[_._v("Message")])])]),_._v(" "),v("tr",[v("td",[_._v("message.delivered")]),_._v(" "),v("td",[v("code",[_._v("ClientInfo")]),_._v("：客户端信息参数"),v("br"),v("code",[_._v("Message")]),_._v("：消息对象")]),_._v(" "),v("td",[_._v("新的 "),v("code",[_._v("Message")])])]),_._v(" "),v("tr",[v("td",[_._v("message.acked")]),_._v(" "),v("td",[v("code",[_._v("ClientInfo")]),_._v("：客户端信息参数"),v("br"),v("code",[_._v("Message")]),_._v("：消息对象")]),_._v(" "),v("td",[_._v("-")])]),_._v(" "),v("tr",[v("td",[_._v("message.dropped")]),_._v(" "),v("td",[v("code",[_._v("Message")]),_._v("：消息对象"),v("br"),v("code",[_._v("By")]),_._v("：被谁丢弃"),v("br"),v("code",[_._v("Reason")]),_._v("：丢弃原因")]),_._v(" "),v("td",[_._v("-")])])])]),_._v(" "),v("p",[_._v("具体对于这些钩子的应用，参见："),v("a",{attrs:{href:"https://github.com/emqx/emqx-plugin-template",target:"_blank",rel:"noopener noreferrer"}},[_._v("emqx_plugin_template"),v("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=s.exports}}]);