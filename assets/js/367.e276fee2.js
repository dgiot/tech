(window.webpackJsonp=window.webpackJsonp||[]).push([[367],{461:function(t,e,r){"use strict";r.r(e);var a=r(10),o=Object(a.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("p",[t._v("设备连接物联网平台，与物联网平台进行数据通信。物联网平台可将设备数据流转到其他产品中进行存储和处理。这是构建物联网应用的基础。")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/7769728061/p202711.png",alt:"物联网平台架构"}})]),t._v(" "),r("h2",{attrs:{id:"iot-sdk"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#iot-sdk"}},[t._v("#")]),t._v(" IoT SDK")]),t._v(" "),r("p",[t._v("物联网平台提供IoT SDK，设备集成SDK后，即可安全接入物联网平台，使用设备管理、数据流转等功能。")]),t._v(" "),r("p",[t._v("只有支持TCP/IP协议的设备可以集成IoT SDK。")]),t._v(" "),r("p",[t._v("具体操作，请参见"),r("a",{attrs:{href:"https://www.alibabacloud.com/help/zh/doc-detail/42648.htm#concept-jlk-mjl-vdb",title:"物联网平台提供各类设备端SDK，简化开发过程，使设备快速上云。",target:"_blank",rel:"noopener noreferrer"}},[t._v("设备端SDK开发指南"),r("OutboundLink")],1),t._v("。")]),t._v(" "),r("h2",{attrs:{id:"边缘计算"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#边缘计算"}},[t._v("#")]),t._v(" 边缘计算")]),t._v(" "),r("p",[t._v("边缘计算能力允许您在最靠近设备的地方构建边缘计算节点，过滤清洗设备数据，并将处理后的数据上传至云平台。更多信息，请参见"),r("a",{attrs:{href:"https://www.alibabacloud.com/help/zh/doc-detail/85155.htm#concept-egf-t13-d2b",title:"物联网边缘计算，又名Link IoT Edge，是阿里云能力在边缘端的拓展。它继承了阿里云安全、存储、计算、人工智能的能力，可部署于不同量级的智能设备和计算节点中，通过定义物模型连接不同协议、不同数据格式的设备，提供安全可靠、低延时、低成本、易扩展、弱依赖的本地计算服务。",target:"_blank",rel:"noopener noreferrer"}},[t._v("物联网边缘计算"),r("OutboundLink")],1),t._v("。")]),t._v(" "),r("h2",{attrs:{id:"设备接入"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#设备接入"}},[t._v("#")]),t._v(" 设备接入")]),t._v(" "),r("p",[t._v("物联网平台提供各类"),r("a",{attrs:{href:"https://www.alibabacloud.com/help/zh/doc-detail/42648.htm#concept-jlk-mjl-vdb",title:"物联网平台提供各类设备端SDK，简化开发过程，使设备快速上云。",target:"_blank",rel:"noopener noreferrer"}},[t._v("设备端SDK"),r("OutboundLink")],1),t._v("、"),r("a",{attrs:{href:"https://www.alibabacloud.com/help/zh/doc-detail/42649.htm#concept-fqy-pjl-vdb",title:"设备接入物联网平台之前，需通过身份认证。目前，物联网平台支持使用设备密钥进行设备身份认证。",target:"_blank",rel:"noopener noreferrer"}},[t._v("设备认证方式"),r("OutboundLink")],1),t._v("，支持"),r("a",{attrs:{href:"https://www.alibabacloud.com/help/zh/doc-detail/30540.htm#concept-jfq-vjw-vdb",title:"MQTT是基于TCP/IP协议栈构建的异步通信消息协议，是一种轻量级的发布、订阅信息传输协议。可在不可靠的网络环境中进行扩展，适用于设备硬件存储空间或网络带宽有限的场景。使用MQTT协议，消息发送者与接收者不受时间和空间的限制。物联网平台支持设备使用MQTT协议接入。",target:"_blank",rel:"noopener noreferrer"}},[t._v("MQTT"),r("OutboundLink")],1),t._v("、"),r("a",{attrs:{href:"https://www.alibabacloud.com/help/zh/doc-detail/57699.htm#concept-tcf-yq5-wdb",title:"本文介绍物联网平台支持的CoAP协议规范。",target:"_blank",rel:"noopener noreferrer"}},[t._v("CoAP"),r("OutboundLink")],1),t._v("、"),r("a",{attrs:{href:"https://www.alibabacloud.com/help/zh/doc-detail/58036.htm#concept-l14-nt5-wdb",title:"物联网平台支持HTTPS协议。本文介绍物联网平台支持的HTTP协议规范。",target:"_blank",rel:"noopener noreferrer"}},[t._v("HTTP"),r("OutboundLink")],1),t._v("等多种协议，实现设备快速上云。")]),t._v(" "),r("p",[t._v("设备上云后与云端通过IoT Hub进行稳定可靠地双向通信。")]),t._v(" "),r("p",[t._v("IoT Hub具有下列特性：")]),t._v(" "),r("ul",[r("li",[t._v("高性能扩展：支持线性动态扩展，可以支撑十亿设备同时连接。")]),t._v(" "),r("li",[t._v("全链路加密：整个通信链路以RSA、AES加密，保证数据传输的安全。")]),t._v(" "),r("li",[t._v("消息实时到达：当设备与IoT Hub成功建立数据通道后，两者间将保持长连接，以减少握手时间，保证消息实时到达。")]),t._v(" "),r("li",[t._v("支持数据透传： IoT Hub支持将数据以二进制透传的方式传到自己的服务器上，不保存设备数据，从而保证数据的安全可控性。")]),t._v(" "),r("li",[t._v("支持多种通信模式：IoT Hub支持RRPC和PUB/SUB两种通信模式，以满足您在不同场景下的需求。其中，PUB/SUB是基于Topic进行的消息路由。")]),t._v(" "),r("li",[t._v("支持多种设备接入协议：支持设备使用CoAP、MQTT、HTTPS协议接入物联网平台。")])]),t._v(" "),r("h2",{attrs:{id:"消息通信"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#消息通信"}},[t._v("#")]),t._v(" 消息通信")]),t._v(" "),r("p",[t._v("物联网平台支持通过"),r("a",{attrs:{href:"https://www.alibabacloud.com/help/zh/doc-detail/89226.htm#concept-d2m-g2v-y2b",title:"服务端可以直接订阅产品下多种类型的消息：设备上报消息、设备状态变化通知、设备生命周期变更、网关发现子设备上报、设备拓扑关系变更等。配置服务端订阅后，物联网平台会将产品下所有设备的已订阅类型的消息转发至您的服务器。",target:"_blank",rel:"noopener noreferrer"}},[t._v("服务端订阅"),r("OutboundLink")],1),t._v("、"),r("a",{attrs:{href:"https://www.alibabacloud.com/help/zh/doc-detail/68677.htm#concept-g11-dcl-vdb",title:"使用物联网平台的数据流转功能，可将Topic中的数据消息转发至其他Topic或其他阿里云产品进行存储或处理。",target:"_blank",rel:"noopener noreferrer"}},[t._v("云产品流转"),r("OutboundLink")],1),t._v("、"),r("a",{attrs:{href:"https://www.alibabacloud.com/help/zh/doc-detail/102240.htm#concept-mkd-k44-f2b",title:"场景联动是规则引擎中，一种开发自动化业务逻辑的可视化编程方式，您可以通过可视化的方式定义设备之间联动规则，并将规则部署至云端或者边缘端。",target:"_blank",rel:"noopener noreferrer"}},[t._v("场景联动"),r("OutboundLink")],1),t._v("、"),r("a",{attrs:{href:"https://www.alibabacloud.com/help/zh/doc-detail/155755.htm#task-2433926",title:"物联网平台支持广播通信，即向指定产品下的全量在线设备发送消息。设备无需订阅广播Topic，即可收到服务器发送的广播消息。下面介绍广播通信的具体配置流程。",target:"_blank",rel:"noopener noreferrer"}},[t._v("广播通信"),r("OutboundLink")],1),t._v("、"),r("a",{attrs:{href:"https://www.alibabacloud.com/help/zh/doc-detail/90567.htm#concept-zlp-gsl-cfb",title:"MQTT协议是基于PUB/SUB的异步通信模式，不适用于服务端同步控制设备端返回结果的场景。物联网平台基于MQTT协议制定了一套请求和响应的同步机制，无需改动MQTT协议即可实现同步通信。物联网平台提供API给服务端，设备端只需要按照固定的格式回复PUB消息，服务端使用API，即可同步获取设备端的响应结果。",target:"_blank",rel:"noopener noreferrer"}},[t._v("RRPC通信"),r("OutboundLink")],1),t._v("等方式，通过配置规则，实现设备、服务器、物联网平台之间通信消息的同步、转化、过滤、存储等功能。")]),t._v(" "),r("h2",{attrs:{id:"设备管理"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#设备管理"}},[t._v("#")]),t._v(" 设备管理")]),t._v(" "),r("p",[t._v("物联网平台为您提供功能丰富的设备管理服务，包括：生命周期、"),r("a",{attrs:{href:"https://www.alibabacloud.com/help/zh/doc-detail/90386.htm#task-ejm-qp2-cfb",title:"物联网平台提供设备分组功能。您可以通过设备分组来进行跨产品管理设备。本章节介绍如何在物联网平台控制台创建设备分组和管理分组。",target:"_blank",rel:"noopener noreferrer"}},[t._v("设备分组"),r("OutboundLink")],1),t._v("、"),r("a",{attrs:{href:"https://www.alibabacloud.com/help/zh/doc-detail/53930.htm#concept-r4r-b1v-wdb",target:"_blank",rel:"noopener noreferrer"}},[t._v("设备影子"),r("OutboundLink")],1),t._v("、"),r("a",{attrs:{href:"https://www.alibabacloud.com/help/zh/doc-detail/89082.htm#task-z1r-q1p-y2b",title:"本文介绍在网关下关联子设备。",target:"_blank",rel:"noopener noreferrer"}},[t._v("设备拓扑"),r("OutboundLink")],1),t._v("、"),r("a",{attrs:{href:"https://www.alibabacloud.com/help/zh/doc-detail/73727.htm#concept-okp-zlv-tdb",title:"物模型是阿里云物联网平台为产品定义的数据模型，用于描述产品的功能。本文介绍物模型的相关概念、TLS格式和规范、物模型数据校验说明、使用流程。",target:"_blank",rel:"noopener noreferrer"}},[t._v("物模型"),r("OutboundLink")],1),t._v("、"),r("a",{attrs:{href:"https://www.alibabacloud.com/help/zh/doc-detail/68702.htm#concept-rhj-535-42b",title:"由于低配置且资源受限，或者对网络流量有要求的设备，不适合直接构造JSON数据与物联网平台通信，可将原数据透传到物联网平台。您需在物联网平台控制台，编写数据解析脚本，用于将设备上下行数据分别解析为物联网平台定义的标准格式（Alink JSON）和设备的自定义数据格式。",target:"_blank",rel:"noopener noreferrer"}},[t._v("数据解析"),r("OutboundLink")],1),t._v("、"),r("a",{attrs:{href:"https://www.alibabacloud.com/help/zh/doc-detail/96443.htm#task-j31-lmt-sfb",title:"物联网平台支持设备通过HTTP/2流通道方式，将文件上传至阿里云物联网平台服务器储存。设备上传文件后，您可以在物联网平台控制台进行下载、删除等管理操作。",target:"_blank",rel:"noopener noreferrer"}},[t._v("数据存储"),r("OutboundLink")],1),t._v("等。")]),t._v(" "),r("h2",{attrs:{id:"监控运维"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#监控运维"}},[t._v("#")]),t._v(" 监控运维")]),t._v(" "),r("p",[t._v("物联网平台支持"),r("a",{attrs:{href:"https://www.alibabacloud.com/help/zh/doc-detail/58328.htm#task-prw-fzz-xdb",title:"物联网平台提供OTA升级与管理服务。首先确保设备端支持OTA服务，然后在控制台上传新的升级包，并将OTA升级消息推送给设备，设备即可在线升级。本文主要介绍OTA升级的使用限制和操作流程。",target:"_blank",rel:"noopener noreferrer"}},[t._v("OTA升级"),r("OutboundLink")],1),t._v("、"),r("a",{attrs:{href:"https://www.alibabacloud.com/help/zh/doc-detail/99981.htm#task-wpk-dtg-cgb",title:"设备端开发完成后，您可使用物联网平台的在线调试功能，从控制台下发指令到设备端进行功能测试；还可使用远程登录功能，通过SSH协议的网络服务远程访问设备。您可在设备远程控制台输入设备的指令，进行调试和定位问题。",target:"_blank",rel:"noopener noreferrer"}},[t._v("在线调试"),r("OutboundLink")],1),t._v("、"),r("a",{attrs:{href:"https://www.alibabacloud.com/help/zh/doc-detail/44542.htm#concept-a32-x4w-f2b",title:"您可以在物联网平台控制台日志服务页，查询云端运行日志。该日志包含了物联网平台、设备、您的应用程序三者之间的交互通信记录。本文主要介绍云端运行日志中的错误码和排错方法。",target:"_blank",rel:"noopener noreferrer"}},[t._v("日志服务"),r("OutboundLink")],1),t._v("、"),r("a",{attrs:{href:"https://www.alibabacloud.com/help/zh/doc-detail/84891.htm#concept-om1-tgs-c2b",target:"_blank",rel:"noopener noreferrer"}},[t._v("远程配置"),r("OutboundLink")],1),t._v("、"),r("a",{attrs:{href:"https://www.alibabacloud.com/help/zh/doc-detail/141582.htm#concept-2321153",title:"物联网平台提供在线设备数量、上下行消息数量、规则引擎流转消息次数、设备网络状态等指标数据的实时监控功能。同时，支持配置云监控报警规则，对物联网平台数据进行监控和报警。",target:"_blank",rel:"noopener noreferrer"}},[t._v("实时监控"),r("OutboundLink")],1),t._v("、远程维护等功能。")]),t._v(" "),r("h2",{attrs:{id:"安全认证和权限策略"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#安全认证和权限策略"}},[t._v("#")]),t._v(" 安全认证和权限策略")]),t._v(" "),r("p",[t._v("安全是IoT的重要话题。数蛙物联网平台提供多重防护，保障设备和云端数据的安全。")]),t._v(" "),r("ul",[r("li",[t._v("物联网平台为每个设备颁发唯一证书，设备使用证书进行身份验证连接物联网平台。")]),t._v(" "),r("li",[t._v("针对不同安全等级和产线烧录的要求，物联网平台为开发者提供了多种设备认证方式。")]),t._v(" "),r("li",[t._v("授权粒度精确到设备级别，任何设备只能对自己的Topic发布、订阅消息。服务端凭借数蛙AccessKey对账号下所属的Topic进行操作。")])])])}),[],!1,null,null,null);e.default=o.exports}}]);