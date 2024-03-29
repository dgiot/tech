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

数字工厂会根据入驻时候选择所在的行业提供初始化的元数据，一般包括常用的人员、物料组、物料类型、物料、设备类型、设备型号和生产设备等元主数据，这些数据是具有高业务价值的、可以在企业内跨越各个业务部门被重复使用的数据，并且存在于多个工业应用中。系统管理员可以根据本企业工业应用的情况对元主数据进行扩展。

![](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/6808359951/p53408.png)

## 新增元数据

除了默认提供的元数据，例如需要建立设备故障知识库，定义故障原因元数据，这类主数据就可以在设备运维、质量分析和生产排产等应用中使用。首先单击“新建元数据”：

![](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/6808359951/p53409.png)

在弹出的页面中输入元数据名称和描述，如果主数据是需要进行多版本的选择多版本管理，例如在流程生产中的物料配方大部分情况数据是需要进行多版本管理。

![元数据定义](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/6808359951/p85580.png)

有些主数据本身是需要来可以来表述上下层级关系，比如部门之间的上下级关系，物料类型的主类型和子类型关系。对于这些类型在元数据定义中勾选**通过唯一标识定义层级关系**，并且在属性中增加本类型的属性。以部门为例，有一个属性为“上级部门“，上级部门的属性类型为部门主数据。

![层级关系](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/6006577061/p198948.png)

那么在创建和导入部门信息的时候能够根据编码前缀，自动找到对应的上级部门。

![上级部门](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/6808359951/p85610.png)定义属性

在属性列表中可以定义主数据第一个属性，单击下方的“添加”，可以为主数据添加更多的属性。![增加属性](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/6006577061/p198949.png)

在属性列表中，输入新增属性的名称、标识，并选择属性类型，并选择属性的特征。

**唯一标识**

元数据的是否唯一标识属性，是用来主数据记录中唯一区分一条主数据的属性，例如唯一的员工工号来区分人员主数据，唯一的固定资产编号来区分生产设备主数据，如果是这样的唯一标识属性，在新建元数据属性是是否唯一标识要设置为“是”，其他情况设置为否。每个元数据可以选择多个属性作为唯一标识，例如商品用生产日期、批次号和流水码三个属性来唯一标识单个商品。

**是否必填**

属性是否必填决定在创建新的主数据该属性是否一定要填写。

**显示属性**

是否元数据的显示属性，是用来标识在列表中或者选择主数据下拉框的地方显示哪个属性，例如在物料主数据中可以一般用物料名称作为显示属性，企业也可以根据企业情况用物料简码做显示属性。

**查询属性**

是否查询属性，如果设置为查询属性，在[查询主数据](https://help.aliyun.com/document_detail/126864.htm#section-d09-7s4-j1y)中可以作为查询条件对主数据进行查询过滤。

**多值**

是否多值属性，是表示一个主数据在这个属性里面可以填写多个值，例如在人员主数据中的字符串类型的手机号码，因为一个人可能有多个手机号码，就可以把手机号码这个属性设置为多值。

**显示优先级**

可以单击显示优先级的上移和下移来调整属性显示的顺序，显示顺序决定了属性列表中显示的属性顺序和创建编辑属性的顺序。建议把主数据中重要的属性优先级调整最高，例如作为唯一标识的属性、作为显示的属性以及必填的属性。

属性值设置

在每个属性的类型选中后，可以设置属性值的设置，比如默认值和取值范围等信息。![属性](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/6006577061/p198952.png)

属性类型

在属性类型中除了常规的类型以为，还有以下四类特殊的属性类型：主数据、物联网设备和工厂模型和工艺路径。

**属性类型-主数据**

属性类型中先选择主数据，然后在关联的主数据列表中选择一种元数据，将定义这个属性关联到另一类主数据中去，比如说物料的采购负责人，将关联到人员主数据，将记录哪个人员负责物料的采购工作。

![人员主数据](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/6808359951/p85513.png)**属性类型-物联网设备**

属性类型中选择物联网设备，在主数据数据中将通过该属性关联到具体的物联网设备，比如说每一种物料都会绑定一个RFID的IoT物联网设备，通过物联网设备上报产品的数据。![物联网设备](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/6006577061/p198953.png)

**属性类型-工厂模型**

属性类型中选择工厂模型，再选择哪一级的工厂模型，在创建主数据的数据中将选择对应模型，比如说员工属于哪个车间，那属性类型中选择工厂模型，然后在**关联的工厂模型**中选择车间和默认值。

![车间](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/6808359951/p85544.png)**属性类型-工艺路径**

属性类型中选择工艺路径，再选择关联到工艺路径、工序还是工序步骤，在创建主数据的数据中将选择对应模型，比如说物料主数据可以使用哪些工艺路径的进行生产，属性类型中选择工艺路径，然后在**关联的工艺路径**中选择工序和工序默认值。

![](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/7808359951/p64805.png)**属性类型-库存地点**

属性类型中选择库存地点，再选择关联到仓库、库区还是库位，在创建主数据的数据中将选择对应模型，比如说生产设备主数据可以在哪个库区存放备件，属性类型中选择库存地点，然后在**关联的库存地点**中选择库区和默认库区。

![库存](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/7808359951/p85545.png)

## 编辑元数据

如果对创建的元数据的基本信息需要进行修改，可以单击元数据后的“编辑”操作。

![](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/7808359951/p53412.png)

## 删除元数据

如果元数据的定义有问题不再需要，可以单击元数据后面的“删除”操作。

![](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/7808359951/p53434.png)

如果根据元数据的定义已经导入或者新建主数据，删除操作会提示错误“存在数据记录，无法删除主数据”。

![](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/7808359951/p53435.png)

## 配置主数据导航

创建好新的元数据以后，需要在导航页面中配置对应的导航页面，才能把对应的主数据管理页面在导航中显示，分配给不同的业务人员进行主数据的管理。

![](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/7808359951/p53436.png)![](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/7808359951/p53437.png)

在导航菜单中创建模块，并关联到对应的主数据管理页面，具体操作可参考站点设置中的导航设置。

![](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/7808359951/p53438.png)

## 定义授权

开通的三方应用可以通过接口来设定应用自己需要定义的元数据，参看应用集成中的[元数据定义](https://help.aliyun.com/document_detail/157954.htm#reference-2444999 "可以通过接口定义本应用需要的元数据，在调用该接口时候需要获得用户的***。")。除了接口授权，还需要在元数据列表中在做一次元数据定义授权，单击定义授权，从已经开通的三方应用做一次授权，只有授权过的应用才能调用API进行元数据的定义。![定义授权](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/7808359951/p93279.png)

在三方应用列表中单击**授权**，可对应用进行元数据定义的授权。![授权](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/7808359951/p93281.png)

已经授权的应用单击**取消授权**，将收回定义元数据的权限。

## 复制元数据

已经定义好的元数据，可以在操作中单击**复制**功能，复制该元数据的定义：![复制](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/7006577061/p198959.png)

复制元数据可以对新元数据进行命名，也可以选择是否把该元数据中以后的主数据记录同样复制一份到新的元数据中。![复制原数据](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/7006577061/p198960.png)
