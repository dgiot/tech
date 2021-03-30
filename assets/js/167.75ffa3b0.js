(window.webpackJsonp=window.webpackJsonp||[]).push([[167],{654:function(s,t,a){"use strict";a.r(t);var e=a(42),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"保存数据到-timescaledb"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#保存数据到-timescaledb"}},[s._v("#")]),s._v(" 保存数据到 TimescaleDB")]),s._v(" "),a("p",[s._v("搭建 TimescaleDB 数据库环境，以 MacOS X 为例:")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ docker pull timescale/timescaledb\n\n$ docker run -d --name timescaledb -p "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5432")]),s._v(":5432 -e "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("POSTGRES_PASSWORD")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("password timescale/timescaledb:latest-pg11\n\n$ docker "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" -it timescaledb psql -U postgres\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 创建并连接 tutorial 数据库")]),s._v("\nCREATE database tutorial"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("c tutorial\n\nCREATE EXTENSION IF NOT EXISTS timescaledb CASCADE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("p",[s._v("初始化 TimescaleDB 表:")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ docker "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" -it timescaledb psql -U postgres -d tutorial\n")])])]),a("p",[s._v("创建 "),a("code",[s._v("conditions")]),s._v(" 表:")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TABLE")]),s._v(" conditions "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("time")]),s._v("        TIMESTAMPTZ       "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("NOT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    location    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TEXT")]),s._v("              "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("NOT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    temperature "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DOUBLE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("PRECISION")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    humidity    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DOUBLE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("PRECISION")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" create_hypertable"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'conditions'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'time'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("p",[s._v("创建规则:")]),s._v(" "),a("p",[s._v("打开 "),a("a",{attrs:{href:"http://127.0.0.1:18083/#/rules",target:"_blank",rel:"noopener noreferrer"}},[s._v("EMQ X Dashboard"),a("OutboundLink")],1),s._v("，选择左侧的 “规则” 选项卡。")]),s._v(" "),a("p",[s._v("填写规则 SQL:")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v("\n    payload "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" p"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    p"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("temp")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("temp")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    p"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("humidity "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" humidity"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    p"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("location "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" location\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"#"')]),s._v("\n")])])]),a("p",[a("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/develop_png/zh_CN/rule/assets/rule-engine/timescaledb-rulesql-0@2x.png",alt:"cass_offline_msg_01.png"}})]),s._v(" "),a("p",[s._v("关联动作:")]),s._v(" "),a("p",[s._v("在 “响应动作” 界面选择 “添加”，然后在 “动作” 下拉框里选择 “保存数据到 TimescaleDB”。")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/develop_png/zh_CN/rule/assets/rule-engine/timescaledb-action-0@2x.png",alt:"cass_offline_msg_01.png"}})]),s._v(" "),a("p",[s._v("填写动作参数:")]),s._v(" "),a("p",[s._v("“保存数据到 TimescaleDB” 动作需要两个参数：")]),s._v(" "),a("p",[s._v("1). SQL 模板。这个例子里我们向 TimescaleDB 插入一条数据，SQL\n​    模板为:")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("insert")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("into")]),s._v(" conditions"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("time")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" location"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" temperature"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" humidity"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("values")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("NOW")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" ${location}"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" ${"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("temp")]),s._v("}"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" ${humidity}"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),a("p",[s._v("插入数据之前，SQL 模板里的 ${key} 占位符会被替换为相应的值。")]),s._v(" "),a("p",[s._v("2). 关联资源。现在资源下拉框为空，可以点击右上角的 “新建资源” 来创建一个 TimescaleDB 资源:")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/develop_png/zh_CN/rule/assets/rule-engine/timescaledb-resource-0@2x.png",alt:"cass_offline_msg_01.png"}})]),s._v(" "),a("p",[s._v("选择 “PostgreSQL 资源”。")]),s._v(" "),a("p",[s._v("填写资源配置:")]),s._v(" "),a("p",[s._v("数据库名填写 “mqtt”，用户名填写 “root”，其他配置保持默认值，然后点击 “测试连接” 按钮，确保连接测试成功。")]),s._v(" "),a("p",[s._v("最后点击 “新建” 按钮。")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/develop_png/zh_CN/rule/assets/rule-engine/pgsql-resource-1@2x.png",alt:"cass_offline_msg_01.png"}})]),s._v(" "),a("p",[s._v("返回响应动作界面，点击 “确认”。")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/develop_png/zh_CN/rule/assets/rule-engine/timescaledb-action-1@2x.png",alt:"cass_offline_msg_01.png"}})]),s._v(" "),a("p",[s._v("返回规则创建界面，点击 “新建”。")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/develop_png/zh_CN/rule/assets/rule-engine/timescaledb-rulesql-1@2x.png",alt:"cass_offline_msg_01.png"}})]),s._v(" "),a("p",[s._v("规则已经创建完成，现在发一条数据:")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("Topic: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"t/1"')]),s._v("\n\nQoS: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n\nPayload: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"{"')]),s._v("temp"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('":24,"')]),s._v("humidity"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('":30,"')]),s._v("location"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('":"')]),s._v("hangzhou"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"}"')]),s._v("\n")])])]),a("p",[s._v("然后检查 TimescaleDB 表，新的 record 是否添加成功:")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("tutorial")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# SELECT * FROM conditions LIMIT 100;")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("time")]),s._v("              "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" location "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" temperature "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" humidity\n-------------------------------+----------+-------------+----------\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2019")]),s._v("-06-27 01:41:08.752103+00 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" hangzhou "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("          "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("24")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("       "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("30")]),s._v("\n")])])]),a("p",[s._v("在规则列表里，可以看到刚才创建的规则的命中次数已经增加了 1:")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/develop_png/zh_CN/rule/assets/rule-engine/timescaledb-rulelist-0@2x.png",alt:"cass_offline_msg_01.png"}})])])}),[],!1,null,null,null);t.default=n.exports}}]);