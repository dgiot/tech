(window.webpackJsonp=window.webpackJsonp||[]).push([[392],{636:function(e,t,r){"use strict";r.r(t);var v=r(8),d=Object(v.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("p",[e._v("使用MQTT接入数蛙物联网平台的设备，接收平台消息需先订阅相关Topic。物联网平台提供的设备端C语言Link SDK 3.1、3.2和4.x版本已支持自动订阅Topic。本文主要介绍支持自动订阅的Topic列表。")]),e._v(" "),r("h2",{attrs:{id:"背景信息"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#背景信息"}},[e._v("#")]),e._v(" 背景信息")]),e._v(" "),r("p",[e._v("物联网平台中，服务端和设备端通过Topic来实现消息通信。设备端如需使用物联网平台的多种功能，必须先订阅相关的Topic。设备端从订阅到正常工作的整个过程较耗时，为缩短设备进入正常工作状态的时间，物联网平台针对本身的多种功能，提供自动订阅Topic服务，无需设备发送订阅请求，即可通过相关Topic把消息发送给设备。")]),e._v(" "),r("p",[r("strong",[e._v("说明")])]),e._v(" "),r("p",[e._v("设备使用C语言的Link SDK3.1、3.2或4.x成功接入物联网平台后，云端系统即可通过设备端已自动订阅Topic发送下行消息。\n当设备被删除销毁，或设备端通过aiot_mqtt_unsub接口主动取消订阅成功时，云端不会再将相关消息自动发送给设备。")]),e._v(" "),r("p",[e._v("Topic列表")]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("所属功能点")]),e._v(" "),r("th",[e._v("主题")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[e._v("物模型通信")]),e._v(" "),r("td",[e._v("/sys/${productKey}/${deviceName}/thing/model/down_raw "),r("br"),e._v(" /sys/${productKey}/${deviceName}/thing/model/up_raw_reply"),r("br"),e._v(" /sys/${productKey}/${deviceName}/thing/event/+/post_reply"),r("br"),e._v(" /sys/${productKey}/${deviceName}/thing/deviceinfo/update_reply"),r("br"),e._v(" /sys/${productKey}/${deviceName}/thing/deviceinfo/delete_reply"),r("br"),e._v(" /sys/${productKey}/${deviceName}/thing/dynamicTsl/get_reply"),r("br"),e._v(" /sys/${productKey}/${deviceName}/thing/dsltemplate/get_reply "),r("br"),e._v(" /sys/${productKey}/${deviceName}/rrpc/request/+ "),r("br"),e._v("   /sys/${productKey}/${deviceName}/thing/service/property/set"),r("br"),e._v("   /sys/${productKey}/${deviceName}/thing/service/property/get "),r("br"),e._v("   /sys/${productKey}/${deviceName}/thing/event/property/history/post_reply "),r("br"),e._v("  /sys/${productKey}/${deviceName}/thing/service/+")])]),e._v(" "),r("tr",[r("td",[e._v("子设备管理")]),e._v(" "),r("td",[e._v("/sys/${productKey}/${deviceName}/thing/gateway/permit "),r("br"),e._v(" /sys/${productKey}/${deviceName}/thing/topo/change"),r("br"),e._v("   /sys/${productKey}/${deviceName}/thing/sub/register_reply"),r("br"),e._v("  /sys/${productKey}/${deviceName}/thing/sub/unregister_reply "),r("br"),e._v("   /sys/${productKey}/${deviceName}/thing/topo/add_reply "),r("br"),e._v("  /sys/${productKey}/${deviceName}/thing/topo/delete_reply "),r("br"),e._v("  /sys/${productKey}/${deviceName}/thing/disable_reply "),r("br"),e._v("  /sys/${productKey}/${deviceName}/thing/topo/get_reply")])]),e._v(" "),r("tr",[r("td",[e._v("固件升级")]),e._v(" "),r("td",[e._v("/ota/device/upgrade/${productKey}/${deviceName} "),r("br"),e._v("   /ota/device/request/${productKey}/${deviceName}")])]),e._v(" "),r("tr",[r("td",[e._v("远程配置")]),e._v(" "),r("td",[e._v("/sys/${productKey}/${deviceName}/thing/config/push "),r("br"),e._v("   /sys/${productKey}/${deviceName}/thing/config/get_reply")])]),e._v(" "),r("tr",[r("td",[e._v("本地通信")]),e._v(" "),r("td",[e._v("/sys/${productKey}/${deviceName}/thing/lan/prefix/get_reply "),r("br"),e._v("   /sys/${productKey}/${deviceName}/thing/lan/blacklist/update_reply "),r("br"),e._v("  /sys/${productKey}/${deviceName}/thing/lan/prefix/update")])]),e._v(" "),r("tr",[r("td",[e._v("影子设备")]),e._v(" "),r("td",[e._v("/sys/${productKey}/${deviceName}/thing/property/desired/get_reply "),r("br"),e._v(" /sys/${productKey}/${deviceName}/thing/property/desired/delete_reply "),r("br"),e._v(" /shadow/get/${productKey}/${deviceName}")])]),e._v(" "),r("tr",[r("td",[e._v("设备重置上报应答")]),e._v(" "),r("td",[e._v("/sys/${productKey}/${deviceName}/thing/reset_reply")])]),e._v(" "),r("tr",[r("td",[e._v("云端响应设备接入")]),e._v(" "),r("td",[e._v("/sys/${productKey}/${deviceName}/thing/awss/enrollee/match_reply "),r("br"),e._v("   /sys/${productKey}/${deviceName}/thing/awss/enrollee/checkin")])]),e._v(" "),r("tr",[r("td",[e._v("云端响应子设备接入")]),e._v(" "),r("td",[e._v("/sys/${productKey}/${deviceName}/thing/awss/enrollee/found_reply "),r("br"),e._v("  /sys/${productKey}/${deviceName}/thing/cipher/get_reply "),r("br"),e._v(" /sys/${productKey}/${deviceName}/thing/awss/device/switchap")])]),e._v(" "),r("tr",[r("td",[e._v("子设备一型一密")]),e._v(" "),r("td",[e._v("/sys/${productKey}/${deviceName}/thing/proxy/provisioning/product_register_reply")])]),e._v(" "),r("tr",[r("td",[e._v("全球统一激活中心")]),e._v(" "),r("td",[e._v("/sys/${productKey}/${deviceName}/thing/bootstrap/config/push")])]),e._v(" "),r("tr",[r("td",[e._v("统一通知下发接口请求")]),e._v(" "),r("td",[e._v("/sys/${productKey}/${deviceName}/_thing/event/notify")])]),e._v(" "),r("tr",[r("td",[e._v("统一消息上报接口应答")]),e._v(" "),r("td",[e._v("/sys/${productKey}/${deviceName}/_thing/service/post_reply")])]),e._v(" "),r("tr",[r("td",[e._v("任务管理")]),e._v(" "),r("td",[e._v("/sys/{productKey}/{deviceName}/thing/job/notify "),r("br"),e._v(" /sys/{productKey}/{deviceName}/thing/job/get_reply "),r("br"),e._v(" /sys/{productKey}/{deviceName}/thing/job/update_reply")])])])])])}),[],!1,null,null,null);t.default=d.exports}}]);