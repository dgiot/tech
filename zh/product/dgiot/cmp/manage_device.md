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

在物联网平台成功创建设备后，您可以在控制台管理、查看具体设备信息。

## 管理账号下的设备

1.  登录[物联网平台控制台](http://iot.console.aliyun.com/)。
2.  在左侧导航栏，选择设备管理 > 设备，进入设备页。
![设备列表](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/1856404161/p102322.png)

| 任务 | 操作步骤 |
| --- | --- |
| 查看具体产品下设备信息 | 在页面左上方选择某个产品。<br> 您可查看设备当前状态：<br> *   未激活：设备未接入物联网平台。<br> * 您可[下载设备端SDK](https://www.alibabacloud.com/help/zh/doc-detail/42648.htm#concept-jlk-mjl-vdb "物联网平台提供各类设备端SDK，简化开发过程，使设备快速上云。")开发设备，将设备接入物联网平台，进行激活。<br> *   在线：设备已激活，与物联网平台成功连接。<br> *  离线：设备已激活，与物联网平台断开连接。|
| 搜索设备 | 输入设备名称、设备备注名称或设备标签搜索具体设备，支持模糊搜索。 |
| 查看具体设备信息 | 单击设备对应的查看。 |
| 删除某个设备 | 单击设备对应的删除。<br> * 说明 设备删除后，该设备证书信息将失效，该设备在物联网平台上的数据记录随之删除。|

## 查看具体设备信息

在设备列表中，单击设备对应的查看按钮，进入设备详情页。

![设备详情国际站](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/8284693161/p242343.png)

| 任务 | 操作步骤 |
| --- | --- |
| 查看设备信息 | 查看设备基本信息，包括设备证书信息、[固件信息](https://www.alibabacloud.com/help/zh/doc-detail/58328.htm#task-prw-fzz-xdb "物联网平台提供OTA升级与管理服务。首先确保设备端支持OTA服务，然后在控制台上传新的升级包，并将OTA升级消息推送给设备，设备即可在线升级。本文主要介绍OTA升级的使用限制和操作流程。")、扩展信息、标签信息等内容。 |
| 查看设备数据 | 在物模型数据页签下：<br> *  选择运行状态页签，查看设备上报的当前属性值，属性记录数据和期望属性值。<br> * 选择事件管理页签，查看设备上报的事件记录。<br> *  选择服务调用页签，查看设备服务调用记录。 |
| 查看设备日志 | 在日志服务页签下，可以查看云端运行日志。开启设备本地日志上报开关后，还可以查看设备本地日志。更多信息，请参见[云端运行日志](https://www.alibabacloud.com/help/zh/doc-detail/44542.htm#concept-a32-x4w-f2b "您可以在物联网平台控制台日志服务页，查询云端运行日志。该日志包含了物联网平台、设备、您的应用程序三者之间的交互通信记录。本文主要介绍云端运行日志中的错误码和排错方法。")、[设备本地日志](https://www.alibabacloud.com/help/zh/doc-detail/159427.htm#task-2454897 "设备（包括网关和子设备）可以上报日志到云端。您可以在物联网平台控制台日志服务页，查询设备本地日志，进行故障分析。")。 |
| 查看设备分组 | 在分组页签下，查看设备的分组信息。可以单击添加此设备到分组将设备添加到已有的分组。更多信息，请参见[设备分组](https://www.alibabacloud.com/help/zh/doc-detail/90386.htm#task-ejm-qp2-cfb "物联网平台提供设备分组功能。您可以通过设备分组来进行跨产品管理设备。本章节介绍如何在物联网平台控制台创建设备分组和管理分组。")。 |

## 相关API

| API | 描述 |
| --- | --- |
| [RegisterDevice](https://www.alibabacloud.com/help/zh/doc-detail/69470.htm#reference-pc2-kpz-wdb) | 注册设备。 |
| [QueryDeviceDetail](https://www.alibabacloud.com/help/zh/doc-detail/69594.htm#reference-rrg-lpz-wdb) | 查询设备详情。 |
| [BatchQueryDeviceDetail](https://www.alibabacloud.com/help/zh/doc-detail/123470.htm#doc-api-Iot-BatchQueryDeviceDetail "调用该接口批量查询设备详情。") | 批量查询设备详情。 |
| [QueryDevice](https://www.alibabacloud.com/help/zh/doc-detail/69905.htm#reference-vhm-npz-wdb) | 查询产品的设备列表。 |
| [DeleteDevice](https://www.alibabacloud.com/help/zh/doc-detail/69281.htm#reference-jn4-3qz-wdb) | 删除设备 |

管理设备相关API的更多信息，请参见[设备管理相关API](https://www.alibabacloud.com/help/zh/doc-detail/69893.htm#section-dcj-qzc-xdb)。
