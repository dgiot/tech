# 平台配置

配置通道->创建产品->打开通道->设备自动上线->查看设备信息

## 通道配置
配置3个通道,负责对DTU和电表发送下行指令和接收存储上行的信息进行管理和控制，具体配置说明如下所示:

*Modbus-TCP*:用于采集响应的数据,通过我们的解析可以得到用传感器实时数据。

![mod-tcp通道创建.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/threeinone/mod-tcp%E9%80%9A%E9%81%93%E5%88%9B%E5%BB%BA.png)

*指令通道INSTRUCT*:根据用户需求对DTU传送不同的指令以得到数据回复。由于查找的数据有三个,我们将建立三个物模型来实现不同数据的上报.

![指令通道创建.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/threeinone/%E6%8C%87%E4%BB%A4%E9%80%9A%E9%81%93%E5%88%9B%E5%BB%BA.png)

*存储通道TD*:用于将传感器采集到的值存储到数据库内方便后期的调用与实时的查看。

![TD通道创建.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/threeinone/TD%E9%80%9A%E9%81%93%E5%88%9B%E5%BB%BA.png)

## 产品创建
创建一个'三合一传感器'产品,通过关联通道上报的数据进行分析达到创建设备的目的.创建完成产品后,进入'配置'界面进行下列操作:

![创建产品.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/threeinone/%E5%88%9B%E5%BB%BA%E4%BA%A7%E5%93%81.png)

***物模型的创建*** 是产品上线最为关键的步骤.请详细阅读说明书后进行配置.我们应该从中获取从机地址、寄存机格式、数据地址、数据长度和数据格式等这些必要参数.由于需要从该传感器读取3个不同的参数,需要配置3个物模型并编辑其采集顺序来完成目标.

![说明书注意.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/threeinone/%E8%AF%B4%E6%98%8E%E4%B9%A6%E6%B3%A8%E6%84%8F.png)

这是三合一传感器的部分说明书,数据来源这边按照说明书指示来填写.指令通道将按照该配置进行指令的下发.

![湿度物模型.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/threeinone/%E6%B9%BF%E5%BA%A6%E7%89%A9%E6%A8%A1%E5%9E%8B.png)

湿度物模型

![温度物模型.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/threeinone/%E6%B8%A9%E5%BA%A6%E7%89%A9%E6%A8%A1%E5%9E%8B.png)

温度物模型

![一氧化碳物模型.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/threeinone/%E4%B8%80%E6%B0%A7%E5%8C%96%E7%A2%B3%E7%89%A9%E6%A8%A1%E5%9E%8B.png)

一氧化碳物模型

---------------

在配置完物模型后,将我们的各个通道添加进该产品.最终图例如下:

![产品物模型.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/threeinone/%E4%BA%A7%E5%93%81%E7%89%A9%E6%A8%A1%E5%9E%8B.png)

![产品物接入.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/threeinone/%E4%BA%A7%E5%93%81%E7%89%A9%E6%8E%A5%E5%85%A5.png)

![产品物存储.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/threeinone/%E4%BA%A7%E5%93%81%E7%89%A9%E5%AD%98%E5%82%A8.png)

*配置完成后检查一遍,后将所用通道重启.***切记在修改完产品或通道后都要重启通道使配置生效***。*

---

## 设备上线
就DTU而言,连入服务器会根据其上报的MAC值进行校验后自动创建设备,我们可以点击'查看'以得到设备的实时信息:

![设备上线.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/threeinone/%E8%AE%BE%E5%A4%87%E4%B8%8A%E7%BA%BF.png)

