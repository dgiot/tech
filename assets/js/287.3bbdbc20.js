(window.webpackJsonp=window.webpackJsonp||[]).push([[287],{725:function(t,_,e){"use strict";e.r(_);var v=e(7),r=Object(v.a)({},(function(){var t=this,_=t.$createElement,e=t._self._c||_;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[t._v("物联网平台支持通过MQTT和CoAP协议接入中国移动和中国联通的NB-IoT设备。因中国电信的NB-IoT设备必须在中国电信AEP平台通过设备直连的接入方式来使用，如需在物联网平台使用中国电信的NB-IoT设备，您可通过配置云网关，来接入中国电信AEP平台的设备。")]),t._v(" "),e("p",[t._v("关于如何通过MQTT和CoAP协议接入中国移动和中国联通的NB-IoT设备，请参见"),e("a",{attrs:{href:"mqtt-tcp_connect",title:"本文档主要介绍基于TCP的MQTT连接，连接方式为MQTT客户端直连。"}},[t._v("MQTT-TCP连接通信")]),t._v("和"),e("a",{attrs:{href:"https://help.aliyun.com/document_detail/57697.htm#concept-gn3-kr5-wdb",title:"物联网平台支持CoAP协议连接通信。CoAP协议适用在资源受限的低功耗设备上，尤其是NB-IoT的设备使用。本文介绍基于CoAP协议进行设备接入的流程，及使用DTLS和对称加密两种认证方式下的自主接入流程。",target:"_blank",rel:"noopener noreferrer"}},[t._v("CoAP连接通信"),e("OutboundLink")],1),t._v("。")]),t._v(" "),e("p",[t._v("下文以智能水表产品为例，介绍如何通过云网关接入中国电信的NB-IoT设备。")]),t._v(" "),e("h2",{attrs:{id:"设计思路"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#设计思路"}},[t._v("#")]),t._v(" 设计思路")]),t._v(" "),e("p",[t._v("首先在中国电信AEP平台，创建产品、设备和应用，然后在物联网平台通过配置云网关接入AEP平台的设备。")]),t._v(" "),e("p",[t._v("下面介绍了中国电信AEP平台的产品配置。当您在物联网平台创建产品和定义物模型时，需与电信AEP平台的产品名称和物模型标识符保持一致，其他参数可自定义。")]),t._v(" "),e("p",[t._v("表 1. 产品的配置说明")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("参数")]),t._v(" "),e("th",[t._v("说明")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("产品名称")]),t._v(" "),e("td",[t._v("NBProduct1，可自定义。")])]),t._v(" "),e("tr",[e("td",[t._v("产品分类")]),t._v(" "),e("td",[t._v("智慧城市/能源管理/智能水表，可自定义。")])]),t._v(" "),e("tr",[e("td",[t._v("节点类型")]),t._v(" "),e("td",[t._v("设备。 "),e("br"),t._v(" "),e("strong",[t._v("说明")]),t._v(" 针对NB-IoT设备，节点类型及下面的接入方式、网络协议和通信协议以此处配置为准。")])]),t._v(" "),e("tr",[e("td",[t._v("接入方式")]),t._v(" "),e("td",[t._v("设备直连。")])]),t._v(" "),e("tr",[e("td",[t._v("网络类型")]),t._v(" "),e("td",[t._v("NB-IoT。")])]),t._v(" "),e("tr",[e("td",[t._v("通信协议")]),t._v(" "),e("td",[t._v("LWM2M。")])]),t._v(" "),e("tr",[e("td",[t._v("数据加密方式")]),t._v(" "),e("td",[t._v("明文，可自定义。"),e("br"),t._v(" * 该加密方式支持LWM2M协议设备使用在线调试功能。"),e("br"),t._v(" * 本示例为了快速创建云网关设备，需在电信平台使用设备在线调试功能，快速模拟设备上线，进行数据上报。")])]),t._v(" "),e("tr",[e("td",[t._v("认证方式")]),t._v(" "),e("td",[t._v("IMEI认证，可自定义。")])]),t._v(" "),e("tr",[e("td",[t._v("Endpoint格式")]),t._v(" "),e("td",[t._v("imei，可自定义。")])]),t._v(" "),e("tr",[e("td",[t._v("是否已有电信官方认证通过的profile")]),t._v(" "),e("td",[t._v("否，可自定义。")])]),t._v(" "),e("tr",[e("td",[t._v("是否透传")]),t._v(" "),e("td",[t._v("否，可自定义。")])])])]),t._v(" "),e("p",[t._v("已创建智能水表产品NBProduct中已包含物模型属性用水量，标识符为water_consumption。")]),t._v(" "),e("p",[t._v("表 2. 设备的配置说明")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("参数")]),t._v(" "),e("th",[t._v("说明")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("设备名称")]),t._v(" "),e("td",[t._v("nbdevice，可自定义。")])]),t._v(" "),e("tr",[e("td",[t._v("IMEI号")]),t._v(" "),e("td",[t._v("321456123456098，可自定义。")])])])]),t._v(" "),e("h2",{attrs:{id:"操作步骤"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#操作步骤"}},[t._v("#")]),t._v(" 操作步骤")]),t._v(" "),e("ol",[e("li",[e("a",{attrs:{href:"https://help.aliyun.com/document_detail/190188.htm#task-1994708",title:"在进行物联网平台云网关配置前，您需在中国电信AEP平台完成产品和设备创建，并添加应用。",target:"_blank",rel:"noopener noreferrer"}},[t._v("在电信平台开发设备和添加应用"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://help.aliyun.com/document_detail/190189.htm#task-1994735",title:"您需要在物联网平台创建产品，产品名称与中国电信AEP平台产品名称一致，用于实现中国电信AEP平台设备的接入。",target:"_blank",rel:"noopener noreferrer"}},[t._v("在物联网平台创建产品"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://help.aliyun.com/document_detail/190190.htm#task-1994773",title:"在中国电信AEP平台完成设备开发和应用创建后，可在物联网平台结合已创建产品，创建云网关设备，实现与电信AEP平台设备对接。",target:"_blank",rel:"noopener noreferrer"}},[t._v("使用云网关创建设备"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://help.aliyun.com/document_detail/190191.htm#task-1994787",title:"完成设备创建，需为产品定义物模型，与电信AEP平台进行通信。阿里云的物模型和中国电信平台物模型的数据格式不同，需要在物联网平台中进行格式转换。本案例通过Python脚本完成转换。",target:"_blank",rel:"noopener noreferrer"}},[t._v("转换物模型格式"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://help.aliyun.com/document_detail/190192.htm#task-1994788",title:"完成物模型数据格式转化后，在中国电信AEP平台自定义一个物模型属性和服务，测试接收从物联网平台设备下发的数据。",target:"_blank",rel:"noopener noreferrer"}},[t._v("测试物联网平台与电信AEP平台下行通信"),e("OutboundLink")],1)])])])}),[],!1,null,null,null);_.default=r.exports}}]);