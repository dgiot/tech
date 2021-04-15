(window.webpackJsonp=window.webpackJsonp||[]).push([[151],{828:function(s,a,t){"use strict";t.r(a);var e=t(8),r=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"pulsar-消费组"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pulsar-消费组"}},[s._v("#")]),s._v(" Pulsar 消费组")]),s._v(" "),t("p",[s._v("Pulsar 消费组使用外部 Pulsar 作为消息队列，可以从 Pulsar 中消费消息转换成为 MQTT 消息发布在 emqx 中。")]),s._v(" "),t("p",[s._v("搭建 Pulsar 环境，以 MacOS X 为例:")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" http://apache.mirrors.hoobly.com/pulsar/pulsar-2.3.2/apache-pulsar-2.3.2-bin.tar.gz\n\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" xvfz apache-pulsar-2.3.2-bin.tar.gz\n\n$ "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" apache-pulsar-2.3.2\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动 Pulsar")]),s._v("\n$ ./bin/pulsar standalone\n")])])]),t("p",[s._v("创建 Pulsar 的主题:")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ ./bin/pulsar-admin topics create-partitioned-topic -p "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" testTopic\n")])])]),t("h2",{attrs:{id:"创建模块"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建模块"}},[s._v("#")]),s._v(" 创建模块")]),s._v(" "),t("p",[s._v("打开 "),t("a",{attrs:{href:"http://127.0.0.1:18083/#/modules",target:"_blank",rel:"noopener noreferrer"}},[s._v("EMQ X Dashboard"),t("OutboundLink")],1),s._v("，点击左侧的 “模块” 选项卡，选择添加：")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/backend/emqx/modules/assets/modules.png",alt:"modules.png"}})]),s._v(" "),t("p",[s._v("选择 Pulsar 消费组模块:")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/backend/emqx/modules/assets/pulsar_consumer1.png",alt:"pulsar_consumer1.png"}})]),s._v(" "),t("p",[s._v("填写相关参数:")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/backend/emqx/modules/assets/pulsar_consumer3.png",alt:"pulsar_consumer3.png"}})]),s._v(" "),t("p",[s._v("1). Pulsar 服务器地址")]),s._v(" "),t("p",[s._v("2). Pulsar consumer 进程数量")]),s._v(" "),t("p",[s._v("3). Pulsar 的订阅主题")]),s._v(" "),t("p",[s._v("4). MQTT 的消息主题")]),s._v(" "),t("p",[s._v("5). MQTT 的主题服务质量")]),s._v(" "),t("p",[s._v("6). Pulsar 流控阈值 (Pulsar 流控阈值，配置 Pulsar 向消费者发送多少条消息后阻塞 Pulsar Consumer)")]),s._v(" "),t("p",[s._v("7). EMQ X 重置流控阈值百分比 (Pulsar 流控阈值重置百分比。此配置让消费者处理完成一定数量的消息之后，提前重置 "),t("code",[s._v("Pulsar 流控阈值")]),s._v("。 比如，"),t("code",[s._v("Pulsar 流控阈值")]),s._v(" 为 1000，"),t("code",[s._v("阈值重置百分比")]),s._v(" 为 80%，则重置)")]),s._v(" "),t("p",[s._v("点击添加后，模块添加完成:")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/backend/emqx/modules/assets/pulsar_consumer4.png",alt:"pulsar_consumer4.png"}})]),s._v(" "),t("p",[s._v('资源已经创建完成，现在用Dashboard的websocket工具订阅MQTT的主题 "TestTopic":')]),s._v(" "),t("p",[t("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/backend/emqx/modules/assets/pulsar_consumer5.png",alt:"pulsar_consumer5.png"}})]),s._v(" "),t("p",[s._v("使用pulsar-cli 生产一条消息:")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("./bin/pulsar-client produce TestTopic --messages "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hello-pulsar"')]),s._v("\n")])])]),t("p",[t("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/backend/emqx/modules/assets/pulsar_consumer6.png",alt:"pulsar_consumer6.png"}})]),s._v(" "),t("p",[s._v('Dashboard的websocket工具接收到了pulsar 生产的消息"hello-pulsar":')]),s._v(" "),t("p",[t("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/backend/emqx/modules/assets/pulsar_consumer7.png",alt:"pulsar_consumer7.png"}})])])}),[],!1,null,null,null);a.default=r.exports}}]);