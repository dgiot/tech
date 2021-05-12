(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{555:function(t,e,r){"use strict";r.r(e);var a=r(9),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"tdengine文档"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#tdengine文档"}},[t._v("#")]),t._v(" TDengine文档")]),t._v(" "),r("p",[t._v("TDengine是一个高效的存储、查询、分析时序大数据的平台，专为物联网、车联网、工业互联网、运维监测等优化而设计。您可以像使用关系型数据库MySQL一样来使用它，但建议您在使用前仔细阅读一遍下面的文档，特别是 "),r("a",{attrs:{href:"/architecture"}},[t._v("数据模型")]),t._v(" 与 "),r("a",{attrs:{href:"/model"}},[t._v("数据建模")]),t._v("。除本文档之外，欢迎 "),r("a",{attrs:{href:"https://www.taosdata.com/downloads/TDengine%20White%20Paper.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("下载产品白皮书"),r("OutboundLink")],1),t._v("。如需查阅TDengine 1.6 文档，请点击 "),r("a",{attrs:{href:"https://www.taosdata.com/cn/documentation16/",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里"),r("OutboundLink")],1),t._v(" 访问。")]),t._v(" "),r("h2",{attrs:{id:"tdengine介绍"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#tdengine介绍"}},[t._v("#")]),t._v(" "),r("a",{attrs:{href:"/evaluation"}},[t._v("TDengine介绍")])]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"/evaluation#intro"}},[t._v("TDengine 简介及特色")])]),t._v(" "),r("li",[r("a",{attrs:{href:"/evaluation#scenes"}},[t._v("TDengine 适用场景")])]),t._v(" "),r("li",[r("a",{attrs:{href:"/evaluation#"}},[t._v("TDengine 性能指标介绍和验证方法")])])]),t._v(" "),r("h2",{attrs:{id:"立即开始"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#立即开始"}},[t._v("#")]),t._v(" "),r("a",{attrs:{href:"/getting-started"}},[t._v("立即开始")])]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"/getting-started#install"}},[t._v("快捷安装")]),t._v("：可通过源码、安装包或docker安装，三秒钟搞定")]),t._v(" "),r("li",[r("a",{attrs:{href:"/getting-started#start"}},[t._v("轻松启动")]),t._v("：使用systemctl 启停TDengine")]),t._v(" "),r("li",[r("a",{attrs:{href:"/getting-started#console"}},[t._v("命令行程序TAOS")]),t._v("：访问TDengine的简便方式")]),t._v(" "),r("li",[r("a",{attrs:{href:"/getting-started#demo"}},[t._v("极速体验")]),t._v("：运行示例程序，快速体验高效的数据插入、查询")]),t._v(" "),r("li",[r("a",{attrs:{href:"/getting-started#platforms"}},[t._v("支持平台列表")]),t._v("：TDengine服务器和客户端支持的平台列表")])]),t._v(" "),r("h2",{attrs:{id:"整体架构"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#整体架构"}},[t._v("#")]),t._v(" "),r("a",{attrs:{href:"/architecture"}},[t._v("整体架构")])]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"/architecture#model"}},[t._v("数据模型")]),t._v("：关系型数据库模型，但要求每个采集点单独建表")]),t._v(" "),r("li",[r("a",{attrs:{href:"/architecture#cluster"}},[t._v("集群与基本逻辑单元")]),t._v("：吸取NoSQL优点，支持水平扩展，支持高可靠")]),t._v(" "),r("li",[r("a",{attrs:{href:"/architecture#sharding"}},[t._v("存储模型与数据分区、分片")]),t._v("：标签数据与时序数据完全分离，按vnode和时间两个维度对数据切分")]),t._v(" "),r("li",[r("a",{attrs:{href:"/architecture#replication"}},[t._v("数据写入与复制流程")]),t._v("：先写入WAL、之后写入缓存，再给应用确认，支持多副本")]),t._v(" "),r("li",[r("a",{attrs:{href:"/architecture#persistence"}},[t._v("缓存与持久化")]),t._v("：最新数据缓存在内存中，但落盘时采用列式存储、超高压缩比")]),t._v(" "),r("li",[r("a",{attrs:{href:"/architecture#query"}},[t._v("数据查询")]),t._v("：支持各种函数、时间轴聚合、插值、多表聚合")])]),t._v(" "),r("h2",{attrs:{id:"数据建模"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#数据建模"}},[t._v("#")]),t._v(" "),r("a",{attrs:{href:"/model"}},[t._v("数据建模")])]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"/model#create-db"}},[t._v("创建库")]),t._v("：为具有相似数据特征的数据采集点创建一个库")]),t._v(" "),r("li",[r("a",{attrs:{href:"/model#create-stable"}},[t._v("创建超级表")]),t._v("：为同一类型的数据采集点创建一个超级表")]),t._v(" "),r("li",[r("a",{attrs:{href:"/model#create-table"}},[t._v("创建表")]),t._v("：使用超级表做模板，为每一个具体的数据采集点单独建表")])]),t._v(" "),r("h2",{attrs:{id:"高效写入数据"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#高效写入数据"}},[t._v("#")]),t._v(" "),r("a",{attrs:{href:"/insert"}},[t._v("高效写入数据")])]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"/insert#sql"}},[t._v("SQL写入")]),t._v("：使用SQL insert命令向一张或多张表写入单条或多条记录")]),t._v(" "),r("li",[r("a",{attrs:{href:"/insert#prometheus"}},[t._v("Prometheus写入")]),t._v("：配置Prometheus, 不用任何代码，将数据直接写入")]),t._v(" "),r("li",[r("a",{attrs:{href:"/insert#telegraf"}},[t._v("Telegraf写入")]),t._v("：配置Telegraf, 不用任何代码，将采集数据直接写入")]),t._v(" "),r("li",[r("a",{attrs:{href:"/insert#emq"}},[t._v("EMQ X Broker")]),t._v("：配置EMQ X，不用任何代码，就可将MQTT数据直接写入")]),t._v(" "),r("li",[r("a",{attrs:{href:"/insert#hivemq"}},[t._v("HiveMQ Broker")]),t._v("：配置HiveMQ，不用任何代码，就可将MQTT数据直接写入")])]),t._v(" "),r("h2",{attrs:{id:"高效查询数据"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#高效查询数据"}},[t._v("#")]),t._v(" "),r("a",{attrs:{href:"/queries"}},[t._v("高效查询数据")])]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"/queries#queries"}},[t._v("主要查询功能")]),t._v("：支持各种标准函数，设置过滤条件，时间段查询")]),t._v(" "),r("li",[r("a",{attrs:{href:"/queries#aggregation"}},[t._v("多表聚合查询")]),t._v("：使用超级表，设置标签过滤条件，进行高效聚合查询")]),t._v(" "),r("li",[r("a",{attrs:{href:"/queries#sampling"}},[t._v("降采样查询值")]),t._v("：按时间段分段聚合，支持插值")])]),t._v(" "),r("h2",{attrs:{id:"高级功能"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#高级功能"}},[t._v("#")]),t._v(" "),r("a",{attrs:{href:"/advanced-features"}},[t._v("高级功能")])]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"/advanced-features#continuous-query"}},[t._v("连续查询(Continuous Query)")]),t._v("：基于滑动窗口，定时自动的对数据流进行查询计算")]),t._v(" "),r("li",[r("a",{attrs:{href:"/advanced-features#subscribe"}},[t._v("数据订阅(Publisher/Subscriber)")]),t._v("：象典型的消息队列，应用可订阅接收到的最新数据")]),t._v(" "),r("li",[r("a",{attrs:{href:"/advanced-features#cache"}},[t._v("缓存(Cache)")]),t._v("：每个设备最新的数据都会缓存在内存中，可快速获取")]),t._v(" "),r("li",[r("a",{attrs:{href:"/advanced-features#alert"}},[t._v("报警监测")]),t._v("：根据配置规则，自动监测超限行为数据，并主动推送")])]),t._v(" "),r("h2",{attrs:{id:"连接器"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#连接器"}},[t._v("#")]),t._v(" "),r("a",{attrs:{href:"/connector"}},[t._v("连接器")])]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"/connector#c-cpp"}},[t._v("C/C++ Connector")]),t._v("：通过libtaos客户端的库，连接TDengine服务器的主要方法")]),t._v(" "),r("li",[r("a",{attrs:{href:"/connector/java"}},[t._v("Java Connector(JDBC)")]),t._v("：通过标准的JDBC API，给Java应用提供到TDengine的连接")]),t._v(" "),r("li",[r("a",{attrs:{href:"/connector#python"}},[t._v("Python Connector")]),t._v("：给Python应用提供一个连接TDengine服务器的驱动")]),t._v(" "),r("li",[r("a",{attrs:{href:"/connector#restful"}},[t._v("RESTful Connector")]),t._v("：提供一最简单的连接TDengine服务器的方式")]),t._v(" "),r("li",[r("a",{attrs:{href:"/connector#go"}},[t._v("Go Connector")]),t._v("：给Go应用提供一个连接TDengine服务器的驱动")]),t._v(" "),r("li",[r("a",{attrs:{href:"/connector#nodejs"}},[t._v("Node.js Connector")]),t._v("：给node应用提供一个连接TDengine服务器的驱动")]),t._v(" "),r("li",[r("a",{attrs:{href:"/connector#csharp"}},[t._v("C# Connector")]),t._v("：给C#应用提供一个连接TDengine服务器的驱动")]),t._v(" "),r("li",[r("a",{attrs:{href:"https://www.taosdata.com/blog/2019/07/26/514.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Windows客户端"),r("OutboundLink")],1),t._v("：自行编译windows客户端，Windows环境的各种连接器都需要它")])]),t._v(" "),r("h2",{attrs:{id:"与其他工具的连接"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#与其他工具的连接"}},[t._v("#")]),t._v(" "),r("a",{attrs:{href:"/connections"}},[t._v("与其他工具的连接")])]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"/connections#grafana"}},[t._v("Grafana")]),t._v("：获取并可视化保存在TDengine的数据")]),t._v(" "),r("li",[r("a",{attrs:{href:"/connections#matlab"}},[t._v("Matlab")]),t._v("：通过配置Matlab的JDBC数据源访问保存在TDengine的数据")]),t._v(" "),r("li",[r("a",{attrs:{href:"/connections#r"}},[t._v("R")]),t._v("：通过配置R的JDBC数据源访问保存在TDengine的数据")]),t._v(" "),r("li",[r("a",{attrs:{href:"https://www.taosdata.com/blog/2020/08/27/1767.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("IDEA Database"),r("OutboundLink")],1),t._v("：通过IDEA 数据库管理工具可视化使用 TDengine")])]),t._v(" "),r("h2",{attrs:{id:"tdengine集群的安装、管理"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#tdengine集群的安装、管理"}},[t._v("#")]),t._v(" "),r("a",{attrs:{href:"/cluster"}},[t._v("TDengine集群的安装、管理")])]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"/cluster#prepare"}},[t._v("准备工作")]),t._v("：部署环境前的几点注意事项")]),t._v(" "),r("li",[r("a",{attrs:{href:"/cluster#node-one"}},[t._v("创建第一个节点")]),t._v("：与快捷安装完全一样，非常简单")]),t._v(" "),r("li",[r("a",{attrs:{href:"/cluster#node-other"}},[t._v("创建后续节点")]),t._v("：配置新节点的taos.cfg, 在现有集群添加新的节点")]),t._v(" "),r("li",[r("a",{attrs:{href:"/cluster#management"}},[t._v("节点管理")]),t._v("：增加、删除、查看集群的节点")]),t._v(" "),r("li",[r("a",{attrs:{href:"/cluster#high-availability"}},[t._v("Vnode 的高可用性")]),t._v("：通过多副本的机制来提供 Vnode 的高可用性")]),t._v(" "),r("li",[r("a",{attrs:{href:"/cluster#mnode"}},[t._v("Mnode 的管理")]),t._v("：系统自动创建、无需任何人工干预")]),t._v(" "),r("li",[r("a",{attrs:{href:"/cluster#load-balancing"}},[t._v("负载均衡")]),t._v("：一旦节点个数或负载有变化，自动进行")]),t._v(" "),r("li",[r("a",{attrs:{href:"/cluster#offline"}},[t._v("节点离线处理")]),t._v("：节点离线超过一定时长，将从集群中剔除")]),t._v(" "),r("li",[r("a",{attrs:{href:"/cluster#arbitrator"}},[t._v("Arbitrator")]),t._v("：对于偶数个副本的情形，使用它可以防止split brain")])]),t._v(" "),r("h2",{attrs:{id:"tdengine的运营和维护"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#tdengine的运营和维护"}},[t._v("#")]),t._v(" "),r("a",{attrs:{href:"/administrator"}},[t._v("TDengine的运营和维护")])]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"/administrator#planning"}},[t._v("容量规划")]),t._v("：根据场景，估算硬件资源")]),t._v(" "),r("li",[r("a",{attrs:{href:"/administrator#tolerance"}},[t._v("容错和灾备")]),t._v("：设置正确的WAL和数据副本数")]),t._v(" "),r("li",[r("a",{attrs:{href:"/administrator#config"}},[t._v("系统配置")]),t._v("：端口，缓存大小，文件块大小和其他系统配置")]),t._v(" "),r("li",[r("a",{attrs:{href:"/administrator#user"}},[t._v("用户管理")]),t._v("：添加、删除TDengine用户，修改用户密码")]),t._v(" "),r("li",[r("a",{attrs:{href:"/administrator#import"}},[t._v("数据导入")]),t._v("：可按脚本文件导入，也可按数据文件导入")]),t._v(" "),r("li",[r("a",{attrs:{href:"/administrator#export"}},[t._v("数据导出")]),t._v("：从shell按表导出，也可用taosdump工具做各种导出")]),t._v(" "),r("li",[r("a",{attrs:{href:"/administrator#status"}},[t._v("系统监控")]),t._v("：检查系统现有的连接、查询、流式计算，日志和事件等")]),t._v(" "),r("li",[r("a",{attrs:{href:"/administrator#directories"}},[t._v("文件目录结构")]),t._v("：TDengine数据文件、配置文件等所在目录")]),t._v(" "),r("li",[r("a",{attrs:{href:"/administrator#keywords"}},[t._v("参数限制与保留关键字")]),t._v("：TDengine的参数限制与保留关键字列表")])]),t._v(" "),r("h2",{attrs:{id:"taos-sql"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#taos-sql"}},[t._v("#")]),t._v(" "),r("a",{attrs:{href:"/taos-sql"}},[t._v("TAOS SQL")])]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"/taos-sql#data-type"}},[t._v("支持的数据类型")]),t._v("：支持时间戳、整型、浮点型、布尔型、字符型等多种数据类型")]),t._v(" "),r("li",[r("a",{attrs:{href:"/taos-sql#management"}},[t._v("数据库管理")]),t._v("：添加、删除、查看数据库")]),t._v(" "),r("li",[r("a",{attrs:{href:"/taos-sql#table"}},[t._v("表管理")]),t._v("：添加、删除、查看、修改表")]),t._v(" "),r("li",[r("a",{attrs:{href:"/taos-sql#super-table"}},[t._v("超级表管理")]),t._v("：添加、删除、查看、修改超级表")]),t._v(" "),r("li",[r("a",{attrs:{href:"/taos-sql#tags"}},[t._v("标签管理")]),t._v("：增加、删除、修改标签")]),t._v(" "),r("li",[r("a",{attrs:{href:"/taos-sql#insert"}},[t._v("数据写入")]),t._v("：支持单表单条、多条、多表多条写入，支持历史数据写入")]),t._v(" "),r("li",[r("a",{attrs:{href:"/taos-sql#select"}},[t._v("数据查询")]),t._v("：支持时间段、值过滤、排序、查询结果手动分页等")]),t._v(" "),r("li",[r("a",{attrs:{href:"/taos-sql#functions"}},[t._v("SQL函数")]),t._v("：支持各种聚合函数、选择函数、计算函数，如avg, min, diff等")]),t._v(" "),r("li",[r("a",{attrs:{href:"/taos-sql#aggregation"}},[t._v("时间维度聚合")]),t._v("：将表中数据按照时间段进行切割后聚合，降维处理")]),t._v(" "),r("li",[r("a",{attrs:{href:"/taos-sql#limitation"}},[t._v("边界限制")]),t._v("：库、表、SQL等边界限制条件")]),t._v(" "),r("li",[r("a",{attrs:{href:"/taos-sql/error-code"}},[t._v("错误码")]),t._v("：TDengine 2.0 错误码以及对应的十进制码")])]),t._v(" "),r("h2",{attrs:{id:"tdengine的技术设计"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#tdengine的技术设计"}},[t._v("#")]),t._v(" TDengine的技术设计")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"/architecture/taosd"}},[t._v("系统模块")]),t._v("：taosd的功能和模块划分")]),t._v(" "),r("li",[r("a",{attrs:{href:"/architecture/replica"}},[t._v("数据复制")]),t._v("：支持实时同步、异步复制，保证系统的High Availibility")]),t._v(" "),r("li",[r("a",{attrs:{href:"https://www.taosdata.com/cn/blog/?categories=3",target:"_blank",rel:"noopener noreferrer"}},[t._v("技术博客"),r("OutboundLink")],1),t._v("：更多的技术分析和架构设计文章")])]),t._v(" "),r("h2",{attrs:{id:"常用工具"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#常用工具"}},[t._v("#")]),t._v(" 常用工具")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://www.taosdata.com/blog/2020/01/18/1166.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("TDengine样例导入工具"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://www.taosdata.com/blog/2020/01/18/1166.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("TDengine性能对比测试工具"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://www.taosdata.com/blog/2020/08/27/1767.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("IDEA数据库管理工具可视化使用TDengine"),r("OutboundLink")],1)])]),t._v(" "),r("h2",{attrs:{id:"tdengine与其他数据库的对比测试"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#tdengine与其他数据库的对比测试"}},[t._v("#")]),t._v(" TDengine与其他数据库的对比测试")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://www.taosdata.com/blog/2020/01/13/1105.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("用InfluxDB开源的性能测试工具对比InfluxDB和TDengine"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://www.taosdata.com/blog/2019/08/21/621.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("TDengine与OpenTSDB对比测试"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://www.taosdata.com/blog/2019/08/14/573.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("TDengine与Cassandra对比测试"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://www.taosdata.com/blog/2019/07/19/419.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("TDengine与InfluxDB对比测试"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://www.taosdata.com/downloads/TDengine_Testing_Report_cn.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("TDengine与InfluxDB、OpenTSDB、Cassandra、MySQL、ClickHouse等数据库的对比测试报告"),r("OutboundLink")],1)])]),t._v(" "),r("h2",{attrs:{id:"物联网大数据"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#物联网大数据"}},[t._v("#")]),t._v(" 物联网大数据")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://www.taosdata.com/blog/2019/07/09/105.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("物联网、工业互联网大数据的特点"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://www.taosdata.com/blog/2019/07/29/542.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("物联网大数据平台应具备的功能和特点"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://www.taosdata.com/blog/2019/07/09/107.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("通用大数据架构为什么不适合处理物联网数据？"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://www.taosdata.com/blog/2019/07/09/109.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("物联网、车联网、工业互联网大数据平台，为什么推荐使用TDengine？"),r("OutboundLink")],1)])]),t._v(" "),r("h2",{attrs:{id:"培训和faq"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#培训和faq"}},[t._v("#")]),t._v(" 培训和FAQ")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"/faq"}},[t._v("FAQ：常见问题与答案")])]),t._v(" "),r("li",[r("a",{attrs:{href:"https://www.taosdata.com/blog/2020/12/25/2126.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("技术公开课：开源、高效的物联网大数据平台，TDengine内核技术剖析"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://www.taosdata.com/blog/2020/11/11/1941.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("TDengine视频教程-快速上手"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://www.taosdata.com/blog/2020/11/11/1945.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("TDengine视频教程-数据建模"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://www.taosdata.com/blog/2020/11/11/1961.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("TDengine视频教程-集群搭建"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://www.taosdata.com/blog/2020/11/11/1951.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("TDengine视频教程-Go Connector"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://www.taosdata.com/blog/2020/11/11/1955.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("TDengine视频教程-JDBC Connector"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://www.taosdata.com/blog/2020/11/11/1957.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("TDengine视频教程-NodeJS Connector"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://www.taosdata.com/blog/2020/11/11/1963.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("TDengine视频教程-Python Connector"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://www.taosdata.com/blog/2020/11/11/1965.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("TDengine视频教程-RESTful Connector"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://www.taosdata.com/blog/2020/11/11/1959.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("TDengine视频教程-“零”代码运维监控"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://www.taosdata.com/cn/blog/?categories=4",target:"_blank",rel:"noopener noreferrer"}},[t._v("应用案例：一些使用实例来解释如何使用TDengine"),r("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=n.exports}}]);