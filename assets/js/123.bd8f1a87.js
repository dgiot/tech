(window.webpackJsonp=window.webpackJsonp||[]).push([[123],{589:function(a,t,e){"use strict";e.r(t);var s=e(42),o=Object(s.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"coap-协议网关"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#coap-协议网关"}},[a._v("#")]),a._v(" CoAP 协议网关")]),a._v(" "),e("p",[a._v("CoAP 协议网关为 EMQ X 提供了 CoAP 协议的接入能力。它允许符合某种定义的 CoAP 消息格式向 EMQ X 执行发布，订阅，和接收消息等操作。")]),a._v(" "),e("h2",{attrs:{id:"创建模块"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#创建模块"}},[a._v("#")]),a._v(" 创建模块")]),a._v(" "),e("p",[a._v("打开 "),e("a",{attrs:{href:"http://127.0.0.1:18083/#/modules",target:"_blank",rel:"noopener noreferrer"}},[a._v("EMQ X Dashboard"),e("OutboundLink")],1),a._v("，点击左侧的 “模块” 选项卡，选择添加：")]),a._v(" "),e("p",[e("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/develop_png/zh_CN/modules/assets/modules.png",alt:"modules.png"}})]),a._v(" "),e("p",[a._v("点击 “选择”，然后选择 “CoAP 接入网关”：")]),a._v(" "),e("p",[e("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/develop_png/zh_CN/modules/assets/coap_add.jpg",alt:"coap_add.jpg"}})]),a._v(" "),e("p",[a._v("配置相关基础参数：")]),a._v(" "),e("p",[e("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/develop_png/zh_CN/modules/assets/coap_conf1.jpg",alt:"coap_conf1.jpg"}})]),a._v(" "),e("p",[a._v("添加监听端口：")]),a._v(" "),e("p",[e("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/develop_png/zh_CN/modules/assets/coap_conf2.jpg",alt:"coap_conf2.jpg"}})]),a._v(" "),e("p",[a._v("配置监听参数：")]),a._v(" "),e("p",[e("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/develop_png/zh_CN/modules/assets/coap_conf3.jpg",alt:"coap_conf3.jpg"}})]),a._v(" "),e("p",[a._v("点击 “确定” 完成监听器的配置，然后点击 “添加” 完成模块的创建：")]),a._v(" "),e("p",[e("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/develop_png/zh_CN/modules/assets/coap_conf4.jpg",alt:"coap_conf4.jpg"}})]),a._v(" "),e("h2",{attrs:{id:"使用示例"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用示例"}},[a._v("#")]),a._v(" 使用示例")]),a._v(" "),e("h3",{attrs:{id:"客户端"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#客户端"}},[a._v("#")]),a._v(" 客户端")]),a._v(" "),e("p",[e("a",{attrs:{href:"http://github.com/obgm/libcoap",target:"_blank",rel:"noopener noreferrer"}},[a._v("libcoap"),e("OutboundLink")],1),a._v(" 是一个非常易用的 CoAP 客户端库，此处我们使用它作为 CoAP 客户端来测试 EMQ X CoAP 接入网关的功能。")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("git clone http://github.com/obgm/libcoap\ncd libcoap\n./autogen.sh\n./configure --enable-documentation=no --enable-tests=no\nmake\n")])])]),e("h3",{attrs:{id:"publish-示例"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#publish-示例"}},[a._v("#")]),a._v(" PUBLISH 示例")]),a._v(" "),e("p",[a._v("使用 "),e("code",[a._v("libcoap")]),a._v(" 发布一条消息：")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("libcoap/examples/coap-client -m put -e "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("1234")]),a._v("  "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"coap://127.0.0.1/mqtt/topic1?c=client1&u=tom&p=secret"')]),a._v("\n")])])]),e("ul",[e("li",[a._v('主题名称为："topic1"  (不是 "/topic1")')]),a._v(" "),e("li",[a._v('Client ID 为："client1"')]),a._v(" "),e("li",[a._v('用户名为："tom"')]),a._v(" "),e("li",[a._v('密码为："secret"')]),a._v(" "),e("li",[a._v('Payload 为："1234"')])]),a._v(" "),e("h3",{attrs:{id:"subscribe-示例"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#subscribe-示例"}},[a._v("#")]),a._v(" SUBSCRIBE 示例")]),a._v(" "),e("p",[a._v("使用 "),e("code",[a._v("libcoap")]),a._v(" 订阅一个主题：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('libcoap/examples/coap-client -m get -s 10 "coap://127.0.0.1/mqtt/topic1?c=client1&u=tom&p=secret"\n')])])]),e("ul",[e("li",[a._v('主题名称为："topic1"  (不是 "/topic1")')]),a._v(" "),e("li",[a._v('Client ID 为："client1"')]),a._v(" "),e("li",[a._v('用户名为："tom"')]),a._v(" "),e("li",[a._v('密码为："secret"')]),a._v(" "),e("li",[a._v("订阅的持续时间为：10 秒")])]),a._v(" "),e("p",[a._v("在这个期间，如果 "),e("code",[a._v("topic1")]),a._v(" 主题上有消息产生，"),e("code",[a._v("libcoap")]),a._v(" 便会收到该条消息。")]),a._v(" "),e("h3",{attrs:{id:"通信接口说明"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#通信接口说明"}},[a._v("#")]),a._v(" 通信接口说明")]),a._v(" "),e("h4",{attrs:{id:"coap-client-observe-operation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#coap-client-observe-operation"}},[a._v("#")]),a._v(" CoAP Client Observe Operation")]),a._v(" "),e("p",[a._v("在 EMQ X CoAP 接入网关中，可以使用 CoAP 的 Observe 操作实现一个订阅主题的操作：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("GET  coap://localhost/mqtt/{topicname}?c={clientid}&u={username}&p={password}    with OBSERVE=0\n")])])]),e("ul",[e("li",[a._v('路径中的 "mqtt "为必填项')]),a._v(" "),e("li",[a._v("将 {topicname}、{clientid}、{username} 和 {password} 替换为你的真实值")]),a._v(" "),e("li",[a._v("{topicname} 和 {clientid} 为必填项")]),a._v(" "),e("li",[a._v('如果 clientid 不存在，将返回 "bad_request"')]),a._v(" "),e("li",[a._v("URI 中的 {topicname} 应该用 percent-encoded，以防止特殊字符，如 + 和 #")]),a._v(" "),e("li",[a._v("{username} 和 {password} 是可选的")]),a._v(" "),e("li",[a._v("如果 {username} 和 {password} 不正确，将返回一个 uauthorized 错误")]),a._v(" "),e("li",[a._v("订阅的 QoS 等级恒定为 1")])]),a._v(" "),e("h4",{attrs:{id:"coap-client-unobserve-operation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#coap-client-unobserve-operation"}},[a._v("#")]),a._v(" CoAP Client Unobserve Operation")]),a._v(" "),e("p",[a._v("使用 Unobserve 操作，取消订阅主题：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("GET  coap://localhost/mqtt/{topicname}?c={clientid}&u={username}&p={password}    with OBSERVE=1\n")])])]),e("ul",[e("li",[a._v('路径中的 "mqtt "为必填项')]),a._v(" "),e("li",[a._v("将 {topicname}、{clientid}、{username} 和 {password} 替换为你的真实值")]),a._v(" "),e("li",[a._v("{topicname} 和 {clientid} 为必填项")]),a._v(" "),e("li",[a._v('如果 clientid 不存在，将返回 "bad_request"')]),a._v(" "),e("li",[a._v("URI 中的 {topicname} 应该用 percent-encoded，以防止特殊字符，如 + 和 #")]),a._v(" "),e("li",[a._v("{username} 和 {password} 是可选的")]),a._v(" "),e("li",[a._v("如果 {username} 和 {password} 不正确，将返回一个 uauthorized 错误")])]),a._v(" "),e("h4",{attrs:{id:"coap-client-notification-operation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#coap-client-notification-operation"}},[a._v("#")]),a._v(" CoAP Client Notification Operation")]),a._v(" "),e("p",[a._v("接入网关会将订阅主题上收到到消息，以 "),e("code",[a._v("observe-notification")]),a._v(" 的方式投递到 CoAP 客户端：")]),a._v(" "),e("ul",[e("li",[a._v("它的 payload 正是 MQTT 消息中的的 payload")]),a._v(" "),e("li",[a._v('payload 数据类型为 "application/octet-stream"')])]),a._v(" "),e("h4",{attrs:{id:"coap-client-publish-operation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#coap-client-publish-operation"}},[a._v("#")]),a._v(" CoAP Client Publish Operation")]),a._v(" "),e("p",[a._v("使用 CoAP 的 PUT 命令执行一次 PUBLISH 操作：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("PUT  coap://localhost/mqtt/{topicname}?c={clientid}&u={username}&p={password}\n")])])]),e("ul",[e("li",[a._v('路径中的 "mqtt "为必填项')]),a._v(" "),e("li",[a._v("将 {topicname}、{clientid}、{username} 和 {password} 替换为你的真实值")]),a._v(" "),e("li",[a._v("{topicname} 和 {clientid} 为必填项")]),a._v(" "),e("li",[a._v('如果 clientid 不存在，将返回 "bad_request"')]),a._v(" "),e("li",[a._v("URI 中的 {topicname} 应该用 percent-encoded，以防止特殊字符，如 + 和 #")]),a._v(" "),e("li",[a._v("{username} 和 {password} 是可选的")]),a._v(" "),e("li",[a._v("如果 {username} 和 {password} 不正确，将返回一个 uauthorized 错误")]),a._v(" "),e("li",[a._v("payload 可以是任何二进制数据")]),a._v(" "),e("li",[a._v('payload 数据类型为 "application/octet-stream"')]),a._v(" "),e("li",[a._v("发布信息将以 qos0 发送")])]),a._v(" "),e("h4",{attrs:{id:"coap-client-保活"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#coap-client-保活"}},[a._v("#")]),a._v(" CoAP Client 保活")]),a._v(" "),e("p",[a._v("设备应定期发出 GET 命令，作为 ping 操作保持会话在线")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("GET  coap://localhost/mqtt/{any_topicname}?c={clientid}&u={username}&p={password}\n")])])]),e("ul",[e("li",[a._v('路径中的 "mqtt "为必填项')]),a._v(" "),e("li",[a._v("将 {topicname}、{clientid}、{username} 和 {password} 替换为你的真实值")]),a._v(" "),e("li",[a._v("{topicname} 和 {clientid} 为必填项")]),a._v(" "),e("li",[a._v('如果 clientid 不存在，将返回 "bad_request"')]),a._v(" "),e("li",[a._v("URI 中的 {topicname} 应该用 percent-encoded，以防止特殊字符，如 + 和 #")]),a._v(" "),e("li",[a._v("{username} 和 {password} 是可选的")]),a._v(" "),e("li",[a._v("如果 {username} 和 {password} 不正确，将返回一个 uauthorized 错误")]),a._v(" "),e("li",[a._v("客户端应该定期做 keepalive 工作，以保持会话在线，尤其是在 NAT 网络中的设备")])]),a._v(" "),e("h3",{attrs:{id:"备注"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#备注"}},[a._v("#")]),a._v(" 备注")]),a._v(" "),e("p",[a._v("CoAP 接入网关不支持 "),e("code",[a._v("POST")]),a._v(" 和 "),e("code",[a._v("DELETE")]),a._v(" 方法。")]),a._v(" "),e("p",[a._v("在 URI 中的主题名称必须先经过 URI 编码处理(参考：RFC 7252 - section 6.4)")]),a._v(" "),e("p",[a._v("CoAP URI 中的 ClientId, Username, Password, Topic是 MQTT 中的概念。也就是说，CoAP 接入网关是通过借用 MQTT 中的名词概念，试图将 CoAP 信息融入到 MQTT 系统中。")]),a._v(" "),e("p",[a._v("EMQ X 的 认证，访问控制，钩子等功能也适用于 CoAP 接入网关。比如：")]),a._v(" "),e("ul",[e("li",[a._v("如果 用户名/密码 没有被授权, CoAP 客户端就会得到一个 "),e("code",[a._v("uauthorized")]),a._v(" 的错误")]),a._v(" "),e("li",[a._v("如果 用户名/客户端ID 不允许发布特定的主题，CoAP 消息实际上会被丢弃，尽管 CoAP 客户端会从接入网关上得到一个 Acknoledgement")]),a._v(" "),e("li",[a._v("如果一个 CoAP 消息被发布，'message.publish' 钩子也能够捕获这个消息")])]),a._v(" "),e("h3",{attrs:{id:"well-known-locations"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#well-known-locations"}},[a._v("#")]),a._v(" Well-known locations")]),a._v(" "),e("hr"),a._v(" "),e("p",[a._v('CoAP 接入网关的 well-known 发现恒定的返回 "'),a._v(","),a._v('"')]),a._v(" "),e("p",[a._v("例如：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('libcoap/examples/coap-client -m get "coap://127.0.0.1/.well-known/core"\n')])])])])}),[],!1,null,null,null);t.default=o.exports}}]);