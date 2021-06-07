(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{551:function(n,e,t){"use strict";t.r(e);var a=t(9),i=Object(a.a)({},(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("p",[n._v("数蛙云组态是数蛙科技有限公司自主设计、研发的开源web绘图工具，拥有为电力能源、水利、物联网、工业互联网、智慧城市、智慧医疗、智慧农业、IT运维等提供解决方案的可视化平台。Topology具有跨平台、高效、可扩展、实时监控、动态交互、支持自动算法等特点，最大程度减少研发和运维的成本，并致力于普通业务人员0代码开发实现web组态、SCADA等场景。")]),n._v(" "),t("h2",{attrs:{id:"设计概要"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#设计概要"}},[n._v("#")]),n._v(" 设计概要")]),n._v(" "),t("p",[t("a",{attrs:{href:"https://konvajs.org/docs/overview.html",target:"_blank",rel:"noopener noreferrer"}},[n._v("konvajs"),t("OutboundLink")],1)]),n._v(" "),t("p",[n._v("面向Iot的物可视化设计，视图模型层、数据模型层与设备模型层的对应关系如下：")]),n._v(" "),t("table",[t("thead",[t("tr",[t("th",[n._v("Model Name")]),n._v(" "),t("th",[n._v("Level1")]),n._v(" "),t("th",[n._v("Level2")]),n._v(" "),t("th",[n._v("Level3")]),n._v(" "),t("th",[n._v("Level4")])])]),n._v(" "),t("tbody",[t("tr",[t("td",[n._v("View Model")]),n._v(" "),t("td",[n._v("Stage")]),n._v(" "),t("td",[n._v("Layer")]),n._v(" "),t("td",[n._v("Group")]),n._v(" "),t("td",[n._v("Shape")])]),n._v(" "),t("tr",[t("td",[n._v("Data Model")]),n._v(" "),t("td",[n._v("App")]),n._v(" "),t("td",[n._v("Time")]),n._v(" "),t("td",[n._v("Device")]),n._v(" "),t("td",[n._v("Thing")])]),n._v(" "),t("tr",[t("td",[n._v("Device Model")]),n._v(" "),t("td",[n._v("App")]),n._v(" "),t("td",[n._v("Time")]),n._v(" "),t("td",[n._v("Device")]),n._v(" "),t("td",[n._v("Thing")])])])]),n._v(" "),t("p",[n._v("数蛙云组态将通过如下示例关系建立起数据孪生的可视化消息路由，让物能跃然屏上，活起来，动起来。")]),n._v(" "),t("p",[n._v("Stage对用户域的应用(Project),Layer对应时间域,Group对应空间域的Device,Shape对那个数据域的物模型内的指标集\nLayer有Now和Next两个状态,在消息的渠道下不断刷新Vie内的设备数据")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("---------------------------------------------------------------------------------------------------------\n|        View Model           |         Data Model               |        Device Model                   |\n----------------------------------------------------------------------------------------------------------\n|              Stage          |                    App           |                   App                 |\n|                |            |                      |           |                     |                 |\n|         +------+------+     |            +------+------+       |              +------+------+          |\n|         |             |     |           |             |        |              |             |          |\n| Layer(now)      Layer(next) |         Now           Next       |            Now            Next       | \n|         |             |     |           |             |        |              |             |          |\n|   +-----+-----+     Group   |      +-----+-----+     Device    |         +-----+-----+   Device       |\n|   |           |             |      |           |               |         |           |                 | \n| Group       Group           |     Device       Device          |      Device       Device              |\n|   |           |             |       |           |              |        |           |                  |\n|   +       +---+---+         |       +       +---+-------+      |        +       +---+-------+          |\n|   |       |       |         |       |       |           |      |        |       |           |          |\n|Shape   Group    Shape       |     Thing   SubDevice    Thing   |    Thing   SubDevice    Thing         |\n|           |                 |                 |                |               |                       |\n|           +                 |                 +                |               +                       |\n|           |                 |                 |                |               |                       |\n|         Shape               |               Thing              |             Thing                     |\n----------------------------------------------------------------------------------------------------------  \n| konva.findone(Id)  <-----\x3e mqtt < -----\x3e parse.get_object(Id) <---\x3e channel <-----\x3e modbus/plc/opc/ip  |\n----------------------------------------------------------------------------------------------------------\n")])])]),t("h2",{attrs:{id:"详细设计"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#详细设计"}},[n._v("#")]),n._v(" 详细设计")]),n._v(" "),t("p",[t("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/backend/dgiot/dgiot_func.png",alt:"dgiot_func.png"}})]),n._v(" "),t("p",[t("a",{attrs:{href:"https://github.com/dgiot/dgiot_topo",target:"_blank",rel:"noopener noreferrer"}},[n._v("数蛙云组态"),t("OutboundLink")],1),n._v("的主要是三个目标:")]),n._v(" "),t("ol",[t("li",[n._v("通过UI交互，辅助行业领域的专家建立起设备域中设备指标集与数据域中物模型指标集之间的消息路由关系,生成设备组态库")]),n._v(" "),t("li",[n._v("通过前一步建立的消息路由关系，自动将单个设备指标信息实时同步到组态大屏中，实现数字孪生的可视化呈现")]),n._v(" "),t("li",[n._v("基于前两步的设备组态库与消息路由关系，添加多设备在工业现场画布中，实现工业现场的实时可视化呈现")])]),n._v(" "),t("h3",{attrs:{id:"单设备组态"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#单设备组态"}},[n._v("#")]),n._v(" 单设备组态")]),n._v(" "),t("p",[n._v("单设备组态针对 nodeype=0,1的设备，对应传感器产品和网关产品")]),n._v(" "),t("ol",[t("li",[n._v("DG-IOT通过数据采集通道自动扫描功能，收集设备域中的指标集，并可视化呈现到组态大屏中，")]),n._v(" "),t("li",[n._v("行业专家在组态大屏选择与业务匹配的设备指标创建产品与物模型")]),n._v(" "),t("li",[n._v("DG-IOT通过mqtt实时传递设备状态数据到组态大屏,同时存储设备数据到时序数据库")]),n._v(" "),t("li",[n._v("DG-IOT回放时序数据中的设备状态数据到组态大屏，对设备数据信息可视化诊断分析")])]),n._v(" "),t("p",[n._v("物模型示例:")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v(' {\n   "properties": [\n     {\n       "name": "互感器",\n       "dataForm": {\n         "rate": 1,\n         "offset": 0,\n         "address": "0000",\n         "control": "%s",\n         "slaveid": "1",\n         "protocol": "modbus",\n         "quantity": 3,\n         "strategy": "20",\n         "byteorder": "big",\n         "collection": "%s",\n         "operatetype": "holdingRegister",\n         "originaltype": "int16"\n       },\n       "dataType": {\n         "type": "int",\n         "specs": {\n           "max": 9999,\n           "min": 0,\n           "step": 0,\n           "unit": ""\n         }\n       },\n       "required": true,\n       "accessMode": "r",\n       "identifier": "Acrel"\n     }\n ]\n }\n')])])]),t("p",[n._v("组态数据模型示例")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v(' {\n   "konva": {\n      "Stage": {\n       "id": "stage_9c5930e565",\n       "width": 1643,\n       "height": 248\n     },\n     "Layer": {\n       "x": 480,\n       "y": 21,\n       "id": "layer_9c5930e565",\n       "fill": "#e579f2",\n       "text": "16",\n       "fontSize": 26,\n       "fontFamily": "Calibri"\n     },\n     "Group": {\n       "x": 120,\n       "y": 40,\n       "id": "group_9c5930e565",\n       "rotation": 20\n     },\n     "Shape": [\n       {\n         "x": 480,\n         "y": 21,\n         "id": "Acrel",\n         "fill": "#e579f2",\n         "text": "16",\n         "fontSize": 26,\n         "fontFamily": "Calibri"\n       }\n     ]\n   }\n }\n')])])]),t("p",[n._v("消息交互示例:\ntopic:  thing/[deviceid]/konva\npayload:")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('{\n    "konva":{\n        "Stage":{\n            "id":"stage_9c5930e565",\n            "width":1643,\n            "height":248\n        },\n        "Layer":{\n            "x":480,\n            "y":21,\n            "id":"layer_9c5930e565",\n            "fill":"#e579f2",\n            "text":"16",\n            "fontSize":26,\n            "fontFamily":"Calibri"\n        },\n        "Group":{\n            "x":120,\n            "y":40,\n            "id":"group_9c5930e565",\n            "rotation":20\n        },\n        "Shape":[\n            {\n                "x":480,\n                "y":21,\n                "id":[shapeid],\n                "fill":"#e579f2",\n                "text":"16",\n                "fontSize":26,\n                "fontFamily":"Calibri"\n            }\n        ]\n    }\n}\n')])])]),t("p",[n._v("deviceid与shapeid可见 DG-IOT唯一标识计算方法,后端与页面之间的数据传递用base64加密传输\nShape是消息体必选项，Stage/Layer/Group是可选项")]),n._v(" "),t("h3",{attrs:{id:"多设备组态"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#多设备组态"}},[n._v("#")]),n._v(" 多设备组态")]),n._v(" "),t("p",[n._v("多设备组态是单设备组态的聚合,存储在nodetype=2的产品中，对应DG-IOT平台中group,是设备容器，直接存储最终的组态模型数据")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('   {\n       "attrs": {\n           "width": 1643,\n           "height": 374,\n           "id": "G3$3H"\n       },\n       "className": "Stage",\n       "children": [\n           {\n               "attrs": {},\n               "className": "Layer",\n               "children": [\n                   {\n                       "attrs": {\n                           "id": "opening",\n                           "x": 49,\n                           "y": 374,\n                           "text": "15",\n                           "fontSize": 29,\n                           "fontFamily": "Calibri",\n                           "fill": "#f2ec79"\n                       },\n                       "className": "Text"\n                   },\n                   {\n                       "attrs": {\n                           "x": 120,\n                           "y": 40,\n                           "id": "_index1",\n                           "rotation": 20\n                       },\n                       "className": "Group",\n                       "children": [\n                           {\n                               "attrs": {\n                                   "width": 100,\n                                   "height": 50,\n                                   "name": "red",\n                                   "fill": "red",\n                                   "stroke": "black",\n                                   "strokeWidth": 4,\n                                   "id": "red"\n                               },\n                               "className": "Rect"\n                           },\n                           {\n                               "attrs": {\n                                   "x": 120,\n                                   "y": 40,\n                                   "width": 100,\n                                   "height": 50,\n                                   "name": "orange",\n                                   "fill": "orange",\n                                   "stroke": "black",\n                                   "strokeWidth": 4,\n                                   "id": "orange"\n                               },\n                               "className": "Rect"\n                           }\n                       ]\n                   }\n               ]\n           }\n       ]\n   }\n')])])]),t("h2",{attrs:{id:"常见问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#常见问题"}},[n._v("#")]),n._v(" 常见问题")]),n._v(" "),t("p",[n._v("（关注比较多的问题、项目中的咨询较多的地方）")]),n._v(" "),t("h2",{attrs:{id:"版本记录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#版本记录"}},[n._v("#")]),n._v(" 版本记录")])])}),[],!1,null,null,null);e.default=i.exports}}]);