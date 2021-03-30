(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{533:function(a,s,e){"use strict";e.r(s);var t=e(42),n=Object(t.a)({},(function(){var a=this,s=a.$createElement,e=a._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h2",{attrs:{id:"版本热升级"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#版本热升级"}},[a._v("#")]),a._v(" 版本热升级")]),a._v(" "),e("p",[a._v("自 4.2.0 版本之后，EMQ X Broker 支持版本热升级。")]),a._v(" "),e("p",[a._v("使用版本热升级功能，用户可以快速、安全地升级生产环境的 EMQ X Broker，并避免了因重启服务导致的系统可用性降低。")]),a._v(" "),e("p",[a._v("目前 EMQ X Broker 仅支持 Patch 版本（Patch 版本是版本号的第三位）的热升级。\n即，目前支持 4.2.0 -> 4.2.1，4.2.0 -> 4.2.2，... 等的热升级，但 4.2.x 无法热升级到 4.3.0 或者 5.0。")]),a._v(" "),e("p",[a._v("目前 EMQ X for Windows 暂不支持热升级功能。")]),a._v(" "),e("h2",{attrs:{id:"热升级步骤"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#热升级步骤"}},[a._v("#")]),a._v(" 热升级步骤")]),a._v(" "),e("ol",[e("li",[a._v("查看当前已安装的 EMQ X Broker 的版本列表。")])]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("\n$ emqx versions\n\nInstalled versions:\n* "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("4.2")]),a._v(".0\tpermanent\n")])])]),e("ol",{attrs:{start:"2"}},[e("li",[a._v("从 EMQ X 官网下载要升级的软件包。")])]),a._v(" "),e("p",[a._v("访问 "),e("a",{attrs:{href:"https://www.emqx.io/downloads#broker",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://www.emqx.io/downloads#broker"),e("OutboundLink")],1),a._v(" 选择对应的版本和操作系统类型，然后选择 "),e("strong",[a._v('"zip"')]),a._v(" 包类型。")]),a._v(" "),e("ol",{attrs:{start:"3"}},[e("li",[a._v("找到 EMQ X 的安装目录：")])]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("\n$ "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("EMQX_ROOT_DIR")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),a._v("emqx root_dir"),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v("\n\n$ "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${EMQX_ROOT_DIR}")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"/usr/lib/emqx"')]),a._v("\n\n")])])]),e("ol",{attrs:{start:"4"}},[e("li",[a._v("将下载的 zip 包放到 EMQ X 安装目录下的 "),e("code",[a._v("releases")]),a._v(" 目录下：")])]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("\n$ "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("cp")]),a._v(" emqx-4.2.1.zip "),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${EMQX_ROOT_DIR}")]),a._v("/releases/\n\n")])])]),e("ol",{attrs:{start:"5"}},[e("li",[a._v("升级到指定版本:")])]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("\n$ emqx upgrade "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("4.2")]),a._v(".1\n\nRelease "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("4.2")]),a._v(".1 not found, attempting to unpack releases/emqx-4.2.1.tar.gz\nUnpacked successfully: "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"4.2.1"')]),a._v("\nInstalled Release: "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("4.2")]),a._v(".1\nMade release permanent: "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"4.2.1"')]),a._v("\n")])])]),e("ol",{attrs:{start:"6"}},[e("li",[a._v("再次查看版本列表，之前的版本的状态将会变成 "),e("code",[a._v("old")]),a._v(":")])]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("\n$ emqx versions\n\nInstalled versions:\n* "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("4.2")]),a._v(".1\tpermanent\n* "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("4.2")]),a._v(".0\told\n")])])]),e("h2",{attrs:{id:"升级后手动持久化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#升级后手动持久化"}},[a._v("#")]),a._v(" 升级后手动持久化")]),a._v(" "),e("p",[a._v("上面的 "),e("code",[a._v("emqx upgrade 4.2.1")]),a._v(" 命令其实执行了三个动作:")]),a._v(" "),e("ul",[e("li",[a._v("解压 zip 包 ("),e("code",[a._v("unpack")]),a._v(")")]),a._v(" "),e("li",[a._v("安装 ("),e("code",[a._v("install")]),a._v(")")]),a._v(" "),e("li",[a._v("持久化 ("),e("code",[a._v("permanent")]),a._v(")")])]),a._v(" "),e("p",[a._v("持久化之后，这次版本升级将会被固定下来，这意味着热升级后，如果 emqx 发生重启，使用的将是升级之后的新版本。\n如果不想在升级的同时持久化，可以使用 "),e("code",[a._v("--no-permanent")]),a._v(" 参数：")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("\n$ emqx upgrade --no-permanent "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("4.2")]),a._v(".1\n\nRelease "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("4.2")]),a._v(".1 not found, attempting to unpack releases/emqx-4.2.1.tar.gz\nUnpacked successfully: "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"4.2.1"')]),a._v("\nInstalled Release: "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("4.2")]),a._v(".1\n\n")])])]),e("p",[a._v('这时版本已经成功升级到了 4.2.1，但如果重启 emqx，将会还原到旧版本 4.2.0。\n现在如果查看版本列表，会发现 4.2.1 的状态为 "当前版本"('),e("code",[a._v("current")]),a._v(")，而不是持久化版本：")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("\n$ emqx versions\n\nInstalled versions:\n* "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("4.2")]),a._v(".1\tcurrent\n* "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("4.2")]),a._v(".0\tpermanent\n\n")])])]),e("p",[a._v("在系统稳定运行一段时间后，若决定持久化新版本，可以再次执行 "),e("code",[a._v("install")]),a._v(" 命令：")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("\n$ emqx "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("4.2")]),a._v(".1\n\nRelease "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("4.2")]),a._v(".1 is already installed and current, making permanent.\nMade release permanent: "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"4.2.1"')]),a._v("\n\n")])])]),e("h2",{attrs:{id:"版本降级"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#版本降级"}},[a._v("#")]),a._v(" 版本降级")]),a._v(" "),e("p",[a._v("如果升级后发现问题想要回退，可以执行版本降级命令。\n比如下面的例子会将 emqx 回退到 4.2.0 版本:")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("\n$ emqx downgrade "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("4.2")]),a._v(".0\n\nRelease "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("4.2")]),a._v(".0 is marked old, switching to it.\nInstalled Release: "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("4.2")]),a._v(".0\nMade release permanent: "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"4.2.0"')]),a._v("\n\n")])])]),e("h2",{attrs:{id:"删除版本"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#删除版本"}},[a._v("#")]),a._v(" 删除版本")]),a._v(" "),e("p",[a._v("在系统稳定运行一段时间后，若决定删除一个旧版本，可以执行版本卸载命令。\n比如下面的例子将会卸载旧版本的 4.2.0:")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("\n$ emqx uninstall "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("4.2")]),a._v(".0\n\nRelease "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("4.2")]),a._v(".0 is marked old, uninstalling it.\nUninstalled Release: "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("4.2")]),a._v(".0\n\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);