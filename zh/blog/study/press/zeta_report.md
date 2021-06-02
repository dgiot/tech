

# 1概述

## 1.1测试背景

随着ZETA产业的发展与业务的深化应用，设备管理、网络管理、应用服务都面临大规模设备接入挑战。ZETA设备接入服务必须能够支持高并发性 (如超过百万级的并发设备接入)、高速率 (如每秒超过十万事件)、高吞吐量 (如每100秒处理超过GB)。同时，应用事件发生率各不相同，需要接入服务有超强的处理能力，保障应用事件的正常解析。

## 1.2测试简介

压力测试是软件质量保证的一项基本行为，是每个重要软件测试工作的一部分。软件压力测试是指对系统不断施加压力的情况下，根据系统各项指标的变化情况来判断：1、系统可能存在的瓶颈；2、系统负载能力；3、系统正常运行情况下的运行效率。

![业务场景1.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/press/%E4%B8%9A%E5%8A%A1%E5%9C%BA%E6%99%AF1.png)

图1-实际业务场景

本次压力测试通过模拟1万ZETA AP、千万ZETA TAG标签的在线运行，精准高效完成ZETA AP、ZETA TAG的在线协议解析、解析数据实时入库、海量数据在线查询与展示等流程。同时，对真实物流业务场景进行抽象，实现批次ZETA TAG在不同线路上发生轨迹改变，移动过程中利用不同的ZETA AP实现定位。ZETA TAG在线运行过程中，每隔15分钟发送心跳包，被临近的单个或者多个ZETA AP报送至服务端。服务端会按照策略选择信号最好的上报数进行存库，并利用上报信号最好的AP对ZETA TAG进行定位。

## 1.3目的

通过压力测试，判断当前应用环境情况下系统的负载能力，为今后应用范围扩大，用户量上升后，服务器扩容、升级等提供必要的技术支撑，及服务器规划等。

本次测试目的是为了验证基于数蛙连接与设备管理平台的ZETA物流跟踪管理能够实现千万级ZETA TAG标签同时在线稳定运行、数据及时回传、正常入库、高效查库。

本次测试场景的压力与复杂度远高于真实场景，在保障ZETA物流跟踪当前业务可以正常开展的同时，也可以有效支撑ZETA相关业务应用的拓展与深化应用。

# 2测试环境

## 2.1网络

为了尽量避免网络传输给测试结果带来的影响，应该选取内部局域网作为压力测试的网络环境（但是我们没有专门的局域网，只能用外网测试）。网络框图如下：

![网络结构1.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/press/%E7%BD%91%E7%BB%9C%E7%BB%93%E6%9E%841.png)

图2-网络结构示意图

## 2.2腾讯云服务器

平台服务器即连接与设备管理平台服务器，是压力测试的主要对象。平台服务器为目前正式环境中运行的服务器，应用服务器配置不同，其压力测试结果也不一致。

服务器配置如下：

|服务器类型|腾讯云服务器|
|---|---|
|处理器|16核心CPU  2.0GHz|
|内存|32G|
|硬盘|500G|
|操作系统|LINUX centos7.3 64位|



## 2.3应用服务器

服务器配置如下：

|服务器类型|腾讯云服务器|
|---|---|
|处理器|2核心CPU  2.0GHz|
|内存|4G|
|硬盘|50G|
|操作系统|LINUX centos7.3 64位|

## 2.4测试机

由于压力测试是对系统负载能力的测试，无法通过真是的环境来进行获取相关指标，因此通过测试机与测试服务，模拟1万AP、千万ZETATAG与服务器高频数据交互，利用算法虚拟真实业务场景下实际的操作来进行测试。

测试机部署虚拟云设备服务，及进行压力测试的客户端机器，一般采用高配置的机器来进行测试。

在压力测试过程中，一般忽略测试机对压力测试结果的影响。

测试机配置(腾讯云服务器)：

|服务器类型|腾讯云服务器|
|---|---|
|处理器|4核心CPU  2.0GHz|
|内存|8G|
|硬盘|200G|
|操作系统|LINUX centos7.3 64位|

## 2.5条件与限制

为了尽量保证压力测试结果的真实性，在压力测试期间，做如下的条件限制：

1、尽量在局域网内进行压力测试，避免因网络原因干扰测试结果与结论；

2、数据库服务器除了处理测试应用系统请求外，不进行其它复杂应用请求；

3、测试应用服务器不进行其它的正常业务处理，因此压力测试安排在非工作日进行；

4、压力测试结果忽略测试机、应用服务器、网络等其它额外的开销，不作为系统瓶颈的分析对象。

## 2.6测试场景

启动测试机，导入已编写好的服务，设置线路条数、起始位置、发送频率、AP数量、TAG取值范围、等参数信息，便可以启动模拟场景，进行AP、TAG与服务器的高频数据交互。

# 3测试工具

## 3.1测试工具

测试工具：虚拟AP；监控工具:Grafana

## 3.2工具简介

利用ZETAAP影子设备模拟1万ZETAAP、千万ZETATAG同时在应用程序中工作的环境，对应用程序进行负载测试。当应用程序在负载状态下运行时，Grafana会准确评测、监控并分析系统的性能和功能。

ZETAAP影子设备使用TCP/IP协议，主要思想是使用虚拟设备来模拟真实设备并发对系统施加压力。通过ZETAAP影子设备模拟接收ZETATAG标签上报数据，将上报数据上报至服务端。

# 4测试场景与指标

ZETAAP、ZETATAG设备消息收发是平台功能模块中实现数据网关功能，同时服务器需要进行复杂运算的查询、计算。但也是系统中基本的模块，操作量相对较大，性能的要求较高，对服务的压力相对较大。

![ZETA物流跟踪业务场景图1.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/press/ZETA%E7%89%A9%E6%B5%81%E8%B7%9F%E8%B8%AA%E4%B8%9A%E5%8A%A1%E5%9C%BA%E6%99%AF%E5%9B%BE1.png)

ZETA物流跟踪业务场景图

ZETA设备运行模拟：

ZETA AP：每10s主动连接服务端，连续30min未连上等待2min再次 连接；

连接状态下1min一次心跳交互；

连续三次未收到ACK，发起重连。

ZETA TAG：每15分钟上报一次心跳包；

心跳报文被不同AP接收上报后，服务端会比较后保留首次

收到TAG心跳后3s内RSSI最强上报的AP位置信息作为TAG的当前位置。

客户端场景模拟描述：

运输、配送线路：本次场景模拟线路总计200条，线路可以配置。

运输车辆：本次场景模拟运输车辆50000部，货车会模拟真实物流场景在既定线路上进行移动，车上ZETAG标签随之移动。

ZETA AP：本次模拟10000台，每条线路上分布500台ZETAAP

ZETA TAG数量：本次模拟在运ZETAG1000万个，ZETAG随运输车辆移动，每隔15分钟的心跳报文被相邻的2-3个ZETAAP接收。

服务端业务描述：

1、每15分钟内完成千万在运ZETAG标签心跳数据包解析（加上冗余报文，每15分钟内解析心跳报文数量2000多万条）；

2、完成ZETA TAG心跳数据比较与冗余数据过滤；

3、完成解析出的海量TAG位置信息实时分类入库；

4、支持ZETATAG最新位置更新与轨迹查询；

5、每分钟完成1万ZETAAP的心跳报文解析、存储；

6、完成ZETAAP运行状态信息的接收与存储；

7、支持ZETA AP运行状态信息查询。

根据测试系统中消息的业务场景情况，选取以下指标作为场景压力测试情况判断依据：

A、ZETA AP在线情况统计

B、ZETA AP在线率

C、在线ZETAG标签数量

D、ZETA标签解析包数量

E、1/5/15分钟CPU平均负载

F、内存使用量

# 5测试策略

## 5.1测试准备

按照本测试方案及测试计划，准备测试数据，完成服务部署，并在模拟环境中进行测试运行。

## 5.2压力测试

压力测试分以下几种情况测试：

| **测试内容** | **测试项说明** |
| --- | --- |
| A、ZETA AP在线情况统计 | 统计同时在线的ZETAAP数量 |
| B、ZETA AP在线率 | 在线ZETAAP与模拟总量的比值 |
| C、在线ZETAG标签数量 | 统计心跳周期内ZETAG在线数量 |
| D、ZETA标签解析包数量 | 平台完成的ZETA标签解析数量 |
| E、1/5/15分钟CPU平均负载 | 平台服务器的CPU负载信息 |
| F、内存使用量 | 平台服务器的内存使用量 |

压力测试过程中需要记录的性能指标包括：

| **测试环境** | **指标** |
| --- | --- |
| 平台指标 | 最大AP在线数 <br> ZETAG标签并发数 <br>最小响应时间 <br> 最大响应时间 <br> 平均响应时间 |
| 被测服务器CPU | 最小 <br> 平均 <br> 最大 |
 被测服务器内存消耗 | 最小值 <br> 最大值 <br> 平均值 |

# 6测试结果

## 6.1测试结果数据与分析图表

ZETAG标签数据包入库总量（入库超10亿条）：

![zeta结果1.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/press/zeta%E7%BB%93%E6%9E%9C1.png)

ZETA AP在线数量：

![zeta结果1.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/press/zeta%E7%BB%93%E6%9E%9C2.png)

ZETAG标签在线数量统计（15分钟最高超过1856万）：

![zeta结果1.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/press/zeta%E7%BB%93%E6%9E%9C3.png)

ZETAG标签解析数量：(两小时内约解析1.5亿条)

![zeta结果1.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/press/zeta%E7%BB%93%E6%9E%9C4.png)

1/5/15分钟CPU负载统计：（负载比较平稳）

![zeta结果1.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/press/zeta%E7%BB%93%E6%9E%9C5.png)

内存使用量：（客户端最高7.19G，服务端最高29.6G）

![zeta结果1.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/press/zeta%E7%BB%93%E6%9E%9C6.png)

磁盘读写测试：

![zeta结果1.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/press/zeta%E7%BB%93%E6%9E%9C7.png)

**API** 压力测试结果：

**ZetaEtag** 接口



超时时间为5秒

随机读tag，数据库内数据58169933条

tag 生成方式：FF开头后六位随机生成

| 请求次数/次 | 200000 |
| --- | --- |
| 测试总时间/秒 | 269.583 |
| 返回200数 | 120116 / 200000 |
| 返回404数 | 79884 / 200000 |
| 返回其他状态码 | 0 / 200000 |
| 返回成功率/ % | 100 |
| 每秒请求数/ 次/秒 | 741.88 |

\* 返回status code为200（找到目标tag）或404（找不到目标tag）两者都视为调用成功

服务器CPU负载
![zeta结果1.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/press/zeta%E7%BB%93%E6%9E%9C8.png)
服务器内存负载

![zeta结果1.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/press/zeta%E7%BB%93%E6%9E%9C9.png)



**ZetaEtagHistory** 接口

超时时间为5秒

对所有tag随机读，limit值为100，日期范围在合理范围内随机产生，数据库内数据58169933条

tag生成方式：FF开头后六位随机生成

日期生成方式：1569558137~1569579737间随机数

| 请求次数/次 | 200000 |
| --- | --- |
| 测试总时间/秒 | 298.123 |
| 返回200数 | 200000 / 200000 |
| 返回其他状态码 | 0 / 200000 |
| 返回成功率/ % | 100 |
| 每秒请求数/ 次/秒 | 670.86 |

服务器CPU负载

![zeta结果1.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/press/zeta%E7%BB%93%E6%9E%9C10.png)

服务器内存负载

![zeta结果1.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/press/zeta%E7%BB%93%E6%9E%9C11.png)
## 6.2测试结果分析

根据以上测试结果可得出以下结论：

| **测试内容** | **测试结果（取值范围）** |
| --- | --- |
| A、ZETA AP在线情况统计 | 9960-20000 |
| B、ZETA AP在线率 | 100% |
| C、在线ZETAG标签数量 | 最大值：18562926 |
| D、ZETA标签解析包数量 | 合计：1010505054 |
| E、1/5/15分钟CPU平均负载 | 1分钟 ：0.11-15.8<br>5分钟:0.78-13.9<br>15分钟:5.8-11.65 |
| F、内存使用量 | 服务端：12.46G（平均）<br>客户端：2.90G（平均） |

经分析可以得出以下结论：

1、15分钟内超过千万个（1020万）的TAG标签完成了心跳数据包上报、解析、存储；

2、服务运行稳定，内存使用量与CPU负载均在平稳状态；

当前存在问题

综上所述，平台可以稳定支撑千万级ZETA TAG同时在运的物流跟踪网络运营与业务应用。通过优化策略与扩容可以支撑更大规模、更多领域的ZETA应用。
