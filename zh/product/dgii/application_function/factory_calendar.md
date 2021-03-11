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

工厂日历为工厂调度人员提供工厂班次管理和安排停产停工时间的功能。该应用提供“工厂日历管理”和“查看工厂日历”两个功能点，可以在[权限管理](http://icms.alibaba-inc.com/cgooue)[站点管理](http://icms.alibaba-inc.com/hv280t)

## 应用开通

工厂日历是数字工厂提供的官方应用，在应用管理中选择“我的推荐”，然后点击“工厂日历”中的“开通”按钮。

![](http://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/3300359951/p53495.png)

在工厂日历中的详情页面，点击“开启服务”

![](http://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/3300359951/p53496.png)

阅读授权声明后，勾选“我已阅读并同意授权协议”后，点击“同意”。

![](http://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/3300359951/p53497.png)

同意授权以后，将开通应用，在我的应用中可以看到应用的最新状态。

![](http://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/4300359951/p53499.png)

## 工厂日历管理

**班次管理**

在工厂日历配置中可以根据工厂模型为全厂设置班次，也可以为具体的车间、产线、加工中心指定班次，在左边的工厂模型导航中选择要设定班次的模型，然后点击“新增班次”按钮。

![](http://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/4300359951/p53500.png)

在弹出的新增班次页面中，填写班次名称、班次的开始上班时间和下班时间，选择班次的生效日期（开始生效日期最早从第二天开始生效，如果结束日期不填写表示永久生效），填写班次描述信息。

![](http://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/4300359951/p53501.png)

如果班次中有非有效生产时间，比如班前会、午休时间等，增加非生产时间，非生产时间将影响有效设备综合效率中的时间开动率的计算，非生产时间不计算在有效作业时间内，比如8个小时的班次时间，如果前面有15分钟的班前会

![](http://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/4300359951/p53502.png)

有效作业时间计算方法为：

![](http://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/4300359951/p68828.png)

如果还有班次内其他计划非生产时间，可以继续新增时间段。

![](http://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/4300359951/p53505.png)

班次新增完后将出现在班次管理列表中，可以对班次进行修改和删除。

![](http://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/4300359951/p53507.png)**计划停产管理**

计划停产时间为根据假期、人力安排、设备保养等情况提前计划的非生产时间，这个时间段也不计算在有效作业时间。与班次一样可以设置全厂的计划停产时间，也可以为具体的车间、产线、加工中心安排停产。选择要设置的工厂模型，然后选择“计划停产管理”，点击“新增计划停产”。

![](http://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/4300359951/p53510.png)

在弹出的页面中输入新的计划停产名称和描述。

![](http://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/4300359951/p53512.png)

停产时间有两种方式，一种为指定时间段，一种为按星期循环。

**指定时间段**

如果停产时间为指定时间段，为指定停产的具体开始日期和结束日期。

![](http://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/4300359951/p53514.png)**按星期循环**

如果停产时间为按照星期循环，在时间选择首先选中“按星期”，然后选择星期几，最后选择具体的开始休息时间和结束时间。

![](http://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/4300359951/p53516.png)

## 查看工厂日历

在查看工厂日历的功能中，可以查看具体每个工厂模型的每天的生产和停产安排。首先在左侧选择工厂模型导航中要查看工厂日历的模型。

![](http://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/4300359951/p53517.png)

在生产日历中可以选择具体的日期，能看到这一天是工作日还是休息日。

![](http://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/4300359951/p53518.png)

在日历中选择具体的日期以后，也可以看到当天具体的班次安排。

![](http://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/4300359951/p53519.png)
