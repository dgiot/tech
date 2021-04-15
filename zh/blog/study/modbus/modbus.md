
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




