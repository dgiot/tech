(window.webpackJsonp=window.webpackJsonp||[]).push([[226],{780:function(t,e,v){"use strict";v.r(e);var _=v(9),r=Object(_.a)({},(function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("p",[v("img",{attrs:{src:"https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/7423155061/p179552.png",alt:"云网关"}})]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("参数")]),t._v(" "),v("th",[t._v("描述")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("云网关名称")]),t._v(" "),v("td",[t._v("为云网关命名。名称在账号内具有唯一性。支持中文、英文字母、日文、数字、下划线（_），长度限制4~30个字符，一个中文或日文占2个字符。")])]),t._v(" "),v("tr",[v("td",[t._v("协议")]),t._v(" "),v("td",[t._v("选择电信NB-IoT。")])]),t._v(" "),v("tr",[v("td",[t._v("关联产品")]),t._v(" "),v("td",[t._v("选择关联产品方式。本示例为选择产品的NBProduct1。"),v("br"),t._v(" *   选择产品：选择在物联网平台已创建的产品。"),v("br"),t._v(" *   产品变量：变量格式为"),v("code",[t._v("${变量名名称}")]),t._v("。 "),v("br"),t._v(" 系统会从接收的消息体中解析出对应字段的值作为ProductName关联到物联网平台对应的产品。  "),v("br"),t._v(" 例如"),v("code",[t._v("${Model}")]),t._v("，解析出Model对应值为智能水表，即可与物联网中名为智能水表的产品关联。     "),v("br"),t._v(" "),v("strong",[t._v("说明")]),t._v(" 必须保证物联网平台已创建产品，且产品名称与中国电信AEP平台上产品名称一致。")])]),t._v(" "),v("tr",[v("td",[t._v("关联设备")]),t._v(" "),v("td",[t._v("变量格式为"),v("code",[t._v("${变量名称}")]),t._v("。"),v("br"),t._v(" 平台会从接收的消息体中解析出对应字段的值（例如设备ID）作为DeviceName，在物联网平台已关联产品（例如NBProduct1）下自动创建对应的设备。 "),v("br"),t._v(" 例如"),v("code",[t._v("${deviceId}")]),t._v("，解析出deviceId对应值为150082610000，即可在已关联产品自动创建设备名称为150082610000的设备。")])]),t._v(" "),v("tr",[v("td",[t._v("应用AppKey")]),t._v(" "),v("td",[t._v("在中国电信AEP平台已创建应用的App Key和App Secret。"),v("br"),t._v(" 关于如何创建应用，请参见"),v("a",{attrs:{href:"https://help.aliyun.com/document_detail/190188.htm#task-1994708",title:"在进行物联网平台云网关配置前，您需在中国电信AEP平台完成产品和设备创建，并添加应用。",target:"_blank",rel:"noopener noreferrer"}},[t._v("在电信平台开发设备和添加应用"),v("OutboundLink")],1),t._v("。")])]),t._v(" "),v("tr",[v("td",[t._v("应用Secret")]),t._v(" "),v("td")])])])])}),[],!1,null,null,null);e.default=r.exports}}]);