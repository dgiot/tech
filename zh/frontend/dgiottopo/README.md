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

## Topology是什么

安装（使用 npm 或 yarn 安装、浏览器引入）

5分钟快速上手 （下面每个子文章都包含的小节内容：创建画布、添加节点、添加连线、保存、导入、更多使用方式：参考详细介绍或视频教程）
   + 浏览器引入
     
   + vue中使用
    
   + react中使用
    
   + angular中使用
    
**注意事项**【重要】

## 详细介绍

   + 基础概念
      理念：数据驱动显示、视图与业务解耦；视图专注视图、业务专注业务，相互通过数据关联；动画层）
   + 画布
   +  画笔
   + 节点
   + 连线 （箭头）
   + 点（锚点、控制点）
   + 区域Rect
   +  数据绑定与动态显示
   + 事件绑定（画布消息事件、画笔交互事件）
   + 与服务器通信（websocket、mqtt）
   + 动画
   + 左侧素材库（基本开发流程、使用jpg/png/gif等图片、使用字体文件、详细讲解教学视频）
   + 右侧属性面板（基本开发流程、详细讲解教学视频）
   + 自定义图形库
   + 使用echarts图形库
   + 封装第三方组件
   + 排版布局
   
## 设计概要 

   [konvajs]( https://konvajs.org/docs/overview.html)
   
   面向Iot的物可视化设计，视图模型层、数据模型层与设备模型层的对应关系如下：
   
   | Model Name  |  Level1 |Level2|Level3|Level4|
   | ------------ | ------------ | ------------ | ------------ |------------ |
   | View Model |Stage  |  Layer | Group  |  Shape |
   | Data Model  |  App | Group  |  Device | Thing|
   | Device Model  |  App | Group  |  Device | Thing|
   
   数蛙云组态将通过如下示例关系建立起数据孪生的可视化消息路由，让物能跃然屏上，活起来，动起来。
   
   ```
   ---------------------------------------------------------------------------------------------------------
   |        View Model           |         Data Model               |        Device Model                   |
   ----------------------------------------------------------------------------------------------------------
   |              Stage          |                    App           |                   App                 |
   |                |            |                      |           |                     |                 |
   |         +------+------+     |            +------+------+       |              +------+------+          |
   |         |             |     |           |             |        |              |             |          |
   |       Layer         Layer   |         Group         Device     |            Group         Device       | 
   |         |             |     |           |             |        |              |             |          |
   |   +-----+-----+     Shape   |      +-----+-----+     Thing     |         +-----+-----+     Thing       |
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
   
## 常见问题

   （关注比较多的问题、项目中的咨询较多的地方）  
   
## 版本记录
