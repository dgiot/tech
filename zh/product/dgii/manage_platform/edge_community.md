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

边缘集群管理能快速集成现有边缘侧系统的数据和服务。

## 集群管理

单击**边缘集群管理**，将列出现有数字工厂下的边缘集群，显示集群的名称、类型和状态信息。

![边缘集群列表](http://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/6690947951/p132215.png)

单击**创建集群**，可以创建一个新的边缘集群，如果是第一次创建，还需要开通以下相关的阿里云服务：

+   日志服务
+   授权访问控制
+   云资源访问授权

以开通日志服务为例，点击日志服务（SLS）：![日志](http://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/6690947951/p141366.png)

登录DG-IoT云以后，选择日志服务服务协议然后单击立即开通：![日志服务开通](http://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/6690947951/p141332.png)

开通对应边缘集群的服务以后，可以创建第一个边缘集群，首先输入集群的名称，选择类型为EdgeBox集群，以及边缘集群在局域网的网段，网段输入格式为：192.168.1.0/24，多个IP段之间以“,”分隔，也可以单击下方**获取节点IP段**复制脚本到边缘服务器中执行获得。

![创建边缘集群](http://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/6690947951/p132216.png)

在高级配置中，可以添加集群需要的环境变量，以及存储地址、路径以及NAS的服务地址段等信息。![边缘集群高级配置](http://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/6690947951/p132217.png)

最后选择是否需要开启日志服务，日志服务是需要单独收费，产品定价请[参看文档](https://help.aliyun.com/document_detail/107745.html)，如果边缘集群不需要使用日志功能请单击取消：![日志服务](http://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/6690947951/p141347.png)

边缘集群也可以直接在DG-IoT云工作台进行管理，操作文档参看[集群管理](https://help.aliyun.com/document_detail/114829.html)。

集群创建好以后可以单击**管理**。![管理](http://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/6690947951/p132353.png)

登录DG-IoT云工作台后可创建集群下的通用节点。

![节点](http://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/6690947951/p93132.png)

## 应用安装

边缘集群和节点配置好以后，集群状态将变成**运行中**，应用状态为**应用未安装**，单击**应用安装**：![应用安装](http://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/6690947951/p132354.png)

将列出所有可以安装在边缘集群上的所有的组件，如果需要完成边缘系统与DG-IoT云数字工厂的数据集成和服务集成，可以选择工业八爪鱼进行安装：![八爪鱼安装](http://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/6690947951/p141414.png)

把DG-IoT云工业边缘官方组件**八爪鱼**下载到边缘集群中运行，从下载到安装完成大概需要10分钟。

应用安装成功后将显示应用状态为**数据集成中**。![数据集成中](http://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/6690947951/p132399.png)

如果组件发布了新版本需要对已安装组件进行升级，可以单击升级组件：![升级组件](http://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/7690947951/p141416.png)
