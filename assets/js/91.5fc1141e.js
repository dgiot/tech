(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{796:function(s,t,a){"use strict";a.r(t);var e=a(8),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"rocketmq-桥接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rocketmq-桥接"}},[s._v("#")]),s._v(" RocketMQ 桥接")]),s._v(" "),a("p",[s._v("EMQ X 桥接转发 MQTT 消息到 RocketMQ 集群:")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/backend/emqx/bridge/assets/bridge_rocket.png",alt:"bridge_rocket.png"}})]),s._v(" "),a("p",[s._v("RocketMQ 桥接插件配置文件: etc/plugins/emqx_bridge_rocket.conf。")]),s._v(" "),a("h2",{attrs:{id:"配置-rocketmq-集群地址"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置-rocketmq-集群地址"}},[s._v("#")]),s._v(" 配置 RocketMQ 集群地址")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## RocketMQ 服务器集群配置")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## bridge.rocket.servers = 127.0.0.1:9876,127.0.0.2:9876,127.0.0.3:9876")]),s._v("\nbridge.rocket.servers "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:9876\n\nbridge.rocket.refresh_topic_route_interval "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" 5S\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 分区生产者是同步/异步模式选择")]),s._v("\nbridge.rocket.produce "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sync")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 生产者同步模式下的超时时间")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## bridge.rocket.produce.sync_timeout = 3s")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 生产者 batch 的消息数量")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## bridge.rocket.producer.batch_size = 100")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 采用 base64 编码或不编码")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## bridge.rocket.encode_payload_type = base64")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## bridge.rocket.sock.buffer = 32KB")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## bridge.rocket.sock.recbuf = 32KB")]),s._v("\nbridge.rocket.sock.sndbuf "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" 1MB\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## bridge.rocket.sock.read_packets = 20")]),s._v("\n")])])]),a("h2",{attrs:{id:"配置-rocketmq-桥接规则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置-rocketmq-桥接规则"}},[s._v("#")]),s._v(" 配置 RocketMQ 桥接规则")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## Bridge RocketMQ Hooks")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## ${topic}: the RocketMQ topics to which the messages will be published.")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## ${filter}: the mqtt topic (may contain wildcard) on which the action will be performed .")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## Client Connected Record Hook")]),s._v("\nbridge.rocket.hook.client.connected.1     "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"topic"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ClientConnected"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## Client Disconnected Record Hook")]),s._v("\nbridge.rocket.hook.client.disconnected.1  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"topic"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ClientDisconnected"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## Session Subscribed Record Hook")]),s._v("\nbridge.rocket.hook.session.subscribed.1   "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"filter"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"#"')]),s._v(",  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"topic"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"SessionSubscribed"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## Session Unsubscribed Record Hook")]),s._v("\nbridge.rocket.hook.session.unsubscribed.1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"filter"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"#"')]),s._v(",  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"topic"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"SessionUnsubscribed"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## Message Publish Record Hook")]),s._v("\nbridge.rocket.hook.message.publish.1      "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"filter"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"#"')]),s._v(",  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"topic"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"MessagePublish"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## Message Delivered Record Hook")]),s._v("\nbridge.rocket.hook.message.delivered.1    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"filter"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"#"')]),s._v(",  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"topic"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"MessageDeliver"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## Message Acked Record Hook")]),s._v("\nbridge.rocket.hook.message.acked.1        "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"filter"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"#"')]),s._v(",  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"topic"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"MessageAcked"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("h2",{attrs:{id:"rocketmq-桥接规则说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rocketmq-桥接规则说明"}},[s._v("#")]),s._v(" RocketMQ 桥接规则说明")]),s._v(" "),a("table",{staticStyle:{width:"85%"}},[a("colgroup",[a("col",{staticStyle:{width:"58%"}}),s._v(" "),a("col",{staticStyle:{width:"26%"}})]),s._v(" "),a("thead",[a("tr",{staticClass:"header"},[a("th",[s._v("事件")]),s._v(" "),a("th",[s._v("说明")])])]),s._v(" "),a("tbody",[a("tr",{staticClass:"odd"},[a("td",[s._v("bridge.rocket.hook.client.connected.1")]),s._v(" "),a("td",[a("div",{staticClass:"line-block"},[s._v("客户端登录")])])]),s._v(" "),a("tr",{staticClass:"even"},[a("td",[s._v("bridge.rocket.hook.client.disconnected.1")]),s._v(" "),a("td",[a("div",{staticClass:"line-block"},[s._v("客户端退出")])])]),s._v(" "),a("tr",{staticClass:"odd"},[a("td",[s._v("bridge.rocket.hook.session.subscribed.1")]),s._v(" "),a("td",[a("div",{staticClass:"line-block"},[s._v("订阅主题")])])]),s._v(" "),a("tr",{staticClass:"even"},[a("td",[s._v("bridge.rocket.hook.session.unsubscribed.1")]),s._v(" "),a("td",[a("div",{staticClass:"line-block"},[s._v("取消订阅主题    ")])])]),s._v(" "),a("tr",{staticClass:"odd"},[a("td",[s._v("bridge.rocket.hook.message.publish.1")]),s._v(" "),a("td",[a("div",{staticClass:"line-block"},[s._v("发布消息")])])]),s._v(" "),a("tr",{staticClass:"even"},[a("td",[s._v("bridge.rocket.hook.message.delivered.1")]),s._v(" "),a("td",[a("div",{staticClass:"line-block"},[s._v("delivered 消息")])])]),s._v(" "),a("tr",{staticClass:"odd"},[a("td",[s._v("bridge.rocket.hook.message.acked.1")]),s._v(" "),a("td",[a("div",{staticClass:"line-block"},[s._v("ACK 消息")])])])])]),s._v(" "),a("h2",{attrs:{id:"客户端上下线事件转发-rocketmq"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#客户端上下线事件转发-rocketmq"}},[s._v("#")]),s._v(" 客户端上下线事件转发 RocketMQ")]),s._v(" "),a("p",[s._v("设备上线 EMQ X 转发上线事件消息到 RocketMQ:")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("topic "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ClientConnected"')]),s._v(",\nvalue "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n         "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"client_id"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${clientid}")]),s._v(",\n         "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"username"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${username}")]),s._v(",\n         "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"node"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${node}")]),s._v(",\n         "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ts"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${ts}")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("p",[s._v("设备下线 EMQ X 转发下线事件消息到 RocketMQ:")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("topic "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ClientDisconnected"')]),s._v(",\nvalue "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n         "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"client_id"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${clientid}")]),s._v(",\n         "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"username"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${username}")]),s._v(",\n         "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"reason"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${reason}")]),s._v(",\n         "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"node"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${node}")]),s._v(",\n         "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ts"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${ts}")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("h2",{attrs:{id:"客户端订阅主题事件转发-rocketmq"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#客户端订阅主题事件转发-rocketmq"}},[s._v("#")]),s._v(" 客户端订阅主题事件转发 RocketMQ")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("topic "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"SessionSubscribed"')]),s._v("\n\nvalue "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n         "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"client_id"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${clientid}")]),s._v(",\n         "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"topic"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${topic}")]),s._v(",\n         "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"qos"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${qos}")]),s._v(",\n         "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"node"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${node}")]),s._v(",\n         "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ts"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${timestamp}")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("h2",{attrs:{id:"客户端取消订阅主题事件转发-rocketmq"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#客户端取消订阅主题事件转发-rocketmq"}},[s._v("#")]),s._v(" 客户端取消订阅主题事件转发 RocketMQ")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("topic "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"SessionUnsubscribed"')]),s._v("\n\nvalue "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n         "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"client_id"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${clientid}")]),s._v(",\n         "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"topic"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${topic}")]),s._v(",\n         "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"qos"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${qos}")]),s._v(",\n         "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"node"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${node}")]),s._v(",\n         "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ts"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${timestamp}")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("h2",{attrs:{id:"mqtt-消息转发到-rocketmq"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mqtt-消息转发到-rocketmq"}},[s._v("#")]),s._v(" MQTT 消息转发到 RocketMQ")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("topic "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"MessagePublish"')]),s._v("\n\nvalue "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n         "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"client_id"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${clientid}")]),s._v(",\n         "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"username"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${username}")]),s._v(",\n         "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"topic"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${topic}")]),s._v(",\n         "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"payload"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${payload}")]),s._v(",\n         "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"qos"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${qos}")]),s._v(",\n         "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"node"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${node}")]),s._v(",\n         "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ts"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${timestamp}")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("h2",{attrs:{id:"mqtt-消息派发-deliver-事件转发-rocketmq"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mqtt-消息派发-deliver-事件转发-rocketmq"}},[s._v("#")]),s._v(" MQTT 消息派发 (Deliver) 事件转发 RocketMQ")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("topic "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"MessageDeliver"')]),s._v("\n\nvalue "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n         "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"client_id"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${clientid}")]),s._v(",\n         "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"username"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${username}")]),s._v(",\n         "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"from"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${fromClientId}")]),s._v(",\n         "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"topic"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${topic}")]),s._v(",\n         "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"payload"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${payload}")]),s._v(",\n         "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"qos"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${qos}")]),s._v(",\n         "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"node"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${node}")]),s._v(",\n         "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ts"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${timestamp}")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("h2",{attrs:{id:"mqtt-消息确认-ack-事件转发-rocketmq"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mqtt-消息确认-ack-事件转发-rocketmq"}},[s._v("#")]),s._v(" MQTT 消息确认 (Ack) 事件转发 RocketMQ")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("topic "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"MessageAcked"')]),s._v("\n\nvalue "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n         "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"client_id"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${clientid}")]),s._v(",\n         "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"username"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${username}")]),s._v(",\n         "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"from"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${fromClientId}")]),s._v(",\n         "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"topic"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${topic}")]),s._v(",\n         "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"payload"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${payload}")]),s._v(",\n         "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"qos"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${qos}")]),s._v(",\n         "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"node"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${node}")]),s._v(",\n         "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ts"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${timestamp}")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("h2",{attrs:{id:"rocketmq-消费示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rocketmq-消费示例"}},[s._v("#")]),s._v(" RocketMQ 消费示例")]),s._v(" "),a("p",[s._v("RocketMQ 读取 MQTT 客户端上下线事件消息:")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("bin/tools.sh org.apache.rocketmq.example.quickstart.Consumer ClientConnected\n  \nbin/tools.sh org.apache.rocketmq.example.quickstart.Consumer ClientDisconnected\n")])])]),a("p",[s._v("RocketMQ 读取 MQTT 主题订阅事件消息:")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("bin/tools.sh org.apache.rocketmq.example.quickstart.Consumer SessionSubscribed\n\nbin/tools.sh org.apache.rocketmq.example.quickstart.Consumer SessionUnsubscribed\n")])])]),a("p",[s._v("RocketMQ 读取 MQTT 发布消息:")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("bin/tools.sh org.apache.rocketmq.example.quickstart.Consumer MessagePublish\n")])])]),a("p",[s._v("RocketMQ 读取 MQTT 消息发布 (Deliver)、确认 (Ack) 事件:")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("bin/tools.sh org.apache.rocketmq.example.quickstart.Consumer MessageDeliver\n\nbin/tools.sh org.apache.rocketmq.example.quickstart.Consumer MessageAcked\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),a("p",[s._v("默认 payload 被 base64 编码，可通过修改配置 bridge.rocket.encode_payload_type 指定\npayload 数据格式。")])]),s._v(" "),a("h2",{attrs:{id:"启用-rocketmq-桥接插件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启用-rocketmq-桥接插件"}},[s._v("#")]),s._v(" 启用 RocketMQ 桥接插件")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("./bin/emqx_ctl plugins load emqx_bridge_rocket\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);