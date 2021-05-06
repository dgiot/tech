
# 什么是Modbus?

Modbus是一种串行通讯协议，是Modicon公司(现在的施耐德电气 Schneider Electric) 于1979年为使用可编程逻辑控制器(PLC)通信而发表。Modbus已经成为工业领域通信协议事实上的业界标准，并且现在是工业电子设备之间常见的连接方式。

Modbus在工业环境下很流行，因为它是公开发布而免版税的。它是为工业应用开发的，与其他标准相比，它相对易于部署和维护，除了要传输的数据格式的大小外，几乎没有其他限制。Modbus使用RS485作为其物理层。

Modbus支持连接到同一网络的许多设备之间进行通信，例如，一个测量温度和湿度并将结果发送给服务器的系统中，Modbus通常用于在监控和数据采集(SCADA)系统中将计算机或服务器与远程终端单元(RTU)连接。许多数据类型是根据梯形逻辑(一种通过基于继电器逻辑电路图的图形来代表程序的一种编程语言)的行业用法机及其在驱动继电器中的用途来命名的: 单位物理输出称为线圈，单位物理输入称为离散输入或触点。

![Devices-Communicate-Using-Modbus-Common-Language.jpg](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/modbus/Devices-Communicate-Using-Modbus-Common-Language.jpg)

Modbus协议在RS232，RS422和RS485之上运行。有针对Modbus帧的基于IP链路层定义的 Modbus/TCP规范。Modbus协议基于Request(请求)/Response(响应)模型。

# Modbus通信协议的类型

串行端口和以太网存在多种版本的Modbus协议，最常见的是：

- Modbus RTU
- Modbus ASCII
- Modbus TCP
- Modbus Plus

更详细请下载[Modbus协议文档完整版本](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/modbus/Modbus_book.pdf)

![Modbus-Different-Types.jpg](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/modbus/Modbus-Different-Types.jpg)

Modicon发布了基于主从架构的多点网络的Modbus通信接口。Modbus节点之间的通信通过发送请求和读取响应类型消息来实现。

# Modbus协议及其物理媒体

Modbus是描述消息通信对话框的开放标准。

Modbus通过多种类型的物理介质进行通信，例如：

- 串行RS-232

- 串行RS-485

- 串行RS-422

- 以太网

![Modbus-Communication-Physical-Media.gif](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/modbus/Modbus-Communication-Physical-Media.gif)

最初的Modbus接口在RS-232串行通信上运行，但是大多数后来的Modbus实现使用RS-485，因为它允许：

- 距离更长。

- 更高的速度。

- 单个多点网络中可能有多个设备。

![Modbus-Communication-over-Serial-RS485-Benefits-.jpg](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/modbus/Modbus-Communication-over-Serial-RS485-Benefits-.jpg)

使用两线制通过串行RS-485物理介质进行主从Modbus通信 发送 并接收连接。

![Modbus-Communication-over-Serial-RS-485-Physical-Media.jpg](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/modbus/Modbus-Communication-over-Serial-RS-485-Physical-Media.jpg)

在简单的接口（如RS232或RS485）上，Modbus消息以纯格式通过网络发送，并且该网络将专用于Modbus通信。

但是，如果您的网络需要使用功能更广泛的网络系统（例如以太网上的TCP / IP）使用多个异构设备，则Modbus消息将以此物理接口规定的格式嵌入到以太网数据包中。

因此，在这种情况下，Modbus和其他类型的混合协议可以同时存在于同一物理接口上。

![Modbus-Devices-Compliance-with-Ethernet-Physical-Interface.gif](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/modbus/Modbus-Devices-Compliance-with-Ethernet-Physical-Interface.gif)

# Modbus4j

官网地址: https://infiniteautomation.com/modbus4j-open-source-modbus-library/

GitHub：https://github.com/infiniteautomation/modbus4j

由Infinite Automation Systems和Serotonin Software用Java编写的Modbus协议的高性能和易用性实现。支持ASCII，RTU，TCP和UDP传输作为从属或主用，自动请求分区和响应数据类型解析。

现在可以使用最新版本的公共Maven存储库，将其添加到pom.xml中

```xml
<repositories>
    <repository>
        <releases>
            <enabled>false</enabled>
        </releases>
        <snapshots>
            <enabled>true</enabled>
        </snapshots>
        <id>ias-snapshots</id>
        <name>Infinite Automation Snapshot Repository</name>
        <url>https://maven.mangoautomation.net/repository/ias-snapshot/</url>
    </repository>
    <repository>
        <releases>
            <enabled>true</enabled>
        </releases>
        <snapshots>
            <enabled>false</enabled>
        </snapshots>
        <id>ias-releases</id>
        <name>Infinite Automation Release Repository</name>
        <url>https://maven.mangoautomation.net/repository/ias-release/</url>
    </repository>
</repositories>
```

依赖项信息为：
```xml
<dependency>
    <groupId>com.infiniteautomation</groupId>
    <artifactId>modbus4j</artifactId>
    <version>3.0.3</version>
</dependency>
```
Modbus效果演示视频
<video src="http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/modbus/gateway-modbus.mp4" width="800px" height="600px" controls="controls"></video>


## modbus功能码定义和样例

modbus完整支持很多功能码，但是实际在应用的时候常用的也就那么几个。具体如下：

+ 0x01: 读线圈寄存器  
+ 0x02: 读离散输入寄存器  
+ 0x03: 读保持寄存器  
+ 0x04: 读输入寄存器  
+ 0x05: 写单个线圈寄存器  
+ 0x06: 写单个保持寄存器  
+ 0x0f: 写多个线圈寄存器  
+ 0x10: 写多个保持寄存器  

如上所示一共8种功能码。这其中有涉及到线圈、离散输入、保持、输入四种寄存器。这名字也不知道谁起的，让人看了一点不通俗易懂，搞得晕晕乎乎。实际上你要是看清他的本质就很简单了。下面分别解释一下：

**线圈寄存器**：实际上就可以类比为开关量，每个bit都对应一个信号的开关状态。所以一个byte就可以同时控制8路的信号。比如控制外部8路io的高低。 线圈寄存器支持读也支持写，写在功能码里面又分为写单个线圈寄存器和写多个线圈寄存器。对应上面的功能码也就是：0x01 0x05 0x0f

**离散输入寄存器**：如果线圈寄存器理解了这个自然也明白了。离散输入寄存器就相当于线圈寄存器的只读模式，他也是每个bit表示一个开关量，而他的开关量只能读取输入的开关信号，是不能够写的。比如我读取外部按键的按下还是松开。所以功能码也简单就一个读的 0x02

**保持寄存器**：这个寄存器的单位不再是bit而是两个byte，也就是可以存放具体的数据量的，并且是可读写的。比如我我设置时间年月日，不但可以写也可以读出来现在的时间。写也分为单个写和多个写，所以功能码有对应的三个：0x03 0x06 0x10

**输入寄存器**：只剩下这最后一个了，这个和保持寄存器类似，但是也是只支持读而不能写。一个寄存器也是占据两个byte的空间。类比我我通过读取输入寄存器获取现在的AD采集值。对应的功能码也就一个 0x04

对应的错误返回：  
在对应功能码基础上加上0x80

1、“01”读取线圈状态发送：

![在这里插入图片描述](https://img-blog.csdnimg.cn/20190114112103377.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xpYm94aXU=,size_16,color_FFFFFF,t_70)

2、“02”读取输入状态  
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190114112147249.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xpYm94aXU=,size_16,color_FFFFFF,t_70)![在这里插入图片描述](https://img-blog.csdnimg.cn/20190114112206761.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xpYm94aXU=,size_16,color_FFFFFF,t_70)

3、“03”保持型寄存器读取

![在这里插入图片描述](https://img-blog.csdnimg.cn/20190114112255339.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xpYm94aXU=,size_16,color_FFFFFF,t_70)

![在这里插入图片描述](https://img-blog.csdnimg.cn/20190114112504699.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xpYm94aXU=,size_16,color_FFFFFF,t_70)  
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190114112524280.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xpYm94aXU=,size_16,color_FFFFFF,t_70)  
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190114112623947.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xpYm94aXU=,size_16,color_FFFFFF,t_70)  
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190114112649191.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xpYm94aXU=,size_16,color_FFFFFF,t_70)  
![在这里插入图片描述](https://img-blog.csdnimg.cn/2019011411271481.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xpYm94aXU=,size_16,color_FFFFFF,t_70)![在这里插入图片描述](https://img-blog.csdnimg.cn/20190114112732156.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xpYm94aXU=,size_16,color_FFFFFF,t_70)![在这里插入图片描述](https://img-blog.csdnimg.cn/20190114112747704.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xpYm94aXU=,size_16,color_FFFFFF,t_70)![在这里插入图片描述](https://img-blog.csdnimg.cn/20190114112803875.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xpYm94aXU=,size_16,color_FFFFFF,t_70)

## 表1 ModBus功能码

|   |   | |
| ------------ | ------------ |----|
|  功能码 | 名称  | 作用|
|功能码  |  名称                    |  作用 |
|01      |读取线圈状态              |取得一组逻辑线圈的当前状态（ON/OFF)|
|02      |读取输入状态              |取得一组开关输入的当前状态（ON/OFF)|
|03      |读取保持寄存器            | 在一个或多个保持寄存器中取得当前的二进制值|
|04      |读取输入寄存器            | 在一个或多个输入寄存器中取得当前的二进制值|
|05      |强置单线圈                |强置一个逻辑线圈的通断状态|
|06      |预置单寄存器              |把具体二进值装入一个保持寄存器|
|07      |读取异常状态              |取得8个内部线圈的通断状态，这8个线圈的地址由控制器决定，用户逻辑可以将这些线圈定义，以说明从机状态，短报文适宜于迅速读取状态|
|08      |回送诊断校验              |把诊断校验报文送从机，以对通信处理进行评鉴|
|09      |编程（只用于484）         |  使主机模拟编程器作用，修改PC从机逻辑|
|10      |控询（只用于484）         |  可使主机与一台正在执行长程序任务从机通信，探询该从机是否已完成其操作任务，仅在含有功能码9的报文发送后，本功能码才发送|
|11      |读取事件计数              |可使主机发出单询问，并随即判定操作是否成功，尤其是该命令或其他应答产生通信错误时|
|12      |读取通信事件记录          |可是主机检索每台从机的ModBus事务处理通信事件记录。如果某项事务处理完成，记录会给出有关错误|
|13      |编程（184/384 484 584）   |可使主机模拟编程器功能修改PC从机逻辑|
|14      |探询（184/384 484 584）   |可使主机与正在执行任务的从机通信，定期控询该从机是否已完成其程序操作，仅在含有功能13的报文发送后，本功能码才得发送|
|15      |强置多线圈                |强置一串连续逻辑线圈的通断|
|16      |预置多寄存器              |把具体的二进制值装入一串连续的保持寄存器|
|17      |报告从机标识              |可使主机判断编址从机的类型及该从机运行指示灯的状态|
|18      |（884和MICRO 84）         |可使主机模拟编程功能，修改PC状态逻辑|
|19      |重置通信链路              |发生非可修改错误后，是从机复位于已知状态，可重置顺序字节|
|20      |读取通用参数（584L）       |显示扩展存储器文件中的数据信息|
|21      |写入通用参数（584L）       |把通用参数写入扩展存储文件，或修改之|
|22～64  |                          |保留作扩展功能备用|
|65～72  |保留以备用户功能所用       |留作用户功能的扩展编码|
|73～119 |非法功能                  | |
|120～127|  保留                    |留作内部作用|
|128～255|  保留                    |用于异常应答|
