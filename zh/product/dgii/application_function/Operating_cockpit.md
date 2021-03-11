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

通过经营驾驶舱的建立，用户可以在数字工厂中建立业务指标体系，实时反映工厂的运行状态，将采集的数据按照业务要求分析以后，形象、直观、具体、快速和准确的展示出来。如果开通了经营驾驶舱应用以后，可以在我的应用中对经营驾驶舱应用进行应用配置，同时提供“经营分析”“指标管理”“指标看板”三个功能页面。

## 应用开通

经营驾驶舱是数字工厂提供的官方应用，在应用管理中选择**我的推荐**，然后单击**经营驾驶舱**中的**开通**。

![](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/4418359951/p53583.png)

在经营驾驶舱的详情页面中，单击**开启服务**

![](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/4418359951/p53584.png)

阅读授权声明后，勾选**我已阅读并同意授权协议**后，单击**同意**。

![](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/4418359951/p53585.png)

同意授权以后，将开通应用，在我的应用中可以看到应用的最新状态。

![](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/5418359951/p53586.png)

## 指标管理

经营驾驶舱的指标管理提供用户管理经营指标的功能。

**新建指标**

在指标管理列表系统会把中的月度经营指标做为系统默认的指标，用户也可以根据企业实际情况创建新的指标，单击**新建指标**：![新建指标](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/5418359951/p99745.png)

假设项目中已经建立一个计划执行结果数据源，要根据这个数据源建立经营指标，数据源内容如下：

![](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/5418359951/p53588.png)

在新建指标的页面中输入指标名称，指标计算结果保留小数几位以及指标是否显示为百分比，指标单位以及指标计算方法的描述。如果勾选了显示为百分比，计算结果显示将按照百分比显示，例如计算结果为0.9534，在指标看板中将显示为95.34%。

![](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/5418359951/p53589.png)

然后选择指标类型，有两种指标类型，一种为普通指标，普通通过数据源的度量数据节点计算得到。

![](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/5418359951/p53591.png)

一种为复合指标，复合指标为两个度量数据节点计算得到，例如计划完成率为计划执行结果中的完成数量除以计划数量。

![](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/5418359951/p53593.png)

统计维度为计划指标的维度，单击“添加”增加新的统计维度，然后输入维度名称，选择一个维度数据节点。下图以按照计划号统计每天的计划完成数为例：

![](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/5418359951/p53594.png)**可见性设置**

新建指标确认以后将在列表中显示，默认指标的状态是**私有**，表示在经营驾驶舱中该指标只有本人可见：![私有](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/5418359951/p104797.png)

单击**权限配置**，可以修改指标的权限，共享给其他角色查看：![权限配置](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/5418359951/p104798.png)

在权限设置页面选中可查看指标的角色，然后单击**设置为可见**：![设置可见](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/5418359951/p104799.png)

也可单击**全部可见**，该指标设置为完全公开，所有角色在经营驾驶舱中可见：![全部可见](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/6418359951/p104800.png)

设置指标的可见性以后，状态变成**公开**：![公开薪酬](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/6418359951/p104801.png)

如果是公开状态的指标可以在定义授权中设置给已经开通的物联网应用通过[查询指标](https://help.aliyun.com/document_detail/166260.htm#section-zci-6h1-zi1)接口获取指标结果，单击**定义授权**：![定义授权](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/6418359951/p104802.png)

将列出所有企业已经购买开通的工业应用，单击**授权**，将开放应用通过服务获取企业的资质数据：![应用授权](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/6418359951/p104732.png)

授权应用后，如果该应用不再授权使用，可单击取消授权：![取消授权](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/6418359951/p104733.png)

## 查看指标数据

新建好指标以后，一旦数据源中有数据，指标将进行计算，可以单击**查看指标数据**，查看统计结果：

![](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/6418359951/p53600.png)

假设数据源中的数据如下：

![](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/6418359951/p53601.png)

选择查看时间范围，单击查询以后，可以看到指标统计结果，第一列为生产时间按天维度，计划完成数量为每天plancount的合计值。

![](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/6418359951/p53602.png)

下图是订单完成率的计算值。

![](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/6418359951/p53603.png)

## 展示配置

可以定义指标在经营驾驶舱中的展示方式，单击**展示配置**。

![](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/6418359951/p53605.png)

在展示配置中设置这个指标最关心哪种方式去进行对比分析，例如最关心上个月的同比。

![](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/6418359951/p53606.png)

## 删除指标

如果指标设置错误或不再使用，可以单击**删除指标**。

![](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/6418359951/p53607.png)

## 指标看板

在指标看板中，用户可以查看关注的指标最新情况，默认显示当天指标的最新情况，不但可以看到自己的指标，也可以看到其他用户分享可见的指标。可以选择希望查看指标的日期，然后单击**查询**：![查询](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/2934297061/p199006.png)

在看板顶端区域展示了一个最重要的指标变化情况，可以通过设置指标的顶端展示，把该指标设置到重要的显示位置：![设置顶部展示](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/2934297061/p199010.png)

指标对比方式为创建指标时展示配置时设定的最关系的对比方式，也可以选择修改对比方法。比如说查询本周的及时交付率为97%，环比上周提高了0.56%：![环比](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/2934297061/p199008.png)

如果对指标需要进行进一步分析，可以单击指标的**详情**：![详情](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/2934297061/p199009.png)

首先选择要查询的时间范围，然后单击**查询**。

![](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/7418359951/p53613.png)

可以切换图表的显示方式为柱状图或者折线图；

![](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/7418359951/p53614.png)

时间分析维度也可以选择每日/每周/每月/每季度/每年。

![](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/7418359951/p53615.png)

## 经营报表

在经营报表功能，用户可以查询计算好的原始数据并进一步分析。首先选择通过页签的选择找到要分析的指标，然后选择查询时间范围后，单击**查询**。将列出指标所有的统计数据。

![](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/7418359951/p53616.png)

统计数据也可以单击**指标分析**，进行进一步的对比分析。

![](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/7418359951/p53617.png)

首先选择要查询的时间范围，然后单击**查询**。

![](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/7418359951/p53618.png)

可以切换图表的显示方式为柱状图或者折线图；

![](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/7418359951/p53619.png)

时间分析维度也可以选择每日/每周/每月/每季度/每年。

![](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/7418359951/p53620.png)

## 标准经营分析

经营驾驶舱提供了几类标准经营分析，通过集成工业应用提供的经营业务数据，为用户提供经营分析的基本能力。

**标准分析**

1.  人均产量（值）分析
    
    为经营决策者和财务人员提供不同组织员工的经济产出量对比考核，根据关键企业效率的指标波动来指导是否需要增加人员配置：
    
    ![](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/7418359951/p73576.png)
    
2.  成品率分析
    
    通过帮助生产管理人员分析生产过程中造成质量不合格的因素，通过提高成品合格率减少生产过程浪费：
    
    ![](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/7418359951/p73577.png)
    
3.  质量缺陷分析
    
    帮助生产管和质量管理人员对有针对性的制定措施避免质量缺陷，保证生产过程的质量稳定性：
    
    ![](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/8418359951/p73578.png)
    
4.  设备效率分析
    
    帮助分析设备或生产单元是否达到最理想生产运营情况，从生产计划、有效开机和质量合格三方面去判断是否需要增加生产能力：
    
    ![](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/8418359951/p73580.png)
    
5.  能耗分析
    
    通过衡量生产过程使用的能耗分析，帮助产品工艺设计人员提供工艺节能的数据支撑；作为财务人员的产品定价和利润计算的输入数据：
    
    ![](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/8418359951/p73581.png)
    
6.  人员出勤分析
    
    为人力资源管理人员来指导是否需要增加人员配置和评估员工的日常管理制度执行情况， 降低员工缺勤率，减少业务直接损失和间接伤害：
    
    ![](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/8418359951/p73583.png)
    
7.  月度经营分析
    
    对关键的经营指标进行月度汇总计算，并计算月度环比和同步，帮助企业管理层监控指标趋势分析
    
    ![月度经营指标](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/8418359951/p83335.png)
    
8.  年度经营分析
    
    对关键的经营指标进行年度汇总计算，并计算年度环比，帮助企业管理层监控指标趋势分析
    
    ![年度经营分析](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/8418359951/p83336.png)
    

**分析操作**

+   **查询功能**
    
    标准经营分析报表上方为查询条件，选择好分析时间范围和分析对象后，单击条件后的“查询”按钮，将根据设定的条件提取数据进行分析：
    
    ![](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/8418359951/p73564.png)
    
+   **钻取分析**
    
    大部分报表提供多维度分析功能，能实现按照分析维度的上钻和下钻分析，单击报表名称上的钻取标记，能显示多个层次的维度信息，以月度能耗分析为例，可以按照事业部、工厂、车间到产线四个维度分析能耗：
    
    ![](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/8418359951/p73566.png)
    
    在分析结果中可以单击维度，将进行向下钻取的功能：
    
    ![](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/8418359951/p73568.png)
    
    进行到下级维度分析以后，也可以单击上级维度进行向上汇总分析：
    
    ![](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/8418359951/p73569.png)
    
+   **排序**
    
    对于表格类的分析结果，可以单击表头进行结果排序设定：
    
    ![](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/8418359951/p73572.png)
    
+   **选取度量**
    
    对于图表类的分析结果，可以单击选取关注的度量进行分析：
    
    ![](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/8418359951/p73573.png)
    
+   **其他操作**
    
    对于图表类的操作，可以查看数据值并且把结果导出后进一步分析：
    
    ![](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/8418359951/p73574.png)
