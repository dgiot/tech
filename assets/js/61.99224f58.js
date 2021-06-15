(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{619:function(t,s,o){"use strict";o.r(s);var p=o(9),a=Object(p.a)({},(function(){var t=this,s=t.$createElement,o=t._self._c||s;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("p",[o("a",{attrs:{href:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/opc/dgiot_opc.zip",target:"_blank",rel:"noopener noreferrer"}},[t._v("数蛙OPC桥接服务"),o("OutboundLink")],1),t._v(" 实现opc转mqtt功能，支持opc指标扫描和读写")]),t._v(" "),o("h2",{attrs:{id:"使用指南"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#使用指南"}},[t._v("#")]),t._v(" 使用指南")]),t._v(" "),o("p",[t._v("opc的准备配置见（使用KepServerEx进行数据模拟）")]),t._v(" "),o("p",[t._v("下例为：准备完成的OPC Quick Client界面")]),t._v(" "),o("p",[o("img",{attrs:{src:"https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/opc/bridge1.png",alt:"bridge1.png"}})]),t._v(" "),o("p",[t._v("下面将以上例讲解数蛙OPC桥接流程：")]),t._v(" "),o("ul",[o("li",[t._v("使用数蛙OPC桥接服务")])]),t._v(" "),o("p",[t._v("在命令行中执行dgiot_opc.exe")]),t._v(" "),o("p",[o("img",{attrs:{src:"https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/opc/bridge2.png",alt:"bridge2.png"}})]),t._v(" "),o("p",[t._v("输入命令：")]),t._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[t._v("dgiot_opc opcda bridge prod.iotn2n.com\n")])])]),o("p",[o("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/opc/bridge12.png",alt:"bridge12.png"}})]),t._v(" "),o("p",[t._v("登录"),o("a",{attrs:{href:"http://prod.iotn2n.com:18083",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://prod.iotn2n.com:18083"),o("OutboundLink")],1),t._v("查看客户端连接情况(admin:public)")]),t._v(" "),o("p",[o("img",{attrs:{src:"https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/opc/bridge4.png",alt:"bridge4.png"}})]),t._v(" "),o("p",[t._v("可见上例中，客户端ID为2686e。点击客户端ID查看客户端详情。")]),t._v(" "),o("p",[o("img",{attrs:{src:"https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/opc/bridge5.png",alt:"bridge5.png"}})]),t._v(" "),o("p",[t._v("可见，该客户端订阅了主题：dgiot_opc_da")]),t._v(" "),o("p",[t._v("然后在页面左边的菜单栏中点击工具->Websocket,进入配置页面，填入对应的客户端ID后，点击连接。")]),t._v(" "),o("p",[o("img",{attrs:{src:"https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/opc/bridge6.png",alt:"bridge6.png"}})]),t._v(" "),o("p",[t._v("在配置界面的消息模块中填写消息的主题、主题后，点击“发送”")]),t._v(" "),o("p",[o("img",{attrs:{src:"https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/opc/bridge7.png",alt:"bridge7.png"}})]),t._v(" "),o("p",[t._v("消息内容如下：")]),t._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[t._v('{"cmdtype":"read", "opcserver":"Kepware.KEPServerEX.V6", "group":"group", "items":"group.item.中开泵.opc", "noitemid":"000" }\n')])])]),o("table",[o("thead",[o("tr",[o("th",[t._v("字段名")]),t._v(" "),o("th",[t._v("说明")])])]),t._v(" "),o("tbody",[o("tr",[o("td",[t._v("cmdtype")]),t._v(" "),o("td",[t._v("服务端操作客户端的指令，例：“read”为读取操作，“scan”为扫描操作")])]),t._v(" "),o("tr",[o("td",[t._v("opcserver")]),t._v(" "),o("td",[t._v("opc服务器名")])]),t._v(" "),o("tr",[o("td",[t._v("group")]),t._v(" "),o("td",[t._v("对应的通道名")])]),t._v(" "),o("tr",[o("td",[t._v("items")]),t._v(" "),o("td",[t._v("对应的设备标签名")])])])]),t._v(" "),o("p",[t._v("消息成功发送后，页面中的发布消息列表将产生记录，同时客户端收到消息后也会产生响应")]),t._v(" "),o("p",[o("img",{attrs:{src:"https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/opc/bridge8.png",alt:"bridge8.png"}})]),t._v(" "),o("p",[o("img",{attrs:{src:"https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/opc/bridge9.png",alt:"bridge9.png"}})]),t._v(" "),o("p",[t._v("可以见到使用read命令，客户端显示出opc中的模拟数据：THIS_IS_A_TEST")]),t._v(" "),o("p",[t._v("如果在页面上设置服务器订阅主题：dgiot_opc_da_ack，则客户端可将显示出的数据上传至页面中，可见于“订阅消息列表”")]),t._v(" "),o("p",[o("img",{attrs:{src:"https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/opc/bridge10.png",alt:"bridge10.png"}})]),t._v(" "),o("p",[t._v("点击发送后可见订阅消息列表中出现消息：")]),t._v(" "),o("p",[o("img",{attrs:{src:"https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/opc/bridge11.png",alt:"bridge11.png"}})])])}),[],!1,null,null,null);s.default=a.exports}}]);