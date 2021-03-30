(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{568:function(t,s,a){"use strict";a.r(s);var n=a(42),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"mqtt-python-客户端库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mqtt-python-客户端库"}},[t._v("#")]),t._v(" MQTT Python 客户端库")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/eclipse/paho.mqtt.python",target:"_blank",rel:"noopener noreferrer"}},[t._v("Eclipse Paho Python"),a("OutboundLink")],1),t._v(" 为 Eclipse Paho 项目下的 Python 语言版客户端库，该库能够连接到 MQTT Broker 以发布消息，订阅主题并接收已发布的消息。")]),t._v(" "),a("p",[t._v("使用 PyPi 包管理工具安装：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("pip "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" paho-mqtt\n")])])]),a("h2",{attrs:{id:"paho-python-使用示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#paho-python-使用示例"}},[t._v("#")]),t._v(" Paho Python 使用示例")]),t._v(" "),a("p",[t._v("本示例包含 Python 语言的 Paho Python 连接 EMQ X Broker，并进行消息收发完整代码：")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" paho"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("mqtt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("client "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" mqtt\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 连接成功回调")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("on_connect")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("client"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" userdata"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" flags"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" rc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Connected with result code '")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("str")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    client"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("subscribe"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'testtopic/#'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 消息接收回调")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("on_message")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("client"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" userdata"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" msg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("msg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("topic"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('" "')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("str")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("msg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("payload"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nclient "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" mqtt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Client"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 指定回调函数")]),t._v("\nclient"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("on_connect "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" on_connect\nclient"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("on_message "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" on_message\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 建立连接")]),t._v("\nclient"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("connect"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'broker.emqx.io'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1883")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("60")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 发布消息")]),t._v("\nclient"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("publish"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'emqtt'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("payload"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Hello World'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("qos"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nclient"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("loop_forever"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h2",{attrs:{id:"paho-python-mqtt-5-0-支持"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#paho-python-mqtt-5-0-支持"}},[t._v("#")]),t._v(" Paho Python MQTT 5.0 支持")]),t._v(" "),a("p",[t._v("目前 Paho Python 还在适配 MQTT 5.0，尚未全面支持。")])])}),[],!1,null,null,null);s.default=e.exports}}]);