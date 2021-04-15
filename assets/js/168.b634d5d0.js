(window.webpackJsonp=window.webpackJsonp||[]).push([[168],{803:function(s,a,t){"use strict";t.r(a);var e=t(8),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"保存数据到-oracle-db"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#保存数据到-oracle-db"}},[s._v("#")]),s._v(" 保存数据到 Oracle DB")]),s._v(" "),t("p",[s._v("创建 t_mqtt_msg 表:")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TABLE")]),s._v(" t_mqtt_msg "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("msgid VARCHAR2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("64")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("topic VARCHAR2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("255")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" qos NUMBER"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" payload NCLOB"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),t("p",[t("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/backend/emqx/rule/assets/rule-engine/oracle_action_1.png",alt:"cass_offline_msg_01.png"}})]),s._v(" "),t("p",[s._v("创建规则:")]),s._v(" "),t("p",[s._v("打开 "),t("a",{attrs:{href:"http://127.0.0.1:18083/#/rules",target:"_blank",rel:"noopener noreferrer"}},[s._v("EMQ X Dashboard"),t("OutboundLink")],1),s._v("，选择左侧的 “规则” 选项卡。")]),s._v(" "),t("p",[s._v("填写规则 SQL:")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"t/#"')]),s._v("\n")])])]),t("p",[t("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/backend/emqx/rule/assets/rule-engine/rule_sql.png",alt:"cass_offline_msg_01.png"}})]),s._v(" "),t("p",[s._v("关联动作:")]),s._v(" "),t("p",[s._v("在 “响应动作” 界面选择 “添加”，然后在 “动作” 下拉框里选择 “保存数据到 Oracle Database”。")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/backend/emqx/rule/assets/rule-engine/oracle_action_2.png",alt:"cass_offline_msg_01.png"}})]),s._v(" "),t("p",[s._v("填写动作参数:")]),s._v(" "),t("p",[s._v("“保存数据到 Oracle Database” 动作需要两个参数：")]),s._v(" "),t("p",[s._v("1). SQL 模板。这个例子里我们向 Oracle Database 插入一条数据，SQL 模板为:")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INSERT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INTO")]),s._v(" T_MQTT_MSG "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("MSGID"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" TOPIC"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" QOS"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" PAYLOAD"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("values")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'${id}'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'${topic}'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'${qos}'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'${payload}'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("p",[s._v("2). 关联资源的 ID。现在资源下拉框为空，可以点击右上角的 “新建资源” 来创建一个 Oracle Database  资源:")]),s._v(" "),t("p",[s._v("填写资源配置:")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/backend/emqx/rule/assets/rule-engine/oracle_action_3.png",alt:"cass_offline_msg_01.png"}})]),s._v(" "),t("p",[s._v("点击 “新建” 按钮。")]),s._v(" "),t("p",[s._v("返回响应动作界面，点击 “确认”。")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/backend/emqx/rule/assets/rule-engine/oracle_action_4.png",alt:"cass_offline_msg_01.png"}})]),s._v(" "),t("p",[s._v("返回规则创建界面，点击 “创建”。")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/backend/emqx/rule/assets/rule-engine/oracle_action_5.png",alt:"cass_offline_msg_01.png"}})]),s._v(" "),t("p",[s._v("在规则列表里，点击 “查看” 按钮或规则 ID 连接，可以预览刚才创建的规则:")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/backend/emqx/rule/assets/rule-engine/oracle_action_6.png",alt:"cass_offline_msg_01.png"}})]),s._v(" "),t("p",[s._v("规则已经创建完成，现在发一条数据:")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("Topic: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"t/a"')]),s._v("\nQoS: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\nPayload: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hello"')]),s._v("\n")])])]),t("p",[s._v("查看规则命中次数")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/backend/emqx/rule/assets/rule-engine/oracle_action_7.png",alt:"cass_offline_msg_01.png"}})])])}),[],!1,null,null,null);a.default=n.exports}}]);