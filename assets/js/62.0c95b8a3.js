(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{579:function(t,a,s){"use strict";s.r(a);var e=s(7),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"分布式集群"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#分布式集群"}},[t._v("#")]),t._v(" 分布式集群")]),t._v(" "),s("h2",{attrs:{id:"分布式-erlang"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#分布式-erlang"}},[t._v("#")]),t._v(" 分布式 Erlang")]),t._v(" "),s("p",[t._v("Erlang/OTP 最初是爱立信为开发电信设备系统设计的编程语言平台，电信设备 (路由器、接入网关...) 典型设计是通过背板连接主控板卡与多块业务板卡的分布式系统。")]),t._v(" "),s("h3",{attrs:{id:"节点与分布式-erlang"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#节点与分布式-erlang"}},[t._v("#")]),t._v(" 节点与分布式 Erlang")]),t._v(" "),s("p",[t._v("Erlang/OTP 语言平台的分布式程序，由分布互联的 Erlang 运行时系统组成，每个 Erlang\n运行时系统被称为节点(Node)，节点间通过 TCP 两两互联，组成一个网状结构。")]),t._v(" "),s("p",[t._v("Erlang 节点由唯一的节点名称标识，节点名称由 "),s("code",[t._v("@")]),t._v(" 分隔的两部分组成:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("@"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("ip-address"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),s("p",[t._v("节点间通过节点名称进行通信寻址。例如在本机启动四个 shell 终端，然后使用 "),s("code",[t._v("-name")]),t._v(" 参数分别启动四个 Erlang 节点:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("erl -name node1@127.0.0.1 -setcookie my_nodes\nerl -name node2@127.0.0.1 -setcookie my_nodes\nerl -name node3@127.0.0.1 -setcookie my_nodes\nerl -name node4@127.0.0.1 -setcookie my_nodes\n")])])]),s("p",[t._v("使用 "),s("code",[t._v("node().")]),t._v(" 可查看本节点名，使用 "),s("code",[t._v("nodes().")]),t._v(" 可查看已与当前节点建立连接的其他节点。我们现在到 'node1@127.0.0.1' 的控制台下，查看当前节点名和已连接的节点:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("node1@127.0.0.1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[s("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[t._v("4")]),t._v(">")]),t._v(" node"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(".\n"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'node1@127.0.0.1'")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("node1@127.0.0.1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[s("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[t._v("4")]),t._v(">")]),t._v(" nodes"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(".\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),s("p",[t._v("然后我们让 node1 发起与其他节点的连接:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("node1@127.0.0.1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[s("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[t._v("1")]),t._v(">")]),t._v(" net_kernel:connect_node"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'node2@127.0.0.1'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(".\n"),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("node1@127.0.0.1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[s("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[t._v("2")]),t._v(">")]),t._v(" net_kernel:connect_node"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'node3@127.0.0.1'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(".\n"),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("node1@127.0.0.1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[s("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[t._v("3")]),t._v(">")]),t._v(" net_kernel:connect_node"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'node4@127.0.0.1'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(".\n"),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n")])])]),s("p",[t._v("现在再次可查看已与 node1 建立连接的其他节点:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("node1@127.0.0.1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[s("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[t._v("4")]),t._v(">")]),t._v(" nodes"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(".\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'node2@127.0.0.1'")]),t._v(","),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'node3@127.0.0.1'")]),t._v(","),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'node4@127.0.0.1'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),s("p",[t._v("可以看到 node2、node3、node4 都已与 node1 建立了分布式连接，四个节点组成了一个集群。注意每当一个新的节点加入集群时，它会与集群中所有的节点都建立一个 TCP 连接。至此，四个节点完成了如下图所示的网状结构:")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/backend/emqx/assets/cluster_1.png",alt:"cluster_1.png"}})]),t._v(" "),s("h3",{attrs:{id:"安全"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安全"}},[t._v("#")]),t._v(" 安全")]),t._v(" "),s("p",[t._v("Erlang 节点间通过 cookie 进行互连认证。cookie 是一个字符串，只有 cookie 相同的两个节点才能建立连接。"),s("a",{attrs:{href:"#node-and-distributed-erlang"}},[t._v("上节")]),t._v(" 中我们曾经使用 "),s("code",[t._v("-setcookie my_nodes")]),t._v(" 参数给四个节点设置了相同的 cookie: "),s("code",[t._v("my_nodes")]),t._v("。")]),t._v(" "),s("p",[t._v("详见: "),s("a",{attrs:{href:"http://erlang.org/doc/reference_manual/distributed.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://erlang.org/doc/reference_manual/distributed.html"),s("OutboundLink")],1)]),t._v(" "),s("h3",{attrs:{id:"emq-x-集群协议设置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#emq-x-集群协议设置"}},[t._v("#")]),t._v(" EMQ X 集群协议设置")]),t._v(" "),s("p",[t._v("Erlang 集群中各节点可通过 TCPv4、TCPv6 或 TLS 方式连接，可在 "),s("code",[t._v("etc/emqx.conf")]),t._v("\n中配置连接方式:")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("配置名")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("默认值")]),t._v(" "),s("th",[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("cluster.proto_dist")]),t._v(" "),s("td",[t._v("enum")]),t._v(" "),s("td",[s("code",[t._v("inet_tcp")])]),t._v(" "),s("td",[t._v("分布式协议，可选值："),s("br"),t._v("  - inet_tcp: 使用 TCP IPv4"),s("br"),t._v("  - inet6_tcp: 使用 TCP IPv6"),s("br"),t._v("  - inet_tls: 使用 TLS")])]),t._v(" "),s("tr",[s("td",[t._v("node.ssl_dist_optfile")]),t._v(" "),s("td",[t._v("文件路径")]),t._v(" "),s("td",[s("code",[t._v("etc/ssl_dist.conf")])]),t._v(" "),s("td",[t._v("当 "),s("code",[t._v("cluster.proto_dist")]),t._v(" 选定为 inet_tls 时，需要配置 "),s("code",[t._v("etc/ssl_dist.conf")]),t._v(" 文件，指定 TLS 证书等")])])])]),t._v(" "),s("h2",{attrs:{id:"emq-x-分布式集群设计"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#emq-x-分布式集群设计"}},[t._v("#")]),t._v(" EMQ X 分布式集群设计")]),t._v(" "),s("p",[t._v("EMQ X 分布式的基本功能是将消息转发和投递给各节点上的订阅者，如下图所示：")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/backend/emqx/assets/design_9.png",alt:"design_9.png"}})]),t._v(" "),s("p",[t._v("为实现此过程，EMQ X 维护了几个与之相关的数据结构：订阅表，路由表，主题树。")]),t._v(" "),s("h3",{attrs:{id:"订阅表-主题-订阅者"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#订阅表-主题-订阅者"}},[t._v("#")]),t._v(" 订阅表: 主题 - 订阅者")]),t._v(" "),s("p",[t._v("MQTT 客户端订阅主题时，EMQ X 会维护主题(Topic) -> 订阅者(Subscriber) 映射的"),s("strong",[t._v("订阅表")]),t._v("。订阅表只存在于订阅者所在的 EMQ X 节点上，例如:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("node1:\n\n    topic1 -"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" client1, client2\n    topic2 -"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" client3\n\nnode2:\n\n    topic1 -"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" client4\n")])])]),s("h3",{attrs:{id:"路由表-主题-节点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#路由表-主题-节点"}},[t._v("#")]),t._v(" 路由表: 主题 - 节点")]),t._v(" "),s("p",[t._v("而同一集群的所有节点，都会"),s("strong",[t._v("复制")]),t._v("一份主题(Topic) -> 节点(Node) 映射的"),s("strong",[t._v("路由表")]),t._v("，例如:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("topic1 -"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" node1, node2\ntopic2 -"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" node3\ntopic3 -"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" node2, node4\n")])])]),s("h3",{attrs:{id:"主题树-带统配符的主题匹配"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#主题树-带统配符的主题匹配"}},[t._v("#")]),t._v(" 主题树: 带统配符的主题匹配")]),t._v(" "),s("p",[t._v("除路由表之外，EMQ X 集群中的每个节点也会维护一份"),s("strong",[t._v("主题树")]),t._v("(Topic Trie) 的备份。")]),t._v(" "),s("p",[t._v("例如下述主题订阅关系:")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("客户端")]),t._v(" "),s("th",[t._v("节点")]),t._v(" "),s("th",[t._v("订阅主题")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("client1")]),t._v(" "),s("td",[t._v("node1")]),t._v(" "),s("td",[t._v("t/+/x, t/+/y")])]),t._v(" "),s("tr",[s("td",[t._v("client2")]),t._v(" "),s("td",[t._v("node2")]),t._v(" "),s("td",[t._v("t/#")])]),t._v(" "),s("tr",[s("td",[t._v("client3")]),t._v(" "),s("td",[t._v("node3")]),t._v(" "),s("td",[t._v("t/+/x, t/a")])])])]),t._v(" "),s("p",[t._v("在所有订阅完成时，EMQ X 中会维护如下主题树 (Topic Trie) 和路由表 (Route Table):")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/backend/emqx/assets/cluster_2.png",alt:"design_7.png"}})]),t._v(" "),s("h3",{attrs:{id:"消息派发过程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#消息派发过程"}},[t._v("#")]),t._v(" 消息派发过程")]),t._v(" "),s("p",[t._v("当 MQTT 客户端发布消息时，所在节点会根据消息主题，检索路由表并转发消息到相关节点，再由相关节点检索本地的订阅表并将消息发送给相关订阅者。")]),t._v(" "),s("p",[t._v("例如 client1 向主题 "),s("code",[t._v("t/a")]),t._v(" 发布消息，消息在节点间的路由与派发流程:")]),t._v(" "),s("ol",[s("li",[t._v("client1 发布主题为 "),s("code",[t._v("t/a")]),t._v(" 的消息到节点 node1")]),t._v(" "),s("li",[t._v("node1 通过查询主题树，得知 "),s("code",[t._v("t/a")]),t._v(" 可匹配到现有的 "),s("code",[t._v("t/a")]),t._v("、"),s("code",[t._v("t/#")]),t._v(" 这两个主题。")]),t._v(" "),s("li",[t._v("node1 通过查询路由表，得知主题 "),s("code",[t._v("t/a")]),t._v(" 只在 node3 上有订阅者，而主题 "),s("code",[t._v("t/#")]),t._v(" 只在 node2 上有订阅者。故 node1 将消息转发给 node2 和 node3。")]),t._v(" "),s("li",[t._v("node2 收到转发来的 "),s("code",[t._v("t/a")]),t._v(" 消息后，查询本地订阅表，获取本节点上订阅了 "),s("code",[t._v("t/#")]),t._v(" 的订阅者，并把消息投递给他们。")]),t._v(" "),s("li",[t._v("node3 收到转发来的 "),s("code",[t._v("t/a")]),t._v(" 消息后，查询本地订阅表，获取本节点上订阅了 "),s("code",[t._v("t/a")]),t._v(" 的订阅者，并把消息投递给他们。")]),t._v(" "),s("li",[t._v("消息转发和投递结束。")])]),t._v(" "),s("h3",{attrs:{id:"数据分片与共享方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数据分片与共享方式"}},[t._v("#")]),t._v(" 数据分片与共享方式")]),t._v(" "),s("p",[t._v("EMQ X 的订阅表在集群中是分片(partitioned)的，而主题树和路由表是共享(replicated)的。")]),t._v(" "),s("h2",{attrs:{id:"节点发现与自动集群"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#节点发现与自动集群"}},[t._v("#")]),t._v(" 节点发现与自动集群")]),t._v(" "),s("p",[t._v("EMQ X 支持基于 Ekka 库的集群自动发现 (Autocluster)。Ekka 是为 Erlang/OTP 应用开发的集群管理库，支持\nErlang 节点自动发现 (Service Discovery)、自动集群 (Autocluster)、脑裂自动愈合 (Network Partition\nAutoheal)、自动删除宕机节点 (Autoclean)。")]),t._v(" "),s("p",[t._v("EMQ X 支持多种节点发现策略:")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("策略")]),t._v(" "),s("th",[t._v("说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("manual")]),t._v(" "),s("td",[t._v("手动命令创建集群")])]),t._v(" "),s("tr",[s("td",[t._v("static")]),t._v(" "),s("td",[t._v("静态节点列表自动集群")])]),t._v(" "),s("tr",[s("td",[t._v("mcast")]),t._v(" "),s("td",[t._v("UDP 组播方式自动集群")])]),t._v(" "),s("tr",[s("td",[t._v("dns")]),t._v(" "),s("td",[t._v("DNS A 记录自动集群")])]),t._v(" "),s("tr",[s("td",[t._v("etcd")]),t._v(" "),s("td",[t._v("通过 etcd 自动集群")])]),t._v(" "),s("tr",[s("td",[t._v("k8s")]),t._v(" "),s("td",[t._v("Kubernetes 服务自动集群")])])])]),t._v(" "),s("h3",{attrs:{id:"manual-手动创建集群"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#manual-手动创建集群"}},[t._v("#")]),t._v(" manual 手动创建集群")]),t._v(" "),s("p",[t._v("默认配置为手动创建集群，节点须通过 ./bin/emqx_ctl join <Node> 命令加入:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("cluster.discovery "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" manual\n")])])]),s("h3",{attrs:{id:"基于-static-节点列表自动集群"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基于-static-节点列表自动集群"}},[t._v("#")]),t._v(" 基于 static 节点列表自动集群")]),t._v(" "),s("p",[t._v("配置固定的节点列表，自动发现并创建集群:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("cluster.discovery "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" static\ncluster.static.seeds "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" emqx1@127.0.0.1,emqx2@127.0.0.1\n")])])]),s("h3",{attrs:{id:"基于-mcast-组播自动集群"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基于-mcast-组播自动集群"}},[t._v("#")]),t._v(" 基于 mcast 组播自动集群")]),t._v(" "),s("p",[t._v("基于 UDP 组播自动发现并创建集群:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("cluster.discovery "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" mcast\ncluster.mcast.addr "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("239.192")]),t._v(".0.1\ncluster.mcast.ports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4369,4370")]),t._v("\ncluster.mcast.iface "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),t._v(".0.0\ncluster.mcast.ttl "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("255")]),t._v("\ncluster.mcast.loop "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" on\n")])])]),s("h3",{attrs:{id:"基于-dns-a-记录自动集群"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基于-dns-a-记录自动集群"}},[t._v("#")]),t._v(" 基于 DNS A 记录自动集群")]),t._v(" "),s("p",[t._v("基于 DNS A 记录自动发现并创建集群:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("cluster.discovery "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" dns\ncluster.dns.name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" localhost\ncluster.dns.app  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ekka\n")])])]),s("h3",{attrs:{id:"基于-etcd-自动集群"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基于-etcd-自动集群"}},[t._v("#")]),t._v(" 基于 etcd 自动集群")]),t._v(" "),s("p",[t._v("基于 "),s("a",{attrs:{href:"https://coreos.com/etcd/",target:"_blank",rel:"noopener noreferrer"}},[t._v("etcd"),s("OutboundLink")],1),t._v(" 自动发现并创建集群:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("cluster.discovery "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" etcd\ncluster.etcd.server "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" http://127.0.0.1:2379\ncluster.etcd.prefix "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" emqcl\ncluster.etcd.node_ttl "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" 1m\n")])])]),s("h3",{attrs:{id:"基于-kubernetes-自动集群"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基于-kubernetes-自动集群"}},[t._v("#")]),t._v(" 基于 kubernetes 自动集群")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://kubernetes.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Kubernetes"),s("OutboundLink")],1),t._v(" 下自动发现并创建集群:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("cluster.discovery "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" k8s\ncluster.k8s.apiserver "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" http://10.110.111.204:8080\ncluster.k8s.service_name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ekka\ncluster.k8s.address_type "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ip")]),t._v("\ncluster.k8s.app_name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ekka\n")])])]),s("blockquote",[s("p",[t._v("Kubernetes 不建议使用 Fannel 网络插件，推荐使用 Calico 网络插件。")])]),t._v(" "),s("h3",{attrs:{id:"手动-manual-方式管理集群介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#手动-manual-方式管理集群介绍"}},[t._v("#")]),t._v(" 手动(manual) 方式管理集群介绍")]),t._v(" "),s("p",[t._v("假设要在两台服务器 s1.emqx.io, s2.emqx.io 上部署 EMQ X 集群:")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("节点名")]),t._v(" "),s("th",[t._v("主机名 (FQDN)")]),t._v(" "),s("th",[t._v("IP 地址")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("emqx@s1.emqx.io 或 emqx@192.168.0.10")]),t._v(" "),s("td",[t._v("s1.emqx.io")]),t._v(" "),s("td",[t._v("192.168.0.10")])]),t._v(" "),s("tr",[s("td",[t._v("emqx@s2.emqx.io 或 emqx@192.168.0.20")]),t._v(" "),s("td",[t._v("s2.emqx.io")]),t._v(" "),s("td",[t._v("192.168.0.20")])])])]),t._v(" "),s("p",[s("strong",[t._v("注意：")]),t._v(" 节点名格式为 "),s("a",{attrs:{href:"mailto:Name@Host"}},[t._v("Name@Host")]),t._v(", Host 必须是 IP 地址或 FQDN (主机名。域名)")]),t._v(" "),s("h4",{attrs:{id:"配置-emqx-s1-emqx-io-节点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置-emqx-s1-emqx-io-节点"}},[t._v("#")]),t._v(" 配置 emqx@s1.emqx.io 节点")]),t._v(" "),s("p",[t._v("emqx/etc/emqx.conf:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("node.name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" emqx@s1.emqx.io\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 或")]),t._v("\nnode.name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" emqx@192.168.0.10\n")])])]),s("p",[t._v("也可通过环境变量:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("EMQX_NODE_NAME")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("emqx@s1.emqx.io "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" ./bin/emqx start\n")])])]),s("p",[s("strong",[t._v("注意:")]),t._v(" 节点启动加入集群后，节点名称不能变更。")]),t._v(" "),s("h4",{attrs:{id:"配置-emqx-s2-emqx-io-节点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置-emqx-s2-emqx-io-节点"}},[t._v("#")]),t._v(" 配置 emqx@s2.emqx.io 节点")]),t._v(" "),s("p",[t._v("emqx/etc/emqx.conf:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("node.name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" emqx@s2.emqx.io\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 或")]),t._v("\nnode.name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" emqx@192.168.0.20\n")])])]),s("h4",{attrs:{id:"节点加入集群"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#节点加入集群"}},[t._v("#")]),t._v(" 节点加入集群")]),t._v(" "),s("p",[t._v("启动两台节点后，在 s2.emqx.io 上执行:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ ./bin/emqx_ctl cluster "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("join")]),t._v(" emqx@s1.emqx.io\n\nJoin the cluster successfully.\nCluster status: "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("running_nodes,"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'emqx@s1.emqx.io'")]),t._v(","),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'emqx@s2.emqx.io'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),s("p",[t._v("或者在 s1.emqx.io 上执行:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ ./bin/emqx_ctl cluster "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("join")]),t._v(" emqx@s2.emqx.io\n\nJoin the cluster successfully.\nCluster status: "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("running_nodes,"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'emqx@s1.emqx.io'")]),t._v(","),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'emqx@s2.emqx.io'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),s("p",[t._v("在任意节点上查询集群状态:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ ./bin/emqx_ctl cluster status\n\nCluster status: "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("running_nodes,"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'emqx@s1.emqx.io'")]),t._v(","),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'emqx@s2.emqx.io'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),s("h4",{attrs:{id:"退出集群"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#退出集群"}},[t._v("#")]),t._v(" 退出集群")]),t._v(" "),s("p",[t._v("节点退出集群，两种方式:")]),t._v(" "),s("ol",[s("li",[t._v("leave: 让本节点退出集群")]),t._v(" "),s("li",[t._v("force-leave: 从集群删除其他节点")])]),t._v(" "),s("p",[t._v("让 emqx@s2.emqx.io 主动退出集群:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ ./bin/emqx_ctl cluster leave\n")])])]),s("p",[t._v("或在 s1.emqx.io 上，从集群删除 emqx@s2.emqx.io 节点:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ ./bin/emqx_ctl cluster force-leave emqx@s2.emqx.io\n")])])]),s("h2",{attrs:{id:"集群脑裂与自动愈合"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#集群脑裂与自动愈合"}},[t._v("#")]),t._v(" 集群脑裂与自动愈合")]),t._v(" "),s("p",[s("em",[t._v("EMQ X")]),t._v(" 支持集群脑裂自动恢复(Network Partition Autoheal)，可在 "),s("code",[t._v("etc/emqx.conf")]),t._v(" 中配置:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("cluster.autoheal "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" on\n")])])]),s("p",[t._v("集群脑裂自动恢复流程:")]),t._v(" "),s("ol",[s("li",[t._v("节点收到 Mnesia 的 "),s("code",[t._v("inconsistent_database")]),t._v(" 事件 3 秒后进行集群脑裂确认；")]),t._v(" "),s("li",[t._v("节点确认集群脑裂发生后，向 Leader 节点 (集群中最早启动节点) 上报脑裂消息；")]),t._v(" "),s("li",[t._v("Leader 节点延迟一段时间后，在全部节点在线状态下创建脑裂视图 (SplitView)；")]),t._v(" "),s("li",[t._v("Leader 节点在多数派 (majority) 分区选择集群自愈的 Coordinator 节点；")]),t._v(" "),s("li",[t._v("Coordinator 节点重启少数派 (minority) 分区节点恢复集群。")])]),t._v(" "),s("h2",{attrs:{id:"集群节点自动清除"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#集群节点自动清除"}},[t._v("#")]),t._v(" 集群节点自动清除")]),t._v(" "),s("p",[s("em",[t._v("EMQ X")]),t._v(" 支持从集群自动删除宕机节点 (Autoclean)，可在 "),s("code",[t._v("etc/emqx.conf")]),t._v(" 中配置:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("cluster.autoclean "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" 5m\n")])])]),s("h2",{attrs:{id:"防火墙设置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#防火墙设置"}},[t._v("#")]),t._v(" 防火墙设置")]),t._v(" "),s("p",[t._v("若预先设置了环境变量 WITH_EPMD=1, 启动 emqx 时会使用启动 epmd (监听端口 4369) 做节点发现。称为 "),s("code",[t._v("epmd 模式")]),t._v("。\n若环境变量 WITH_EPMD 没有设置，则启动 emqx 时不启用 epmd，而使用 emqx ekka 的节点发现，这也是 4.0 之后的默认节点发现方式。称为 "),s("code",[t._v("ekka 模式")]),t._v("。")]),t._v(" "),s("p",[s("strong",[t._v("epmd 模式：")]),t._v("\n如果集群节点间存在防火墙，防火墙需要开启 TCP 4369 端口和一个 TCP 端口段。4369 由 epmd 端口映射服务使用，TCP\n端口段用于节点间建立连接与通信。")]),t._v(" "),s("p",[t._v("防火墙设置后，需要在 "),s("code",[t._v("emqx/etc/emqx.conf")]),t._v(" 中配置相同的端口段:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## Distributed node port range")]),t._v("\nnode.dist_listen_min "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("6369")]),t._v("\nnode.dist_listen_max "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("7369")]),t._v("\n")])])]),s("p",[s("strong",[t._v("ekka 模式（4.0 版本之后的默认模式）：")])]),t._v(" "),s("p",[t._v("如果集群节点间存在防火墙，默认情况下，只需要开启 TCP 4370 端口。")]),t._v(" "),s("p",[t._v("但如果 node.name 配置制定的节点名字里，带有数字后缀(Offset)，则需要开启 4370 + Offset 端口。")]),t._v(" "),s("p",[t._v("比如：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("node.name = emqx-1@192.168.0.12\n")])])]),s("p",[t._v("则需要开启 4371 端口。")])])}),[],!1,null,null,null);a.default=r.exports}}]);