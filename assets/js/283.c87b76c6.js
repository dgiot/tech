(window.webpackJsonp=window.webpackJsonp||[]).push([[283],{721:function(t,v,_){"use strict";_.r(v);var r=_(7),e=Object(r.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("p",[t._v("在进行物联网平台云网关配置前，您需在中国电信AEP平台完成产品和设备创建，并添加应用。")]),t._v(" "),_("h2",{attrs:{id:"前提条件"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#前提条件"}},[t._v("#")]),t._v(" 前提条件")]),t._v(" "),_("p",[t._v("已完成中国电信AEP平台账号注册和认证。具体操作，请参见"),_("a",{attrs:{href:"https://help.ctwing.cn/kuai-su-ru-men/ji-yu-zhong-guo-dian-xin-kai-fa-ban-duan-dao-duan-cheng-xu-yang-li/ping-tai-ru-zhu/yong-hu-zhu-ce.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("用户注册"),_("OutboundLink")],1),t._v("。")]),t._v(" "),_("h2",{attrs:{id:"操作步骤"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#操作步骤"}},[t._v("#")]),t._v(" 操作步骤")]),t._v(" "),_("ol",[_("li",[_("p",[t._v("登录"),_("a",{attrs:{href:"https://dm.ctwing.cn/#/productCenter/10095865/3/subscriptionTab?t=2000016872&ser=1&profile=1&productProtocol=3&tupIsProfile=1",target:"_blank",rel:"noopener noreferrer"}},[t._v("中国电信AEP平台"),_("OutboundLink")],1),t._v("。")])]),t._v(" "),_("li",[_("p",[t._v("在左侧导航栏选择产品中心，单击右上角的创建产品。")])]),t._v(" "),_("li",[_("p",[t._v("在弹出的对话框中，完成参数配置后，单击确定。")]),t._v(" "),_("p",[t._v("本示例配置参数如下表所示。")]),t._v(" "),_("p",[t._v("表 1. 产品的配置说明")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("参数")]),t._v(" "),_("th",[t._v("说明")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("产品名称")]),t._v(" "),_("td",[t._v("NBProduct1，可自定义。")])]),t._v(" "),_("tr",[_("td",[t._v("产品分类")]),t._v(" "),_("td",[t._v("智慧城市/能源管理/智能水表，可自定义。")])]),t._v(" "),_("tr",[_("td",[t._v("节点类型")]),t._v(" "),_("td",[t._v("设备。"),_("br"),t._v(" "),_("strong",[t._v("说明")]),t._v(" 针对NB-IoT设备，节点类型及下面的接入方式、网络协议和通信协议以此处配置为准。")])]),t._v(" "),_("tr",[_("td",[t._v("接入方式")]),t._v(" "),_("td",[t._v("设备直连。")])]),t._v(" "),_("tr",[_("td",[t._v("网络类型")]),t._v(" "),_("td",[t._v("NB-IoT。")])]),t._v(" "),_("tr",[_("td",[t._v("通信协议")]),t._v(" "),_("td",[t._v("LWM2M。")])]),t._v(" "),_("tr",[_("td",[t._v("数据加密方式")]),t._v(" "),_("td",[t._v("明文，可自定义。"),_("br"),t._v(" * 该加密方式支持LWM2M协议设备使用在线调试功能。"),_("br"),t._v(" 本示例为了快速创建云网关设备，需在电信平台使用设备在线调试功能，快速模拟设备上线，进行数据上报。")])]),t._v(" "),_("tr",[_("td",[t._v("认证方式")]),t._v(" "),_("td",[t._v("IMEI认证，可自定义。")])]),t._v(" "),_("tr",[_("td",[t._v("Endpoint格式")]),t._v(" "),_("td",[t._v("imei，可自定义。")])]),t._v(" "),_("tr",[_("td",[t._v("是否已有电信官方认证通过的profile")]),t._v(" "),_("td",[t._v("否，可自定义。")])]),t._v(" "),_("tr",[_("td",[t._v("是否透传")]),t._v(" "),_("td",[t._v("否，可自定义。")])])])])]),t._v(" "),_("li",[_("p",[t._v("在弹出的添加产品成功对话框中，单击立即添加设备。")])]),t._v(" "),_("li",[_("p",[t._v("在产品NBProduct1的设备管理页签，单击添加设备，完成参数配置后，单击确定。")]),t._v(" "),_("p",[t._v("本示例配置参数如下表所示。")]),t._v(" "),_("p",[t._v("表 2. 设备的配置说明")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("参数")]),t._v(" "),_("th",[t._v("说明")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("设备名称")]),t._v(" "),_("td",[t._v("nbdevice，可自定义。")])]),t._v(" "),_("tr",[_("td",[t._v("IMEI号")]),t._v(" "),_("td",[t._v("321456123456098，可自定义。")])])])])]),t._v(" "),_("li",[_("p",[t._v("在设备列表中，单击nbdevice对应的在线模拟图标"),_("img",{attrs:{src:"https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/7192155061/p181722.png",alt:"在线模拟"}}),t._v("，在AEP-在线调试页面，单击右上角的上线，激活设备，模拟数据上报。")])]),t._v(" "),_("li",[_("p",[t._v("单击左侧导航栏的应用管理，单击页面右上角的新增应用，完成参数配置后，单击创建。")]),t._v(" "),_("p",[t._v("可根据页面提示，自定义配置参数。")]),t._v(" "),_("p",[t._v("应用创建完成后，在应用列表，单击该应用的查看详情按钮"),_("img",{attrs:{src:"https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/9113155061/p182457.png",alt:"查看详情"}}),t._v("，查看并保存App Key和App Secret的值。")])])])])}),[],!1,null,null,null);v.default=e.exports}}]);