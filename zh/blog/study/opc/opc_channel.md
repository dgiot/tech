# OPC通道使用指南

## 前言

数蛙OPC通道提供自动化扫描OPC客户端，自动采集储存点位信息，自动生成时序数据上云，并支持在数蛙平台上的实时组态展示。
使用数蛙提供的OPC通道，无需任何复杂操作，只需几步操作即可实现全天候、无限制的OPC数据采集、监控。

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
