物联网平台中，服务端和设备端通过Topic来实现消息通信。Topic是针对设备的概念，Topic类是针对产品的概念。

## 产品Topic类

为了方便海量设备基于Topic进行通信，简化授权操作，物联网平台增加了产品Topic类的概念。Topic类是一类Topic的集合，例如，产品的自定义Topic类`/${YourProductKey}/${YourDeviceName}/user/update`是具体设备Topic`/${YourProductKey}/device1/user/update`、`/${YourProductKey}/device2/user/update`等的集合。

登录[物联网平台控制台](https://iot.console.aliyun.com/)，选择设备管理 > 产品，单击产品对应的查看，进入产品详情页，单击Topic类列表页签，可以在基础通信Topic、物模型通信Topic、自定义Topic页签查看相应的Topic类。关于这三类Topic的说明，请参见[Topic分类](https://www.alibabacloud.com/#section-0e7-4fw-ppz)。

Topic类列表中：

+   Topic类以正斜线（/）进行分层，区分每个类目。其中，有两个类目为既定类目：${YourProductKey}表示产品的标识符ProductKey，${YourDeviceName}表示设备名称。
+   操作权限：
    +   发布表示设备可以往该Topic发布消息。
    +   订阅表示设备可以订阅该Topic，从而获取消息。

## 设备Topic

产品的Topic类不用于通信，只是定义Topic，用于消息通信的是具体的设备Topic。

**注意** 在进行上下行通信调试时，请确保指定的Topic具备对应的操作权限。

您创建设备后，产品的所有Topic类会自动映射到设备上，生成具体设备Topic，您无需单独为每个设备创建Topic。设备Topic格式和产品Topic类格式一致，区别在于Topic类中的变量${YourDeviceName}，在Topic中是具体的设备名称（DeviceName）。

图 1. 设备Topic自动生成示意图

![Topic](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/9545559951/p161388.jpg)

设备Topic只能被该设备用于消息通信，例如，Topic：`/${YourProductKey}/device1/user/update`归属于设备device1，所以只能被设备device1用于发布或订阅消息，而不能被设备device2用于发布或订阅消息。

设备发送SUB指令订阅某个Topic后，登录[物联网平台控制台](https://iot.console.aliyun.com/)，选择设备管理 > 设备，单击设备对应的查看，进入设备详情页，单击Topic列表页签，已订阅Topic列表展示了设备订阅成功的所有Topic。云端系统可以通过其中的Topic发送下行消息。

单击列表中已订阅的自定义Topic对应的发布消息，可通过该Topic从云端发布一条消息到设备端。使用通配符的自定义Topic除外，具体信息，请参见[带通配符的自定义Topic](https://www.alibabacloud.com/help/zh/doc-detail/85539.htm#section-4x5-31w-af5)。

设备可以通过UNSUB指令取消与指定Topic的订阅关系，取消成功后，该Topic从已订阅Topic列表中删除。

如果您需要管控单个设备的消息收发，请在[物联网平台控制台](https://iot.console.aliyun.com/)的设备列表页或在服务端调用[DisableThing](https://www.alibabacloud.com/help/zh/doc-detail/69602.htm#doc-api-Iot-DisableThing "调用该接口禁用指定设备。")接口，禁用该设备；或在业务上管控发送给设备的消息。

## Topic分类

物联网平台将Topic分为三类。

  
| 类别 | 说明 |
| --- | --- |
| 基础通信Topic | 物联网平台预定义的基础功能通信Topic，包含：<br> *   OTA升级相关Topic。各Topic的用途和消息数据格式，请参见[OTA升级](https://www.alibabacloud.com/help/zh/doc-detail/89307.htm#concept-swx-ttw-y2b "物联网平台提供OTA升级与管理服务。下面介绍OTA升级消息的Topic和Alink数据格式，包括设备上报OTA模块版本、物联网平台推送升级包信息、设备上报升级进度和设备请求获取最新升级包信息。")。<br> *  设备标签相关Topic。各Topic的用途和消息数据格式，请参见[设备标签](https://www.alibabacloud.com/help/zh/doc-detail/89304.htm#concept-pvz-qtw-y2b "设备的部分信息，如厂商、设备型号等，可以作为设备标签上报。")。<br> *   时钟同步相关Topic。时钟同步功即NTP服务，请参见[NTP服务](https://www.alibabacloud.com/help/zh/doc-detail/102509.htm#concept-s2r-tx3-kgb "物联网平台提供NTP服务，解决嵌入式设备资源受限，系统不包含NTP服务，端上没有精确时间戳的问题。")。<br> *   设备影子相关Topic。各Topic的用途和消息数据格式，请参见[设备影子数据流](https://www.alibabacloud.com/help/zh/doc-detail/53964.htm#concept-f1f-v1v-wdb "设备影子数据通过Topic进行流转。本文介绍设备影子数据流转，包括：设备上报状态到设备影子，应用程序更改设备状态，设备离线再上线后主动获取设备影子信息，和设备端请求删除设备影子中的属性信息。")。<br> *   配置更新相关Topic。各Topic的用途和消息数据格式，请参见[远程配置](https://www.alibabacloud.com/help/zh/doc-detail/89308.htm#concept-j4b-vtw-y2b "本文档介绍设备主动请求配置信息和物联网平台推送配置信息的Topic及Alink数据格式。")。<br> *   广播Topic。调用云端API [PubBroadcast](https://www.alibabacloud.com/help/zh/doc-detail/69909.htm#doc-api-Iot-PubBroadcast "调用该接口向指定产品所有设备，或向订阅了指定Topic的所有设备发布广播消息。")向订阅了该Topic的所有设备发送广播消息，实现批量控制设备。|
| 物模型通信Topic | 物联网平台预定义的物模型通信Topic。各物模型功能Topic消息的数据格式，请参见[设备属性、事件、服务](https://www.alibabacloud.com/help/zh/doc-detail/89301.htm#concept-mvc-4tw-y2b "如果产品定义了物模型，设备可以上报属性和事件信息，服务端可以下发设置属性和调用服务指令。")。<br> ***说明** 在云端，不可以调用Pub接口向物模型通信Topic发送消息。<br> *在云端通过物模型功能远程控制设备，请调用[SetDeviceProperty](https://www.alibabacloud.com/help/zh/doc-detail/69579.htm#doc-api-Iot-SetDeviceProperty "调用该接口为指定设备设置属性值。")或[SetDevicesProperty](https://www.alibabacloud.com/help/zh/doc-detail/96243.htm#doc-api-Iot-SetDevicesProperty "调用该接口批量设置设备属性值。")设置设备属性值；调用[InvokeThingService](https://www.alibabacloud.com/help/zh/doc-detail/69584.htm#doc-api-Iot-InvokeThingService "调用该接口在一个设备上调用指定服务。")或[InvokeThingsService](https://www.alibabacloud.com/help/zh/doc-detail/96242.htm#doc-api-Iot-InvokeThingsService "调用该接口批量调用设备服务。")调用设备服务。 |
| 自定义Topic | 您可以根据业务需求，在产品的Topic类列表页自定义Topic类，具体操作请参见[自定义Topic类](https://www.alibabacloud.com/help/zh/doc-detail/85539.htm#concept-ppk-rz4-k2b "本文介绍如何为产品自定义Topic类。自定义Topic类将自动映射到该产品下的所有设备中。")。<br> *Topic类是一个Topic模版配置，编辑更新某个Topic类后，可能对产品下所有设备使用该类Topic通信产生影响。建议在设备研发阶段设计好，设备上线后不再变更Topic类。|
