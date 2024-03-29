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

OEE（Overall Equipment Effectiveness 设备综合效率）的一方应用是数字工厂提供一套推动企业持续改善的生产绩效工具。如果开通了OEE应用以后，可以在我的应用中对OEE应用进行应用配置，同时提供“理想生产周期设定”“设备综合效率计算服务”“设备综合效率分析”三个功能页面。

## 应用开通

OEE是数字工厂提供的官方应用，在应用管理中选择“我的推荐”，然后点击“OEE”中的“开通”按钮。

![](https://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/3380779851/p53526.png)

在OEE中的详情页面，点击“开启服务”

![](https://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/3380779851/p53527.png)

阅读授权声明后，勾选“我已阅读并同意授权协议”后，点击“同意”。

![](https://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/4380779851/p53528.png)

同意授权以后，将开通应用，在我的应用中可以看到应用的最新状态。

![](https://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/4380779851/p53529.png)

## OEE应用配置

在计算OEE之前需要进行相关的应用配置工作，完成一下两个部分的配置以后，才能在“设备综合效率计算服务”中启动相关的计算服务。

![](https://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/4380779851/p53530.png)**设置计算周期**

进入应用配置页面，首先请点击“计算周期设置”，默认OEE是五分钟计算一次，用户可以根据需要了解OEE最新数据的频率来设置计算周期，计算周期设置越短，对云资源的占用越高，建议设置不要过于频繁。

![](https://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/4380779851/p53531.png)**设置计算配置**

要对指定设备计算OEE，首先在左边的工厂模型导航中选择模型，右边将列出模型下的所有生产设备，选择要配置的生产设备的“计算配置”操作。

![](https://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/4380779851/p53533.png)

在计算配置页面设置按照以下步骤对设备的OEE计算方式进行配置。

**设置设备运行标准**![](https://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/5380779851/p53535.png)

首先选择设备管理运行状态对应的物联网设备和属性，然后填写属性表达式和值。比如说设备物模型中有一个设备状态属性是枚举类型：

+   0 初始状态（开机预热）
+   1 运行
+   2 停止
+   3 故障

那么选择该属性，然后选择表达式为小于（<），值填写为2。如果设备的状态为0（开机）或者1（运行）都表示该设备已经启动，开始计算操作时间。

**设置设备故障停机（可选）**

如果设备物模型能够准确识别设备停机是有用设备故障造成，可设置设备故障原因，首先选择物联设备属性，然后填写属性表达式和值。

![](https://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/5380779851/p53537.png)

如果设备物模型能够采集到设备故障的编码或者描述，可以选择设备故障原因对应的物联网设备属性。

![](https://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/5380779851/p53538.png)**设置设备其他停机原因（可选）**

如果设备物模型能够识别出什么原因停机，可设置设备的其他原因，首先选择物联设备属性，然后填写属性表达式和值。比如说设备物模型中有一个设备停机原因标识，用不同的数字表示不同的因素，如下示例：

+   0 -- 正常运行
+   1 -- 缺料
+   2 -- 无生产任务
+   3 -- 换品种
+   4 -- 安全保护

那么选择该属性，然后选择对应的表达式和值。

![](https://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/5380779851/p53539.png)![](https://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/5380779851/p53540.png)![](https://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/5380779851/p53541.png)**设置产量和次品统计方法**

通过物联网设备的计数器属性可以统计设备的总产量和次品，首先选择物联网设备的产量计数器属性，然后输入产量计数器的上限值，计数器达到上限值后会归零重新计算。比如计数器上限为99999，统计到产量为99999以后，再生产一次计数器将变成1，重新开始计算。

![](https://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/6380779851/p53543.png)

如果物联网设备的有次品的计数器属性，可以选择物联网设备的次品计数器属性，然后输入次品计数器的上限值，计数器达到上限值后会归零重新计算。比如计数器上限为99999，统计到次品为99999以后，再生产一次次品计数器将变成1，重新开始计算。

![](https://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/6380779851/p53544.png)**设置生产物料标识属性**

通过设置物联网设备的属性，根据物联网设备上报的物料唯一编码可以获得当前设备正在生产什么物料，这个物料可以作为OEE对比分析的特征值，也可以作为计算理想生产周期的依据（如果理想生产周期能按照物料类型或者物料细分）

![](https://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/6380779851/p64796.png)**管理统计特征值（可选）**

如果需要通过不同的维度来计算对比OEE并且物联网设备属性值能有对应的维度，比如对比不同操作工或者生产不同产品的OEE，可以点击“添加特征值”，然后输入特征值名称和对应的物联网设备属性。

![](https://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/6380779851/p53546.png)**OEE计算结果配置**

对于已经设置好计算配置的设备，可以点击OEE结果配置，通过OEE结果配置，可以把最终计算的结果，写回到物联网设备的属性中，提供给现场的操作屏幕或者其他应用使用。

![](https://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/6380779851/p53554.png)

+   OEE输出属性：首先选择对应的物联网设备，然后选择合适的输出属性，选择好以后，一旦启动计算服务，将实时计算的OEE百分比结果写回到该属性中：
+   时间开动率输出属性：将实时计算的时间开动率百分比结果写回到该属性
+   性能开动率输出属性：将实时计算的性能开动率百分比结果写回到该属性
+   质量合格率输出属性：将实时计算的质量合格率百分比结果写回到该属性
+   理想生产周期输出属性：将设备设定的理想生产周期写回到该属性
+   产量输出属性：将实时计算的当班最新产量统计写回到该属性
+   次品输出属性：将实时计算的当班最新次品总量统计写回到该属性
+   有效时长输出属性：将实时计算的设备当班有效时长写回到该属性
+   停机时长输出属性：将实时计算的设备当班停机时长写回到该属性。

![](https://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/6380779851/p53556.png)

## 理想生产周期设定

为了计算OEE中的性能开动率，需要设置设备的理想生产周期，理想生产周期为设备在理想情况下生产某单位产品需要多长时间（秒/每单位），数字化工厂运营中心支持按照设备型号设置理想生产周期。

在左侧的工厂模型导航中选择模型，将在右边的周期列表中列出所有的生产设备的设备型号。选择要设定理想生产周期的设备型号，点击“设置”操作。

![](https://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/7380779851/p64797.png)

在弹出的页面中输入理想生产周期，比如型号为600吨的冲压机，每冲压一个外壳，理想情况下只需要30秒完成。

![](https://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/7380779851/p53558.png)

确认后将保存设定的理想生产周期，并在周期列表中显示。

![](https://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/7380779851/p53559.png)

如果理想生产周期能精确到生产不同类型的产品周期不同，可以点击后面的按产出类型细分。

![](https://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/7380779851/p64798.png)

比如说冲压机在冲压PZTOYS这类型的产品时候单独设置理想生产周期为45秒/每单位。如果冲压机设备正在生产PZTOYS将按照45秒/每单位进行计算OEE，生产其他类型的产品还是按照30秒/每单位计算。

如果理想生产周期还能进一步精确到具体的产品，可以点击后面的按产出物料细分进行设置。

## 设备综合效率计算服务

在完成设备的OEE应用配置和理想生产周期设定以后，就可以开启OEE计算服务。可以选择多个设备同时开始计算。

![](https://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/7380779851/p53560.png)

也可以单独点击某一台设备的开启计算操作。

![](https://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/8380779851/p53561.png)

开启以后OEE计算服务将显示已经开启，再次点击将关闭计算。

![](https://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/8380779851/p53562.png)

## 设备综合效率分析

一旦计算服务开始后，将根据计算配置来定时计算设备的综合效率，并提供多维度的分析方法。首先在经营管理中选择设备综合效率分析，进入分析页面，首先选择要分析的一台或者多台设备和时间范围，以及按照哪个特征值进行分组分析，最后选择时间维度。

![](https://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/8380779851/p53563.png)

+   特征值分组：可以按照不同的特征值去做对比分析：在同一个时间段内，比较同一台设备不同的操作工的综合效率；或者是生产不同的产品质量合格率的对比分析。
+   时间维度：可以在选定时间范围内不同的时间维度进行分析：选择时间范围为2018年1月1日到2019年1月1日，时间维度为月份，可以看到这一年内按照月份统计每个月的OEE结果，对比分析不同月份的综合效率分析拨动，或者是一周内每天的质量合格率的波动情况。

对于经常进行分析的条件，可以点击“保存”，对于保存的分析方法，下次进入设备综合效率分析会自动默认按照之前保存的条件，进行分析。

![](https://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/8380779851/p53564.png)

## 综合趋势分析

首先选择好分析条件以后，点击“查询”，综合趋势分析将计算OEE的变化趋势。下图示例为冲压机按照班次分析2019年3月14日到3月22日每天各个班次的结果，由于冲压机每天生产一个常日班（工厂日历安排的班次），3月15日OEE为92%，3月20日降到了0%，3月21日回升到42%。

![](https://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/8380779851/p53565.png)

如果选择多台设备进行分析，在趋势图上会注明是哪台设备的分析结果。

![](https://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/8380779851/p53566.png)

## 时间开动率详细分析

可以对OEE中的时间开动率进一步进行详细分析，切换到“时间开动率详细分析”页签，然后点击“查询”。

![](https://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/9380779851/p53567.png)

除了时间开动率的指标以外，还会展示有效时间和设备运行时间的分析结果。

![](https://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/9380779851/p53568.png)

在最后的详细记录中，列出详细的记录包括每个时间段和分组的有效时间、开机时间和时间开动率。

![](https://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/9380779851/p53569.png)

## 性能开动率详细分析

可以对OEE中的性能开动率进一步进行详细分析，切换到“性能开动率详细分析”页签，然后点击“查询”。

![](https://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/9380779851/p53570.png)

在最后的详细记录中，列出详细的记录包括每个时间段和分组的理想生产周期、开机时间、产量和性能开动率。

![](https://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/9380779851/p53571.png)

## 质量合格率详细分析

可以对OEE中的质量合格率进一步进行详细分析，切换到“质量合格率详细分析”页签，然后点击“查询”。

![](https://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/0480779851/p53572.png)

除了质量合格率的指标以外，还会展示总产量和次品的分析结果。

![](https://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/0480779851/p53573.png)

在最后的详细记录中，列出详细的记录包括每个时间段和分组的成品、次品、质量合格率。

![](https://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/0480779851/p53574.png)
