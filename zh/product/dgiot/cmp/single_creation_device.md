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

产品指某一类设备，创建完产品后，需要为每个设备创建身份。您可以单个创建设备，也可以批量创建设备。本文介绍单个设备创建的步骤。

## 操作步骤

1.  登录[物联网平台控制台](http://iot.console.aliyun.com/)。
2.  在左侧导航栏，选择设备管理 > 设备。
3.  在设备页，单击添加设备。
4.  在添加设备对话框中，输入设备信息，单击确认。
    
    ![物联网平台设备](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/6445559951/p2540.png)
    
    | 参数 | 描述 |
    | --- | --- |
    | 产品 | 选择产品。新创建的设备将继承该产品定义好的功能和特性。<br>**说明** 若该产品关联了其他平台，请确保您的账户下有足够的激活码用于创建设备。|
    | DeviceName | 设置设备名称。 设备名称在产品内具有唯一性。支持英文字母、数字、短划线（-）、下划线（\_）、at符号（@）、点号（.）和英文冒号（:），长度限制为4~32个字符。<br> **说明** DeviceName可以为空。为空时，由物联网平台生成一个产品内唯一标识符作为设备的DeviceName。|
    | 备注名称 | 设置备注名称。支持中文、英文字母、日文、数字和下划线（\_），备注名称长度为4~64个字符，一个中文或日文占2个字符。 |
    
 ## 执行结果

   设备创建成功后，将自动弹出查看设备证书对话框。您可以查看、复制设备证书信息。设备证书由设备的ProductKey、DeviceName和DeviceSecret组成，是设备与物联网平台进行通信的重要身份认证，建议您妥善保管。

  
| 参数 | 说明 |
| --- | --- |
| ProductKey | 设备所隶属产品的Key，即物联网平台为产品颁发的全局唯一标识符。 |
| DeviceName | 设备在产品内的唯一标识符。DeviceName与设备所属产品的ProductKey组合，作为设备标识，用来与物联网平台进行连接认证和通信。 |
| DeviceSecret | 物联网平台为设备颁发的设备密钥，用于认证加密。需与DeviceName成对使用。 |

查看设备信息，请参见[管理设备](https://www.alibabacloud.com/help/zh/doc-detail/113275.htm#concept-h5h-q44-hhb "在物联网平台成功创建设备后，您可以在控制台管理、查看具体设备信息。")。

设备创建完成后，设备状态显示未激活。![设备未激活](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/1727700161/p211216.gif)

请参见[Link SDK文档](https://www.alibabacloud.com/help/product/93051.htm)开发设备端SDK，然后接入物联网平台，激活设备。

设备接入物联网平台实践案例，可参见：

+   [使用MQTT.fx接入物联网平台](https://www.alibabacloud.com/help/zh/doc-detail/86706.htm#concept-d3l-fw3-p2b "MQTT.fx是一款基于Eclipse Paho，使用Java语言编写的MQTT客户端工具，支持通过Topic订阅和发布消息。下面以使用第三方软件MQTT.fx为例，介绍模拟设备以MQTT协议接入物联网平台。")
+   [Android Things接入物联网平台](https://www.alibabacloud.com/help/zh/doc-detail/86831.htm#concept-ntf-mgq-p2b "本文档以室内空气检测项目为例，介绍如何将谷歌Android Things物联网硬件接入阿里云物联网平台。")

## 相关API

  
| API | 描述 |
| --- | --- |
| [RegisterDevice](https://www.alibabacloud.com/help/zh/doc-detail/69470.htm#doc-api-Iot-RegisterDevice "调用该接口在指定产品下注册设备。") | 注册设备。 |
