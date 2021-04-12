(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{577:function(e,a,t){"use strict";t.r(a);var v=t(8),_=Object(v.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"延迟发布"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#延迟发布"}},[e._v("#")]),e._v(" 延迟发布")]),e._v(" "),t("p",[e._v("EMQ X 的延迟发布功能可以实现按照用户配置的时间间隔延迟发布 PUBLISH 报文的功能。当客户端使用特殊主题前缀 "),t("code",[e._v("$delayed/{DelayInteval}")]),e._v(" 发布消息到 EMQ X 时，将触发延迟发布功能。")]),e._v(" "),t("p",[e._v("延迟发布主题的具体格式如下：")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$delayed")]),e._v("/"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("DelayInterval"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("/"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("TopicName"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),t("ul",[t("li",[t("code",[e._v("$delayed")]),e._v(": 使用 "),t("code",[e._v("$delay")]),e._v(" 作为主题前缀的消息都将被视为需要延迟发布的消息。延迟间隔由下一主题层级中的内容决定。")]),e._v(" "),t("li",[t("code",[e._v("{DelayInterval}")]),e._v(": 指定该 MQTT 消息延迟发布的时间间隔，单位是秒，允许的最大间隔是 4294967 秒。如果 "),t("code",[e._v("{DelayInterval}")]),e._v(" 无法被解析为一个整型数字，EMQ X 将丢弃该消息，客户端不会收到任何信息。")]),e._v(" "),t("li",[t("code",[e._v("{TopicName}")]),e._v(": MQTT 消息的主题名称。")])]),e._v(" "),t("p",[e._v("例如:")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("$delayed/15/x/y")]),e._v(": 15 秒后将 MQTT 消息发布到主题 "),t("code",[e._v("x/y")]),e._v("。")]),e._v(" "),t("li",[t("code",[e._v("$delayed/60/a/b")]),e._v(": 1 分钟后将 MQTT 消息发布到 "),t("code",[e._v("a/b")]),e._v("。")]),e._v(" "),t("li",[t("code",[e._v("$delayed/3600/$SYS/topic")]),e._v(": 1 小时后将 MQTT 消息发布到 "),t("code",[e._v("$SYS/topic")]),e._v("。")])]),e._v(" "),t("p",[e._v("延迟发布功能由 "),t("code",[e._v("emqx_mod_delayed")]),e._v(" 内置模块提供，此功能默认开启，支持动态启停，请参见 "),t("RouterLink",{attrs:{to:"/zh/backend/emqx/advanced/internal-modules.html"}},[e._v("内置模块")]),e._v("。")],1)])}),[],!1,null,null,null);a.default=_.exports}}]);