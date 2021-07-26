

 [DG-IoTOPC桥接服务](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/opc/dgiot_opc.zip) 实现opc转mqtt功能，支持opc指标扫描和读写

## 使用指南

opc的准备配置见（使用KepServerEx进行数据模拟）

下例为：准备完成的OPC Quick Client界面

![bridge1.png](https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/opc/bridge1.png)

下面将以上例讲解DG-IoTOPC桥接流程：

- 使用DG-IoTOPC桥接服务

在命令行中执行dgiot_opc.exe，可见出示了提示信息

![bridge-2.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/opc/bridge-2.png)

|字段|解释|
|---|---|
|dgiot_opc|客户端中用户名名字，不能更改|
|opcda|OPC-DA模式|
|bridge|桥接服务|
|server|目标IP地址|
|Topic|订阅主题的名称，必须和平台通道中的订阅Topic保持一致才开正常使用|

![桥接1.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/opc/%E6%A1%A5%E6%8E%A51.png)
![桥接2.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/opc/%E6%A1%A5%E6%8E%A52.png)
![桥接3.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/opc/%E6%A1%A5%E6%8E%A53.png)

------------------

输入命令：

```
dgiot_opc opcda bridge prod.iotn2n.com dgiot_opc_da
```
![bridge12.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/opc/bridge12.png)

登录[http://prod.iotn2n.com:18083](http://prod.iotn2n.com:18083)查看客户端连接情况(admin:public)

![bridge4.png](https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/opc/bridge4.png)

可见上例中，客户端ID为2686e。点击客户端ID查看客户端详情。

![bridge5.png](https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/opc/bridge5.png)

可见，该客户端订阅了主题：dgiot_opc_da

然后在页面左边的菜单栏中点击工具->Websocket,进入配置页面，填入对应的客户端ID后，点击连接。

![bridge6.png](https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/opc/bridge6.png)

在配置界面的消息模块中填写消息的主题、主题后，点击“发送”

![bridge7.png](https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/opc/bridge7.png)

消息内容如下：

```
{"cmdtype":"read", "opcserver":"Kepware.KEPServerEX.V6", "group":"group", "items":"group.item.中开泵.opc", "noitemid":"000" }
```

|字段名|说明|
|---|---|
|cmdtype|服务端操作客户端的指令，例：“read”为读取操作，“scan”为扫描操作|
|opcserver|opc服务器名|
|group|对应的通道名|
|items|对应的设备标签名|

消息成功发送后，页面中的发布消息列表将产生记录，同时客户端收到消息后也会产生响应

![bridge8.png](https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/opc/bridge8.png)

![bridge9.png](https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/opc/bridge9.png)

可以见到使用read命令，客户端显示出opc中的模拟数据：THIS_IS_A_TEST

如果在页面上设置服务器订阅主题：dgiot_opc_da_ack，则客户端可将显示出的数据上传至页面中，可见于“订阅消息列表”



![bridge10.png](https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/opc/bridge10.png)

点击发送后可见订阅消息列表中出现消息：

![bridge11.png](https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/opc/bridge11.png)