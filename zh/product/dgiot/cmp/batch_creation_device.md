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

产品指某一类设备，创建完产品后，需要为具体设备创建身份。您可以创建单个设备，也可以批量创建设备。本文介绍如何批量创建设备。

## 操作步骤

1.  登录[物联网平台控制台](http://iot.console.aliyun.com/)。
2.  在左侧导航栏，选择设备管理 > 设备。
3.  在设备页，单击批量添加。
4.  选择产品。新创建的设备将继承该产品的功能和特性。
    
    **说明** 若该产品关联了其他平台，请确保您的账户下有足够的激活码用于创建设备。
    
    ![批量创建设备](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/7445559951/p134552.png)
    
5.  选择设备的添加方式。
    
    +   自动生成：无需为设备指定DeviceName。填写设备数量后，系统将为每个设备自动生成由字母、数字随机组合成的DeviceName。
    +   批量上传：需要为所有设备指定名称。单击下载.csv模板下载表格模板，在模板中填写DeviceName、Nickname，然后将填好的表格上传至控制台。![批量上传设备文件示例](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/0935010161/p211766.gif)
        
        **说明** 填写模板时，请注意：
        
        +   第一行不能修改，请从A2单元格开始输入。
        +   DeviceName支持英文字母、数字、短划线（-）、下划线（\_）、at符号（@）、英文句号（.）和英文冒号（:），长度限制为4~32个字符。DeviceName在产品维度具有唯一性，不可重复。
        +   Nickname为备注名称，是选填项，支持中文、英文字母、日文、数字和下划线（\_），备注名称长度为4~64个字符，一个中文或日文占2个字符。
        +   一个文件中最多可包含1万条记录。
        +   文件大小不超过2 MB。
        
    
6.  单击确认，完成创建批量设备。
    
    若批量上传的设备名称列表中有不合法的名称，将出现错误提示。请单击下载不合法列表，查看不合法的设备名称。根据设备名称规范，修改设备名称，再重新上传文件。
    
7.  设备创建成功后，单击下载设备证书，下载本批次设备的设备证书，用于在产线上统一烧录。

## 执行结果

批量创建设备成功。可在设备页的批次管理页签下，查看该批次设备信息和下载设备证书。

+   单击查看详情，查看对应批次设备的详细信息。
+   单击下载CSV，下载该批次设备的证书。

查看设备信息，请参见[管理设备](https://www.alibabacloud.com/help/zh/doc-detail/113275.htm#concept-h5h-q44-hhb "在物联网平台成功创建设备后，您可以在控制台管理、查看具体设备信息。")。

设备创建完成后，设备状态显示未激活。![设备未激活](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/1727700161/p211216.gif)

设备接入物联网平台实践案例，可参见：

+   [使用MQTT.fx接入物联网平台](https://www.alibabacloud.com/help/zh/doc-detail/86706.htm#concept-d3l-fw3-p2b "MQTT.fx是一款基于Eclipse Paho，使用Java语言编写的MQTT客户端工具，支持通过Topic订阅和发布消息。下面以使用第三方软件MQTT.fx为例，介绍模拟设备以MQTT协议接入物联网平台。")
+   [Android Things接入物联网平台](https://www.alibabacloud.com/help/zh/doc-detail/86831.htm#concept-ntf-mgq-p2b "本文档以室内空气检测项目为例，介绍如何将谷歌Android Things物联网硬件接入阿里云物联网平台。")

## 相关API

  
| API | 描述 |
| --- | --- |
| [BatchRegisterDevice](https://www.alibabacloud.com/help/zh/doc-detail/69473.htm#doc-api-Iot-BatchRegisterDevice "调用该接口在指定产品下批量注册多个设备（随机生成设备名）。") | 批次申请特定数量设备。 |
