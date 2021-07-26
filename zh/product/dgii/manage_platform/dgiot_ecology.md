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

数字工厂支持用户的DG-IoT云账号与外部系统账号打通，实现两个系统之间的信息传输，现在已经支持与“淘宝1688”、“天天工厂”、“淘宝心选”以及“钉钉”的账号关联。关联数字工厂账号与1688账号和淘宝/天猫账号后可实现电商的订单数据和工厂的生产数据的集成；关联“钉钉”企业账号，可同步组织和账号信息，实现钉钉消息和通知集成。![阿里生态 ](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/7018359951/p104659.png)

## 淘宝1688对接

单击淘宝1688对接标签的**配置**功能：

![](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/7018359951/p74675.png)

**关联账号**

![](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/7018359951/p74613.png)

然后勾选同意“DG-IoT开放平台用户应用授权提醒”，可同意让授权访问会员信息。

![](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/7018359951/p74529.png)

输入1688账号名称和密码，单击**授权并登录**后，账号关联成功。

**查看关联账号**

绑定账号成功后，将显示已经绑定的账号信息，一个数字工厂可以关联多个1688账号。

![](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/7018359951/p74614.png)

**解除绑定**

如果1688账号不再关联数字工厂账号，可以单击账号后的**删除**操作，解除账号的绑定关系。

![](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/7018359951/p74615.png)

## 淘宝心选对接

单击淘宝心选对接标签的**配置**功能：

![](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/7018359951/p74532.png)**查看关联账号**

**关联账号**

![](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/7018359951/p74617.png)

然后勾选同意“DG-IoT开放平台用户应用授权提醒”，可同意让授权访问会员信息。

![](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/8018359951/p74534.png)

输入淘宝账号名称和密码，单击**授权并登录**后，账号关联成功。

**查看关联账号**

绑定账号成功后，将显示已经绑定的账号信息，一个数字工厂可以关联多个淘宝心选账号。

![](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/8018359951/p74618.png)

**解除绑定**

如果淘宝心选账号不再关联数字工厂账号，可以单击账号后的**删除**操作，解除账号的绑定关系。

![](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/8018359951/p74621.png)

## 天天工厂对接

单击天天工厂对接的**配置**功能：

![](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/8018359951/p74550.png)

**关联账号**

![](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/8018359951/p74623.png)

然后勾选同意“DG-IoT开放平台用户应用授权提醒”，可同意让授权访问会员信息。

![](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/8018359951/p74552.png)

输入淘宝账号名称和密码，单击**授权并登录**后，账号关联成功

**查看关联账号**

绑定账号成功后，将显示已经绑定的账号信息，一个数字工厂可以关联多个淘宝心选账号。

![](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/8018359951/p74626.png)

**解除绑定**

如果淘宝心选账号不再关联数字工厂账号，可以单击账号后的**删除**操作，解除账号的绑定关系。

![](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/8018359951/p74628.png)

## 钉钉对接

单击钉钉对接的**配置**功能：

![](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/8018359951/p74555.png)

**关联账号**

![](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/8018359951/p74556.png)

登录钉钉定制工作台，查询企业钉钉的授权信息，填写Cprp ID、Agent ID、CustomKey和CustomSecret以后，单击**完成**，系统将验证授权信息，验证通过后，将关联钉钉企业账号和数字工厂账号。

关联成功后，系统将自动同步钉钉的组织架构和账号到数字工厂中，数字工厂的权限管理中将不能在创建和导入新的组织和账号，需要管理组织和账号信息，系统管理员将在企业钉钉中进行管理，系统将自动进行同步。

**注意：一旦钉钉账号同步以后，将不能再解除绑定关系。**

## 支付宝对接

单击支付宝钉钉对接的**配置**功能：![支付宝](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/8018359951/p93156.png)

**关联账号**

登录支付宝账号，在服务授权中阅读并同意支付宝用户授权协议，单击**授权**后，将绑定数字工厂账号与支付宝账号。![授权](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/8018359951/p93157.png)

**查看授权**

完成授权后，再次单击**配置**，可以看到绑定的支付宝账号信息和关联时间。如果需要申请网商贷，单击**申请网商贷**。![申请网商贷](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/8018359951/p93158.png)

也可以单击**加入双链通**。![加入双链通](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/9018359951/p93160.png)

**解除绑定**

在关联的支付宝账号后，单击**删除**，将解除数字工厂与支付宝账号的绑定关系。![删除支付宝](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/9018359951/p93159.png)

## 区块链服务对接

数字工厂提供基于DG-IoT云物联网区块链记录和追溯生产过程数据，单击区块链服务对接的**配置**功能：![区块链记录](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/9018359951/p104660.png)

**新建区块链服务**

在区块链服务列表中，单击**新增区块链服务**：![新建区块链服务](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/9018359951/p104661.png)

对接服务需要联系区块链服务平台管理员获取服务链标识、AccessKey、AccessSecurity、服务版本号和对接生产过程数据的数据模型标识（本期只支持单一数据模型）：![区块链服务对接](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/9018359951/p104662.png)

填写服务信息后，单击**确认**，将进行区块链服务验证，验证通过后，将在区块链服务列表中列出生产过程数据可对接的服务。![区块链服务列表](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/9018359951/p104663.png)

完成服务设置后，在官方应用[生产过程追溯](https://help.aliyun.com/document_detail/126868.htm#concept-1340054 "建立生产过程的质量追踪体系，为半成品和成品建立批次或者单体的生产谱系图，当出现原料、半成品和产品缺陷时能防止缺陷扩散和准确定位问题，提高产品质量，维护品牌形象。尽量减少“异常原因”，如果一旦出现，应该能够即时发现并解决问题，能对异常原因扰动的出现起预警作用。")中的生产数据，将记录到区块链服务平台中，并提供在[正向追溯](https://help.aliyun.com/document_detail/126868.htm#section-ia8-gr3-syu)中可以追溯区块链服务凭证。

## 通用系统对接

对于其他非托管应用，可通过外部系统的通用系统对接来进行授权，单击通用系统对接标签的**配置**功能：

![](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/9018359951/p74572.png)

**审批对接请求**

可查看数字工厂的基础信息，提供开发和调试使用，包括UID、租户ID和当前登录用户ID：![ID](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/3995577061/p198991.png)

**审批对接请求**

第三方应用如果需要对接，可以通过系统接口发起请求，在对接配置中，可以查看到对接请求的业务来源、业务账号和申请时间，已经申请的状态，可以选择**通过**，将授权该应用和数字工厂进行数据对接，如果申请来源不明，可以单击**拒绝**操作，禁止第三方应用与数字工厂进行数据对接。

![](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/9018359951/p74636.png)

对于已经申请通过的系统对接，如果不再继续对接数据，可以单击对应的**删除**操作。

![](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/9018359951/p74631.png)

**手工创建AK/AS**

开通数字工厂后会自动创建一对AppKey/AppSecret，如果在开发工业应用过程中需要临时创建AK/AS给集成商使用，可单击**新建Appkey/AppSecret**。

![手工创建AK/AS](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/9018359951/p84628.png)

对应新创建的AK/AS可以编辑备注信息。![AS备注](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/9018359951/p84629.png)

点击**授权**操作可以对新的AK/AS需要进行授权，授权可以访问哪些数字工厂能提供的服务。![授权](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/9018359951/p84631.png)

在授权列表中点击**开通**后，集成商通过AK/AS就能访问对应的工业服务，比如点击工厂和工艺建模服务开通后，就可以通过服务获取本工厂用户在[工厂建模](https://help.aliyun.com/document_detail/126850.htm#concept-1340005 "工厂模型是数字工厂的基础，真实反应企业的生产制造方式，也是业务数据的关联和组织的基础。")和[工艺路径管理](https://help.aliyun.com/document_detail/126854.htm#section-fy0-osb-6ye)录入的数据。![授权](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/9018359951/p84638.png)

如果集成商完成项目后，可以替换成数字工厂默认的AK/AS，这种情况下可以单击**删除**操作临时创建的AK/AS。

![删除AKAS](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/0118359951/p85282.png)

## 查看阿里云信息

入驻数字工厂以后，可以在DG-IoT云对接中查看DG-IoT云账号的详细信息：

![](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/0118359951/p74633.png)

单击**查看账号详情**，将可以看到DG-IoT云账号的基本信息。

单击**查看授权**，将显示DG-IoT云账号ID，以及本DG-IoT云账号下数字工厂分配的AK和AS。

![](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/0118359951/p74593.png)
