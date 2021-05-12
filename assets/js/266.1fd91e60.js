(window.webpackJsonp=window.webpackJsonp||[]).push([[266],{681:function(t,s,a){"use strict";a.r(s);var e=a(9),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[t._v("警告")]),t._v(" "),a("p",[t._v("EMQ X Broker 中仅适用以下操作：")]),t._v(" "),a("ul",[a("li",[t._v("检查 (调试)")]),t._v(" "),a("li",[t._v("发送数据到 Web 服务")]),t._v(" "),a("li",[t._v("桥接数据到 MQTT Broker")]),t._v(" "),a("li",[t._v("保存数据到 TDengine(使用 发送数据到 Web 服务 实现)\n其余均是 EMQ X Enterprise 专属功能。")])])]),t._v(" "),a("h2",{attrs:{id:"检查-调试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#检查-调试"}},[t._v("#")]),t._v(" 检查 (调试)")]),t._v(" "),a("p",[t._v("创建一个测试规则，当有消息发送到 't/a' 主题时，打印消息内容以及动作参数细节。")]),t._v(" "),a("ul",[a("li",[t._v('规则的筛选 SQL 语句为: SELECT * FROM "t/a";')]),t._v(" "),a("li",[t._v("动作是: \"打印动作参数细节\"，需要使用内置动作 'inspect'。")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ ./bin/emqx_ctl rules create "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"SELECT * FROM '),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("t/a"),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(' WHERE "')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'[{"name":"inspect", "params": {"a": 1}}]\'')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n -d "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Rule for debug'")]),t._v("\n\nRule rule:803de6db created\n")])])]),a("p",[t._v("上面的 CLI 命令创建了一个 ID 为 'Rule rule:803de6db' 的规则。")]),t._v(" "),a("p",[t._v("参数中前两个为必参数:")]),t._v(" "),a("ul",[a("li",[t._v('SQL 语句: SELECT * FROM "t/a"')]),t._v(" "),a("li",[t._v('动作列表: [{"name":"inspect", "params": {"a": 1}}]。动作列表是用 JSON Array\n格式表示的。name 字段是动作的名字，params 字段是动作的参数。注意 '),a("code",[t._v("inspect")]),t._v(" 动作是不需要绑定资源的。")])]),t._v(" "),a("p",[t._v("最后一个可选参数，是规则的描述: 'Rule for debug'。")]),t._v(" "),a("p",[t._v('接下来当发送 "hello" 消息到主题 \'t/a\' 时，上面创建的 "Rule rule:803de6db" 规则匹配成功，然后\n"inspect" 动作被触发，将消息和参数内容打印到 emqx 控制台:')]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("tail")]),t._v(" -f log/erlang.log.1\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("emqx@127.0.0.1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[t._v("1")]),t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("inspect"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    Selected Data: "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#{client_id => <<\"shawn\">>,event => 'message.publish',")]),t._v("\n                    flags "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#{dup => false},")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("id")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"5898704A55D6AF4430000083D0002"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(",\n                    payload "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hello"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(",\n                    peername "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"127.0.0.1:61770"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(",qos "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(",\n                    timestamp "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1558587875090")]),t._v(",topic "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"t/a"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(",\n                    username "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" undefined"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    Envs: "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#{event => 'message.publish',")]),t._v("\n            flags "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#{dup => false},")]),t._v("\n            from "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"shawn"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(",\n            headers "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#{allow_publish => true,")]),t._v("\n                    peername "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("127,0")]),t._v(",0,1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(",61770"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(",\n                    username "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" undefined"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(",\n            "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("id")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0,5")]),t._v(",137,135,4,165,93,106,244,67,0,0,8,61,0,"),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[t._v("2")]),t._v(">>")]),t._v(",\n            payload "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hello"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(",qos "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(",\n            timestamp "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1558,587875")]),t._v(",89754"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(",\n            topic "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"t/a"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    Action Init Params: "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('#{<<"a">> => 1}')]),t._v("\n")])])]),a("ul",[a("li",[a("code",[t._v("Selected Data")]),t._v(" 列出的是消息经过 SQL 筛选、提取后的字段，由于我们用的是 "),a("code",[t._v("select *")]),t._v("，所以这里会列出所有可用的字段。")]),t._v(" "),a("li",[a("code",[t._v("Envs")]),t._v(" 是动作内部可以使用的环境变量。")]),t._v(" "),a("li",[a("code",[t._v("Action Init Params")]),t._v(" 是初始化动作的时候，我们传递给动作的参数。")])]),t._v(" "),a("h2",{attrs:{id:"发送数据到-web-服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#发送数据到-web-服务"}},[t._v("#")]),t._v(" 发送数据到 Web 服务")]),t._v(" "),a("p",[t._v("创建一个规则，将所有发送自 client_id='Steven' 的消息，转发到地址为 '"),a("a",{attrs:{href:"http://127.0.0.1:9910",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://127.0.0.1:9910"),a("OutboundLink")],1),t._v("' 的\nWeb 服务器:")]),t._v(" "),a("ul",[a("li",[t._v("规则的筛选条件为: SELECT username as u, payload FROM \"#\" where u='Steven';")]),t._v(" "),a("li",[t._v("动作是: \"转发到地址为 '"),a("a",{attrs:{href:"http://127.0.0.1:9910",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://127.0.0.1:9910"),a("OutboundLink")],1),t._v("' 的 Web 服务\";")]),t._v(" "),a("li",[t._v("资源类型是: web_hook;")]),t._v(" "),a("li",[t._v("资源是: \"到 url='"),a("a",{attrs:{href:"http://127.0.0.1:9910",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://127.0.0.1:9910"),a("OutboundLink")],1),t._v("' 的 WebHook 资源\"。")])]),t._v(" "),a("p",[t._v("首先我们创建一个简易 Web 服务，这可以使用 "),a("code",[t._v("nc")]),t._v("\n​       命令实现:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" -e "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"HTTP/1.1 200 OK'),a("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[t._v("\\n")]),a("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[t._v("\\n")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("date")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v('"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("nc")]),t._v(" -l "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),t._v(".0.1 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9910")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("done")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("使用 WebHook 类型创建一个资源，并配置资源参数 url:")]),t._v(" "),a("p",[t._v("1). 列出当前所有可用的资源类型，确保 'web_hook' 资源类型已存在:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ ./bin/emqx_ctl resource-types list\nresource_type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'web_hook'")]),t._v(", "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("provider")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'emqx_web_hook'")]),t._v(", "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("params")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#{...}}, on_create={emqx_web_hook_actions,on_resource_create}, description='WebHook Resource')")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n")])])]),a("p",[t._v('2). 使用类型 \'web_hook\' 创建一个新的资源，并配置 "url"="'),a("a",{attrs:{href:"http://127.0.0.1:9910",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://127.0.0.1:9910"),a("OutboundLink")],1),t._v('":')]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ ./bin/emqx_ctl resources create "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'web_hook'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    -c "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'{"url": "http://127.0.0.1:9910", "headers": {"token":"axfw34y235wrq234t4ersgw4t"}, "method": "POST"}\'')]),t._v("\n\nResource resource:691c29ba create\n")])])]),a("p",[t._v("上面的 CLI 命令创建了一个 ID 为 '"),a("a",{attrs:{href:"resource:691c29ba"}},[t._v("resource:691c29ba")]),t._v("' 的资源，第一个参数是必选参数 -\n资源类型(web_hook)。参数表明此资源指向 URL = \""),a("a",{attrs:{href:"http://127.0.0.1:9910",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://127.0.0.1:9910"),a("OutboundLink")],1),t._v('" 的\nWeb 服务，方法为 POST，并且设置了一个 HTTP Header: "token"。')]),t._v(" "),a("p",[t._v("然后创建规则，并选择规则的动作为 'data_to_webserver':")]),t._v(" "),a("p",[t._v("1). 列出当前所有可用的动作，确保 'data_to_webserver' 动作已存在:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ ./bin/emqx_ctl rule-actions list\n\naction"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'data_to_webserver'")]),t._v(", "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("app")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'emqx_web_hook'")]),t._v(", "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("for")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$any")]),t._v("'")]),t._v(", "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("types")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("web_hook"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(", "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("params")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#{'$resource' => ...}, title ='Data to Web Server', description='Forward Messages to Web Server')")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n")])])]),a("p",[t._v('2). 创建规则，选择 data_to_webserver 动作，并通过 "$resource" 参数将\n'),a("a",{attrs:{href:"resource:691c29ba"}},[t._v("resource:691c29ba")]),t._v(" 资源绑定到动作上:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ ./bin/emqx_ctl rules create "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"SELECT username as u, payload FROM '),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("#"),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(" where u='Steven'\"")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'[{"name":"data_to_webserver", "params": {"'),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$resource")]),t._v('":  "resource:691c29ba"}}]\'')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n-d "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Forward publish msgs from steven to webserver"')]),t._v("\n\nrule:26d84768\n")])])]),a("p",[t._v("上面的 CLI 命令与第一个例子里创建 Inspect 规则时类似，区别在于这里需要把刚才创建的资源\n'"),a("a",{attrs:{href:"resource:691c29ba"}},[t._v("resource:691c29ba")]),t._v("' 绑定到 'data_to_webserver'\n动作上。这个绑定通过给动作设置一个特殊的参数\n'$resource' 完成。'data_to_webserver' 动作的作用是将数据发送到指定的 Web 服务器。")]),t._v(" "),a("p",[t._v('现在我们使用 username "Steven" 发送 "hello" 到任意主题，上面创建的规则就会被触发，Web Server收到消息并回复 200 OK:')]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" -e "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"HTTP/1.1 200 OK'),a("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[t._v("\\n")]),a("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[t._v("\\n")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("date")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v('"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("nc")]),t._v(" -l "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),t._v(".0.1 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9910")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("done")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nPOST / HTTP/1.1\ncontent-type: application/json\ncontent-length: "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("32")]),t._v("\nte:\nhost: "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),t._v(".0.1:9910\nconnection: keep-alive\ntoken: axfw34y235wrq234t4ersgw4t\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"payload"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hello"')]),t._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"u"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Steven"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);