(window.webpackJsonp=window.webpackJsonp||[]).push([[182],{676:function(s,t,a){"use strict";a.r(t);var e=a(42),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"离线消息保存到-postgresql"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#离线消息保存到-postgresql"}},[s._v("#")]),s._v(" 离线消息保存到 PostgreSQL")]),s._v(" "),a("p",[s._v("搭建 PostgreSQL 数据库，以 MacOS X 为例:")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ brew "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" postgresql\n$ brew services start postgresql\n")])])]),a("p",[s._v("创建 mqtt 数据库:")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# 使用用户名 postgres 创建名为 'mqtt' 的数据库\n$ createdb -U postgres mqtt\n\n$ psql -U postgres mqtt\n\nmqtt=> \\dn;\nList of schemas\nName  | Owner\n--------+-------\npublic | postgres\n(1 row)\n")])])]),a("p",[s._v("创建 mqtt_msg 表:")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[s._v("$ psql "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("U postgres mqtt\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TABLE")]),s._v(" mqtt_msg "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n  id SERIAL8 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("primary")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("key")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  msgid "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("character")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("varying")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("64")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  sender "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("character")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("varying")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("64")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  topic "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("character")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("varying")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("255")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  qos "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("integer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  retain "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("integer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  payload "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("text")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  arrived "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("timestamp")]),s._v(" without "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("time")]),s._v(" zone\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TABLE")]),s._v(" mqtt_acked "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n  id SERIAL8 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("primary")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("key")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  clientid "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("character")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("varying")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("64")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  topic "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("character")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("varying")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("64")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  mid "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("integer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  created "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("timestamp")]),s._v(" without "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("time")]),s._v(" zone"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("UNIQUE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("clientid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" topic"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[s._v("警告")]),s._v(" "),a("p",[s._v("消息表结构不能修改，请使用上面SQL语句创建")])]),s._v(" "),a("p",[s._v("创建规则:")]),s._v(" "),a("p",[s._v("打开 "),a("a",{attrs:{href:"http://127.0.0.1:18083/#/rules",target:"_blank",rel:"noopener noreferrer"}},[s._v("EMQ X Dashboard"),a("OutboundLink")],1),s._v("，选择左侧的“规则”选项卡。")]),s._v(" "),a("p",[s._v("然后填写规则 SQL:")]),s._v(" "),a("p",[s._v("FROM说明")]),s._v(" "),a("p",[s._v("​\t"),a("strong",[s._v("t/#")]),s._v(": 发布者发布消息触发保存离线消息到PostgreSQL")]),s._v(" "),a("p",[s._v("​\t"),a("strong",[s._v("$events/session_subscribed")]),s._v(": 订阅者订阅主题触发获取离线消息")]),s._v(" "),a("p",[s._v("​\t"),a("strong",[s._v("$events/message_acked")]),s._v(": 订阅者回复消息ACK后触发删除已经被接收的离线消息")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("SELECT * FROM "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"t/#"')]),s._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$events")]),s._v('/session_subscribed"')]),s._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$events")]),s._v('/message_acked"')]),s._v(" WHERE topic "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("~ "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'t/#'")]),s._v("\n")])])]),a("p",[a("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/develop_png/zh_CN/rule/assets/rule-engine/pg_offline_msg_01.png",alt:"mongo_sub_02.png"}})]),s._v(" "),a("p",[s._v("关联动作:")]),s._v(" "),a("p",[s._v("在“响应动作”界面选择“添加动作”，然后在“动作”下拉框里选择“离线消息保存到 PostgreSQL”。")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/develop_png/zh_CN/rule/assets/rule-engine/pg_offline_msg_02.png",alt:"mongo_sub_02.png"}})]),s._v(" "),a("p",[s._v("现在资源下拉框为空，可以点击右上角的 “新建” 来创建一个 PostgreSQL 资源:")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/develop_png/zh_CN/rule/assets/rule-engine/pg_offline_msg_03.png",alt:"mongo_sub_02.png"}})]),s._v(" "),a("p",[s._v("弹出一个“创建资源”对话框")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/develop_png/zh_CN/rule/assets/rule-engine/pg_offline_msg_04.png",alt:"mongo_sub_02.png"}})]),s._v(" "),a("p",[s._v("填写资源配置:")]),s._v(" "),a("p",[s._v("填写真实的 PostgreSQL 服务器地址，其他配置填写相应的值，然后点击 “测试连接” 按钮，确保连接测试成功。")]),s._v(" "),a("p",[s._v("最后点击 “确定” 按钮。")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/develop_png/zh_CN/rule/assets/rule-engine/pg_offline_msg_05.png",alt:"mongo_sub_02.png"}})]),s._v(" "),a("p",[s._v("返回响应动作界面，点击 “确认”。")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/develop_png/zh_CN/rule/assets/rule-engine/pg_offline_msg_06.png",alt:"mongo_sub_02.png"}})]),s._v(" "),a("p",[s._v("返回规则创建界面，点击 “创建”。")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/develop_png/zh_CN/rule/assets/rule-engine/pg_offline_msg_07.png",alt:"mongo_sub_02.png"}})]),s._v(" "),a("p",[s._v("规则已经创建完成，通过 Dashboard 的 WebSocket 客户端发一条数据**(发布消息的QoS必须大于0)**:")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/develop_png/zh_CN/rule/assets/rule-engine/pg_offline_msg_08.png",alt:"mongo_sub_02.png"}})]),s._v(" "),a("p",[s._v("消息发送后，通过 psql 查看到消息被保存到 PostgreSQL 里面:")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/develop_png/zh_CN/rule/assets/rule-engine/pg_offline_msg_09.png",alt:"mongo_sub_02.png"}})]),s._v(" "),a("p",[s._v('使用另外一个客户端，订阅主题 "t/1" (订阅主题的QoS必须大于0，否则消息会被重复接收):')]),s._v(" "),a("p",[a("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/develop_png/zh_CN/rule/assets/rule-engine/pg_offline_msg_10.png",alt:"mongo_sub_02.png"}})]),s._v(" "),a("p",[s._v("订阅后马上接收到了保存到 PostgreSQL 里面的离线消息:")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/develop_png/zh_CN/rule/assets/rule-engine/pg_offline_msg_11.png",alt:"mongo_sub_02.png"}})]),s._v(" "),a("p",[s._v("离线消息被接收后会在 PostgreSQL 中删除:")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/develop_png/zh_CN/rule/assets/rule-engine/pg_offline_msg_12.png",alt:"mongo_sub_02.png"}})])])}),[],!1,null,null,null);t.default=n.exports}}]);