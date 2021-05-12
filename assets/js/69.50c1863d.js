(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{715:function(t,_,v){"use strict";v.r(_);var e=v(9),d=Object(e.a)({},(function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"tdengine-介绍"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#tdengine-介绍"}},[t._v("#")]),t._v(" TDengine 介绍")]),t._v(" "),v("h2",{attrs:{id:"tdengine-简介"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#tdengine-简介"}},[t._v("#")]),t._v(" "),v("a",{staticClass:"anchor",attrs:{id:"intro"}}),t._v("TDengine 简介")]),t._v(" "),v("p",[t._v("TDengine是涛思数据面对高速增长的物联网大数据市场和技术挑战推出的创新性的大数据处理产品，它不依赖任何第三方软件，也不是优化或包装了一个开源的数据库或流式计算产品，而是在吸取众多传统关系型数据库、NoSQL数据库、流式计算引擎、消息队列等软件的优点之后自主开发的产品，在时序空间大数据处理上，有着自己独到的优势。")]),t._v(" "),v("p",[t._v("TDengine的模块之一是时序数据库。但除此之外，为减少研发的复杂度、系统维护的难度，TDengine还提供缓存、消息队列、订阅、流式计算等功能，为物联网、工业互联网大数据的处理提供全栈的技术方案，是一个高效易用的物联网大数据平台。与Hadoop等典型的大数据平台相比，它具有如下鲜明的特点：")]),t._v(" "),v("ul",[v("li",[v("strong",[t._v("10倍以上的性能提升")]),t._v("：定义了创新的数据存储结构，单核每秒能处理至少2万次请求，插入数百万个数据点，读出一千万以上数据点，比现有通用数据库快十倍以上。")]),t._v(" "),v("li",[v("strong",[t._v("硬件或云服务成本降至1/5")]),t._v("：由于超强性能，计算资源不到通用大数据方案的1/5；通过列式存储和先进的压缩算法，存储空间不到通用数据库的1/10。")]),t._v(" "),v("li",[v("strong",[t._v("全栈时序数据处理引擎")]),t._v("：将数据库、消息队列、缓存、流式计算等功能融为一体，应用无需再集成Kafka/Redis/HBase/Spark/HDFS等软件，大幅降低应用开发和维护的复杂度成本。")]),t._v(" "),v("li",[v("strong",[t._v("强大的分析功能")]),t._v("：无论是十年前还是一秒钟前的数据，指定时间范围即可查询。数据可在时间轴上或多个设备上进行聚合。即席查询可通过Shell, Python, R, Matlab随时进行。")]),t._v(" "),v("li",[v("strong",[t._v("与第三方工具无缝连接")]),t._v("：不用一行代码，即可与Telegraf, Grafana, EMQ, HiveMQ, Prometheus, Matlab, R等集成。后续将支持OPC, Hadoop, Spark等, BI工具也将无缝连接。")]),t._v(" "),v("li",[v("strong",[t._v("零运维成本、零学习成本")]),t._v("：安装集群简单快捷，无需分库分表，实时备份。类似标准SQL，支持RESTful, 支持Python/Java/C/C++/C#/Go/Node.js, 与MySQL相似，零学习成本。")])]),t._v(" "),v("p",[t._v("采用TDengine，可将典型的物联网、车联网、工业互联网大数据平台的总拥有成本大幅降低。但需要指出的是，因充分利用了物联网时序数据的特点，它无法用来处理网络爬虫、微博、微信、电商、ERP、CRM等通用型数据。")]),t._v(" "),v("p",[v("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/dataanalysis/tdengine/images/eco_system.png",alt:"eco_system.png"}}),t._v(" "),v("center",[t._v("图 1. TDengine技术生态图")])],1),t._v(" "),v("h2",{attrs:{id:"tdengine-总体适用场景"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#tdengine-总体适用场景"}},[t._v("#")]),t._v(" "),v("a",{staticClass:"anchor",attrs:{id:"scenes"}}),t._v("TDengine 总体适用场景")]),t._v(" "),v("p",[t._v("作为一个IOT大数据平台，TDengine的典型适用场景是在IOT范畴，而且用户有一定的数据量。本文后续的介绍主要针对这个范畴里面的系统。范畴之外的系统，比如CRM，ERP等，不在本文讨论范围内。")]),t._v(" "),v("h3",{attrs:{id:"数据源特点和需求"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#数据源特点和需求"}},[t._v("#")]),t._v(" 数据源特点和需求")]),t._v(" "),v("p",[t._v("从数据源角度，设计人员可以从下面几个角度分析TDengine在目标应用系统里面的适用性。")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("数据源特点和需求")]),t._v(" "),v("th",[t._v("不适用")]),t._v(" "),v("th",[t._v("可能适用")]),t._v(" "),v("th",[t._v("非常适用")]),t._v(" "),v("th",[t._v("简单说明")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("总体数据量巨大")]),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td",[t._v("√")]),t._v(" "),v("td",[t._v("TDengine在容量方面提供出色的水平扩展功能，并且具备匹配高压缩的存储结构，达到业界最优的存储效率。")])]),t._v(" "),v("tr",[v("td",[t._v("数据输入速度偶尔或者持续巨大")]),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td",[t._v("√")]),t._v(" "),v("td",[t._v("TDengine的性能大大超过同类产品，可以在同样的硬件环境下持续处理大量的输入数据，并且提供很容易在用户环境里面运行的性能评估工具。")])]),t._v(" "),v("tr",[v("td",[t._v("数据源数目巨大")]),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td",[t._v("√")]),t._v(" "),v("td",[t._v("TDengine设计中包含专门针对大量数据源的优化，包括数据的写入和查询，尤其适合高效处理海量（千万或者更多量级）的数据源。")])])])]),t._v(" "),v("h3",{attrs:{id:"系统架构要求"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#系统架构要求"}},[t._v("#")]),t._v(" 系统架构要求")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("系统架构要求")]),t._v(" "),v("th",[t._v("不适用")]),t._v(" "),v("th",[t._v("可能适用")]),t._v(" "),v("th",[t._v("非常适用")]),t._v(" "),v("th",[t._v("简单说明")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("要求简单可靠的系统架构")]),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td",[t._v("√")]),t._v(" "),v("td",[t._v("TDengine的系统架构非常简单可靠，自带消息队列，缓存，流式计算，监控等功能，无需集成额外的第三方产品。")])]),t._v(" "),v("tr",[v("td",[t._v("要求容错和高可靠")]),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td",[t._v("√")]),t._v(" "),v("td",[t._v("TDengine的集群功能，自动提供容错灾备等高可靠功能。")])]),t._v(" "),v("tr",[v("td",[t._v("标准化规范")]),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td",[t._v("√")]),t._v(" "),v("td",[t._v("TDengine使用标准的SQL语言提供主要功能，遵守标准化规范。")])])])]),t._v(" "),v("h3",{attrs:{id:"系统功能需求"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#系统功能需求"}},[t._v("#")]),t._v(" 系统功能需求")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("系统功能需求")]),t._v(" "),v("th",[t._v("不适用")]),t._v(" "),v("th",[t._v("可能适用")]),t._v(" "),v("th",[t._v("非常适用")]),t._v(" "),v("th",[t._v("简单说明")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("要求完整的内置数据处理算法")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("√")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("TDengine的实现了通用的数据处理算法，但是还没有做到妥善处理各行各业的所有要求，因此特殊类型的处理还需要应用层面处理。")])]),t._v(" "),v("tr",[v("td",[t._v("需要大量的交叉查询处理")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("√")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("这种类型的处理更多应该用关系型数据系统处理，或者应该考虑TDengine和关系型数据系统配合实现系统功能。")])])])]),t._v(" "),v("h3",{attrs:{id:"系统性能需求"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#系统性能需求"}},[t._v("#")]),t._v(" 系统性能需求")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("系统性能需求")]),t._v(" "),v("th",[t._v("不适用")]),t._v(" "),v("th",[t._v("可能适用")]),t._v(" "),v("th",[t._v("非常适用")]),t._v(" "),v("th",[t._v("简单说明")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("要求较大的总体处理能力")]),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td",[t._v("√")]),t._v(" "),v("td",[t._v("TDengine的集群功能可以轻松地让多服务器配合达成处理能力的提升。")])]),t._v(" "),v("tr",[v("td",[t._v("要求高速处理数据")]),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td",[t._v("√")]),t._v(" "),v("td",[t._v("TDengine的专门为IOT优化的存储和数据处理的设计，一般可以让系统得到超出同类产品多倍数的处理速度提升。")])]),t._v(" "),v("tr",[v("td",[t._v("要求快速处理小粒度数据")]),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td",[t._v("√")]),t._v(" "),v("td",[t._v("这方面TDengine性能可以完全对标关系型和NoSQL型数据处理系统。")])])])]),t._v(" "),v("h3",{attrs:{id:"系统维护需求"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#系统维护需求"}},[t._v("#")]),t._v(" 系统维护需求")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("系统维护需求")]),t._v(" "),v("th",[t._v("不适用")]),t._v(" "),v("th",[t._v("可能适用")]),t._v(" "),v("th",[t._v("非常适用")]),t._v(" "),v("th",[t._v("简单说明")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("要求系统可靠运行")]),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td",[t._v("√")]),t._v(" "),v("td",[t._v("TDengine的系统架构非常稳定可靠，日常维护也简单便捷，对维护人员的要求简洁明了，最大程度上杜绝人为错误和事故。")])]),t._v(" "),v("tr",[v("td",[t._v("要求运维学习成本可控")]),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td",[t._v("√")]),t._v(" "),v("td",[t._v("同上。")])]),t._v(" "),v("tr",[v("td",[t._v("要求市场有大量人才储备")]),t._v(" "),v("td",[t._v("√")]),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td",[t._v("TDengine作为新一代产品，目前人才市场里面有经验的人员还有限。但是学习成本低，我们作为厂家也提供运维的培训和辅助服务。")])])])])])}),[],!1,null,null,null);_.default=d.exports}}]);