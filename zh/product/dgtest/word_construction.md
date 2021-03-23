---
icon: creative
category: 云压测
---
# 云压测入门

## Promethus架构         
          
![Promethus.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/product/dgtest/Promethus.png)

## 名词解释

| 模块| 名词 | 描述  |
| ------------ | ------------ |------------ |
|Prometheus|Alert|一条Alert是Prometheus一条警报规则的输出（处于着火状态的警报输出）。一条Alert产生后，由Prometheus发送给Alertmanager。|
|Prometheus|Alertmanager|Alertmanager接收Alerts，将它们聚合成组、去重，应用沉默、节流，然后发送通知到邮件, Pagerduty, Slack等。|
|Prometheus|Bridge|Bridge是一个组件，它从Client library采样，同时把这些数据暴露给一个非Prometheus的监控系统。比如：可以把Python, Go, and Java客户端的metrics暴露给Graphite。|
|Prometheus|Client library|Client library是一个用某种语言(比如：Go, Java, Python, Ruby等)写的库。Client library可以直接在你的代码中使用；可以写一个定制化的收集器，从其它系统pull metrics，同时暴露这些metrics给Prometheus。|
|Prometheus|Collector|Collector是Exporter的一部分，它代表一组metrics。It may be a single metric if it is part of direct instrumentation, or many metrics if it is pulling metrics from another system|
|Prometheus|Direct instrumentation|Direct instrumentation is instrumentation added inline as part the source code of a program.|
|Prometheus|Endpoint|一个能够被抓取metrics的源，通常相当于一个进程。|
|Prometheus|Exporter|Exporter是一个给Prometheus暴露metrics的二进制程序，用于把非Prometheus格式的metrics转为Prometheus格式的metrics。|
|Prometheus|Endpoint|一个能够被抓取metrics的源，通常相当于一个进程。|
|Prometheus|Instance|Instance是一个标识job中target的一个标签。|
|Prometheus|Job|一组有相同目的的目标，叫做作业。比如监控一组用于高可用和可伸缩的进程。|
|Prometheus|Notification|Notification代表由一个或多个alerts组成的警报组。Alertmanager发送Notification给邮件, Pagerduty, Slack等。|
|Prometheus|Promdash|Promdash是Prometheus自带的dashboard。生产上建议使用Grafana。|
|Prometheus|Prometheus|Prometheus一般是指Prometheus系统的核心二进制文件。有时也指Prometheus监控系统本身。|
|Prometheus|PromQL|PromQL是Prometheus查询语言。它支持aggregation, slicing and dicing, prediction and joins。|
|Prometheus|Pushgateway|The Pushgateway会保存批量任务最近push的metrics。Prometheus能够从Pushgateway抓取这些metrics。|
|Prometheus|Remote Read|Remote Read是Prometheus提供的一个功能，它支持Prometheus从其它的系统(长期存储系统)读取时间序列数据(作为查询的一部分)。|
|Prometheus|Remote Read Adapter|不是所有的系统原生的支持远端读操作。Remote Read Adapter位于远端系统和Prometheus之间，转换时间序列请求和响应。|
|Prometheus|Remote Read Endpoint|Remote Read Endpoint是远端系统的endpoint，Prometheus与这个endpoint通信。|
|Prometheus|Remote Write|Remote Write是Prometheus提供的功能，它支持把收集到的metrics远程写入到远端系统(长期存储系统)。|
|Prometheus|Remote Write Adapter|不是所有的系统都原生支持Prometheus远程写操作。Remote Write Adapter是一个适配器，位于Prometheus与远端系统之间，把Prometheus的metrics转化为远端系统能够理解的数据格式。|
|Prometheus|Remote Write Endpoint|A remote write endpoint is what Prometheus talks to when doing a remote write。|
|Prometheus|Silence|Silence是Alertmanager提供的功能，用于阻止特定的alerts。这些alerts的标签与Silence设定的标签相匹配。|
|Prometheus|Target|A target is the definition of an object to scrape. For example, what labels to apply, any authentication required to connect, or other information that defines how the scrape will occur。|
|Grafana|DataSource|Grafana支持许多不同的时间序列数据（数据源）存储后端。每个数据源都有一个特定的查询编辑器。官方支持以下数据源：Graphite、infloxdb、opensdb、prometheus、elasticsearch、cloudwatch。每个数据源的查询语言和功能明显不同。您可以将来自多个数据源的数据组合到一个仪表板上，但每个面板都要绑定到属于特定组织的特定数据源。|
|Grafana|Organization|grafana支持多个组织，以支持各种部署模型，包括使用单个grafana实例为多个可能不受信任的组织提供服务。|
|Grafana|User|用户是grafana中的命名帐户。用户可以属于一个或多个组织，并且可以通过角色分配不同级别的权限。Grafana支持各种各样的内部和外部方法，供用户进行身份验证。这些包括来自自己的集成数据库、来自外部SQL Server或来自外部LDAP服务器。|
|Grafana|Row|行是仪表板中的逻辑分隔符，用于将面板分组在一起。行总是12“单位”宽。这些单位根据浏览器的水平分辨率自动缩放。通过设置面板自身的宽度，可以控制一行中面板的相对宽度。我们使用了一个单元抽象，这样Grafana在无论是小屏幕还是大屏幕 看起来都很舒服。|
|Grafana|Panel|面板是Grafana中的基本可视化构建块。每个面板都提供一个查询编辑器（取决于面板中选择的数据源），通过使用查询编辑器，您可以提取显示在面板上的完美可视化效果。有各种各样的样式和格式选项，每个面板开源，让您创建完美的图片。面板可以在仪表板上拖放和重新排列。它们也可以调整大小。当前有四种面板类型：graph、singlestat、dashlist、table和text。|
|Grafana|Query Editor|查询编辑器公开数据源的功能，并允许您查询它包含的度量。使用查询编辑器在时间序列数据库中生成一个或多个查询（针对一个或多个序列）。该面板将立即更新，允许您实时有效地探索数据，并为该特定面板构建一个完美的查询。您可以在查询本身的查询编辑器中使用模板变量。这提供了一种基于仪表板上选择的模板变量动态探索数据的强大方法。Grafana允许您在查询编辑器中按查询所在的行引用查询。如果向图形中添加第二个查询，只需键入a即可引用第一个查询。这为构建复合查询提供了一种简单方便的方法。|
|Grafana|Dashboard|仪表盘就是一切的归宿。仪表板可以看作是一组组织并排列成一行或多行的一个或多个面板。仪表板的时间段可以由仪表板右上角的仪表板时间选择器控制。仪表盘可以利用模板化使其更具动态性和互动性。仪表板可以利用注释在面板之间显示事件数据。这有助于将面板中的时间序列数据与其他事件关联起来。仪表板（或特定面板）可以通过多种方式轻松共享。您可以向登录您的Grafana的人发送链接。您可以使用快照功能将当前查看的所有数据编码为静态和交互式JSON文档；这比通过电子邮件发送屏幕截图要好得多！可以标记仪表板，仪表板选择器提供对特定组织中所有仪表板的快速、可搜索访问。|


