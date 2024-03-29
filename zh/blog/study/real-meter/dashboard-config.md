# 平台配置

配置通道->创建产品->打开通道->设备自动上线->查看设备信息

## 通道配置
配置3个通道,负责对DTU和电表发送下行指令和接收存储上行的信息进行管理和控制，具体配置说明如下所示:

*采集通道METERDTU*:用于采集电表响应的数据,通过我们的解析可以得到用电量等数据。连接单个电表设备选择扫表方式为quick,多设备连接请选择normal。

![采集通道.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/real-meter/%E9%87%87%E9%9B%86%E9%80%9A%E9%81%93.png)

*指令通道INSTRUCT*:用于扫表指令和抄表的下发，根据用户需求对DTU传送不同的指令以得到数据值的回复。

![指令通道 (1).png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/real-meter/%E6%8C%87%E4%BB%A4%E9%80%9A%E9%81%93%20%281%29.png)

*存储通道TD*:用于将电表采集到的值存储到数据库内方便后期的调用与实时的查看。

![存储通道.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/real-meter/%E5%AD%98%E5%82%A8%E9%80%9A%E9%81%93.png)

## 产品创建
创建两个产品,DTU和电表，DTU用于接收服务器指令并下发给电表,电表则用来存储实物电表上报的值用于展示。

4GDTU:该产品挂载在电表上充当网关的角色,用于建立平台和电表之间的通讯，所以在产品配置时,将指令通道和采集通道添加在物接入即可。

![创建产品DTU.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/real-meter/%E5%88%9B%E5%BB%BA%E4%BA%A7%E5%93%81DTU.png)

![产品DTU配置.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/real-meter/%E4%BA%A7%E5%93%81DTU%E9%85%8D%E7%BD%AE.png)

电表设备:接收来自DTU上传的电表信息通过解析将获取到的值按一定的规律存储起来,方便后期的数据调用，在配置方面,我们要建立一个物模型对采集的数据格式进行一个规范。然后在物接入和物存储处添加上通道即可。

![创建产品电表.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/real-meter/%E5%88%9B%E5%BB%BA%E4%BA%A7%E5%93%81%E7%94%B5%E8%A1%A8.png)

![产品-电表-物模型.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/real-meter/%E4%BA%A7%E5%93%81-%E7%94%B5%E8%A1%A8-%E7%89%A9%E6%A8%A1%E5%9E%8B.png)

**物模型创建时**

![产品-电表-物接入.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/real-meter/%E4%BA%A7%E5%93%81-%E7%94%B5%E8%A1%A8-%E7%89%A9%E6%8E%A5%E5%85%A5.png)

![产品-电表-物存储.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/real-meter/%E4%BA%A7%E5%93%81-%E7%94%B5%E8%A1%A8-%E7%89%A9%E5%AD%98%E5%82%A8.png)

---

*配置完成后检查一遍配置,后将所用通道重启一遍，切记在修改完产品或通道后都要重启通道使配置生效。*

---

## 设备上线
就DTU而言,连入服务器会根据其上报的MAC值进行校验后创建产品。对于电表,我们平台拥有扫表的功能,DTU会接收扫表指令对连接的电表进行扫描。当我们接单个设备选择了quick模式,大大缩减了扫表时间，观察DTU的灯,TXD代表发送、RXD代表接收;那么根据实际情况理解为TXD闪烁,DTU向连接的设备发送命令,同理RXD闪烁代表电表设备向DTU发送了返回值。

![设备上线.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/real-meter/%E8%AE%BE%E5%A4%87%E4%B8%8A%E7%BA%BF.png)

首先会看见DTU上线,然后再其完成扫表任务后电表设备也会上线。点击电表后将会看到我们将得到电表的实时数据,那么电表连入过程就顺利结束了。
