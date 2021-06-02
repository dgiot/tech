---
# 编写日期
date: 2020-05-17 17:15:26
# 作者 Github 名称
author: dyxz816
# 关键字
keywords:
# 描述
description:
# 分类
category: 
# 引用
ref:
---

## 通道简介

|参数|描述|
 |---|---|  
 |通道|本平台中，通道指用于平台与设备之间进行通信的虚拟数据通路|
 |通道类型|本平台中通道主要分为两种类型：采集通道、资源通道。<br>采集通道主要用于采集上报的设备数据；资源通道主要用于将采集数据上传至云数据库。|

## 通道管理

点击右侧导航栏设备云->[通道管理](http://prod.iotn2n.com/#/dashboard/resourcechannel) 进入通道管理界面，可以在此进行创建新通道、管理已有通道等一系列操作

下面将简单介绍如何创建新通道，以及通道是如何作用的：
(以opc数据采集和opc数据上传通道为例)

- 1.创建通道

在通道管理界面中点击[创建通道](http://prod.iotn2n.com/?#/CreateResourcechannel?type=create),可进入创建通道界面。
填入对应信息后，点击->确定，创建新通道。
![opc采集通道创建图.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/product/dgiot/product_presentation/opc%E9%87%87%E9%9B%86%E9%80%9A%E9%81%93%E5%88%9B%E5%BB%BA%E5%9B%BE.png)

完成后，可在通道管理界面[通道管理](http://prod.iotn2n.com/#/dashboard/resourcechannel)中看到之前创建的新通道
![通道查看管理图.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/product/dgiot/product_presentation/%E9%80%9A%E9%81%93%E6%9F%A5%E7%9C%8B%E7%AE%A1%E7%90%86%E5%9B%BE.png)

|按钮|功能说明|
 |---|---|  
 |编辑|可对已有的通道进行信息更改、修正等操作|
 |禁用/启用|控制通道的启停|
 |详情|查看当前通道的信息|
 |删除|删除此通道|
 |订阅日志|可以查看当前通道的订阅日志|
 
 以opc采集通道为例，通道正常采集设备数据时，订阅日志如下图：
 
 ![通道日志图.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/product/dgiot/product_presentation/%E9%80%9A%E9%81%93%E6%97%A5%E5%BF%97%E5%9B%BE.png)
可以见到日志中展现出采集到的设备数据。

采集通道负责接收数据，资源通道负责将数据储存至云端，当opc采集通道正常运行时，opc资源通道将其采集的数据上传至云数据库中，器订阅日志如下：
![通道日志图资源通道.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/product/dgiot/product_presentation/%E9%80%9A%E9%81%93%E6%97%A5%E5%BF%97%E5%9B%BE%E8%B5%84%E6%BA%90%E9%80%9A%E9%81%93.png)

可以查看云数据库，确认数据成功上传，上例数据库实况数据如下：
![TD数据实时值.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/product/dgiot/product_presentation/TD%E6%95%B0%E6%8D%AE%E5%AE%9E%E6%97%B6%E5%80%BC.png)

- 2.为产品配置对应通道

通道创建完成后需要将其配置与对应的产品下，点击[产品管理](http://prod.iotn2n.com/?#/dashboard/productlist),
在对应的产品条目中，点击->配置，进入该产品的产品详情，在物接入、物存储中添加对应的通道。
![物接入通道.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/product/dgiot/product_presentation/%E7%89%A9%E6%8E%A5%E5%85%A5%E9%80%9A%E9%81%93.png)
![物存储通道.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/product/dgiot/product_presentation/%E7%89%A9%E5%AD%98%E5%82%A8%E9%80%9A%E9%81%93.png)

完成上步后，通道即可运行，实现数据的传输功能。