(window.webpackJsonp=window.webpackJsonp||[]).push([[168],{706:function(s,a,t){"use strict";t.r(a);var n=t(7),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"保存数据到-influxdb"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#保存数据到-influxdb"}},[s._v("#")]),s._v(" 保存数据到 InfluxDB")]),s._v(" "),t("p",[s._v("启动 InfluxDB，请确保启用了相应的 Listener（我们假设您已经成功安装了 InfluxDB 环境）")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ influxd -config /usr/local/etc/influxdb.conf\n")])])]),t("p",[s._v("创建规则:")]),s._v(" "),t("p",[s._v("打开 "),t("a",{attrs:{href:"http://127.0.0.1:18083/#/rules",target:"_blank",rel:"noopener noreferrer"}},[s._v("EMQ X Dashboard"),t("OutboundLink")],1),s._v("，选择左侧的 “规则” 选项卡。")]),s._v(" "),t("p",[s._v("填写规则 SQL:")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("SELECT\n    payload.host as host,\n    payload.location as location,\n    payload.internal as internal,\n    payload.external as external,\n    *\nFROM\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"#"')]),s._v("\n")])])]),t("p",[t("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/backend/emqx/rule/assets/rule-engine/influxdb-rulesql-0@2x.png",alt:"cass_offline_msg_01.png"}})]),s._v(" "),t("p",[s._v("关联动作:")]),s._v(" "),t("p",[s._v("在 “Action” 界面选择 “Add action”，然后在 “Action Type” 下拉框里选择 “Data to InfluxDB”。")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/backend/emqx/rule/assets/rule-engine/influxdb-action-0@2x.png",alt:"cass_offline_msg_01.png"}})]),s._v(" "),t("p",[s._v("填写动作参数:")]),s._v(" "),t("p",[s._v("“Data to InfluxDB” 动作有以下参数：")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/backend/emqx/rule/assets/rule-engine/influxdb-action-1@2x.png",alt:"cass_offline_msg_01.png"}})]),s._v(" "),t("p",[s._v("1). Measurement。指定写入到 InfluxDB 的 data point 的 Measurement，支持固定字符串和占位符两种设置方式。")]),s._v(" "),t("p",[s._v("2). Fields。指定写入到 InfluxDB 的 data point 的 Fields 的 Key 和 Value，支持固定字符串和占位符两种设置方式。")]),s._v(" "),t("p",[s._v("3). Tags。指定写入到 InfluxDB 的 data point 的 Tags 的 Key 和 Value，支持固定字符串和占位符两种设置方式。")]),s._v(" "),t("p",[s._v("4). Timestamp Key。指定写入到 InfluxDB 的 data point 的 Timestamp 的值从哪里获取。")]),s._v(" "),t("p",[s._v("5). Use of reources。指定动作关联的资源，现在资源下拉框为空，可以点击右上角的 “新建资源” 来创建一个 InfluxDB 资源，目前支持 HTTP/HTTPS 和 UDP 两种资源。")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/backend/emqx/rule/assets/rule-engine/influxdb-resource-0@2x.png",alt:"cass_offline_msg_01.png"}})]),s._v(" "),t("p",[s._v("填写资源配置:")]),s._v(" "),t("p",[s._v("InfluxDB HTTP 资源包括以下配置：")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/backend/emqx/rule/assets/rule-engine/influxdb-resource-1@2x.png",alt:"cass_offline_msg_01.png"}})]),s._v(" "),t("p",[s._v("1). Resource Name。资源名称，支持以易读的形式唯一标识资源。")]),s._v(" "),t("p",[s._v("2). InfluxDB Host。InfluxDB HTTP 主机地址。")]),s._v(" "),t("p",[s._v("3). InfluxDB Port。InfluxDB HTTP 主机端口。")]),s._v(" "),t("p",[s._v("4). InfluxDB Database。InfluxDB 数据库名。")]),s._v(" "),t("p",[s._v("5). InfluxDB Username。InfluxDB 用户名。")]),s._v(" "),t("p",[s._v("6). InfluxDB Password。InfluxDB 密码。")]),s._v(" "),t("p",[s._v("7). Precision of timestamp。时间戳精度。")]),s._v(" "),t("p",[s._v("8). Batch Size。单次写入能够收集的最大数据点数量，用于提升高并发时的性能。")]),s._v(" "),t("p",[s._v("9). Pool Size。InfluxDB 写进程池大小，合适的进程池大小可以在一定程度上提升写入性能。")]),s._v(" "),t("p",[s._v("InfluxDB UDP 资源包括以下配置：")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/backend/emqx/rule/assets/rule-engine/influxdb-resource-2@2x.png",alt:"cass_offline_msg_01.png"}})]),s._v(" "),t("p",[s._v("1). Resource Name。资源名称，支持以易读的形式唯一标识资源。")]),s._v(" "),t("p",[s._v("2). InfluxDB Host。InfluxDB UDP 主机地址。")]),s._v(" "),t("p",[s._v("3). InfluxDB Port。InfluxDB UDP 主机端口。")]),s._v(" "),t("p",[s._v("8). Batch Size。单次写入能够收集的最大数据点数量，用于提升高并发时的性能。")]),s._v(" "),t("p",[s._v("9). Pool Size。InfluxDB 写进程池大小，合适的进程池大小可以在一定程度上提升写入性能。")]),s._v(" "),t("p",[s._v("本示例中所有配置保持默认值即可，点击 “测试连接” 按钮，确保连接测试成功。")]),s._v(" "),t("p",[s._v("最后点击 “Confirm” 按钮。")]),s._v(" "),t("p",[s._v("返回响应动作界面，选择刚刚创建的 InfluxDB 资源，填写其余配置后点击 “Confirm” 按钮。")]),s._v(" "),t("p",[s._v("最后返回规则创建界面，点击页面底部的 “Create” 按钮，完成规则创建。")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/backend/emqx/rule/assets/rule-engine/influxdb-rulelist-0@2x.png",alt:"cass_offline_msg_01.png"}})]),s._v(" "),t("p",[s._v("规则已经创建完成，现在发一条消息:")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("Topic: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"t/1"')]),s._v("\n\nQoS: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n\nPayload:\n"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"{"')]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("host")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('":"')]),s._v("serverA"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('","')]),s._v("location"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('":"')]),s._v("roomA"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('","')]),s._v("internal"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('":25,"')]),s._v("external"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('":37}"')]),s._v("\n")])])]),t("p",[s._v("然后检查 InfluxDB，新的 data point 是否添加成功:")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ influx -precision rfc3339\n\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" use db\nUsing database db\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" * from "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"temperature"')]),s._v("\nname: temperature\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("time")]),s._v("                external  from            "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("host")]),s._v("    internal location\n----                --------  ----            ----    -------- --------\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1561535778444457348")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("37")]),s._v("        mqttjs_46355e19 serverA "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("25")]),s._v("       roomA\n")])])]),t("p",[s._v("在规则列表里，可以看到刚才创建的规则的命中次数已经增加了 1:")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/backend/emqx/rule/assets/rule-engine/influxdb-rulelist-1@2x.png",alt:"cass_offline_msg_01.png"}})])])}),[],!1,null,null,null);a.default=e.exports}}]);