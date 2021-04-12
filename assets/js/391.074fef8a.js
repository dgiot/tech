(window.webpackJsonp=window.webpackJsonp||[]).push([[391],{639:function(t,e,r){"use strict";r.r(e);var a=r(8),v=Object(a.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("p",[t._v("产品指某一类设备，创建完产品后，需要为每个设备创建身份。您可以单个创建设备，也可以批量创建设备。本文介绍单个设备创建的步骤。")]),t._v(" "),r("h2",{attrs:{id:"操作步骤"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#操作步骤"}},[t._v("#")]),t._v(" 操作步骤")]),t._v(" "),r("ol",[r("li",[r("p",[t._v("登录"),r("a",{attrs:{href:"http://iot.console.aliyun.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("物联网平台控制台"),r("OutboundLink")],1),t._v("。")])]),t._v(" "),r("li",[r("p",[t._v("在左侧导航栏，选择设备管理 > 设备。")])]),t._v(" "),r("li",[r("p",[t._v("在设备页，单击添加设备。")])]),t._v(" "),r("li",[r("p",[t._v("在添加设备对话框中，输入设备信息，单击确认。")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/6445559951/p2540.png",alt:"物联网平台设备"}})]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("参数")]),t._v(" "),r("th",[t._v("描述")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("产品")]),t._v(" "),r("td",[t._v("选择产品。新创建的设备将继承该产品定义好的功能和特性。"),r("br"),r("strong",[t._v("说明")]),t._v(" 若该产品关联了其他平台，请确保您的账户下有足够的激活码用于创建设备。")])]),t._v(" "),r("tr",[r("td",[t._v("DeviceName")]),t._v(" "),r("td",[t._v("设置设备名称。 设备名称在产品内具有唯一性。支持英文字母、数字、短划线（-）、下划线（_）、at符号（@）、点号（.）和英文冒号（:），长度限制为4~32个字符。"),r("br"),t._v(" "),r("strong",[t._v("说明")]),t._v(" DeviceName可以为空。为空时，由物联网平台生成一个产品内唯一标识符作为设备的DeviceName。")])]),t._v(" "),r("tr",[r("td",[t._v("备注名称")]),t._v(" "),r("td",[t._v("设置备注名称。支持中文、英文字母、日文、数字和下划线（_），备注名称长度为4~64个字符，一个中文或日文占2个字符。")])])])])])]),t._v(" "),r("h2",{attrs:{id:"执行结果"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#执行结果"}},[t._v("#")]),t._v(" 执行结果")]),t._v(" "),r("p",[t._v("设备创建成功后，将自动弹出查看设备证书对话框。您可以查看、复制设备证书信息。设备证书由设备的ProductKey、DeviceName和DeviceSecret组成，是设备与物联网平台进行通信的重要身份认证，建议您妥善保管。")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("参数")]),t._v(" "),r("th",[t._v("说明")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("ProductKey")]),t._v(" "),r("td",[t._v("设备所隶属产品的Key，即物联网平台为产品颁发的全局唯一标识符。")])]),t._v(" "),r("tr",[r("td",[t._v("DeviceName")]),t._v(" "),r("td",[t._v("设备在产品内的唯一标识符。DeviceName与设备所属产品的ProductKey组合，作为设备标识，用来与物联网平台进行连接认证和通信。")])]),t._v(" "),r("tr",[r("td",[t._v("DeviceSecret")]),t._v(" "),r("td",[t._v("物联网平台为设备颁发的设备密钥，用于认证加密。需与DeviceName成对使用。")])])])]),t._v(" "),r("p",[t._v("查看设备信息，请参见"),r("a",{attrs:{href:"https://www.alibabacloud.com/help/zh/doc-detail/113275.htm#concept-h5h-q44-hhb",title:"在物联网平台成功创建设备后，您可以在控制台管理、查看具体设备信息。",target:"_blank",rel:"noopener noreferrer"}},[t._v("管理设备"),r("OutboundLink")],1),t._v("。")]),t._v(" "),r("p",[t._v("设备创建完成后，设备状态显示未激活。"),r("img",{attrs:{src:"https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/1727700161/p211216.gif",alt:"设备未激活"}})]),t._v(" "),r("p",[t._v("请参见"),r("a",{attrs:{href:"https://www.alibabacloud.com/help/product/93051.htm",target:"_blank",rel:"noopener noreferrer"}},[t._v("Link SDK文档"),r("OutboundLink")],1),t._v("开发设备端SDK，然后接入物联网平台，激活设备。")]),t._v(" "),r("p",[t._v("设备接入物联网平台实践案例，可参见：")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://www.alibabacloud.com/help/zh/doc-detail/86706.htm#concept-d3l-fw3-p2b",title:"MQTT.fx是一款基于Eclipse Paho，使用Java语言编写的MQTT客户端工具，支持通过Topic订阅和发布消息。下面以使用第三方软件MQTT.fx为例，介绍模拟设备以MQTT协议接入物联网平台。",target:"_blank",rel:"noopener noreferrer"}},[t._v("使用MQTT.fx接入物联网平台"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://www.alibabacloud.com/help/zh/doc-detail/86831.htm#concept-ntf-mgq-p2b",title:"本文档以室内空气检测项目为例，介绍如何将谷歌Android Things物联网硬件接入阿里云物联网平台。",target:"_blank",rel:"noopener noreferrer"}},[t._v("Android Things接入物联网平台"),r("OutboundLink")],1)])]),t._v(" "),r("h2",{attrs:{id:"相关api"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#相关api"}},[t._v("#")]),t._v(" 相关API")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("API")]),t._v(" "),r("th",[t._v("描述")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[r("a",{attrs:{href:"https://www.alibabacloud.com/help/zh/doc-detail/69470.htm#doc-api-Iot-RegisterDevice",title:"调用该接口在指定产品下注册设备。",target:"_blank",rel:"noopener noreferrer"}},[t._v("RegisterDevice"),r("OutboundLink")],1)]),t._v(" "),r("td",[t._v("注册设备。")])])])])])}),[],!1,null,null,null);e.default=v.exports}}]);