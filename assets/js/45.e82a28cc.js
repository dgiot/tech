(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{508:function(s,t,a){"use strict";a.r(t);var n=a(42),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"mongodb-认证"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mongodb-认证"}},[s._v("#")]),s._v(" MongoDB 认证")]),s._v(" "),a("p",[s._v("MongoDB 认证使用外部 MongoDB 数据库作为认证数据源，可以存储大量数据，同时方便与外部设备管理系统集成。")]),s._v(" "),a("p",[s._v("插件：")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("emqx_auth_mongo\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),a("p",[s._v("emqx_auth_mongo 插件同时包含 ACL 功能，可通过注释禁用。")])]),s._v(" "),a("p",[s._v("要启用 MongoDB 认证，需要在 "),a("code",[s._v("etc/plugins/emqx_auth_mongo.conf")]),s._v(" 中配置以下内容：")]),s._v(" "),a("h2",{attrs:{id:"mongodb-连接信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mongodb-连接信息"}},[s._v("#")]),s._v(" MongoDB 连接信息")]),s._v(" "),a("p",[s._v("MongoDB 基础连接信息，需要保证集群内所有节点均能访问。")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# etc/plugins/emqx_auth_mongo.conf")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## MongoDB 架构类型")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("##")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## Value: single | unknown | sharded | rs")]),s._v("\nauth.mongo.type "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" single\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## rs 模式需要设置 rs name")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## auth.mongo.rs_set_name =")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 服务器列表，集群模式下使用逗号分隔每个服务器")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## Examples: 127.0.0.1:27017,127.0.0.2:27017...")]),s._v("\nauth.mongo.server "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:27017\n\nauth.mongo.pool "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v("\n\nauth.mongo.login "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("\n\nauth.mongo.password "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## auth.mongo.auth_source = admin")]),s._v("\n\nauth.mongo.database "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" mqtt\n\nauth.mongo.query_timeout "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" 5s\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## SSL 选项")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# auth.mongo.ssl = false")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## auth.mongo.ssl_opts.keyfile =")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## auth.mongo.ssl_opts.certfile =")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## auth.mongo.ssl_opts.cacertfile =")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## MongoDB write mode.")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("##")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## Value: unsafe | safe")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## auth.mongo.w_mode =")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## Mongo read mode.")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("##")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## Value: master | slave_ok")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## auth.mongo.r_mode =")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## MongoDB 拓扑配置，一般情况下用不到，详见 MongoDB 官网文档")]),s._v("\nauth.mongo.topology.pool_size "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\nauth.mongo.topology.max_overflow "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## auth.mongo.topology.overflow_ttl = 1000")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## auth.mongo.topology.overflow_check_period = 1000")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## auth.mongo.topology.local_threshold_ms = 1000")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## auth.mongo.topology.connect_timeout_ms = 20000")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## auth.mongo.topology.socket_timeout_ms = 100")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## auth.mongo.topology.server_selection_timeout_ms = 30000")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## auth.mongo.topology.wait_queue_timeout_ms = 1000")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## auth.mongo.topology.heartbeat_frequency_ms = 10000")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## auth.mongo.topology.min_heartbeat_frequency_ms = 1000")]),s._v("\n\n")])])]),a("h2",{attrs:{id:"默认数据结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#默认数据结构"}},[s._v("#")]),s._v(" 默认数据结构")]),s._v(" "),a("p",[s._v("MongoDB 认证默认配置下需要确保数据库中有如下集合：")]),s._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  username"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"user"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  password"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"password hash"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  salt"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"password salt"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  is_superuser"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  created"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2020-02-20 12:12:14"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("p",[s._v("默认配置下示例数据如下：")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("use mqtt\n\ndb.mqtt_user.insert"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"username"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"emqx"')]),s._v(",\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"password"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"efa1f375d76194fa51a3556a97e641e61685f914d446979da50a551a4333ffd7"')]),s._v(",\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"is_superuser"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" false,\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"salt"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),a("p",[s._v("启用 MongoDB 认证后，你可以通过用户名： emqx，密码：public 连接。")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),a("p",[s._v("这是默认配置使用的集合结构，熟悉该插件的使用后你可以使用任何满足条件的集合进行认证。")])]),s._v(" "),a("h2",{attrs:{id:"加盐规则与哈希方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#加盐规则与哈希方法"}},[s._v("#")]),s._v(" 加盐规则与哈希方法")]),s._v(" "),a("p",[s._v("MongoDB 认证支持配置"),a("RouterLink",{attrs:{to:"/zh/backend/emqx/advanced/auth.html#加盐规则与哈希方法"}},[s._v("加盐规则与哈希方法")]),s._v("：")],1),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# etc/plugins/emqx_auth_mongo.conf")]),s._v("\n\nauth.mongo.password_hash "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" sha256\n")])])]),a("h2",{attrs:{id:"认证查询-auth-selector"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#认证查询-auth-selector"}},[s._v("#")]),s._v(" 认证查询（auth_selector）")]),s._v(" "),a("p",[s._v("进行身份认证时，EMQ X 将使用当前客户端信息填充并执行用户配置的认证 SQL，查询出该客户端在数据库中的认证数据。")]),s._v(" "),a("p",[s._v("MongoDB 支持配置集合名称、密码字段、selector 命令")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# etc/plugins/emqx_auth_mongo.conf")]),s._v("\n\nauth.mongo.auth_query.collection "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" mqtt_user\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 如果启用了加盐处理，此处需配置为 password,salt")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## Value:  password | password,salt")]),s._v("\nauth.mongo.auth_query.password_field "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" password\n\nauth.mongo.auth_query.selector "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("username")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("%u\n")])])]),a("p",[s._v("你可以在认证查询（selector）中使用以下占位符，执行时 EMQ X 将自动填充为客户端信息：")]),s._v(" "),a("ul",[a("li",[s._v("%u：用户名")]),s._v(" "),a("li",[s._v("%c：Client ID")]),s._v(" "),a("li",[s._v("%C：TLS 证书公用名（证书的域名或子域名），仅当 TLS 连接时有效")]),s._v(" "),a("li",[s._v("%d：TLS 证书 subject，仅当 TLS 连接时有效")])]),s._v(" "),a("p",[s._v("你可以根据业务需要调整认证查询，如添加多个查询条件、使用数据库预处理函数，以实现更多业务相关的功能。但是任何情况下认证查询需要满足以下条件：")]),s._v(" "),a("ol",[a("li",[s._v("查询结果中必须包含 password 字段，EMQ X 使用该字段与客户端密码比对")]),s._v(" "),a("li",[s._v("如果启用了加盐配置，查询结果中必须包含 salt 字段，EMQ X 使用该字段作为 salt（盐）值")]),s._v(" "),a("li",[s._v("MongoDB 使用 findOne 查询命令，确保你期望的查询结果能够出现在第一条数据中")])])])}),[],!1,null,null,null);t.default=e.exports}}]);