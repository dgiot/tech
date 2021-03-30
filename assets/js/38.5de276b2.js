(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{497:function(t,a,s){"use strict";s.r(a);var e=s(42),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"发布订阅-acl"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#发布订阅-acl"}},[t._v("#")]),t._v(" 发布订阅 ACL")]),t._v(" "),s("p",[s("strong",[t._v("发布订阅 ACL")]),t._v(" 指对 "),s("strong",[t._v("发布 (PUBLISH)/订阅 (SUBSCRIBE)")]),t._v(" 操作的 "),s("strong",[t._v("权限控制")]),t._v("。例如拒绝用户名为 "),s("code",[t._v("Anna")]),t._v(" 向 "),s("code",[t._v("open/elsa/door")]),t._v(" 发布消息。")]),t._v(" "),s("p",[t._v("EMQ X 支持通过客户端发布订阅 ACL 进行客户端权限的管理，本章节介绍了 EMQ X 支持的发布订阅 ACL 以及对应插件的配置方法。")]),t._v(" "),s("h2",{attrs:{id:"acl-插件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#acl-插件"}},[t._v("#")]),t._v(" ACL 插件")]),t._v(" "),s("p",[t._v("EMQ X 支持使用配置文件、外部主流数据库和自定义 HTTP API 作为 ACL 数据源。")]),t._v(" "),s("p",[t._v("连接数据源、进行访问控制功能是通过插件实现的，使用前需要启用相应的插件。")]),t._v(" "),s("p",[t._v("客户端订阅主题、发布消息时插件通过检查目标主题（Topic）是否在指定数据源允许/禁止列表内来实现对客户端的发布、订阅权限管理。")]),t._v(" "),s("p",[s("strong",[t._v("配置文件/内置数据源")])]),t._v(" "),s("p",[t._v("{% emqxee %}")]),t._v(" "),s("ul",[s("li",[s("RouterLink",{attrs:{to:"/zh/backend/emqx/modules/mnesia_authentication.html"}},[t._v("内置数据库 认证/访问控制")])],1)]),t._v(" "),s("p",[t._v("{% endemqxee %}")]),t._v(" "),s("p",[t._v("{% emqxce %}")]),t._v(" "),s("ul",[s("li",[s("RouterLink",{attrs:{to:"/zh/backend/emqx/advanced/acl-file.html"}},[t._v("内置 ACL")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/zh/backend/emqx/advanced/acl-mnesia.html"}},[t._v("Mnesia ACL")])],1)]),t._v(" "),s("p",[t._v("{% endemqxce %}")]),t._v(" "),s("p",[t._v("使用配置文件提供认证数据源，适用于变动较小的 ACL 管理。")]),t._v(" "),s("p",[s("strong",[t._v("外部数据库")])]),t._v(" "),s("p",[t._v("{% emqxee %}")]),t._v(" "),s("ul",[s("li",[s("RouterLink",{attrs:{to:"/zh/backend/emqx/modules/mysql_authentication.html"}},[t._v("MySQL 认证/访问控制")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/zh/backend/emqx/modules/pgsql_authentication.html"}},[t._v("PostgreSQL 认证/访问控制")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/zh/backend/emqx/modules/redis_authentication.html"}},[t._v("Redis 认证/访问控制")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/zh/backend/emqx/modules/mongo_authentication.html"}},[t._v("MongoDB 认证/访问控制")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/zh/backend/emqx/modules/ldap_authentication.html"}},[t._v("LDAP 认证/访问控制")])],1)]),t._v(" "),s("p",[t._v("{% endemqxee %}")]),t._v(" "),s("p",[t._v("{% emqxce %}")]),t._v(" "),s("ul",[s("li",[s("RouterLink",{attrs:{to:"/zh/backend/emqx/advanced/acl-mysql.html"}},[t._v("MySQL ACL")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/zh/backend/emqx/advanced/acl-postgres.html"}},[t._v("PostgreSQL ACL")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/zh/backend/emqx/advanced/acl-redis.html"}},[t._v("Redis ACL")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/zh/backend/emqx/advanced/acl-mongodb.html"}},[t._v("MongoDB ACL")])],1)]),t._v(" "),s("p",[t._v("{% endemqxce %}")]),t._v(" "),s("p",[t._v("外部数据库可以存储大量数据、动态管理 ACL，方便与外部设备管理系统集成。")]),t._v(" "),s("p",[s("strong",[t._v("其他")])]),t._v(" "),s("p",[t._v("{% emqxee %}")]),t._v(" "),s("ul",[s("li",[s("RouterLink",{attrs:{to:"/zh/backend/emqx/modules/http_authentication.html"}},[t._v("HTTP 认证/访问控制")])],1)]),t._v(" "),s("p",[t._v("{% endemqxee %}")]),t._v(" "),s("p",[t._v("{% emqxce %}")]),t._v(" "),s("ul",[s("li",[s("RouterLink",{attrs:{to:"/zh/backend/emqx/advanced/acl-http.html"}},[t._v("HTTP ACL")])],1)]),t._v(" "),s("p",[t._v("{% endemqxce %}")]),t._v(" "),s("p",[t._v("HTTP ACL 能够实现复杂的 ACL 管理。")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),s("p",[t._v("ACL 功能包含在认证鉴权插件中，更改插件配置后需要"),s("strong",[t._v("重启插件")]),t._v("才能生效，")])]),t._v(" "),s("h2",{attrs:{id:"规则详解"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#规则详解"}},[t._v("#")]),t._v(" 规则详解")]),t._v(" "),s("p",[t._v("ACL 是允许与拒绝条件的集合，EMQ X 中使用以下元素描述 ACL 规则：")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## Allow-Deny Who Pub-Sub Topic")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"允许(Allow) / 拒绝(Deny)"')]),t._v("  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"谁(Who)"')]),t._v("  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"订阅(Subscribe) / 发布(Publish)"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"主题列表(Topics)"')]),t._v("\n")])])]),s("p",[t._v("同时具有多条 ACL 规则时，EMQ X 将按照规则排序进行合并，以 "),s("RouterLink",{attrs:{to:"/zh/backend/emqx/advanced/acl-file.html"}},[t._v("ACL 文件")]),t._v(" 中的默认 ACL 为例，ACL 文件中配置了默认的 ACL 规则，规则从下至上加载：")],1),t._v(" "),s("ol",[s("li",[t._v("第一条规则允许客户端发布订阅所有主题")]),t._v(" "),s("li",[t._v("第二条规则禁止全部客户端订阅 "),s("code",[t._v("$SYS/#")]),t._v(" 与 "),s("code",[t._v("#")]),t._v(" 主题")]),t._v(" "),s("li",[t._v("第三条规则允许 ip 地址为 "),s("code",[t._v("127.0.0.1")]),t._v(" 的客户端发布/订阅 "),s("code",[t._v("$SYS/#")]),t._v(" 与 "),s("code",[t._v("#")]),t._v(" 主题，为第二条开了特例")]),t._v(" "),s("li",[t._v("第四条规则允许用户名为 "),s("code",[t._v("dashboard")]),t._v(" 的客户端订阅 "),s("code",[t._v("$SYS/#")]),t._v(" 主题，为第二条开了特例")])]),t._v(" "),s("div",{staticClass:"language-erlang extra-class"},[s("pre",{pre:!0,attrs:{class:"language-erlang"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token atom"}},[t._v("allow")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token atom"}},[t._v("user")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"dashboard"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token atom"}},[t._v("subscribe")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"$SYS/#"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token atom"}},[t._v("allow")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token atom"}},[t._v("ipaddr")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"127.0.0.1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token atom"}},[t._v("pubsub")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"$SYS/#"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"#"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token atom"}},[t._v("deny")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token atom"}},[t._v("all")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token atom"}},[t._v("subscribe")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"$SYS/#"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token atom"}},[t._v("eq")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"#"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token atom"}},[t._v("allow")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token atom"}},[t._v("all")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n")])])]),s("h2",{attrs:{id:"授权结果"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#授权结果"}},[t._v("#")]),t._v(" 授权结果")]),t._v(" "),s("p",[t._v("任何一次 ACL 授权最终都会返回一个结果：")]),t._v(" "),s("ul",[s("li",[t._v("允许：经过检查允许客户端进行操作")]),t._v(" "),s("li",[t._v("禁止：经过检查禁止客户端操作")]),t._v(" "),s("li",[t._v("忽略（ignore）：未查找到 ACL 权限信息，无法显式判断结果是允许还是禁止，交由下一 ACL 插件或默认 ACL 规则来判断")])]),t._v(" "),s("h2",{attrs:{id:"全局配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#全局配置"}},[t._v("#")]),t._v(" 全局配置")]),t._v(" "),s("p",[t._v("默认配置中 ACL 是开放授权的，即授权结果为"),s("strong",[t._v("忽略（ignore）"),s("strong",[t._v("时")]),t._v("允许")]),t._v("客户端通过授权。")]),t._v(" "),s("p",[t._v("通过 "),s("code",[t._v("etc/emqx.conf")]),t._v(" 中的 ACL 配置可以更改该属性：")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# etc/emqx.conf")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## ACL 未匹配时默认授权")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## Value: allow | deny")]),t._v("\nacl_nomatch "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" allow\n")])])]),s("p",[t._v("配置默认 "),s("RouterLink",{attrs:{to:"/zh/backend/emqx/advanced/acl-file.html"}},[t._v("ACL 文件")]),t._v("，使用文件定义默认 ACL 规则：")],1),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# etc/emqx.conf")]),t._v("\n\nacl_file "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" etc/acl.conf\n")])])]),s("p",[t._v("配置 ACL 授权结果为"),s("strong",[t._v("禁止")]),t._v("的响应动作，为 "),s("code",[t._v("disconnect")]),t._v(" 时将断开设备：")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# etc/emqx.conf")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## Value: ignore | disconnect")]),t._v("\nacl_deny_action "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ignore\n")])])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),s("p",[t._v("在 MQTT v3.1 和 v3.1.1 协议中，发布操作被拒绝后服务器无任何报文错误返回，这是协议设计的一个缺陷。但在 MQTT v5.0 协议上已经支持应答一个相应的错误报文。")])]),t._v(" "),s("h2",{attrs:{id:"超级用户-superuser"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#超级用户-superuser"}},[t._v("#")]),t._v(" 超级用户（superuser）")]),t._v(" "),s("p",[t._v("客户端可拥有“超级用户”身份，超级用户拥有最高权限不受 ACL 限制。")]),t._v(" "),s("ol",[s("li",[t._v("认证鉴权插件启用超级用户功能后，发布订阅时 EMQ X 将优先检查客户端超级用户身份")]),t._v(" "),s("li",[t._v("客户端为超级用户时，通过授权并跳过后续 ACL 检查")])]),t._v(" "),s("h2",{attrs:{id:"acl-缓存"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#acl-缓存"}},[t._v("#")]),t._v(" ACL 缓存")]),t._v(" "),s("p",[t._v("ACL 缓存允许客户端在命中某条 ACL 规则后，便将其缓存至内存中，以便下次直接使用，客户端发布、订阅频率较高的情况下开启 ACL 缓存可以提高 ACL 检查性能。")]),t._v(" "),s("p",[t._v("在 "),s("code",[t._v("etc/emqx.conf")]),t._v(" 可以配置 ACL 缓存大小与缓存时间：")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# etc/emqx.conf")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## 是否启用")]),t._v("\nenable_acl_cache "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" on\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## 单个客户端最大缓存规则数量")]),t._v("\nacl_cache_max_size "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("32")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## 缓存失效时间，超时后缓存将被清除")]),t._v("\nacl_cache_ttl "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" 1m\n")])])]),s("h3",{attrs:{id:"清除缓存"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#清除缓存"}},[t._v("#")]),t._v(" 清除缓存")]),t._v(" "),s("p",[t._v("在更新 ACL 规则后，某些客户端由于已经存在缓存，则无法立即生效。若要立即生效，则需手动清除所有的 ACL 缓存：")]),t._v(" "),s("p",[t._v("参见 "),s("RouterLink",{attrs:{to:"/zh/backend/emqx/advanced/http-api.html#endpoint-get-acl-cache"}},[t._v("HTTP API - 清除 ACL 缓存")])],1),t._v(" "),s("h2",{attrs:{id:"acl-鉴权链"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#acl-鉴权链"}},[t._v("#")]),t._v(" ACL 鉴权链")]),t._v(" "),s("p",[t._v("当同时启用多个 ACL 插件时，EMQ X 将按照插件开启先后顺序进行链式鉴权：")]),t._v(" "),s("ul",[s("li",[t._v("一通过授权，终止链并允许客户端通过验证")]),t._v(" "),s("li",[t._v("一旦授权失败，终止链并禁止客户端通过验证")]),t._v(" "),s("li",[t._v("直到最后一个 ACL 插件仍未通过，根据"),s("strong",[t._v("默认授权")]),t._v("配置判定\n"),s("ul",[s("li",[t._v("默认授权为允许时，允许客户端通过验证")]),t._v(" "),s("li",[t._v("默认授权为禁止时，禁止客户端通过验证")])])])]),t._v(" "),s("p",[s("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/develop_png/zh_CN/advanced/assets/guide_3.png",alt:"guide_3.png"}})]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),s("p",[t._v("同时只启用一个 ACL 插件可以提高客户端 ACL 检查性能。")])])])}),[],!1,null,null,null);a.default=n.exports}}]);