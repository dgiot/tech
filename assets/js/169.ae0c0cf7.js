(window.webpackJsonp=window.webpackJsonp||[]).push([[169],{604:function(t,s,a){"use strict";a.r(s);var e=a(10),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"保存数据到-tdengine"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#保存数据到-tdengine"}},[t._v("#")]),t._v(" 保存数据到 TDengine")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/taosdata/TDengine",target:"_blank",rel:"noopener noreferrer"}},[t._v("TDengine"),a("OutboundLink")],1),t._v(" 是"),a("a",{attrs:{href:"https://www.taosdata.com/cn/",target:"_blank",rel:"noopener noreferrer"}},[t._v("涛思数据"),a("OutboundLink")],1),t._v("推出的一款开源的专为物联网、车联网、工业互联网、IT 运维等设计和优化的大数据平台。除核心的快 10 倍以上的时序数据库功能外，还提供缓存、数据订阅、流式计算等功能，最大程度减少研发和运维的复杂度。")]),t._v(" "),a("p",[t._v("EMQ X 支持通过 "),a("strong",[t._v("发送到 Web 服务")]),t._v(" 的方式保存数据到 TDengine，也在企业版上提供原生的 TDengine 驱动实现直接保存。")]),t._v(" "),a("p",[t._v("使用 Docker 安装 TDengine 或在 "),a("a",{attrs:{href:"https://marketplace.huaweicloud.com/product/OFFI454488918838128640",target:"_blank",rel:"noopener noreferrer"}},[t._v("Cloud"),a("OutboundLink")],1),t._v(" 上部署：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("docker run --name TDengine -d -p "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6030")]),t._v(":6030 -p "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6035")]),t._v(":6035 -p "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6041")]),t._v(":6041 -p "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6030")]),t._v("-6040:6030-6040/udp TDengine/TDengine \n")])])]),a("p",[t._v("进入 Docker 容器：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("docker "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("exec")]),t._v(" -it TDengine "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("bash")]),t._v("\ntaos\n")])])]),a("p",[t._v("创建 “test” 数据库:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("create database "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("创建 t_mqtt_msg 表，关于 TDengine 数据结构以及 SQL 命令参见 "),a("a",{attrs:{href:"https://www.taosdata.com/cn/documentation/taos-sql/#%E8%A1%A8%E7%AE%A1%E7%90%86",target:"_blank",rel:"noopener noreferrer"}},[t._v("TAOS SQL"),a("OutboundLink")],1),t._v("：")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" t_mqtt_msg "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  ts "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("timestamp")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n \tmsgid "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("NCHAR")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("64")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  topic "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("NCHAR")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("255")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  qos "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TINYINT")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  payload "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("BINARY")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1024")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  arrived "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("timestamp")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[a("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/develop_png/zh_CN/rule/assets/rule-engine/image-20200729163951206.png",alt:"image-20200729163951206.png"}})]),t._v(" "),a("p",[t._v("创建规则:")]),t._v(" "),a("p",[t._v("打开 "),a("a",{attrs:{href:"http://127.0.0.1:18083/#/rules",target:"_blank",rel:"noopener noreferrer"}},[t._v("EMQ X Dashboard"),a("OutboundLink")],1),t._v("，选择左侧的 “规则” 选项卡。")]),t._v(" "),a("p",[t._v("填写规则 SQL:")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"t/#"')]),t._v("\n")])])]),a("p",[a("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/develop_png/zh_CN/rule/assets/rule-engine/rule_sql.png",alt:"cass_offline_msg_01.png"}})]),t._v(" "),a("p",[t._v("后续动作创建操作可以根据你的 EMQ X 版本灵活选择。")]),t._v(" "),a("h2",{attrs:{id:"原生方式-企业版"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#原生方式-企业版"}},[t._v("#")]),t._v(" 原生方式（企业版）")]),t._v(" "),a("p",[t._v("关联动作:")]),t._v(" "),a("p",[t._v("在 “响应动作” 界面选择 “添加”，然后在 “动作” 下拉框里选择 “保存数据到 TDengine”。")]),t._v(" "),a("blockquote",[a("p",[t._v("仅限企业版 4.1.1 及以后版本。")])]),t._v(" "),a("p",[t._v("填写动作参数:")]),t._v(" "),a("p",[t._v("“保存数据到 TDengine” 动作需要两个参数：")]),t._v(" "),a("p",[t._v("1). SQL 模板。这个例子里我们向 TDengine 插入一条数据，注意我们应当在 SQL 中指定数据库名，字符类型也要用单引号括起来，SQL 模板为：")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("insert")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("into")]),t._v(" test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("t_mqtt_msg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ts"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" msgid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" topic"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" qos"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" payload"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("values")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("now"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'${id}'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'${topic}'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ${qos}"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'${payload}'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[a("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/develop_png/zh_CN/rule/assets/rule-engine/image-20200729164158454.png",alt:"image-20200729164158454.png"}})]),t._v(" "),a("p",[t._v("2). 关联资源的 ID。现在资源下拉框为空，可以点击右上角的 “新建资源” 来创建一个 TDengine资源:")]),t._v(" "),a("p",[t._v("填写资源配置:")]),t._v(" "),a("p",[t._v("用户名填写 “root”，密码填写缺省密码 “taosdata”，"),a("strong",[t._v("TDengine 不在资源中配置数据库名，请在 SQL 中自行配置。")])]),t._v(" "),a("p",[a("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/develop_png/zh_CN/rule/assets/rule-engine/image-20200729165651951.png",alt:"image-20200729165651951.png"}})]),t._v(" "),a("p",[t._v("点击 “新建” 按钮。")]),t._v(" "),a("p",[t._v("返回响应动作界面，点击 “确认”。")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/develop_png/zh_CN/rule/assets/rule-engine/image-20200729174211581.png",alt:"image-20200729174211581.png"}})]),t._v(" "),a("p",[t._v("返回规则创建界面，点击 “创建”。")]),t._v(" "),a("h2",{attrs:{id:"通过发送数据到-web-服务写入"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#通过发送数据到-web-服务写入"}},[t._v("#")]),t._v(" 通过发送数据到 Web 服务写入")]),t._v(" "),a("p",[t._v("为支持各种不同类型平台的开发，TDengine 提供符合 REST 设计标准的 API。通过 "),a("a",{attrs:{href:"https://www.taosdata.com/cn/documentation/connector/#RESTful-Connector",target:"_blank",rel:"noopener noreferrer"}},[t._v("RESTful Connector"),a("OutboundLink")],1),t._v(" 提供了最简单的连接方式，即使用 HTTP 请求携带认证信息与要执行的 SQL 操作 TDengine。")]),t._v(" "),a("p",[t._v("EMQ X 规则引擎中有功能强大的"),a("strong",[t._v("发送数据到 Web 服务功能")]),t._v("，可以实现无缝实现上述操作。")]),t._v(" "),a("p",[t._v("关联动作:")]),t._v(" "),a("p",[t._v("在 “响应动作” 界面选择 “添加”，然后在 “动作” 下拉框里选择 “保存数据到 Web 服务“。")]),t._v(" "),a("p",[t._v("EMQ X 规则引擎中有功能强大的****发送数据到 Web 服务功能****，可以实现无缝实现上述操作。")]),t._v(" "),a("p",[t._v("填写动作参数:")]),t._v(" "),a("p",[t._v("“保存数据到 Web 服务” 动作需要两个参数：")]),t._v(" "),a("p",[t._v("1). 消息内容模板，即 HTTP 请求体。这个例子里我们向 TDengine 插入一条数据，应当在请求体内拼接携带 INSERT SQL。注意我们应当在 SQL 中指定数据库名，字符类型也要用单引号括起来， 消息内容模板为：")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("insert")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("into")]),t._v(" test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("t_mqtt_msg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ts"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" msgid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" topic"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" qos"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" payload"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("values")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("now"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'${id}'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'${topic}'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ${qos}"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'${payload}'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("2). 关联资源的 ID。现在资源下拉框为空，可以点击旁边的 “新建” 来创建一个 Web 服务资源:")]),t._v(" "),a("p",[t._v("填写资源配置:")]),t._v(" "),a("p",[t._v("请求 URL 填写 http://127.0.0.1:6041/rest/sql ，请求方法选择 POST;\n"),a("strong",[t._v("还需添加 Authorization 请求头作为认证信息")]),t._v("，请求头的值为 Basic + TDengine {username}:{password} 经过Base64 编码之后的字符串, 例如默认的 root:taosdata 编码后为 "),a("code",[t._v("cm9vdDp0YW9zZGF0YQ==")]),t._v("，\n填入的值为 "),a("code",[t._v("Basic cm9vdDp0YW9zZGF0YQ==")]),t._v("。")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/develop_png/zh_CN/rule/assets/rule-engine/tdengine-webhook.png",alt:"tdengine-webhook.png"}})]),t._v(" "),a("p",[t._v("点击 “新建” 按钮。")]),t._v(" "),a("p",[t._v("返回响应动作界面，点击 “确认”。")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/develop_png/zh_CN/rule/assets/rule-engine/image-20200730093457366.png",alt:"image-20200730093457366.png"}})]),t._v(" "),a("p",[t._v("返回规则创建界面，点击 “创建”。")]),t._v(" "),a("h2",{attrs:{id:"测试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#测试"}},[t._v("#")]),t._v(" 测试")]),t._v(" "),a("p",[t._v("在规则列表里，点击 “查看” 按钮或规则 ID 连接，可以预览刚才创建的规则:")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/develop_png/zh_CN/rule/assets/rule-engine/image-20200729165826748.png",alt:"image-20200729165826748.png"}})]),t._v(" "),a("p",[t._v("规则已经创建完成，现在发一条数据:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("Topic: "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"t/a"')]),t._v("\nQoS: "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\nPayload: "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hello"')]),t._v("\n")])])]),a("p",[t._v("然后检查 TDengine 表，新的 record 是否添加成功:")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" t_mqtt_msg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[a("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/develop_png/zh_CN/rule/assets/rule-engine/image-20200729174914518.png",alt:"image-20200729174914518.png"}})])])}),[],!1,null,null,null);s.default=n.exports}}]);