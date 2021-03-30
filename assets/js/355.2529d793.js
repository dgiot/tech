(window.webpackJsonp=window.webpackJsonp||[]).push([[355],{578:function(e,t,o){"use strict";o.r(t);var r=o(42),i=Object(r.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("p",[e._v("物联网平台中，服务端和设备端通过Topic来实现消息通信。Topic是针对设备的概念，Topic类是针对产品的概念。")]),e._v(" "),o("h2",{attrs:{id:"产品topic类"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#产品topic类"}},[e._v("#")]),e._v(" 产品Topic类")]),e._v(" "),o("p",[e._v("为了方便海量设备基于Topic进行通信，简化授权操作，物联网平台增加了产品Topic类的概念。Topic类是一类Topic的集合，例如，产品的自定义Topic类"),o("code",[e._v("/${YourProductKey}/${YourDeviceName}/user/update")]),e._v("是具体设备Topic"),o("code",[e._v("/${YourProductKey}/device1/user/update")]),e._v("、"),o("code",[e._v("/${YourProductKey}/device2/user/update")]),e._v("等的集合。")]),e._v(" "),o("p",[e._v("登录"),o("a",{attrs:{href:"https://iot.console.aliyun.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("物联网平台控制台"),o("OutboundLink")],1),e._v("，选择设备管理 > 产品，单击产品对应的查看，进入产品详情页，单击Topic类列表页签，可以在基础通信Topic、物模型通信Topic、自定义Topic页签查看相应的Topic类。关于这三类Topic的说明，请参见"),o("a",{attrs:{href:"https://www.alibabacloud.com/#section-0e7-4fw-ppz",target:"_blank",rel:"noopener noreferrer"}},[e._v("Topic分类"),o("OutboundLink")],1),e._v("。")]),e._v(" "),o("p",[e._v("Topic类列表中：")]),e._v(" "),o("ul",[o("li",[e._v("Topic类以正斜线（/）进行分层，区分每个类目。其中，有两个类目为既定类目：${YourProductKey}表示产品的标识符ProductKey，${YourDeviceName}表示设备名称。")]),e._v(" "),o("li",[e._v("操作权限：\n"),o("ul",[o("li",[e._v("发布表示设备可以往该Topic发布消息。")]),e._v(" "),o("li",[e._v("订阅表示设备可以订阅该Topic，从而获取消息。")])])])]),e._v(" "),o("h2",{attrs:{id:"设备topic"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#设备topic"}},[e._v("#")]),e._v(" 设备Topic")]),e._v(" "),o("p",[e._v("产品的Topic类不用于通信，只是定义Topic，用于消息通信的是具体的设备Topic。")]),e._v(" "),o("p",[o("strong",[e._v("注意")]),e._v(" 在进行上下行通信调试时，请确保指定的Topic具备对应的操作权限。")]),e._v(" "),o("p",[e._v("您创建设备后，产品的所有Topic类会自动映射到设备上，生成具体设备Topic，您无需单独为每个设备创建Topic。设备Topic格式和产品Topic类格式一致，区别在于Topic类中的变量${YourDeviceName}，在Topic中是具体的设备名称（DeviceName）。")]),e._v(" "),o("p",[e._v("图 1. 设备Topic自动生成示意图")]),e._v(" "),o("p",[o("img",{attrs:{src:"https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/9545559951/p161388.jpg",alt:"Topic"}})]),e._v(" "),o("p",[e._v("设备Topic只能被该设备用于消息通信，例如，Topic："),o("code",[e._v("/${YourProductKey}/device1/user/update")]),e._v("归属于设备device1，所以只能被设备device1用于发布或订阅消息，而不能被设备device2用于发布或订阅消息。")]),e._v(" "),o("p",[e._v("设备发送SUB指令订阅某个Topic后，登录"),o("a",{attrs:{href:"https://iot.console.aliyun.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("物联网平台控制台"),o("OutboundLink")],1),e._v("，选择设备管理 > 设备，单击设备对应的查看，进入设备详情页，单击Topic列表页签，已订阅Topic列表展示了设备订阅成功的所有Topic。云端系统可以通过其中的Topic发送下行消息。")]),e._v(" "),o("p",[e._v("单击列表中已订阅的自定义Topic对应的发布消息，可通过该Topic从云端发布一条消息到设备端。使用通配符的自定义Topic除外，具体信息，请参见"),o("a",{attrs:{href:"https://www.alibabacloud.com/help/zh/doc-detail/85539.htm#section-4x5-31w-af5",target:"_blank",rel:"noopener noreferrer"}},[e._v("带通配符的自定义Topic"),o("OutboundLink")],1),e._v("。")]),e._v(" "),o("p",[e._v("设备可以通过UNSUB指令取消与指定Topic的订阅关系，取消成功后，该Topic从已订阅Topic列表中删除。")]),e._v(" "),o("p",[e._v("如果您需要管控单个设备的消息收发，请在"),o("a",{attrs:{href:"https://iot.console.aliyun.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("物联网平台控制台"),o("OutboundLink")],1),e._v("的设备列表页或在服务端调用"),o("a",{attrs:{href:"https://www.alibabacloud.com/help/zh/doc-detail/69602.htm#doc-api-Iot-DisableThing",title:"调用该接口禁用指定设备。",target:"_blank",rel:"noopener noreferrer"}},[e._v("DisableThing"),o("OutboundLink")],1),e._v("接口，禁用该设备；或在业务上管控发送给设备的消息。")]),e._v(" "),o("h2",{attrs:{id:"topic分类"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#topic分类"}},[e._v("#")]),e._v(" Topic分类")]),e._v(" "),o("p",[e._v("物联网平台将Topic分为三类。")]),e._v(" "),o("table",[o("thead",[o("tr",[o("th",[e._v("类别")]),e._v(" "),o("th",[e._v("说明")])])]),e._v(" "),o("tbody",[o("tr",[o("td",[e._v("基础通信Topic")]),e._v(" "),o("td",[e._v("物联网平台预定义的基础功能通信Topic，包含："),o("br"),e._v(" *   OTA升级相关Topic。各Topic的用途和消息数据格式，请参见"),o("a",{attrs:{href:"https://www.alibabacloud.com/help/zh/doc-detail/89307.htm#concept-swx-ttw-y2b",title:"物联网平台提供OTA升级与管理服务。下面介绍OTA升级消息的Topic和Alink数据格式，包括设备上报OTA模块版本、物联网平台推送升级包信息、设备上报升级进度和设备请求获取最新升级包信息。",target:"_blank",rel:"noopener noreferrer"}},[e._v("OTA升级"),o("OutboundLink")],1),e._v("。"),o("br"),e._v(" *  设备标签相关Topic。各Topic的用途和消息数据格式，请参见"),o("a",{attrs:{href:"https://www.alibabacloud.com/help/zh/doc-detail/89304.htm#concept-pvz-qtw-y2b",title:"设备的部分信息，如厂商、设备型号等，可以作为设备标签上报。",target:"_blank",rel:"noopener noreferrer"}},[e._v("设备标签"),o("OutboundLink")],1),e._v("。"),o("br"),e._v(" *   时钟同步相关Topic。时钟同步功即NTP服务，请参见"),o("a",{attrs:{href:"https://www.alibabacloud.com/help/zh/doc-detail/102509.htm#concept-s2r-tx3-kgb",title:"物联网平台提供NTP服务，解决嵌入式设备资源受限，系统不包含NTP服务，端上没有精确时间戳的问题。",target:"_blank",rel:"noopener noreferrer"}},[e._v("NTP服务"),o("OutboundLink")],1),e._v("。"),o("br"),e._v(" *   设备影子相关Topic。各Topic的用途和消息数据格式，请参见"),o("a",{attrs:{href:"https://www.alibabacloud.com/help/zh/doc-detail/53964.htm#concept-f1f-v1v-wdb",title:"设备影子数据通过Topic进行流转。本文介绍设备影子数据流转，包括：设备上报状态到设备影子，应用程序更改设备状态，设备离线再上线后主动获取设备影子信息，和设备端请求删除设备影子中的属性信息。",target:"_blank",rel:"noopener noreferrer"}},[e._v("设备影子数据流"),o("OutboundLink")],1),e._v("。"),o("br"),e._v(" *   配置更新相关Topic。各Topic的用途和消息数据格式，请参见"),o("a",{attrs:{href:"https://www.alibabacloud.com/help/zh/doc-detail/89308.htm#concept-j4b-vtw-y2b",title:"本文档介绍设备主动请求配置信息和物联网平台推送配置信息的Topic及Alink数据格式。",target:"_blank",rel:"noopener noreferrer"}},[e._v("远程配置"),o("OutboundLink")],1),e._v("。"),o("br"),e._v(" *   广播Topic。调用云端API "),o("a",{attrs:{href:"https://www.alibabacloud.com/help/zh/doc-detail/69909.htm#doc-api-Iot-PubBroadcast",title:"调用该接口向指定产品所有设备，或向订阅了指定Topic的所有设备发布广播消息。",target:"_blank",rel:"noopener noreferrer"}},[e._v("PubBroadcast"),o("OutboundLink")],1),e._v("向订阅了该Topic的所有设备发送广播消息，实现批量控制设备。")])]),e._v(" "),o("tr",[o("td",[e._v("物模型通信Topic")]),e._v(" "),o("td",[e._v("物联网平台预定义的物模型通信Topic。各物模型功能Topic消息的数据格式，请参见"),o("a",{attrs:{href:"https://www.alibabacloud.com/help/zh/doc-detail/89301.htm#concept-mvc-4tw-y2b",title:"如果产品定义了物模型，设备可以上报属性和事件信息，服务端可以下发设置属性和调用服务指令。",target:"_blank",rel:"noopener noreferrer"}},[e._v("设备属性、事件、服务"),o("OutboundLink")],1),e._v("。"),o("br"),e._v(" *"),o("strong",[e._v("说明")]),e._v(" 在云端，不可以调用Pub接口向物模型通信Topic发送消息。"),o("br"),e._v(" *在云端通过物模型功能远程控制设备，请调用"),o("a",{attrs:{href:"https://www.alibabacloud.com/help/zh/doc-detail/69579.htm#doc-api-Iot-SetDeviceProperty",title:"调用该接口为指定设备设置属性值。",target:"_blank",rel:"noopener noreferrer"}},[e._v("SetDeviceProperty"),o("OutboundLink")],1),e._v("或"),o("a",{attrs:{href:"https://www.alibabacloud.com/help/zh/doc-detail/96243.htm#doc-api-Iot-SetDevicesProperty",title:"调用该接口批量设置设备属性值。",target:"_blank",rel:"noopener noreferrer"}},[e._v("SetDevicesProperty"),o("OutboundLink")],1),e._v("设置设备属性值；调用"),o("a",{attrs:{href:"https://www.alibabacloud.com/help/zh/doc-detail/69584.htm#doc-api-Iot-InvokeThingService",title:"调用该接口在一个设备上调用指定服务。",target:"_blank",rel:"noopener noreferrer"}},[e._v("InvokeThingService"),o("OutboundLink")],1),e._v("或"),o("a",{attrs:{href:"https://www.alibabacloud.com/help/zh/doc-detail/96242.htm#doc-api-Iot-InvokeThingsService",title:"调用该接口批量调用设备服务。",target:"_blank",rel:"noopener noreferrer"}},[e._v("InvokeThingsService"),o("OutboundLink")],1),e._v("调用设备服务。")])]),e._v(" "),o("tr",[o("td",[e._v("自定义Topic")]),e._v(" "),o("td",[e._v("您可以根据业务需求，在产品的Topic类列表页自定义Topic类，具体操作请参见"),o("a",{attrs:{href:"https://www.alibabacloud.com/help/zh/doc-detail/85539.htm#concept-ppk-rz4-k2b",title:"本文介绍如何为产品自定义Topic类。自定义Topic类将自动映射到该产品下的所有设备中。",target:"_blank",rel:"noopener noreferrer"}},[e._v("自定义Topic类"),o("OutboundLink")],1),e._v("。"),o("br"),e._v(" *Topic类是一个Topic模版配置，编辑更新某个Topic类后，可能对产品下所有设备使用该类Topic通信产生影响。建议在设备研发阶段设计好，设备上线后不再变更Topic类。")])])])])])}),[],!1,null,null,null);t.default=i.exports}}]);