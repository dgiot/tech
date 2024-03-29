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

在项目工作台左边的功能菜单中选择**定制开发**\-**数据源管理**，根据定义项目定制的数据源。![](https://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/5754025851/p74935.png)

## 数据源创建

刚开始的时候是没有任何数据源的，因此需要创建数据源。单击“数据源列表页面的“创建数据源”按钮，弹出对话框：

![](https://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/5754025851/p51832.png)

输入要创建数据源的名称，标识，描述信息，数据来源先选择设备上报（意味着数据来自于设备上报），最后单击“确定”，一个数据源就创建好了，系统会自动跳转到数据源详情页面，但是这个数据源里一个数据节点都没有：

![](https://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/5754025851/p51833.png)

接下来我们可以创建数据节点了，单击按钮“新建数据节点”：

![](https://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/6754025851/p51834.png)

输入数据节点的各项信息，数据来自我们先选择产品设备，接下来需要选择数据来自于哪一个产品的哪个属性上报的，函数我们先选择无（意味着不进行汇总处理），更新方式我们先选择实时，过滤条件先不添加（意味着所有的数据我们都要），是否存储先选择“是”（意味着过滤后的每一条数据我们都会存下来），单击“确定”，一个数据节点就创建好了：

![](https://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/6754025851/p51835.png)

新建数据节点的更新方式支持如下三种：

+   实时：只要上报了数据就会更新
+   有变化时：当上报的数据和快照数据相比有变化则更新
+   定时：定时更新数据，每次更新用最新的数据，需要设置定时的时间

是不是非常简单？接下来我们再新建一个数据节点，但是函数我们选择一个avg试试：

![](https://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/6754025851/p51836.png)

因为我们选择了要进行求平均汇总，所以需要指定每次数据上来了之后都在在什么时间窗口内求平均，第一种方式是不指定时间段（例如我们选择30分钟，意味着我们计算一次平均，取上报时间往后30分钟内的数据进行求平均），第二种方式是指定时间段（需要指定开始时间和结束时间，意味着每天我们都在这个时间段内去求平均）。因为是聚合函数，所以更新方式只有实时和定时，没有发生变化时这个选项。是否存储我们可以选择“否”（意味着每次求平均的数据都会覆盖之前的，不会保留历史的），过滤条件我们可以选择“颜色=red”（意味着颜色不等于red的数据我们都会丢弃），单击“确定”我们又成功创建了一个数据节点：

![](https://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/6754025851/p51837.png)

接下来我们创建一个数据来自关联数据源的节点，单击“新建数据节点”，数据来自选择“关联数据源”，系统会提示我们暂且未关联任何数据源，需要先进行数据源关联：

![](https://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/6754025851/p51838.png)

单击“关联数据源链接”，我们跳转到关联页面：

![](https://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/6754025851/p51839.png)

单击“添加关联数据源”按钮：

![](https://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/7754025851/p51840.png)

我们可以选择一个关联数据源（这里只能选择api或文件导入的数据源），再选择关联的关系（例如选择用iotid去和关联数据源的node1节点进行关联），单击“确定”，关联数据源就设置好了：

![](https://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/7754025851/p51841.png)

接着我们继续回到创建数据节点的页面：

![](https://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/7754025851/p51842.png)

输入基础信息，数据来源选择刚才关联的数据源及其节点，该节点是否作为维度选择是（意味着新建的节点是一个维度节点），单击“确定”创建成功。数据节点我们都创建好了，每个设备数据节点都有自己的过滤条件，如果我们想为所有设备数据节点建立统一的过滤条件，可以单击“数据源配置”-“添加/管理数据过滤条件”：

![](https://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/7754025851/p51843.png)

如果对创建的数据节点不满意，系统支持编辑或删除某个数据节点：

![](https://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/7754025851/p51844.png)

数据源创建好之后可回到列表页面进行后续发布等操作了。

## 数据源-列表管理

数据源创建好之后，就可以在列表页面看见了：

![](https://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/7754025851/p51845.png)

数据源创建之后是“已保存”状态（文件/API导入的数据源且数据节点通过上传文件创建的除外），我们单击“详情”之后可以随意进行修改，但是这个时候也无法查询数据：

![](https://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/8754025851/p51846.png)

对于状态是“已保存”的数据源，我们可以单击“发布”按钮将它发布：

![](https://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/8754025851/p51848.png)

发布成功后，数据源状态变成“已发布”：

+   数据来源是设备数据的数据源：后台会物理落表并建立任务来生成数据，可以查询数据，可以被SaaS通过API调用
+   数据来源是文件/API导入的数据源：后台会物理落表，可以查询数据，可以上传数据，可以被SaaS通过API调用

已发布的数据源不能进行编辑操作，需要先撤回才能进行编辑：

![](https://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/8754025851/p51849.png)

撤回的数据源可以新增数据节点，已创建的数据节点只能编辑部分信息

![](https://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/8754025851/p51850.png)

撤回的数据源编辑好之后可以再次发布。数据源支持删除操作（已发布状态不能删除），如果删除则所有的历史数据和数据源本身都会删除。

## 数据源-创建-文件/API导入

前面创建的数据源是利用设备上报数据创建的，接下来我们创建一个非设备上报数据的数据源：文件或API导入的数据源。单击“新建数据源”，数据来源选择“文件/API导入”：

![](https://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/8754025851/p51851.png)

单击“确定”后跳转到数据源详情页面：

![](https://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/8754025851/p51852.png)

数据节点的创建支持两种方式，我们先选择第一种方式“文件导入节点和数据”：

![](https://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/9754025851/p51853.png)

单击“上传”文件，我们选择之前就创建好的数据文件，文件的情况如下：

![](https://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/9754025851/p51854.png)

文件里的第一行会默认作为数据节点的名称，其他行默认为具体的数据：

![](https://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/9754025851/p51855.png)

我们补充好其他的选项，单击“提交”按钮：

![](https://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/9754025851/p51856.png)

你会发现，数据节点都创建好了，单击“查询数据”，你会发现文件里的数据也进来了：

![](https://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/9754025851/p51857.png)

如果还想继续上传数据，可以单击上传数据按钮：

![](https://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/9754025851/p51858.png)

选择文件后继续上传数据，如果主键已经存在则会update数据，如果主键不存在则会insert数据。特别注意，文件的后缀只能是CSV（否则无法上传）且文件格式必须是UTF8的（否则会乱码）。我们再新建一个数据来自“文件导入/API”的数据源，进入详情之后单击“新建数据节点”，一个一个的创建数据节点：

![](https://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/0854025851/p51859.png)

同样我们可以成功创建所有的数据节点，只是没有同时上传数据而已（后续可以通过文件或API导入数据）：

![](https://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/0854025851/p51860.png)
