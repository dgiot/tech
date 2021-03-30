(window.webpackJsonp=window.webpackJsonp||[]).push([[333],{632:function(t,v,_){"use strict";_.r(v);var e=_(42),r=Object(e.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("p",[t._v("本方案不在设备上烧录设备证书，而是设备上电联网后，向您的服务器发起请求，获取设备证书（ProductKey、DeviceName和DeviceSecret）。")]),t._v(" "),_("h2",{attrs:{id:"原理"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#原理"}},[t._v("#")]),t._v(" 原理")]),t._v(" "),_("p",[t._v("本方案中，您需要部署自己的设备证书分发服务器，开发相应的服务器API和设备信息数据表。")]),t._v(" "),_("p",[t._v("证书分发服务器收到来自设备的获取证书请求时，调用上述API。该API的业务逻辑为：根据请求中的设备标识查询设备信息数据表，根据查询结果，进行以下后续操作。")]),t._v(" "),_("ul",[_("li",[t._v("没有查到传入的设备标识，则返回设备非法错误。")]),t._v(" "),_("li",[t._v("有对应的设备标识，且已有设备证书，则返回设备证书。")]),t._v(" "),_("li",[t._v("有对应的设备标识，但没有设备证书，则调用物联网平台API "),_("a",{attrs:{href:"https://www.alibabacloud.com/help/zh/doc-detail/69470.htm#doc-api-Iot-RegisterDevice",title:"调用该接口在指定产品下注册设备。",target:"_blank",rel:"noopener noreferrer"}},[t._v("RegisterDevice"),_("OutboundLink")],1),t._v("注册设备身份，获取证书后，再发送给设备。")])]),t._v(" "),_("p",[t._v("设备获得证书之后，再使用该证书连接阿里云物联网平台。")]),t._v(" "),_("p",[t._v("参与该过程的各个角色的时序图如下所示。")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/5492642951/p97200.jpg",alt:"设备获取证书过程"}})]),t._v(" "),_("p",[_("strong",[t._v("说明")])]),t._v(" "),_("ul",[_("li",[t._v("设备需要能自动获取IP地址，并连接您的证书分发服务器。")]),t._v(" "),_("li",[t._v("证书分发服务器由您自行设计实现。")]),t._v(" "),_("li",[t._v("您需要确保设备连接到证书分发服务器的安全性和可靠性。")])]),t._v(" "),_("h2",{attrs:{id:"服务器api设计建议"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#服务器api设计建议"}},[t._v("#")]),t._v(" 服务器API设计建议")]),t._v(" "),_("p",[t._v("建议您按以下方法设计该API。")]),t._v(" "),_("ul",[_("li",[t._v("请求参数：")])]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("参数")]),t._v(" "),_("th",[t._v("说明")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("deviceId")]),t._v(" "),_("td",[t._v("设备在您的系统中的唯一标识。自定义，可以是设备MAC或者SN等。")])])])]),t._v(" "),_("ul",[_("li",[t._v("返回参数：")])]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("参数")]),t._v(" "),_("th",[t._v("说明")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("productKey")]),t._v(" "),_("td",[t._v("对应物联网平台颁发的设备证书的ProductKey。")])]),t._v(" "),_("tr",[_("td",[t._v("deviceName")]),t._v(" "),_("td",[t._v("对应物联网平台颁发的设备证书的DeviceName。")])]),t._v(" "),_("tr",[_("td",[t._v("deviceSecret")]),t._v(" "),_("td",[t._v("对应物联网平台颁发的设备证书的DeviceSecret。")])])])]),t._v(" "),_("h2",{attrs:{id:"设备信息数据表设计建议"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#设备信息数据表设计建议"}},[t._v("#")]),t._v(" 设备信息数据表设计建议")]),t._v(" "),_("p",[t._v("建议您按以下方法设计设备信息数据表。")]),t._v(" "),_("p",[t._v("表格属性：")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("表格属性")]),t._v(" "),_("th",[t._v("建议取值")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("数据表名称")]),t._v(" "),_("td",[t._v("device_table")])]),t._v(" "),_("tr",[_("td",[t._v("数据生命周期")]),t._v(" "),_("td",[t._v("-1")])]),t._v(" "),_("tr",[_("td",[t._v("最大数据版本")]),t._v(" "),_("td",[t._v("1")])]),t._v(" "),_("tr",[_("td",[t._v("数据有效版本偏差")]),t._v(" "),_("td",[t._v("86400")])]),t._v(" "),_("tr",[_("td",[t._v("主键")]),t._v(" "),_("td",[t._v("deviceId，字符串（String） ，分区键。")])])])]),t._v(" "),_("p",[t._v("数据字段：")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("字段")]),t._v(" "),_("th",[t._v("说明")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("deviceId")]),t._v(" "),_("td",[t._v("设备唯一标识。自定义，可以是设备MAC或者SN等。")])]),t._v(" "),_("tr",[_("td",[t._v("registerTime")]),t._v(" "),_("td",[t._v("设备注册时间。")])]),t._v(" "),_("tr",[_("td",[t._v("activateTime")]),t._v(" "),_("td",[t._v("设备激活时间。")])]),t._v(" "),_("tr",[_("td",[t._v("productKey")]),t._v(" "),_("td",[t._v("对应物联网平台颁发的设备证书的ProductKey。")])]),t._v(" "),_("tr",[_("td",[t._v("deviceName")]),t._v(" "),_("td",[t._v("对应物联网平台颁发的设备证书的DeviceName。")])]),t._v(" "),_("tr",[_("td",[t._v("deviceSecret")]),t._v(" "),_("td",[t._v("对应物联网平台颁发的设备证书的DeviceSecret。")])]),t._v(" "),_("tr",[_("td",[t._v("IotId")]),t._v(" "),_("td",[t._v("物联网平台为该设备颁发的设备ID，该设备在物联网平台上的唯一标识。")])])])])])}),[],!1,null,null,null);v.default=r.exports}}]);