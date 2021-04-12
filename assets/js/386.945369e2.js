(window.webpackJsonp=window.webpackJsonp||[]).push([[386],{477:function(t,e,r){"use strict";r.r(e);var a=r(8),_=Object(a.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("p",[t._v("在物联网平台为产品开启动态注册功能后，直连设备可使用一型一密安全认证方式完成动态注册，通过MQTT通信协议连接物联网平台。设备先基于TLS建立与物联网平台的连接，获取MQTT连接所需的设备密钥，再断开连接，然后重新建立MQTT连接进行通信。本文介绍动态注册流程。")]),t._v(" "),r("h2",{attrs:{id:"前提条件"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#前提条件"}},[t._v("#")]),t._v(" 前提条件")]),t._v(" "),r("p",[t._v("已完成"),r("a",{attrs:{href:"https://help.aliyun.com/document_detail/74006.htm#task-m1l-zqq-wfb",title:"一型一密认证方式下，同一产品下所有设备可以烧录相同固件，包含相同的产品证书（ProductKey和ProductSecret）。设备发送激活请求时，物联网平台进行身份确认，认证通过，下发设备接入所需信息。",target:"_blank",rel:"noopener noreferrer"}},[t._v("一型一密文档"),r("OutboundLink")],1),t._v("中的以下步骤：")]),t._v(" "),r("p",[r("strong",[t._v("注意")]),t._v(" 目前仅华东2（上海）地域支持设备进行一型一密免预注册认证。")]),t._v(" "),r("ol",[r("li",[t._v("创建产品。")]),t._v(" "),r("li",[t._v("开启动态注册。")]),t._v(" "),r("li",[t._v("添加设备。")]),t._v(" "),r("li",[t._v("产线烧录。")])]),t._v(" "),r("h2",{attrs:{id:"动态注册流程"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#动态注册流程"}},[t._v("#")]),t._v(" 动态注册流程")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/2645559951/p146802.png",alt:"流程"}})]),t._v(" "),r("ol",[r("li",[r("p",[t._v("设备发送CONNECT报文，报文中包含动态注册参数，请求建立连接。")]),t._v(" "),r("p",[r("strong",[t._v("说明")]),t._v(" 目前，动态注册只支持使用TLS建立连接，不支持TCP直连。动态注册时，云端不会校验MQTT连接的Keep Alive（保活时间），因此可以不用设置Keep Alive时间。")]),t._v(" "),r("ul",[r("li",[r("p",[t._v("MQTT连接域名说明：")]),t._v(" "),r("ul",[r("li",[r("p",[t._v("企业版实例：请在"),r("a",{attrs:{href:"https://iot.console.aliyun.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("物联网平台控制台"),r("OutboundLink")],1),t._v("，找到对应的实例，单击实例，进入实例详情页面查看。")]),t._v(" "),r("p",[t._v("具体操作，请参见"),r("a",{attrs:{href:"https://help.aliyun.com/document_detail/147356.htm#section-7lj-bvu-re8",target:"_blank",rel:"noopener noreferrer"}},[t._v("查看实例终端节点"),r("OutboundLink")],1),t._v("。")])]),t._v(" "),r("li",[r("p",[t._v("公共实例：格式为"),r("code",[t._v("${YourProductKey}.iot-as-mqtt.${YourRegionId}.aliyuncs.com:1883")]),t._v("。")]),t._v(" "),r("p",[t._v("其中：")]),t._v(" "),r("ul",[r("li",[r("p",[t._v("${YourProductKey}：请替换为设备所属产品的ProductKey。可登录"),r("a",{attrs:{href:"https://iot.console.aliyun.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("物联网平台控制台"),r("OutboundLink")],1),t._v("，在对应实例的设备详情页面获取。")])]),t._v(" "),r("li",[r("p",[t._v("${YourRegionId}：请替换为您的物联网平台设备所在地域代码。地域代码表达方法，请参见"),r("a",{attrs:{href:"https://help.aliyun.com/document_detail/40654.htm#concept-2459516",title:"本文提供完整的阿里云地域和可用区列表。",target:"_blank",rel:"noopener noreferrer"}},[t._v("地域和可用区"),r("OutboundLink")],1),t._v("。")]),t._v(" "),r("p",[r("strong",[t._v("说明")]),t._v(" 若直连设备使用一型一密免预注册认证方式，则${YourRegionId}值为"),r("code",[t._v("cn-shanghai")]),t._v("。")])])])])])]),t._v(" "),r("li",[r("p",[t._v("CONNECT报文的动态注册参数：")]),t._v(" "),r("ul",[r("li",[r("p",[t._v("当设备属于企业版实例，且使用"),r("a",{attrs:{href:"https://help.aliyun.com/document_detail/74006.htm#task-m1l-zqq-wfb",title:"一型一密认证方式下，同一产品下所有设备可以烧录相同固件，包含相同的产品证书（ProductKey和ProductSecret）。设备发送激活请求时，物联网平台进行身份确认，认证通过，下发设备接入所需信息。",target:"_blank",rel:"noopener noreferrer"}},[t._v("一型一密"),r("OutboundLink")],1),t._v("免预注册认证方式时，动态注册参数如下：")]),t._v(" "),r("div",{staticClass:"language-auto extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v('mqttClientId: clientId+"|securemode=-2,authType=xxxx,random=xxxx,signmethod=xxxx,instanceId=xxxx|"\nmqttUserName: deviceName+"&"+productKey\nmqttPassword: sign_hmac(productSecret,content) \n')])])])]),t._v(" "),r("li",[r("p",[t._v("当设备属于公共实例，或使用"),r("a",{attrs:{href:"https://help.aliyun.com/document_detail/74006.htm#task-m1l-zqq-wfb",title:"一型一密认证方式下，同一产品下所有设备可以烧录相同固件，包含相同的产品证书（ProductKey和ProductSecret）。设备发送激活请求时，物联网平台进行身份确认，认证通过，下发设备接入所需信息。",target:"_blank",rel:"noopener noreferrer"}},[t._v("一型一密"),r("OutboundLink")],1),t._v("预注册认证方式时，动态注册参数如下：")]),t._v(" "),r("div",{staticClass:"language-auto extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v('mqttClientId: clientId+"|securemode=2,authType=xxxx,random=xxxx,signmethod=xxxx|"\nmqttUserName: deviceName+"&"+productKey\nmqttPassword: sign_hmac(productSecret,content) \n')])])])])]),t._v(" "),r("p",[t._v("参数说明：")])])])])]),t._v(" "),r("ul",[r("li",[r("p",[t._v("mqttClientId")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[t._v(" 参数取值中包含的详细参数如下表所示。\n")])])])])]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("参数")]),t._v(" "),r("th",[t._v("说明")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("clientId")]),t._v(" "),r("td",[t._v("客户端ID，可自定义，长度在64个字符内。建议使用设备的MAC地址或SN码，方便您识别区分不同的客户端。")])]),t._v(" "),r("tr",[r("td",[t._v("securemode")]),t._v(" "),r("td",[t._v("安全模式。"),r("br"),t._v(" *    "),r("a",{attrs:{href:"https://help.aliyun.com/document_detail/74006.htm#task-m1l-zqq-wfb",title:"一型一密认证方式下，同一产品下所有设备可以烧录相同固件，包含相同的产品证书（ProductKey和ProductSecret）。设备发送激活请求时，物联网平台进行身份确认，认证通过，下发设备接入所需信息。",target:"_blank",rel:"noopener noreferrer"}},[t._v("一型一密"),r("OutboundLink")],1),t._v("预注册认证方式：固定取值为2。 "),r("br"),t._v(" *   "),r("a",{attrs:{href:"https://help.aliyun.com/document_detail/74006.htm#task-m1l-zqq-wfb",title:"一型一密认证方式下，同一产品下所有设备可以烧录相同固件，包含相同的产品证书（ProductKey和ProductSecret）。设备发送激活请求时，物联网平台进行身份确认，认证通过，下发设备接入所需信息。",target:"_blank",rel:"noopener noreferrer"}},[t._v("一型一密"),r("OutboundLink")],1),t._v("免预注册认证方式：固定取值为-2。")])]),t._v(" "),r("tr",[r("td",[t._v("authType")]),t._v(" "),r("td",[t._v("一型一密认证方式，不同类型将返回不同的认证参数： "),r("br"),t._v(" *   register："),r("a",{attrs:{href:"https://help.aliyun.com/document_detail/74006.htm#task-m1l-zqq-wfb",title:"一型一密认证方式下，同一产品下所有设备可以烧录相同固件，包含相同的产品证书（ProductKey和ProductSecret）。设备发送激活请求时，物联网平台进行身份确认，认证通过，下发设备接入所需信息。",target:"_blank",rel:"noopener noreferrer"}},[t._v("一型一密"),r("OutboundLink")],1),t._v("预注册认证方式，返回DeviceSecret。 "),r("br"),t._v(" *   regnwl："),r("a",{attrs:{href:"https://help.aliyun.com/document_detail/74006.htm#task-m1l-zqq-wfb",title:"一型一密认证方式下，同一产品下所有设备可以烧录相同固件，包含相同的产品证书（ProductKey和ProductSecret）。设备发送激活请求时，物联网平台进行身份确认，认证通过，下发设备接入所需信息。",target:"_blank",rel:"noopener noreferrer"}},[t._v("一型一密"),r("OutboundLink")],1),t._v("免预注册认证方式，返回DeviceToken、ClientID。")])]),t._v(" "),r("tr",[r("td",[t._v("random")]),t._v(" "),r("td",[t._v("随机数。您自定义随机数。")])]),t._v(" "),r("tr",[r("td",[t._v("signMethod")]),t._v(" "),r("td",[t._v("签名算法。目前支持hmacmd5、hmacsha1、hmacsha256。")])]),t._v(" "),r("tr",[r("td",[t._v("instanceId")]),t._v(" "),r("td",[t._v("实例ID。请登录"),r("a",{attrs:{href:"http://iot.console.aliyun.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("物联网平台控制台"),r("OutboundLink")],1),t._v("，在实例概览页面查看。")])])])]),t._v(" "),r("ul",[r("li",[r("p",[t._v("mqttUserName")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[t._v(' 组成结构：`deviceName+"&"+productKey`\n \n 示例：`device1&al123456789`\n')])])])]),t._v(" "),r("li",[r("p",[t._v("mqttPassword")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[t._v(" 计算方法：`sign_hmac(productSecret,content)`\n \n 其中，content的值是提交给服务器的必需参数和值（deviceName、productKey、random）按照字母顺序排序、拼接（无拼接符号）的字符串。然后，将content的值通过mqttClientId中的signMethod指定的算法，使用产品的ProductSecret进行签名计算。\n \n 示例：`hmac_sha1(h1nQFYPZS0mW****, deviceNamedevice1productKeyal123456789random123)`\n")])])])])]),t._v(" "),r("ol",{attrs:{start:"2"}},[r("li",[r("p",[t._v("物联网平台返回CONNECT ACK。")]),t._v(" "),r("ul",[r("li",[t._v("返回0，表示设备动态注册成功。")]),t._v(" "),r("li",[t._v("返回其他值，表示设备动态注册失败。请根据返回的错误码，确定错误原因。")])]),t._v(" "),r("p",[t._v("设备发送连接请求后，物联网平台返回的结果状态码和说明如下表。")])])]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("结果码")]),t._v(" "),r("th",[t._v("消息")]),t._v(" "),r("th",[t._v("说明")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("0")]),t._v(" "),r("td",[t._v("CONNECTION_ACCEPTED")]),t._v(" "),r("td",[t._v("动态注册成功。")])]),t._v(" "),r("tr",[r("td",[t._v("2")]),t._v(" "),r("td",[t._v("IDENTIFIER_REJECTED")]),t._v(" "),r("td",[t._v("参数错误。原因可能是： "),r("br"),t._v(" *   必填参数缺失或格式错误。"),r("br"),t._v(" * +   您使用了TCP直连注册。动态注册只能使用TLS通道。")])]),t._v(" "),r("tr",[r("td",[t._v("3")]),t._v(" "),r("td",[t._v("SERVER_UNAVAILABLE")]),t._v(" "),r("td",[t._v("云端错误。请稍后再试。")])]),t._v(" "),r("tr",[r("td",[t._v("4")]),t._v(" "),r("td",[t._v("BAD_USERNAME_OR_PASSWORD")]),t._v(" "),r("td",[t._v("动态注册失败，鉴权未通过。"),r("br"),t._v(" * 请检查传入的mqttUserName和mqttPassword取值是否正确。")])])])]),t._v(" "),r("ol",{attrs:{start:"3"}},[r("li",[r("p",[t._v("建立连接后，物联网平台使用Topic："),r("code",[t._v("/ext/register")]),t._v("，根据CONNECT报文中的authType，返回不同的认证参数。")]),t._v(" "),r("ul",[r("li",[r("p",[t._v("authType取值为register：一型一密预注册认证方式，返回DeviceSecret。")]),t._v(" "),r("p",[t._v("物联网平台推送的消息Payload格式如下：")]),t._v(" "),r("div",{staticClass:"language-auto extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v('{\n  "productKey" : "***",\n  "deviceName" : "***",\n  "deviceSecret" : "***"\n}\n')])])])]),t._v(" "),r("li",[r("p",[t._v("authType取值为regnwl：一型一密免预注册认证方式，返回ClientID、DeviceToken。")]),t._v(" "),r("p",[t._v("物联网平台推送的消息Payload格式如下：")]),t._v(" "),r("div",{staticClass:"language-auto extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v('{\n  "productKey" : "***",\n  "deviceName" : "***",\n  "clientId" : "***",\n  "deviceToken" : "***"\n}\n')])])])])])]),t._v(" "),r("li",[r("p",[t._v("设备收到并保存DeviceSecret，或ClientID和DeviceToken的组合，断开当前MQTT连接。")]),t._v(" "),r("p",[t._v("设备可以通过发送DISCONNECT报文或直接断开TCP连接，断开当前连接。")]),t._v(" "),r("p",[t._v("如果设备未断开此连接，15秒之后，物联网平台会主动断开连接。")]),t._v(" "),r("p",[t._v("如果您使用Eclipse Paho MQTT客户端，需设置"),r("code",[t._v("MqttConnectOptions.setAutomaticReconnect(false)")]),t._v("关闭自动重连。否则，注册成功且TCP断连后，重连逻辑会发起新的动态注册请求。")])]),t._v(" "),r("li",[r("p",[t._v("设备使用DeviceSecret，或使用ClientID和DeviceToken的组合，再次发起MQTT连接请求，建立设备与物联网平台的连接，进行消息通信。具体操作，请参见"),r("a",{attrs:{href:"https://help.aliyun.com/document_detail/73742.htm#concept-mhv-ghm-b2b",title:"本文主要介绍基于TCP的MQTT连接，连接方式为MQTT客户端直连。",target:"_blank",rel:"noopener noreferrer"}},[t._v("MQTT-TCP连接通信"),r("OutboundLink")],1),t._v("。")])])])])}),[],!1,null,null,null);e.default=_.exports}}]);