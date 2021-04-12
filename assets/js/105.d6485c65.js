(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{470:function(t,a,s){"use strict";s.r(a);var e=s(8),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"协议介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#协议介绍"}},[t._v("#")]),t._v(" 协议介绍")]),t._v(" "),s("h2",{attrs:{id:"mqtt协议"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mqtt协议"}},[t._v("#")]),t._v(" MQTT协议")]),t._v(" "),s("h3",{attrs:{id:"概览"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#概览"}},[t._v("#")]),t._v(" 概览")]),t._v(" "),s("p",[t._v("MQTT是一个轻量的发布订阅模式消息传输协议，专门针对低带宽和不稳定网络环境的物联网应用设计。")]),t._v(" "),s("p",[t._v("MQTT官网: "),s("a",{attrs:{href:"http://mqtt.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://mqtt.org"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("MQTT V3.1.1协议规范:\n"),s("a",{attrs:{href:"http://docs.oasis-open.org/mqtt/mqtt/v3.1.1/os/mqtt-v3.1.1-os.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://docs.oasis-open.org/mqtt/mqtt/v3.1.1/os/mqtt-v3.1.1-os.html"),s("OutboundLink")],1)]),t._v(" "),s("h3",{attrs:{id:"特点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#特点"}},[t._v("#")]),t._v(" 特点")]),t._v(" "),s("ol",[s("li",[t._v("开放消息协议，简单易实现")]),t._v(" "),s("li",[t._v("发布订阅模式，一对多消息发布")]),t._v(" "),s("li",[t._v("基于TCP/IP网络连接")]),t._v(" "),s("li",[t._v("1字节固定报头，2字节心跳报文，报文结构紧凑")]),t._v(" "),s("li",[t._v("消息QoS支持，可靠传输保证")])]),t._v(" "),s("h3",{attrs:{id:"应用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#应用"}},[t._v("#")]),t._v(" 应用")]),t._v(" "),s("p",[t._v("MQTT协议广泛应用于物联网、移动互联网、智能硬件、车联网、电力能源等领域。")]),t._v(" "),s("ol",[s("li",[t._v("物联网M2M通信，物联网大数据采集")]),t._v(" "),s("li",[t._v("Android消息推送，WEB消息推送")]),t._v(" "),s("li",[t._v("移动即时消息，例如Facebook Messenger")]),t._v(" "),s("li",[t._v("智能硬件、智能家具、智能电器")]),t._v(" "),s("li",[t._v("车联网通信，电动车站桩采集")]),t._v(" "),s("li",[t._v("智慧城市、远程医疗、远程教育")]),t._v(" "),s("li",[t._v("电力、石油与能源等行业市场")])]),t._v(" "),s("h3",{attrs:{id:"mqtt基于主题-topic-消息路由"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mqtt基于主题-topic-消息路由"}},[t._v("#")]),t._v(" MQTT基于主题(Topic)消息路由")]),t._v(" "),s("p",[t._v("MQTT协议基于主题(Topic)进行消息路由，主题(Topic)类似URL路径，例如:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("chat/room/1\n\nsensor/10/temperature\n\nsensor/+/temperature\n\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$SYS")]),t._v("/broker/metrics/packets/received\n\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$SYS")]),t._v("/broker/metrics/"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#")]),t._v("\n")])])]),s("p",[t._v("主题(Topic)通过'/'分割层级，支持'+', '#'通配符:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("'+': 表示通配一个层级，例如a/+，匹配a/x, a/y\n    \n'#': 表示通配多个层级，例如a/#，匹配a/x, a/b/c/d\n")])])]),s("p",[t._v("订阅者与发布者之间通过主题路由消息进行通信，例如采用mosquitto命令行发布订阅消息:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("mosquitto_sub -t a/b/+ -q "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n\nmosquitto_pub -t a/b/c -m hello -q "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n")])])]),s("p",[t._v("订阅者可以订阅含通配符主题，但发布者不允许向含通配符主题发布消息。")]),t._v(" "),s("h3",{attrs:{id:"mqtt-v3-1-1协议报文"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mqtt-v3-1-1协议报文"}},[t._v("#")]),t._v(" MQTT V3.1.1协议报文")]),t._v(" "),s("h4",{attrs:{id:"报文结构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#报文结构"}},[t._v("#")]),t._v(" 报文结构")]),t._v(" "),s("ul",[s("li",[t._v("固定报头(Fixed header)")]),t._v(" "),s("li",[t._v("可变报头(Variable header)")]),t._v(" "),s("li",[t._v("报文有效载荷(Payload)")])]),t._v(" "),s("h4",{attrs:{id:"固定报头"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#固定报头"}},[t._v("#")]),t._v(" 固定报头")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("+----------+-----+-----+-----+-----+-----+-----+-----+-----+\n| Bit      |  7  |  6  |  5  |  4  |  3  |  2  |  1  |  0  |\n+----------+-----+-----+-----+-----+-----+-----+-----+-----+\n| byte1    |   MQTT Packet type    |         Flags         |\n+----------+-----------------------+-----------------------+\n| byte2... |   Remaining Length                            |\n+----------+-----------------------------------------------+\n")])])]),s("h4",{attrs:{id:"报文类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#报文类型"}},[t._v("#")]),t._v(" 报文类型")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th"),t._v(" "),s("th"),t._v(" "),s("th")])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("类型名称")]),t._v(" "),s("td",[t._v("类型值")]),t._v(" "),s("td",[t._v("报文说明")])]),t._v(" "),s("tr",[s("td",[t._v("CONNECT")]),t._v(" "),s("td",[t._v("1")]),t._v(" "),s("td",[t._v("发起连接")])]),t._v(" "),s("tr",[s("td",[t._v("CONNACK")]),t._v(" "),s("td",[t._v("2")]),t._v(" "),s("td",[t._v("连接回执")])]),t._v(" "),s("tr",[s("td",[t._v("PUBLISH")]),t._v(" "),s("td",[t._v("3")]),t._v(" "),s("td",[t._v("发布消息")])]),t._v(" "),s("tr",[s("td",[t._v("PUBACK")]),t._v(" "),s("td",[t._v("4")]),t._v(" "),s("td",[t._v("发布回执")])]),t._v(" "),s("tr",[s("td",[t._v("PUBREC")]),t._v(" "),s("td",[t._v("5")]),t._v(" "),s("td",[t._v("QoS2消息回执")])]),t._v(" "),s("tr",[s("td",[t._v("PUBREL")]),t._v(" "),s("td",[t._v("6")]),t._v(" "),s("td",[t._v("QoS2消息释放")])]),t._v(" "),s("tr",[s("td",[t._v("PUBCOMP")]),t._v(" "),s("td",[t._v("7")]),t._v(" "),s("td",[t._v("QoS2消息完成")])]),t._v(" "),s("tr",[s("td",[t._v("SUBSCRIBE")]),t._v(" "),s("td",[t._v("8")]),t._v(" "),s("td",[t._v("订阅主题")])]),t._v(" "),s("tr",[s("td",[t._v("SUBACK")]),t._v(" "),s("td",[t._v("9")]),t._v(" "),s("td",[t._v("订阅回执")])]),t._v(" "),s("tr",[s("td",[t._v("UNSUBSCRIBE")]),t._v(" "),s("td",[t._v("10")]),t._v(" "),s("td",[t._v("取消订阅")])]),t._v(" "),s("tr",[s("td",[t._v("UNSUBACK")]),t._v(" "),s("td",[t._v("11")]),t._v(" "),s("td",[t._v("取消订阅回执")])]),t._v(" "),s("tr",[s("td",[t._v("PINGREQ")]),t._v(" "),s("td",[t._v("12")]),t._v(" "),s("td",[t._v("PING请求")])]),t._v(" "),s("tr",[s("td",[t._v("PINGRESP")]),t._v(" "),s("td",[t._v("13")]),t._v(" "),s("td",[t._v("PING响应")])]),t._v(" "),s("tr",[s("td",[t._v("DISCONNECT")]),t._v(" "),s("td",[t._v("14")]),t._v(" "),s("td",[t._v("断开连接")])])])]),t._v(" "),s("h4",{attrs:{id:"publish发布消息"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#publish发布消息"}},[t._v("#")]),t._v(" PUBLISH发布消息")]),t._v(" "),s("p",[t._v("PUBLISH报文承载客户端与服务器间双向的发布消息。\nPUBACK报文用于接收端确认QoS1报文，PUBREC/PUBREL/PUBCOMP报文用于QoS2消息流程。")]),t._v(" "),s("h4",{attrs:{id:"pingreq-pingresp心跳"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pingreq-pingresp心跳"}},[t._v("#")]),t._v(" PINGREQ/PINGRESP心跳")]),t._v(" "),s("p",[t._v("客户端在无报文发送时，按保活周期(KeepAlive)定时向服务端发送PINGREQ心跳报文，服务端响应PINGRESP报文。PINGREQ/PINGRESP报文均2个字节。")]),t._v(" "),s("h3",{attrs:{id:"mqtt消息qos"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mqtt消息qos"}},[t._v("#")]),t._v(" MQTT消息QoS")]),t._v(" "),s("p",[t._v("MQTT发布消息QoS保证不是端到端的，是客户端与服务器之间的。订阅者收到MQTT消息的QoS级别，最终取决于发布消息的QoS和主题订阅的QoS。")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("发布消息的 QoS")]),t._v(" "),s("th",[t._v("主题订阅的 QoS")]),t._v(" "),s("th",[t._v("接收消息的 QoS")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("0")]),t._v(" "),s("td",[t._v("0")]),t._v(" "),s("td",[t._v("0")])]),t._v(" "),s("tr",[s("td",[t._v("0")]),t._v(" "),s("td",[t._v("1")]),t._v(" "),s("td",[t._v("0")])]),t._v(" "),s("tr",[s("td",[t._v("0")]),t._v(" "),s("td",[t._v("2")]),t._v(" "),s("td",[t._v("0")])]),t._v(" "),s("tr",[s("td",[t._v("1")]),t._v(" "),s("td",[t._v("0")]),t._v(" "),s("td",[t._v("0")])]),t._v(" "),s("tr",[s("td",[t._v("1")]),t._v(" "),s("td",[t._v("1")]),t._v(" "),s("td",[t._v("1")])]),t._v(" "),s("tr",[s("td",[t._v("1")]),t._v(" "),s("td",[t._v("2")]),t._v(" "),s("td",[t._v("1")])]),t._v(" "),s("tr",[s("td",[t._v("2")]),t._v(" "),s("td",[t._v("0")]),t._v(" "),s("td",[t._v("0")])]),t._v(" "),s("tr",[s("td",[t._v("2")]),t._v(" "),s("td",[t._v("1")]),t._v(" "),s("td",[t._v("1")])]),t._v(" "),s("tr",[s("td",[t._v("2")]),t._v(" "),s("td",[t._v("2")]),t._v(" "),s("td",[t._v("2")])])])]),t._v(" "),s("h4",{attrs:{id:"qos0消息发布订阅"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#qos0消息发布订阅"}},[t._v("#")]),t._v(" Qos0消息发布订阅")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/develop_png/zh_CN/development/_assets/qos0_seq.png",alt:"image-20191112165911025.png"}})]),t._v(" "),s("h4",{attrs:{id:"qos1消息发布订阅"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#qos1消息发布订阅"}},[t._v("#")]),t._v(" Qos1消息发布订阅")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/develop_png/zh_CN/development/_assets/qos1_seq.png",alt:"image-20191112165911025.png"}})]),t._v(" "),s("h4",{attrs:{id:"qos2消息发布订阅"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#qos2消息发布订阅"}},[t._v("#")]),t._v(" Qos2消息发布订阅")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/develop_png/zh_CN/development/_assets/qos2_seq.png",alt:"image-20191112165911025.png"}})]),t._v(" "),s("h3",{attrs:{id:"mqtt会话-clean-session"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mqtt会话-clean-session"}},[t._v("#")]),t._v(" MQTT会话(Clean Session)")]),t._v(" "),s("p",[t._v("MQTT客户端向服务器发起CONNECT请求时，可以通过'Clean Session'标志设置会话。")]),t._v(" "),s("p",[t._v("'Clean Session'设置为0，表示创建一个持久会话，在客户端断开连接时，会话仍然保持并保存离线消息，直到会话超时注销。")]),t._v(" "),s("p",[t._v("'Clean\nSession'设置为1，表示创建一个新的临时会话，在客户端断开时，会话自动销毁。")]),t._v(" "),s("h3",{attrs:{id:"mqtt连接保活心跳"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mqtt连接保活心跳"}},[t._v("#")]),t._v(" MQTT连接保活心跳")]),t._v(" "),s("p",[t._v("MQTT客户端向服务器发起CONNECT请求时，通过KeepAlive参数设置保活周期。")]),t._v(" "),s("p",[t._v("客户端在无报文发送时，按KeepAlive周期定时发送2字节的PINGREQ心跳报文，服务端收到PINGREQ报文后，回复2字节的PINGRESP报文。")]),t._v(" "),s("p",[t._v("服务端在1.5个心跳周期内，既没有收到客户端发布订阅报文，也没有收到PINGREQ心跳报文时，主动心跳超时断开客户端TCP连接。")]),t._v(" "),s("p",[t._v("emqx 消息服务器默认按最长 2.5 心跳周期超时设计。")]),t._v(" "),s("h3",{attrs:{id:"mqtt遗愿消息-last-will"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mqtt遗愿消息-last-will"}},[t._v("#")]),t._v(" MQTT遗愿消息(Last Will)")]),t._v(" "),s("p",[t._v("MQTT客户端向服务器端CONNECT请求时，可以设置是否发送遗愿消息(Will\nMessage)标志，和遗愿消息主题(Topic)与内容(Payload)。")]),t._v(" "),s("p",[t._v("MQTT客户端异常下线时(客户端断开前未向服务器发送DISCONNECT消息)，MQTT消息服务器会发布遗愿消息。")]),t._v(" "),s("h3",{attrs:{id:"mqtt保留消息-retained-message"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mqtt保留消息-retained-message"}},[t._v("#")]),t._v(" MQTT保留消息(Retained Message)")]),t._v(" "),s("p",[t._v("MQTT客户端向服务器发布(PUBLISH)消息时，可以设置保留消息(Retained Message)标志。保留消息(Retained\nMessage)会驻留在消息服务器，后来的订阅者订阅主题时仍可以接收该消息。")]),t._v(" "),s("p",[t._v("例如mosquitto命令行发布一条保留消息到主题'a/b/c':")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("mosquitto_pub -r -q "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" -t a/b/c -m "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hello'")]),t._v("\n")])])]),s("p",[t._v("之后连接上来的MQTT客户端订阅主题'a/b/c'时候，仍可收到该消息:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ mosquitto_sub -t a/b/c -q "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\nhello\n")])])]),s("p",[t._v("保留消息(Retained\nMessage)有两种清除方式:")]),t._v(" "),s("ol",[s("li",[t._v("客户端向有保留消息的主题发布一个空消息:")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("mosquitto_pub -r -q "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" -t a/b/c -m "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),t._v("\n")])])]),s("ol",{attrs:{start:"2"}},[s("li",[t._v("消息服务器设置保留消息的超期时间。")])]),t._v(" "),s("h3",{attrs:{id:"mqtt-websocket连接"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mqtt-websocket连接"}},[t._v("#")]),t._v(" MQTT WebSocket连接")]),t._v(" "),s("p",[t._v("MQTT协议除支持TCP传输层外，还支持WebSocket作为传输层。通过WebSocket浏览器可以直连MQTT消息服务器，发布订阅模式与其他MQTT客户端通信。")]),t._v(" "),s("p",[t._v("MQTT协议的WebSocket连接，必须采用binary模式，并携带子协议Header:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("Sec-WebSocket-Protocol: mqttv3.1 或 mqttv3.1.1\n")])])]),s("h3",{attrs:{id:"mqtt-与-xmpp-协议对比"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mqtt-与-xmpp-协议对比"}},[t._v("#")]),t._v(" MQTT 与 XMPP 协议对比")]),t._v(" "),s("p",[t._v("MQTT协议设计简单轻量、路由灵活，将在移动互联网物联网消息领域，全面取代PC时代的XMPP协议:")]),t._v(" "),s("ol",[s("li",[t._v("MQTT协议一个字节固定报头，两个字节心跳报文，报文体积小编解码容易。XMPP协议基于繁重的XML，报文体积大且交互繁琐。")]),t._v(" "),s("li",[t._v("MQTT协议基于主题(Topic)发布订阅模式消息路由，相比XMPP基于JID的点对点消息路由更为灵活。")]),t._v(" "),s("li",[t._v("MQTT协议未定义报文内容格式，可以承载JSON、二进制等不同类型报文。XMPP协议采用XML承载报文，二进制必须Base64编码等处理。")]),t._v(" "),s("li",[t._v("MQTT协议支持消息收发确认和QoS保证，XMPP主协议并未定义类似机制。MQTT协议有更好的消息可靠性保证。")])]),t._v(" "),s("h2",{attrs:{id:"mqtt-sn-协议"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mqtt-sn-协议"}},[t._v("#")]),t._v(" MQTT-SN 协议")]),t._v(" "),s("p",[t._v("MQTT-SN 协议是 MQTT 的直系亲属，它使用 UDP 进行通信，标准的端口是1884。MQTT-SN\n的主要目的是为了适应受限的设备和网络，比如一些传感器，只有很小的内存和\nCPU，TCP 对于这些设备来说非常奢侈。还有一些网络，比如 ZIGBEE，报文的长度在300字节以下，无法承载太大的数据包。所以\nMQTT-SN 的数据包更小巧。")]),t._v(" "),s("p",[t._v("MQTT-SN 的官方标准下载地址:\n"),s("a",{attrs:{href:"http://mqtt.org/new/wp-content/uploads/2009/06/MQTT-SN_spec_v1.2.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://mqtt.org/new/wp-content/uploads/2009/06/MQTT-SN_spec_v1.2.pdf"),s("OutboundLink")],1)]),t._v(" "),s("h3",{attrs:{id:"mqtt-sn-和-mqtt-的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mqtt-sn-和-mqtt-的区别"}},[t._v("#")]),t._v(" MQTT-SN 和 MQTT 的区别")]),t._v(" "),s("p",[t._v("MQTT-SN 的信令和 MQTT 大部分都相同，比如都有 Will, 都有 Connect/Subscribe/Publish 命令.")]),t._v(" "),s("p",[t._v("MQTT-SN 最大的不同是，Topic 使用 TopicId 来代替，而 TopicId 是一个16比特的数字。每一个数字对应一个\nTopic, 设备和云端需要使用 REGISTER 命令映射 TopicId 和 Topic 的对应关系。")]),t._v(" "),s("p",[t._v("MQTT-SN 可以随时更改 Will 的内容, 甚至可以取消. 而 MQTT 只允许在 CONNECT 时设定 Will 的内容,\n而且不允许更改.")]),t._v(" "),s("p",[t._v("MQTT-SN 的网络中有网关这种设备，它负责把 MQTT-SN 转换成 MQTT，和云端的 MQTT Broker 通信. MQTT-SN\n的协议支持自动发现网关的功能。")]),t._v(" "),s("p",[t._v("MQTT-SN 还支持设备的睡眠功能，如果设备进入睡眠状态，无法接收 UDP 数据，网关将把下行的 PUBLISH\n消息缓存起来，直到设备苏醒后再传送。")]),t._v(" "),s("h3",{attrs:{id:"emqx-sn-网关插件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#emqx-sn-网关插件"}},[t._v("#")]),t._v(" EMQX-SN 网关插件")]),t._v(" "),s("p",[t._v("EMQX-SN 是 EMQ X 的一个网关插件，实现了 MQTT-SN 的大部分功能，它相当于一个在云端的 MQTT-SN 网关，直接和 EMQ\nX Broker 相连。")]),t._v(" "),s("h4",{attrs:{id:"配置参数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置参数"}},[t._v("#")]),t._v(" 配置参数")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# File: etc/plugins/emqx_sn.conf:")]),t._v("\n\nmqtt.sn.port "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1884")]),t._v("\n\nmqtt.sn.advertise_duration "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("900")]),t._v("\n\nmqtt.sn.gateway_id "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n\nmqtt.sn.username "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" mqtt_sn_user\n\nmqtt.sn.password "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" abc\n")])])]),s("table",[s("thead",[s("tr",[s("th",[t._v("配置项")]),t._v(" "),s("th",[t._v("说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("mqtt.sn.port")]),t._v(" "),s("td",[t._v("指定 MQTT-SN 监听的端口号")])]),t._v(" "),s("tr",[s("td",[t._v("mqtt.sn.advertise_duration")]),t._v(" "),s("td",[t._v("ADVERTISE 消息的发送间隔(秒)")])]),t._v(" "),s("tr",[s("td",[t._v("mqtt.sn.gateway_id")]),t._v(" "),s("td",[t._v("网关 ID")])]),t._v(" "),s("tr",[s("td",[t._v("mqtt.sn.username")]),t._v(" "),s("td",[t._v("这是可选的参数，指定所有 MQTT-SN 连接的用户名，用于鉴权模块")])]),t._v(" "),s("tr",[s("td",[t._v("mqtt.sn.password")]),t._v(" "),s("td",[t._v("这也是可选的参数，和 username 一起使用")])])])]),t._v(" "),s("h4",{attrs:{id:"启动-emqx-sn"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#启动-emqx-sn"}},[t._v("#")]),t._v(" 启动 emqx-sn")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("./bin/emqx_ctl plugins load emqx_sn\n")])])]),s("h3",{attrs:{id:"mqtt-sn-客户端库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mqtt-sn-客户端库"}},[t._v("#")]),t._v(" MQTT-SN 客户端库")]),t._v(" "),s("ol",[s("li",[s("a",{attrs:{href:"https://github.com/eclipse/paho.mqtt-sn.embedded-c/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/eclipse/paho.mqtt-sn.embedded-c/"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/ty4tw/MQTT-SN",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/ty4tw/MQTT-SN"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/njh/mqtt-sn-tools",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/njh/mqtt-sn-tools"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/arobenko/mqtt-sn",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/arobenko/mqtt-sn"),s("OutboundLink")],1)])]),t._v(" "),s("h2",{attrs:{id:"lwm2m-协议"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#lwm2m-协议"}},[t._v("#")]),t._v(" LWM2M 协议")]),t._v(" "),s("p",[t._v("LwM2M 全称是 Lightweight Machine-To-Machine，是由 Open Mobile Alliance(OMA)\n定义的一套适用于物联网的轻量级协议，它提供了设备管理和通讯的功能，尤其适用于资源有限的终端设备。协议可以在\n"),s("a",{attrs:{href:"http://www.openmobilealliance.org/wp/",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里"),s("OutboundLink")],1),t._v(" 下载。")]),t._v(" "),s("p",[t._v("LwM2M 基于 REST 架构，使用 CoAP 作为底层的传输协议，承载在 UDP 或者 SMS\n上，因而报文结构简单小巧，并且在网络资源有限及无法确保设备始终在线的环境里同样适用。")]),t._v(" "),s("p",[t._v("LwM2M 最主要的实体包括 LwM2M Server 和 LwM2M Client。")]),t._v(" "),s("p",[t._v("LwM2M Server 作为服务器，部署在 M2M 服务供应商处或网络服务供应商处。LwM2M 定义了两种服务器")]),t._v(" "),s("ul",[s("li",[t._v("一种是 LwM2M BOOTSTRAP SERVER，emqx-lwm2m 插件并未实现该服务器的功能。")]),t._v(" "),s("li",[t._v("一种是 LwM2M SERVER，emqx-lwm2m 实现该服务器在 UDP 上的功能，SMS 并没有实现。")])]),t._v(" "),s("p",[t._v("LwM2M Client 作为客户端，部署在各个 LwM2M 设备上。")]),t._v(" "),s("p",[t._v("在 LwM2M Server 和 LwM2M Client 之间，LwM2M 协议定义了4个接口。")]),t._v(" "),s("ol",[s("li",[t._v("引导接口 Bootstrap：向 LwM2M 客户端提供注册到 LwM2M\n服务器的必要信息，例如服务器访问信息、客户端支持的资源信息等。")]),t._v(" "),s("li",[t._v("客户端注册接口 Client Registration：使 LwM2M 客户端与 LwM2M 服务器互联，将 LwM2M\n客户端的相关信息存储在 LwM2M 服务器上。只有完成注册后，LwM2M\n客户端与服务器端之间的通信与管理才成为可能。")]),t._v(" "),s("li",[t._v("设备管理与服务实现接口 Device Management and Service Enablement：该接口的主控方为 LwM2M\n服务器，服务器向客户端发送指令，客户端对指令做出回应并将回应消息发送给服务器。")]),t._v(" "),s("li",[t._v("信息上报接口 Information Reporting：允许 LwM2M\n服务器端向客户端订阅资源信息，客户端接收订阅后按照约定的模式向服务器端报告自己的资源变化情况。\n")])]),t._v(" "),s("p",[t._v("LwM2M 把设备上的服务抽象为 Object 和 Resource, 在 XML 文件中定义各种 Object 的属性和功能。可以在\n"),s("a",{attrs:{href:"http://www.openmobilealliance.org/wp/OMNA/LwM2M/LwM2MRegistry.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里"),s("OutboundLink")],1),t._v("\n找到 XML 的各种定义。")]),t._v(" "),s("p",[t._v("LwM2M 协议预定义了8种 Object 来满足基本的需求，分别是：")]),t._v(" "),s("ul",[s("li",[t._v("Security 安全对象")]),t._v(" "),s("li",[t._v("Server 服务器对象")]),t._v(" "),s("li",[t._v("Access Control 访问控制对象")]),t._v(" "),s("li",[t._v("Device 设备对象")]),t._v(" "),s("li",[t._v("Connectivity Monitoring 连通性监控对象")]),t._v(" "),s("li",[t._v("Firmware 固件对象")]),t._v(" "),s("li",[t._v("Location 位置对象")]),t._v(" "),s("li",[t._v("Connectivity Statistics 连通性统计对象")])]),t._v(" "),s("h3",{attrs:{id:"emqx-lwm2m-插件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#emqx-lwm2m-插件"}},[t._v("#")]),t._v(" EMQX-LWM2M 插件")]),t._v(" "),s("p",[t._v("EMQX-LWM2M 是 EMQ X 服务器的一个网关插件，实现了 LwM2M 的大部分功能。MQTT 客户端可以通过 EMQX-LWM2M\n访问支持 LwM2M 的设备。设备也可以往 EMQX-LWM2M 上报 notification，为 EMQ X后端的服务采集数据。")]),t._v(" "),s("h3",{attrs:{id:"mqtt-和-lwm2m的转换"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mqtt-和-lwm2m的转换"}},[t._v("#")]),t._v(" MQTT 和 LwM2M的转换")]),t._v(" "),s("p",[t._v("从 MQTT 客户端可以发送 Command 给 LwM2M 设备。MQTT 到 LwM2M 的命令使用如下的 topic")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"lwm2m/{?device_end_point_name}/command"')]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\n")])])]),s("p",[t._v("其中 MQTT Payload 是一个 json 格式的字符串，指定要发送的命令，更多的细节请参见 emqx-lwm2m 的文档。")]),t._v(" "),s("p",[t._v("LwM2M 设备的回复用如下 topic 传送")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"lwm2m/{?device_end_point_name}/response"')]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\n")])])]),s("p",[t._v("MQTT Payload 也是一个 json 格式的字符串，更多的细节请参见 emqx-lwm2m 的文档。")]),t._v(" "),s("h4",{attrs:{id:"配置参数-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置参数-2"}},[t._v("#")]),t._v(" 配置参数")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## File: etc/emqx_lwm2m.conf:")]),t._v("\n\nlwm2m.port "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5683")]),t._v("\n\nlwm2m.certfile "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" etc/certs/cert.pem\n\nlwm2m.keyfile "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" etc/certs/key.pem\n\nlwm2m.xml_dir "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("  etc/lwm2m_xml\n")])])]),s("table",[s("thead",[s("tr",[s("th",[t._v("配置项")]),t._v(" "),s("th",[t._v("说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("lwm2m.port")]),t._v(" "),s("td",[t._v("指定 LwM2M 监听的端口号，为了避免和 emqx-coap 冲突，使用了非标准的5783端口")])]),t._v(" "),s("tr",[s("td",[t._v("lwm2m.certfile")]),t._v(" "),s("td",[t._v("DTLS 使用的证书")])]),t._v(" "),s("tr",[s("td",[t._v("lwm2m.keyfile")]),t._v(" "),s("td",[t._v("DTLS 使用的秘钥")])]),t._v(" "),s("tr",[s("td",[t._v("lwm2m.xml_dir")]),t._v(" "),s("td",[t._v("存放 XML 文件的目录，这些 XML 用来定义 LwM2M Object")])])])]),t._v(" "),s("h4",{attrs:{id:"启动-emqx-lwm2m"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#启动-emqx-lwm2m"}},[t._v("#")]),t._v(" 启动 emqx-lwm2m")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("./bin/emqx_ctl plugins load emqx_lwm2m\n")])])]),s("h3",{attrs:{id:"lwm2m-的客户端库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#lwm2m-的客户端库"}},[t._v("#")]),t._v(" LwM2M 的客户端库")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://github.com/eclipse/wakaama",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/eclipse/wakaama"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/OpenMobileAlliance/OMA-LWM2M-DevKit",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/OpenMobileAlliance/OMA-LWM2M-DevKit"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/AVSystem/Anjay",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/AVSystem/Anjay"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"http://www.eclipse.org/leshan/",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://www.eclipse.org/leshan/"),s("OutboundLink")],1)])]),t._v(" "),s("h2",{attrs:{id:"私有-tcp-协议"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#私有-tcp-协议"}},[t._v("#")]),t._v(" 私有 TCP 协议")]),t._v(" "),s("p",[t._v("EMQ X 提供 "),s("strong",[t._v("emqx-tcp")]),t._v(" 插件，插件作为一个靠近端侧的一个接入模块，按照其功能逻辑和整个系统的关系，将整个消息交换的过程可以分成三个部分：终端侧，平台侧和其它侧：")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("-- Terminal --"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">|")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("--------- Broker Side ---------"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">|")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("---  Others  ---"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">|")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("-    Sid e   -"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">|")]),t._v("                                 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("--    Side    --"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">|")]),t._v("\n\n+---+                                                PUB  +-----------+\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" D "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  INCOMING  +----------+    PUB     +---------+   --"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">|")]),t._v(" subscriber"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" E "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("-----------"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">|")]),t._v("          "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("-----------"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">|")]),t._v("         "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("--/   +-----------+\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" V "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("            "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" emqx-tcp "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("            "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  EMQ X  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" I "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("-----------"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("          "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("-----------"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("         "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("--   +-----------+\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" C "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  OUTGOING  +----------+    PUB     +---------+   "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("--"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" publisher "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" E "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("                                                PUB  +-----------+\n+---+\n")])])]),s("ol",[s("li",[t._v("终端侧，通过本插件定义的 TCP 私有协议进行接入，然后实现数据的上报，或者接收下行的消息。")]),t._v(" "),s("li",[t._v("平台侧，主体是 emqx-tcp 插件和  EMQ X 系统。emqx-tcp 负责报文的编解码，代理订阅下行主题。实现将上行消息转为 EMQ X 系统中的 MQTT 消息 PUBLISH 到整个系统中；将下行的 MQTT 消息转化为 TCP 私有协议的报文结构，下发到终端。")]),t._v(" "),s("li",[t._v("其它侧，可以对 2 中出现的上行的 PUBLISH 消息的主题进行订阅，以接收上行消息。或对发布消息到具体的下行的主题，以发送数据到终端侧。")])]),t._v(" "),s("h3",{attrs:{id:"配置说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置说明"}},[t._v("#")]),t._v(" 配置说明")]),t._v(" "),s("h4",{attrs:{id:"协议层"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#协议层"}},[t._v("#")]),t._v(" 协议层")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## 闲置时间。超过该时间未收到 CONNECT 帧, 将")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## 直接关闭该 TCP 连接")]),t._v("\ntcp.proto.idle_timeout "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" 1s\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## 上行主题。上行消息到 EMQ 系统中的消息主题")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("##")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## 占位符：")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#### - %c: 接入客户端的 ClientId")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#### - %u: 接入客户端的 Username")]),t._v("\ntcp.proto.up_topic "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" tcp/%c/up\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## 下行主题。客户端接入成功后, emqx-tcp 会订阅")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## 该主题，以接收 EMQ 系统向该类型的客户端下")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## 发的消息。")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("##")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## 占位符：(同上)")]),t._v("\ntcp.proto.dn_topic "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" tcp/%c/dn\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## 最大处理的单个 TCP 私有协议报文大小")]),t._v("\ntcp.proto.max_packet_size "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("65535")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## 开启状态统计。开启后，emqx-tcp 会定期更新")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## 连接信息, 并检测连接的健康状态")]),t._v("\ntcp.proto.enable_stats "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" on\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## 强制 GC, 当进程已处理 1000 消息或发送数据超过 1M")]),t._v("\ntcp.proto.force_gc_policy "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("1MB\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## 强制关闭连接, 当进程堆积 8000 消息或堆栈内存超过 800M")]),t._v("\ntcp.proto.force_shutdown_policy "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8000")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("800MB\n")])])]),s("h4",{attrs:{id:"监听器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#监听器"}},[t._v("#")]),t._v(" 监听器")]),t._v(" "),s("p",[t._v("监听器配置比较广泛，在此仅列举部分常用部分：")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## 配置监听的端口")]),t._v("\ntcp.listener.external "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),t._v(".0.0:8090\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## 配置监听池大小。影响 TCP 建链的并发速率。")]),t._v("\ntcp.listener.external.acceptors "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## 最大连接数")]),t._v("\ntcp.listener.external.max_connections "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1024000")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## 每秒支持的最大并发连接数")]),t._v("\ntcp.listener.external.max_conn_rate "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);