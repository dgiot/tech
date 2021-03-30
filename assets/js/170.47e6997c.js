(window.webpackJsonp=window.webpackJsonp||[]).push([[170],{658:function(s,t,e){"use strict";e.r(t);var a=e(42),n=Object(a.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"桥接数据到-mqtt-broker"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#桥接数据到-mqtt-broker"}},[s._v("#")]),s._v(" 桥接数据到 MQTT Broker")]),s._v(" "),e("p",[s._v("搭建 MQTT Broker 环境，以 MacOS X 为例:")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("$ brew "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" mosquitto\n\n启动 mosquitto\n$ mosquitto\n")])])]),e("p",[s._v("创建规则:")]),s._v(" "),e("p",[s._v("打开 "),e("a",{attrs:{href:"http://127.0.0.1:18083/#/rules",target:"_blank",rel:"noopener noreferrer"}},[s._v("EMQ X Dashboard"),e("OutboundLink")],1),s._v("，选择左侧的 “规则” 选项卡。")]),s._v(" "),e("p",[s._v("填写规则 SQL:")]),s._v(" "),e("div",{staticClass:"language-sql extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"t/#"')]),s._v("\n")])])]),e("p",[e("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/develop_png/zh_CN/rule/assets/rule-engine/rule_sql.png",alt:"cass_offline_msg_01.png"}})]),s._v(" "),e("p",[s._v("关联动作:")]),s._v(" "),e("p",[s._v("在 “响应动作” 界面选择 “添加”，然后在 “动作” 下拉框里选择 “桥接数据到 MQTT Broker”。")]),s._v(" "),e("p",[e("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/develop_png/zh_CN/rule/assets/rule-engine/mqtt-action-0.png",alt:"cass_offline_msg_01.png"}})]),s._v(" "),e("p",[s._v("填写动作参数:")]),s._v(" "),e("p",[s._v('"桥接数据到 MQTT Broker" 动作只需要一个参数：')]),s._v(" "),e("p",[s._v("关联资源。现在资源下拉框为空，可以点击右上角的 “新建资源” 来创建一个 MQTT Bridge 资源:")]),s._v(" "),e("p",[e("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/develop_png/zh_CN/rule/assets/rule-engine/mqtt-action-1.png",alt:"cass_offline_msg_01.png"}})]),s._v(" "),e("p",[s._v("选择 MQTT Bridge 资源,填写资源配置:")]),s._v(" "),e("p",[s._v("填写真实的 mosquitto 服务器地址，其他配置保持默认值，然后点击 “测试连接” 按钮，确保连接测试成功。")]),s._v(" "),e("p",[s._v("最后点击 “新建” 按钮。")]),s._v(" "),e("p",[e("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/develop_png/zh_CN/rule/assets/rule-engine/mqtt-resource-1.png",alt:"cass_offline_msg_01.png"}})]),s._v(" "),e("p",[s._v("返回响应动作界面，点击 “确认”。")]),s._v(" "),e("p",[e("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/develop_png/zh_CN/rule/assets/rule-engine/mqtt-action-2.png",alt:"cass_offline_msg_01.png"}})]),s._v(" "),e("p",[s._v("返回规则创建界面，点击 “新建”。")]),s._v(" "),e("p",[e("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/develop_png/zh_CN/rule/assets/rule-engine/mqtt-rulesql-1.png",alt:"cass_offline_msg_01.png"}})]),s._v(" "),e("p",[s._v("规则已经创建完成，现在发一条数据:")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("Topic: "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"t/1"')]),s._v("\n\nQoS: "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n\nPayload: "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Hello, World\\!"')]),s._v("\n")])])]),e("p",[s._v("然后通过 mqtt 客户端查看消息是否发布成功")]),s._v(" "),e("p",[e("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/develop_png/zh_CN/rule/assets/rule-engine/mqtt-result-0.png",alt:"cass_offline_msg_01.png"}})]),s._v(" "),e("p",[s._v("在规则列表里，可以看到刚才创建的规则的命中次数已经增加了 1:")]),s._v(" "),e("p",[e("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/develop_png/zh_CN/rule/assets/rule-engine/mqtt-rulelist-0.png",alt:"cass_offline_msg_01.png"}})])])}),[],!1,null,null,null);t.default=n.exports}}]);