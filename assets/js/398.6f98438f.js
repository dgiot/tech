(window.webpackJsonp=window.webpackJsonp||[]).push([[398],{647:function(t,e,a){"use strict";a.r(e);var r=a(8),l=Object(r.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("本文介绍在产线上将证书（ProductKey、DeviceName和DeviceSecret）烧录至设备的方案。")]),t._v(" "),a("p",[t._v("本方案需要您对设备产线做相应的改造，具体改造方案需您自行设计。下面仅介绍可用的烧录方案。")]),t._v(" "),a("h2",{attrs:{id:"获取设备证书"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#获取设备证书"}},[t._v("#")]),t._v(" 获取设备证书")]),t._v(" "),a("p",[t._v("创建设备时，系统会自动生成设备证书。您可以按以下方式获取设备证书，将获得的证书写入您自己的数据库或者文件中。")]),t._v(" "),a("ul",[a("li",[t._v("在物联网平台控制台上单个创建设备后，获取设备证书。\n"),a("ul",[a("li",[t._v("创建成功后，将自动弹出添加完成对话框，单击前往查看或一键复制设备证书，获取设备证书。")]),t._v(" "),a("li",[t._v("在设备列表页签下，单击设备对应的查看按钮，进入设备详情页设备信息页签下，查看设备证书。")])])]),t._v(" "),a("li",[t._v("在物联网平台控制台上批量创建设备后，下载该批次设备的证书文件。\n"),a("ul",[a("li",[t._v("创建成功后，在添加完成提示框中，单击下载设备证书，即可下载该批次设备证书。")]),t._v(" "),a("li",[t._v("在设备页的批次管理页签下，单击产品对应的下载CSV，下载产品下所有设备的证书。")])])]),t._v(" "),a("li",[t._v("调用云端API创建设备后，物联网平台将生成的设备证书返回给您的应用。")])]),t._v(" "),a("p",[a("strong",[t._v("说明")]),t._v(" 创建设备操作可以参考以下文档：")]),t._v(" "),a("ol",[a("li",[t._v("创建产品操作，请参见"),a("a",{attrs:{href:"https://www.alibabacloud.com/help/zh/doc-detail/73728.htm#task-lxd-pnl-vdb",title:"使用物联网平台的第一步：在控制台创建产品。产品是设备的集合，通常是一组具有相同功能定义的设备集合。例如：产品指同一个型号的产品，设备就是该型号下的某个设备。",target:"_blank",rel:"noopener noreferrer"}},[t._v("创建产品"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("li",[t._v("注册设备。\n"),a("ul",[a("li",[t._v("在物联网平台控制台单个创建设备，请参见"),a("a",{attrs:{href:"https://www.alibabacloud.com/help/zh/doc-detail/73729.htm#task-yk1-rnl-vdb",title:"产品指某一类设备，创建完产品后，需要为设备创建身份。您可以创建单个设备，也可以批量创建设备。本文为您讲述单个设备的创建。",target:"_blank",rel:"noopener noreferrer"}},[t._v("单个创建设备"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("li",[t._v("在物联网平台控制台批量创建设备，请参见"),a("a",{attrs:{href:"https://www.alibabacloud.com/help/zh/doc-detail/89261.htm#task-av2-fcw-y2b",title:"产品指某一类设备，创建完产品后，需要为具体设备创建身份。您可以创建单个设备，也可以批量创建设备。本文为您讲述如何批量创建设备。",target:"_blank",rel:"noopener noreferrer"}},[t._v("批量创建设备"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("li",[t._v("调用云端API创建设备。物联网平台提供单个注册设备的API "),a("a",{attrs:{href:"https://www.alibabacloud.com/help/zh/doc-detail/69470.htm#doc-api-Iot-RegisterDevice",title:"调用该接口在指定产品下注册设备。",target:"_blank",rel:"noopener noreferrer"}},[t._v("RegisterDevice"),a("OutboundLink")],1),t._v("和批量注册设备的API "),a("a",{attrs:{href:"https://www.alibabacloud.com/help/zh/doc-detail/69473.htm#doc-api-Iot-BatchRegisterDevice",title:"调用该接口在指定产品下批量注册多个设备（随机生成设备名）。",target:"_blank",rel:"noopener noreferrer"}},[t._v("BatchRegisterDevice"),a("OutboundLink")],1),t._v("、"),a("a",{attrs:{href:"https://www.alibabacloud.com/help/zh/doc-detail/69514.htm#doc-api-Iot-BatchRegisterDeviceWithApplyId",title:"调用该接口根据申请批次ID（ApplyId）批量注册设备。",target:"_blank",rel:"noopener noreferrer"}},[t._v("BatchRegisterDeviceWithApplyId"),a("OutboundLink")],1),t._v("。获取云端SDK和调用API的方法，请参见"),a("a",{attrs:{href:"https://www.alibabacloud.com/help/zh/doc-detail/30579.htm#reference-b4q-wwb-zdb",title:"物联网平台云端SDK用于调用云端API，以实现物联网平台的云端能力，如产品管理、设备管理、Topic管理、数据流转规则管理、消息通信等。",target:"_blank",rel:"noopener noreferrer"}},[t._v("下载云端SDK"),a("OutboundLink")],1),t._v("。")])])])]),t._v(" "),a("h2",{attrs:{id:"证书烧录方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#证书烧录方式"}},[t._v("#")]),t._v(" 证书烧录方式")]),t._v(" "),a("p",[t._v("获取到设备证书之后，可以在产线上启动一个服务器，用于分发设备证书。编程器、烧录器或设备可向该证书分发服务器申请证书，并将获得的证书烧录到设备的NVRAM或Flash。")]),t._v(" "),a("p",[t._v("支持两种烧录方式，您可以根据实际情况，选择使用相应的证书烧录方案。流程如下图所示。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/3000652951/p127836.jpg",alt:"烧录证书流程"}})]),t._v(" "),a("p",[t._v("两种烧录方式的说明如下。")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("使用编程器或烧录器烧录设备证书。")]),t._v(" "),a("p",[t._v("需要您对现有的编程器或烧录器程序进行改造，让PC可以向证书分发服务器申请设备证书，然后通过编程器或烧录器将设备证书烧入到芯片或设备上。")]),t._v(" "),a("p",[t._v("此方案需要在产线上部署多台烧录器或编程器，进行证书烧录。您可以根据设备产量的大小，增加或减少烧录器或编程器的数量。")])]),t._v(" "),a("li",[a("p",[t._v("设备主动获取证书。")]),t._v(" "),a("p",[t._v("需要开发设备固件，使设备上电后，自动检测是否有有效的证书。当发现无有效证书时，主动向证书分发服务器申请设备证书，然后将获得的证书写入NVRAM或Flash。")]),t._v(" "),a("p",[t._v("此方案无需在产线上部署烧录器或编程器，并且多个设备可以同时向证书分发服务器申请设备证书。")])])])])}),[],!1,null,null,null);e.default=l.exports}}]);