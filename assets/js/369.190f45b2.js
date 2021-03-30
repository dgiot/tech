(window.webpackJsonp=window.webpackJsonp||[]).push([[369],{546:function(t,a,e){"use strict";e.r(a);var s=e(42),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"整体流程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#整体流程"}},[t._v("#")]),t._v(" 整体流程")]),t._v(" "),e("p",[e("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/product/dgtest/zeta_test.png",alt:"zeta_test.png"}})]),t._v(" "),e("p",[t._v("如上图，四个exporter自身会产生类似于发包数的统计值metrics。然后task_work这个任务以时间顺序将统计值暴露。promethues以一定的时间间隔去读取该统计值，存储为时序数据。Grafana从promethues得到job和metrics数据，并分别以仪表盘(dashboard)与面板(penel)的形式展示。生成报告时，report系统从grafana中以“Job_Legend”和“Job_Panel”形式将值提取出来，形成特定格式的json文件，模板传参分别替换报告模板中的指定文本和图片占位符，生成报告。")]),t._v(" "),e("h2",{attrs:{id:"_1-在prometheus内添加job"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-在prometheus内添加job"}},[t._v("#")]),t._v(" 1. 在Prometheus内添加job")]),t._v(" "),e("p",[t._v("添加新的job")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v(" cd /data/prometheus-2.9.2.linux-amd64/\n  vim prometheus.yml\n")])])]),e("p",[t._v("按i键进入编辑模式，增加一个job,例如ry-worker2")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("- job_name: 'ry-worker2'\n    static_configs:\n    - targets: ['14.14.19.132:9100']\n")])])]),e("p",[t._v("修改好之后，按ecs键退出编辑模式，输入wq!保存退出,注意")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("ps aux|grep prometheus\nroot     14505  0.2  1.2 728164 99764 ?        Sl   Mar16  28:33 ./prometheus\nroot     16256  0.0  0.0 112812   976 pts/0    S+   18:50   0:00 grep --color=auto prometheus\nkill -9  14505\nnohup ./prometheus &\n")])])]),e("h2",{attrs:{id:"_2-在grafana添加数据源"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-在grafana添加数据源"}},[t._v("#")]),t._v(" 2. 在grafana添加数据源")]),t._v(" "),e("p",[e("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/product/dgtest/data_sources.png",alt:"data_sources.png"}})]),t._v(" "),e("p",[t._v("在grafana首页，点击设置图标，再点击Data Sources进入数据源设置界面。我们可以添加选择所需要的数据源，数据源本质是ip和端口值。")]),t._v(" "),e("h2",{attrs:{id:"_3-查看该数据源下的job和metrics"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-查看该数据源下的job和metrics"}},[t._v("#")]),t._v(" 3. 查看该数据源下的job和metrics")]),t._v(" "),e("p",[e("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/product/dgtest/promethues_targets.png",alt:"promethues_targets.png"}})]),t._v(" "),e("p",[t._v("将grafana的端口值改为9090，即可进入promethues界面。点击targets，我们可以看到我们第一步添加成功的job。注意job和Instance值是一一对应的，但job值不会改变，而instance会随着服务器的改变而改变，故我们以job为标签。点击instance对应的ip加端口，得到下面的页面，我们可以看到该job下metrics的查询语句以及值。")]),t._v(" "),e("p",[e("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/product/dgtest/job_metrics.png",alt:"job_metrics.png"}})]),t._v(" "),e("h2",{attrs:{id:"_4-在grafana添加panel"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-在grafana添加panel"}},[t._v("#")]),t._v(" 4. 在grafana添加Panel")]),t._v(" "),e("p",[e("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/product/dgtest/uid.png",alt:"uid.png"}})]),t._v(" "),e("h3",{attrs:{id:"_4-1-增删查改面板"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-增删查改面板"}},[t._v("#")]),t._v(" 4.1 增删查改面板")]),t._v(" "),e("p",[t._v("grafana里面添加或者减少metrics，需要通过面板（panel）的增删查改来实现。点击页面上方的Add panel即可添加新的面板。一个面板对应一个或者几个有一定联系的metrics。我们在第三步已经得到了job和metrics，接下来通过panel来添加该job下对应的metrics。")]),t._v(" "),e("p",[e("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/product/dgtest/panel.png",alt:"panel.png"}})]),t._v(" "),e("p",[t._v("也可以通过复制粘贴已有的面板，来获得新的面板。如下图，鼠标放置在标题(Panel Title)区域，点击向下的箭头，再在more选项里选择copy即可复制已有面板。")]),t._v(" "),e("p",[e("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/product/dgtest/panel_example.png",alt:"panel_example.png"}})]),t._v(" "),e("p",[t._v("创建新的面板后，便是修改其配置了。通过点击上图的Edit按钮，进入面板编辑页面。")]),t._v(" "),e("p",[e("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/product/dgtest/panel_edit.png",alt:"panel_edit.png"}})]),t._v(" "),e("p",[t._v("面板一般有三个参数需要设置:")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("参数")]),t._v(" "),e("th",[t._v("含义")]),t._v(" "),e("th",[t._v("举例")]),t._v(" "),e("th",[t._v("备注")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("Panel Title")]),t._v(" "),e("td",[t._v("面板标题")]),t._v(" "),e("td",[t._v("Memory_information")]),t._v(" "),e("td",[t._v("英语，单词间用下划线连接")])]),t._v(" "),e("tr",[e("td",[t._v("Metrics")]),t._v(" "),e("td",[t._v("指标")]),t._v(" "),e("td",[t._v('node_memory_MemTotal_bytes{instance=~"$node"}')]),t._v(" "),e("td",[t._v("在第3步中得到")])]),t._v(" "),e("tr",[e("td",[t._v("Legend")]),t._v(" "),e("td",[t._v("指标名")]),t._v(" "),e("td",[t._v("Total memory")]),t._v(" "),e("td")])])]),t._v(" "),e("p",[t._v("与面板相似，Query板块也可以进行增删改查，划到Query板块最下方区域，点击加号即可增加新的指标。\n注意：以上设置在修改后，要点击保存，以免丢失进度！")]),t._v(" "),e("h3",{attrs:{id:"_4-2-对metrics进行计算"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-对metrics进行计算"}},[t._v("#")]),t._v(" 4.2 对metrics进行计算")]),t._v(" "),e("p",[t._v("有时候我们不仅仅需要系统已有的metrics值，还需要对其进行一定的计算，比如取整或保留2位有效小数。我们可以在Query板块增加一个新的指标栏。在metrics对应的空，按规则写入查询语句。在legeng对应的空给其取名。")]),t._v(" "),e("p",[t._v("举例：")]),t._v(" "),e("p",[t._v("以下是runtime的meteics语句，用以表示运行时长，单位是秒。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v('```\n avg(time() - node_boot_time_seconds{instance=~"$node"})\n```\n')])])]),e("p",[t._v("但我们想要以天为单位，这个时候就需要对其进行计算。我们另取名runtime1表示以天为单位的运行时长。注意，后面生成报告取值时，要选择runtime1,而不是runtime。runtime1的metrics语句如下：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v(' round(avg(time() - node_boot_time_seconds{instance=~"$node"})/24/60/60, 0.01)\n')])])]),e("h3",{attrs:{id:"_4-3-grafana各参数内部关系"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-grafana各参数内部关系"}},[t._v("#")]),t._v(" 4.3 grafana各参数内部关系")]),t._v(" "),e("p",[t._v("grafana重要的几个概念是：job,panel和metrics,legend。通过上述操作流程，我们其实可以看出，一个job通过增删查改拥有多个panel，一个panel通过增删查改拥有多个metrics，一个metrics对应一个legend。但是，每一个job里面的panel不能重复，每一个panel里面的metrics不能重复。即参数命名方式“JOB_Legend”是唯一确定的变量。如“master_memory_min”表示的是master服务器的memory_min这个变量，不会产生歧义。")]),t._v(" "),e("h2",{attrs:{id:"_5-在压测平台中修改报告配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-在压测平台中修改报告配置"}},[t._v("#")]),t._v(" 5. 在压测平台中修改报告配置")]),t._v(" "),e("p",[t._v("在网站首页，点击任务报告，进入报告配置界面。")]),t._v(" "),e("p",[e("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/product/dgtest/web_workbench.png",alt:"web_workbench.png"}})]),t._v(" "),e("p",[t._v("点击报告配置，进入配置信息页面，有新增、扫描和保存配置按钮。")]),t._v(" "),e("p",[t._v("新增按钮可以添加grafana不包含的配置信息，如说明性信息。")]),t._v(" "),e("p",[e("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/product/dgtest/web_increase.png",alt:"web_increase.png"}})]),t._v(" "),e("p",[t._v("扫描按钮可以获得grafana里面包含的所有配置信息。如下图，uid选择不同的仪表盘；job是选择服务器；而搜索框可以输入查询条件，提高查询速度与精度。我们添加配置时，要先确定我们需要的数据是哪个仪表盘的，通过uid选择确定。然后，确定这一份报告需要用哪几个服务器的数据。注意，一份报告的数据可能会对应多个服务器。在job里选择需要的服务器，即可得到该仪表盘、该服务器下的所有配置信息。点击命名方式为“JOB_Legend”的配置信息，可以同时添加多个，点添加按钮即可添加成功。接下来，通过job选择需要的其他服务器，反复上述操作，直到所需配置信息全部配置成功。最后，点击添加按钮。")]),t._v(" "),e("p",[e("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/product/dgtest/scan.png",alt:"scan.png"}})])])}),[],!1,null,null,null);a.default=r.exports}}]);