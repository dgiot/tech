(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{799:function(t,a,s){"use strict";s.r(a);var r=s(8),e=Object(r.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"rpc-桥接"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rpc-桥接"}},[t._v("#")]),t._v(" RPC 桥接")]),t._v(" "),s("p",[t._v("EMQ X 桥接转发 MQTT 消息到远程 EMQ X:")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/backend/emqx/bridge/assets/bridge_rpc.png",alt:"bridge_rpc.png"}})]),t._v(" "),s("p",[t._v("rpc bridge 桥接插件配置文件: etc/plugins/emqx_bridge_mqtt.conf")]),t._v(" "),s("h2",{attrs:{id:"配置-rpc-桥接的-broker-地址"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置-rpc-桥接的-broker-地址"}},[t._v("#")]),t._v(" 配置 RPC 桥接的 Broker 地址")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("bridge.mqtt.emqx.address "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" emqx2@192.168.1.2\n")])])]),s("h2",{attrs:{id:"配置-mqtt-桥接转发和订阅主题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置-mqtt-桥接转发和订阅主题"}},[t._v("#")]),t._v(" 配置 MQTT 桥接转发和订阅主题")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## 桥接的 mountpoint(挂载点)")]),t._v("\nbridge.mqtt.emqx.mountpoint "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" bridge/emqx1/"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${node}")]),t._v("/\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## 转发消息的主题")]),t._v("\nbridge.mqtt.emqx.forwards "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" topic1/"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#,topic2/#")]),t._v("\n")])])]),s("h2",{attrs:{id:"mqtt-桥接转发和订阅主题说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mqtt-桥接转发和订阅主题说明"}},[t._v("#")]),t._v(" MQTT 桥接转发和订阅主题说明")]),t._v(" "),s("p",[t._v("挂载点 Mountpoint: mountpoint 用于在转发消息时加上主题前缀，该配置选项须配合 forwards 使用，转发主题为\nsensor1/hello 的消息, 到达远程节点时主题为 bridge/aws/emqx1@192.168.1.1/sensor1/hello。")]),t._v(" "),s("p",[t._v("转发主题 Forwards: 转发到本地 EMQX 指定 forwards 主题上的消息都会被转发到远程 MQTT Broker 上。")]),t._v(" "),s("h2",{attrs:{id:"桥接-cli-命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#桥接-cli-命令"}},[t._v("#")]),t._v(" 桥接 CLI 命令")]),t._v(" "),s("p",[t._v("桥接 CLI 的使用方式与 mqtt bridge 相同。")])])}),[],!1,null,null,null);a.default=e.exports}}]);