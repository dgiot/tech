(window.webpackJsonp=window.webpackJsonp||[]).push([[180],{673:function(s,t,n){"use strict";n.r(t);var a=n(42),e=Object(a.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"离线消息保存到-mongodb"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#离线消息保存到-mongodb"}},[s._v("#")]),s._v(" 离线消息保存到 MongoDB")]),s._v(" "),n("p",[s._v("搭建 MongoDB 数据库，并设置用户名密码为 root/public，以 MacOS X 为例:")]),s._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("$ brew "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" mongodb\n$ brew services start mongodb\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 新增 root/public 用户")]),s._v("\n$ use mqtt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n$ db.createUser"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("user: "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"root"')]),s._v(", pwd: "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"public"')]),s._v(", roles: "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("role: "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"readWrite"')]),s._v(", db: "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"mqtt"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 修改配置，关闭匿名认证")]),s._v("\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" /usr/local/etc/mongod.conf\n\n    security:\n    authorization: enabled\n\n$ brew services restart mongodb\n")])])]),n("p",[s._v("创建 mqtt_msg 表:")]),s._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("$ mongo "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1/mqtt -uroot -ppublic\ndb.createCollection"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"mqtt_msg"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),n("p",[s._v("创建规则:")]),s._v(" "),n("p",[s._v("打开 "),n("a",{attrs:{href:"http://127.0.0.1:18083/#/rules",target:"_blank",rel:"noopener noreferrer"}},[s._v("EMQ X Dashboard"),n("OutboundLink")],1),s._v("，选择左侧的“规则”选项卡。")]),s._v(" "),n("p",[s._v("然后填写规则 SQL:")]),s._v(" "),n("p",[s._v("FROM说明")]),s._v(" "),n("p",[s._v("​\t"),n("strong",[s._v("t/#")]),s._v(": 发布者发布消息触发保存离线消息到MongoDB")]),s._v(" "),n("p",[s._v("​\t"),n("strong",[s._v("$events/session_subscribed")]),s._v(": 订阅者订阅主题触发获取离线消息")]),s._v(" "),n("p",[s._v("​\t"),n("strong",[s._v("$events/message_acked")]),s._v(": 订阅者回复消息ACK后触发删除已经被接收的离线消息")]),s._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("SELECT * FROM "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"t/#"')]),s._v(", "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$events")]),s._v('/session_subscribed"')]),s._v(", "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$events")]),s._v('/message_acked"')]),s._v(" WHERE topic "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("~ "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'t/#'")]),s._v("\n")])])]),n("p",[n("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/develop_png/zh_CN/rule/assets/rule-engine/mongo_offline_msg_01.png",alt:"mongo_sub_02.png"}})]),s._v(" "),n("p",[s._v("关联动作:")]),s._v(" "),n("p",[s._v("在“响应动作”界面选择“添加动作”，然后在“动作”下拉框里选择“离线消息保存到 MongoDB”。")]),s._v(" "),n("p",[n("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/develop_png/zh_CN/rule/assets/rule-engine/mongo_offline_msg_02.png",alt:"mongo_sub_02.png"}})]),s._v(" "),n("p",[s._v("现在资源下拉框为空，可以点击右上角的 “新建” 来创建一个 MongoDB 资源:")]),s._v(" "),n("p",[n("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/develop_png/zh_CN/rule/assets/rule-engine/mongo_offline_msg_03.png",alt:"mongo_sub_02.png"}})]),s._v(" "),n("p",[s._v("弹出一个“创建资源”对话框")]),s._v(" "),n("p",[n("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/develop_png/zh_CN/rule/assets/rule-engine/mongo_offline_msg_04.png",alt:"mongo_sub_02.png"}})]),s._v(" "),n("p",[s._v("填写资源配置:")]),s._v(" "),n("p",[s._v("填写真实的 MongoDB 服务器地址，其他配置填写相应的值，然后点击 “测试连接” 按钮，确保连接测试成功。")]),s._v(" "),n("p",[s._v("最后点击 “确定” 按钮。")]),s._v(" "),n("p",[n("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/develop_png/zh_CN/rule/assets/rule-engine/mongo_offline_msg_05.png",alt:"mongo_sub_02.png"}})]),s._v(" "),n("p",[s._v("返回响应动作界面，点击 “确认”。")]),s._v(" "),n("p",[n("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/develop_png/zh_CN/rule/assets/rule-engine/mongo_offline_msg_06.png",alt:"mongo_sub_02.png"}})]),s._v(" "),n("p",[s._v("返回规则创建界面，点击 “创建”。")]),s._v(" "),n("p",[n("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/develop_png/zh_CN/rule/assets/rule-engine/mongo_offline_msg_07.png",alt:"mongo_sub_02.png"}})]),s._v(" "),n("p",[s._v("规则已经创建完成，通过 Dashboard 的 WebSocket 客户端发一条数据**(发布消息的QoS必须大于0)**:")]),s._v(" "),n("p",[n("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/develop_png/zh_CN/rule/assets/rule-engine/mongo_offline_msg_08.png",alt:"mongo_sub_02.png"}})]),s._v(" "),n("p",[s._v("消息发送后，通过 mongo 查看到消息被保存到 MongoDB 里面:")]),s._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("db.mqtt_msg.find()\n")])])]),n("p",[n("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/develop_png/zh_CN/rule/assets/rule-engine/mongo_offline_msg_09.png",alt:"mongo_sub_02.png"}})]),s._v(" "),n("p",[s._v('使用另外一个客户端，订阅主题 "t/1" (订阅主题的QoS必须大于0，否则消息会被重复接收):')]),s._v(" "),n("p",[n("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/develop_png/zh_CN/rule/assets/rule-engine/mongo_offline_msg_10.png",alt:"mongo_sub_02.png"}})]),s._v(" "),n("p",[s._v("订阅后马上接收到了保存到 MongoDB 里面的离线消息:")]),s._v(" "),n("p",[n("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/develop_png/zh_CN/rule/assets/rule-engine/mongo_offline_msg_11.png",alt:"mongo_sub_02.png"}})]),s._v(" "),n("p",[s._v("离线消息被接收后会在 MongoDB 中删除:")]),s._v(" "),n("p",[n("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/develop_png/zh_CN/rule/assets/rule-engine/mongo_offline_msg_12.png",alt:"mongo_sub_02.png"}})])])}),[],!1,null,null,null);t.default=e.exports}}]);