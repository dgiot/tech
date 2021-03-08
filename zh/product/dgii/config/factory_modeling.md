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

工厂模型是数字工厂的基础，真实反应企业的生产制造方式，也是业务数据的关联和组织的基础。

## 工厂管理

**新建工厂**

首先创建企业下属的工厂信息，单击**新增工厂**。

![](https://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/2180779851/p53303.png)

在弹出的页面中输入工厂名称和工厂编码，工厂编码是作为唯一识别工厂的代码，以及工厂情况的简单描述。

![](https://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/2180779851/p53304.png)

  
| 参数 | 描述 |
| --- | --- |
| 工厂名称 | 不超过50个字符，同一个数字工厂账户下工厂名称不能重复 |
| 工厂编码 | 不超过50个字符，同一个数字工厂账户下工厂编码不能重复，支持英文、数字和下划线 |
| 描述 | 工厂的描述信息，不超过500个字符 |

**查看工厂信息详情**

确认后将出现新工厂的卡片信息，单击卡片将进入新创建的工厂详情页面。

![](https://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/2180779851/p53305.png)

**修改工厂详情**

工厂详情页面中可以查看工厂的编码，信息创建时间和最后修改时间，单击**编辑**，可修改工厂的基本信息。

![](https://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/3180779851/p53306.png)

**删除工厂**

如果工厂信息输入错误，可以单击**删除**，一旦确认删除，将删除工厂记录以及下级车间所有信息。创建好工厂后，可以单击**发布**工厂，一旦发布工厂以后，其他功能和应用将使用该工厂信息，将不能再删除工厂信息。

![](https://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/3180779851/p53309.png)

**归档工厂信息**

一旦工厂信息发布以后，如果工厂不再使用，可单击**归档**操作。如果工厂有下级车间，一旦工厂信息归档，下级所有的信息也同时进行归档操作。

![](https://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/3180779851/p53310.png)

如果工厂有额外属性需要记录，单击**属性**页签。

![](https://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/3180779851/p53311.png)

**定义工厂扩展属性**

单击**新增属性**后，可录入工厂属性值。

![](https://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/3180779851/p53312.png)

属性新增完成后，将出现在车间属性列表中，可以对已经录入的车间属性进行编辑和删除。

![](https://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/3180779851/p53313.png)

## 车间管理

**新增车间**

单击**新增车间**，可创建工厂下属新的车间。

![](https://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/4180779851/p53315.png)

输入新车间的名称、编码和描述，确认后将在工厂下创建新车间。

![](https://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/4180779851/p53316.png)

  
| 参数 | 描述 |
| --- | --- |
| 车间名称 | 不超过50个字符，同一个数字工厂账户下车间名称不能重复 |
| 车间编码 | 不超过50个字符，同一个数字工厂账户下车间编码不能重复，支持英文、数字和下划线 |
| 描述 | 车间的描述信息，不超过500个字符 |

创建成功后将在左侧工厂模型导航中出现工厂下级车间。

![](https://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/4180779851/p53317.png)

**定义车间扩展属性**

单击进入车间详情页面中，选择属性列表页签，单击**新增属性**后，可录入车间属性值。

![](https://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/4180779851/p53318.png)

**发布车间信息**

创建好车间后，可以单击**发布**车间，一旦发布车间以后，其他功能和应用将使用该车间信息，将不能再删除车间信息。如果发布车间信息的时候，上级工厂的状态还未发布，将提示确认，同时发布上级的工厂信息。

![](https://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/4180779851/p53320.png)

**归档工厂信息**

一旦车间信息发布以后，如果车间不再使用，可单击**归档**。如果车间有下级产线，一旦产线信息归档，下级所有的信息也同时进行归档操作。

![](https://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/5180779851/p53321.png)

## 产线管理

**新建产线**

在车间详情页面中，单击**新增产线**，可创建车间下属新的产线。

![](https://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/5180779851/p53326.png)

输入新产线的名称、编码和描述，确认后将在车间下创建新产线。

![](https://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/5180779851/p53328.png)

  
| 参数 | 描述 |
| --- | --- |
| 产线名称 | 不超过50个字符，同一个数字工厂账户下产线名称不能重复 |
| 产线编码 | 不超过50个字符，同一个数字工厂账户下产线编码不能重复，支持英文、数字和下划线 |
| 描述 | 产线的描述信息，不超过500个字符 |

创建成功后将在左侧工厂模型导航中出现车间下级产线。

![](https://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/5180779851/p53329.png)

**定义产线扩展属性**

单击进入产线详细页面中，选择属性页签，单击**新增属性**后，可录入产线属性值。

![](https://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/6180779851/p53330.png)

**发布产线信息**

创建好产线后，可以单击**发布**产线，一旦发布产线以后，其他功能和应用将使用该产线信息，将不能再删除产线信息。如果发布产线信息的时候，上级车间的状态还未发布，将提示确认，同时发布上级的产线信息。

![](https://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/6180779851/p53332.png)

**归档产线信息**

一旦产线信息发布以后，如果产线不再使用，可单击**归档**操作。如果产线有下级加工中心，一旦产线信息归档，下级所有的信息也同时进行归档操作。

![](https://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/6180779851/p53333.png)

## 加工中心管理

**新建加工中心**

在产线详情页面中，单击**新增加工中心**，可创建产线下属的加工中心。加工中心是单个或者一组设备，是指在制造过程中独立的生产能力单元，同时完成指定的生产任务。

![](https://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/6180779851/p53337.png)

输入新加工中心的名称、编码和描述，确认后将在产线下创建新加工单元。

![](https://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/6180779851/p53338.png)

  
| 参数 | 描述 |
| --- | --- |
| 加工中心名称 | 不超过50个字符，同一个数字工厂账户下加工中心名称不能重复 |
| 加工中心编码 | 不超过50个字符，同一个数字工厂账户下加工中心编码不能重复，支持英文、数字和下划线 |
| 描述 | 加工中心的描述信息，不超过500个字符 |

创建成功后将在左侧工厂模型导航中出现产线下级加工中心。

![](https://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/6180779851/p53339.png)

**定义加工中心扩展属性**

单击进入加工中心详情页面中，选择属性页签，单击**新增属性**后，可录入加工中心属性值。一个加工中心可以绑定一个或多个生产设备，单击新增设备。

![](https://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/7180779851/p53341.png)

**发布加工中心信息**

创建好加工中心后，可以单击**发布**加工中心，一旦发布加工中心以后，其他功能和应用将使用该加工中心信息，将不能再删除加工中心信息。如果发布加工中心信息的时候，上级产线的状态还未发布，将提示确认，同时发布上。

![](https://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/7180779851/p53343.png)

在弹出的设备列表中找到该加工中心的所属设备，然后单击确认。

![](https://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/7180779851/p53344.png)

一个设备只能属于一个加工中心，如果绑定关系错误可以移除设备关系。

![](https://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/7180779851/p53345.png)

**归档加工中心**

一旦加工中心信息发布以后，如果加工中心不再使用，可单击**归档**操作。

![](https://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/7180779851/p53346.png)