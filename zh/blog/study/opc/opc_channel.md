# OPC通道使用指南

## 前言

数蛙OPC通道提供自动化扫描OPC客户端，自动采集储存点位信息，自动生成时序数据上云，并支持在数蛙平台上的实时组态展示。
使用数蛙提供的OPC通道，无需任何复杂操作，只需几步操作即可实现全天候、无限制的OPC数据采集、监控。
使用步骤大体为3步：1.平台，KEPServer端配置完成 2.通过dgiot_opc.exe(数蛙OPC桥接工具)将数据发送给平台 3.在平台上启动通道（可能需要多试几次）。即可在平台上看到OPC数据。


接入流程图：
![OPC DA流程图.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/opc/OPC%20DA%E6%B5%81%E7%A8%8B%E5%9B%BE.png)

## 使用注意事项

1.数蛙平台上使用opc通道的产品的**产品名称**必须和KEPServer端对应中**通道名称**一致。

![注意事项1.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/opc/%E6%B3%A8%E6%84%8F%E4%BA%8B%E9%A1%B91.png)

2.数蛙平台上产品下的从属设备的**设备编号**（不是设备名称）必须和KEPServer端中通道下的**设备名称**一致。

![注意事项2.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/opc/%E6%B3%A8%E6%84%8F%E4%BA%8B%E9%A1%B92.png)

3.数蛙上每个使用opc通道的产品，在物接入界面添加通道时，记住一个产品配一个通道，不要共用通道。例如：有创建2个产品分别记为产品1，产品2，那么需要建立2个opc通道，记为通道1，通道2，
产品1->通道1，产品2->通道2。

4.KEPServer端中创建标识时，请务必填写说明，该说明项会用于生成物模型名称。
![注意事项3.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/opc/%E6%B3%A8%E6%84%8F%E4%BA%8B%E9%A1%B93.png)

**5**. 在数蛙平台创建产品、设备以及配置KepServer的操作过程中，凡是取名时，请尽量使用**小写英语字母**，**绝对不要在命名中使用下划线"_"**。
如：创建产品时产品名称可以是opc01，但不要使用opc_01,其他命名同理。（平台上的产品分组、设备名称，KEPServer端中说明项无需遵守本条，其相当于昵称，可随意）

6. 产品是设备的抽象合集，具体在这里就是产品下的设备的属性必须是一致的，**不要在KEPServer端的同一通道下创建具有不同属性的设备**。
同时KEPServer端中，**不要创建名字相同的设备（即使是在不同的通道下）**。

## 操作步骤

- *准备工作*

OPC软件操作见[OPC数据模拟](keepserver.md)<br>
OPC桥接操作及工具见[OPC数据桥接](bridge.md).

1.桥接准备:
![桥接准备.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/opc/%E6%A1%A5%E6%8E%A5%E5%87%86%E5%A4%87.png)

2.OPC软件准备：
![opc软件准备.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/opc/opc%E8%BD%AF%E4%BB%B6%E5%87%86%E5%A4%87.png)
在配置界面中选中项目 -> 点击编辑-> 属性-> OPC DA -> “在浏览时包括标记属性” 选为“是” -> 点击应用。

最后启动OPC quick client
![启动OPC客户端.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/opc/%E5%90%AF%E5%8A%A8OPC%E5%AE%A2%E6%88%B7%E7%AB%AF.png)

3.数蛙平台准备

先在通道管理-> 创建通道 -> 选择OPC采集通道 -> 点击确定，创建OPC通道
![创建opc通道.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/opc/%E5%88%9B%E5%BB%BAopc%E9%80%9A%E9%81%93.png)


然后在对应的产品的物接入中中添加OPC采集通道
![物接入.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/opc/%E7%89%A9%E6%8E%A5%E5%85%A5.png)

完成上述步骤后，可见下述情形：

1.桥接界面：
![桥接shell情形.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/opc/%E6%A1%A5%E6%8E%A5shell%E6%83%85%E5%BD%A2.png)

2.通道日志：
![OPC通道日志.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/opc/OPC%E9%80%9A%E9%81%93%E6%97%A5%E5%BF%97.png)

此时OPC数据已成功上传。

*注意事项*
- 1.为OPC中各对象命名时，不要使用下划线"_", 不要使用大写字母。正确命名：speed，错误命名：Speed或者Speed_。
- 2.请不要在创建OPC通道时修改OPC服务器和OPC分组的值。
