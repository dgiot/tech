(window.webpackJsonp=window.webpackJsonp||[]).push([[125],{646:function(t,e,_){"use strict";_.r(e);var v=_(7),a=Object(v.a)({},(function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"目录结构"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#目录结构"}},[t._v("#")]),t._v(" 目录结构")]),t._v(" "),_("p",[t._v("不同安装方式得到的 EMQ X 其目录结构会有所不同，具体如下:")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("描述")]),t._v(" "),_("th",[t._v("使用 ZIP 压缩包安装")]),t._v(" "),_("th",[t._v("使用二进制包安装")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("可执行文件目录")]),t._v(" "),_("td",[_("code",[t._v("./bin")])]),t._v(" "),_("td",[_("code",[t._v("/usr/lib/emqx/bin")])])]),t._v(" "),_("tr",[_("td",[t._v("数据文件")]),t._v(" "),_("td",[_("code",[t._v("./data")])]),t._v(" "),_("td",[_("code",[t._v("/var/lib/emqx/data")])])]),t._v(" "),_("tr",[_("td",[t._v("Erlang 虚拟机文件")]),t._v(" "),_("td",[_("code",[t._v("./erts-*")])]),t._v(" "),_("td",[_("code",[t._v("/usr/lib/emqx/erts-*")])])]),t._v(" "),_("tr",[_("td",[t._v("配置文件目录")]),t._v(" "),_("td",[_("code",[t._v("./etc")])]),t._v(" "),_("td",[_("code",[t._v("/etc/emqx/etc")])])]),t._v(" "),_("tr",[_("td",[t._v("依赖项目录")]),t._v(" "),_("td",[_("code",[t._v("./lib")])]),t._v(" "),_("td",[_("code",[t._v("/usr/lib/emqx/lib")])])]),t._v(" "),_("tr",[_("td",[t._v("日志文件")]),t._v(" "),_("td",[_("code",[t._v("./log")])]),t._v(" "),_("td",[_("code",[t._v("/var/log/emqx")])])]),t._v(" "),_("tr",[_("td",[t._v("启动相关的脚本、schema 文件")]),t._v(" "),_("td",[_("code",[t._v("./releases")])]),t._v(" "),_("td",[_("code",[t._v("/usr/lib/emqx/releases")])])])])]),t._v(" "),_("p",[t._v("以上目录中，用户经常接触与使用的是 "),_("code",[t._v("bin")]),t._v("、"),_("code",[t._v("etc")]),t._v("、"),_("code",[t._v("data")]),t._v("、"),_("code",[t._v("log")]),t._v(" 目录。")]),t._v(" "),_("h2",{attrs:{id:"bin-目录"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#bin-目录"}},[t._v("#")]),t._v(" bin 目录")]),t._v(" "),_("p",[_("strong",[t._v("emqx、emqx.cmd")])]),t._v(" "),_("p",[t._v("EMQ X 的可执行文件，具体使用可以查看 "),_("RouterLink",{attrs:{to:"/zh/backend/emqx/getting-started/command-line.html"}},[t._v("基本命令")]),t._v("。")],1),t._v(" "),_("p",[_("strong",[t._v("emqx_ctl、emqx_ctl.cmd")])]),t._v(" "),_("p",[t._v("EMQ X 管理命令的可执行文件，具体使用可以查看  "),_("RouterLink",{attrs:{to:"/zh/backend/emqx/advanced/cli.html"}},[t._v("管理命令 CLI")]),t._v("。")],1),t._v(" "),_("h2",{attrs:{id:"etc-目录"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#etc-目录"}},[t._v("#")]),t._v(" etc 目录")]),t._v(" "),_("p",[t._v("EMQ X 通过 "),_("code",[t._v("etc")]),t._v(" 目录下配置文件进行设置，主要配置文件包括:")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("配置文件")]),t._v(" "),_("th",[t._v("说明")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("emqx.conf")]),t._v(" "),_("td",[t._v("EMQ X 配置文件")])]),t._v(" "),_("tr",[_("td",[t._v("acl.conf")]),t._v(" "),_("td",[t._v("EMQ X 默认 ACL 规则配置文件")])]),t._v(" "),_("tr",[_("td",[t._v("plugins/*.conf")]),t._v(" "),_("td",[t._v("EMQ X 各类插件配置文件")])]),t._v(" "),_("tr",[_("td",[t._v("certs")]),t._v(" "),_("td",[t._v("EMQ X SSL 证书文件")])]),t._v(" "),_("tr",[_("td",[t._v("emqx.lic")]),t._v(" "),_("td",[t._v("License 文件{% emqxce %}仅限 EMQ X Enterprise{% endemqxce %}")])])])]),t._v(" "),_("p",[t._v("EMQ X 具体的配置内容可以查看 "),_("RouterLink",{attrs:{to:"/zh/backend/emqx/configuration/configuration.html"}},[t._v("配置项")]),t._v("。")],1),t._v(" "),_("h2",{attrs:{id:"data-目录"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#data-目录"}},[t._v("#")]),t._v(" data 目录")]),t._v(" "),_("p",[t._v("EMQ X 将运行数据存储在 "),_("code",[t._v("data")]),t._v(" 目录下，主要的文件包括:")]),t._v(" "),_("p",[_("strong",[t._v("configs/app.*.config")])]),t._v(" "),_("p",[t._v("EMQ X 读取 "),_("code",[t._v("etc/emqx.conf")]),t._v(" 和 "),_("code",[t._v("etc/plugins/*.conf")]),t._v(" 中的配置后，转换为 Erlang 原生配置文件格式，并在运行时读取其中的配置。")]),t._v(" "),_("p",[_("strong",[t._v("loaded_plugins")])]),t._v(" "),_("p",[_("code",[t._v("loaded_plugins")]),t._v(" 文件记录了 EMQ X 默认启动的插件列表，可以修改此文件以增删默认启动的插件。"),_("code",[t._v("loaded_plugins")]),t._v(" 中启动项格式为 "),_("code",[t._v("{<Plugin Name>, <Enabled>}.")]),t._v("，"),_("code",[t._v("<Enabled>")]),t._v(" 字段为布尔类型，EMQ X 会在启动时根据 "),_("code",[t._v("<Enabled>")]),t._v(" 的值判断是否需要启动该插件。关于插件的更多内容，请查看 "),_("RouterLink",{attrs:{to:"/zh/backend/emqx/advanced/plugins.html"}},[t._v("插件")]),t._v("。")],1),t._v(" "),_("p",[t._v("{% emqxce %}")]),t._v(" "),_("div",{staticClass:"language-bash extra-class"},[_("pre",{pre:!0,attrs:{class:"language-bash"}},[_("code",[t._v("$ "),_("span",{pre:!0,attrs:{class:"token function"}},[t._v("cat")]),t._v(" loaded_plugins\n"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("emqx_management,true"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(".\n"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("emqx_recon,true"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(".\n"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("emqx_retainer,true"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(".\n"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("emqx_dashboard,true"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(".\n"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("emqx_rule_engine,true"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(".\n"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("emqx_bridge_mqtt,false"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(".\n")])])]),_("p",[t._v("{% endemqxce %}")]),t._v(" "),_("p",[t._v("{% emqxee %}")]),t._v(" "),_("div",{staticClass:"language-bash extra-class"},[_("pre",{pre:!0,attrs:{class:"language-bash"}},[_("code",[t._v("$ "),_("span",{pre:!0,attrs:{class:"token function"}},[t._v("cat")]),t._v(" loaded_plugins\n"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("emqx_management, true"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(".\n"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("emqx_dashboard, true"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(".\n"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("emqx_schema_registry, true"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(".\n"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("emqx_rule_engine, true"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(".\n")])])]),_("p",[t._v("{% endemqxee %}")]),t._v(" "),_("p",[_("strong",[t._v("mnesia")])]),t._v(" "),_("p",[t._v("Mnesia 数据库是 Erlang 内置的一个分布式 DBMS，可以直接存储 Erlang 的各种数据结构。")]),t._v(" "),_("p",[t._v("EMQ X 使用 Mnesia 数据库存储自身运行数据，例如告警记录、规则引擎已创建的资源和规则、Dashbaord 用户信息等数据，这些数据都将被存储在 "),_("code",[t._v("mnesia")]),t._v(" 目录下，因此一旦删除该目录，将导致 EMQ X 丢失所有业务数据。")]),t._v(" "),_("p",[t._v("可以通过 "),_("code",[t._v("emqx_ctl mnesia")]),t._v(" 命令查询 EMQ X 中 Mnesia 数据库的系统信息，具体请查看 "),_("RouterLink",{attrs:{to:"/zh/backend/emqx/advanced/cli.html"}},[t._v("管理命令 CLI")]),t._v("。")],1),t._v(" "),_("h2",{attrs:{id:"log-目录"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#log-目录"}},[t._v("#")]),t._v(" log 目录")]),t._v(" "),_("p",[_("strong",[t._v("emqx.log.")]),t._v("*")]),t._v(" "),_("p",[t._v("EMQ X 运行时产生的日志文件，具体请查看 "),_("RouterLink",{attrs:{to:"/zh/backend/emqx/getting-started/log.html"}},[t._v("日志与追踪")]),t._v("。")],1),t._v(" "),_("p",[_("strong",[t._v("crash.dump")])]),t._v(" "),_("p",[t._v("EMQ X 的崩溃转储文件，可以通过 "),_("code",[t._v("etc/emqx.conf")]),t._v(" 修改配置，具体内容可以查看 "),_("RouterLink",{attrs:{to:"/zh/backend/emqx/configuration/configuration.html"}},[t._v("配置项")]),t._v("。")],1),t._v(" "),_("p",[_("strong",[t._v("erlang.log.")]),t._v("*")]),t._v(" "),_("p",[t._v("以 "),_("code",[t._v("emqx start")]),t._v(" 方式后台启动 EMQ X 时，控制台日志的副本文件。")])])}),[],!1,null,null,null);e.default=a.exports}}]);