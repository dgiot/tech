(window.webpackJsonp=window.webpackJsonp||[]).push([[299],{737:function(s,t,a){"use strict";a.r(t);var e=a(7),r=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"创建规则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建规则"}},[s._v("#")]),s._v(" 创建规则")]),s._v(" "),a("h2",{attrs:{id:"使用-dashboard-创建规则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-dashboard-创建规则"}},[s._v("#")]),s._v(" 使用 Dashboard 创建规则")]),s._v(" "),a("h3",{attrs:{id:"创建-webhook-规则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建-webhook-规则"}},[s._v("#")]),s._v(" 创建 WebHook 规则")]),s._v(" "),a("ol",{attrs:{start:"0"}},[a("li",[s._v("搭建 Web 服务，这里使用 "),a("code",[s._v("nc")]),s._v(" 命令做一个简单的Web 服务:")])]),s._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[s._v("警告")]),s._v(" "),a("p",[s._v("nc 命令在部分 Linux 操作系统上有问题，无法与 EMQ X 发起的 HTTP 请求连接握手成功，第 7 步可能无法正常进行。")])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" -e "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"HTTP/1.1 200 OK'),a("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[s._v("\\n")]),a("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[s._v("\\n")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v('"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("nc")]),s._v(" -l "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8081")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("done")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("ol",[a("li",[a("p",[s._v("创建规则:")]),s._v(" "),a("p",[s._v("打开 "),a("a",{attrs:{href:"http://127.0.0.1:18083/#/rules",target:"_blank",rel:"noopener noreferrer"}},[s._v("emqx dashboard"),a("OutboundLink")],1),s._v("，选择左侧的 “规则” 选项卡。")]),s._v(" "),a("p",[s._v("填写用以处理 t/# 主题的规则 SQL:")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[s._v("   "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v("\n     "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v("\n     "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"t/#"')]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v("\n     qos "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n")])])]),a("p",[a("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/backend/emqx/assets/webhook-rulesql-1.png",alt:"design_7.png"}})])]),s._v(" "),a("li",[a("p",[s._v("关联动作:")]),s._v(" "),a("p",[s._v("在 “响应动作” 界面选择 “添加”，然后在 “动作” 下拉框里选择 “发送数据到 Web 服务”。")])])]),s._v(" "),a("p",[a("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/backend/emqx/assets/webhook-action-1.png",alt:"design_7.png"}})]),s._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[a("p",[s._v("给动作关联资源:")]),s._v(" "),a("p",[s._v("现在资源下拉框为空，可以点击右上角的 “新建资源” 来创建一个 WebHook 资源:")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/backend/emqx/assets/webhook-action-2.png",alt:"design_7.png"}})]),s._v(" "),a("p",[s._v("选择 “WebHook 资源”:")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/backend/emqx/assets/webhook-resource-1.png",alt:"design_7.png"}})])]),s._v(" "),a("li",[a("p",[s._v("填写资源配置:")]),s._v(" "),a("p",[s._v("填写 “请求 URL” 和请求头(可选):")]),s._v(" "),a("p",[s._v("http://127.0.0.1:8081")]),s._v(" "),a("p",[s._v("点击 “测试连接” 按钮，确保连接测试成功，最后点击 “新建” 按钮:")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/backend/emqx/assets/webhook-resource-2.png",alt:"design_7.png"}})])]),s._v(" "),a("li",[a("p",[s._v("返回响应动作界面，点击 “确认”。")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/backend/emqx/assets/webhook-action-3.png",alt:"design_7.png"}})])]),s._v(" "),a("li",[a("p",[s._v("返回规则创建界面，点击 “新建”。")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/backend/emqx/assets/webhook-rule-create.png",alt:"design_7.png"}})]),s._v(" "),a("p",[s._v("规则已经创建完成，规则列表里展示出了新创建的规则:")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/backend/emqx/assets/webhook-rulelist-1.png",alt:"design_7.png"}})])]),s._v(" "),a("li",[a("p",[s._v("发一条消息:")]),s._v(" "),a("p",[s._v('Topic: "t/1"')]),s._v(" "),a("p",[s._v("QoS: 1")]),s._v(" "),a("p",[s._v('Payload: "Hello web server"')])])]),s._v(" "),a("p",[s._v("然后检查 Web 服务是否收到消息:")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/backend/emqx/assets/webhook-result-1.png",alt:"design_7.png"}})]),s._v(" "),a("h2",{attrs:{id:"通过-cli-创建简单规则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#通过-cli-创建简单规则"}},[s._v("#")]),s._v(" 通过 CLI 创建简单规则")]),s._v(" "),a("h3",{attrs:{id:"创建-inspect-规则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建-inspect-规则"}},[s._v("#")]),s._v(" 创建 Inspect 规则")]),s._v(" "),a("p",[s._v("创建一个测试规则，当有消息发送到 't/a' 主题时，打印消息内容以及动作参数细节。")]),s._v(" "),a("ul",[a("li",[a("p",[s._v('规则的筛选 SQL 语句为: SELECT * FROM "t/a";')])]),s._v(" "),a("li",[a("p",[s._v("动作是: \"打印动作参数细节\"，需要使用内置动作 'inspect'。")])])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ ./bin/emqx_ctl rules create "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"SELECT * FROM '),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[s._v('\\"')]),s._v("t/a"),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[s._v('\\"')]),s._v('"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'[{"name":"inspect", "params": {"a": 1}}]\'')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  -d "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Rule for debug'")]),s._v("\n\nRule rule:803de6db created\n")])])]),a("p",[s._v("上面的 CLI 命令创建了一个 ID 为 'Rule rule:803de6db' 的规则。")]),s._v(" "),a("p",[s._v("参数中前两个为必选参数:")]),s._v(" "),a("ul",[a("li",[s._v('SQL 语句: SELECT * FROM "t/a"')]),s._v(" "),a("li",[s._v('动作列表: [{"name":"inspect", "params": {"a": 1}}]。动作列表是用 JSON Array\n格式表示的。name 字段是动作的名字，params 字段是动作的参数。注意 '),a("code",[s._v("inspect")]),s._v(" 动作是不需要绑定资源的。")])]),s._v(" "),a("p",[s._v("最后一个可选参数，是规则的描述: 'Rule for debug'。")]),s._v(" "),a("p",[s._v('接下来当发送 "hello" 消息到主题 \'t/a\' 时，上面创建的 "Rule rule:803de6db" 规则匹配成功，然后\n"inspect" 动作被触发，将消息和参数内容打印到 emqx 控制台:')]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tail")]),s._v(" -f log/erlang.log.1\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("emqx@127.0.0.1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("1")]),s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("inspect"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    Selected Data: "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#{client_id => <<\"shawn\">>,event => 'message.publish',")]),s._v("\n                      flags "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#{dup => false,retain => false},")]),s._v("\n                      "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("id")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"5898704A55D6AF4430000083D0002"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(",\n                      payload "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hello"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(",\n                      peername "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"127.0.0.1:61770"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(",qos "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(",\n                      timestamp "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1558587875090")]),s._v(",topic "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"t/a"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(",\n                      username "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" undefined"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    Envs: "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#{event => 'message.publish',")]),s._v("\n            flags "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#{dup => false,retain => false},")]),s._v("\n            from "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"shawn"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(",\n            headers "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#{allow_publish => true,")]),s._v("\n                  peername "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127,0")]),s._v(",0,1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(",61770"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(",\n                  username "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" undefined"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(",\n            "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("id")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0,5")]),s._v(",137,135,4,165,93,106,244,67,0,0,8,61,0,"),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("2")]),s._v(">>")]),s._v(",\n            payload "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hello"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(",qos "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(",\n            timestamp "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1558,587875")]),s._v(",89754"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(",\n            topic "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"t/a"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    Action Init Params: "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('#{<<"a">> => 1}')]),s._v("\n")])])]),a("ul",[a("li",[a("code",[s._v("Selected Data")]),s._v(" 列出的是消息经过 SQL 筛选、提取后的字段，由于我们用的是 "),a("code",[s._v("select *")]),s._v("，所以这里会列出所有可用的字段。")]),s._v(" "),a("li",[a("code",[s._v("Envs")]),s._v(" 是动作内部可以使用的环境变量。")]),s._v(" "),a("li",[a("code",[s._v("Action Init Params")]),s._v(" 是初始化动作的时候，我们传递给动作的参数。")])]),s._v(" "),a("h3",{attrs:{id:"创建-webhook-规则-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建-webhook-规则-2"}},[s._v("#")]),s._v(" 创建 WebHook 规则")]),s._v(" "),a("p",[s._v("创建一个规则，将所有发送自 client_id='Steven' 的消息，转发到地址为 '"),a("a",{attrs:{href:"http://127.0.0.1:9910",target:"_blank",rel:"noopener noreferrer"}},[s._v("http://127.0.0.1:9910"),a("OutboundLink")],1),s._v("' 的\nWeb 服务器:")]),s._v(" "),a("ul",[a("li",[s._v("规则的筛选条件为: SELECT username as u, payload FROM \"t/a\" where\nu='Steven';")]),s._v(" "),a("li",[s._v("动作是: \"转发到地址为 '"),a("a",{attrs:{href:"http://127.0.0.1:9910",target:"_blank",rel:"noopener noreferrer"}},[s._v("http://127.0.0.1:9910"),a("OutboundLink")],1),s._v("' 的 Web 服务\";")]),s._v(" "),a("li",[s._v("资源类型是: web_hook;")]),s._v(" "),a("li",[s._v("资源是: \"到 url='"),a("a",{attrs:{href:"http://127.0.0.1:9910",target:"_blank",rel:"noopener noreferrer"}},[s._v("http://127.0.0.1:9910"),a("OutboundLink")],1),s._v("' 的 WebHook 资源\"。")])]),s._v(" "),a("ol",{attrs:{start:"0"}},[a("li",[a("p",[s._v("首先我们创建一个简易 Web 服务，这可以使用 "),a("code",[s._v("nc")]),s._v(" 命令实现:")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" -e "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"HTTP/1.1 200 OK'),a("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[s._v("\\n")]),a("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[s._v("\\n")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v('"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("nc")]),s._v(" -l "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9910")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("done")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])])]),s._v(" "),a("li",[a("p",[s._v("使用 WebHook 类型创建一个资源，并配置资源参数 url:")]),s._v(" "),a("p",[s._v("1). 列出当前所有可用的资源类型，确保 'web_hook' 资源类型已存在:")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ ./bin/emqx_ctl resource-types list\n\nresource_type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("name"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'web_hook'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("provider")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'emqx_web_hook'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("params")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#{...}}, on_create={emqx_web_hook_actions,on_resource_create}, description='WebHook Resource')")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n")])])]),a("p",[s._v('2). 使用类型 \'web_hook\' 创建一个新的资源，并配置 "url"="'),a("a",{attrs:{href:"http://127.0.0.1:9910",target:"_blank",rel:"noopener noreferrer"}},[s._v("http://127.0.0.1:9910"),a("OutboundLink")],1),s._v('":')]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ ./bin/emqx_ctl resources create "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'web_hook'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  -c "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'{"url": "http://127.0.0.1:9910", "headers": {"token":"axfw34y235wrq234t4ersgw4t"}, "method": "POST"}\'')]),s._v("\n\nResource resource:691c29ba created\n")])])]),a("p",[s._v("上面的 CLI 命令创建了一个 ID 为 '"),a("a",{attrs:{href:"resource:691c29ba"}},[s._v("resource:691c29ba")]),s._v("' 的资源，第一个参数是必选参数 -\n资源类型(web_hook)。参数表明此资源指向 URL = \""),a("a",{attrs:{href:"http://127.0.0.1:9910",target:"_blank",rel:"noopener noreferrer"}},[s._v("http://127.0.0.1:9910"),a("OutboundLink")],1),s._v('" 的\nWeb 服务，方法为 POST，并且设置了一个 HTTP Header: "token"。')])]),s._v(" "),a("li",[a("p",[s._v("然后创建规则，并选择规则的动作为 'data_to_webserver':")]),s._v(" "),a("p",[s._v("1). 列出当前所有可用的动作，确保 'data_to_webserver' 动作已存在:")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ ./bin/emqx_ctl rule-actions list\n\naction"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("name"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'data_to_webserver'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("app")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'emqx_web_hook'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("for")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$any")]),s._v("'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("types")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("web_hook"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("params")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#{'$resource' => ...}, title ='Data to Web Server', description='Forward Messages to Web Server')")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n")])])]),a("p",[s._v('2). 创建规则，选择 data_to_webserver 动作，并通过 "$resource" 参数将\n'),a("a",{attrs:{href:"resource:691c29ba"}},[s._v("resource:691c29ba")]),s._v(" 资源绑定到动作上:")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ ./bin/emqx_ctl rules create "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"SELECT username as u, payload FROM '),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[s._v('\\"')]),s._v("message.publish"),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[s._v('\\"')]),s._v(" where u='Steven'\"")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'[{"name":"data_to_webserver", "params": {"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$resource")]),s._v('":  "resource:691c29ba"}}]\'')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  -d "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Forward publish msgs from steven to webserver"')]),s._v("\n\nrule:26d84768\n")])])]),a("p",[s._v("上面的 CLI 命令与第一个例子里创建 Inspect 规则时类似，区别在于这里需要把刚才创建的资源\n'"),a("a",{attrs:{href:"resource:691c29ba"}},[s._v("resource:691c29ba")]),s._v("' 绑定到 'data_to_webserver'\n动作上。这个绑定通过给动作设置一个特殊的参数\n'$resource' 完成。'data_to_webserver' 动作的作用是将数据发送到指定的 Web 服务器。")])]),s._v(" "),a("li",[a("p",[s._v('现在我们使用 username "Steven" 发送 "hello" 到任意主题，上面创建的规则就会被触发，Web Server 收到消息并回复 200 OK:')])])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" -e "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"HTTP/1.1 200 OK'),a("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[s._v("\\n")]),a("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[s._v("\\n")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v('"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("nc")]),s._v(" -l "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9910")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("done")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\nPOST / HTTP/1.1\ncontent-type: application/json\ncontent-length: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("32")]),s._v("\nte:\nhost: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:9910\nconnection: keep-alive\ntoken: axfw34y235wrq234t4ersgw4t\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"payload"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hello"')]),s._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"u"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Steven"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);