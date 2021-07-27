(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{505:function(t,o,s){"use strict";s.r(o);var p=s(7),a=Object(p.a)({},(function(){var t=this,o=t.$createElement,s=t._self._c||o;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"opc通道使用指南"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#opc通道使用指南"}},[t._v("#")]),t._v(" OPC通道使用指南")]),t._v(" "),s("h2",{attrs:{id:"前言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),s("p",[t._v("DG-IoTOPC通道提供自动化扫描OPC客户端，自动采集储存点位信息，自动生成时序数据上云，并支持在DG-IoT平台上的实时组态展示。\n使用DG-IoT提供的OPC通道，无需任何复杂操作，只需几步操作即可实现全天候、无限制的OPC数据采集、监控。\n使用步骤大体为3步：1.平台，KEPServer端配置完成 2.通过dgiot_opc.exe(DG-IoTOPC桥接工具)将数据发送给平台 3.在平台上启动通道（可能需要多试几次）。即可在平台上看到OPC数据。")]),t._v(" "),s("p",[t._v("接入流程图：\n"),s("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/opc/OPC%20DA%E6%B5%81%E7%A8%8B%E5%9B%BE.png",alt:"OPC DA流程图.png"}})]),t._v(" "),s("h2",{attrs:{id:"使用注意事项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用注意事项"}},[t._v("#")]),t._v(" 使用注意事项")]),t._v(" "),s("p",[t._v("1.DG-IoT平台上使用opc通道的产品的"),s("strong",[t._v("产品名称")]),t._v("必须和KEPServer端对应中"),s("strong",[t._v("通道名称")]),t._v("一致。")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/opc/%E6%B3%A8%E6%84%8F%E4%BA%8B%E9%A1%B91.png",alt:"注意事项1.png"}})]),t._v(" "),s("p",[t._v("2.DG-IoT平台上产品下的从属设备的"),s("strong",[t._v("设备编号")]),t._v("（不是设备名称）必须和KEPServer端中通道下的"),s("strong",[t._v("设备名称")]),t._v("一致。")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/opc/%E6%B3%A8%E6%84%8F%E4%BA%8B%E9%A1%B92.png",alt:"注意事项2.png"}})]),t._v(" "),s("p",[t._v("3.DG-IoT上每个使用opc通道的产品，在物接入界面添加通道时，记住一个产品配一个通道，不要共用通道。例如：有创建2个产品分别记为产品1，产品2，那么需要建立2个opc通道，记为通道1，通道2，\n产品1->通道1，产品2->通道2。")]),t._v(" "),s("p",[t._v("4.KEPServer端中创建标识时，请务必填写说明，该说明项会用于生成物模型名称。\n"),s("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/opc/%E6%B3%A8%E6%84%8F%E4%BA%8B%E9%A1%B93.png",alt:"注意事项3.png"}})]),t._v(" "),s("p",[s("strong",[t._v("5")]),t._v(". 在DG-IoT平台创建产品、设备以及配置KepServer的操作过程中，凡是取名时，请尽量使用"),s("strong",[t._v("小写英语字母")]),t._v("，"),s("strong",[t._v('绝对不要在命名中使用下划线"_"')]),t._v("。\n如：创建产品时产品名称可以是opc01，但不要使用opc_01,其他命名同理。（平台上的产品分组、设备名称，KEPServer端中说明项无需遵守本条，其相当于昵称，可随意）")]),t._v(" "),s("ol",{attrs:{start:"6"}},[s("li",[t._v("产品是设备的抽象合集，具体在这里就是产品下的设备的属性必须是一致的，"),s("strong",[t._v("不要在KEPServer端的同一通道下创建具有不同属性的设备")]),t._v("。\n同时KEPServer端中，"),s("strong",[t._v("不要创建名字相同的设备（即使是在不同的通道下）")]),t._v("。")])]),t._v(" "),s("p",[t._v("7.通道中订阅Topic项必须和使用桥接服务软件dgiot_opc.exe时输入的Topic一致，否则无法正常实现功能。\n提示：Topic相当于桥接服务软件dgiot_opc.exe与通道中订阅Topic项的密钥对，只有一致时，才能正确识别彼此。\n同时，注意有没有在不同的通道中使用了相同的Topic，确认自己使用的Topic的唯一性后再启动通道。")]),t._v(" "),s("h2",{attrs:{id:"操作步骤"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#操作步骤"}},[t._v("#")]),t._v(" 操作步骤")]),t._v(" "),s("ul",[s("li",[s("em",[t._v("准备工作")])])]),t._v(" "),s("p",[t._v("OPC软件操作见"),s("RouterLink",{attrs:{to:"/zh/blog/study/opc/keepserver.html"}},[t._v("OPC数据模拟")]),s("br"),t._v("\nOPC桥接操作及工具见"),s("RouterLink",{attrs:{to:"/zh/blog/study/opc/bridge.html"}},[t._v("OPC数据桥接")]),t._v(".")],1),t._v(" "),s("p",[t._v("1.桥接准备:\n"),s("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/opc/%E6%A1%A5%E6%8E%A5%E5%87%86%E5%A4%87.png",alt:"桥接准备.png"}})]),t._v(" "),s("p",[t._v("2.OPC软件准备：\n"),s("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/opc/opc%E8%BD%AF%E4%BB%B6%E5%87%86%E5%A4%87.png",alt:"opc软件准备.png"}}),t._v("\n在配置界面中选中项目 -> 点击编辑-> 属性-> OPC DA -> “在浏览时包括标记属性” 选为“是” -> 点击应用。")]),t._v(" "),s("p",[t._v("最后启动OPC quick client\n"),s("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/opc/%E5%90%AF%E5%8A%A8OPC%E5%AE%A2%E6%88%B7%E7%AB%AF.png",alt:"启动OPC客户端.png"}})]),t._v(" "),s("p",[t._v("3.DG-IoT平台准备")]),t._v(" "),s("p",[t._v("先在通道管理-> 创建通道 -> 选择OPC采集通道 -> 点击确定，创建OPC通道\n"),s("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/opc/%E5%88%9B%E5%BB%BAopc%E9%80%9A%E9%81%93.png",alt:"创建opc通道.png"}})]),t._v(" "),s("p",[t._v("然后在对应的产品的物接入中中添加OPC采集通道\n"),s("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/opc/%E7%89%A9%E6%8E%A5%E5%85%A5.png",alt:"物接入.png"}})]),t._v(" "),s("p",[t._v("完成上述步骤后，可见下述情形：")]),t._v(" "),s("p",[t._v("1.桥接界面：\n"),s("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/opc/%E6%A1%A5%E6%8E%A5shell%E6%83%85%E5%BD%A2.png",alt:"桥接shell情形.png"}})]),t._v(" "),s("p",[t._v("2.通道日志：\n"),s("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/opc/OPC%E9%80%9A%E9%81%93%E6%97%A5%E5%BF%97.png",alt:"OPC通道日志.png"}})]),t._v(" "),s("p",[t._v("此时OPC数据已成功上传。")]),t._v(" "),s("p",[s("em",[t._v("注意事项")])]),t._v(" "),s("ul",[s("li",[t._v('1.为OPC中各对象命名时，不要使用下划线"'),s("em",[t._v('", 不要使用大写字母。正确命名：speed，错误命名：Speed或者Speed')]),t._v("。")]),t._v(" "),s("li",[t._v("2.请不要在创建OPC通道时修改OPC服务器和OPC分组的值。")])])])}),[],!1,null,null,null);o.default=a.exports}}]);