# 前言
  
OPC软件作为工业自动化领域应用最广泛的软件，深受工业控制人员的喜爱。但也有许多情况下，OPC软件并不能满足实际的使用需求：
  
*使用场景*

- 1.OPC只在内网运行，希望可以将数据传递至外网，随时随地查看
- 2.OPC数据难以存库
- 3.希望可以更好展示数据，进行数据分析  
- ...
  
鉴此,DG-IoT专门提供了基于OPC通讯的OPC接口，以实现OPC数据的简单传输，解决行业痛点。  
  
  接下来我们将学习掌握opc通道的使用
  
  配套学习软件下载
  
  [KEPServerEX官方下载地址](https://www.kepware.com/zh-cn/products/kepserverex/)
  
  [dgiot_opc.exe](https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/opc/dgiot_opc.exe)
  
## OPC简介

![picture1.png](https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/opc/picture1.png)

问一个OPC老手，他们或许会笑，因为他们知道有很多含义！在经典的且程序化的说法是：**O** LE for **P** rocess **C** ontrol（用于过程控制的OLE）。OLE 或对象链接和嵌入是Windows的基本早期构建块，允许应用程序在它们之间共享复杂的信息。在Windows 3.0的第一个演示中，人们将 Excel电子表格嵌入到 Microsoft Word文档中，以及更新电子表格，打开Word和更新文档的重要性。原始OPC标准源自该技术和 COM 或 Windows 组件对象模型。

从那以后，我们会听到很多其他的一些定义，但是比较出名的是现在官方OPC基金会所给出的说法是：它的含义是**O** pen **P** latform **C** ommunications（开放平台通信）。其实无论它的定义是什么，其目标保持不变：消除自动化软件和硬件平台之间互操作性的障碍，为用户提供选择。  

![picture2.png](https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/opc/picture2.png)


## 具体使用方法见
- [使用KepServerEx进行数据模拟](keepserver.md)

- [DG-IoTOPC桥接服务](bridge.md)
