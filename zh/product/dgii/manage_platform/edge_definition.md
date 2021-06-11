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

## 边缘数据源

完成工业八爪鱼组件安装后，选择边缘数据源定义，将列出已有数据源列表，可以单击**新建数据源**。![新建数据源](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/6118359951/p132400.png)

数据源有四种类型，分别是数据库、API、消息队列和服务模型，下面分别介绍每种类型的数据源：

**数据库类型数据源**

第一种数据源类型为数据库，现在的数据库支持以下四种：

+   Sqlserver （2008企业版、2008 R2企业版、2017 CU5以上 Developer/企业版）
+   Mysql (5.6以上）
+   Oracle（11g以上）
+   PostgreSql

**API类型数据源**

第二种数据源类型为API，如果在边缘上开放了Web API进行数据对接，可以选择这种类型，API类型的数据源需要填写Web API的URL地址以及选择认证方式，API认证方式支持以下三种：

+   无需认证
+   Basic Auth
+   AppKey Auth

**消息队列类型数据源**

第三种数据源类型为消息队列，如果在边缘中部署了Kafka或者MQTT类型的消息队列，可以选择消息队列这种类型。

**服务模型类型数据源**

最后一种数据源类型为服务模型，服务模型数据源将作为数据集成任务中服务模型的提供方或者依赖方。

## 数据库类型数据源

新建数据库类型的数据源后，需要再进一步选择边缘系统的数据库型号，输入数据库的主机名称或者IP地址、名称、端口号、链接数据库的账号以及该账号的访问密码，八爪鱼应用将主动监控边缘系统的数据变化进行主动数据集成。![数据源](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/6118359951/p132411.png)

如果需要监控数据库的数据发生变化然后同步到云端，需要**是否监控增量**选择是。一个数据源可能对应通过多个边缘集群进行对接，需要选择对应的边缘集群。![是否增量](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/6118359951/p132417.png)

如果数据库是Sqlserver监控增量需要开通Sqlserver CDC服务：

首先确保SQL Server Agent（代理服务）已启动；![CDC](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/6118359951/p93514.png)

然后激活数据库CDC支持，执行以下SQL：

```auto
USE 数据库名;
EXEC sys.sp_cdc_enable_db
```

如果数据库是Mysql 监控增量需要配置binlog服务：

在Mysql机器的/etc/my.cnf的mysqld下添加如下配置：

```auto
[mysqld]
    server-id = 123
    log_bin = mysql-bin
    binlog_format = row
    binlog_row_image = full
    expire_logs_days = 10   
```

如果数据库是Oracle，配置增量监控请查看[Oracle增量监控设置](https://help.aliyun.com/document_detail/176935.htm#topic-2577423)。

## 消息队列类型数据源

第二种数据源类型为消息队列，如果在边缘中部署了Kafka或者MQTT类型的消息队列，可以选择消息队列这种类型，消息队列支持以下两种：

+   Kafka
+   MQTT

其中Kafka需要填写的参数为对应队列broker（多个broker用逗号隔开），鉴权是否采用SSL，如果是SSL的还需要填写用户名和密码：![kafak](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/6118359951/p141425.png)

其中Kafka需要填写的参数为对应队列broker（多个broker用逗号隔开），鉴权是否采用SSL，如果是SSL的还需要填写用户名和密码![kafak](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/6118359951/p141425.png)

其中mqtt需要填写的参数为对应队列的实例ID，broker（多个broker用逗号隔开），鉴权是否采用SSL，如果是SSL的还需要填写用户名和密码![mqtt](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/7118359951/p141427.png)

## API类型数据源

第三种数据源类型为API，如果在边缘上开放了Web API进行数据对接，可以选择这种类型，API类型的数据源需要填写Web API的URL地址以及选择认证方式，API认证方式支持以下三种：

+   无需认证
+   Basic Auth
+   AppKey Auth

![API](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/7118359951/p132429.png)

## 服务模型类型数据源

如果数字工厂的应用需要通过[服务总线](https://help.aliyun.com/document_detail/114863.html)与边缘应用进行集成，需要创建一个一次性交付的边缘接入应用作为边缘服务的代理。首先在应用托管中[创建应用](https://help.aliyun.com/document_detail/139544.html)，应用创建成功后在版本列表中的**模型和权限**中声明服务依赖和服务提供所有需要代理的接口，比如仓储管理服务（WarehouseManagementService）中所有的API：

![服务模型](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/6035310061/p165190.png)

选择服务提供的时候注意端口填写**8089**：![端口](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/6035310061/p165193.png)

创建好应用后，在边缘数据源定义中就可以选择数据源类型为服务模型，然后从已经安装的八爪鱼应用中选择该实例：

![选择边缘应用实例](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/7035310061/p165111.png)

在进行[服务集成](https://help.aliyun.com/document_detail/162555.htm#reference-2446273 "当企业开通的工业应用之间存在基于物联网应用托管服务总线声明的服务模型时，服务的调用者和提供者之间的路由关系，需要通过服务集成完成。")的时候就可以选择改应用作为服务提供方或者依赖方与工业应用进行集成：![集成](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/7035310061/p165194.png)

## 数据源连接测试

新建好数据源以后可以在数据源列表中进行测试并下发配置到边缘集群的八爪鱼组件中，单击**测试下发**：![测试下发](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/7118359951/p132424.png)

将测试的数据源IP、用户名称和密码是否正确。![测试连接](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/7118359951/p132426.png)
