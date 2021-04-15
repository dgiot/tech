(window.webpackJsonp=window.webpackJsonp||[]).push([[139],{845:function(t,s,a){"use strict";a.r(s);var n=a(8),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"ldap-认证-访问控制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ldap-认证-访问控制"}},[t._v("#")]),t._v(" LDAP 认证/访问控制")]),t._v(" "),a("p",[t._v("LDAP 认证/访问控制使用外部 OpenLDAP 服务器作为认证数据源，可以存储大量数据，同时方便与外部设备管理系统集成。")]),t._v(" "),a("h2",{attrs:{id:"创建模块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建模块"}},[t._v("#")]),t._v(" 创建模块")]),t._v(" "),a("p",[t._v("打开 "),a("a",{attrs:{href:"http://127.0.0.1:18083/#/modules",target:"_blank",rel:"noopener noreferrer"}},[t._v("EMQ X Dashboard"),a("OutboundLink")],1),t._v("，点击左侧的 “模块” 选项卡，选择添加：")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/backend/emqx/modules/assets/modules.png",alt:"modules.png"}})]),t._v(" "),a("p",[t._v("选择 LDAP 认证/访问控制模块")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/backend/emqx/modules/assets/auth_ldap1.png",alt:"auth_ldap1.png"}})]),t._v(" "),a("p",[t._v("配置OpenLDAP相关参数")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/backend/emqx/modules/assets/auth_ldap2.png",alt:"auth_ldap2.png"}})]),t._v(" "),a("p",[t._v("最后点击“添加”按钮，模块即可添加成功：")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/backend/emqx/modules/assets/auth_ldap3.png",alt:"auth_ldap3.png"}})]),t._v(" "),a("h2",{attrs:{id:"ldap-schema"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ldap-schema"}},[t._v("#")]),t._v(" LDAP Schema")]),t._v(" "),a("p",[t._v("需要在 LDAP schema 目录配置数据模型，默认配置下数据模型如下：")]),t._v(" "),a("p",[a("strong",[t._v("/etc/openldap/schema/emqx.schema")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("attributetype "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.3")]),t._v(".6.1.4.1.11.2.53.2.2.3.1.2.3.1.3 NAME "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'isEnabled'")]),t._v("\nEQUALITY booleanMatch\nSYNTAX "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.3")]),t._v(".6.1.4.1.1466.115.121.1.7\nSINGLE-VALUE\nUSAGE userApplications "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nattributetype "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.3")]),t._v(".6.1.4.1.11.2.53.2.2.3.1.2.3.4.1 NAME "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'mqttPublishTopic'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'mpt'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nEQUALITY caseIgnoreMatch\nSUBSTR caseIgnoreSubstringsMatch\nSYNTAX "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.3")]),t._v(".6.1.4.1.1466.115.121.1.15\nUSAGE userApplications "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nattributetype "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.3")]),t._v(".6.1.4.1.11.2.53.2.2.3.1.2.3.4.2 NAME "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'mqttSubscriptionTopic'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'mst'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nEQUALITY caseIgnoreMatch\nSUBSTR caseIgnoreSubstringsMatch\nSYNTAX "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.3")]),t._v(".6.1.4.1.1466.115.121.1.15\nUSAGE userApplications "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nattributetype "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.3")]),t._v(".6.1.4.1.11.2.53.2.2.3.1.2.3.4.3 NAME "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'mqttPubSubTopic'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'mpst'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nEQUALITY caseIgnoreMatch\nSUBSTR caseIgnoreSubstringsMatch\nSYNTAX "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.3")]),t._v(".6.1.4.1.1466.115.121.1.15\nUSAGE userApplications "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nobjectclass "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.3")]),t._v(".6.1.4.1.11.2.53.2.2.3.1.2.3.4 NAME "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'mqttUser'")]),t._v("\nAUXILIARY\nMAY "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" mqttPublishTopic $ mqttSubscriptionTopic $ mqttPubSubTopic"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nobjectclass "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.3")]),t._v(".6.1.4.1.11.2.53.2.2.3.1.2.3.2 NAME "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'mqttDevice'")]),t._v("\nSUP "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("top")]),t._v("\nSTRUCTURAL\nMUST "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" uid "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nMAY "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" isEnabled "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nobjectclass "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.3")]),t._v(".6.1.4.1.11.2.53.2.2.3.1.2.3.3 NAME "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'mqttSecurity'")]),t._v("\nSUP "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("top")]),t._v("\nAUXILIARY\nMAY "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" userPassword $ userPKCS12 $ pwdAttribute $ pwdLockout "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("编辑 ldap 的配置文件 slapd.conf 引用 Schema：")]),t._v(" "),a("p",[a("strong",[t._v("/etc/openldap/slapd.conf")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("include  /etc/openldap/schema/core.schema\ninclude  /etc/openldap/schema/cosine.schema\ninclude  /etc/openldap/schema/inetorgperson.schema\ninclude  /etc/openldap/schema/ppolicy.schema\ninclude  /etc/openldap/schema/emqx.schema\n\ndatabase bdb\nsuffix "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"dc=emqx,dc=io"')]),t._v("\nrootdn "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"cn=root,dc=emqx,dc=io"')]),t._v("\nrootpw "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("SSHA"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("eoF7NhNrejVYYyGHqnt+MdKNBh4r1w3W\n\ndirectory       /etc/openldap/data\n")])])]),a("p",[t._v("默认配置下示例数据如下：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("## create emqx.io\n\ndn:dc=emqx,dc=io\nobjectclass: top\nobjectclass: dcobject\nobjectclass: organization\ndc:emqx\no:emqx,Inc.\n\n# create testdevice.emqx.io\ndn:ou=testdevice,dc=emqx,dc=io\nobjectClass: top\nobjectclass:organizationalUnit\nou:testdevice\n\ndn:uid=mqttuser0001,ou=testdevice,dc=emqx,dc=io\nobjectClass: top\nobjectClass: mqttUser\nobjectClass: mqttDevice\nobjectClass: mqttSecurity\nuid: mqttuser0001\nisEnabled: TRUE\nmqttAccountName: user1\nmqttPublishTopic: mqttuser0001/pub/1\nmqttSubscriptionTopic: mqttuser0001/sub/1\nmqttPubSubTopic: mqttuser0001/pubsub/1\nuserPassword:: e1NIQX1tbGIzZmF0NDBNS0JUWFVWWndDS21MNzNSLzA9\n")])])]),a("p",[t._v("启用 LDAP 认证后，你可以通过用户名： mqttuser0001，密码：public 连接。")]),t._v(" "),a("h2",{attrs:{id:"ldap-访问控制配置方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ldap-访问控制配置方式"}},[t._v("#")]),t._v(" LDAP 访问控制配置方式")]),t._v(" "),a("p",[a("code",[t._v("mqttPublishTopic")]),t._v(" 允许发布的主题(可以配置多个)")]),t._v(" "),a("p",[a("code",[t._v("mqttSubscriptionTopic")]),t._v(" 允许订阅的主题(可以配置多个)")]),t._v(" "),a("p",[a("code",[t._v("mqttPubSubTopic")]),t._v(" 允许订阅/发布的主题(可以配置多个)")]),t._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[t._v("警告")]),t._v(" "),a("p",[t._v("目前版本仅支持 OpenLDAP，不支持 Microsoft Active Directory。")])])])}),[],!1,null,null,null);s.default=e.exports}}]);