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

## 基础定义

定义好数据源后，可从菜单中选择**边缘数据集成**，进行边缘数据集成的配置，单击**新建边缘数据集成**：![新建边缘数据集成](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/9118359951/p132430.png)

首先给数据集成起一个比较容易识别的名字，比如**ERP数据上云**；其次选择模板，阿里云数字工厂提供了系统自带的数据集成模板，比如用户ERP-T6对接模板，如果没有合适的模板，需要根据企业实际情况进行开发和配置，可以选择**自定义**类型模板；最后选择运行数据集群的边缘集群（集群必须先安装八爪鱼组件才能运行边缘数据集成任务）：![测试](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/9118359951/p132434.png)

如果选择了系统自带的数据集成模板，将根据模板配置进行初始化内容：![ERP配置](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/0218359951/p132435.png)

模板初始化的内容还是需要进行相关的配置，比如选择数据源等操作，完成配置操作，单击输入节点中**数据库增量配置**：![测试](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/0218359951/p132436.png)

在输入节点的配置界面中选择数据源以后：![配置节点](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/0218359951/p132437.png)

完成配置以后，该任务的配置状态将变成**配置完成**：![配置完成](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/0218359951/p132438.png)

## 参数

完成数据集成的基础定义后，可能在任务脚本中需要根据边缘系统的情况配置对应的参数值，单击参数后面的**添加**操作，可以增加设置新参数值，参数值可以在代码中获得参数值：![新增参数值](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/0218359951/p132439.png)

可以设置参数值：![参数值](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/0218359951/p132440.png)

在输入/输出/转换节点的脚本函数中，都用一个context记录作业的上下文，context.envConfig.get("参数名") 可以读取到边缘数据集成中已经配置的参数值，在脚本中获取参数的示例：

```auto
    /**
 * 客户实现: transform()转换函数
 * 这是脚本转换器的第一个转换函数,负责将 数据来源(如数据库变换的数据) 转换成 目标数据格式,如主数据,服务模型数据,物联网数据等
 * 如下的代码是一个示例:仅供参考,需要根据您的实际业务场景转换逻辑进行编写
 * 示例代码是数据源的数据转换成iot工业数字工厂的人员主数据格式
 * @param eventType为事件类型,对于数据库事件有 insert,update,delete
 * @param msgPayload 为需要转换的目标数据,注意其格式是一个Map,对应Java的格式为Map<String, Object>
 * @context 系统上下文参数
 * @return 返回转换后的数据格式,必须也为一个Map,即数据输入为Map,转换格式后还是为Map
 */
function transform(eventType, msgPayload, context) {
   eaipath = context.envConfig.get("EAI访问地址") ;
   return masterData;
}
```

## 插件文件

如果在作业脚本中需要使用到其他扩展文件，可以在数据集成中上传插件文件，单击**上传插件**，从本地文件中选择后上传：![插件上传](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/0218359951/p132510.png)

上传的插件可以被这个配置中的任务一个作业节点脚本引用。

典型例子：写好一个API登录检测的包，在输入输出节点脚本中调用：

```auto
var httpPlugin = require('./../httpPlugin.js');
var token = null;
//上次使用token的时间
var token_time = 0;
function getToken(name, password) {
    if (new Date().getTime() - token_time > 1000*30) {
        //模拟获取Token的过程
        let response = httpPlugin.httpPostJson("/api/getToken", {"name":name, "pwd": password});
        if (response.code === 200) {
            token = response.data;
        } else {
            console.log("GetToken error:" + response.code);
      return null;
        }
    }
    token_time = new Date().getTime();
    return token;
}

module.exports.getToken = getToken;
```

在作业脚本可用以下代码进行使用：

```auto
function distribute(eventType, msgPayload, context) {
  //插件的包名是上传JS的文件名
  token = mesPlugin.getToken(context.envConfig.get("mesName"),
  context.envConfig.get("mesPwd")));
  ...
}
```

注：引用插件的包名是上传JS的文件名。

## 什么是集成任务

数据集成中可以定义不同的数据集成任务，每个集成任务由各个部分组成输入节点、转换节点和输出节点，输入节点负责根据定义把数据同步到边缘计算节点中，转换节点可以把同步上的数据做指定的数据内容转换，数据内容转换后通过输出节点指定到最终的数据使用方。

输入节点支持以下类型：

+   数据库增量：配合[数据库类型数据源](https://help.aliyun.com/document_detail/174525.htm#section-bqa-j8o-l6v)，能监控数据源中数据的变化，同步到边缘计算节点
+   服务提供：把服务模型的[服务提供方](https://help.aliyun.com/document_detail/114863.html)提供的数据同步到边缘计算节点
+   数据库查询：主动按照设定周期查询[数据库类型数据源](https://help.aliyun.com/document_detail/174525.htm#section-bqa-j8o-l6v)中的数据到边缘计算节点
+   API上报：边缘计算将实现Web API，提供第三方来调用
+   API查询：主动按照设定周期查询[消息队列类型数据源](https://help.aliyun.com/document_detail/174525.htm#section-zj3-8jn-umc)中的数据到边缘计算节点
+   消息监控：配合[消息队列类型数据源](https://help.aliyun.com/document_detail/174525.htm#section-zj3-8jn-umc)，能监控队列中订阅到新的消息，同步到边缘计算节点
+   主数据：监控到数字工厂中指定类型的主数据发生变化，同步到边缘计算节点

输出节点支持以下类型：

+   主数据：以转换后的数据格式创建数字工厂的[主数据管理](https://help.aliyun.com/document_detail/126864.htm#concept-1340047 "数字工厂提供了人员、物料组、物料类型、物料、设备类型、设备型号和生产设备等默认定义元数据，企业管理人员也可以根据本企业具体情况对主数据进行扩展。系统管理人员可以在数据管理中统一维护所有数字工厂的主数据。每个主数据都可以分配给不同的角色去管理，配置不同的导航入口去使用。")
+   服务依赖：把转换后的数据同步给服务模型的[服务依赖方](https://help.aliyun.com/document_detail/114863.html)
+   数据库回写：把转换后的数据写回给[数据库类型数据源](https://help.aliyun.com/document_detail/174525.htm#section-bqa-j8o-l6v)中的数据源
+   API调用：把转换后的数据调用[消息队列类型数据源](https://help.aliyun.com/document_detail/174525.htm#section-zj3-8jn-umc)指定API
+   告警：把转换后的数据同步创建为数字工厂告警信息，在[消息和报警](https://help.aliyun.com/document_detail/126841.htm#section-3qr-5gz-9u6)中可以查看
+   物联网设备事件：把转换后的数据作为物联网设备事件的输入参数发送给设备
+   消息推送：把转换后的数据发送给指定的消息队列中
+   数据开发：把转换后的数据同步到数据开发中的[自定义表](https://help.aliyun.com/document_detail/160706.htm#section-6od-lrq-sye)中
+   自定义脚本：在以上类型不能满足业务场景的情况下，支持完全自定义的编写脚本来处理特殊的场景

场景一：边缘端ERP中的供应商信息需要同步到数字工厂然后分发给所有订阅了该信息的所有工业应用，边缘端ERP开放数据库，输入节点为数据库增量，输出节点为主数据；

场景二：数字工厂的云端应用需要把电商订单推送到边缘端ERP，边缘端ERP开放Web API来接收订单数据，输入节点为服务提供，输出节点为API调用。

## 任务管理

数据集成页面中会列出改集成下的所有任务，包括任务名称、输入节点、转换节点、输出节点、状态以及相关操作，新建一个数据集成任务单击列表下**添加**：![添加任务](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/0218359951/p132602.png)

在新建的任务中输入任务名称，然后选择输入节点的类型，然后单击输入节点后**配置**：![输入节点配置](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/0218359951/p132611.png)

不同类型的输入节点需要配置的内容如下：

  
| 输入节点类型 | 参数 | 参数说明 |
| --- | --- | --- |
| 数据库增量 | 数据源 | 选择边缘集群下的数据库类型的数据源 |
| 增量表名 | 被监控的数据库表名 |
| 第一次启动是否全量同步 | 如果选择是，第一次部署到边缘八爪鱼运行任务将把表中所有的数据同步，如果选择否，只同步任务运行后的数据 |
| 服务提供 | 服务模型 | 选择已发布的服务模型 |
| 接口 | 选择服务模型下的接口 |
| 数据库查询 | 定时设置 | 定时查询数据库的周期，采用采用Cron表达式，默认为每天晚上0点执行 |
| 数据源 | 选择边缘集群下的数据库类型的数据源 |
| 增量标识字段 | 识别数据库查询结果集中数据的唯一标识字段，如果多个字段用英文逗号隔开 |
| 脚本 | 执行查询的脚本，查看[1.1 数据库查询](https://help.aliyun.com/document_detail/173896.html?#K7IiW) |
| API上报 | 数据源 | 选择边缘集群下的API类型的数据源 |
| path | API的发布路径，对应边缘集群的相对路径，比如边缘集群的IP 192.0.0.1，path为/createOrder，最终的发布API访问路径为http://192.0.0.1:8089/createOrder |
| API查询 | 定时设置 | 定时查询数据库的周期，采用采用Cron表达式，默认为每天晚上0点执行 |
| 数据源 | 选择边缘集群下的API类型的数据源 |
| path | API的访问路径，对应API数据源的相对路径，比如API数据源的url为http://192.0.0.1，path为/test，最终的API访问路径为http://192.0.0.1/test |
| 脚本 | 执行查询的脚本，查看[1.2 API查询](https://help.aliyun.com/document_detail/173896.html?#K7IiW) |
| 消息监控 | 数据源 | 选择边缘集群下的消息队列类型的数据源 |
| Topic | 需要监控的消息主题 |
| Group ID | 使用哪个Group ID去订阅消息 |
| 主数据 | 主数据 | 选择数字工厂中的一种元数据 |

完成输入节点配置后，选择转换节点为脚本转换，单击转换节点的**配置**：![配置](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/0218359951/p132616.png)

转换节点中可编写脚本进行数据结构和输出数据结构的转换，脚本编辑器根据数据集成任务的输入节点和输出节点类型，提供了代码智能提示和自动补全功能，帮助提高开发效能：![补全](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/9795577061/p198992.png)

在脚本编辑过程中可选择**全屏模式**进行脚本编辑：![全屏模式](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/2691374061/p180020.png)数据集成下发到边缘集群八爪鱼以后，可以输入Mock数据，单击**脚本调试**，然后切换到结果和日志页查看转换后的数据结果：![查看](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/2691374061/p180021.png)

配置好转换节点以后，最后需要定义输出节点，选择输入节点的类型，然后单击输出节点后**配置**：![输出节点](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/0218359951/p132618.png)

不同类型的输出节点需要配置的内容如下：

  
| 输出节点类型 | 参数 | 参数说明 |
| --- | --- | --- |
| 服务依赖 | 服务模型 | 选择已发布的服务模型 |
| 接口 | 选择服务模型下的接口 |
| 主数据 | 主数据类型 | 选择在[元数据管理](https://help.aliyun.com/document_detail/126855.htm#concept-1340031 "数字工厂会根据入驻时候选择所在的行业提供初始化的元数据，一般包括常用的人员、物料组、物料类型、物料、设备类型、设备型号和生产设备等元主数据，这些数据是具有高业务价值的、可以在企业内跨越各个业务部门被重复使用的数据，并且存在于多个工业应用中。系统管理员可以根据本企业工业应用的情况对元主数据进行扩展。")定义的主数据 |
| 数据库回写 | 数据源 | 选择边缘集群下的数据库类型的数据源 |
| 脚本 | 回写数据库脚本，查看[3.1 数据库回写](https://help.aliyun.com/document_detail/173896.html?#K7IiW) |
| API调用 | 数据源 | 选择边缘集群下的API类型的数据源 |
| path | API的访问路径，对应API数据源的相对路径，比如API数据源的url为http://192.0.0.1，path为/test，最终的API访问路径为http://192.0.0.1/test |
| 脚本 | 调用API脚本，查看[3.2 API调用](https://help.aliyun.com/document_detail/173896.html?#K7IiW) |
| 告警 | 报警 | 选择在[报警定义](https://help.aliyun.com/document_detail/126846.htm#section-zzz-xdb-kza)设置的报警 |
| 脚本 | 告警脚本，查看[3.3 告警](https://help.aliyun.com/document_detail/173896.html?#K7IiW) |
| 物联网设备服务 | 物联网设备 | 选择一个物联网设备 |
| 物联网服务 | 选择该设备中的一个服务 |
| 脚本 | 物联网设备服务脚本，查看[3.4 物联网设备服务](https://help.aliyun.com/document_detail/173896.html?#K7IiW) |
| 消息推送 | 数据源 | 选择边缘集群下的消息队列类型的数据源 |
| Topic | 需要推送消息的主题 |
| 数据开发 | 表名 | 选择数据开发中的[自定义表](https://help.aliyun.com/document_detail/160706.htm#section-6od-lrq-sye) |
| 自定义脚本 | 脚本 | 自定义脚本编写，查看[3.5 自定义脚本](https://help.aliyun.com/document_detail/173896.html?#K7IiW) |

完成输入节点、转换节点和输出节点的配置后，任务的配置状态将变成**配置完成**：![配置完成](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/0218359951/p132651.png)

单击任务**复制**操作：![复制](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/1218359951/p132623.png)

将复制一条新的任务，任务名称为原任务名称\_copy，节点配置内容保存不变：![复制结果](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/1218359951/p132624.png)

## 下载运行/调试

完成边缘数据集成的集成定义、参数（可选）、插件文件（可选）和任务配置后，单击数据集成**保存**，保存配置信息后单击**下载配置**，将把本边缘数据集成下载到边缘集群的八爪鱼应用中执行：![下载配置](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/1218359951/p132625.png)

已下载成功的边缘数据集成状态将变成**已下载**：![已下载](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/1218359951/p132626.png)

下载完成后，可以对集成任务进行调试，单击数据集成列表中的**编辑**操作，选择要进行调试的任务，可以单击任务**调试**操作：![调试](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/1218359951/p132620.png)

在调试页面中可以看到任务状态为正在**运行中**：![运行中](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/1218359951/p132650.png)

如果在脚本中增加了[日志打印](https://help.aliyun.com/document_detail/173896.html?spm=a2c4g.11186623.6.589.4ca474dejLOeFI#K7IiW)，将在调试窗口看到日志输出，比如作业的输入节点为数据库增量，一旦在数据库表中增加了新的记录，将看到对应的日志输出。

对于有些场景需要把数据源中的数据全量同步到输出节点的情况，比如把整个数据库表所有记录同步，可以单击任务的**全量操作**：![全量操作](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/1218359951/p132622.png)

系统提示全量同步已经开始启动，可以在调试窗口看到同步日志：![全量提示](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/1218359951/p132652.png)

如果数据集成任务有失败的情况，可以单击任务的**查看集成日志**操作：![查看日志](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/1218359951/p132653.png)

在同步日志窗口将看到该任务的错误记录，可以选择时间段查看记录：![查看日期](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/1218359951/p132654.png)

可以单击查看数据，查看错误的同步数据内容：![查看数据](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/1218359951/p132655.png)

可以单击**查看失败详情**，可以看到数据集成失败的具体原因：![错误](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/1218359951/p132656.png)

可以选择单条失败记录的手工同步，重新同步成功以后该条记录将删除：![手工同步](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/1218359951/p132657.png)

## 查看集成日志

除了可以在边缘数据集成的任务列表中查看单个任务的集成日志，在边缘数据集成列表中可以单击**查看日志**后登录阿里云日志服务控制台查看边缘集群执行日志：![查看集成日志](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/1218359951/p132627.png)
