# 平台配置

在此之前我们已经将温感设备接入了DTU,那么接下来我们会对平台创建通道等操作来实现数据的上传和显示.

## 通道创建
通道是对上传数据的一种解析方式.将上传数据进行解析,得到我们想要的数据后存储在我们的服务器中.由于不同的传感器传输的数据不同,所以务必要选择正确的通道来实现数据解析.

在登录平台后,我们点击设备云中的通道管理,找到创建通道后实行以下步骤:

首先创建的是一个温度采集通道.该通道的作用是将通过DTU上传的数据在服务器对应的端口进行采集.

![temp-6.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/temp/temp-6.png)

1.在'通道管理'中找到'创建通道',点击后来到下一个界面.

2.选择合适的通道类型.因为接入的是温感采集器,我们选择'TCP调试通道采集通道'来完成数据的解析.

3.为该通道拟写名称,方便日后的通道调用.

4.选择'所属应用',为该通道添加权限.若设置为高级权限,则其下属用户无法使用.

5.对'端口'进行设置,其值为你在DTU设置时的{TCPC远程连接端口}.端口值务必对应,否则后续操作会受影响.

----
然后建立一个数据资源通道.该通道是将采集通道获得的数据储存进服务器方便调用.

![temp-7.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/temp/temp-7.png)

1.在'通道管理'中找到'创建通道',点击后来到下一个界面.

2.选择'TD资源通道'.**该通道可通用**.

3.为通道拟写名称方便调用.

4.选择'所属应用'.

5.为该通道选择'服务器地址',用来存储数据.

6.选择'端口'.端口为空闲端口即可.

---

最后再创建一个指令任务通道,是自定义下发命令得到DTU对温度值的反馈.

![temp12.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/temp/temp12.png)

指令通道的创建可以参考之前的两个通道.要注意的地方就是要修改结束时间.图中红线标识处用户更改后理解一下,后按需求更改.

---

**在完成了以上两个通道的创建后,在主页我们会看见三个通道都处于关闭状态,此时请勿启用通道.**

 ## 产品管理
产品管理方面我们会在物模型、物接入和物存储三个方面配置.

![temp-8.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/temp/temp-8.png)

首先进入产品管理,点击创建产品后对产品信息进行配置.所属分类需选择为'DG-IoT工业网关'.接入的为单个设备所以直接选为设备即可.
在完成产品创建后,点击'配置'对产品进行设置.

![temp-9.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/temp/temp-9.png)

1.物模型:是对采集数据读取的一种方式,并为数据添加标识方便我们理解.

点击'新增自定义属性',对物模型属性自定义配置.详细配置参考下图:

**此处标识符为'temperature'.原因是在建库时调用该数据为建表来源.而建库要求为纯字段、小写字母等.具体阅读'物模型'相关资料,且temperature能准确表达温度的意思.**

此外需要注意的是将协议类型为modbus协议,此处的从机地址为我们在DTU的MCU配置时主从机地址.可参考下图:

![temp10.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/temp/temp10.png)

![temp13.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/temp/temp13.png)

2.物接入:指解析DTU上报的设备信息.

点击选择通道,将创建的温感采集m模块添加即可.

3:物存储:指将解析后的温度数据储存进服务器.

点击选择题到,将创建的TD资源通道添加即可.

---
执行完上述操作后,我们回到通道管理界面,将两个通道**开启**.

-----每次修改或创建产品后,必须重启通道使数据能成功上传.-----

此时我们点击相关通道的'订阅日志'会看见每隔一段时间都会有新的数据上报,则表明全部配置成功.若无法显示数据,查看之前的步骤是否有遗漏.(若无法解决,可以申请技术支持)

上述操作成功运行后,点击左侧的设备管理.我们平台会依据DTU上传的注册包地址即MAC地址进行模式匹配,自动创建设备.点击'查看'后即可对接入的温感设备进行信息查看和操作.

![temp11.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/temp/temp11.png)















