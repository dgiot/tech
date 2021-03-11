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
设备接入物联网平台之前，需通过身份认证。目前，物联网平台支持使用设备密钥进行设备身份认证。

## 设备密钥认证

在创建产品时，认证方式选择为设备密钥，物联网平台会为设备颁发ProductSecret、DeviceSecret等密钥。设备接入物联网平台时，需使用密钥进行身份认证。

针对不同的使用环境，物联网平台提供了使用密钥认证的四种认证方案。

+   [一机一密](https://www.alibabacloud.com/help/zh/doc-detail/74005.htm#task-n21-glp-wfb "一机一密认证方法，即预先为每个设备烧录其唯一的设备证书（ProductKey、DeviceName和DeviceSecret）。当设备与物联网平台建立连接时，物联网平台对其携带的设备证书信息进行认证。认证通过，物联网平台激活设备，设备与物联网平台间才可传输数据。")：每台设备烧录自己的设备证书（ProductKey、DeviceName和DeviceSecret）。
+   [一型一密](https://www.alibabacloud.com/help/zh/doc-detail/74006.htm#task-m1l-zqq-wfb "一型一密认证方式下，同一产品下所有设备可以烧录相同固件，包含相同的产品证书（ProductKey和ProductSecret）。设备发送激活请求时，物联网平台进行身份确认，认证通过，下发设备接入所需信息。")预注册：同一产品下设备烧录相同产品证书（ProductKey和ProductSecret）。开通产品的动态注册功能，设备通过动态注册获取DeviceSecret。
+   [一型一密](https://www.alibabacloud.com/help/zh/doc-detail/74006.htm#task-m1l-zqq-wfb "一型一密认证方式下，同一产品下所有设备可以烧录相同固件，包含相同的产品证书（ProductKey和ProductSecret）。设备发送激活请求时，物联网平台进行身份确认，认证通过，下发设备接入所需信息。")免预注册：同一产品下设备烧录相同产品证书（ProductKey和ProductSecret）。开通产品的动态注册功能，通过动态注册，设备不获取DeviceSecret，而是获取ClientID与DeviceToken的组合。
+   [子设备动态注册](https://www.alibabacloud.com/help/zh/doc-detail/89298.htm#section-xfq-zww-y2b)：网关连接上云后，子设备通过动态注册获取DeviceSecret。

四种方案在易用性和安全性上各有优势，您可以根据设备所需的安全等级和实际的产线条件灵活选择。方案对比，如下表所示。

表 1. 认证方案对比

| 对比项 | 一机一密 | 一型一密预注册 | 一型一密免预注册 | 子设备动态注册 |
| --- | --- | --- | --- | --- |
| 设备端烧录信息 | ProductKey、DeviceName、DeviceSecret | ProductKey、ProductSecret | ProductKey、ProductSecret | ProductKey |
| 云端是否需要开启动态注册 | 无需开启，默认支持。 | 需打开动态注册开关。 | 需打开动态注册开关。 | 需打开动态注册开关。 |
| 是否需要提前在物联网平台创建设备，注册DeviceName | 需要，产品下DeviceName唯一。 | 需要，产品下DeviceName唯一。 | 不需要。 | 需要，确保产品下DeviceName唯一。 |
| 产线烧录要求 | 逐一烧录设备证书，需确保设备证书的安全性。 | 批量烧录相同的产品证书，需确保产品证书的安全存储。 | 批量烧录相同的产品证书，需确保产品证书的安全存储。 | 网关可以本地获取子设备ProductKey。<br> * 将子设备ProductKey烧录在网关上。
 |
| 安全性 | 较高 | 一般 | 一般 | 一般 |
| 是否有配额限制 | 有，单个产品50万上限。 | 有，单个产品50万上限。 | 有，单个产品50万上限。 | 有，单个网关最多可注册1500个子设备。 |
| 其他外部依赖 | 无 | 无 | 无 | 依赖网关的安全性保障。 |
