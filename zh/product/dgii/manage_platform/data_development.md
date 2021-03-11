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

提供对数字工厂中的数据进行计算和分析的功能。

## 数据同步

可以选择把数字工厂的主数据、基础模型以及工业应用提供的[业务数据](https://help.aliyun.com/document_detail/146364.htm#concept-2358277 "阿里云工业互联网企业级平台（数字化工厂）通过统一系统平台、统一门户入口、统一权限管理和统一的数据模型来集成制造企业从产品研发、生产、销售、物流到售后整个价值链过程中需要的所有应用。依据数字工厂的集成指南进行改造的工业应用，就能实现整合到数字工厂中，为企业用户提供业务服务。")同步到数字工厂的数据中心中进行下一步的数据分析。

**主数据同步**

选择**平台管理**\->**数据开发**\->**数据同步**，首先可以选择哪些主数据需要同步到数据中心，单击是否同步的按钮，将把对应的主数据同步到数据中心中。![主数据同步](https://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/6218359951/p96838.png)

如果不再创建需要同步主数据，可以关闭数据同步。

**基础模型同步**

选择**平台管理**\->**数据开发**\->**数据同步**，选择基础模型标签，可以选择把工厂模型、工艺路径和库存地点同步到数据中心，单击模型分类后的是否同步的按钮，将把对应的模型数据同步到数据中心中。![模型数据](https://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/6218359951/p96839.png)

如果不再创建需要同步模型数据，可以关闭数据同步。

**经营业务数据同步**

选择**平台管理**\->**数据开发**\->**数据同步**，选择经营业务数据标签，可以选择把哪种类型的业务数据同步到数据中心，单击业务数据分类后的是否同步的按钮，将把对应的业务数据同步到数据中心中。![经营业务数据](https://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/6218359951/p96840.png)

如果不再创建需要同步经营业务数据，可以关闭数据同步。

## 数据查看

选择**平台管理**\->**数据开发**\->**数据查看**，能查看数据中心的数据库结构，帮助编写数据开发的作业。开启数据同步后会默认创建一个default数据库：![数据查看](https://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/1891374061/p180022.png)

在default数据库节点下列出了所有的数据表，选择需要查看的数据表，将显示表的基本信息，包括表名、描述以及每一列的列名、类型以及列描述，下图是同步的物料主数据表结构：![物料主数据](https://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/6218359951/p104623.png)

可以通过**数据预览**功能可查看表中的数据记录：![数据预览](https://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/6218359951/p104625.png)

## 自定义表

选择**平台管理**\->**数据开发**\->**数据查看**，能创建自定义的表结构：![新建表](https://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/1891374061/p180023.png)

在新建表窗口中输入表名、描述以及创建对应的表结构：![新建表](https://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/1891374061/p180024.png)

## 项目管理

选择**平台管理**\->**数据开发**\->**项目管理**，能管理数据开发项目，每个数字工厂将默认创建一个数字工厂数据分析示例项目，通过示例项目能够更好的理解数据开发的作业和工作流的使用。单击示例项目的**项目开发**操作，可以看到示例项目提供的作业和工作流。![示例项目](https://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/6218359951/p96848.png)

**作业**

数据开发作业提供了两种类型的作业：

+   数据同步：支持工业应用或者边缘端自建数据库同步到数字工厂数据中心
+   SQL分析：可以编写SQL脚本对数据中心的数据进行定制开发

数字工厂示例项目提供了四个SQL分析类型的作业示例：作业“主数据统计”统计不同状态的主数据的数量；作业“工厂模型”把同步到数据中心的工厂模型中的工厂、车间、产线、加工中心四级模型转换成一个能以工厂模型维度进行数据分析的维度视图；作业“产品合格率明细”把生产报工和质检结果数据进行统计，计算得到详细合格率结果；作业“质量合格率分析”实现了根据详细的合格率结果，统计工厂模型维度的质量合格率，数据分析的结果可以实现[标准经营分析](https://help.aliyun.com/document_detail/126867.htm#section-vew-xqu-0t3)中成品率分析。

单击作业的**编辑**操作，可以看到每个作业的详细内容：![数据分析 ](https://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/6218359951/p104593.png)

作业详情中可以看到作业名称、作业类型以及脚本编辑区和日志，单击**编辑**可以对作业基本属性进行编辑：![编辑作业](https://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/6218359951/p104595.png)可以对作业的名称、描述、预计最大运行时长、失败重试次数以及作业运行失败后的策略，进行编辑：![编辑属性](https://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/6218359951/p104597.png)在脚本编辑区，也能查看到具体的作业脚本，单击**运行**将提交作业并执行：![作业运行](https://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/7218359951/p104599.png)

作业运行后，可以在日志框中查看到作业运行的最新日志以及运行后的结果，单击**查看运行记录**![作业运行日志](https://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/7218359951/p104601.png)

作业运行的结果将产生新的结果页，可单击查看结果输出的内容：![结果页](https://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/7218359951/p99270.png)

在运行记录窗口中可以查看到所有作业和工作流的历史运行记录详情：![详情](https://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/7218359951/p96852.png)

**工作流**

数字工厂示例项目中选择**工作流**，示例项目提供了两个工作流，工作流“主数据统计”执行作业“主数据统计”；工作流“质量分析”执行作业“工厂模型”、“产品合格率明细”和“质量合格率分析”，单击**编辑**查看质量分析工作流详情![编辑工作流](https://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/7218359951/p96854.png)

工作流编辑页面包括了工作流名称、描述、当前调度状态、调度方式以及工作流内容，单击**运行**，可以提交工作流任务马上运行：![运行工作流](https://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/7218359951/p96855.png)

工作流运行后可以在日志中看到当前工作流中每个作业实例的运行情况，包括作业名称、类型、运行时间以及执行状态，可以单击**详情**，查看作业实例的运行详情：![作业实例运行详情](https://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/7218359951/p96856.png)

在工作流的运行记录中，状态是**运行中**的工作流可以单击**停止**，终止本次工作流的运行；也可以单击暂停或者恢复来控制工作流运行：![工作流](https://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/7218359951/p96857.png)

**新建项目**

可以单击新建项目，创建自己的数据开发项目：![新建项目](https://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/7218359951/p96847.png)

输入数据开发项目的名称和描述：![项目](https://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/7218359951/p96860.png)

项目确认添加后在项目列表中可以进行**项目开发**：

![项目开发](https://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/7218359951/p96861.png)

在新的项目中首先需要建立新的作业，单击新建作业，并输入作业名称和描述：![新建作业](https://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/7218359951/p96862.png)

新建作业成功后，单击**编辑**对作业进行内容编辑：![作业编辑](https://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/7218359951/p96863.png)

数据开发作业有以下基本属性：

  
| 属性名称 | 属性说明 | 示例 |
| --- | --- | --- |
| 作业名称 | 标识作业，同一个项目下名称唯一 | 产量总数统计作业 |
| 预计最大运行时间 | 表示作业提交执行最长运行时间，超过设定时间作业将返回失败。 | 0秒，表示不设置最大运行时间；30秒，表示作业提交执行超过30秒没有结果，将返回作业运行超时失败。 |
| 失败重试次数 | 表示作业执行失败后重新尝试执行的次数 | 0，表示作业一旦失败将启动失败策略；3，表示作业失败后将重试3次，3次都失败将启动失败策略。 |
| 失败策略 | 作业失败以后将根据失败策略影响工作流的执行 | 跳过，作业失败后工作流跳过当前作业进入到下一个步骤执行；停止工作流，作业失败后该工作流将不再继续执行 |
| 描述 | 对作业功能进行描述 | 计算每种产品在当前班次每条生产线的产量总数。 |

如果作业需要输入参数，可以单击**添加参数**：![添加参数](https://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/7218359951/p104603.png)来指定作业中引用参数的名称和值，在作业代码里通过引用${变量名}，然后在此处增加key为变量名，value为变量值的一行记录。例如：变量dy\_date的值为当前日期前5天可以配置为${yyyy-MM-dd-5d}，参数的使用可以参看数字工厂示例项目中的作业“产品合格率明细”中bizdate参数使用。

参数配置完成后，就可以在编写作业脚本，数字工厂数据开发支持Spark SQL脚本，语法请查看[Spark SQL](http://spark.apache.org/docs/latest/sql-programming-guide.html)。编写的脚本可以直接添加运行，查看运行日志进行调试。

如果选择是数据同步类型的作业，可以根据示例文件修改对应的数据源的配置：![数据同步脚本](https://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/7218359951/p104612.png)

**注**：如果被同步的源数据库有[设置白名单](https://help.aliyun.com/document_detail/96118.htm#concept-rpj-hs4-ydb "创建RDS实例后，您需要设置RDS实例的白名单，以允许外部设备访问该RDS实例。")的安全机制，需要把以下IP加入到白名单中：![IP白名单](https://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/8218359951/p104610.png)

创建好作业后，在项目中的工作流页签中单击**新建工作流**，填写工作流名称和描述：![新建工作流](https://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/8218359951/p96865.png)

新建工作流成功后，单击**编辑**对工作流进行内容编辑：![编辑工作流](https://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/8218359951/p96866.png)

数据开发工作流有以下基本属性：

  
| 属性名称 | 属性说明 | 示例 |
| --- | --- | --- |
| 工作流名称 | 标识工作流，同一个项目下名称唯一 | 每天统计产量总数工作流 |
| 调度状态 | 表示当前工作流是否开始根据调度策略进行启动执行。 | 停止，表示工作流不启动；启动，表示工作流满足条件后进行启动。 |
| 时间调度 | 设定工作流自动运行的时间周期，调度状态为启动。 | 设置周期启动的开始时间和结束时间段，调度周期采用CRON表达式。 |
| 依赖属性调度 | 可选择指定工作流，一旦依赖工作流结束后，将启动本工作流。 | 依赖属性调度，选择数字工厂示例项目的质量分析工作流，质量工作流结束后将执行本工作流。 |
| 描述 | 对工作流功能进行描述 | 每天2点计算每种产品在当前班次每条生产线的产量总数。 |

完成基本属性设置后，就可以在编辑工作流区域中设定作业的执行顺序和关系，每个工作流有一个开始节点和结束节点，在左边的作业节点列表中拖取要执行的节点到编辑区：![拖拽](https://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/8218359951/p96869.png)

根据工作流功能设定节点之前的执行顺序：![顺序](https://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/8218359951/p96870.png)

设定好节点执行顺序后，可以单击**运行**和查看日志调试工作流。

## 数据集成

数据集成可以把数据开发工作流运行的结果通过开放数据源的方式提供给其他数据可视化工具（[QuickBI](https://help.aliyun.com/document_detail/33813.html)和[DataV数据大屏](https://help.aliyun.com/document_detail/30360.html)）使用，然后把数据可视化工具开发的分析功能集成到导航中分配给用户去使用。

查看**数据源访问信息**，数据可视化工具只要支持EMR数据源，就可以通过设置数据源的访问地址、数据库名称、端口以及用户名和密码进行数据库访问。

单击**新增仪表盘**：![新增仪表盘](https://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/8218359951/p104635.png)

输入QuickBI的仪表盘信息、pageID、AccessKey ID和AccessKey Secret（通过QuickBI的[组织识别码](https://help.aliyun.com/document_detail/61487.html)获得）：![新增仪表](https://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/8218359951/p104636.png)

确认后将集成到导航设置中的经营驾驶舱模块下，并可以进行访问权限的设置。

如果集成DataV数据大屏，需要切换到数据大屏后单击新增数据大屏：![数据大屏](https://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/8218359951/p104640.png)
