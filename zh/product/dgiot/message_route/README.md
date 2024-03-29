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

您的设备和服务器接入阿里云物联网平台，通过物联网平台进行通信。

## 设备发送数据到物联网平台

设备接入物联网平台后，便可与物联网平台进行通信。设备可通过以下方式发送数据到物联网平台：

+   使用自定义Topic发送自定义格式的数据。
    1.  在物联网平台上，为产品自定义操作权限为发布的Topic类。产品的Topic类会自动映射到产品下的设备中。
        
        自定义Topic类的两种方式：
        
        +   参见[自定义Topic](https://help.aliyun.com/document_detail/85539.htm#concept-ppk-rz4-k2b "本文介绍如何为产品自定义Topic类。自定义Topic类将自动映射到该产品下的所有设备中。")，在物联网平台控制台上自定义Topic类。
        +   使用[云端SDK](https://help.aliyun.com/document_detail/30579.htm#reference-b4q-wwb-zdb "物联网平台云端SDK用于调用云端API，以实现物联网平台的云端能力，如产品管理、设备管理、Topic管理、数据流转规则管理、消息通信等。")，调用云端API [CreateProductTopic](https://help.aliyun.com/document_detail/69649.htm#doc-api-Iot-CreateProductTopic "调用该接口为指定产品创建产品Topic类。")自定义Topic类。
    2.  开发设备端时，配置设备将消息发送到自定义Topic中。
        
        需在设备端上，配置发送消息的自定义Topic和消息格式。使用阿里云提供的Link SDK配置示例，请参见[设备发送消息给服务器](https://help.aliyun.com/document_detail/120986.htm#section-bfb-ykj-zva)。
        
+   使用物模型功能相关Topic，发送标准化的物模型数据。
    
    物模型功能说明，请参见[什么是物模型](https://help.aliyun.com/document_detail/73727.htm#concept-okp-zlv-tdb "物模型指将物理空间中的实体数字化，并在云端构建的该实体的数据模型，用于描述实体的功能。下面介绍物模型相关概念和使用方法。")。
    
    设备可主动上报属性和事件。
    
    实现过程：
    
    1.  参见[单个添加物模型](https://help.aliyun.com/document_detail/88241.htm#task-qhm-d3j-w2b "单个添加物模型，即单个添加属性、事件和服务。下面介绍如何在物联网平台控制台定义物模型。")，根据您的设备业务情况，在物联网平台控制台定义物模型。
    2.  开发设备端时，根据已定义的物模型，配置设备上报属性和事件数据。
        
        设备上报属性和事件的标准数据格式，请参见[设备上报属性](https://help.aliyun.com/document_detail/89301.htm#section-g4j-5zg-12b)和[设备事件上报](https://help.aliyun.com/document_detail/89301.htm#section-lnn-1bx-y2b)。
        
        **说明** 物联网平台已定义了物模型功能相关的Topic，直接使用即可。
        
        使用阿里云提供的Link SDK开发示例，请参见[设备端SDK上报属性和事件](https://help.aliyun.com/document_detail/127991.htm#section-l5d-7u3-9hp)。
        

## 物联网平台流转数据到服务器

可设置物联网平台，通过以下方式将设备上报消息、设备状态变化通知、设备生命周期变更、物模型历史数据上报、OTA升级状态通知、网关发现子设备上报、设备拓扑关系变更等消息流转到您的服务器。消息基于Topic传递数据，Topic中的数据格式请参见[数据格式](https://help.aliyun.com/document_detail/73736.htm#concept-ap3-lql-b2b "配置云产品流转时，您需要基于Topic编写SQL处理数据。AMQP、MNS服务端订阅也基于Topic传递数据。自定义Topic中数据格式由您自己定义，物联网平台不做处理。基础通信Topic、物模型通信Topic中的数据格式由物联网平台定义，此时您需要根据平台定义的数据格式处理数据。本文讲述了基础通信Topic、物模型通信Topic中的数据格式。")。

![Data to Server](https://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/8876549951/p87244.png)

+   服务端订阅：使用物联网平台的服务端订阅功能，订阅一个或多个消息类型。物联网平台根据您设置的订阅，将产品下所有设备的该类型消息流转至您的服务器。支持以下两种方式的服务端订阅：
    +   参见[AMQP服务端订阅](https://help.aliyun.com/document_detail/142376.htm#task-2331705 "本文介绍在物联网平台控制台设置和管理AMQP服务端订阅。")及相关文档，设置使用AMQP SDK接收物联网平台流转的设备消息。
    +   参见[MNS服务端订阅](https://help.aliyun.com/document_detail/68948.htm#task-xy5-wk2-vdb "物联网平台服务端订阅支持将设备消息发送至消息服务（MNS），云端应用通过监听MNS队列，获取设备消息。下面讲解使用MNS订阅设备消息的配置方法。")，设置使用MNS SDK接收物联网平台流转到MNS队列的设备消息。
+   云产品流转：使用规则引擎的云产品流转功能，通过数据流转规则将指定设备数据流转到消息服务（MNS）的主题或消息队列（RocketMQ）的队列中。服务器通过MNS或RocketMQ SDK接收消息。
    
    1.  参见[设置数据流转规则](https://help.aliyun.com/document_detail/42733.htm#task-tmt-m5m-vdb "通过规则引擎的云产品流转功能，物联网平台可将指定Topic的数据流转至其它Topic和其它阿里云服务中。本文将为您详细讲解如何设置一条完整的数据流转规则。设置过程依次是创建规则、编写处理数据的SQL、设置数据流转目的地和设置流转失败的数据转发目的地。")，创建规则，将指定设备的数据流转到MNS主题或RocketMQ队列中。
    2.  参见[MNS SDK主题使用手册](https://help.aliyun.com/document_detail/32450.htm#concept-2028836 "本文介绍如何使用Java SDK中的sample代码，完成创建主题、创建订阅，发布消息、接收消息以及删除主题等操作。")或[RocketMQ使用手册](https://help.aliyun.com/document_detail/34411.htm#concept-2047073)中订阅消息部分，配置MNS SDK或RocketMQ SDK接收消息。
    
    使用规则引擎流转数据的示例，请参见[设备消息通过RocketMQ流转到服务器](https://help.aliyun.com/document_detail/67399.htm#task-s41-m45-ydb "物联网平台将设备上报的数据流转至消息队列RocketMQ的Topic中，然后，RocketMQ再将数据流转到您的服务器。")。
    

云产品流转和服务端订阅的区别，请参见[数据流转方案对比](https://help.aliyun.com/document_detail/102335.htm#concept-abq-hf1-kgb "在许多场景中，您需要将设备上报给物联网平台的数据进行加工处理或用于业务应用。使用物联网平台提供的服务端订阅功能和云产品流转功能，均可实现设备数据流转。本文对比物联网平台支持的各流转方案及使用场景，帮助您选择合适的流转方案。")。

## 服务器远程控制设备

在服务器上，使用物联网平台提供的云端SDK，调用云端API发送指令到设备，实现远程控制设备。服务器可通过以下方式发送指令到设备。

![Control Devices](https://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/8876549951/p87249.png)

+   使用自定义Topic远程控制设备。
    +   异步控制：调用[Pub](https://help.aliyun.com/document_detail/69793.htm#doc-api-Iot-Pub "调用该接口向指定Topic发布消息。")接口向设备操作权限为订阅的自定义Topic发送自定义格式的消息。设备通过订阅该Topic获取消息。
        
        使用自定义Topic远程控制设备实践案例，请参见[服务器发送消息给设备](https://help.aliyun.com/document_detail/120986.htm#section-oqw-49y-wqa)。
        
    +   同步控制：调用[RRpc](https://help.aliyun.com/document_detail/69797.htm#doc-api-Iot-RRpc "调用该接口向指定设备发送请求消息，并同步返回响应。")接口向指定设备发送消息，并同步返回响应结果。
        
        MQTT同步通信相关说明，请参见[什么是RRPC](https://help.aliyun.com/document_detail/90567.htm#concept-zlp-gsl-cfb "MQTT协议是基于PUB/SUB的异步通信模式，不适用于服务端同步控制设备端返回结果的场景。物联网平台基于MQTT协议制定了一套请求和响应的同步机制，无需改动MQTT协议即可实现同步通信。物联网平台提供API给服务端，设备端只需要按照固定的格式回复PUB消息，服务端使用API，即可同步获取设备端的响应结果。")。
        
        调用RRpc接口同步控制设备实践案例，请参见[远程控制树莓派服务器](https://help.aliyun.com/document_detail/102183.htm#concept-f12-wqn-jgb "使用阿里云物联网平台可实现伪内网穿透，对无公网IP的树莓派服务器进行远程控制。本文以实现基于树莓派服务器远程控制为例，介绍伪内网穿透的实现流程，并提供开发代码示例。")。
        
    +   批量控制：调用[PubBroadcast](https://help.aliyun.com/document_detail/69909.htm#doc-api-Iot-PubBroadcast "调用该接口向指定产品所有设备，或向订阅了指定Topic的所有设备发布广播消息。")接口向产品下的全量在线设备发布广播消息，实现批量控制设备。
        
        批量控制设备的详细说明，请参见[广播通信](https://help.aliyun.com/document_detail/155755.htm#task-2433926 "物联网平台支持广播通信，即向指定产品下的全量在线设备发送消息。设备无需订阅广播Topic，即可收到服务器发送的广播消息。下面介绍广播通信的具体配置流程。")。
        
+   使用物模型远程控制设备。
    
    您可以在云端通过发送物模型数据的特有接口，发布设置属性值和调用服务指令。
    
    +   控制单个设备。
        +   调用[SetDeviceProperty](https://help.aliyun.com/document_detail/69579.htm#doc-api-Iot-SetDeviceProperty "调用该接口为指定设备设置属性值。")向单个设备发送设置属性值的指令。
            
            云端下发属性设置命令和设备收到并执行该命令是异步的。设备是否成功设置属性值，以设备上报属性为准。
            
        +   调用[InvokeThingService](https://help.aliyun.com/document_detail/69584.htm#doc-api-Iot-InvokeThingService "调用该接口在一个设备上调用指定服务。")向单个设备发送调用服务的指令。
            
            服务是同步调用还是异步调用，取决于您[自定义服务](https://help.aliyun.com/document_detail/88241.htm#table-lhs-fq3-y2b)时选择的调用方式。
            
            如果该服务的调用方式是同步，调用InvokeThingService后，会同步返回结果。
            
            如果是异步，则InvokeThingService不会同步返回结果。设备响应结果，可以通过规则引擎获取设备的响应消息。需设置规则SQL的数据来源Topic为物模型数据上报，具体Topic为`thing/downlink/reply/message`。数据流转规则设置详情，请参见[设置数据流转规则](https://help.aliyun.com/document_detail/42733.htm#task-tmt-m5m-vdb "通过规则引擎的云产品流转功能，物联网平台可将指定Topic的数据流转至其它Topic和其它阿里云服务中。本文将为您详细讲解如何设置一条完整的数据流转规则。设置过程依次是创建规则、编写处理数据的SQL、设置数据流转目的地和设置流转失败的数据转发目的地。")。
            
    +   批量控制设备。
        +   调用[SetDevicesProperty](https://help.aliyun.com/document_detail/96243.htm#doc-api-Iot-SetDevicesProperty "调用该接口批量设置设备属性值。")向多个设备发送设置属性值的指令。
        +   调用[InvokeThingsService](https://help.aliyun.com/document_detail/96242.htm#doc-api-Iot-InvokeThingsService "调用该接口批量调用设备服务。")向多个设备发送调用服务的指令。
    
    使用物模型远程控制设备的实践案例，请参见[物模型通信](https://help.aliyun.com/document_detail/127991.htm#task-1460927 "设备与云端基于Alink协议进行物模型数据通信，包括设备上报属性或事件消息到云端，从云端下发设置属性或调用服务消息到设备。本实践案例提供Java Demo，介绍物模型数据通信代码配置。")。
    

## 设备与设备之间通信

将两端设备接入物联网平台，设备间的连接和通信请求都由物联网平台承担。您可以通过以下两种方式实现设备与设备间通信：

+   [基于规则引擎的M2M设备间通信](https://help.aliyun.com/document_detail/85999.htm#task-y43-gh1-ydb "本文以智能灯和手机App连接为例，基于物联网平台的规则引擎数据流转功能，构建一个M2M设备间通信架构。")
+   [基于Topic消息路由的M2M设备间通信](https://help.aliyun.com/document_detail/86000.htm#task-q45-glr-ydb "本文以智能灯和手机App连接为例，基于物联网平台的Topic消息路由服务，构建一个M2M设备间通信架构。")

## 设备数据使用场景示例

[通过大数据平台搭建设备监控大屏](https://help.aliyun.com/document_detail/60428.htm#task-kdj-4g5-cgb "本文介绍如何对接物联网平台和阿里云大数据平台，以实现设备数据分析、统计、计算和可视化实时展示。")

[物联网平台对接第三方服务-天气查询](https://help.aliyun.com/document_detail/65079.htm#task-bzt-jwv-ydb "物联网平台将设备上报的城市的名称、城市代码、坐标信息（经纬度）、IP地址等信息，转发至函数计算（FC），函数计算接入第三方天气服务，然后再将查询到的天气情况发送到指定的Topic中。")

[温湿度计上报数据到钉钉群机器人](https://help.aliyun.com/document_detail/65255.htm#task-z5x-53d-zdb "温湿度计上报数据到物联网平台，物联网平台通过数据流转规则，将温湿度数据转发到钉钉群机器人，钉钉群里即可收到温湿度数据。")

[使用IoT Studio搭建监控大屏](https://help.aliyun.com/document_detail/143903.htm#concept-2341709 "本实践案例中使用LoRa气象监测设备监测气象信息，上报温度、湿度、大气压、经度、纬度等数据，并使用IoT Studio平台搭建监控大屏，展示气象监测设备最新上报的数据和历史数据曲线图。")

[设备消息通过RocketMQ流转到服务器](https://help.aliyun.com/document_detail/67399.htm#task-s41-m45-ydb "物联网平台将设备上报的数据流转至消息队列RocketMQ的Topic中，然后，RocketMQ再将数据流转到您的服务器。")

[服务端订阅（MNS）](https://help.aliyun.com/document_detail/121185.htm#concept-491229 "本示例介绍如何配置服务端订阅，将产品下的设备状态变化消息推送到消息服务（MNS）队列中。服务器通过监听MNS队列接收设备状态变化消息。")
