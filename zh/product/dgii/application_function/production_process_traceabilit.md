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

建立生产过程的质量追踪体系，为半成品和成品建立批次或者单体的生产谱系图，当出现原料、半成品和产品缺陷时能防止缺陷扩散和准确定位问题，提高产品质量，维护品牌形象。尽量减少“异常原因”，如果一旦出现，应该能够即时发现并解决问题，能对异常原因扰动的出现起预警作用。

## 应用开通

生产过程追溯是数字工厂提供的官方应用，在应用管理中选择“我的推荐”，然后点击“生产过程追溯”中的“开通”按钮。

![](http://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/0800359951/p53542.png)

在生产过程追溯中的详情页面，点击“开启服务”。

![](http://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/0800359951/p53545.png)

阅读授权声明后，勾选“我已阅读并同意授权协议”后，点击“同意”。

![](http://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/1800359951/p53547.png)

同意授权以后，将开通应用，在我的应用中可以看到应用的最新状态。

![](http://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/1800359951/p64783.png)

## 应用配置

点击生产过程追溯的“应用配置“按钮，可以对该应用进行使用前的配置设定，包括设备关键参数、工艺关键参数和质检指标的设置：

![](http://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/1800359951/p64784.png)设备关键参数

在设备关键参数页面，可以对不同设备型号配置需要采集和分析的设备关键参数。进入设备关键参数的设置将列出所有的设备型号，可以对不同的设备型号设定生产方式和定义参数。

![](http://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/1800359951/p64786.png)

**生产方式设置**

设备的生产方式设置决定了设备采集的关键工艺参数实时数据的组织和分析方法，生产方式包括以下三种：

+   连续生产

**连续生产方式**主要适用于连续型生产的方式的设备，比如水泥生产的回转窑或者原油初馏加热炉等。

数据组织方式可以选择每小时、每班次或者每天。以每小时为例，如果选择每小时组织连续生产的设备关键参数，将根据参数每小时计算参数的均值、最大值等汇聚计算和进行数据的查看。

**注：班次需要根据工厂日历中定义的班次进行计算开始和结束时间。**

![](http://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/1800359951/p64788.png)

+   属性上报

**属性上报方式**适用于离散型或者流程型生产方式，选中设备的物模型中的属性能准确上报设备什么时候开始生产、什么时候结束生产并能确认生产的唯一标识（生产批次号或者产品序列号等）。

下图为例：选中属性上报方式，然后从物联网设备属性中选择设备状态等于1的情况说明设备开始生产，设备状态变化成2表示设备结束生产，同时设备属性生产批次号作为唯一号来组织设备采集的关键参数。

![](http://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/1800359951/p64789.png)

+   事件上报

**事件上报方式**适用于离散型或者流程型生产方式，选中设备的物模型中的某一个事件能准确上报设备什么时候开始生产、什么时候结束生产并能确认生产的唯一标识（生产批次号或者产品序列号等）。

下图为例：选中事件上报方式，然后从物联网设备属性中选择生产状态变化的事件，然后选择事件中的开始时间作为生产开始时间，结束时间作为生产结束时间，字符型的生产批次号作为唯一号，生产结束后物模型将根据生产实际情况来上报事件，根据上报时间来组织设备采集的关键参数。

![](http://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/1800359951/p64790.png)

**定义参数**

设置好设备型号的生产方式以后，下一步可以添加设备的关键参数，点击“定义参数”。在参数列表中将分别列出该设备型号下面的计量型、计点型和计件型三种类型的设备关键参数。

![](http://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/1800359951/p64792.png)

+   计量型参数

计量型的设备关键参数是连续型随机变量，比较典型的是设备压力、液位等参数。创建计量型参数需要输入参数名称，然后选择采集参数的物联网设备属性，以及采样频率（单位：秒）。

**注：采样频率应该大于设备属性上报的频率，比如通过物模型属性每分钟上报参数的实时值，那计量型的设备关键参数应该大于60秒，保证每个采集周期中的有最新的实时值。**

![](http://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/1800359951/p64793.png)

如果需要对参数进行SPC（统计过程控制），还需要设定参数的上规格限（USL）或者下规格限（LSL）。

上下规格限设置有两种方式，一种直接选择USL或LSL对应的物联网设备属性，系统将根据物联网设备上报值直接取USL和LSL；另一种是指定参数的设定值对应的物联网设备属性，然后再输入USL和LSL的计算公式，系统将根据物联网设备上报的设定值以及计算公式，实时计算USL和LSL，比如冲压压力设定值通过物联网上报为600吨，USL为设定值+5%，LSL为设定值为-5%，实时计算USL为630吨，LSL为570吨。

USL（冲压压力） = 600吨 \* (1 + 5%) = 630吨

LSL（冲压压力） = 600吨 \* (1 - 5%） = 570吨

计量型参数的统计包括：最大值、最小值、均值、方差、极差和标准偏差。用户可以选择需要进行统计的方式，系统将根据生产开始时间和生产结束时间的采集上的参数实时值，进行统计计算。

+   计点型参数

计件型参数是属于离散计数型统计的一种，主要是统计一定条件下参数的发生数，比如一个产品的缺陷数量或者生产一个批次某个动作发生的次数。

![](http://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/1800359951/p64794.png)

通过物联网平台获取最新的参数值有两种方式：

（1）累加器类型

选择物联网设备属性后和设置累计上限值以后，设备开始生产的时候会读取该设备属性最新值作为初始值，设备结束生产的时候会读取该设备属性的最新值作为最终值，最终值减去初始值，就是这个生产时间段计点型参数的最终值。计数器达到上限值后会归零重新计算。比如计数器上限为99999，统计到产量为99999以后，再生产一次计数器将变成1，重新开始计算。

（2）事件统计类型

选择物联网设备事件并选择设备参数满足什么条件进行统计，比如事件中有一个检测结果，如果为0表示检测到一个缺陷，从设备开始生产到结束生产统计按照条件出现的次数将作为计点型参数的最终值。

+   计件型参数

计件型参数是属于离散计数型统计的一种，主要是统计一定条件下参数的合计数，比如同生产批次下不合格品的总数。

![](http://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/1800359951/p64795.png)

通过物联网平台获取最新的参数值有两种方式：

（1）指定属性

选择物联网设备属性后，当生产结束后，将读取最新的属性值作为该计件参数的值。

（2）指定事件参数

选择物联网设备事件，并指定事件中的参数，在生产过程中，将根据物联网事件上报的参数作为该计件型参数的值。

质检指标

在工艺路径的步骤中可以设置质检指标，设置好的质检指标可以在中录入相关的检测结果。首先需要上报质检结果的工艺步骤，可以是在线过程检验的生产类型步骤，也可以是离线检验的检验类型的步骤：![选择步骤](http://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/2800359951/p100540.png)

然后在输入质检指标的名称、选择类型以及指标的唯一标识，也可以单击**添加**操作增加新的质检指标：![添加](http://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/2800359951/p100541.png)

不同类型的指标类型，单击**属性值设置**可以进一步设置对应的类型值，可以帮助在录入结果时候进行校验：

  
| 指标类型 | 属性值 | 属性值示例 |
| --- | --- | --- |
| 字符串 | 
+   字符串长度：最大字符串长度
+   默认值：创建新的指标时默认填写的指标值

 | 缺陷原因为最长长度为50的字符串，默认为“未知原因” |
| 整型 | 

+   取值范围最小值：整型指标的最小取值；
+   取值范围最大值：整型指标的最大取值；
+   默认值：创建新的指标时默认填写的指标值
+   判定范围下限值：指标取值小于下限值，自动判定为不合格
+   判定范围上限值：指标取值大于上限值，自动判定为不合格

 | 鼓包数量取值范围为0~9999，判定范围为0~3，超过3个鼓包判定为不合格 |
| 浮点型 | 

+   取值范围最小值：浮点型指标的最小取值；
+   取值范围最大值：浮点型指标的最大取值；
+   默认值：创建新的指标时默认填写的指标值
+   判定范围下限值：指标取值小于下限值，自动判定为不合格
+   判定范围上限值：指标取值大于上限值，自动判定为不合格

 | 温度指标取值范围为-50~300，判定范围为0~38，默认为36.5，如果温度超过38度判定为不合格 |
| 枚举 | 

+   判定合格参数值和描述，以及是否默认值
+   判定不合格参数值和描述，以及是否默认值

 | 颜色指标，判定不合格的枚举为1-红/2-黄，判定合格的枚举为3-绿，默认值为3 |
| 日期 | 

+   默认指标值为系统当前时间
+   默认指标值为指定时间点

默认值 | 抽检时间默认为系统当前时间 |
| 布尔值 | 

+   0-默认为假，是否判定为不合格
+   1-默认为假，是否判定为不合格

 | GMP合格指标，0-不合格，判定为不合格；1-合规，判定为合格 |

可以快速把步骤下设定的指标复制到其他步骤中，单击**复制列表指标**，在弹出的页面中选择多个需要复制的步骤，将快速复制指标：![指标](http://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/2800359951/p100542.png)

## 设备关键参数采集

查看设备数据采集

## 生产报工

生产报工提供给用户手工上报和调整生产结果信息，主要信息包括在哪个工序、哪个设备上半成品或者成品的最终产量。上报数据的维度可以按照某一个批次，或者生产计划单号，甚至是成品的单体序号。

**查看报工记录**

首先选择生产报工，将列出已经报工的信息：![生产报工列表](http://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/2800359951/p104706.png)

报工记录可根据物料编号进行查询，也可以根据生产开始时间和结束时间进行查询。

**新建报工记录**

如果需要记录新的生产结果，可以单击**新建**：![新增报工](http://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/2800359951/p104707.png)

第一步，在新的页面中首先点选产出物料，在列表中选择要报工的成品或者半成品：![选择物料](http://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/2800359951/p104713.png)

第二步，然后输入唯一码，唯一码可以是生产计划号也可以是批次号，在离散制造中，甚至可以是单个成品的唯一标识，比如汽车的VIN码等：![唯一码](http://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/2800359951/p104715.png)

第三步，根据生产物料的工艺路径选择在是在哪个工艺步骤上报产出：![工艺步骤](http://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/2800359951/p104716.png)

第四步，如果生产的产品采用了[物联网设备身份认证](https://help.aliyun.com/document_detail/101295.htm#concept-2050512 "IoT设备身份认证ID²（Internet Device ID），是一种物联网设备的可信身份标识，具备不可篡改、不可伪造、全球唯一的安全属性，是实现万物互联、服务流转的关键基础设施。")，可以输入身份认证ID，如果开通[区块链服务对接](https://help.aliyun.com/document_detail/126861.htm#section-sau-lqd-ya2)将根据物联网身份认证上传对应的生产数据到区块链服务平台进行记录，后续在生产追溯也可以查询到记录到区块链上的凭证信息：![身份认证](http://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/2800359951/p104721.png)

第五步，如果能够明确是哪个生产单元生产，可以先选择生产单元类型，然后在哪个生产单元生产：![生产单元 ](http://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/2800359951/p104717.png)

第六步，选择生产的开始时间和结束时间：![生产时间](http://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/2800359951/p104718.png)

最后步骤，系统默认上报数量为1，可以修改成实际的产量：![生产数量](http://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/2800359951/p104719.png)

**修改报工信息**

如果报工信息需要调整，选择需要调整的报工记录，单击**编辑**：![编辑报工](http://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/2800359951/p104723.png)

在新的页面中修改需要调整的信息，然后点击确认。

**删除报工信息**

如果报工信息出现异常，需要删除报工记录，单击需要删除的记录后面的**删除**：![删除报工](http://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/3800359951/p104724.png)

报工记录一旦删除以后，不能再进行恢复，需要确认后删除。可以选择多条需要删除的记录，并单击多条记录**删除**：![生产过程追溯](http://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/3800359951/p104725.png)

注：除了手工上报数据，也提供生产报工API支持第三方应用进行数据上报，API的说明请查看[生产过程追溯](https://help.aliyun.com/document_detail/151515.htm#reference-2392645 "数字工厂企业用户开通并使用数字工厂的后，第三方工业应用可以通过生产过程追溯应用提供的服务来同步生产过程的产质耗数据。")集成说明。

## 质检结果管理

在质检结果管理中可以对生产报工录入质量检验进行记录、管理和跟踪。

**质检记录管理**

首先单击**新增质检记录**：![新建质检记录](http://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/3800359951/p100543.png)

在质检记录中选择生产报工记录中唯一码和工艺步骤，将显示生产总量，输入质检开始时间、结束时间和质检员：![质检记录](http://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/3800359951/p100544.png)

创建质检记录后将列出总的报工数量，已检验数量为0：![质检记录表](http://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/3800359951/p100546.png)

**质检结果详情**

选择质检记录，单击**质检结果详情**：![数量结果](http://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/3800359951/p100547.png)

在质检结果详情页，显示质检记录信息，可以单击**新增质检结果**，记录质检结果信息：![质检结果](http://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/3800359951/p100548.png)

在质检结果页面中选择质检等级、检验数量、检验批次号、是否合格：![标准](http://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/3800359951/p100549.png)

如果在工艺路径的指标设置中定义了判定范围，比如克重的判定访问为30-50，如果在实际录入的指标超出了该判定访问将自动判定为不合格![范围](http://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/3800359951/p132658.png)

并可以选择中定义该步骤的质检指标，记录实际质检结果值，如果是多次录入质检结果，可以选择**导入上次输入内容**，快速复制上次的指标值：![方法](http://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/3800359951/p100550.png)

录入质检结果后可以看到在质检记录中的已检验数量将增加：![已检验数量](http://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/3800359951/p100551.png)

**质检查询**

可以在质检结果管理中输入物料编号或者生产唯一编号，或者是检验时间段来查询质检记录：![查询](http://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/4800359951/p100552.png)

## 正向追溯

通过输入生产报工成品或半成品的唯一码，可以追溯其生产过程中的相关联信息。首先在唯一码查询区域输入唯一码然后查询：![查询](http://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/4800359951/p104727.png)

如果该唯一码进行过生产报工将列出生产报工、质检结果以及投料信息。左侧的产品谱系树将列出生产过程中产品、半产品和原材料的构成结构：![投料](http://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/4800359951/p104728.png)

在产品谱系树选择产品或者原料的唯一码，右侧将列出相关的生产报工、质检的详细信息。如果开通[区块链服务对接](https://help.aliyun.com/document_detail/126861.htm#section-sau-lqd-ya2)并且该唯一码采用了[物联网设备身份认证](https://help.aliyun.com/document_detail/101295.htm#concept-2050512 "IoT设备身份认证ID²（Internet Device ID），是一种物联网设备的可信身份标识，具备不可篡改、不可伪造、全球唯一的安全属性，是实现万物互联、服务流转的关键基础设施。")可以单击**查看详情**查询记录区块链上的凭证信息：![查看区块链详情](http://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/4800359951/p104729.png)

区块链凭证详情将根据物联网设备身份认证ID显示所有记录在区块链服务平台上链凭证信息：![凭证](http://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/4800359951/p104730.png)

将按照上链时间显示所有的凭证信息，可以单击凭证查看详细记录。
