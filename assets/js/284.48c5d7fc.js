(window.webpackJsonp=window.webpackJsonp||[]).push([[284],{722:function(t,r,o){"use strict";o.r(r);var e=o(7),a=Object(e.a)({},(function(){var t=this,r=t.$createElement,o=t._self._c||r;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("p",[t._v("本文介绍物联网平台支持的CoAP协议规范。")]),t._v(" "),o("h2",{attrs:{id:"协议版本"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#协议版本"}},[t._v("#")]),t._v(" 协议版本")]),t._v(" "),o("p",[t._v("支持RFC 7252 Constrained Application Protocol协议，更多信息，请参见"),o("a",{attrs:{href:"http://tools.ietf.org/html/rfc7252",target:"_blank",rel:"noopener noreferrer"}},[t._v("RFC 7252"),o("OutboundLink")],1),t._v("。")]),t._v(" "),o("h2",{attrs:{id:"通道安全"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#通道安全"}},[t._v("#")]),t._v(" 通道安全")]),t._v(" "),o("p",[t._v("使用DTLS v1.2保证通道安全，更多信息，请参见"),o("a",{attrs:{href:"https://tools.ietf.org/html/rfc6347",target:"_blank",rel:"noopener noreferrer"}},[t._v("DTLS v1.2"),o("OutboundLink")],1),t._v("。")]),t._v(" "),o("h2",{attrs:{id:"开源客户端"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#开源客户端"}},[t._v("#")]),t._v(" 开源客户端")]),t._v(" "),o("p",[o("a",{attrs:{href:"https://coap.technology/impls.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("CoAP Technology"),o("OutboundLink")],1),t._v("。")]),t._v(" "),o("p",[o("strong",[t._v("说明")]),t._v(" 若使用第三方代码，阿里云不提供技术支持。")]),t._v(" "),o("h2",{attrs:{id:"使用限制"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#使用限制"}},[t._v("#")]),t._v(" 使用限制")]),t._v(" "),o("ul",[o("li",[t._v("仅华东2（上海）、华北2（北京）、华南1（深圳）地域支持CoAP通信。")]),t._v(" "),o("li",[t._v("暂时不支持资源发现。")]),t._v(" "),o("li",[t._v("仅支持UDP协议，目前支持DTLS和对称加密两种安全模式。")])]),t._v(" "),o("h2",{attrs:{id:"使用说明"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#使用说明"}},[t._v("#")]),t._v(" 使用说明")]),t._v(" "),o("ul",[o("li",[t._v("CoAP的URI资源和MQTT Topic保持一致，请参见"),o("RouterLink",{attrs:{to:"/zh/product/dgiot/cmp/what_is_mqtt.html",title:"MQTT是基于TCP/IP协议栈构建的异步通信消息协议，是一种轻量级的发布、订阅信息传输协议。可在不可靠的网络环境中进行扩展，适用于设备硬件存储空间或网络带宽有限的场景。使用MQTT协议，消息发送者与接收者不受时间和空间的限制。物联网平台支持设备使用MQTT协议接入。"}},[t._v("MQTT协议规范")]),t._v("。")],1),t._v(" "),o("li",[t._v("Topic规范与MQTT Topic规范一致，CoAP协议内"),o("code",[t._v("coap://host:port/topic/${topic}")]),t._v("接口中的"),o("code",[t._v("${topic}")]),t._v("可以复用MQTT Topic。")]),t._v(" "),o("li",[t._v("客户端缓存认证返回的Token是请求的令牌。")]),t._v(" "),o("li",[t._v("传输的数据大小依赖于MTU的大小，建议在1 KB以内。")]),t._v(" "),o("li",[t._v("如果设备在10分钟内使用CoAP协议上报过数据，则设备在物联网平台控制台显示为在线状态。")])])])}),[],!1,null,null,null);r.default=a.exports}}]);