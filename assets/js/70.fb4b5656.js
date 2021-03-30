(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{535:function(t,_,v){"use strict";v.r(_);var e=v(42),a=Object(e.a)({},(function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"保留消息"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#保留消息"}},[t._v("#")]),t._v(" 保留消息")]),t._v(" "),v("h2",{attrs:{id:"简介"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[t._v("#")]),t._v(" 简介")]),t._v(" "),v("p",[t._v("服务端收到 Retain 标志为 1 的 PUBLISH 报文时，会将该报文视为保留消息，除了被正常转发以外，保留消息会被存储在服务端，每个主题下只能存在一份保留消息，因此如果已经存在相同主题的保留消息，则该保留消息被替换。")]),t._v(" "),v("p",[t._v("当客户端建立订阅时，如果服务端存在主题匹配的保留消息，则这些保留消息将被立即发送给该客户端。借助保留消息，新的订阅者能够立即获取最近的状态，而不需要等待无法预期的时间，这在很多场景下非常重要的。")]),t._v(" "),v("p",[t._v("EMQ X 默认开启保留消息的功能，可以在 "),v("code",[t._v("etc/emqx.conf")]),t._v(" 中修改 "),v("code",[t._v("mqtt.retain_available")]),t._v(" 为 "),v("code",[t._v("false")]),t._v(" 以禁用保留消息功能。如果 EMQ X 在保留消息功能被禁用的情况下依然收到了保留消息，那么将返回原因码为 0x9A（不支持保留消息）的 DISCONNECT 报文。")]),t._v(" "),v("h2",{attrs:{id:"配置"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[t._v("#")]),t._v(" 配置")]),t._v(" "),v("p",[t._v("EMQ X 的保留消息功能是由 "),v("code",[t._v("emqx_retainer")]),t._v(" 插件实现，该插件默认开启，通过修改 "),v("code",[t._v("emqx_retainer")]),t._v(" 插件的配置，可以调整 EMQ X 储存保留消息的位置，限制接收保留消息数量和 Payload 最大长度，以及调整保留消息的过期时间。关于 EMQ X 插件的更多信息， 请参见 "),v("RouterLink",{attrs:{to:"/zh/backend/emqx/advanced/advanced/plugins.html"}},[t._v("插件")]),t._v("。")],1),t._v(" "),v("p",[v("code",[t._v("emqx_retainer")]),t._v(" 插件默认开启，插件的配置路径为 "),v("code",[t._v("etc/plugins/emqx_retainer.conf")]),t._v("。")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("配置项")]),t._v(" "),v("th",[t._v("类型")]),t._v(" "),v("th",[t._v("可取值")]),t._v(" "),v("th",[t._v("默认值")]),t._v(" "),v("th",[t._v("说明")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("retainer.storage_type")]),t._v(" "),v("td",[t._v("enum")]),t._v(" "),v("td",[v("code",[t._v("ram")]),t._v(", "),v("code",[t._v("disc")]),t._v(", "),v("code",[t._v("disc_only")])]),t._v(" "),v("td",[t._v("ram")]),t._v(" "),v("td",[t._v("ram：仅储存在内存中；"),v("br"),t._v("disc：储存在内存和硬盘中；"),v("br"),t._v("disc_only：仅储存在硬盘中。")])]),t._v(" "),v("tr",[v("td",[t._v("retainer.max_retained_messages")]),t._v(" "),v("td",[t._v("integer")]),t._v(" "),v("td",[t._v(">= 0")]),t._v(" "),v("td",[t._v("0")]),t._v(" "),v("td",[t._v("保留消息的最大数量，0 表示没有限制。保留消息数量超出最大值限制后，可以替换已存在的保留消息，但不能为新的主题储存保留消息。")])]),t._v(" "),v("tr",[v("td",[t._v("retainer.max_payload_size")]),t._v(" "),v("td",[t._v("bytesize")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("1MB")]),t._v(" "),v("td",[t._v("保留消息的最大 Payload 值。Payload 大小超出最大值后 EMQ Ｘ 消息服务器会把收到的保留消息作为普通消息处理。")])]),t._v(" "),v("tr",[v("td",[t._v("retainer.expiry_interval")]),t._v(" "),v("td",[t._v("duration")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("０")]),t._v(" "),v("td",[t._v("保留消息的过期时间，0 表示永不过期。如果 PUBLISH 报文中设置了消息过期间隔，那么以 PUBLISH 报文中的消息过期间隔为准。")])])])]),t._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),v("p",[t._v("EMQ X Enterprise 中可将保留消息存储到多种外部数据库。")])])])}),[],!1,null,null,null);_.default=a.exports}}]);