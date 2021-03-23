---
icon: creative
category: 操作指南
---

# 整体流程

![zeta_test.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/product/dgtest/zeta_test.png)

## 1. 在Prometheus内添加job

  如上图，grafana主页包含了服务器名，CPU占有率等各种指标，接下来是如何得到上面这种配置的步骤。
  +  添加新的job
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


## 2. 在grafana添加Panel

![908e41fe-0a2f-0539-55b0-bbd295b7f989.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/product/dgtest/908e41fe-0a2f-0539-55b0-bbd295b7f989.png)
  
  +  增删查改面板

   grafana里面添加或者减少指标，需要通过面板（panel）的增删查改来实现。点击页面上方的Add panel即可添加新的面板。一个面板对应一个或者几个有一定联系的指标。
   
   ![4cf0e293-5461-d67b-c676-62d2a72f9fa8.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/product/dgtest/4cf0e293-5461-d67b-c676-62d2a72f9fa8.png)
   
   也可以通过复制粘贴已有的面板，来获得新的面板。如下图，鼠标放置在标题(Panel Title)区域，点击向下的箭头，再在more选项里选择copy即可复制已有面板。
   ![8d65805b-c3d1-0994-24d2-494913690b05.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/product/dgtest/8d65805b-c3d1-0994-24d2-494913690b05.png)
   
   创建新的面板后，便是修改其配置了。通过点击上图的Edit按钮，进入面板编辑页面。
   
   ![289b268b-cf45-7bbe-04ae-3ef219643416.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/product/dgtest/289b268b-cf45-7bbe-04ae-3ef219643416.png)
   
   面板一般有三个参数需要设置:

   | 参数 | 含义 | 举例 |备注|
   | ------------ | ------------ |------------ |------------ |
   |Panel Title|面板标题|Memory_information|英语，单词间用下划线连接|
   |Metrics|指标|node_memory_MemTotal_bytes{instance=~"$node"}|查询与计算公式|
   |Legend|指标名|Total memory|
   与面板相似，Query板块也可以进行增删改查，划到Query板块最下方区域，点击加号即可增加新的指标。
   注意：以上设置在修改后，要点击保存，以免丢失进度！
   
  + grafana各参数内部关系 
 
   grafana重要的几个概念是：job,panel和metrics,legend。通过上述操作流程，我们其实可以看出，一个job通过增删查改拥有多个panel，一个panel通过增删查改拥有多个metrics，一个metrics对应一个legend。但是，每一个job里面的panel不能重复，每一个panel里面的metrics不能重复。即参数命名方式“JOB_Legend”是唯一确定的变量。如“master_memory_min”表示的是master服务器的memory_min这个变量，不会产生歧义。
   
   ## 3. 在压测平台中修改报告配置
   
   在网站首页，点击任务报告，进入报告配置界面。
   
   ![063bd2e2-6d22-6e65-1683-890666da144e.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/product/dgtest/063bd2e2-6d22-6e65-1683-890666da144e.png)
   
   点击报告配置，进入配置信息页面，有新增、扫描和保存配置按钮。
   
   新增按钮可以添加grafana不包含的配置信息，如说明性信息。
   
   ![ad09da1c-1052-ec63-7b5f-d6e4405032f1.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/product/dgtest/ad09da1c-1052-ec63-7b5f-d6e4405032f1.png)
   
   扫描按钮可以获得grafana里面包含的所有配置信息。如下图，uid选择不同的仪表盘；job是选择服务器；而搜索框可以输入查询条件，提高查询速度与精度。我们添加配置时，要先确定我们需要的数据是哪个仪表盘的，通过uid选择确定。然后，确定这一份报告需要用哪几个服务器的数据。注意，一份报告的数据可能会对应多个服务器。在job里选择需要的服务器，即可得到该仪表盘、该服务器下的所有配置信息。点击命名方式为“JOB_Legend”的配置信息，可以同时添加多个，点添加按钮即可添加成功。接下来，通过job选择需要的其他服务器，反复上述操作，直到所需配置信息全部配置成功。最后，点击添加按钮。
   
   ![e5003c17-7d72-91ce-fbdb-87d67fbc3541.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/product/dgtest/e5003c17-7d72-91ce-fbdb-87d67fbc3541.png)