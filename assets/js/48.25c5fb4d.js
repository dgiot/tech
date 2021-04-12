(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{562:function(t,s,a){"use strict";a.r(s);var n=a(8),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"ldap-认证"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ldap-认证"}},[t._v("#")]),t._v(" LDAP 认证")]),t._v(" "),a("p",[t._v("LDAP 认证使用外部 LDAP 服务器作为认证数据源，可以存储大量数据，同时方便与外部设备管理系统集成。")]),t._v(" "),a("p",[t._v("插件：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("emqx_auth_ldap\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[t._v("emqx_auth_ldap 插件同时包含 ACL 功能，可通过注释禁用。\n目前版本仅支持 OpenLDAP，不支持 Microsoft Active Directory。")])]),t._v(" "),a("h2",{attrs:{id:"ldap-配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ldap-配置"}},[t._v("#")]),t._v(" LDAP 配置")]),t._v(" "),a("p",[t._v("要启用 LDAP 认证，需要在 "),a("code",[t._v("etc/plugins/emqx_auth_ldap.conf")]),t._v(" 中配置以下内容：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# etc/plugins/emqx_auth_ldap.conf")]),t._v("\n\nauth.ldap.servers "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),t._v(".0.1\n\nauth.ldap.port "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("389")]),t._v("\n\nauth.ldap.pool "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## ldap 的绑定专有名称(DN)")]),t._v("\nauth.ldap.bind_dn "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("cn")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("root,dc"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("emqx,dc"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("io\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## \tldap 的绑定密码")]),t._v("\nauth.ldap.bind_password "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" public\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## ldap 的查询超时时间")]),t._v("\nauth.ldap.timeout "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" 30s\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## ldap 的设备专有名")]),t._v("\nauth.ldap.device_dn "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("ou")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("device,dc"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("emqx,dc"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("io\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## ldap 的匹配对象类")]),t._v("\nauth.ldap.match_objectclass "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" mqttUser\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## ldap 的用户名属性类型")]),t._v("\nauth.ldap.username.attributetype "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" uid\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## \tldap 的密码属性类型")]),t._v("\nauth.ldap.password.attributetype "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" userPassword\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## TLS 配置项")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## auth.ldap.ssl.certfile = etc/certs/cert.pem")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## auth.ldap.ssl.keyfile = etc/certs/key.pem")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## auth.ldap.ssl.cacertfile = etc/certs/cacert.pem")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## auth.ldap.ssl.verify = verify_peer")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## auth.ldap.ssl.fail_if_no_peer_cert = true")]),t._v("\n")])])]),a("h2",{attrs:{id:"ldap-schema"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ldap-schema"}},[t._v("#")]),t._v(" LDAP Schema")]),t._v(" "),a("p",[t._v("需要在 LDAP schema 目录配置数据模型，默认配置下数据模型如下：")]),t._v(" "),a("p",[a("strong",[t._v("/etc/openldap/schema/emqx.schema")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("attributetype "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.3")]),t._v(".6.1.4.1.11.2.53.2.2.3.1.2.3.1.3 NAME "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'isEnabled'")]),t._v("\nEQUALITY booleanMatch\nSYNTAX "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.3")]),t._v(".6.1.4.1.1466.115.121.1.7\nSINGLE-VALUE\nUSAGE userApplications "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nattributetype "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.3")]),t._v(".6.1.4.1.11.2.53.2.2.3.1.2.3.4.1 NAME "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'mqttPublishTopic'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'mpt'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nEQUALITY caseIgnoreMatch\nSUBSTR caseIgnoreSubstringsMatch\nSYNTAX "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.3")]),t._v(".6.1.4.1.1466.115.121.1.15\nUSAGE userApplications "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nattributetype "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.3")]),t._v(".6.1.4.1.11.2.53.2.2.3.1.2.3.4.2 NAME "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'mqttSubscriptionTopic'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'mst'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nEQUALITY caseIgnoreMatch\nSUBSTR caseIgnoreSubstringsMatch\nSYNTAX "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.3")]),t._v(".6.1.4.1.1466.115.121.1.15\nUSAGE userApplications "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nattributetype "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.3")]),t._v(".6.1.4.1.11.2.53.2.2.3.1.2.3.4.3 NAME "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'mqttPubSubTopic'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'mpst'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nEQUALITY caseIgnoreMatch\nSUBSTR caseIgnoreSubstringsMatch\nSYNTAX "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.3")]),t._v(".6.1.4.1.1466.115.121.1.15\nUSAGE userApplications "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nobjectclass "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.3")]),t._v(".6.1.4.1.11.2.53.2.2.3.1.2.3.4 NAME "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'mqttUser'")]),t._v("\nAUXILIARY\nMAY "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" mqttPublishTopic $ mqttSubscriptionTopic $ mqttPubSubTopic"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nobjectclass "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.3")]),t._v(".6.1.4.1.11.2.53.2.2.3.1.2.3.2 NAME "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'mqttDevice'")]),t._v("\nSUP "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("top")]),t._v("\nSTRUCTURAL\nMUST "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" uid "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nMAY "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" isEnabled "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nobjectclass "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.3")]),t._v(".6.1.4.1.11.2.53.2.2.3.1.2.3.3 NAME "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'mqttSecurity'")]),t._v("\nSUP "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("top")]),t._v("\nAUXILIARY\nMAY "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" userPassword $ userPKCS12 $ pwdAttribute $ pwdLockout "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("编辑 ldap 的配置文件 slapd.conf 引用 Schema：")]),t._v(" "),a("p",[a("strong",[t._v("/etc/openldap/slapd.conf")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("include  /etc/openldap/schema/core.schema\ninclude  /etc/openldap/schema/cosine.schema\ninclude  /etc/openldap/schema/inetorgperson.schema\ninclude  /etc/openldap/schema/ppolicy.schema\ninclude  /etc/openldap/schema/emqx.schema\n\ndatabase bdb\nsuffix "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"dc=emqx,dc=io"')]),t._v("\nrootdn "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"cn=root,dc=emqx,dc=io"')]),t._v("\nrootpw "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("SSHA"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("eoF7NhNrejVYYyGHqnt+MdKNBh4r1w3W\n\ndirectory       /etc/openldap/data\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);