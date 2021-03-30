(window.webpackJsonp=window.webpackJsonp||[]).push([[176],{667:function(s,t,a){"use strict";a.r(t);var n=a(42),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"从-mysql-中获取订阅关系"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#从-mysql-中获取订阅关系"}},[s._v("#")]),s._v(" 从 MySQL 中获取订阅关系")]),s._v(" "),a("p",[s._v("搭建 MySQL 数据库，并设置用户名密码为 root/public，以 MacOS X 为例:")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ brew "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" mysql\n\n$ brew services start mysql\n\n$ mysql -u root -h localhost -p\n\nALTER "),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("USER")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'root'")]),s._v("@"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'localhost'")]),s._v(" IDENTIFIED BY "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'public'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("p",[s._v("初始化 MySQL 数据库:")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ mysql -u root -h localhost -ppublic\n\ncreate database mqtt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("p",[s._v("创建 mqtt_sub 表:")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DROP")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TABLE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("IF")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("EXISTS")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("mqtt_sub"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TABLE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("mqtt_sub"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("unsigned")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("NOT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AUTO_INCREMENT")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("clientid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("varchar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("64")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DEFAULT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("topic"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("varchar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("180")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DEFAULT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("qos"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("tinyint")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DEFAULT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("PRIMARY")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("KEY")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("KEY")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("mqtt_sub_idx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("clientid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("topic"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("qos"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("UNIQUE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("KEY")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("mqtt_sub_key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("clientid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("topic"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INDEX")]),s._v(" topic_index"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("topic"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ENGINE")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("InnoDB")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DEFAULT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CHARSET")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("utf8MB4"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[s._v("警告")]),s._v(" "),a("p",[s._v("订阅关系表结构不能修改，请使用上面SQL语句创建")])]),s._v(" "),a("p",[s._v("创建规则:")]),s._v(" "),a("p",[s._v("打开 "),a("a",{attrs:{href:"http://127.0.0.1:18083/#/rules",target:"_blank",rel:"noopener noreferrer"}},[s._v("EMQ X Dashboard"),a("OutboundLink")],1),s._v("，选择左侧的“规则”选项卡。")]),s._v(" "),a("p",[s._v("然后填写规则 SQL:")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("SELECT * FROM "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$events")]),s._v('/client_connected"')]),s._v("\n")])])]),a("p",[a("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/develop_png/zh_CN/rule/assets/rule-engine/mysql_sub_01.png",alt:"mongo_sub_02.png"}})]),s._v(" "),a("p",[s._v("关联动作:")]),s._v(" "),a("p",[s._v("在“响应动作”界面选择“添加动作”，然后在“新增动作”下拉框里选择“从MySQL中获取订阅列表”")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/develop_png/zh_CN/rule/assets/rule-engine/mysql_sub_02.png",alt:"mongo_sub_02.png"}})]),s._v(" "),a("p",[s._v("填写动作参数:")]),s._v(" "),a("p",[s._v("“从 MySQL 中获取订阅列表”动作需要一个参数：")]),s._v(" "),a("p",[s._v("1). 关联资源。现在资源下拉框为空，可以点击右上角的 “新建” 来创建一个 MySQL 资源：")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/develop_png/zh_CN/rule/assets/rule-engine/mysql_sub_03.png",alt:"mongo_sub_02.png"}})]),s._v(" "),a("p",[s._v("弹出“创建资源”对话框")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/develop_png/zh_CN/rule/assets/rule-engine/mysql_sub_04.png",alt:"mongo_sub_02.png"}})]),s._v(" "),a("p",[s._v("填写资源配置:")]),s._v(" "),a("p",[s._v("填写真实的 MySQL 服务器地址，其他配置相应的值，然后点击 “测试连接” 按钮，确保连接测试成功。")]),s._v(" "),a("p",[s._v("最后点击 “确定” 按钮。")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/develop_png/zh_CN/rule/assets/rule-engine/mysql_sub_05.png",alt:"mongo_sub_02.png"}})]),s._v(" "),a("p",[s._v("返回响应动作界面，点击 “确认”。")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/develop_png/zh_CN/rule/assets/rule-engine/mysql_sub_06.png",alt:"mongo_sub_02.png"}})]),s._v(" "),a("p",[s._v("返回规则创建界面，点击 “创建”。")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/develop_png/zh_CN/rule/assets/rule-engine/mysql_sub_07.png",alt:"mongo_sub_02.png"}})]),s._v(" "),a("p",[s._v("规则已经创建完成，通过 “mysql” 往MySQL插入一条订阅关系:")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('insert into mqtt_sub(clientid, topic, qos) values("test", "t1", 1);\n')])])]),a("p",[a("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/develop_png/zh_CN/rule/assets/rule-engine/mysql_sub_08.png",alt:"mongo_sub_02.png"}})]),s._v(" "),a("p",[s._v("通过 Dashboard 登录 clientid 为 test 的设备:")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/develop_png/zh_CN/rule/assets/rule-engine/mysql_sub_09.png",alt:"mongo_sub_02.png"}})]),s._v(" "),a("p",[s._v("查看“订阅”列表，可以看到 Broker 从 MySQL 里面获取到订阅关系，并代理设备订阅:")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/develop_png/zh_CN/rule/assets/rule-engine/mysql_sub_10.png",alt:"mongo_sub_02.png"}})])])}),[],!1,null,null,null);t.default=e.exports}}]);