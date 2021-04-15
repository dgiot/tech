(window.webpackJsonp=window.webpackJsonp||[]).push([[144],{839:function(t,s,a){"use strict";a.r(s);var e=a(8),o=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"mqtt-sn-协议网关"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mqtt-sn-协议网关"}},[t._v("#")]),t._v(" MQTT-SN 协议网关")]),t._v(" "),a("h2",{attrs:{id:"协议介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#协议介绍"}},[t._v("#")]),t._v(" 协议介绍")]),t._v(" "),a("p",[t._v("MQTT-SN 的信令和 MQTT 大部分都相同，比如都有 Will, 都有 Connect/Subscribe/Publish 命令.")]),t._v(" "),a("p",[t._v("MQTT-SN 最大的不同是，Topic 使用 TopicId 来代替，而 TopicId 是一个16比特的数字。每一个数字对应一个\nTopic, 设备和云端需要使用 REGISTER 命令映射 TopicId 和 Topic 的对应关系。")]),t._v(" "),a("p",[t._v("MQTT-SN 可以随时更改 Will 的内容, 甚至可以取消. 而 MQTT 只允许在 CONNECT 时设定 Will 的内容,\n而且不允许更改.")]),t._v(" "),a("p",[t._v("MQTT-SN 的网络中有网关这种设备，它负责把 MQTT-SN 转换成 MQTT，和云端的 MQTT Broker 通信. MQTT-SN\n的协议支持自动发现网关的功能。")]),t._v(" "),a("p",[t._v("MQTT-SN 还支持设备的睡眠功能，如果设备进入睡眠状态，无法接收 UDP 数据，网关将把下行的 PUBLISH\n消息缓存起来，直到设备苏醒后再传送。")]),t._v(" "),a("p",[t._v("EMQX-SN 是 EMQ X 的一个网关接入模块，实现了 MQTT-SN 的大部分功能，它相当于一个在云端的 MQTT-SN 网关，直接和 EMQ\nX Broker 相连。")]),t._v(" "),a("h2",{attrs:{id:"创建模块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建模块"}},[t._v("#")]),t._v(" 创建模块")]),t._v(" "),a("p",[t._v("打开 "),a("a",{attrs:{href:"http://127.0.0.1:18083/#/modules",target:"_blank",rel:"noopener noreferrer"}},[t._v("EMQ X Dashboard"),a("OutboundLink")],1),t._v("，点击左侧的 “模块” 选项卡，选择添加：")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/backend/emqx/modules/assets/modules.png",alt:"modules.png"}})]),t._v(" "),a("p",[t._v("选择 MQTT-SN 接入网关模块:")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/backend/emqx/modules/assets/proto_mqtt_sn1.png",alt:"proto_mqtt_sn1.png"}})]),t._v(" "),a("p",[t._v("配置相关基础参数:")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/backend/emqx/modules/assets/proto_mqtt_sn2.png",alt:"proto_mqtt_sn2.png"}})]),t._v(" "),a("p",[t._v("添加监听端口:")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/backend/emqx/modules/assets/proto_mqtt_sn3.png",alt:"proto_mqtt_sn3.png"}})]),t._v(" "),a("p",[t._v("配置监听参数:")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/backend/emqx/modules/assets/proto_mqtt_sn4.png",alt:"proto_mqtt_sn4.png"}})]),t._v(" "),a("p",[t._v("点击确认到配置参数页面:")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/backend/emqx/modules/assets/proto_mqtt_sn5.png",alt:"proto_mqtt_sn5.png"}})]),t._v(" "),a("p",[t._v("点击添加后，模块添加完成:\n"),a("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/backend/emqx/modules/assets/proto_mqtt_sn6.png",alt:"proto_mqtt_sn6.png"}})]),t._v(" "),a("h3",{attrs:{id:"配置参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置参数"}},[t._v("#")]),t._v(" 配置参数")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("配置项")]),t._v(" "),a("th",[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("用户名")]),t._v(" "),a("td",[t._v("可选的参数，指定所有 MQTT-SN 连接的用户名，用于 EMQ X 鉴权模块")])]),t._v(" "),a("tr",[a("td",[t._v("密码")]),t._v(" "),a("td",[t._v("可选的参数，和 username 一起使用于 EMQ X 鉴权模块")])])])]),t._v(" "),a("h3",{attrs:{id:"mqtt-sn-客户端库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mqtt-sn-客户端库"}},[t._v("#")]),t._v(" MQTT-SN 客户端库")]),t._v(" "),a("ol",[a("li",[a("a",{attrs:{href:"https://github.com/eclipse/paho.mqtt-sn.embedded-c/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/eclipse/paho.mqtt-sn.embedded-c/"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/ty4tw/MQTT-SN",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/ty4tw/MQTT-SN"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/njh/mqtt-sn-tools",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/njh/mqtt-sn-tools"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/arobenko/mqtt-sn",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/arobenko/mqtt-sn"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=o.exports}}]);