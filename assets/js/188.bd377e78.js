(window.webpackJsonp=window.webpackJsonp||[]).push([[188],{495:function(t,s,e){"use strict";e.r(s);var a=e(42),_=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"性能测试"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#性能测试"}},[t._v("#")]),t._v(" 性能测试")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/emqx/emqtt_bench",target:"_blank",rel:"noopener noreferrer"}},[t._v("emqtt_bench"),e("OutboundLink")],1),t._v(" 是基于 Erlang 编写的，一个简洁强大的 MQTT 协议性能测试工具，如需大规模场景、深度定制化的测试服务推荐使用 EMQ 合作伙伴 "),e("a",{attrs:{href:"https://www.xmeter.net/",target:"_blank",rel:"noopener noreferrer"}},[t._v("XMeter"),e("OutboundLink")],1),t._v(" 测试服务。")]),t._v(" "),e("h2",{attrs:{id:"编译安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#编译安装"}},[t._v("#")]),t._v(" 编译安装")]),t._v(" "),e("p",[e("code",[t._v("emqtt_bench")]),t._v(" 的运行依赖于 Erlang/OTP 21.2  以上版本运行环境，安装过程略过，详情请参考网上各个安装教程。")]),t._v(" "),e("p",[t._v("Erlang 环境安装完成后，下载 "),e("code",[t._v("emqtt-bench")]),t._v(" 最新代码，并编译：")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/emqx/emqtt-bench\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" emqtt-bench\n\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v("\n")])])]),e("p",[t._v("编译完成后，当前目录下会生成 一个名为"),e("code",[t._v("emqtt_bench")]),t._v(" 的可执行脚本。执行以下命令，确认其能正常使用：")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("./emqtt_bench\nUsage: emqtt_bench pub "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" sub "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" conn "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("--help"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),e("p",[t._v("输出以上内容，则证明 "),e("code",[t._v("emqtt_bench")]),t._v(" 已正确安装到主机。")]),t._v(" "),e("h2",{attrs:{id:"使用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[t._v("#")]),t._v(" 使用")]),t._v(" "),e("p",[e("code",[t._v("emqtt_bench")]),t._v(" 共三个子命令：")]),t._v(" "),e("ol",[e("li",[e("code",[t._v("pub")]),t._v("：用于创建大量客户端执行发布消息的操作。")]),t._v(" "),e("li",[e("code",[t._v("sub")]),t._v("：用于创建大量客户端执行订阅主题，并接受消息的操作。")]),t._v(" "),e("li",[e("code",[t._v("conn")]),t._v("：用于创建大量的连接。")])]),t._v(" "),e("h3",{attrs:{id:"发布"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#发布"}},[t._v("#")]),t._v(" 发布")]),t._v(" "),e("p",[t._v("执行 "),e("code",[t._v("./emqtt_bench pub --help")]),t._v(" 会得到可用的参数输出，此处整理：")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("参数")]),t._v(" "),e("th",[t._v("简写")]),t._v(" "),e("th",[t._v("可选值")]),t._v(" "),e("th",[t._v("默认值")]),t._v(" "),e("th",[t._v("说明")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("--host")]),t._v(" "),e("td",[t._v("-h")]),t._v(" "),e("td",[t._v("-")]),t._v(" "),e("td",[t._v("localhost")]),t._v(" "),e("td",[t._v("要连接的 MQTT 服务器地址")])]),t._v(" "),e("tr",[e("td",[t._v("--port")]),t._v(" "),e("td",[t._v("-p")]),t._v(" "),e("td",[t._v("-")]),t._v(" "),e("td",[t._v("1883")]),t._v(" "),e("td",[t._v("MQTT 服务端口")])]),t._v(" "),e("tr",[e("td",[t._v("--version")]),t._v(" "),e("td",[t._v("-V")]),t._v(" "),e("td",[t._v("3"),e("br"),t._v("4"),e("br"),t._v("5")]),t._v(" "),e("td",[t._v("5")]),t._v(" "),e("td",[t._v("使用的 MQTT 协议版本")])]),t._v(" "),e("tr",[e("td",[t._v("--count")]),t._v(" "),e("td",[t._v("-c")]),t._v(" "),e("td",[t._v("-")]),t._v(" "),e("td",[t._v("200")]),t._v(" "),e("td",[t._v("客户端总数")])]),t._v(" "),e("tr",[e("td",[t._v("--startnumber")]),t._v(" "),e("td",[t._v("-n")]),t._v(" "),e("td",[t._v("-")]),t._v(" "),e("td",[t._v("0")]),t._v(" "),e("td",[t._v("客户端数量起始值")])]),t._v(" "),e("tr",[e("td",[t._v("--interval")]),t._v(" "),e("td",[t._v("-i")]),t._v(" "),e("td",[t._v("-")]),t._v(" "),e("td",[t._v("10")]),t._v(" "),e("td",[t._v("每间隔多少时间创建一个客户端；单位：毫秒")])]),t._v(" "),e("tr",[e("td",[t._v("--interval_of_msg")]),t._v(" "),e("td",[t._v("-I")]),t._v(" "),e("td",[t._v("-")]),t._v(" "),e("td",[t._v("1000")]),t._v(" "),e("td",[t._v("每间隔多少时间发送一个消息")])]),t._v(" "),e("tr",[e("td",[t._v("--username")]),t._v(" "),e("td",[t._v("-u")]),t._v(" "),e("td",[t._v("-")]),t._v(" "),e("td",[t._v("无；非必选")]),t._v(" "),e("td",[t._v("客户端用户名")])]),t._v(" "),e("tr",[e("td",[t._v("--password")]),t._v(" "),e("td",[t._v("-P")]),t._v(" "),e("td",[t._v("-")]),t._v(" "),e("td",[t._v("无；非必选")]),t._v(" "),e("td",[t._v("客户端密码")])]),t._v(" "),e("tr",[e("td",[t._v("--topic")]),t._v(" "),e("td",[t._v("-t")]),t._v(" "),e("td",[t._v("-")]),t._v(" "),e("td",[t._v("无；必选")]),t._v(" "),e("td",[t._v("发布的主题；支持站位符："),e("br"),e("code",[t._v("%c")]),t._v("：表示 ClientId"),e("br"),e("code",[t._v("%u")]),t._v("：表示 Username"),e("br"),e("code",[t._v("%i")]),t._v("：表示客户端的序列数")])]),t._v(" "),e("tr",[e("td",[t._v("--szie")]),t._v(" "),e("td",[t._v("-s")]),t._v(" "),e("td",[t._v("-")]),t._v(" "),e("td",[t._v("256")]),t._v(" "),e("td",[t._v("消息 Payload 的大小；单位：字节")])]),t._v(" "),e("tr",[e("td",[t._v("--qos")]),t._v(" "),e("td",[t._v("-q")]),t._v(" "),e("td",[t._v("-")]),t._v(" "),e("td",[t._v("0")]),t._v(" "),e("td",[t._v("Qos 等级")])]),t._v(" "),e("tr",[e("td",[t._v("--retain")]),t._v(" "),e("td",[t._v("-r")]),t._v(" "),e("td",[t._v("true"),e("br"),t._v("false")]),t._v(" "),e("td",[t._v("false")]),t._v(" "),e("td",[t._v("消息是否设置 Retain 标志")])]),t._v(" "),e("tr",[e("td",[t._v("--keepalive")]),t._v(" "),e("td",[t._v("-k")]),t._v(" "),e("td",[t._v("-")]),t._v(" "),e("td",[t._v("300")]),t._v(" "),e("td",[t._v("客户端心跳时间")])]),t._v(" "),e("tr",[e("td",[t._v("--clean")]),t._v(" "),e("td",[t._v("-C")]),t._v(" "),e("td",[t._v("true"),e("br"),t._v("false")]),t._v(" "),e("td",[t._v("true")]),t._v(" "),e("td",[t._v("是否以清除会话的方式建立连接")])]),t._v(" "),e("tr",[e("td",[t._v("--ssl")]),t._v(" "),e("td",[t._v("-S")]),t._v(" "),e("td",[t._v("true"),e("br"),t._v("false")]),t._v(" "),e("td",[t._v("false")]),t._v(" "),e("td",[t._v("是否启用 SSL")])]),t._v(" "),e("tr",[e("td",[t._v("--certfile")]),t._v(" "),e("td",[t._v("-")]),t._v(" "),e("td",[t._v("-")]),t._v(" "),e("td",[t._v("无")]),t._v(" "),e("td",[t._v("客户端 SSL 证书")])]),t._v(" "),e("tr",[e("td",[t._v("--keyfile")]),t._v(" "),e("td",[t._v("-")]),t._v(" "),e("td",[t._v("-")]),t._v(" "),e("td",[t._v("无")]),t._v(" "),e("td",[t._v("客户端 SSL 秘钥文件")])]),t._v(" "),e("tr",[e("td",[t._v("--ws")]),t._v(" "),e("td",[t._v("-")]),t._v(" "),e("td",[t._v("true"),e("br"),t._v("false")]),t._v(" "),e("td",[t._v("false")]),t._v(" "),e("td",[t._v("是否以 Websocket 的方式建立连接")])]),t._v(" "),e("tr",[e("td",[t._v("--ifaddr")]),t._v(" "),e("td",[t._v("-")]),t._v(" "),e("td",[t._v("-")]),t._v(" "),e("td",[t._v("无")]),t._v(" "),e("td",[t._v("指定客户端连接使用的本地网卡")])])])]),t._v(" "),e("p",[t._v("例如，我们启动 10 个连接，分别每秒向主题 "),e("code",[t._v("t")]),t._v(" 发送 100 条 Qos0 消息，其中每个消息体的大小为 "),e("code",[t._v("16")]),t._v(" 字节大小：")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("./emqtt_bench pub -t t -h emqx-server -s "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),t._v(" -q "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" -c "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v(" -I "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("\n")])])]),e("h3",{attrs:{id:"订阅"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#订阅"}},[t._v("#")]),t._v(" 订阅")]),t._v(" "),e("p",[t._v("执行 "),e("code",[t._v("./emqtt_bench sub --help")]),t._v("可得到该子命令的所有的可用参数。它们的解释已包含在上表中，此处略过。")]),t._v(" "),e("p",[t._v("例如，我们启动 500 个连接，每个都以 Qos0 订阅 "),e("code",[t._v("t")]),t._v(" 主题：")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("./emqtt_bench sub -t t -h emqx-server -c "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("500")]),t._v("\n")])])]),e("h3",{attrs:{id:"连接"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#连接"}},[t._v("#")]),t._v(" 连接")]),t._v(" "),e("p",[t._v("执行 "),e("code",[t._v("./emqtt_bench conn --help")]),t._v(" 可得到该子命令所有可用的参数。它们的解释已包含在上表中，此处略过。")]),t._v(" "),e("p",[t._v("例如，我们启动 1000 个连接：")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("./emqtt_bench conn -h emqx-server -c "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),t._v("\n")])])]),e("h3",{attrs:{id:"ssl-连接"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ssl-连接"}},[t._v("#")]),t._v(" SSL 连接")]),t._v(" "),e("p",[e("code",[t._v("emqtt_bench")]),t._v(" 支持建立 SSL 的安全连接，并执行测试。")]),t._v(" "),e("p",[t._v("单向证书，例如：")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("./emqtt_bench sub -c "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v(" -i "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v(" -t bench/%i -p "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("8883")]),t._v(" -S\n./emqtt_bench pub -c "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v(" -I "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v(" -t bench/%i -p "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("8883")]),t._v(" -s "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("256")]),t._v(" -S\n")])])]),e("p",[t._v("双向证书，例如：")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("./emqtt_bench sub -c "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v(" -i "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v(" -t bench/%i -p "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("8883")]),t._v(" --certfile path/to/client-cert.pem --keyfile path/to/client-key.pem\n./emqtt_bench pub -c "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v(" -i "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v(" -t bench/%i -s "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("256")]),t._v(" -p "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("8883")]),t._v(" --certfile path/to/client-cert.pem --keyfile path/to/client-key.pem\n")])])]),e("h2",{attrs:{id:"典型压测场景"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#典型压测场景"}},[t._v("#")]),t._v(" 典型压测场景")]),t._v(" "),e("h3",{attrs:{id:"场景说明"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#场景说明"}},[t._v("#")]),t._v(" 场景说明")]),t._v(" "),e("p",[t._v("此处我们以 2 类最典型的场景来验证工具的使用：")]),t._v(" "),e("ol",[e("li",[t._v("连接量：使用 "),e("code",[t._v("emqtt_bench")]),t._v(" 创建百万连接到 EMQ X Broker。")]),t._v(" "),e("li",[t._v("吞吐量：使用 "),e("code",[t._v("emqtt_bench")]),t._v(" 在 EMQ X 中创建出 "),e("code",[t._v("10W/s 的 Qos0")]),t._v(" 消息吞吐量。")])]),t._v(" "),e("h3",{attrs:{id:"机器及部署拓扑图"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#机器及部署拓扑图"}},[t._v("#")]),t._v(" 机器及部署拓扑图")]),t._v(" "),e("p",[t._v("共需准备三台 8C16G 服务器，一台为 EMQX Broker，两台为 客户端压力机。其中：")]),t._v(" "),e("ul",[e("li",[e("p",[e("strong",[t._v("系统")]),t._v(": "),e("code",[t._v("CentOS Linux release 7.7.1908 (Core)")])])]),t._v(" "),e("li",[e("p",[e("strong",[t._v("CPU:")]),t._v(" "),e("code",[t._v("Intel Xeon Processor (Skylake)")]),t._v(" 主频: "),e("code",[t._v("2693.670 MHZ")])])]),t._v(" "),e("li",[e("p",[e("strong",[t._v("服务端：")]),t._v(" "),e("code",[t._v("emqx-centos7-v4.0.2.zip")])])]),t._v(" "),e("li",[e("p",[e("strong",[t._v("压力机：")]),e("code",[t._v("emqtt-bench v0.3.1")])]),t._v(" "),e("ul",[e("li",[t._v("每台压力机分别配置 10 张网卡，用于连接测试中建立大量的 MQTT 客户端连接")])])])]),t._v(" "),e("p",[t._v("拓扑结构如下：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("\t+-----------------------+\n\t| bench1: 192.168.0.100 | -------\t\t\t\t\t+--------------------------+\n\t+-----------------------+        \\-----\x3e  |\t\t    EMQ X Broker\t\t\t |\n\t+-----------------------+        /-----\x3e  |       192.168.0.99\t  \t |\n\t| bench2: 192.168.0.200 | -------\t\t\t\t\t+--------------------------+\n\t+-----------------------+ \n")])])]),e("h3",{attrs:{id:"调优"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#调优"}},[t._v("#")]),t._v(" 调优")]),t._v(" "),e("p",[t._v("客户端的压力机和服务端的机器都需要执行系统参数的调优，参见："),e("RouterLink",{attrs:{to:"/zh/backend/emqx/tutorial/tune.html"}},[t._v("系统调优")])],1),t._v(" "),e("h3",{attrs:{id:"连接量测试"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#连接量测试"}},[t._v("#")]),t._v(" 连接量测试")]),t._v(" "),e("p",[t._v("在执行完系统调优后，首先启动服务端：")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("./bin/emqx start\n")])])]),e("p",[t._v("然后在 "),e("code",[t._v("bench1")]),t._v(" 上的每张网卡上启动 5w 的连接数，共计 50w 的连接：")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("\n./emqtt_bench -h "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".0.99 -c "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("50000")]),t._v(" --ifaddr "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".0.100\n./emqtt_bench -h "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".0.99 -c "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("50000")]),t._v(" --ifaddr "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".0.101\n./emqtt_bench -h "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".0.99 -c "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("50000")]),t._v(" --ifaddr "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".0.102\n./emqtt_bench -h "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".0.99 -c "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("50000")]),t._v(" --ifaddr "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".0.103\n./emqtt_bench -h "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".0.99 -c "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("50000")]),t._v(" --ifaddr "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".0.104\n./emqtt_bench -h "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".0.99 -c "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("50000")]),t._v(" --ifaddr "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".0.105\n./emqtt_bench -h "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".0.99 -c "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("50000")]),t._v(" --ifaddr "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".0.106\n./emqtt_bench -h "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".0.99 -c "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("50000")]),t._v(" --ifaddr "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".0.107\n./emqtt_bench -h "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".0.99 -c "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("50000")]),t._v(" --ifaddr "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".0.108\n./emqtt_bench -h "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".0.99 -c "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("50000")]),t._v(" --ifaddr "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".0.109\n")])])]),e("p",[t._v("在 "),e("code",[t._v("bench2")]),t._v("上也执行同样的操作。")]),t._v(" "),e("p",[t._v("在所有连接建立完成后，执行 "),e("code",[t._v("./bin/emqx_ctl listeners")]),t._v("，并找到以下的内容， 查看 EMQ X 中连接数的信息：")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("listener on mqtt:tcp:0.0.0.0:1883\n  acceptors       "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v("\n  max_conns       "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1024000")]),t._v("\n  current_conn    "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000000")]),t._v("\n  shutdown_count  "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),e("h3",{attrs:{id:"吞吐测试"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#吞吐测试"}},[t._v("#")]),t._v(" 吞吐测试")]),t._v(" "),e("p",[t._v("同样的，首先启动服务端：")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("./bin/emqx start\n")])])]),e("p",[t._v("在 "),e("code",[t._v("bench1")]),t._v(" 启动 500 个订阅客户端：")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("./emqtt_bench sub -t t -h "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".0.99 -c "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("500")]),t._v("\n")])])]),e("p",[t._v("然后再 "),e("code",[t._v("bench2")]),t._v(" 上启动 20 个发布端，并且每秒发布 10 条消息：")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("./emqtt_bench pub -t t -h "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".0.99 -c "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),t._v(" -I "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v("\n")])])]),e("p",[t._v("然后，回到 "),e("code",[t._v("bench1")]),t._v("上的订阅客户端，可看到当前接收消息的速率，类似于：")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("recv"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("28006")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(": "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("total")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2102563")]),t._v(", "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("rate")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("99725")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("msg/sec"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=_.exports}}]);