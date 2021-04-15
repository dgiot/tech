(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{730:function(t,e,a){"use strict";a.r(e);var s=a(8),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"内置模块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#内置模块"}},[t._v("#")]),t._v(" 内置模块")]),t._v(" "),a("p",[t._v("EMQ X Broker 将主题重写、代理订阅等功能通过内置模块的形式提供，支持用户随时启停模块来启停相应功能。目前内置模块已支持以下功能：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Module Name")]),t._v(" "),a("th",[t._v("Feature")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("emqx_mod_delayed")])]),t._v(" "),a("td",[a("RouterLink",{attrs:{to:"/zh/backend/emqx/advanced/delay-publish.html"}},[t._v("延迟发布")])],1)]),t._v(" "),a("tr",[a("td",[a("code",[t._v("emqx_mod_topic_metrics")])]),t._v(" "),a("td",[a("RouterLink",{attrs:{to:"/zh/backend/emqx/advanced/metrics-and-stats.html"}},[t._v("主题指标统计")])],1)]),t._v(" "),a("tr",[a("td",[a("code",[t._v("emqx_mod_subscription")])]),t._v(" "),a("td",[a("RouterLink",{attrs:{to:"/zh/backend/emqx/advanced/proxy-subscriptions.html"}},[t._v("代理订阅")])],1)]),t._v(" "),a("tr",[a("td",[a("code",[t._v("emqx_mod_acl_internal")])]),t._v(" "),a("td",[a("RouterLink",{attrs:{to:"/zh/backend/emqx/advanced/acl-file.html"}},[t._v("内置 ACL")])],1)]),t._v(" "),a("tr",[a("td",[a("code",[t._v("emqx_mod_rewrite")])]),t._v(" "),a("td",[a("RouterLink",{attrs:{to:"/zh/backend/emqx/advanced/topic-rewrite.html"}},[t._v("主题重写")])],1)]),t._v(" "),a("tr",[a("td",[a("code",[t._v("emqx_mod_presence")])]),t._v(" "),a("td",[t._v("上下线通知")])])])]),t._v(" "),a("p",[t._v("EMQ X Broker 为内置模块提供了"),a("RouterLink",{attrs:{to:"/zh/backend/emqx/advanced/cli.html#endpoint-modules"}},[t._v("命令行接口")]),t._v("和 "),a("RouterLink",{attrs:{to:"/zh/backend/emqx/advanced/http-api.html#endpoint-modules"}},[t._v("HTTP API")]),t._v("，用户可以很轻松地通过这些接口来启停模块，例如：")],1),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ ./emqx_ctl modules load emqx_mod_delayed\nModule emqx_mod_delayed loaded successfully.\n")])])]),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -i --basic -u admin:public -X PUT "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://localhost:8081/api/v4/nodes/emqx@127.0.0.1/modules/emqx_mod_delayed/load"')]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"code"')]),t._v(":0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("当然，用户也可以在 Dashboard 上完成这些操作，包括查看模块状态，这也更加常用。")]),t._v(" "),a("p",[t._v("EMQ X Broker 在默认情况下会启动 "),a("code",[t._v("emqx_mod_acl_internal")]),t._v(" 和 "),a("code",[t._v("emqx_mod_presence")]),t._v(" 这两个模块，即内置 ACL 与上下线通知功能默认开启。用户可以修改 "),a("code",[t._v(".../data")]),t._v(" 目录下的 "),a("code",[t._v("loaded_modules")]),t._v(" 文件来更改默认启动的模块。")]),t._v(" "),a("p",[a("em",[a("strong",[t._v("默认不启动")])])]),t._v(" "),a("div",{staticClass:"language-erlang extra-class"},[a("pre",{pre:!0,attrs:{class:"language-erlang"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token atom"}},[t._v("emqx_mod_rewrite")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n")])])]),a("p",[a("em",[a("strong",[t._v("默认启动")])])]),t._v(" "),a("div",{staticClass:"language-erlang extra-class"},[a("pre",{pre:!0,attrs:{class:"language-erlang"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token atom"}},[t._v("emqx_mod_rewrite")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n")])])])])}),[],!1,null,null,null);e.default=n.exports}}]);