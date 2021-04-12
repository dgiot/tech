(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{561:function(t,_,v){"use strict";v.r(_);var e=v(8),s=Object(e.a)({},(function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"webhook"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#webhook"}},[t._v("#")]),t._v(" WebHook")]),t._v(" "),v("p",[t._v("WebHook 是由 "),v("a",{attrs:{href:"https://github.com/emqx/emqx-web-hook",target:"_blank",rel:"noopener noreferrer"}},[t._v("emqx_web_hook"),v("OutboundLink")],1),t._v(" 插件提供的 "),v("strong",[t._v("将 EMQ X 中的钩子事件通知到某个 Web 服务")]),t._v(" 的功能。")]),t._v(" "),v("p",[t._v("WebHook 的内部实现是基于 "),v("RouterLink",{attrs:{to:"/zh/backend/emqx/advanced/hooks.html"}},[t._v("钩子")]),t._v("，但它更靠近顶层一些。它通过在钩子上的挂载回调函数，获取到 EMQ X 中的各种事件，并转发至 emqx_web_hook 中配置的 Web 服务器。")],1),t._v(" "),v("p",[t._v("以 客户端成功接入(client.connected) 事件为例，其事件的传递流程如下：")]),t._v(" "),v("div",{staticClass:"language-bash extra-class"},[v("pre",{pre:!0,attrs:{class:"language-bash"}},[v("code",[t._v("    Client      "),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("    EMQ X     "),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  emqx_web_hook "),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("   HTTP       +------------+\n  "),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">|")]),t._v(" - - - - - - -"),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" - - - - - - - -"),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("  "),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" Web Server "),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n                "),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("    Broker    "),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("                "),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  Request     +------------+\n")])])]),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),v("p",[t._v("WebHook 对于事件的处理是单向的，"),v("strong",[t._v("它仅支持将 EMQ X 中的事件推送给 Web 服务，并不关心 Web 服务的返回")]),t._v("。\n借助 Webhook 可以完成设备在线、上下线记录，订阅与消息存储、消息送达确认等诸多业务。")])]),t._v(" "),v("h2",{attrs:{id:"配置项"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#配置项"}},[t._v("#")]),t._v(" 配置项")]),t._v(" "),v("p",[t._v("Webhook 的配置文件位于 "),v("code",[t._v("etc/plugins/emqx_web_hook.conf")]),t._v("：")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("配置项")]),t._v(" "),v("th",[t._v("类型")]),t._v(" "),v("th",[t._v("可取值")]),t._v(" "),v("th",[t._v("默认值")]),t._v(" "),v("th",[t._v("说明")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("api.url")]),t._v(" "),v("td",[t._v("string")]),t._v(" "),v("td",[t._v("-")]),t._v(" "),v("td",[t._v("http://127.0.0.1:8080")]),t._v(" "),v("td",[t._v("事件需要转发的目的服务器地址")])]),t._v(" "),v("tr",[v("td",[t._v("encode_payload")]),t._v(" "),v("td",[t._v("enum")]),t._v(" "),v("td",[v("code",[t._v("base64")]),t._v(", "),v("code",[t._v("base62")])]),t._v(" "),v("td",[t._v("undefined")]),t._v(" "),v("td",[t._v("对"),v("strong",[t._v("消息类事件中的 Payload 字段")]),t._v("进行编码，注释或其他则表示不编码")])])])]),t._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),v("p",[t._v("当消息内容是不可见字符（如二进制数据）时，为了能够在 HTTP 协议中传输，使用 encode_payload 是十分有用的。")])]),t._v(" "),v("h2",{attrs:{id:"触发规则"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#触发规则"}},[t._v("#")]),t._v(" 触发规则")]),t._v(" "),v("p",[t._v("在 "),v("code",[t._v("etc/plugins/emqx_web_hooks.conf")]),t._v(" 可配置触发规则，其配置的格式如下：")]),t._v(" "),v("div",{staticClass:"language-bash extra-class"},[v("pre",{pre:!0,attrs:{class:"language-bash"}},[v("code",[v("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## 格式示例")]),t._v("\nweb.hook.rule."),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Event"),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("."),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Number"),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Rule"),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),v("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## 示例值")]),t._v("\nweb.hook.rule.message.publish.1 "),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),v("span",{pre:!0,attrs:{class:"token string"}},[t._v('"action"')]),v("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token string"}},[t._v('"on_message_publish"')]),t._v(", "),v("span",{pre:!0,attrs:{class:"token string"}},[t._v('"topic"')]),v("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token string"}},[t._v('"a/b/c"')]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nweb.hook.rule.message.publish.2 "),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),v("span",{pre:!0,attrs:{class:"token string"}},[t._v('"action"')]),v("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token string"}},[t._v('"on_message_publish"')]),t._v(", "),v("span",{pre:!0,attrs:{class:"token string"}},[t._v('"topic"')]),v("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token string"}},[t._v('"foo/#"')]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),v("h3",{attrs:{id:"event-触发事件"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#event-触发事件"}},[t._v("#")]),t._v(" Event 触发事件")]),t._v(" "),v("p",[t._v("目前支持以下事件：")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("名称")]),t._v(" "),v("th",[t._v("说明")]),t._v(" "),v("th",[t._v("执行时机")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("client.connect")]),t._v(" "),v("td",[t._v("处理连接报文")]),t._v(" "),v("td",[t._v("服务端收到客户端的连接报文时")])]),t._v(" "),v("tr",[v("td",[t._v("client.connack")]),t._v(" "),v("td",[t._v("下发连接应答")]),t._v(" "),v("td",[t._v("服务端准备下发连接应答报文时")])]),t._v(" "),v("tr",[v("td",[t._v("client.connected")]),t._v(" "),v("td",[t._v("成功接入")]),t._v(" "),v("td",[t._v("客户端认证完成并成功接入系统后")])]),t._v(" "),v("tr",[v("td",[t._v("client.disconnected")]),t._v(" "),v("td",[t._v("连接断开")]),t._v(" "),v("td",[t._v("客户端连接层在准备关闭时")])]),t._v(" "),v("tr",[v("td",[t._v("client.subscribe")]),t._v(" "),v("td",[t._v("订阅主题")]),t._v(" "),v("td",[t._v("收到订阅报文后，执行 "),v("code",[t._v("client.check_acl")]),t._v(" 鉴权前")])]),t._v(" "),v("tr",[v("td",[t._v("client.unsubscribe")]),t._v(" "),v("td",[t._v("取消订阅")]),t._v(" "),v("td",[t._v("收到取消订阅报文后")])]),t._v(" "),v("tr",[v("td",[t._v("session.subscribed")]),t._v(" "),v("td",[t._v("会话订阅主题")]),t._v(" "),v("td",[t._v("完成订阅操作后")])]),t._v(" "),v("tr",[v("td",[t._v("session.unsubscribed")]),t._v(" "),v("td",[t._v("会话取消订阅")]),t._v(" "),v("td",[t._v("完成取消订阅操作后")])]),t._v(" "),v("tr",[v("td",[t._v("message.publish")]),t._v(" "),v("td",[t._v("消息发布")]),t._v(" "),v("td",[t._v("服务端在发布（路由）消息前")])]),t._v(" "),v("tr",[v("td",[t._v("message.delivered")]),t._v(" "),v("td",[t._v("消息投递")]),t._v(" "),v("td",[t._v("消息准备投递到客户端前")])]),t._v(" "),v("tr",[v("td",[t._v("message.acked")]),t._v(" "),v("td",[t._v("消息回执")]),t._v(" "),v("td",[t._v("服务端在收到客户端发回的消息 ACK 后")])]),t._v(" "),v("tr",[v("td",[t._v("message.dropped")]),t._v(" "),v("td",[t._v("消息丢弃")]),t._v(" "),v("td",[t._v("发布出的消息被丢弃后")])])])]),t._v(" "),v("h3",{attrs:{id:"number"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#number"}},[t._v("#")]),t._v(" Number")]),t._v(" "),v("p",[t._v("同一个事件可以配置多个触发规则，配置相同的事件应当依次递增。")]),t._v(" "),v("h3",{attrs:{id:"rule"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#rule"}},[t._v("#")]),t._v(" Rule")]),t._v(" "),v("p",[t._v("触发规则，其值为一个 JSON 字符串，其中可用的 Key 有：")]),t._v(" "),v("ul",[v("li",[t._v("action：字符串，取固定值")]),t._v(" "),v("li",[t._v("topic：字符串，表示一个主题过滤器，操作的主题只有与该主题匹配才能触发事件的转发")])]),t._v(" "),v("p",[t._v("例如，我们只将与 "),v("code",[t._v("a/b/c")]),t._v(" 和 "),v("code",[t._v("foo/#")]),t._v(" 主题匹配的消息转发到 Web 服务器上，其配置应该为：")]),t._v(" "),v("div",{staticClass:"language-bash extra-class"},[v("pre",{pre:!0,attrs:{class:"language-bash"}},[v("code",[t._v("web.hook.rule.message.publish.1 "),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),v("span",{pre:!0,attrs:{class:"token string"}},[t._v('"action"')]),v("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token string"}},[t._v('"on_message_publish"')]),t._v(", "),v("span",{pre:!0,attrs:{class:"token string"}},[t._v('"topic"')]),v("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token string"}},[t._v('"a/b/c"')]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nweb.hook.rule.message.publish.2 "),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),v("span",{pre:!0,attrs:{class:"token string"}},[t._v('"action"')]),v("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token string"}},[t._v('"on_message_publish"')]),t._v(", "),v("span",{pre:!0,attrs:{class:"token string"}},[t._v('"topic"')]),v("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token string"}},[t._v('"foo/#"')]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),v("p",[t._v("这样 Webhook 仅会转发与 "),v("code",[t._v("a/b/c")]),t._v(" 和 "),v("code",[t._v("foo/#")]),t._v(" 主题匹配的消息，例如 "),v("code",[t._v("foo/bar")]),t._v(" 等，而不是转发 "),v("code",[t._v("a/b/d")]),t._v(" 或 "),v("code",[t._v("fo/bar")]),t._v("。")]),t._v(" "),v("h2",{attrs:{id:"webhook-事件参数"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#webhook-事件参数"}},[t._v("#")]),t._v(" Webhook 事件参数")]),t._v(" "),v("p",[t._v("事件触发时 Webhook 会按照配置将每个事件组成一个 HTTP 请求发送到 "),v("code",[t._v("api.url")]),t._v(" 所配置的 Web 服务器上。其请求格式为：")]),t._v(" "),v("div",{staticClass:"language-bash extra-class"},[v("pre",{pre:!0,attrs:{class:"language-bash"}},[v("code",[t._v("URL: "),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("api.url"),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("      "),v("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 来自于配置中的 `api.url` 字段")]),t._v("\nMethod: POST        "),v("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 固定为 POST 方法")]),t._v("\n\nBody: "),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("JSON"),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("        "),v("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Body 为 JSON 格式字符串")]),t._v("\n")])])]),v("p",[t._v("对于不同的事件，请求 Body 体内容有所不同，下表列举了各个事件中 Body 的参数列表：")]),t._v(" "),v("p",[v("strong",[t._v("client.connect")])]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("Key")]),t._v(" "),v("th",[t._v("类型")]),t._v(" "),v("th",[t._v("说明")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("action")]),t._v(" "),v("td",[t._v("string")]),t._v(" "),v("td",[t._v("事件名称"),v("br"),t._v('固定为："client_connect"')])]),t._v(" "),v("tr",[v("td",[t._v("clientid")]),t._v(" "),v("td",[t._v("string")]),t._v(" "),v("td",[t._v("客户端 ClientId")])]),t._v(" "),v("tr",[v("td",[t._v("username")]),t._v(" "),v("td",[t._v("string")]),t._v(" "),v("td",[t._v('客户端 Username，不存在时该值为 "undefined"')])]),t._v(" "),v("tr",[v("td",[t._v("ipaddress")]),t._v(" "),v("td",[t._v("string")]),t._v(" "),v("td",[t._v("客户端源 IP 地址")])]),t._v(" "),v("tr",[v("td",[t._v("keepalive")]),t._v(" "),v("td",[t._v("integer")]),t._v(" "),v("td",[t._v("客户端申请的心跳保活时间")])]),t._v(" "),v("tr",[v("td",[t._v("proto_ver")]),t._v(" "),v("td",[t._v("integer")]),t._v(" "),v("td",[t._v("协议版本号")])])])]),t._v(" "),v("p",[v("strong",[t._v("client.connack")])]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("Key")]),t._v(" "),v("th",[t._v("类型")]),t._v(" "),v("th",[t._v("说明")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("action")]),t._v(" "),v("td",[t._v("string")]),t._v(" "),v("td",[t._v("事件名称"),v("br"),t._v('固定为："client_connack"')])]),t._v(" "),v("tr",[v("td",[t._v("clientid")]),t._v(" "),v("td",[t._v("string")]),t._v(" "),v("td",[t._v("客户端 ClientId")])]),t._v(" "),v("tr",[v("td",[t._v("username")]),t._v(" "),v("td",[t._v("string")]),t._v(" "),v("td",[t._v('客户端 Username，不存在时该值为 "undefined"')])]),t._v(" "),v("tr",[v("td",[t._v("ipaddress")]),t._v(" "),v("td",[t._v("string")]),t._v(" "),v("td",[t._v("客户端源 IP 地址")])]),t._v(" "),v("tr",[v("td",[t._v("keepalive")]),t._v(" "),v("td",[t._v("integer")]),t._v(" "),v("td",[t._v("客户端申请的心跳保活时间")])]),t._v(" "),v("tr",[v("td",[t._v("proto_ver")]),t._v(" "),v("td",[t._v("integer")]),t._v(" "),v("td",[t._v("协议版本号")])]),t._v(" "),v("tr",[v("td",[t._v("conn_ack")]),t._v(" "),v("td",[t._v("string")]),t._v(" "),v("td",[t._v('"success" 表示成功，其它表示失败的原因')])])])]),t._v(" "),v("p",[v("strong",[t._v("client.connected")])]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("Key")]),t._v(" "),v("th",[t._v("类型")]),t._v(" "),v("th",[t._v("说明")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("action")]),t._v(" "),v("td",[t._v("string")]),t._v(" "),v("td",[t._v("事件名称"),v("br"),t._v('固定为："client_connected"')])]),t._v(" "),v("tr",[v("td",[t._v("clientid")]),t._v(" "),v("td",[t._v("string")]),t._v(" "),v("td",[t._v("客户端 ClientId")])]),t._v(" "),v("tr",[v("td",[t._v("username")]),t._v(" "),v("td",[t._v("string")]),t._v(" "),v("td",[t._v('客户端 Username，不存在时该值为 "undefined"')])]),t._v(" "),v("tr",[v("td",[t._v("ipaddress")]),t._v(" "),v("td",[t._v("string")]),t._v(" "),v("td",[t._v("客户端源 IP 地址")])]),t._v(" "),v("tr",[v("td",[t._v("keepalive")]),t._v(" "),v("td",[t._v("integer")]),t._v(" "),v("td",[t._v("客户端申请的心跳保活时间")])]),t._v(" "),v("tr",[v("td",[t._v("proto_ver")]),t._v(" "),v("td",[t._v("integer")]),t._v(" "),v("td",[t._v("协议版本号")])]),t._v(" "),v("tr",[v("td",[t._v("connected_at")]),t._v(" "),v("td",[t._v("integer")]),t._v(" "),v("td",[t._v("时间戳(秒)")])])])]),t._v(" "),v("p",[v("strong",[t._v("client.disconnected")])]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("Key")]),t._v(" "),v("th",[t._v("类型")]),t._v(" "),v("th",[t._v("说明")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("action")]),t._v(" "),v("td",[t._v("string")]),t._v(" "),v("td",[t._v("事件名称"),v("br"),t._v('固定为："client_disconnected"')])]),t._v(" "),v("tr",[v("td",[t._v("clientid")]),t._v(" "),v("td",[t._v("string")]),t._v(" "),v("td",[t._v("客户端 ClientId")])]),t._v(" "),v("tr",[v("td",[t._v("username")]),t._v(" "),v("td",[t._v("string")]),t._v(" "),v("td",[t._v('客户端 Username，不存在时该值为 "undefined"')])]),t._v(" "),v("tr",[v("td",[t._v("reason")]),t._v(" "),v("td",[t._v("string")]),t._v(" "),v("td",[t._v("错误原因")])])])]),t._v(" "),v("p",[v("strong",[t._v("client.subscribe")])]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("Key")]),t._v(" "),v("th",[t._v("类型")]),t._v(" "),v("th",[t._v("说明")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("action")]),t._v(" "),v("td",[t._v("string")]),t._v(" "),v("td",[t._v("事件名称"),v("br"),t._v('固定为："client_subscribe"')])]),t._v(" "),v("tr",[v("td",[t._v("clientid")]),t._v(" "),v("td",[t._v("string")]),t._v(" "),v("td",[t._v("客户端 ClientId")])]),t._v(" "),v("tr",[v("td",[t._v("username")]),t._v(" "),v("td",[t._v("string")]),t._v(" "),v("td",[t._v('客户端 Username，不存在时该值为 "undefined"')])]),t._v(" "),v("tr",[v("td",[t._v("topic")]),t._v(" "),v("td",[t._v("string")]),t._v(" "),v("td",[t._v("将订阅的主题")])]),t._v(" "),v("tr",[v("td",[t._v("opts")]),t._v(" "),v("td",[t._v("json")]),t._v(" "),v("td",[t._v("订阅参数")])])])]),t._v(" "),v("p",[t._v("opts 包含")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("Key")]),t._v(" "),v("th",[t._v("类型")]),t._v(" "),v("th",[t._v("说明")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("qos")]),t._v(" "),v("td",[t._v("enum")]),t._v(" "),v("td",[t._v("QoS 等级，可取 "),v("code",[t._v("0")]),t._v(" "),v("code",[t._v("1")]),t._v(" "),v("code",[t._v("2")])])])])]),t._v(" "),v("p",[v("strong",[t._v("client.unsubscribe")])]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("Key")]),t._v(" "),v("th",[t._v("类型")]),t._v(" "),v("th",[t._v("说明")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("action")]),t._v(" "),v("td",[t._v("string")]),t._v(" "),v("td",[t._v("事件名称"),v("br"),t._v('固定为："client_unsubscribe"')])]),t._v(" "),v("tr",[v("td",[t._v("clientid")]),t._v(" "),v("td",[t._v("string")]),t._v(" "),v("td",[t._v("客户端 ClientId")])]),t._v(" "),v("tr",[v("td",[t._v("username")]),t._v(" "),v("td",[t._v("string")]),t._v(" "),v("td",[t._v('客户端 Username，不存在时该值为 "undefined"')])]),t._v(" "),v("tr",[v("td",[t._v("topic")]),t._v(" "),v("td",[t._v("string")]),t._v(" "),v("td",[t._v("取消订阅的主题")])])])]),t._v(" "),v("p",[v("strong",[t._v("session.subscribed")]),t._v("：同 "),v("code",[t._v("client.subscribe")]),t._v("，action 为 "),v("code",[t._v("session_subscribed")])]),t._v(" "),v("p",[v("strong",[t._v("session.unsubscribed")]),t._v("：同 "),v("code",[t._v("client.unsubscribe")]),t._v("，action 为 "),v("code",[t._v("session_unsubscribe")])]),t._v(" "),v("p",[v("strong",[t._v("session.terminated")]),t._v("： 同 "),v("code",[t._v("client.disconnected")]),t._v("，action 为 "),v("code",[t._v("session_terminated")])]),t._v(" "),v("p",[v("strong",[t._v("message.publish")])]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("Key")]),t._v(" "),v("th",[t._v("类型")]),t._v(" "),v("th",[t._v("说明")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("action")]),t._v(" "),v("td",[t._v("string")]),t._v(" "),v("td",[t._v("事件名称"),v("br"),t._v('固定为："message_publish"')])]),t._v(" "),v("tr",[v("td",[t._v("from_client_id")]),t._v(" "),v("td",[t._v("string")]),t._v(" "),v("td",[t._v("发布端 ClientId")])]),t._v(" "),v("tr",[v("td",[t._v("from_username")]),t._v(" "),v("td",[t._v("string")]),t._v(" "),v("td",[t._v('发布端 Username，不存在时该值为 "undefined"')])]),t._v(" "),v("tr",[v("td",[t._v("topic")]),t._v(" "),v("td",[t._v("string")]),t._v(" "),v("td",[t._v("取消订阅的主题")])]),t._v(" "),v("tr",[v("td",[t._v("qos")]),t._v(" "),v("td",[t._v("enum")]),t._v(" "),v("td",[t._v("QoS 等级，可取 "),v("code",[t._v("0")]),t._v(" "),v("code",[t._v("1")]),t._v(" "),v("code",[t._v("2")])])]),t._v(" "),v("tr",[v("td",[t._v("retain")]),t._v(" "),v("td",[t._v("bool")]),t._v(" "),v("td",[t._v("是否为 Retain 消息")])]),t._v(" "),v("tr",[v("td",[t._v("payload")]),t._v(" "),v("td",[t._v("string")]),t._v(" "),v("td",[t._v("消息 Payload")])]),t._v(" "),v("tr",[v("td",[t._v("ts")]),t._v(" "),v("td",[t._v("integer")]),t._v(" "),v("td",[t._v("消息的时间戳(毫秒)")])])])]),t._v(" "),v("p",[v("strong",[t._v("message.delivered")])]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("Key")]),t._v(" "),v("th",[t._v("类型")]),t._v(" "),v("th",[t._v("说明")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("action")]),t._v(" "),v("td",[t._v("string")]),t._v(" "),v("td",[t._v("事件名称"),v("br"),t._v('固定为："message_delivered"')])]),t._v(" "),v("tr",[v("td",[t._v("clientid")]),t._v(" "),v("td",[t._v("string")]),t._v(" "),v("td",[t._v("接收端 ClientId")])]),t._v(" "),v("tr",[v("td",[t._v("username")]),t._v(" "),v("td",[t._v("string")]),t._v(" "),v("td",[t._v('接收端 Username，不存在时该值为 "undefined"')])]),t._v(" "),v("tr",[v("td",[t._v("from_client_id")]),t._v(" "),v("td",[t._v("string")]),t._v(" "),v("td",[t._v("发布端 ClientId")])]),t._v(" "),v("tr",[v("td",[t._v("from_username")]),t._v(" "),v("td",[t._v("string")]),t._v(" "),v("td",[t._v('发布端 Username，不存在时该值为 "undefined"')])]),t._v(" "),v("tr",[v("td",[t._v("topic")]),t._v(" "),v("td",[t._v("string")]),t._v(" "),v("td",[t._v("取消订阅的主题")])]),t._v(" "),v("tr",[v("td",[t._v("qos")]),t._v(" "),v("td",[t._v("enum")]),t._v(" "),v("td",[t._v("QoS 等级，可取 "),v("code",[t._v("0")]),t._v(" "),v("code",[t._v("1")]),t._v(" "),v("code",[t._v("2")])])]),t._v(" "),v("tr",[v("td",[t._v("retain")]),t._v(" "),v("td",[t._v("bool")]),t._v(" "),v("td",[t._v("是否为 Retain 消息")])]),t._v(" "),v("tr",[v("td",[t._v("payload")]),t._v(" "),v("td",[t._v("string")]),t._v(" "),v("td",[t._v("消息 Payload")])]),t._v(" "),v("tr",[v("td",[t._v("ts")]),t._v(" "),v("td",[t._v("integer")]),t._v(" "),v("td",[t._v("消息时间戳(毫秒)")])])])]),t._v(" "),v("p",[v("strong",[t._v("message.acked")])]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("Key")]),t._v(" "),v("th",[t._v("类型")]),t._v(" "),v("th",[t._v("说明")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("action")]),t._v(" "),v("td",[t._v("string")]),t._v(" "),v("td",[t._v("事件名称"),v("br"),t._v('固定为："message_acked"')])]),t._v(" "),v("tr",[v("td",[t._v("clientid")]),t._v(" "),v("td",[t._v("string")]),t._v(" "),v("td",[t._v("接收端 ClientId")])]),t._v(" "),v("tr",[v("td",[t._v("from_client_id")]),t._v(" "),v("td",[t._v("string")]),t._v(" "),v("td",[t._v("发布端 ClientId")])]),t._v(" "),v("tr",[v("td",[t._v("from_username")]),t._v(" "),v("td",[t._v("string")]),t._v(" "),v("td",[t._v('发布端 Username，不存在时该值为 "undefined"')])]),t._v(" "),v("tr",[v("td",[t._v("topic")]),t._v(" "),v("td",[t._v("string")]),t._v(" "),v("td",[t._v("取消订阅的主题")])]),t._v(" "),v("tr",[v("td",[t._v("qos")]),t._v(" "),v("td",[t._v("enum")]),t._v(" "),v("td",[t._v("QoS 等级，可取 "),v("code",[t._v("0")]),t._v(" "),v("code",[t._v("1")]),t._v(" "),v("code",[t._v("2")])])]),t._v(" "),v("tr",[v("td",[t._v("retain")]),t._v(" "),v("td",[t._v("bool")]),t._v(" "),v("td",[t._v("是否为 Retain 消息")])]),t._v(" "),v("tr",[v("td",[t._v("payload")]),t._v(" "),v("td",[t._v("string")]),t._v(" "),v("td",[t._v("消息 Payload")])]),t._v(" "),v("tr",[v("td",[t._v("ts")]),t._v(" "),v("td",[t._v("integer")]),t._v(" "),v("td",[t._v("消息时间戳(毫秒)")])])])])])}),[],!1,null,null,null);_.default=s.exports}}]);