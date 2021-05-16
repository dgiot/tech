(window.webpackJsonp=window.webpackJsonp||[]).push([[299],{589:function(_,v,e){"use strict";e.r(v);var t=e(9),o=Object(t.a)({},(function(){var _=this,v=_.$createElement,e=_._self._c||v;return e("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[e("h1",{attrs:{id:"常见问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常见问题"}},[_._v("#")]),_._v(" 常见问题")]),_._v(" "),e("ul",[e("li",[_._v("问：如何解决某个时间段内取最值？")])]),_._v(" "),e("p",[_._v("答：取一个时间段内的最值时，需要用到"),e("code",[_._v("max(min)_over_time")]),_._v("语句。例如，想要知道一段时间内的"),e("code",[_._v("mqtt")]),_._v("上线数最大值时，"),e("code",[_._v("metrics")]),_._v("如下：")]),_._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[_._v(" max_over_time(mqtt_online{instance=~'$node'}[5h:])  \n")])])]),e("p",[_._v("其中，"),e("code",[_._v("[5h:]")]),_._v("表示往前推5个小时，将其放在"),e("code",[_._v("max_over_time()")]),_._v("的括号里面。")]),_._v(" "),e("ul",[e("li",[_._v("问：添加新的"),e("code",[_._v("exporter")]),_._v("时，需要重新配置"),e("code",[_._v("panel")]),_._v("吗？")])]),_._v(" "),e("p",[_._v("答：需要的。与添加上一个"),e("code",[_._v("exporter")]),_._v("的操作一模一样。")]),_._v(" "),e("ul",[e("li",[_._v("问：报告模板里面的占位符与"),e("code",[_._v("grafana")]),_._v("有什么关系？")])]),_._v(" "),e("p",[_._v("答：首先，我们需要知道报告模板的占位符有哪些书写格式。不同格式占位符都替换哪些文件样式。")]),_._v(" "),e("table",[e("thead",[e("tr",[e("th",[_._v("书写格式")]),_._v(" "),e("th",[_._v("替换样式")])])]),_._v(" "),e("tbody",[e("tr",[e("td",[e("code",[_._v('"{ {"+"job_legend"+"} }"')])]),_._v(" "),e("td",[_._v("文本")])]),_._v(" "),e("tr",[e("td",[e("code",[_._v('"{ {"+"@"+"job_panel_title"+"} }"')])]),_._v(" "),e("td",[_._v("图片")])])])]),_._v(" "),e("p",[_._v("如上表，占位符"),e("code",[_._v("{ { job_legend } }")]),_._v("将"),e("code",[_._v("job")]),_._v("下的"),e("code",[_._v("legend")]),_._v("的值替换报告模板的文本位置。占位符"),e("code",[_._v("{ { job_panel_title } }")]),_._v("将"),e("code",[_._v("job")]),_._v("下的"),e("code",[_._v("panel")]),_._v("图替换报告模板的图片位置。")]),_._v(" "),e("ul",[e("li",[_._v("问：当修改了一个"),e("code",[_._v("job")]),_._v("的某些配置，比如"),e("code",[_._v("metrices")]),_._v("与"),e("code",[_._v("legend")]),_._v("，是否还需要修改其他"),e("code",[_._v("job")]),_._v("的相应配置？")])]),_._v(" "),e("p",[_._v("答：不需要。不同"),e("code",[_._v("job")]),_._v("的配置是同步的，修改了某个"),e("code",[_._v("job")]),_._v("的某些配置，其他"),e("code",[_._v("job")]),_._v("相应配置也会自动改变。")])])}),[],!1,null,null,null);v.default=o.exports}}]);