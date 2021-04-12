(window.webpackJsonp=window.webpackJsonp||[]).push([[177],{718:function(t,s,a){"use strict";a.r(s);var n=a(8),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"桥接数据到-rabbitmq"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#桥接数据到-rabbitmq"}},[t._v("#")]),t._v(" 桥接数据到 RabbitMQ")]),t._v(" "),a("p",[t._v("搭建 RabbitMQ 环境，以 MacOS X 为例:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ brew "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" rabbitmq\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 启动 rabbitmq")]),t._v("\n$ rabbitmq-server\n")])])]),a("p",[t._v("创建规则:")]),t._v(" "),a("p",[t._v("打开 "),a("a",{attrs:{href:"http://127.0.0.1:18083/#/rules",target:"_blank",rel:"noopener noreferrer"}},[t._v("EMQ X Dashboard"),a("OutboundLink")],1),t._v("，选择左侧的 “规则” 选项卡。")]),t._v(" "),a("p",[t._v("填写规则 SQL:")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"t/#"')]),t._v("\n")])])]),a("p",[a("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/develop_png/zh_CN/rule/assets/rule-engine/rule_sql.png",alt:"cass_offline_msg_01.png"}})]),t._v(" "),a("p",[t._v("关联动作:")]),t._v(" "),a("p",[t._v("在 “响应动作” 界面选择 “添加”，然后在 “动作” 下拉框里选择 “桥接数据到 RabbitMQ”。")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/develop_png/zh_CN/rule/assets/rule-engine/rabbit-action-0.png",alt:"cass_offline_msg_01.png"}})]),t._v(" "),a("p",[t._v("填写动作参数:")]),t._v(" "),a("p",[t._v("“桥接数据到 RabbitMQ 动作需要四个参数：")]),t._v(" "),a("p",[t._v('1). RabbitMQ Exchange。这个例子里我们设置 Exchange 为 "messages"，')]),t._v(" "),a("p",[t._v('2). RabbitMQ Exchange Type。这个例子我们设置 Exchange Type 为 "topic"')]),t._v(" "),a("p",[t._v('3). RabbitMQ Routing Key。这个例子我们设置 Routing Key 为 "test"')]),t._v(" "),a("p",[t._v("4). 关联资源。现在资源下拉框为空，可以点击右上角的 “新建资源” 来创建一个 RabbitMQ 资源:")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/develop_png/zh_CN/rule/assets/rule-engine/rabbit-action-1.png",alt:"cass_offline_msg_01.png"}})]),t._v(" "),a("p",[t._v("选择 RabbitMQ 资源。")]),t._v(" "),a("p",[t._v("填写资源配置:")]),t._v(" "),a("p",[t._v("填写真实的 RabbitMQ 服务器地址，其他配置保持默认值，然后点击 “测试连接” 按钮，确保连接测试成功。")]),t._v(" "),a("p",[t._v("最后点击 “新建” 按钮。")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/develop_png/zh_CN/rule/assets/rule-engine/rabbit-resource-1.png",alt:"cass_offline_msg_01.png"}})]),t._v(" "),a("p",[t._v("返回响应动作界面，点击 “确认”。")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/develop_png/zh_CN/rule/assets/rule-engine/rabbit-action-2.png",alt:"cass_offline_msg_01.png"}})]),t._v(" "),a("p",[t._v("返回规则创建界面，点击 “新建”。")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/develop_png/zh_CN/rule/assets/rule-engine/rabbit-rulesql-1.png",alt:"cass_offline_msg_01.png"}})]),t._v(" "),a("p",[t._v("规则已经创建完成，现在发一条数据:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("Topic: "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"t/1"')]),t._v("\n\nQoS: "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n\nPayload: "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello, World\\!"')]),t._v("\n")])])]),a("p",[t._v("编写 amqp 协议的客户端，以下是用 python 写的 amqp 客户端的示例代码:")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#!/usr/bin/env python")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" pika\n\nconnection "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" pika"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("BlockingConnection"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    pika"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ConnectionParameters"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("host"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'localhost'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nchannel "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" connection"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("channel"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nchannel"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exchange_declare"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("exchange"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'messages'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" exchange_type"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'topic'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nresult "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" channel"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("queue_declare"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("queue"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" exclusive"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nqueue_name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" result"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("method"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("queue\n\nchannel"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("queue_bind"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("exchange"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'messages'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" queue"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("queue_name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" routing_key"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'test'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'[*] Waiting for messages. To exit press CTRL+C'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("callback")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" method"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" properties"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" body"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('" [x] %r"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v(" body"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nchannel"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("basic_consume"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    queue"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("queue_name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" on_message_callback"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("callback"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" auto_ack"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nchannel"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("start_consuming"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("然后通过 amqp 协议的客户端查看消息是否发布成功, 以下是")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/develop_png/zh_CN/rule/assets/rule-engine/rabbit-subscriber-0.png",alt:"cass_offline_msg_01.png"}})]),t._v(" "),a("p",[t._v("在规则列表里，可以看到刚才创建的规则的命中次数已经增加了 1:")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/develop_png/zh_CN/rule/assets/rule-engine/rabbit-rulelist-0.png",alt:"cass_offline_msg_01.png"}})])])}),[],!1,null,null,null);s.default=e.exports}}]);