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

数字工厂能够通过邮件推送和站内推送的方式把消息及时准确的推送给指定的人员。

## 推送服务设置

数字工厂现提供站内信、报警推送和邮件推送服务三种方式，默认已经开通站内信和报警推送。如需要在该平台中使用邮件通知，则需要设置您的邮件发送服务器信息，设置后，平台会在需要发送邮件时，调用该邮箱帐号完成邮件发送。点击前往配置，配置邮件推送服务。

![](https://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/0019381951/p53228.png)

在弹出的页面中输入推送邮件的SMTP服务相关配置和发送邮件的企业邮箱和邮箱密码。

![](https://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/0019381951/p53230.png)

## 报警定义

如需要在平台上使用钉钉推送服务，需要首先绑定企业的钉钉账号，点击“前往绑定账号”，进入钉钉对接中进行账号绑定。

![](https://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/0019381951/p63619.png)

在通知管理的报警定义中可以定义常用的报警，点击“新建报警”。

![](https://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/1019381951/p53231.png)

在弹出的页面中填写报警唯一的标识ID，选择报警级别（提醒/警告/报警），输入报警定义文本，然后确认。

![](https://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/1019381951/p53232.png)

一旦定义了报警，应用或者规则可以按照报警id触发报警。报警将通过邮件或者站内提醒的方式推送给指定的人员。下图就是指定人员收到了ID为404的库存数量不足的警告提示。

![](https://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/1019381951/p53233.png)

## 规则管理

**新建规则**

用户可以定义合适的规则来触发报警消息，规则触发的条件主要是设备属性达到指定条件自动触发报警。

![](https://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/1019381951/p53234.png)

在弹出的页面中首先输入规则名称，然后选择触发报警规则生效的条件，首先选择设备属性，然后输入判断条件，下图为监控冲压机的设备不良品累计值，如果不良品数量大于100将触发质量超出设定值的消息推送。

![](https://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/1019381951/p53236.png)

可以继续添加判断条件，如果条件为多个的情况下，所有条件满足后才能触发规则。比如增加新的判断条件为冲压机产量大于100000，那么当产量超过100000的时候，一旦不良品超过100，将触发该规则。

![](https://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/1019381951/p53238.png)

设定好判断条件后，可配置通知，通知方式可选择站内信或电子邮件，通知范围可以指定组织或者角色甚至到具体某个人，填写通知内容为具体通知的正文文本。

![](https://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/2019381951/p53239.png)

如果需要关联定义好的报警信息，可以选择对应的报警ID，将用报警的方式推送给指定接收范围的人员。

![](https://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/2019381951/p53241.png)**注：如果是并且条件设定，一旦出现物联网设备离线的情况，将保持离线前的属性值作为判断条件，比如规则设定为传感器温度大于1000度，并且急停按钮的值为关的情况为触发报警通知，如果急停按钮的值一直为关，在传感器温度大于1000度的同一时间，急停按钮的物联网设备由于特殊原因已经离线，还是会触发规则，推送报警通知。**

## 启动规则

规则新建完毕后，默认是不启动生效的，需要手动开启规则。

![](https://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/2019381951/p53252.png)

启动规则后，将监控是否达到判断条件，一旦达到判断条件会自动触发报警和消息推送，在规则管理列表中也会列出最近30天规则被触发的次数。

![](https://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/2019381951/p53254.png)![](https://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/2019381951/p53255.png)**修改规则**

如果需要调整规则，点击规则后的“编辑”操作，修改规则内容，一旦修改确认后将立即生效。

![](https://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/2019381951/p53256.png)**删除规则**

已经启动的规则不能删除，如果确认需要删除规则先关闭规则后，再点击规则后的“删除”操作。

![](https://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/3019381951/p53257.png)
