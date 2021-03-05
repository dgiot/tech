---
# 这是页面的图标
icon: page
# 这是文章的标题
title: 设备接入
# 设置作者
author: h7ml
# 设置写作时间
time: 2021-01-25
# 一个页面只能有一个分类
category: 设备接入
# 一个页面可以有多个标签
tag:
  - DEVICE
---

#
# 一、设备连接
以mqttfx为例，下载地址http://ci.iotn2n.com/shuwa/oem/mqttfx.zip </br>
 1. 配置连接 
 - Broker Address:平台IP
 - Broker Port:默认1883
 - Client ID：填写设备编号
 - User Name Password：规则引擎配置的
 例如：
 ```
    SELECT clientid, connected_at FROM "$events/client_connected" WHERE username = 'ammeter'
 ```
![mqttfx_1.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/blog/mqttfx_1.png)

 2. 发送消息
 - topic：填写设备发布topic
![mqttfx_3.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/blog/mqttfx_3.png)
 - 发送内容：设备所属产品的物模型 json串
![mqttfx_4.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/blog/mqttfx_4.png)
 - 发送 {"electric_fr":99}
![mqttfx_2.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/blog/mqttfx_2.png)

3. 通道查看日志</br>
选择产品连接物接入通道，订阅日志</br>
mqtt连接时打印日志</br>
![mqttfx_6.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/blog/mqttfx_6.png)
mqtt发送消息时打印日志</br>
![mqttfx_7.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/blog/mqttfx_7.png)
mqtt断开时时打印日志</br>
![mqttfx_8.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/blog/mqttfx_8.png)





