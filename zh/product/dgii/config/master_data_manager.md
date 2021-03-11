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

数字工厂提供了人员、物料组、物料类型、物料、设备类型、设备型号和生产设备等默认定义元数据，企业管理人员也可以根据本企业具体情况对主数据进行扩展。系统管理人员可以在数据管理中统一维护所有数字工厂的主数据。每个主数据都可以分配给不同的角色去管理，配置不同的导航入口去使用。

![](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/9808359951/p74705.png)

## 查询主数据

[登录](https://help.aliyun.com/document_detail/126840.htm#section-9jj-o1j-jok)数字工厂，在设置中心的数据管理中有主数据管理的功能，单击**主数据管理**，左边列出了用户定义的所有主数据元数据，可以单击选择要管理哪一种主数据，以管理物料组主数据，单击**物料组**进入物料组管理，将列出企业已有的物料组。。![查询条件](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/9295577061/p198957.png)

查询条件是根据[元数据管理](https://help.aliyun.com/document_detail/126855.htm#section-gac-da1-uv1)的查询属性动态生成，如果查询条件较多，可以单击**更多查询条件**，来输入查询条件进行主数据管理。![更多查询条件](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/0395577061/p198958.png)

## 新建主数据

如果需要添加新的物料组，单击**新增数据**按钮。

![](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/9808359951/p53469.png)

在弹出的页面输入新的物料组定义的属性，需要录入的内容将根据元数据的定义来决定。

![](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/9808359951/p53470.png)

新创建的主数据的状态为**待发布**，后续可以对每个主数据做对应的操作，主数据的操作将变更数据状态，数据状态图如下：

![](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/9808359951/p74703.png)

## 发布主数据

一旦物料组添加完成并确认，单击**发布**操作，发布给第三方应用使用。

![](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/9808359951/p53472.png)

未发布给其他应用使用的主数据可以单击**删除**。

![](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/0908359951/p53474.png)

如果已经发布的主数据，由于工业应用某些特殊情况没有收到订阅的[数据通知](https://help.aliyun.com/document_detail/148389.htm#concept-2359582)，可以在已发布的列表中重新进行发布操作：![发布](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/0908359951/p104752.png)

搜索到需要重新发布的主数据，单击**发布**操作，将把该数据重新发布给订阅数据的工业应用。![重新发布](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/0908359951/p104755.png)

## 归档主数据

一旦发布给其他应用使用的主数据，状态为已发布，不再使用的主数据，请单击**归档**，归档的主数据表示其他业务应用不能再使用，该主数据已停用。

![](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/0908359951/p53476.png)

## 批量导入主数据

支持通过编写CSV文件批量导入物料组数据，单击**文件导入**。

![](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/0908359951/p53479.png)

根据导入模板创建CSV文件，表头为主数据属性标识，每一行为一条主数据，对应填写属性值，示例如下：

![](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/0908359951/p53480.png)

在弹出页面中选择准备好的导入文件，然后确认导入。

![](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/0908359951/p53481.png)

批量导入成功后，将在列表中列出文件导入的物料组数据。

![](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/0908359951/p53482.png)

如果导入的数据中文出现乱码，请注意必须用UTF-8编码编写CSV文件。

![](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/0908359951/p53484.png)

## 数据导出

可以选择把数据列表中的数据导出到本地CSV文件，单击**数据导出**。

![](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/0908359951/p53487.png)

选择保存本地文件夹，然后打开导出文件，示例如下：

![](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/0908359951/p53488.png)

## 清理主数据

主数据发布后将会把数据推送给订阅的工业应用进行使用，如果不再使用需要把状态设置为归档不能直接删除。在系统上线前的调试过程中，需要清除对应的已发布状态的主数据，给系统管理员提供了清理主数据的功能。在主数据管理页面中单击**清空**：![清空](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/1395577061/p198988.png)

将提示系统管理员是否继续该操作，并警示相关的影响：![删除](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/1395577061/p198989.png)

确认操作后将删除该类型的所有主数据。

也可以选择需要批量删除的多条主数据，如果有已发布的主数据，也会提示系统管理员的对该操作进行确认：![批量操作](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/1395577061/p198990.png)
