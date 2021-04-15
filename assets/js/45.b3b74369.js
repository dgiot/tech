(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{686:function(_,t,v){"use strict";v.r(t);var a=v(8),r=Object(a.a)({},(function(){var _=this,t=_.$createElement,v=_._self._c||t;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("h1",{attrs:{id:"alarm"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#alarm"}},[_._v("#")]),_._v(" Alarm")]),_._v(" "),v("p",[_._v("EMQ X Broker 内置监控与告警功能，目前支持监控 CPU 占用率、（系统、进程）内存占用率、进程数量、规则引擎资源状态、集群脑裂与愈合并进行告警。激活和取消告警都将产生一条警告日志并由 Broker 发布一个主题为 "),v("code",[_._v("$SYS/brokers/<Node>/alarms/activate")]),_._v(" 或 "),v("code",[_._v("$SYS/brokers/<Node>/alarms/deactivate")]),_._v(" 的 MQTT 消息，用户可以通过订阅 "),v("code",[_._v("$SYS/brokers/+/alarms/avtivate")]),_._v(" 和 "),v("code",[_._v("$SYS/brokers/+/alarms/deactivate")]),_._v(" 主题来获取告警通知。")]),_._v(" "),v("p",[_._v("告警通知消息的 Payload 为 Json 格式，包含以下字段：")]),_._v(" "),v("table",[v("thead",[v("tr",[v("th",[_._v("字段")]),_._v(" "),v("th",[_._v("类型")]),_._v(" "),v("th",[_._v("说明")])])]),_._v(" "),v("tbody",[v("tr",[v("td",[_._v("name")]),_._v(" "),v("td",[_._v("string")]),_._v(" "),v("td",[_._v("告警名称")])]),_._v(" "),v("tr",[v("td",[_._v("details")]),_._v(" "),v("td",[_._v("object")]),_._v(" "),v("td",[_._v("告警详情")])]),_._v(" "),v("tr",[v("td",[_._v("message")]),_._v(" "),v("td",[_._v("string")]),_._v(" "),v("td",[_._v("人类易读的告警说明")])]),_._v(" "),v("tr",[v("td",[_._v("activate_at")]),_._v(" "),v("td",[_._v("integer")]),_._v(" "),v("td",[_._v("激活告警的时间，以微秒为单位的 UNIX 时间戳")])]),_._v(" "),v("tr",[v("td",[_._v("deactivate_at")]),_._v(" "),v("td",[_._v("integer / string")]),_._v(" "),v("td",[_._v("取消激活告警的时间，以微秒为单位的 UNIX 时间戳，激活中的告警此字段值为 infinity")])]),_._v(" "),v("tr",[v("td",[_._v("activated")]),_._v(" "),v("td",[_._v("boolean")]),_._v(" "),v("td",[_._v("告警是否处于激活状态")])])])]),_._v(" "),v("p",[_._v("以系统内存占用率过高告警为例，您将收到以下格式的消息：")]),_._v(" "),v("p",[v("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/backend/emqx/advanced/assets/alarms_avtivate_msg.png",alt:"alarms_avtivate_msg.png"}})]),_._v(" "),v("p",[_._v("告警不会重复产生，即如果 CPU 占用率过高告警已经激活，则在其激活期间，不会出现第二个 CPU 占用率过高告警。告警会在被监控项恢复正常后自动取消激活，但同样支持用户手动取消激活（如果用户明确自己不关心该告警）。用户除了可以在 Dashboard 查看当前告警（激活中的告警）与历史告警（已取消激活的告警）以外，还可以通过 EMQ X Broker 提供的 "),v("RouterLink",{attrs:{to:"/zh/backend/emqx/advanced/http-api.html#endpoint-alarms"}},[_._v("HTTP API")]),_._v(" 查询和管理告警。")],1),_._v(" "),v("p",[_._v("EMQ X Broker 允许用户对告警功能进行一定程度的调整以适应实际需要，目前开放了以下配置项：")]),_._v(" "),v("table",[v("thead",[v("tr",[v("th",[_._v("配置项")]),_._v(" "),v("th",[_._v("类型")]),_._v(" "),v("th",[_._v("默认值")]),_._v(" "),v("th",[_._v("说明")])])]),_._v(" "),v("tbody",[v("tr",[v("td",[_._v("os_mon.cpu_check_interval")]),_._v(" "),v("td",[_._v("duration")]),_._v(" "),v("td",[_._v("60s")]),_._v(" "),v("td",[_._v("CPU 占用率的检查间隔")])]),_._v(" "),v("tr",[v("td",[_._v("os_mon.cpu_high_watermark")]),_._v(" "),v("td",[_._v("percent")]),_._v(" "),v("td",[_._v("80%")]),_._v(" "),v("td",[_._v("CPU 占用率高水位，即 CPU 占用率达到多少时激活告警")])]),_._v(" "),v("tr",[v("td",[_._v("os_mon.cpu_low_watermark")]),_._v(" "),v("td",[_._v("percent")]),_._v(" "),v("td",[_._v("60%")]),_._v(" "),v("td",[_._v("CPU 占用率低水位，即 CPU 占用率降低到多少时取消告警")])]),_._v(" "),v("tr",[v("td",[_._v("os_mon.mem_check_interval")]),_._v(" "),v("td",[_._v("duration")]),_._v(" "),v("td",[_._v("60%")]),_._v(" "),v("td",[_._v("内存占用率的检查间隔")])]),_._v(" "),v("tr",[v("td",[_._v("os_mon.sysmem_high_watermark")]),_._v(" "),v("td",[_._v("percent")]),_._v(" "),v("td",[_._v("70%")]),_._v(" "),v("td",[_._v("系统内存占用率高水位，即申请的总内存占比达到多少时激活告警")])]),_._v(" "),v("tr",[v("td",[_._v("os_mon.procmem_high_watermark")]),_._v(" "),v("td",[_._v("percent")]),_._v(" "),v("td",[_._v("5%")]),_._v(" "),v("td",[_._v("进程内存占用率高水位，即单个进程申请的内存占比达到多少时激活告警")])]),_._v(" "),v("tr",[v("td",[_._v("vm_mon.check_interval")]),_._v(" "),v("td",[_._v("duration")]),_._v(" "),v("td",[_._v("30s")]),_._v(" "),v("td",[_._v("进程数量的检查间隔")])]),_._v(" "),v("tr",[v("td",[_._v("vm_mon.process_high_watermark")]),_._v(" "),v("td",[_._v("percent")]),_._v(" "),v("td",[_._v("80%")]),_._v(" "),v("td",[_._v("进程占用率高水位，即创建的进程数量与最大数量限制的占比达到多少时激活告警")])]),_._v(" "),v("tr",[v("td",[_._v("vm_mon.process_low_watermark")]),_._v(" "),v("td",[_._v("percent")]),_._v(" "),v("td",[_._v("60%")]),_._v(" "),v("td",[_._v("进程占用率低水位，即创建的进程数量与最大数量限制的占比降低到多少时取消告警")])]),_._v(" "),v("tr",[v("td",[_._v("alarm.actions")]),_._v(" "),v("td",[_._v("string")]),_._v(" "),v("td",[_._v("log,publish")]),_._v(" "),v("td",[_._v("告警激活时触发的动作，目前仅支持 log 与 publish，即输出日志与发布系统消息")])]),_._v(" "),v("tr",[v("td",[_._v("alarm.size_limit")]),_._v(" "),v("td",[_._v("integer")]),_._v(" "),v("td",[_._v("1000")]),_._v(" "),v("td",[_._v("已取消激活告警的最大保存数量，达到限制后将以 FIFO 原则清理这些告警")])]),_._v(" "),v("tr",[v("td",[_._v("alarm.validity_period")]),_._v(" "),v("td",[_._v("duration")]),_._v(" "),v("td",[_._v("24h")]),_._v(" "),v("td",[_._v("已取消激活告警的最大保存时间，过期的告警将被清理")])])])])])}),[],!1,null,null,null);t.default=r.exports}}]);