(window.webpackJsonp=window.webpackJsonp||[]).push([[292],{730:function(t,_,v){"use strict";v.r(_);var d=v(7),r=Object(d.a)({},(function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"指令任务通道"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#指令任务通道"}},[t._v("#")]),t._v(" 指令任务通道")]),t._v(" "),v("h2",{attrs:{id:"功能概述"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#功能概述"}},[t._v("#")]),t._v(" 功能概述")]),t._v(" "),v("p",[t._v("指令通道是用于下发控制命令的通道。\n通道将命令下发到对应的网关，网关按照通道下发的命令将指令发送给该网关下的对应设备，实现对设备的控制。")]),t._v(" "),v("p",[v("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/backend/dgiot/dgiot_func.png",alt:"架构图"}})]),t._v(" "),v("h2",{attrs:{id:"指令任务通道创建"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#指令任务通道创建"}},[t._v("#")]),t._v(" 指令任务通道创建")]),t._v(" "),v("p",[v("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/product/dgiot/channel/%E6%8C%87%E4%BB%A4%E9%80%9A%E9%81%93.png",alt:"指令通道.png"}})]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("参数")]),t._v(" "),v("th",[t._v("说明")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("通道名称")]),t._v(" "),v("td",[t._v("该通道的名称，用于区分不同的通道")])]),t._v(" "),v("tr",[v("td",[t._v("所属应用")]),t._v(" "),v("td",[t._v("该通道所属的应用")])]),t._v(" "),v("tr",[v("td",[t._v("网关逻辑地址")]),t._v(" "),v("td",[t._v("该通道控制的网关逻辑地址范围")])]),t._v(" "),v("tr",[v("td",[t._v("子网地址")]),t._v(" "),v("td",[t._v("设备在其对应网关下的子网地址")])]),t._v(" "),v("tr",[v("td",[t._v("开始时间")]),t._v(" "),v("td",[t._v("该通道开始运行的时间")])]),t._v(" "),v("tr",[v("td",[t._v("结束时间")]),t._v(" "),v("td",[t._v("该通道终止运行的时间")])]),t._v(" "),v("tr",[v("td",[t._v("采集频率")]),t._v(" "),v("td",[t._v("通道设定的采集频率")])]),t._v(" "),v("tr",[v("td",[t._v("起始记录号")]),t._v(" "),v("td",[t._v("通道设定的查询数据库时的起始记录号")])]),t._v(" "),v("tr",[v("td",[t._v("每页记录数")]),t._v(" "),v("td",[t._v("数据库查询时一查询页的记录数")])]),t._v(" "),v("tr",[v("td",[t._v("总计页数")]),t._v(" "),v("td",[t._v("一共需要查询的页数")])]),t._v(" "),v("tr",[v("td",[t._v("通道ICO")]),t._v(" "),v("td",[t._v("通道的logo图地址")])]),t._v(" "),v("tr",[v("td",[t._v("描述")]),t._v(" "),v("td",[t._v("对该通道的备注")])])])]),t._v(" "),v("p",[t._v("以下例说明：\n"),v("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/product/dgiot/channel/%E6%8C%87%E4%BB%A4%E9%80%9A%E9%81%93%E5%9B%BE.png",alt:"指令通道图.png"}})]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("图例属性")]),t._v(" "),v("th",[t._v("说明")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("通道名称")]),t._v(" "),v("td",[t._v("通道名称：温湿度")])]),t._v(" "),v("tr",[v("td",[t._v("所属应用")]),t._v(" "),v("td",[t._v("该通道所属的应用：admin")])]),t._v(" "),v("tr",[v("td",[t._v("网关逻辑地址")]),t._v(" "),v("td",[t._v("该通道控制的网关逻辑地址范围，这里all指的是该通道下的所有网关")])]),t._v(" "),v("tr",[v("td",[t._v("子网地址")]),t._v(" "),v("td",[t._v("设备在其对应网关下的子网地址，这里all指的是网关下全部设备的子网地址")])]),t._v(" "),v("tr",[v("td",[t._v("开始时间")]),t._v(" "),v("td",[t._v("该通道开始运行的时间，这里为2020-03-26 10:35:10")])]),t._v(" "),v("tr",[v("td",[t._v("结束时间")]),t._v(" "),v("td",[t._v("该通道终止运行的时间，这里为2022-05-28 10:35:10")])]),t._v(" "),v("tr",[v("td",[t._v("采集频率")]),t._v(" "),v("td",[t._v("通道设定的采集频率，这里为10秒一次")])]),t._v(" "),v("tr",[v("td",[t._v("起始记录号")]),t._v(" "),v("td",[t._v("通道设定的查询数据库时的起始记录号，这里从第1号开始")])]),t._v(" "),v("tr",[v("td",[t._v("每页记录数")]),t._v(" "),v("td",[t._v("数据库查询时一查询页的记录数，每页有10条记录")])]),t._v(" "),v("tr",[v("td",[t._v("总计页数")]),t._v(" "),v("td",[t._v("一共需要查询的页数，这里一共查询10页")])]),t._v(" "),v("tr",[v("td",[t._v("通道ICO")]),t._v(" "),v("td",[t._v("通道的logo图地址")])]),t._v(" "),v("tr",[v("td",[t._v("描述")]),t._v(" "),v("td",[t._v("对该通道的备注")])])])])])}),[],!1,null,null,null);_.default=r.exports}}]);