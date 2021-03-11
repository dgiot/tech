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

产品管理是基础功能，提供产品创建、编辑，发布产品到主数据、对不再使用的产品进行归档，实现对自己研发、在产及停产的产品进行管理。

## 应用开通

产品管理是数字工厂提供的官方应用，在应用管理中选择“我的推荐”，然后单击“产品管理”中的“开通”按钮。

![](https://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/2380779851/p53483.png)

在产品管理中的详情页面，单击“开启服务”。

![](https://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/2380779851/p53485.png)

阅读授权声明后，勾选“我已阅读并同意授权协议”后，单击“同意”。

![](https://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/2380779851/p53486.png)

同意授权以后，将开通应用，在我的应用中可以看到应用的最新状态。

![](https://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/3380779851/p53489.png)

## 添加产品

**基本信息**

添加产品，分别填入完整信息

![](https://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/3380779851/p53492.png)

产品名称：填写产品名称，中英文，字数不超过60个。

基本单位：指当前产品的计量单位，可以自己填写，如下图所示：

产品货号/编码：指当前产品的货号或编码，支持中英文和中横线，字数不超过30个。

工艺路径：选择当前产品的工艺路径，若没有，则单击**设置工艺路径**，进入工艺路径的设置（参见工艺路径的设置：数字工厂>设置中心>工艺设计）

产品类目：指当前产品归属的产品类目，这里需要先在主数据的进行物料类型（先配置物料组为成品，再在归属于成品的物料类型，这个物料类型就是产品类目）的配置和发布，如下图所示：

![](https://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/3380779851/p53494.png)

配置完成后，再确认完成发布，然后就可以正常选择产品类目，如下图所示：

![](https://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/4380779851/p53506.png)

## 自定义属性

自定义属性，指对产品进行属性的定义，支持多个属性的自定义，用户首次完成属性定义后，下次编辑或新增产品时，可以选择已经存在属性，进行属性值的输入

![](https://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/4380779851/p53509.png)

新增完成后，如下图所示：

![](https://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/4380779851/p53511.png)

用户可以完成属性名、属性值以及产品图片的录入及上传。

## 发布

用户完成基本属性和自定义属性的信息录入后，单击**提交**，如下图所示：

![](https://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/4380779851/p53520.png)

产品提交完成，发布后该产品才能提供给其他业务系统调用/使用，并且发布不可恢复，一旦用户确认发布，则可同时发布到主数据中，供其他业务系统调用。

## 全部产品

当前用户下全部的产品列表，包括已发布、待发布和已归档的产品，如下图：

![](https://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/4380779851/p53521.png)

全部产品中，可以对不同状态的产品进行管理，如对已发布状态的产品，进行编辑、复制、归档操作。

## 已发布产品

展示已经发布的产品，如下图所示：

![](https://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/5380779851/p53522.png)

面向已发布产品，支持编辑、复制、归档操作。

编辑：除了产品货号/编码不可编辑外，其他的内容都可以编辑。

复制：复制当前产品的全部信息，用户可以在这个基础上修改。

归档：用户选择归档，则如下图所示：

![](https://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/5380779851/p53523.png)

单击**确认**后，则该产品归档，一旦归档，则不可再修改，进入到归档产品。

## 待发布产品

处于待发布状态的产品，支持编辑、复制、发布和删除。

![](https://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/5380779851/p53524.png)

编辑：指编辑当前产品，除了产品货号/编码不可编辑外，其他均可编辑。复制：指复制当前的产品的全部内容，用户可以在这个基础上修改。发布：指发布当前的产品。删除：指删除当前的产品，处于待发布状态下的产品，可以删除。

## 已归档产品

处于已归档状态的产品，不可删除和编辑。如下图所示：

![](https://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/5380779851/p53525.png)

详情：单击后，能查看到当前产品的详细情况。
