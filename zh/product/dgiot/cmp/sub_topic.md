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

使用MQTT接入数蛙物联网平台的设备，接收平台消息需先订阅相关Topic。物联网平台提供的设备端C语言Link SDK 3.1、3.2和4.x版本已支持自动订阅Topic。本文主要介绍支持自动订阅的Topic列表。

## 背景信息

物联网平台中，服务端和设备端通过Topic来实现消息通信。设备端如需使用物联网平台的多种功能，必须先订阅相关的Topic。设备端从订阅到正常工作的整个过程较耗时，为缩短设备进入正常工作状态的时间，物联网平台针对本身的多种功能，提供自动订阅Topic服务，无需设备发送订阅请求，即可通过相关Topic把消息发送给设备。

**说明**

设备使用C语言的Link SDK3.1、3.2或4.x成功接入物联网平台后，云端系统即可通过设备端已自动订阅Topic发送下行消息。
当设备被删除销毁，或设备端通过aiot_mqtt_unsub接口主动取消订阅成功时，云端不会再将相关消息自动发送给设备。

Topic列表

|所属功能点|	主题|
|----|---|
|物模型通信 |/sys/${productKey}/${deviceName}/thing/model/down_raw <br> /sys/${productKey}/${deviceName}/thing/model/up_raw_reply<br> /sys/${productKey}/${deviceName}/thing/event/+/post_reply<br> /sys/${productKey}/${deviceName}/thing/deviceinfo/update_reply<br> /sys/${productKey}/${deviceName}/thing/deviceinfo/delete_reply<br> /sys/${productKey}/${deviceName}/thing/dynamicTsl/get_reply<br> /sys/${productKey}/${deviceName}/thing/dsltemplate/get_reply <br> /sys/${productKey}/${deviceName}/rrpc/request/+ <br>   /sys/${productKey}/${deviceName}/thing/service/property/set<br>   /sys/${productKey}/${deviceName}/thing/service/property/get <br>   /sys/${productKey}/${deviceName}/thing/event/property/history/post_reply <br>  /sys/${productKey}/${deviceName}/thing/service/+|
|子设备管理 |/sys/${productKey}/${deviceName}/thing/gateway/permit <br> /sys/${productKey}/${deviceName}/thing/topo/change<br>   /sys/${productKey}/${deviceName}/thing/sub/register_reply<br>  /sys/${productKey}/${deviceName}/thing/sub/unregister_reply <br>   /sys/${productKey}/${deviceName}/thing/topo/add_reply <br>  /sys/${productKey}/${deviceName}/thing/topo/delete_reply <br>  /sys/${productKey}/${deviceName}/thing/disable_reply <br>  /sys/${productKey}/${deviceName}/thing/topo/get_reply |
|固件升级|/ota/device/upgrade/${productKey}/${deviceName} <br>   /ota/device/request/${productKey}/${deviceName}|
|远程配置|/sys/${productKey}/${deviceName}/thing/config/push <br>   /sys/${productKey}/${deviceName}/thing/config/get_reply|
|本地通信|/sys/${productKey}/${deviceName}/thing/lan/prefix/get_reply <br>   /sys/${productKey}/${deviceName}/thing/lan/blacklist/update_reply <br>  /sys/${productKey}/${deviceName}/thing/lan/prefix/update|
|影子设备|/sys/${productKey}/${deviceName}/thing/property/desired/get_reply <br> /sys/${productKey}/${deviceName}/thing/property/desired/delete_reply <br> /shadow/get/${productKey}/${deviceName} |
|设备重置上报应答|/sys/${productKey}/${deviceName}/thing/reset_reply|
|云端响应设备接入|/sys/${productKey}/${deviceName}/thing/awss/enrollee/match_reply <br>   /sys/${productKey}/${deviceName}/thing/awss/enrollee/checkin|
|云端响应子设备接入|/sys/${productKey}/${deviceName}/thing/awss/enrollee/found_reply <br>  /sys/${productKey}/${deviceName}/thing/cipher/get_reply <br> /sys/${productKey}/${deviceName}/thing/awss/device/switchap |
|子设备一型一密|/sys/${productKey}/${deviceName}/thing/proxy/provisioning/product_register_reply|
|全球统一激活中心|/sys/${productKey}/${deviceName}/thing/bootstrap/config/push|
|统一通知下发接口请求|/sys/${productKey}/${deviceName}/_thing/event/notify|
|统一消息上报接口应答|/sys/${productKey}/${deviceName}/_thing/service/post_reply|
|任务管理|/sys/{productKey}/{deviceName}/thing/job/notify <br> /sys/{productKey}/{deviceName}/thing/job/get_reply <br> /sys/{productKey}/{deviceName}/thing/job/update_reply |
