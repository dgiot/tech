(window.webpackJsonp=window.webpackJsonp||[]).push([[339],{433:function(t,a,s){"use strict";s.r(a);var e=s(42),i=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("本文主要介绍基于TCP的MQTT连接，连接方式为MQTT客户端直连。")]),t._v(" "),s("h2",{attrs:{id:"背景信息"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#背景信息"}},[t._v("#")]),t._v(" 背景信息")]),t._v(" "),s("p",[t._v("在进行MQTT CONNECT协议设置时，需注意：")]),t._v(" "),s("ul",[s("li",[t._v("如果同一个设备证书（ProductKey、DeviceName和DeviceSecret）或同一组ProductKey、DeviceName、ClientID、DeviceToken同时用于多个物理设备连接，可能会导致客户端频繁上下线。因为新设备连接认证时，原设备会被迫下线，而设备被下线后，又会自动尝试重新连接。")]),t._v(" "),s("li",[t._v("MQTT连接模式中，设备端"),s("a",{attrs:{href:"https://help.aliyun.com/product/93051.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Link SDK"),s("OutboundLink")],1),t._v("断开后会自动重连。您可以通过日志服务查看设备行为。")])]),t._v(" "),s("h2",{attrs:{id:"mqtt客户端直连"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mqtt客户端直连"}},[t._v("#")]),t._v(" MQTT客户端直连")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("（可选）为保障通信安全，推荐使用TLS加密的连接方式。")]),t._v(" "),s("ul",[s("li",[t._v("设备端Link SDK已配置TLS加密，您无需自行配置。")]),t._v(" "),s("li",[t._v("若您自行开发设备端SDK，需要"),s("a",{attrs:{href:"https://aliyun-iot.oss-cn-hangzhou.aliyuncs.com/cert_pub/root.crt",target:"_blank",rel:"noopener noreferrer"}},[t._v("下载根证书"),s("OutboundLink")],1),t._v("。根证书使用方法，请参见"),s("a",{attrs:{href:"https://tls.mbed.org/kb/how-to/mbedtls-tutorial",target:"_blank",rel:"noopener noreferrer"}},[t._v("mbed TLS"),s("OutboundLink")],1),t._v("。")])])]),t._v(" "),s("li",[s("p",[t._v("使用MQTT客户端连接服务器。连接方法，请参见"),s("a",{attrs:{href:"https://github.com/mqtt/mqtt.github.io/wiki/libraries",target:"_blank",rel:"noopener noreferrer"}},[t._v("开源MQTT客户端"),s("OutboundLink")],1),t._v("。")])]),t._v(" "),s("li",[s("p",[t._v("MQTT连接。")]),t._v(" "),s("p",[t._v("建议您使用设备端SDK接入物联网平台。如果您自行开发接入，连接参数如下。")]),t._v(" "),s("table",{staticClass:"table",attrs:{id:"table-eif-fcq-p6f"}},[s("caption"),s("colgroup",[s("col"),t._v(" "),s("col")]),s("tbody",{staticClass:"tbody",attrs:{id:"tbody-g1c-m5u-nsw"}},[s("tr",{attrs:{id:"row-0b6-lcz-teo"}},[s("td",{staticClass:"entry align-left colsep-1 rowsep-1",attrs:{id:"entry-kw3-s0l-rw8"}},[t._v("接入域名")]),s("td",{staticClass:"entry align-left colsep-1 rowsep-1",attrs:{id:"entry-j50-ijs-a42"}},[s("ul",{staticClass:"ul",attrs:{id:"ul-tpi-w08-3ch"}},[s("li",{staticClass:"li",attrs:{"cond-props":"china",id:"li-nor-6b7-6x8"}},[s("span",{staticClass:"ph",attrs:{"cond-props":"china",id:"d7e51"}},[t._v("企业版实例的接入域名，请在"),s("span",[s("a",{attrs:{href:"https://iot.console.aliyun.com/",target:"_blank"}},[t._v("物联网平台控制台")])]),t._v("，找到对应的实例，单击实例，进入"),s("span",{staticClass:"keyword wintitle",attrs:{id:"d7e56"}},[t._v("实例详情")]),t._v("页面查看。")]),s("p",{staticClass:"p",attrs:{"cond-props":"china",id:"d7e59"}},[t._v("具体操作，请参见"),s("span",[s("a",{attrs:{title:"",href:"https://help.aliyun.com/document_detail/147356.htm#section-7lj-bvu-re8"}},[t._v("查看实例终端节点")])]),t._v("。")])]),s("li",{staticClass:"li",attrs:{"cond-platform":"SBKKlimitout",id:"li-izw-1n3-ut0"}},[t._v("公共实例的接入域名："),s("code",{staticClass:"ph codeph",attrs:{id:"codeph-xxx-ujm-63c"}},[t._v("${YourProductKey}.iot-as-mqtt.${YourRegionId}.aliyuncs.com:1883")]),t._v("。 其中："),s("ul",{staticClass:"ul",attrs:{id:"ul-z99-g2u-6ii"}},[s("li",{staticClass:"li",attrs:{id:"li-aiv-c4j-d7d"}},[s("var",{staticClass:"keyword varname",attrs:{id:"d7e64"}},[t._v("${YourProductKey}")]),t._v("：请替换为设备所属产品的ProductKey。"),s("span",{staticClass:"ph",attrs:{"cond-props":"china",id:"d7e67"}},[t._v("可登录"),s("span",[s("a",{attrs:{href:"https://iot.console.aliyun.com/",target:"_blank"}},[t._v("物联网平台控制台")])]),t._v("，在对应实例的"),s("span",{staticClass:"keyword wintitle",attrs:{id:"d7e72"}},[t._v("设备详情")]),t._v("页面获取。")])]),s("li",{staticClass:"li",attrs:{id:"li-nba-wnf-19d"}},[s("var",{staticClass:"keyword varname",attrs:{id:"varname-er2-bxv-0a9"}},[t._v("${YourRegionId}")]),t._v("："),s("span",{staticClass:"ph",attrs:{id:"ph-snt-7om-sjk"}},[t._v("请替换为您的物联网平台设备所在地域代码。地域代码表达方法，请参见"),s("span",[s("a",{attrs:{title:"本文提供完整的阿里云地域和可用区列表。",href:"https://help.aliyun.com/document_detail/40654.htm#concept-2459516"}},[t._v("地域和可用区")])]),t._v("。")])])])])])])]),s("tr",{attrs:{id:"row-gqj-wp3-5c8"}},[s("td",{staticClass:"entry align-left colsep-1 rowsep-1",attrs:{id:"entry-a0x-vzr-1yx"}},[t._v("可变报头（variable header）：Keep Alive")]),s("td",{staticClass:"entry align-left colsep-1 rowsep-1",attrs:{id:"entry-m37-t0w-a5h"}},[t._v("CONNECT指令中需包含Keep Alive（保活时间）。保活心跳时间取值范围为30秒~1200秒，建议取值300秒以上。若网络不稳定，请将心跳时间设置长一些。如果心跳时间不在保活时间内，物联网平台会拒绝连接。"),s("p",{staticClass:"p",attrs:{id:"p-cem-pmy-npk"}},[t._v("更多说明，请参见下文"),s("span",[s("a",{attrs:{title:"",href:"#section-llx-5ay-oma"}},[t._v("MQTT保活")])]),t._v("。")])])]),s("tr",{attrs:{id:"row-f01-3ch-7qc"}},[s("td",{staticClass:"entry align-left colsep-1 rowsep-1",attrs:{id:"entry-ctt-2hj-a1k"}},[t._v("MQTT的CONNECT报文参数")]),s("td",{staticClass:"entry align-left colsep-1 rowsep-1",attrs:{id:"entry-thr-6kx-xxk"}},[s("ul",{staticClass:"ul",attrs:{id:"ul-107-yu5-py3"}},[s("li",{staticClass:"li",attrs:{id:"li-7nf-lhl-1vl"}},[t._v("一机一密、一型一密预注册认证方式：使用设备证书（ProductKey、DeviceName和DeviceSecret）连接。"),s("pre",{staticClass:"pre codeblock",attrs:{id:"codeblock-789-ir2-ves"}},[s("code",[t._v('mqttClientId: clientId+"|securemode=3,signmethod=hmacsha1,timestamp=132323232|"\nmqttUsername: deviceName+"&"+productKey\nmqttPassword: sign_hmac(deviceSecret,content)')])]),s("ul",{staticClass:"ul",attrs:{id:"ul-dtc-0dm-khd"}},[s("li",{staticClass:"li",attrs:{id:"li-wdr-lmi-uhu"}},[s("span",{staticClass:"keyword parmname",attrs:{id:"parmname-b15-df9-us3"}},[t._v("mqttClientId")]),t._v("：格式中"),s("code",{staticClass:"ph codeph",attrs:{id:"codeph-e38-11x-r50"}},[t._v("| |")]),t._v("内为扩展参数。")]),s("li",{staticClass:"li",attrs:{id:"li-vdm-fud-b63"}},[s("span",{staticClass:"keyword parmname",attrs:{id:"parmname-0s8-9xs-gtr"}},[t._v("clientId")]),t._v("：表示客户端ID，可自定义，长度不可超过64个字符。建议使用设备的MAC地址或SN码，方便您识别区分不同的客户端。")]),s("li",{staticClass:"li",attrs:{id:"li-5zh-nry-2xq"}},[s("span",{staticClass:"keyword parmname",attrs:{id:"parmname-861-kcd-w2i"}},[t._v("securemode")]),t._v("：表示目前安全模式，可选值有2（TLS直连模式）和3（TCP直连模式）。")]),s("li",{staticClass:"li",attrs:{id:"li-8w1-gon-l2q"}},[s("span",{staticClass:"keyword parmname",attrs:{id:"parmname-n0k-why-g26"}},[t._v("signmethod")]),t._v("：表示签名算法类型。支持hmacmd5，hmacsha1和hmacsha256，默认为hmacmd5。")]),s("li",{staticClass:"li",attrs:{id:"li-zpd-pq4-p9y"}},[s("span",{staticClass:"keyword parmname",attrs:{id:"parmname-d0k-z7h-3m3"}},[t._v("timestamp")]),t._v("：表示当前时间毫秒值，可以不传递。")]),s("li",{staticClass:"li",attrs:{id:"li-a8l-fm5-guo"}},[s("span",{staticClass:"keyword parmname",attrs:{id:"parmname-py3-bze-rex"}},[t._v("mqttPassword")]),t._v("：sign签名需把提交给服务器的参数按字典排序后，根据signmethod加签。签名计算示例，请参见"),s("span",[s("a",{attrs:{title:"若您不使用阿里云提供的设备端SDK，而是使用其他方式，自己进行开发使您的设备使用MQTT协议与物联网平台连接，您可以参见本文提供的签名代码示例进行MQTT连接签名。",href:"https://help.aliyun.com/document_detail/116333.htm#concept-188639"}},[t._v("MQTT连接签名示例")])]),t._v("。")]),s("li",{staticClass:"li",attrs:{id:"li-6fg-e6v-kkq"}},[s("span",{staticClass:"keyword parmname",attrs:{id:"parmname-v0k-n4g-loe"}},[t._v("content")]),t._v("的值为提交给服务器的参数（"),s("span",{staticClass:"keyword parmname",attrs:{id:"parmname-dmd-63i-8rs"}},[t._v("ProductKey")]),t._v("、"),s("span",{staticClass:"keyword parmname",attrs:{id:"parmname-iyg-6yn-znd"}},[t._v("DeviceName")]),t._v("、"),s("span",{staticClass:"keyword parmname",attrs:{id:"parmname-kmx-zot-9sf"}},[t._v("timestamp")]),t._v("和"),s("span",{staticClass:"keyword parmname",attrs:{id:"parmname-zej-r5g-smw"}},[t._v("clientId")]),t._v("），按照字母顺序排序， 然后将参数值依次拼接。")])]),s("p",{staticClass:"p",attrs:{id:"p-01h-535-ms9"}},[t._v("示例：")]),s("p",{staticClass:"p",attrs:{id:"p-m03-2qn-cwn"}},[t._v("假设"),s("code",{staticClass:"ph codeph",attrs:{id:"codeph-mmo-hzq-r7o"}},[t._v("clientId = 12345，deviceName = device， productKey = pk， timestamp = 789，signmethod=hmacsha1，deviceSecret=secret")]),t._v("，那么使用TCP方式提交给MQTT的参数如下：")]),s("pre",{staticClass:"pre codeblock",attrs:{id:"codeblock-b5w-3oi-780"}},[s("code",[t._v('mqttclientId=12345|securemode=3,signmethod=hmacsha1,timestamp=789|\nmqttUsername=device&pk\nmqttPassword=hmacsha1("secret","clientId12345deviceNamedeviceproductKeypktimestamp789").toHexString(); ')])]),s("p",{staticClass:"p",attrs:{id:"p-3a0-gd4-u0a"}},[t._v("加密后的Password为二进制转16制字符串，示例结果为：")]),s("pre",{staticClass:"pre codeblock",attrs:{id:"codeblock-a8h-bhp-17s"}},[s("code",[t._v("FAFD82A3D602B37FB0FA8B7892F24A477F85****")])])]),s("li",{staticClass:"li",attrs:{id:"li-f5h-xfu-yhs"}},[t._v("一型一密免预注册认证方式：使用ProductKey、DeviceName、ClientID、DeviceToken连接。"),s("pre",{staticClass:"pre codeblock",attrs:{id:"codeblock-vo1-m5i-7jh"}},[s("code",[t._v('mqttClientId: clientId+"|securemode=-2,authType=connwl|"\nmqttUsername: deviceName+"&"+productKey\nmqttPassword: deviceToken')])]),s("ul",{staticClass:"ul",attrs:{id:"ul-n2p-tzi-y37"}},[s("li",{staticClass:"li",attrs:{id:"li-2lw-n8e-4yb"}},[s("span",{staticClass:"keyword parmname",attrs:{id:"parmname-epf-w44-ear"}},[t._v("mqttClientId")]),t._v("：格式中"),s("code",{staticClass:"ph codeph",attrs:{id:"codeph-w8k-o4n-t8n"}},[t._v("| |")]),t._v("内为扩展参数。")]),s("li",{staticClass:"li",attrs:{id:"li-o7y-rxa-jsa"}},[s("span",{staticClass:"keyword parmname",attrs:{id:"parmname-ekl-dem-bvd"}},[t._v("clientId")]),t._v("、"),s("span",{staticClass:"keyword parmname",attrs:{id:"parmname-lwi-g9i-3a3"}},[t._v("deviceToken")]),t._v("：设备动态注册时获得的ClientID、DeviceToken，请参见"),s("span",[s("a",{attrs:{title:"直连设备可通过MQTT通道进行动态注册，即使用一型一密连接认证方式连接物联网平台。设备先基于TLS建立与物联网平台的连接，获取TCP连接所需信息，再断开连接，并重新建立TCP连接进行通信。下面介绍动态注册流程。",href:"https://help.aliyun.com/document_detail/132111.htm#task-1545804"}},[t._v("基于MQTT通道的设备动态注册")])]),t._v("。")]),s("li",{staticClass:"li",attrs:{id:"li-vte-26g-8l2"}},[s("span",{staticClass:"keyword parmname",attrs:{id:"parmname-n9m-qss-5i3"}},[t._v("securemode")]),t._v("：表示目前安全模式，采用一型一密免预注册时，固定取值为-2。")]),s("li",{staticClass:"li",attrs:{id:"li-5i8-ahk-n0k"}},[s("span",{staticClass:"keyword parmname",attrs:{id:"parmname-h42-614-su2"}},[t._v("authType")]),t._v("：表示认证方式，采用一型一密免预注册时，固定取值为connwl。")])])])])])])])])])]),t._v(" "),s("h2",{attrs:{id:"示例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#示例"}},[t._v("#")]),t._v(" 示例")]),t._v(" "),s("p",[t._v("使用开源MQTT客户端接入物联网平台的示例，请参见：")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://help.aliyun.com/document_detail/146503.htm#task-2359926",title:"本示例介绍如何调用Go语言的Paho MQTT类库连接阿里云物联网平台，并进行消息收发。",target:"_blank",rel:"noopener noreferrer"}},[t._v("Paho-MQTT Go接入示例"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://help.aliyun.com/document_detail/146505.htm#task-2360906",title:"本文档介绍如何使用C#语言的Paho MQTT类库接入阿里云物联网平台，并进行物模型数据通信。",target:"_blank",rel:"noopener noreferrer"}},[t._v("Paho-MQTT C#接入示例"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://help.aliyun.com/document_detail/146611.htm#task-2361871",title:"本文介绍如何使用Paho提供的嵌入式C语言MQTT开源工程接入阿里云物联网平台，并进行消息收发。",target:"_blank",rel:"noopener noreferrer"}},[t._v("Paho-MQTT C接入示例"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://help.aliyun.com/document_detail/146631.htm#task-2362406",title:"本文档介绍如何使用Java语言的Paho MQTT库接入阿里云物联网平台，并进行物模型消息通信。",target:"_blank",rel:"noopener noreferrer"}},[t._v("Paho-MQTT Java接入示例"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://help.aliyun.com/document_detail/146630.htm#task-2362441",title:"本文介绍如何使用Paho Android Service接入阿里云物联网平台，并进行数据收发。",target:"_blank",rel:"noopener noreferrer"}},[t._v("Paho-MQTT Android接入示例"),s("OutboundLink")],1)])]),t._v(" "),s("h2",{attrs:{id:"mqtt保活"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mqtt保活"}},[t._v("#")]),t._v(" MQTT保活")]),t._v(" "),s("p",[t._v("设备端在保活时间间隔内，至少需要发送一次报文，包括ping请求。")]),t._v(" "),s("p",[t._v("连接保活时间的取值范围为30秒~1200秒。建议取值300秒以上。")]),t._v(" "),s("p",[t._v("从物联网平台发送CONNACK响应CONNECT消息时，开始心跳计时。收到PUBLISH、SUBSCRIBE、PING或 PUBACK消息时，会重置计时器。超过指定1.5倍心跳时间未收到消息（指定心跳时间乘以1.5），服务器将自动断开连接。")])])}),[],!1,null,null,null);a.default=i.exports}}]);