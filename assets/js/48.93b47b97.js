(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{729:function(t,a,e){"use strict";e.r(a);var s=e(9),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:""}},[e("a",{staticClass:"header-anchor",attrs:{href:"#"}},[t._v("#")])]),t._v(" "),e("h1",{attrs:{id:"一、创建通道"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一、创建通道"}},[t._v("#")]),t._v(" 一、创建通道")]),t._v(" "),e("h4",{attrs:{id:"_1、顶部导航栏选择通道-点击创建通道"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1、顶部导航栏选择通道-点击创建通道"}},[t._v("#")]),t._v(" 1、顶部导航栏选择通道，点击创建通道")]),t._v(" "),e("p",[t._v("(1)依次选择通道类型，所属应用，填写通道名称等"),e("br"),t._v(" "),e("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/mqtt/channel_1.png",alt:"channel_1.png"}})]),t._v(" "),e("h1",{attrs:{id:"一、添加规则"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一、添加规则"}},[t._v("#")]),t._v(" 一、添加规则")]),t._v(" "),e("h4",{attrs:{id:"_1、顶部导航栏选择规则-点击添加"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1、顶部导航栏选择规则-点击添加"}},[t._v("#")]),t._v(" 1、顶部导航栏选择规则，点击添加")]),t._v(" "),e("ul",[e("li",[t._v("选择客户端连接事件，筛选 Username 为 'ammeter' 的设备并获取连接信息：")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("SELECT clientid, connected_at FROM \"$events/client_connected\" WHERE username = 'ammeter'\n")])])]),e("ul",[e("li",[t._v("选择客户端断开事件，筛选 Username 为 'ammeter' 的设备并获取断开信息：")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("SELECT clientid, disconnected_at FROM \"$events/client_disconnected\" WHERE username = 'ammeter'\n")])])]),e("ul",[e("li",[t._v('选择发布到 thing/9cc13a64f7/ammeter_001/post 主题的消息，并从消息内容中筛选出 "clientid","payload","topic" 字段：')])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('SELECT clientid, payload, topic FROM "thing/9cc13a64f7/ammeter_001/post"\n')])])]),e("p",[e("img",{attrs:{src:"https://i.loli.net/2021/01/28/gemxZlFEnkMJLGz.png",alt:"image.png"}}),t._v("\n下拉添加响应动作，选择相应的通道添加，然后新建"),e("br"),t._v("\n注：每次添加通道后，需重启对应的通道，即禁用通道后再启用"),e("br"),t._v(" "),e("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/mqtt/product_5.png",alt:"product_5.png"}})])])}),[],!1,null,null,null);a.default=r.exports}}]);