---
icon: creative
category: 操作指南
---

# 整体流程

![zeta_test.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/product/dgtest/zeta_test.png)

如上图，四个exporter自身会产生类似于发包数的统计值metrics。然后task_work这个任务以时间顺序将统计值暴露。promethues以一定的时间间隔去读取该统计值，存储为时序数据。Grafana从promethues得到job和metrics数据，并分别以仪表盘(dashboard)与面板(penel)的形式展示。生成报告时，report系统从grafana中以“Job_Legend”和“Job_Panel”形式将值提取出来，形成特定格式的json文件，模板传参分别替换报告模板中的指定文本和图片占位符，生成报告。

## 1. 在Prometheus内添加job
  
  添加新的job
  ```
   cd /data/prometheus-2.9.2.linux-amd64/
    vim prometheus.yml
  ```
  按i键进入编辑模式，增加一个job,例如ry-worker2
  
  ```
  - job_name: 'ry-worker2'
      static_configs:
      - targets: ['14.14.19.132:9100']
  ```
  修改好之后，按ecs键退出编辑模式，输入wq!保存退出,注意
  
  ```
  ps aux|grep prometheus
  root     14505  0.2  1.2 728164 99764 ?        Sl   Mar16  28:33 ./prometheus
  root     16256  0.0  0.0 112812   976 pts/0    S+   18:50   0:00 grep --color=auto prometheus
  kill -9  14505
  nohup ./prometheus &
  ```  
## 2. 在grafana添加数据源

![data_sources.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/product/dgtest/data_sources.png)

在grafana首页，点击设置图标，再点击Data Sources进入数据源设置界面。我们可以添加选择所需要的数据源，数据源本质是ip和端口值。

## 3. 查看该数据源下的job和metrics

![promethues_targets.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/product/dgtest/promethues_targets.png)

将grafana的端口值改为9090，即可进入promethues界面。点击targets，我们可以看到我们第一步添加成功的job。注意job和Instance值是一一对应的，但job值不会改变，而instance会随着服务器的改变而改变，故我们以job为标签。点击instance对应的ip加端口，得到下面的页面，我们可以看到该job下metrics的查询语句以及值。

![job_metrics.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/product/dgtest/job_metrics.png)

## 4. 在grafana添加Panel

   ![uid.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/product/dgtest/uid.png)
  
  ### 4.1 增删查改面板

   grafana里面添加或者减少metrics，需要通过面板（panel）的增删查改来实现。点击页面上方的Add panel即可添加新的面板。一个面板对应一个或者几个有一定联系的metrics。我们在第三步已经得到了job和metrics，接下来通过panel来添加该job下对应的metrics。
   
   ![panel.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/product/dgtest/panel.png)
   
   也可以通过复制粘贴已有的面板，来获得新的面板。如下图，鼠标放置在标题(Panel Title)区域，点击向下的箭头，再在more选项里选择copy即可复制已有面板。
   
   ![panel_example.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/product/dgtest/panel_example.png)
   
   创建新的面板后，便是修改其配置了。通过点击上图的Edit按钮，进入面板编辑页面。
   
   ![panel_edit.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/product/dgtest/panel_edit.png)
   
   面板一般有三个参数需要设置:

   | 参数 | 含义 | 举例 |备注|
   | ------------ | ------------ |------------ |------------ |
   |Panel Title|面板标题|Memory_information|英语，单词间用下划线连接|
   |Metrics|指标|node_memory_MemTotal_bytes{instance=~"$node"}|在第3步中得到|
   |Legend|指标名|Total memory|
   与面板相似，Query板块也可以进行增删改查，划到Query板块最下方区域，点击加号即可增加新的指标。
   注意：以上设置在修改后，要点击保存，以免丢失进度！
   
  ### 4.2 对metrics进行计算
  
  有时候我们不仅仅需要系统已有的metrics值，还需要对其进行一定的计算，比如取整或保留2位有效小数。我们可以在Query板块增加一个新的指标栏。在metrics对应的空，按规则写入查询语句。在legeng对应的空给其取名。
  
  举例：
  
  以下是runtime的meteics语句，用以表示运行时长，单位是秒。
  
    ```
     avg(time() - node_boot_time_seconds{instance=~"$node"})
    ```
   但我们想要以天为单位，这个时候就需要对其进行计算。我们另取名runtime1表示以天为单位的运行时长。注意，后面生成报告取值时，要选择runtime1,而不是runtime。runtime1的metrics语句如下：
   
   ```
    round(avg(time() - node_boot_time_seconds{instance=~"$node"})/24/60/60, 0.01)
   ```
  
  ### 4.3 grafana各参数内部关系 
 
   grafana重要的几个概念是：job,panel和metrics,legend。通过上述操作流程，我们其实可以看出，一个job通过增删查改拥有多个panel，一个panel通过增删查改拥有多个metrics，一个metrics对应一个legend。但是，每一个job里面的panel不能重复，每一个panel里面的metrics不能重复。即参数命名方式“JOB_Legend”是唯一确定的变量。如“master_memory_min”表示的是master服务器的memory_min这个变量，不会产生歧义。
   
   ## 5. 在压测平台中修改报告配置
   
   在网站首页，点击任务报告，进入报告配置界面。
   
   ![web_workbench.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/product/dgtest/web_workbench.png)
   
   点击报告配置，进入配置信息页面，有新增、扫描和保存配置按钮。
   
   新增按钮可以添加grafana不包含的配置信息，如说明性信息。
   
   ![web_increase.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/product/dgtest/web_increase.png)
   
   扫描按钮可以获得grafana里面包含的所有配置信息。如下图，uid选择不同的仪表盘；job是选择服务器；而搜索框可以输入查询条件，提高查询速度与精度。我们添加配置时，要先确定我们需要的数据是哪个仪表盘的，通过uid选择确定。然后，确定这一份报告需要用哪几个服务器的数据。注意，一份报告的数据可能会对应多个服务器。在job里选择需要的服务器，即可得到该仪表盘、该服务器下的所有配置信息。点击命名方式为“JOB_Legend”的配置信息，可以同时添加多个，点添加按钮即可添加成功。接下来，通过job选择需要的其他服务器，反复上述操作，直到所需配置信息全部配置成功。最后，点击添加按钮。
   
   ![scan.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/product/dgtest/scan.png)