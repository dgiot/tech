(window.webpackJsonp=window.webpackJsonp||[]).push([[147],{673:function(s,t,a){"use strict";a.r(t);var n=a(8),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"上下线通知"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#上下线通知"}},[s._v("#")]),s._v(" 上下线通知")]),s._v(" "),a("p",[s._v("EMQ X 的上下线系统消息通知功能在客户端连接成功或者客户端断开连接，自动发送一条系统主题的消息, EMQ X 默认开启上下线通知模块。")]),s._v(" "),a("h2",{attrs:{id:"创建模块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建模块"}},[s._v("#")]),s._v(" 创建模块")]),s._v(" "),a("p",[s._v("上下线通知模块默认启动，可以通过dashboard页面进行启动和停止。")]),s._v(" "),a("p",[s._v("打开 "),a("a",{attrs:{href:"http://127.0.0.1:18083/#/modules",target:"_blank",rel:"noopener noreferrer"}},[s._v("EMQ X Dashboard"),a("OutboundLink")],1),s._v("，点击左侧的 “模块” 选项卡：")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/develop_png/zh_CN/modules/assets/modules.png",alt:"modules.png"}})]),s._v(" "),a("h2",{attrs:{id:"上下线消息通知格式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#上下线消息通知格式"}},[s._v("#")]),s._v(" 上下线消息通知格式")]),s._v(" "),a("p",[a("code",[s._v("$SYS")]),s._v(" 主题前缀: "),a("code",[s._v("$SYS/brokers/${node}/clients/")])]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",[s._v("主题 (Topic)")]),s._v(" "),a("th",[s._v("说明")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("${clientid}/connected")]),s._v(" "),a("td",[s._v("上线事件。当任意客户端上线时，EMQ X 就会发布该主题的消息")])]),s._v(" "),a("tr",[a("td",[s._v("${clientid}/disconnected")]),s._v(" "),a("td",[s._v("下线事件。当任意客户端下线时，EMQ X 就会发布该主题的消息")])])])]),s._v(" "),a("p",[a("code",[s._v("connected")]),s._v(" 事件消息的 Payload 解析成 JSON 格式如下:")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"username"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"undefined"')]),s._v(",\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ts"')]),s._v(":1582687922392,\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"sockport"')]),s._v(":1883,\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"proto_ver"')]),s._v(":5,\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"proto_name"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"MQTT"')]),s._v(",\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"keepalive"')]),s._v(":300,\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ipaddress"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"127.0.0.1"')]),s._v(",\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"expiry_interval"')]),s._v(":0,\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"connected_at"')]),s._v(":1582687922392,\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"connack"')]),s._v(":0,\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"clientid"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"emqtt-8348fe27a87976ad4db3"')]),s._v(",\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"clean_start"')]),s._v(":true\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("p",[a("code",[s._v("disconnected")]),s._v(" 事件消息的 Payload 解析成 JSON 格式如下:")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"username"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"undefined"')]),s._v(",\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ts"')]),s._v(":1582688032203,\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"reason"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"tcp_closed"')]),s._v(",\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"disconnected_at"')]),s._v(":1582687922392,\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"clientid"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"emqtt-8348fe27a87976ad4db3"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);