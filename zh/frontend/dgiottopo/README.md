---
# 编写日期
date: 2020-02-07 17:15:26
# 作者 Github 名称
author: jhonliu
# 关键字
keywords:
# 描述
description:
# 分类
category: 
# 引用
ref:
---

数蛙云组态是数蛙科技有限公司自主设计、研发的开源web绘图工具，拥有为电力能源、水利、物联网、工业互联网、智慧城市、智慧医疗、智慧农业、IT运维等提供解决方案的可视化平台。Topology具有跨平台、高效、可扩展、实时监控、动态交互、支持自动算法等特点，最大程度减少研发和运维的成本，并致力于普通业务人员0代码开发实现web组态、SCADA等场景。

## 设计概要 

   [konvajs]( https://konvajs.org/docs/overview.html)
   
   面向Iot的物可视化设计，视图模型层、数据模型层与设备模型层的对应关系如下：
   
   | Model Name  |  Level1 |Level2|Level3|Level4|
   | ------------ | ------------ | ------------ | ------------ |------------ |
   | View Model | Stage  |  Layer | Group  |  Shape |
   | Data Model  |  App | Time  |  Device | Thing|
   | Device Model  |  App | Time  |  Device | Thing|
   
   数蛙云组态将通过如下示例关系建立起数据孪生的可视化消息路由，让物能跃然屏上，活起来，动起来。
   
   Stage对用户域的应用(Project),Layer对应时间域,Group对应空间域的Device,Shape对那个数据域的物模型内的指标集
   Layer有Now和Next两个状态,在消息的渠道下不断刷新Vie内的设备数据
   
   ```
   ---------------------------------------------------------------------------------------------------------
   |        View Model           |         Data Model               |        Device Model                   |
   ----------------------------------------------------------------------------------------------------------
   |              Stage          |                    App           |                   App                 |
   |                |            |                      |           |                     |                 |
   |         +------+------+     |            +------+------+       |              +------+------+          |
   |         |             |     |           |             |        |              |             |          |
   | Layer(now)      Layer(next) |         Now           Next       |            Now            Next       | 
   |         |             |     |           |             |        |              |             |          |
   |   +-----+-----+     Group   |      +-----+-----+     Device    |         +-----+-----+   Device       |
   |   |           |             |      |           |               |         |           |                 | 
   | Group       Group           |     Device       Device          |      Device       Device              |
   |   |           |             |       |           |              |        |           |                  |
   |   +       +---+---+         |       +       +---+-------+      |        +       +---+-------+          |
   |   |       |       |         |       |       |           |      |        |       |           |          |
   |Shape   Group    Shape       |     Thing   SubDevice    Thing   |    Thing   SubDevice    Thing         |
   |           |                 |                 |                |               |                       |
   |           +                 |                 +                |               +                       |
   |           |                 |                 |                |               |                       |
   |         Shape               |               Thing              |             Thing                     |
   ----------------------------------------------------------------------------------------------------------  
   | konva.findone(Id)  <-----> mqtt < -----> parse.get_object(Id) <---> channel <-----> modbus/plc/opc/ip  |
   ----------------------------------------------------------------------------------------------------------
   ```
 
## 详细设计

   ![dgiot_func.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/backend/dgiot/dgiot_func.png)

   [数蛙云组态](https://github.com/dgiot/dgiot_topo)的主要是三个目标:
   
   1. 通过UI交互，辅助行业领域的专家建立起设备域中设备指标集与数据域中物模型指标集之间的消息路由关系,生成设备组态库
   2. 通过前一步建立的消息路由关系，自动将单个设备指标信息实时同步到组态大屏中，实现数字孪生的可视化呈现
   3. 基于前两步的设备组态库与消息路由关系，添加多设备在工业现场画布中，实现工业现场的实时可视化呈现
  
 ### 单设备组态
 
   单设备组态针对 nodeype=0,1的设备，对应传感器产品和网关产品
   
   1. DG-IOT通过数据采集通道自动扫描功能，收集设备域中的指标集，并可视化呈现到组态大屏中，
   2. 行业专家在组态大屏选择与业务匹配的设备指标创建产品与物模型
   3. DG-IOT通过mqtt实时传递设备状态数据到组态大屏,同时存储设备数据到时序数据库
   4. DG-IOT回放时序数据中的设备状态数据到组态大屏，对设备数据信息可视化诊断分析
   
   物模型示例:
   ```
    {
      "properties": [
        {
          "name": "互感器",
          "dataForm": {
            "rate": 1,
            "offset": 0,
            "address": "0000",
            "control": "%s",
            "slaveid": "1",
            "protocol": "modbus",
            "quantity": 3,
            "strategy": "20",
            "byteorder": "big",
            "collection": "%s",
            "operatetype": "holdingRegister",
            "originaltype": "int16"
          },
          "dataType": {
            "type": "int",
            "specs": {
              "max": 9999,
              "min": 0,
              "step": 0,
              "unit": ""
            }
          },
          "required": true,
          "accessMode": "r",
          "identifier": "Acrel"
        }
    ]
    }
   ```

  组态数据模型示例
   ```
    {
      "konva": {
         "Stage": {
          "id": "stage_9c5930e565",
          "width": 1643,
          "height": 248
        },
        "Layer": {
          "x": 480,
          "y": 21,
          "id": "layer_9c5930e565",
          "fill": "#e579f2",
          "text": "16",
          "fontSize": 26,
          "fontFamily": "Calibri"
        },
        "Group": {
          "x": 120,
          "y": 40,
          "id": "group_9c5930e565",
          "rotation": 20
        },
        "Shape": [
          {
            "x": 480,
            "y": 21,
            "id": "Acrel",
            "fill": "#e579f2",
            "text": "16",
            "fontSize": 26,
            "fontFamily": "Calibri"
          }
        ]
      }
    }
  ```
  消息交互示例:
   topic:  thing/[deviceid]/konva
   payload:
   ```
   {
       "konva":{
           "Stage":{
               "id":"stage_9c5930e565",
               "width":1643,
               "height":248
           },
           "Layer":{
               "x":480,
               "y":21,
               "id":"layer_9c5930e565",
               "fill":"#e579f2",
               "text":"16",
               "fontSize":26,
               "fontFamily":"Calibri"
           },
           "Group":{
               "x":120,
               "y":40,
               "id":"group_9c5930e565",
               "rotation":20
           },
           "Shape":[
               {
                   "x":480,
                   "y":21,
                   "id":[shapeid],
                   "fill":"#e579f2",
                   "text":"16",
                   "fontSize":26,
                   "fontFamily":"Calibri"
               }
           ]
       }
   }
  ```
   deviceid与shapeid可见 DG-IOT唯一标识计算方法,后端与页面之间的数据传递用base64加密传输
   Shape是消息体必选项，Stage/Layer/Group是可选项
  
 ### 多设备组态

   多设备组态是单设备组态的聚合,存储在nodetype=2的产品中，对应DG-IOT平台中group,是设备容器，直接存储最终的组态模型数据

  ```
     {
         "attrs": {
             "width": 1643,
             "height": 374,
             "id": "G3$3H"
         },
         "className": "Stage",
         "children": [
             {
                 "attrs": {},
                 "className": "Layer",
                 "children": [
                     {
                         "attrs": {
                             "id": "opening",
                             "x": 49,
                             "y": 374,
                             "text": "15",
                             "fontSize": 29,
                             "fontFamily": "Calibri",
                             "fill": "#f2ec79"
                         },
                         "className": "Text"
                     },
                     {
                         "attrs": {
                             "x": 120,
                             "y": 40,
                             "id": "_index1",
                             "rotation": 20
                         },
                         "className": "Group",
                         "children": [
                             {
                                 "attrs": {
                                     "width": 100,
                                     "height": 50,
                                     "name": "red",
                                     "fill": "red",
                                     "stroke": "black",
                                     "strokeWidth": 4,
                                     "id": "red"
                                 },
                                 "className": "Rect"
                             },
                             {
                                 "attrs": {
                                     "x": 120,
                                     "y": 40,
                                     "width": 100,
                                     "height": 50,
                                     "name": "orange",
                                     "fill": "orange",
                                     "stroke": "black",
                                     "strokeWidth": 4,
                                     "id": "orange"
                                 },
                                 "className": "Rect"
                             }
                         ]
                     }
                 ]
             }
         ]
     }
  ```
## 常见问题

   （关注比较多的问题、项目中的咨询较多的地方）  
   
## 版本记录

