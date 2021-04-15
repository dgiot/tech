(window.webpackJsonp=window.webpackJsonp||[]).push([[130],{858:function(a,e,t){"use strict";t.r(e);var s=t(8),v=Object(s.a)({},(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"延迟发布"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#延迟发布"}},[a._v("#")]),a._v(" 延迟发布")]),a._v(" "),t("h2",{attrs:{id:"创建模块"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建模块"}},[a._v("#")]),a._v(" 创建模块")]),a._v(" "),t("p",[a._v("打开 "),t("a",{attrs:{href:"http://127.0.0.1:18083/#/modules",target:"_blank",rel:"noopener noreferrer"}},[a._v("EMQ X Dashboard"),t("OutboundLink")],1),a._v("，点击左侧的 “模块” 选项卡，选择添加：")]),a._v(" "),t("p",[t("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/backend/emqx/modules/assets/modules.png",alt:"modules.png"}})]),a._v(" "),t("p",[a._v("选择延迟发布模块，无需配置参数，直接开启")]),a._v(" "),t("p",[t("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/backend/emqx/modules/assets/delay_publish.png",alt:"delay_publish.png"}})]),a._v(" "),t("h2",{attrs:{id:"延迟发布简介"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#延迟发布简介"}},[a._v("#")]),a._v(" 延迟发布简介")]),a._v(" "),t("p",[a._v("EMQ X 的延迟发布功能可以实现按照用户配置的时间间隔延迟发布 PUBLISH 报文的功能。当客户端使用特殊主题前缀 "),t("code",[a._v("$delayed/{DelayInteval}")]),a._v(" 发布消息到 EMQ X 时，将触发延迟发布功能。")]),a._v(" "),t("p",[a._v("延迟发布主题的具体格式如下：")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$delayed")]),a._v("/"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("DelayInterval"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("/"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("TopicName"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),t("ul",[t("li",[t("code",[a._v("$delayed")]),a._v(": 使用 "),t("code",[a._v("$delay")]),a._v(" 作为主题前缀的消息都将被视为需要延迟发布的消息。延迟间隔由下一主题层级中的内容决定。")]),a._v(" "),t("li",[t("code",[a._v("{DelayInterval}")]),a._v(": 指定该 MQTT 消息延迟发布的时间间隔，单位是秒，允许的最大间隔是 4294967 秒。如果 "),t("code",[a._v("{DelayInterval}")]),a._v(" 无法被解析为一个整型数字，EMQ X 将丢弃该消息，客户端不会收到任何信息。")]),a._v(" "),t("li",[t("code",[a._v("{TopicName}")]),a._v(": MQTT 消息的主题名称。")])]),a._v(" "),t("p",[a._v("例如:")]),a._v(" "),t("ul",[t("li",[t("code",[a._v("$delayed/15/x/y")]),a._v(": 15 秒后将 MQTT 消息发布到主题 "),t("code",[a._v("x/y")]),a._v("。")]),a._v(" "),t("li",[t("code",[a._v("$delayed/60/a/b")]),a._v(": 1 分钟后将 MQTT 消息发布到 "),t("code",[a._v("a/b")]),a._v("。")]),a._v(" "),t("li",[t("code",[a._v("$delayed/3600/$SYS/topic")]),a._v(": 1 小时后将 MQTT 消息发布到 "),t("code",[a._v("$SYS/topic")]),a._v("。")])])])}),[],!1,null,null,null);e.default=v.exports}}]);