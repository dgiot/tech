(window.webpackJsonp=window.webpackJsonp||[]).push([[422],{464:function(t,e,a){"use strict";a.r(e);var _=a(8),r=Object(_.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"云压测入门"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#云压测入门"}},[t._v("#")]),t._v(" 云压测入门")]),t._v(" "),a("h2",{attrs:{id:"promethus"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#promethus"}},[t._v("#")]),t._v(" Promethus")]),t._v(" "),a("p",[t._v("我们知道zabbix在监控界占有不可撼动的地位，功能强大。但是对容器监控显得力不从心。为解决监控容器的问题，引入了prometheus技术。prometheus号称是下一代监控。接下来的文章打算围绕prometheus做一个系列的介绍，顺便帮自己理清知识点。\nprometheus是由谷歌研发的一款开源的监控软件，目前已经被云计算本地基金会托管，是继k8s托管的第二个项目。\nprometheus根据配置定时去拉取各个节点的数据，默认使用的拉取方式是pull，也可以使用pushgateway提供的push方式获取各个监控节点的数据。将获取到的数据存入TSDB，一款时序型数据库。此时prometheus已经获取到了监控数据，可以使用内置的PromQL进行查询。它的报警功能使用Alertmanager提供，Alertmanager是prometheus的告警管理和发送报警的一个组件。prometheus原生的图标功能过于简单，可将prometheus数据接入grafana，由grafana进行统一管理。")]),t._v(" "),a("h3",{attrs:{id:"promethus监控的目的"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#promethus监控的目的"}},[t._v("#")]),t._v(" Promethus监控的目的")]),t._v(" "),a("p",[t._v("google指出，监控分为白盒监控和黑盒监控之分。")]),t._v(" "),a("p",[t._v("白盒监控：通过监控内部的运行状态及指标判断可能会发生的问题，从而做出预判或对其进行优化。")]),t._v(" "),a("p",[t._v("黑盒监控：监控系统或服务，在发生异常时做出相应措施。")]),t._v(" "),a("p",[t._v("监控的目的如下：")]),t._v(" "),a("p",[t._v("1. 根据历史监控数据，对为了做出预测")]),t._v(" "),a("p",[t._v("2. 发生异常时，即使报警，或做出相应措施")]),t._v(" "),a("p",[t._v("3. 根据监控报警及时定位问题根源")]),t._v(" "),a("p",[t._v("4. 通过可视化图表展示，便于直观获取信息")]),t._v(" "),a("h3",{attrs:{id:"promethus常用概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#promethus常用概念"}},[t._v("#")]),t._v(" Promethus常用概念")]),t._v(" "),a("p",[t._v("prometheus采集到的监控数据均以metric（指标）形式保存在时序数据库中（TSDB）\n　　每一条时间序列由 metric 和 labels 组成，每条时间序列按照时间的先后顺序存储它的样本值。\n　　默认情况下各监控client向外暴露一个HTTP服务，prometheus会通过pull方式获取client的数据，数据格式如下：")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/product/dgtest/Promethus.png",alt:"Promethus.png"}})]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('  #  HELP node_cpu Seconds the cpus spent in each mode.\n  #  TYPE node_cpu counter\n  node_cpu{cpu="cpu0",mode="idle"}    362812.7890625\n  #  HELP node_load1 1m   load    average.\n  #  TYPE node_load1 gauge\n  node_load1 3.0703125\n')])])]),a("p",[t._v("以#开头的表示注释信息，解释了每一个指标的监控目的和类型")]),t._v(" "),a("p",[t._v("node_cpu表示监控指标的名称")]),t._v(" "),a("p",[t._v("{}内的内容是标签，以键值对的方式记录")]),t._v(" "),a("p",[t._v("数字是这个指标监控的数据")]),t._v(" "),a("p",[t._v("下图横坐标代表的是时间（时间戳的方式记录在TSDB中），纵坐标代表了各种不同的指标名称，坐标系中的黑点代表了各个指标在不同时间下的值。")]),t._v(" "),a("p",[t._v("每一个横线 就是时间序列")]),t._v(" "),a("p",[t._v("每个黑点就是样本（prometheus将样本以时间序列的方式保存在内存中，然后定时保存到硬盘上）\n　　指标（metric）的格式如下：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("    <metric  name>{<label  name>=<label  value>,  ...}\n")])])]),a("p",[t._v("指标名称反映的是监控了什么。\n　　标签反映的是样本的维度，可以理解成指标的细化。比如：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v(' api_http_requests_total{method="POST",  handler="/messages"}\n')])])]),a("p",[t._v('指标是“api_http_requests_total”，含义是通过api请求的http总数。\n　　标签“method="POST"” "handler="/messages""代表了这些http请求中 POST 请求 并且 handler是/messages的数量\n　　上述指标等同于：')]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v(' {__name__="api_http_requests_total"，method="POST",  handler="/messages"}\n')])])]),a("h3",{attrs:{id:"promethus指标有四种类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#promethus指标有四种类型"}},[t._v("#")]),t._v(" Promethus指标有四种类型")]),t._v(" "),a("p",[t._v("1. Counter　　只增不减  计数器")]),t._v(" "),a("p",[t._v("2. Gauge　　可增可减    仪表盘")]),t._v(" "),a("p",[t._v("3. Histogram　　直方图")]),t._v(" "),a("p",[t._v("4. Summary　　摘要型")]),t._v(" "),a("h3",{attrs:{id:"promethus任务与实例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#promethus任务与实例"}},[t._v("#")]),t._v(" Promethus任务与实例")]),t._v(" "),a("p",[t._v("就Prometheus而言，pull拉取采样点的端点服务称之为instance，通常对应一个过程（实例）。具有相同目的的instance，例如，为可伸缩性或可靠性而复制的流程称为作业。, 则构成了一个job")]),t._v(" "),a("p",[t._v("例如, 一个被称作api-server的任务有四个相同的实例。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v(" job: api-server\n instance 1：1.2.3.4:5670\n instance 2：1.2.3.4:5671\n instance 3：5.6.7.8:5670\n instance 4：5.6.7.8:5671\n")])])]),a("p",[t._v("自动化生成的标签和时间序列\n当Prometheus拉取一个目标，会自动地把两个标签添加到度量名称的标签列表中，分别是：")]),t._v(" "),a("ul",[a("li",[t._v("job: 目标所属的配置任务名称。")]),t._v(" "),a("li",[t._v("instance: 被抓取的目标网址的一部分务: host:port")])]),t._v(" "),a("p",[t._v("如果以上两个标签二者之一存在于采样点中，这个取决于honor_labels配置选项。详见文档")]),t._v(" "),a("p",[t._v("对于每个采样点所在服务instance，Prometheus都会存储以下的度量指标采样点：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('  up{job="[job-name]", instance="instance-id"}: 1：表示采样点所在服务健康; 0：标识抓取失败\n \n scrape_duration_seconds{job="[job-name]", instance="[instance-id]"}: 抓取的持续时间\n \n scrape_samples_post_metric_relabeling{job="<job-name>", instance="<instance-id>"}: 应用度量标准重新标记后剩余的样本数。\n \n scrape_samples_scraped{job="<job-name>", instance="<instance-id>"}: 目标暴露的样本数量 up度量指标对服务健康的监控是非常有用的。\n')])])]),a("h3",{attrs:{id:"promethus名词解释"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#promethus名词解释"}},[t._v("#")]),t._v(" Promethus名词解释")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("模块")]),t._v(" "),a("th",[t._v("名词")]),t._v(" "),a("th",[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("Prometheus")]),t._v(" "),a("td",[t._v("Alert")]),t._v(" "),a("td",[t._v("一条Alert是Prometheus一条警报规则的输出（处于着火状态的警报输出）。一条Alert产生后，由Prometheus发送给Alertmanager。")])]),t._v(" "),a("tr",[a("td",[t._v("Prometheus")]),t._v(" "),a("td",[t._v("Alertmanager")]),t._v(" "),a("td",[t._v("Alertmanager接收Alerts，将它们聚合成组、去重，应用沉默、节流，然后发送通知到邮件, Pagerduty, Slack等。")])]),t._v(" "),a("tr",[a("td",[t._v("Prometheus")]),t._v(" "),a("td",[t._v("Bridge")]),t._v(" "),a("td",[t._v("Bridge是一个组件，它从Client library采样，同时把这些数据暴露给一个非Prometheus的监控系统。比如：可以把Python, Go, and Java客户端的metrics暴露给Graphite。")])]),t._v(" "),a("tr",[a("td",[t._v("Prometheus")]),t._v(" "),a("td",[t._v("Client library")]),t._v(" "),a("td",[t._v("Client library是一个用某种语言(比如：Go, Java, Python, Ruby等)写的库。Client library可以直接在你的代码中使用；可以写一个定制化的收集器，从其它系统pull metrics，同时暴露这些metrics给Prometheus。")])]),t._v(" "),a("tr",[a("td",[t._v("Prometheus")]),t._v(" "),a("td",[t._v("Collector")]),t._v(" "),a("td",[t._v("Collector是Exporter的一部分，它代表一组metrics。It may be a single metric if it is part of direct instrumentation, or many metrics if it is pulling metrics from another system")])]),t._v(" "),a("tr",[a("td",[t._v("Prometheus")]),t._v(" "),a("td",[t._v("Direct instrumentation")]),t._v(" "),a("td",[t._v("Direct instrumentation is instrumentation added inline as part the source code of a program.")])]),t._v(" "),a("tr",[a("td",[t._v("Prometheus")]),t._v(" "),a("td",[t._v("Endpoint")]),t._v(" "),a("td",[t._v("一个能够被抓取metrics的源，通常相当于一个进程。")])]),t._v(" "),a("tr",[a("td",[t._v("Prometheus")]),t._v(" "),a("td",[t._v("Exporter")]),t._v(" "),a("td",[t._v("Exporter是一个给Prometheus暴露metrics的二进制程序，用于把非Prometheus格式的metrics转为Prometheus格式的metrics。")])]),t._v(" "),a("tr",[a("td",[t._v("Prometheus")]),t._v(" "),a("td",[t._v("Endpoint")]),t._v(" "),a("td",[t._v("一个能够被抓取metrics的源，通常相当于一个进程。")])]),t._v(" "),a("tr",[a("td",[t._v("Prometheus")]),t._v(" "),a("td",[t._v("Instance")]),t._v(" "),a("td",[t._v("Instance是一个标识job中target的一个标签。")])]),t._v(" "),a("tr",[a("td",[t._v("Prometheus")]),t._v(" "),a("td",[t._v("Job")]),t._v(" "),a("td",[t._v("一组有相同目的的目标，叫做作业。比如监控一组用于高可用和可伸缩的进程。")])]),t._v(" "),a("tr",[a("td",[t._v("Prometheus")]),t._v(" "),a("td",[t._v("Notification")]),t._v(" "),a("td",[t._v("Notification代表由一个或多个alerts组成的警报组。Alertmanager发送Notification给邮件, Pagerduty, Slack等。")])]),t._v(" "),a("tr",[a("td",[t._v("Prometheus")]),t._v(" "),a("td",[t._v("Promdash")]),t._v(" "),a("td",[t._v("Promdash是Prometheus自带的dashboard。生产上建议使用Grafana。")])]),t._v(" "),a("tr",[a("td",[t._v("Prometheus")]),t._v(" "),a("td",[t._v("Prometheus")]),t._v(" "),a("td",[t._v("Prometheus一般是指Prometheus系统的核心二进制文件。有时也指Prometheus监控系统本身。")])]),t._v(" "),a("tr",[a("td",[t._v("Prometheus")]),t._v(" "),a("td",[t._v("PromQL")]),t._v(" "),a("td",[t._v("PromQL是Prometheus查询语言。它支持aggregation, slicing and dicing, prediction and joins。")])]),t._v(" "),a("tr",[a("td",[t._v("Prometheus")]),t._v(" "),a("td",[t._v("Pushgateway")]),t._v(" "),a("td",[t._v("The Pushgateway会保存批量任务最近push的metrics。Prometheus能够从Pushgateway抓取这些metrics。")])]),t._v(" "),a("tr",[a("td",[t._v("Prometheus")]),t._v(" "),a("td",[t._v("Remote Read")]),t._v(" "),a("td",[t._v("Remote Read是Prometheus提供的一个功能，它支持Prometheus从其它的系统(长期存储系统)读取时间序列数据(作为查询的一部分)。")])]),t._v(" "),a("tr",[a("td",[t._v("Prometheus")]),t._v(" "),a("td",[t._v("Remote Read Adapter")]),t._v(" "),a("td",[t._v("不是所有的系统原生的支持远端读操作。Remote Read Adapter位于远端系统和Prometheus之间，转换时间序列请求和响应。")])]),t._v(" "),a("tr",[a("td",[t._v("Prometheus")]),t._v(" "),a("td",[t._v("Remote Read Endpoint")]),t._v(" "),a("td",[t._v("Remote Read Endpoint是远端系统的endpoint，Prometheus与这个endpoint通信。")])]),t._v(" "),a("tr",[a("td",[t._v("Prometheus")]),t._v(" "),a("td",[t._v("Remote Write")]),t._v(" "),a("td",[t._v("Remote Write是Prometheus提供的功能，它支持把收集到的metrics远程写入到远端系统(长期存储系统)。")])]),t._v(" "),a("tr",[a("td",[t._v("Prometheus")]),t._v(" "),a("td",[t._v("Remote Write Adapter")]),t._v(" "),a("td",[t._v("不是所有的系统都原生支持Prometheus远程写操作。Remote Write Adapter是一个适配器，位于Prometheus与远端系统之间，把Prometheus的metrics转化为远端系统能够理解的数据格式。")])]),t._v(" "),a("tr",[a("td",[t._v("Prometheus")]),t._v(" "),a("td",[t._v("Remote Write Endpoint")]),t._v(" "),a("td",[t._v("A remote write endpoint is what Prometheus talks to when doing a remote write。")])]),t._v(" "),a("tr",[a("td",[t._v("Prometheus")]),t._v(" "),a("td",[t._v("Silence")]),t._v(" "),a("td",[t._v("Silence是Alertmanager提供的功能，用于阻止特定的alerts。这些alerts的标签与Silence设定的标签相匹配。")])]),t._v(" "),a("tr",[a("td",[t._v("Prometheus")]),t._v(" "),a("td",[t._v("Target")]),t._v(" "),a("td",[t._v("A target is the definition of an object to scrape. For example, what labels to apply, any authentication required to connect, or other information that defines how the scrape will occur。")])])])]),t._v(" "),a("h2",{attrs:{id:"grafana名词解释"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#grafana名词解释"}},[t._v("#")]),t._v(" Grafana名词解释")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("模块")]),t._v(" "),a("th",[t._v("名词")]),t._v(" "),a("th",[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("Grafana")]),t._v(" "),a("td",[t._v("DataSource")]),t._v(" "),a("td",[t._v("Grafana支持许多不同的时间序列数据（数据源）存储后端。每个数据源都有一个特定的查询编辑器。官方支持以下数据源：Graphite、infloxdb、opensdb、prometheus、elasticsearch、cloudwatch。每个数据源的查询语言和功能明显不同。您可以将来自多个数据源的数据组合到一个仪表板上，但每个面板都要绑定到属于特定组织的特定数据源。")])]),t._v(" "),a("tr",[a("td",[t._v("Grafana")]),t._v(" "),a("td",[t._v("Organization")]),t._v(" "),a("td",[t._v("grafana支持多个组织，以支持各种部署模型，包括使用单个grafana实例为多个可能不受信任的组织提供服务。")])]),t._v(" "),a("tr",[a("td",[t._v("Grafana")]),t._v(" "),a("td",[t._v("User")]),t._v(" "),a("td",[t._v("用户是grafana中的命名帐户。用户可以属于一个或多个组织，并且可以通过角色分配不同级别的权限。Grafana支持各种各样的内部和外部方法，供用户进行身份验证。这些包括来自自己的集成数据库、来自外部SQL Server或来自外部LDAP服务器。")])]),t._v(" "),a("tr",[a("td",[t._v("Grafana")]),t._v(" "),a("td",[t._v("Row")]),t._v(" "),a("td",[t._v("行是仪表板中的逻辑分隔符，用于将面板分组在一起。行总是12“单位”宽。这些单位根据浏览器的水平分辨率自动缩放。通过设置面板自身的宽度，可以控制一行中面板的相对宽度。我们使用了一个单元抽象，这样Grafana在无论是小屏幕还是大屏幕 看起来都很舒服。")])]),t._v(" "),a("tr",[a("td",[t._v("Grafana")]),t._v(" "),a("td",[t._v("Panel")]),t._v(" "),a("td",[t._v("面板是Grafana中的基本可视化构建块。每个面板都提供一个查询编辑器（取决于面板中选择的数据源），通过使用查询编辑器，您可以提取显示在面板上的完美可视化效果。有各种各样的样式和格式选项，每个面板开源，让您创建完美的图片。面板可以在仪表板上拖放和重新排列。它们也可以调整大小。当前有四种面板类型：graph、singlestat、dashlist、table和text。")])]),t._v(" "),a("tr",[a("td",[t._v("Grafana")]),t._v(" "),a("td",[t._v("Query Editor")]),t._v(" "),a("td",[t._v("查询编辑器公开数据源的功能，并允许您查询它包含的度量。使用查询编辑器在时间序列数据库中生成一个或多个查询（针对一个或多个序列）。该面板将立即更新，允许您实时有效地探索数据，并为该特定面板构建一个完美的查询。您可以在查询本身的查询编辑器中使用模板变量。这提供了一种基于仪表板上选择的模板变量动态探索数据的强大方法。Grafana允许您在查询编辑器中按查询所在的行引用查询。如果向图形中添加第二个查询，只需键入a即可引用第一个查询。这为构建复合查询提供了一种简单方便的方法。")])]),t._v(" "),a("tr",[a("td",[t._v("Grafana")]),t._v(" "),a("td",[t._v("Dashboard")]),t._v(" "),a("td",[t._v("仪表盘就是一切的归宿。仪表板可以看作是一组组织并排列成一行或多行的一个或多个面板。仪表板的时间段可以由仪表板右上角的仪表板时间选择器控制。仪表盘可以利用模板化使其更具动态性和互动性。仪表板可以利用注释在面板之间显示事件数据。这有助于将面板中的时间序列数据与其他事件关联起来。仪表板（或特定面板）可以通过多种方式轻松共享。您可以向登录您的Grafana的人发送链接。您可以使用快照功能将当前查看的所有数据编码为静态和交互式JSON文档；这比通过电子邮件发送屏幕截图要好得多！可以标记仪表板，仪表板选择器提供对特定组织中所有仪表板的快速、可搜索访问。")])])])]),t._v(" "),a("h2",{attrs:{id:"dgtest名词解释"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dgtest名词解释"}},[t._v("#")]),t._v(" DGTEST名词解释")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("模块")]),t._v(" "),a("th",[t._v("名词")]),t._v(" "),a("th",[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("DGTEST")]),t._v(" "),a("td",[t._v("Task")]),t._v(" "),a("td",[t._v("数蛙科技开发的面向工业物联网的高并发模拟压测程序，有完整的业务流程。")])]),t._v(" "),a("tr",[a("td",[t._v("DGTEST")]),t._v(" "),a("td",[t._v("Report")]),t._v(" "),a("td",[t._v("用户最终得到的word压测报告文件，包含压测的业务场景、压测过程数据与图表。")])]),t._v(" "),a("tr",[a("td",[t._v("DGTEST")]),t._v(" "),a("td",[t._v("Report Label")]),t._v(" "),a("td",[t._v("统计指标或者图标与word报告中标签关系，job_metrics 例如，job为zeta_server，metrics为CPU_max，则实际标签为zeta_server_CPU_max,通过统计标签与word文件动态映射数据")])]),t._v(" "),a("tr",[a("td",[t._v("DGTEST")]),t._v(" "),a("td",[t._v("Report templates")]),t._v(" "),a("td",[t._v("用户根据业务需求定制的word模板后,把需要动态替换的图片或者文件替换成DGTEST_LAB后形成的模板文件。")])])])]),t._v(" "),a("h2",{attrs:{id:"压测相关压测api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#压测相关压测api"}},[t._v("#")]),t._v(" 压测相关压测api")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("名称")]),t._v(" "),a("th",[t._v("地址")]),t._v(" "),a("th",[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("查询所有job")]),t._v(" "),a("td",[t._v("http://ip:9090/api/v1/targets")]),t._v(" "),a("td",[t._v("新建任务使用 对应各类exporter")])]),t._v(" "),a("tr",[a("td",[t._v("查询对应job所有统计指标")]),t._v(" "),a("td",[t._v("http://ip:9090/api/v1/targets/metadata?match_target={job=%22zeta_metrics%22}")]),t._v(" "),a("td",[t._v("新建任务后li使用")])]),t._v(" "),a("tr",[a("td",[t._v("查询所有面板")]),t._v(" "),a("td",[t._v("http://ip:3000/api/search")]),t._v(" "),a("td",[t._v("图片服务器使用")])]),t._v(" "),a("tr",[a("td",[t._v("查询统计图片")]),t._v(" "),a("td",[t._v("http://ip:3000/api/dashboards/uid/9CWBz0bik")]),t._v(" "),a("td",[t._v("与面板指标关联")])])])]),t._v(" "),a("h2",{attrs:{id:"生态api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#生态api"}},[t._v("#")]),t._v(" 生态api")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("名称")]),t._v(" "),a("th",[t._v("地址")]),t._v(" "),a("th",[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("grafana api")]),t._v(" "),a("td",[t._v("https://grafana.com/docs/")]),t._v(" "),a("td",[t._v("http://ip:3000/")])]),t._v(" "),a("tr",[a("td",[t._v("prometheus api")]),t._v(" "),a("td",[t._v("https://prometheus.io/docs/prometheus/latest/querying/api/#tsdb-admin-apis")]),t._v(" "),a("td",[t._v("http://ip:9090/graph")])]),t._v(" "),a("tr",[a("td",[t._v("word api")]),t._v(" "),a("td",[t._v("http://deepoove.com/poi-tl/#_why_poi_tl")]),t._v(" "),a("td",[t._v("http://ip:8085/report/doc.html")])])])])])}),[],!1,null,null,null);e.default=r.exports}}]);