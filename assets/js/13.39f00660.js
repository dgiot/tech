(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{443:function(t,e,n){"use strict";n.r(e);var s=n(11),a=Object(s.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:""}},[n("a",{staticClass:"header-anchor",attrs:{href:"#"}},[t._v("#")])]),t._v(" "),n("h1",{attrs:{id:"一、device-connection"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#一、device-connection"}},[t._v("#")]),t._v(" 一、Device connection")]),t._v(" "),n("p",[t._v("Take mqttfx as an example, download address://ci.iotn2n.com/shuwa/oem/mqttfx.zip "),n("br")]),t._v(" "),n("h3",{attrs:{id:"_1-configure-connection"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-configure-connection"}},[t._v("#")]),t._v(" 1. Configure connection")]),t._v(" "),n("ul",[n("li",[t._v("Broker Address:132.232.119.105")]),t._v(" "),n("li",[t._v("Broker Port:1883")]),t._v(" "),n("li",[t._v("Client ID：Fill in the device ID\n"),n("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/blog/enmqttfx_1.png",alt:"enmqttfx_1.png"}})]),t._v(" "),n("li",[t._v("User Name Password：Rule engine configuration"),n("br"),t._v("\nsuch as:")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("   SELECT clientid, connected_at FROM \"$events/client_connected\" WHERE username = 'ammeter'\n")])])]),n("p",[n("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/blog/mqttfx_1.png",alt:"mqttfx_1.png"}})]),t._v(" "),n("h3",{attrs:{id:"_2-send-messages"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-send-messages"}},[t._v("#")]),t._v(" 2. send messages")]),t._v(" "),n("ul",[n("li",[t._v("topic：Fill in the device release topic\n"),n("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/blog/enmqttfx_2.png",alt:"enmqttfx_2.png"}})]),t._v(" "),n("li",[t._v("Sending content: the physical model json string of the product to which the device belongs\n"),n("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/blog/enmqttfx_3.png",alt:"enmqttfx_3.png"}})]),t._v(" "),n("li",[t._v('Sending {"electric_fr":99}\n'),n("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/blog/mqttfx_2.png",alt:"mqttfx_2.png"}})])]),t._v(" "),n("h3",{attrs:{id:"_3-channel-view-log"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-channel-view-log"}},[t._v("#")]),t._v(" 3. Channel view log"),n("br")]),t._v(" "),n("ul",[n("li",[t._v("Select aisle, and subscription log"),n("br"),t._v(" "),n("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/blog/enmqttfx_4.png",alt:"enmqttfx_4.png"}})]),t._v(" "),n("li",[t._v("Print log when mqtt connects"),n("br"),t._v(" "),n("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/blog/mqttfx_6.png",alt:"mqttfx_6.png"}})]),t._v(" "),n("li",[t._v("Print log when mqtt sends a message"),n("br"),t._v(" "),n("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/blog/mqttfx_7.png",alt:"mqttfx_7.png"}})]),t._v(" "),n("li",[t._v("Print log whenever mqtt is disconnected"),n("br"),t._v(" "),n("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/blog/mqttfx_8.png",alt:"mqttfx_8.png"}})])])])}),[],!1,null,null,null);e.default=a.exports}}]);