(window.webpackJsonp=window.webpackJsonp||[]).push([[170],{707:function(s,t,a){"use strict";a.r(t);var e=a(8),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"保存数据到-sqlserver"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#保存数据到-sqlserver"}},[s._v("#")]),s._v(" 保存数据到 SQLServer")]),s._v(" "),a("p",[s._v("搭建 SQLServer 数据库，并设置用户名密码为 sa/mqtt_public，以 MacOS X 为例:")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("docker run -e "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'ACCEPT_EULA=Y'")]),s._v(" -e "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'SA_PASSWORD=mqtt_public'")]),s._v(" -p "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1433")]),s._v(":1433 -d mcr.microsoft.com/mssql/server:2017-latest\n")])])]),a("p",[s._v("进入SQLServer容器， 初始化 SQLServer 表:")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ /opt/mssql-tools/bin/sqlcmd -S localhost -U sa -P mqtt_public -d master\n$ mysql -u root -h localhost -ppublic\n")])])]),a("p",[s._v("创建 “test” 数据库:")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("CREATE DATABASE "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\ngo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("p",[s._v("创建 t_mqtt_msg 表:")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("USE")]),s._v(" test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\ngo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TABLE")]),s._v(" t_mqtt_msg "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("id "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("PRIMARY")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("KEY")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("IDENTITY")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000000001")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("NOT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                         msgid   "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("VARCHAR")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("64")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                         topic   "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("VARCHAR")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                         qos     "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("tinyint")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("NOT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DEFAULT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                         payload NVARCHAR"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                         arrived "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DATETIME")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("NOT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DEFAULT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CURRENT_TIMESTAMP")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\ngo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("p",[s._v("配置 odbc 驱动:")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("$ brew install unixodbc freetds\n$ vim /usr/local/etc/odbcinst.ini\n\n[ms-sql]\nDescription = ODBC for FreeTDS\nDriver      = /usr/local/lib/libtdsodbc.so\nSetup       = /usr/local/lib/libtdsodbc.so\nFileUsage   = 1\n")])])]),a("p",[s._v("创建规则:")]),s._v(" "),a("p",[s._v("打开 "),a("a",{attrs:{href:"http://127.0.0.1:18083/#/rules",target:"_blank",rel:"noopener noreferrer"}},[s._v("EMQ X Dashboard"),a("OutboundLink")],1),s._v("，选择左侧的 “规则” 选项卡。")]),s._v(" "),a("p",[s._v("填写规则 SQL:")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"t/#"')]),s._v("\n")])])]),a("p",[a("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/develop_png/zh_CN/rule/assets/rule-engine/sqlserver1.png",alt:"cass_offline_msg_01.png"}})]),s._v(" "),a("p",[s._v("关联动作:")]),s._v(" "),a("p",[s._v("在 “响应动作” 界面选择 “添加”，然后在 “动作” 下拉框里选择 “保存数据到 SQLServer”。")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/develop_png/zh_CN/rule/assets/rule-engine/sqlserver2.png",alt:"cass_offline_msg_01.png"}})]),s._v(" "),a("p",[s._v("填写动作参数:")]),s._v(" "),a("p",[s._v("“保存数据到 SQLServer” 动作需要两个参数：\n4\n2). SQL 模板。这个例子里我们向 SQLServer 插入一条数据，SQL\n​    模板为:")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("insert")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("into")]),s._v(" t_mqtt_msg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("msgid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" topic"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" qos"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" payload"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("values")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'${id}'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'${topic}'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" ${qos}"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'${payload}'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),a("p",[a("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/develop_png/zh_CN/rule/assets/rule-engine/sqlserver4.png",alt:"cass_offline_msg_01.png"}})]),s._v(" "),a("p",[s._v("1). 关联资源的 ID。现在资源下拉框为空，可以点击右上角的 “新建资源” 来创建一个 SQLServer 资源:")]),s._v(" "),a("p",[s._v("填写资源配置:\n数据库名填写 “mqtt”，用户名填写 “sa”，密码填写 “mqtt_public”")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/develop_png/zh_CN/rule/assets/rule-engine/sqlserver3.png",alt:"cass_offline_msg_01.png"}})]),s._v(" "),a("p",[s._v("点击 “新建” 按钮。")]),s._v(" "),a("p",[s._v("返回响应动作界面，点击 “确认”。")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/develop_png/zh_CN/rule/assets/rule-engine/sqlserver5.png",alt:"cass_offline_msg_01.png"}})]),s._v(" "),a("p",[s._v("返回规则创建界面，点击 “创建”。")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/develop_png/zh_CN/rule/assets/rule-engine/sqlserver6.png",alt:"cass_offline_msg_01.png"}})]),s._v(" "),a("p",[s._v("在规则列表里，点击 “查看” 按钮或规则 ID 连接，可以预览刚才创建的规则:")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/develop_png/zh_CN/rule/assets/rule-engine/sqlserver7.png",alt:"cass_offline_msg_01.png"}})]),s._v(" "),a("p",[s._v("规则已经创建完成，现在发一条数据:")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("Topic: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"t/a"')]),s._v("\nQoS: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\nPayload: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hello"')]),s._v("\n")])])]),a("p",[s._v("然后检查 SQLServer 表，新的 record 是否添加成功:")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/develop_png/zh_CN/rule/assets/rule-engine/sqlserver8.png",alt:"cass_offline_msg_01.png"}})])])}),[],!1,null,null,null);t.default=n.exports}}]);