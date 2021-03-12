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

您需要在物联网平台创建产品，产品名称与中国电信AEP平台产品名称一致，用于实现中国电信AEP平台设备的接入。

## 操作步骤

云网关设备是连接型实例特有的功能，因此，必须在连接型实例中创建产品。

1.  登录[物联网平台控制台](http://iot.console.aliyun.com/)。
2.  在实例概览页面的购买企业版实例卡片中，单击购买实例。
    
    在实例购买页面，根据您的业务需要选择实例配置规格，并完成购买。此处选择类型为连接型。
    
    更多信息，请参见[购买实例](https://help.aliyun.com/document_detail/147356.htm#section-aym-l3q-mft)。
    
    实例购买完成后，系统默认分配一个实例名称。例如iot-cn-z2q1\*\*\*。
    
3.  在实例概览页，找到并单击实例iot-cn-z2q1\*\*\*。
4.  在左侧导航栏，选择设备管理 > 产品，单击创建产品，完成参数配置，单击确认。
    
    此处部分参数配置如下，其他参数使用默认配置。![创建产品](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/6787638061/p179549.png)
    
      
   | 参数 | 描述 |
   | --- | --- |
   | 产品名称 | 输入NBProduct1。 <br> 必须与中国电信AEP平台的产品名称一致。|
   | 所属品类 | 必须选择自定义品类。 |
   | 节点类型 | 选择直连设备。 |
   | 连网方式 | 选择Wi-Fi。 |
   | 数据格式 | 必须选择透传/自定义。 |
   | 数据校验级别 | 选择弱校验。 |
   
    
   更多信息，请参见[创建产品](https://help.aliyun.com/document_detail/73728.htm#task-lxd-pnl-vdb "使用物联网平台的第一步是在控制台创建产品。产品是设备的集合，通常是一组具有相同功能定义的设备集合。例如，产品指同一个型号的产品，设备就是该型号下的某个设备。")。
    
5.  在产品NBProduct1下物模型的默认模块新增物模型属性。
    
    需要创建一个属性water\_consumption，标识符与中国电信AEP平台产品NBProduct1属性标识符water\_consumption一致。还需创建一个属性（例如test）用于物联网设备下行通信测试，本示例配置如下，您可自定义。
    
   
   | 参数 | 说明 |
   | --- | --- |
   | 功能名称 | 输入test。 |
   | 标识符 | 输入test。 |
   | 数据类型 | 选择int32。 |
   | 单位 | 选择无。 |
    
   具体操作，请参见[单个添加物模型](https://help.aliyun.com/document_detail/88241.htm#task-qhm-d3j-w2b "单个添加物模型，即单个添加属性、事件和服务。下面介绍如何在物联网平台控制台定义物模型。")。
    
   ![属性](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/6787638061/p180256.png)
    

## 后续步骤

[使用云网关创建设备](https://help.aliyun.com/document_detail/190190.htm#task-1994773 "在中国电信AEP平台完成设备开发和应用创建后，可在物联网平台结合已创建产品，创建云网关设备，实现与电信AEP平台设备对接。")
