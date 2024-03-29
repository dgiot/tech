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

完成物模型数据格式转化后，在中国电信AEP平台自定义一个物模型属性和服务，测试接收从物联网平台设备下发的数据。

## 操作步骤

1.  在[中国电信AEP平台](https://dm.ctwing.cn/#/productCenter/10095865/3/subscriptionTab?t=2000016872&ser=1&profile=1&productProtocol=3&tupIsProfile=1)左侧导航栏，选择产品中心，找到并单击产品NBProduct1，在产品页面，单击服务定义页签。
2.  在自定义功能模块的属性列表下，单击右侧的新增属性，根据页面提示，完成参数配置，单击确定。
    
    参数配置与物联网平台产品NBProduct1下自定义的属性test一致，部分参数配置如下。
    
    更多信息，请参见[在物联网平台创建产品](https://help.aliyun.com/document_detail/190189.htm#task-1994735 "您需要在物联网平台创建产品，产品名称与中国电信AEP平台产品名称一致，用于实现中国电信AEP平台设备的接入。")。
    
      
   | 参数 | 说明 |
    | --- | --- |
    | 属性名称 | 输入test。 |
    | 属性标识 | 输入test。 |
    | 数据类型 | 选择整型。 |
    | 长度 | 选择1字节。 |
    | 单位 | 选择无。 |
    
3.  单击自定义功能下的服务列表，单击右侧的新增服务，配置指令下发服务。
    
    配置参数如下表所示。
    
      
   | 参数 | 说明 |
    | --- | --- |
    | 服务类型 | 选择指令下发。 |
    | 服务ID | 根据提示自定义。 |
    | 服务名称 | 输入test。 |
    | 服务标识 | 输入test。 |
    | 参数列表 | 单击增加参数，添加参数test，与属性test配置一致。 |
    
4.  在产品页，单击设备管理，单击nbdevice对应的在线模拟图标![在线模拟](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/7192155061/p181722.png)，在AEP-在线调试页面，单击右上角的上线。
5.  回到物联网平台连接实例下，在左侧导航栏，选择监控运维 > 在线调试，在调试真实设备页签下的属性调试页签，选择调试功能列表的test，方法列表的设置。
6.  设置test值为0，单击发送指令。
    
    ![下发消息](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/7192155061/p181738.png)
    
7.  回到中国电信AEP平台，在设备nbdevice的AEP-在线调试页面，查看设备日志。
    
    如下图所示，电信平台设备收到云端消息，说明物联网平台设备的下行通信成功。![日志](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/7192155061/p181736.png)
