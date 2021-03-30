(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{542:function(a,t,e){"use strict";e.r(t);var s=e(42),o=Object(s.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"主题指标统计"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#主题指标统计"}},[a._v("#")]),a._v(" 主题指标统计")]),a._v(" "),e("p",[a._v("EMQ X Broker 提供了主题指标统计功能，可以统计指定主题下的消息收发数量、速率等指标。您可以通过 Dashboard 的 Topic Metrics 页面查看和使用这一功能，也可以通过 HTTP API 完成相应操作。")]),a._v(" "),e("h2",{attrs:{id:"dashboard"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dashboard"}},[a._v("#")]),a._v(" Dashboard")]),a._v(" "),e("p",[a._v("Topic Metrics 页面位于 Dashboard 的 Analysis 标签下，由于主题指标统计功能以插件形式实现，且默认关闭，因此首次使用时需要点击 Topic Metrics 页面右上角的 "),e("em",[a._v("Enable")]),a._v(" 按钮以开启此功能。")]),a._v(" "),e("p",[e("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/develop_png/zh_CN/advanced/assets/image-20200930095122959.png",alt:"image-20200930095122959.png"}})]),a._v(" "),e("p",[a._v("主题指标统计功能开启后，你可以点击页面右上角的 "),e("em",[a._v("Create")]),a._v(" 按钮来创建新的主题指标统计。以下是已经创建了 "),e("code",[a._v("a/c")]),a._v(" 与 "),e("code",[a._v("a/b")]),a._v(" 主题指标统计之后的页面，你将可以看到这两个主题下消息流入流出、丢弃的总数和当前速率。")]),a._v(" "),e("p",[e("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/develop_png/zh_CN/advanced/assets/image-20200930110511638.png",alt:"image-20200930110511638.png"}})]),a._v(" "),e("blockquote",[e("p",[a._v("出于整体性能考虑，目前主题指标统计功能仅支持主题名，即不支持带有 "),e("code",[a._v("+")]),a._v(" 或 "),e("code",[a._v("#")]),a._v(" 通配符的主题过滤器，例如 "),e("code",[a._v("a/+")]),a._v(" 等。也许将来有一天我们会实现它，如果我们解决了性能问题。")])]),a._v(" "),e("h2",{attrs:{id:"http-api"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#http-api"}},[a._v("#")]),a._v(" HTTP API")]),a._v(" "),e("p",[a._v("我们为您提供了与 Dashboard 操作一致的 HTTP API，以便您与自己的应用进行集成。相关 HTTP API 的具体使用方法，请参见 "),e("RouterLink",{attrs:{to:"/zh/backend/emqx/advanced/http-api.html#endpoint-topic-metrics"}},[a._v("HTTP API - 主题指标统计")]),a._v("。")],1)])}),[],!1,null,null,null);t.default=o.exports}}]);