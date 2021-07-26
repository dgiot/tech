(window.webpackJsonp=window.webpackJsonp||[]).push([[259],{687:function(t,e,a){"use strict";a.r(e);var r=a(11),i=Object(r.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("产品指某一类设备，创建完产品后，需要为具体设备创建身份。您可以创建单个设备，也可以批量创建设备。本文介绍如何批量创建设备。")]),t._v(" "),a("h2",{attrs:{id:"操作步骤"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#操作步骤"}},[t._v("#")]),t._v(" 操作步骤")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("登录"),a("a",{attrs:{href:"http://iot.console.aliyun.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("物联网平台控制台"),a("OutboundLink")],1),t._v("。")])]),t._v(" "),a("li",[a("p",[t._v("在左侧导航栏，选择设备管理 > 设备。")])]),t._v(" "),a("li",[a("p",[t._v("在设备页，单击批量添加。")])]),t._v(" "),a("li",[a("p",[t._v("选择产品。新创建的设备将继承该产品的功能和特性。")]),t._v(" "),a("p",[a("strong",[t._v("说明")]),t._v(" 若该产品关联了其他平台，请确保您的账户下有足够的激活码用于创建设备。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/7445559951/p134552.png",alt:"批量创建设备"}})])]),t._v(" "),a("li",[a("p",[t._v("选择设备的添加方式。")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("自动生成：无需为设备指定DeviceName。填写设备数量后，系统将为每个设备自动生成由字母、数字随机组合成的DeviceName。")])]),t._v(" "),a("li",[a("p",[t._v("批量上传：需要为所有设备指定名称。单击下载.csv模板下载表格模板，在模板中填写DeviceName、Nickname，然后将填好的表格上传至控制台。"),a("img",{attrs:{src:"https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/0935010161/p211766.gif",alt:"批量上传设备文件示例"}})]),t._v(" "),a("p",[a("strong",[t._v("说明")]),t._v(" 填写模板时，请注意：")]),t._v(" "),a("ul",[a("li",[t._v("第一行不能修改，请从A2单元格开始输入。")]),t._v(" "),a("li",[t._v("DeviceName支持英文字母、数字、短划线（-）、下划线（_）、at符号（@）、英文句号（.）和英文冒号（:），长度限制为4~32个字符。DeviceName在产品维度具有唯一性，不可重复。")]),t._v(" "),a("li",[t._v("Nickname为备注名称，是选填项，支持中文、英文字母、日文、数字和下划线（_），备注名称长度为4~64个字符，一个中文或日文占2个字符。")]),t._v(" "),a("li",[t._v("一个文件中最多可包含1万条记录。")]),t._v(" "),a("li",[t._v("文件大小不超过2 MB。")])])])])]),t._v(" "),a("li",[a("p",[t._v("单击确认，完成创建批量设备。")]),t._v(" "),a("p",[t._v("若批量上传的设备名称列表中有不合法的名称，将出现错误提示。请单击下载不合法列表，查看不合法的设备名称。根据设备名称规范，修改设备名称，再重新上传文件。")])]),t._v(" "),a("li",[a("p",[t._v("设备创建成功后，单击下载设备证书，下载本批次设备的设备证书，用于在产线上统一烧录。")])])]),t._v(" "),a("h2",{attrs:{id:"执行结果"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#执行结果"}},[t._v("#")]),t._v(" 执行结果")]),t._v(" "),a("p",[t._v("批量创建设备成功。可在设备页的批次管理页签下，查看该批次设备信息和下载设备证书。")]),t._v(" "),a("ul",[a("li",[t._v("单击查看详情，查看对应批次设备的详细信息。")]),t._v(" "),a("li",[t._v("单击下载CSV，下载该批次设备的证书。")])]),t._v(" "),a("p",[t._v("查看设备信息，请参见"),a("a",{attrs:{href:"https://www.alibabacloud.com/help/zh/doc-detail/113275.htm#concept-h5h-q44-hhb",title:"在物联网平台成功创建设备后，您可以在控制台管理、查看具体设备信息。",target:"_blank",rel:"noopener noreferrer"}},[t._v("管理设备"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("p",[t._v("设备创建完成后，设备状态显示未激活。"),a("img",{attrs:{src:"https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/1727700161/p211216.gif",alt:"设备未激活"}})]),t._v(" "),a("p",[t._v("设备接入物联网平台实践案例，可参见：")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://www.alibabacloud.com/help/zh/doc-detail/86706.htm#concept-d3l-fw3-p2b",title:"MQTT.fx是一款基于Eclipse Paho，使用Java语言编写的MQTT客户端工具，支持通过Topic订阅和发布消息。下面以使用第三方软件MQTT.fx为例，介绍模拟设备以MQTT协议接入物联网平台。",target:"_blank",rel:"noopener noreferrer"}},[t._v("使用MQTT.fx接入物联网平台"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://www.alibabacloud.com/help/zh/doc-detail/86831.htm#concept-ntf-mgq-p2b",title:"本文档以室内空气检测项目为例，介绍如何将谷歌Android Things物联网硬件接入阿里云物联网平台。",target:"_blank",rel:"noopener noreferrer"}},[t._v("Android Things接入物联网平台"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"相关api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#相关api"}},[t._v("#")]),t._v(" 相关API")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("API")]),t._v(" "),a("th",[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("a",{attrs:{href:"https://www.alibabacloud.com/help/zh/doc-detail/69473.htm#doc-api-Iot-BatchRegisterDevice",title:"调用该接口在指定产品下批量注册多个设备（随机生成设备名）。",target:"_blank",rel:"noopener noreferrer"}},[t._v("BatchRegisterDevice"),a("OutboundLink")],1)]),t._v(" "),a("td",[t._v("批次申请特定数量设备。")])])])])])}),[],!1,null,null,null);e.default=i.exports}}]);