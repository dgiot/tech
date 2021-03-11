---
# 编写日期
date: 2020-02-07 17:15:26
# 作者 Github 名称
author: johnliu
# 关键字
keywords:
# 描述
description:
# 分类
category: 
# 引用
ref:
---

制造企业用户不仅仅是在物联网市场上选购工业应用，也可以在企业的数蛙云账号下自研的各种工业应用为本企业服务，数字工厂提供了工业应用开发完成后部署并集成到数字工厂以及运维工业应用的功能。

登录数字工厂，选择**平台管理**\-**应用运维**

![应用部署 ](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/1118359951/p77467.png)

## 创建应用

首先企业的IT团队在物联网的卖家后台中创建和发布对应的应用，文档可参考[应用部署](https://help.aliyun.com/document_detail/114834.html)。![应用列表](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/1118359951/p77695.png)

应用发布以后，在数字工厂的**平台管理**\-**应用运维**页面中，单击**创建应用**

![创建应用](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/1118359951/p77489.png)

在弹出的应用列表中选择需要集成到数字工厂的应用，然后单击**确认**。![选择应用 ](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/2118359951/p77620.png)

确认后，将在应用部署的列出刚才创建的应用，列出应用名称、应用类型、集群类型、运行环境以及当前应用的状态等信息。![应用部署列表](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/2118359951/p77701.png)

## 应用授权

单击应用列表中的操作**查看授权**，将查看该部署应用授权访问的数蛙云工业互联网平台提供的工业服务。

![查看授权](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/2118359951/p77833.png)

在查看授权页面可以看到分配给该应用的AppKey和AppSecret，使用这个AK/AS能调用服务并识别服务调用者。

在权限列表中，列出了所有提供的服务，单击**开通**将服务授权给该应用。

![开通](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/2118359951/p77835.png)

已经授权的服务，将显示状态为**已开通**。

单击服务中的接口说明，将跳转到物联网API中心中查看具体的接口说明文档。

![API](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/2118359951/p77836.png)

获得服务授权后，应用可以集成工业服务为数字工厂用户提供完整的业务功能，也能获取数字工厂统一规范和标准的数据，参看[应用集成文档](https://help.aliyun.com/document_detail/146364.html)。

## 启动/停止应用

应用运行状态为**已启动**，可单击**停止**操作，可停止正在运行的应用实例。

![停止](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/2118359951/p77837.png)

应用停止后，运行状态变为**已停止**，可单击**启动**操作，重新运行应用实例。

![停止](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/2118359951/p77838.png)

如果应用集成到数字工厂出现错误，状态显示为**应用集成失败**，单击**查看原因**，将显示集成失败的原因：![集成错误](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/7670640161/p212958.png)

## 查看应用集成内容

应用实现应用描述接口后，可集成应用的功能菜单和权限到数字工厂，具体文档可参看[实现应用描述接口](https://help.aliyun.com/document_detail/148388.html)。单击应用列表中的操作**集成内容**，将查看集成到数字工厂的内容，包括页面和权限。

![集成内容](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/2118359951/p77839.png)

在弹出页面中输入接口路径，并单击应用集成，将按照接口描述把工业应用内容集成到数字工厂。

![应用集成](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/2118359951/p77841.png)

在集成内容中将列出根据接口描述集成的页面列表和权限列表。集成的页面可以进行[导航设置](https://help.aliyun.com/document_detail/126844.htm#section-r1a-spq-lq3)，也可以在[权限管理](https://help.aliyun.com/document_detail/126845.htm#concept-1339984 "根据工业互联网企业级平台设置的安全规则或策略，限制企业人员仅能访问被授权的功能和页面。")中分配权限给相关角色。

![集成内容](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/2118359951/p77840.png)

## 应用监控

如果是账户分发型（参看[应用分类参考](https://help.aliyun.com/document_detail/114842.html)）的应用按照工业应用集成中[调试和验证](https://help.aliyun.com/document_detail/146364.htm#section-yr7-jmv-oom)的要求加入了应用JVM指标和前端页面指标，完成应用部署后可以对该应用进行应用健康监控以及应用访问分析，选择**应用运维**下的**应用监控**。

**监控设置**

首先对需要监控的内容进行设置，单击应用列表中应用的操作**监控设置**：![监控设置2](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/2374543061/p176120.png)在设置页面中首先设置应用责任人，应用监控触发的所有故障告警将通过短信和邮件的方式通知到责任人：![监控设置](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/2374543061/p176073.png)

设置好责任人后，对需要监控的指标进行设置，比如检查每分钟的心跳，如果10分钟内心跳低于8次，触发告警，同样的情况30分钟内不再触发告警，示例如下配置：![监控规则](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/2374543061/p176076.png)

对页面访问量也可以进行设置，比如10分钟内前端没有任何访问，每小时触发一次告警提示，示例如下配置：![告警](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/2374543061/p176078.png)

**启动监控**

设置好监控以后单击应用列表中应用的操作**启动监控**，系统按照规则触发了报警，将短信和邮件通知应用责任人。![启动监控](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/2374543061/p176118.png)

**查看监控指标**

单击应用列表中应用的操作**查看监控指标**，可以查看应用性能指标和前端访问量指标：![查看监控指标](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/2374543061/p176124.png)

在页面中选择应用指标或者指定页面的前端访问量以及查询时间段，将显示指标的统计结果：![免登接口](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/2374543061/p176192.png)

**查看故障记录**

![查看故障记录](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/2374543061/p176123.png)

将显示该应用触发的所有故障告警记录，记录包括监控名称和故障告警时间，单击**告警详情**可以查看指标监控周期、触发条件和触发值：![告警值](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/2374543061/p176193.png)

也可以**删除**单条告警记录或**清空故障记录**

**停止监控**

单击应用列表中应用的操作**停止监控**，将停止应用监控和告警通知：![停止监控](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/3374543061/p176122.png)

**查看应用托管详情**

单击应用列表中应用的操作**查看应用托管详情**：![查看应用托管详情](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/3374543061/p176125.png)将跳转到物联网应用托管服务中查看到应用实例的详情，监控详情参看[监控](https://help.aliyun.com/document_detail/114838.html)。

![应用详情](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/2118359951/p77832.png)
