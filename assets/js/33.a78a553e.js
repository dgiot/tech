(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{864:function(e,a,t){"use strict";t.r(a);var s=t(8),r=Object(s.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"ets同步"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ets同步"}},[e._v("#")]),e._v(" ets同步")]),e._v(" "),t("h2",{attrs:{id:"shuwa-livequery"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#shuwa-livequery"}},[e._v("#")]),e._v(" shuwa_livequery")]),e._v(" "),t("p",[e._v("parse库修改同步到ets缓存 "),t("br"),e._v("\t\nparse开启livequery"),t("br"),e._v("\t\n编辑\nvim /data/shuwa_parse_server/script/config.json "),t("br"),e._v("\t\n修改 "),t("strong",[e._v("app")]),e._v(" 下 "),t("strong",[e._v("liveQuery")]),e._v(" 添加需要同步的表 "),t("br"),e._v(" "),t("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/blog/parse/livequery_config.png",alt:""}})]),e._v(" "),t("p",[e._v("登录获取SessionToken")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('shuwa_parse_handler:login_by_account(UserName, Password).\n{ok,#{<<"sessionToken">> => <<"r:af99fafcfebbcfe04770e74ca2646b11">>}}\n')])])]),t("p",[e._v("shuwa_livequery订阅Device表")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v(' shuwa_livequery:subscribe(<<"r:af99fafcfebbcfe04770e74ca2646b11">>, <<"Device">>, #{}),\n')])])]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('handle_info({livequery, #{<<"object">> := Object}}, #task{step = login} = State) ->\n    {noreply, do_depploy(Object, State)};\n\nhandle_info({livequery, _Other}, State) ->\n    {noreply, State};\n')])])])])}),[],!1,null,null,null);a.default=r.exports}}]);