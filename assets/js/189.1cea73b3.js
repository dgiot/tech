(window.webpackJsonp=window.webpackJsonp||[]).push([[189],{771:function(s,e,t){"use strict";t.r(e);var a=t(8),n=Object(a.a)({},(function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"离线消息保存到-redis"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#离线消息保存到-redis"}},[s._v("#")]),s._v(" 离线消息保存到 Redis")]),s._v(" "),t("p",[s._v("搭建 Redis 环境，以 MacOS X 为例:")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v(" $ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" http://download.redis.io/releases/redis-4.0.14.tar.gz\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" xzf redis-4.0.14.tar.gz\n$ "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" redis-4.0.14\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动 redis")]),s._v("\n$ redis-server\n")])])]),t("p",[s._v("创建规则:")]),s._v(" "),t("p",[s._v("打开 "),t("a",{attrs:{href:"http://127.0.0.1:18083/#/rules",target:"_blank",rel:"noopener noreferrer"}},[s._v("EMQ X Dashboard"),t("OutboundLink")],1),s._v("，选择左侧的 “规则” 选项卡。")]),s._v(" "),t("p",[s._v("然后填写规则 SQL:")]),s._v(" "),t("p",[s._v("FROM说明")]),s._v(" "),t("p",[t("strong",[s._v("t/#")]),s._v(": 发布者发布消息触发保存离线消息到Redis")]),s._v(" "),t("p",[t("strong",[s._v("$events/session_subscribed")]),s._v(": 订阅者订阅主题触发获取离线消息")]),s._v(" "),t("p",[t("strong",[s._v("$events/message_acked")]),s._v(": 订阅者回复消息ACK后触发删除已经被接收的离线消息")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("SELECT * FROM "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"t/#"')]),s._v(", "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$events")]),s._v('/session_subscribed"')]),s._v(", "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$events")]),s._v('/message_acked"')]),s._v(" WHERE topic "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("~ "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'t/#'")]),s._v("\n")])])]),t("p",[t("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/backend/emqx/rule/assets/rule-engine/offline_msg_1.png",alt:"mongo_sub_02.png"}})]),s._v(" "),t("p",[s._v("关联动作:")]),s._v(" "),t("p",[s._v("在 “响应动作” 界面选择 “添加动作”，然后在 “动作” 下拉框里选择 “离线消息保存到 Redis”。")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/backend/emqx/rule/assets/rule-engine/offline_msg_2.png",alt:"mongo_sub_02.png"}})]),s._v(" "),t("p",[s._v("填写动作参数:")]),s._v(" "),t("p",[s._v("“离线消息保存到 Redis 动作需要两个参数：")]),s._v(" "),t("p",[s._v("1). Redis Key 超期的 TTL")]),s._v(" "),t("p",[s._v("2). 关联资源。现在资源下拉框为空，可以点击右上角的 “新建资源” 来创建一个 Redis 资源:")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/backend/emqx/rule/assets/rule-engine/offline_msg_3.png",alt:"mongo_sub_02.png"}})]),s._v(" "),t("p",[s._v("选择 Redis 单节点模式资源”。")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/backend/emqx/rule/assets/rule-engine/offline_msg_4.png",alt:"mongo_sub_02.png"}})]),s._v(" "),t("p",[s._v("填写资源配置:")]),s._v(" "),t("p",[s._v("填写真实的 Redis 服务器地址，其他配置保持默认值，然后点击 “测试连接” 按钮，确保连接测试成功。")]),s._v(" "),t("p",[s._v("最后点击 “新建” 按钮。")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/backend/emqx/rule/assets/rule-engine/offline_msg_5.png",alt:"mongo_sub_02.png"}})]),s._v(" "),t("p",[s._v("返回响应动作界面，点击 “确认”。")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/backend/emqx/rule/assets/rule-engine/offline_msg_7.png",alt:"mongo_sub_02.png"}})]),s._v(" "),t("p",[s._v("返回规则创建界面，点击 “新建”。")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/backend/emqx/rule/assets/rule-engine/offline_msg_6.png",alt:"mongo_sub_02.png"}})]),s._v(" "),t("p",[s._v("规则已经创建完成，通过 Dashboard 的 WebSocket 客户端发一条数据**(发布消息的QoS必须大于0)**:")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/backend/emqx/rule/assets/rule-engine/offline_msg_8.png",alt:"mongo_sub_02.png"}})]),s._v(" "),t("p",[s._v("消息发送后，通过 Redis CLI 查看到消息被保存到 Redis 里面:")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ redis-cli\n\nKEYS mqtt:msg"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("*\n\nhgetall Key\n")])])]),t("p",[t("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/backend/emqx/rule/assets/rule-engine/offline_msg_10.png",alt:"mongo_sub_02.png"}})]),s._v(" "),t("p",[s._v('使用另外一个客户端，订阅主题 "t/1" '),t("strong",[s._v("(订阅主题的QoS必须大于0，否则消息会被重复接收, 不支持主题通配符方式订阅获取离线消息)")]),s._v(":")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/backend/emqx/rule/assets/rule-engine/offline_msg_11.png",alt:"mongo_sub_02.png"}})]),s._v(" "),t("p",[s._v("订阅后马上接收到了保存到 Redis 里面的离线消息:")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/backend/emqx/rule/assets/rule-engine/offline_msg_12.png",alt:"mongo_sub_02.png"}})]),s._v(" "),t("p",[s._v("离线消息被接收后会在 Redis 中删除:")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/backend/emqx/rule/assets/rule-engine/offline_msg_13.png",alt:"mongo_sub_02.png"}})])])}),[],!1,null,null,null);e.default=n.exports}}]);