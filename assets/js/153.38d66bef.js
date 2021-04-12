(window.webpackJsonp=window.webpackJsonp||[]).push([[153],{682:function(t,_,v){"use strict";v.r(_);var a=v(8),e=Object(a.a)({},(function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"mqtt-保留消息"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#mqtt-保留消息"}},[t._v("#")]),t._v(" MQTT 保留消息")]),t._v(" "),v("h2",{attrs:{id:"简介"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[t._v("#")]),t._v(" 简介")]),t._v(" "),v("p",[t._v("服务端收到 Retain 标志为 1 的 PUBLISH 报文时，会将该报文视为保留消息，除了被正常转发以外，保留消息会被存储在服务端，每个主题下只能存在一份保留消息，因此如果已经存在相同主题的保留消息，则该保留消息被替换。")]),t._v(" "),v("p",[t._v("当客户端建立订阅时，如果服务端存在主题匹配的保留消息，则这些保留消息将被立即发送给该客户端。借助保留消息，新的订阅者能够立即获取最近的状态，而不需要等待无法预期的时间，这在很多场景下非常重要的。")]),t._v(" "),v("h2",{attrs:{id:"创建模块"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#创建模块"}},[t._v("#")]),t._v(" 创建模块")]),t._v(" "),v("p",[t._v("MQTT 保留消息模块默认启动，可以通过dashboard页面进行停止和更新。")]),t._v(" "),v("p",[t._v("打开 "),v("a",{attrs:{href:"http://127.0.0.1:18083/#/modules",target:"_blank",rel:"noopener noreferrer"}},[t._v("EMQ X Dashboard"),v("OutboundLink")],1),t._v("，点击左侧的 “模块” 选项卡：")]),t._v(" "),v("p",[v("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/develop_png/zh_CN/modules/assets/modules.png",alt:"modules.png"}})]),t._v(" "),v("p",[t._v("配置相关参数")]),t._v(" "),v("p",[v("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/develop_png/zh_CN/modules/assets/retained_2.png",alt:"retained_2.png"}})]),t._v(" "),v("h2",{attrs:{id:"保留消息配置简介"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#保留消息配置简介"}},[t._v("#")]),t._v(" 保留消息配置简介")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("配置项")]),t._v(" "),v("th",[t._v("类型")]),t._v(" "),v("th",[t._v("可取值")]),t._v(" "),v("th",[t._v("默认值")]),t._v(" "),v("th",[t._v("说明")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("存储类型")]),t._v(" "),v("td",[t._v("enum")]),t._v(" "),v("td",[v("code",[t._v("ram")]),t._v(", "),v("code",[t._v("disc")]),t._v(", "),v("code",[t._v("disc_only")])]),t._v(" "),v("td",[t._v("ram")]),t._v(" "),v("td",[t._v("ram：仅储存在内存中；"),v("br"),t._v("disc：储存在内存和硬盘中；"),v("br"),t._v("disc_only：仅储存在硬盘中。")])]),t._v(" "),v("tr",[v("td",[t._v("最大保留消息数")]),t._v(" "),v("td",[t._v("integer")]),t._v(" "),v("td",[t._v(">= 0")]),t._v(" "),v("td",[t._v("0")]),t._v(" "),v("td",[t._v("保留消息的最大数量，0 表示没有限制。保留消息数量超出最大值限制后，可以替换已存在的保留消息，但不能为新的主题储存保留消息。")])]),t._v(" "),v("tr",[v("td",[t._v("最大保留消息大小")]),t._v(" "),v("td",[t._v("bytesize")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("1MB")]),t._v(" "),v("td",[t._v("保留消息的最大 Payload 值。Payload 大小超出最大值后 EMQ Ｘ 消息服务器会把收到的保留消息作为普通消息处理。")])]),t._v(" "),v("tr",[v("td",[t._v("有效期限")]),t._v(" "),v("td",[t._v("duration")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("０")]),t._v(" "),v("td",[t._v("保留消息的过期时间，0 表示永不过期。如果 PUBLISH 报文中设置了消息过期间隔，那么以 PUBLISH 报文中的消息过期间隔为准。")])])])])])}),[],!1,null,null,null);_.default=e.exports}}]);