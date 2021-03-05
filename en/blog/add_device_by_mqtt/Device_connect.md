---
# 这是页面的图标
icon: page
# 这是文章的标题
title: Device access
# 设置作者
author: stone
# 设置写作时间
time: 2021-01-25
# 一个页面只能有一个分类
category: Device access
# 一个页面可以有多个标签
tag:
  - DEVICE
---

#
# 一、Device connection
Take mqttfx as an example, download address://ci.iotn2n.com/shuwa/oem/mqttfx.zip </br>
### 1. Configure connection
 - Broker Address:132.232.119.105
 - Broker Port:1883
 - Client ID：Fill in the device ID
![enmqttfx_1.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/blog/enmqttfx_1.png)
 - User Name Password：Rule engine configuration</br>
such as:
 ```
    SELECT clientid, connected_at FROM "$events/client_connected" WHERE username = 'ammeter'
 ```
![mqttfx_1.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/blog/mqttfx_1.png)

### 2. send messages
 - topic：Fill in the device release topic
![enmqttfx_2.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/blog/enmqttfx_2.png)
 - Sending content: the physical model json string of the product to which the device belongs
![enmqttfx_3.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/blog/enmqttfx_3.png)
 - Sending {"electric_fr":99}
![mqttfx_2.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/blog/mqttfx_2.png)

### 3. Channel view log</br>
 - Select aisle, and subscription log</br>
![enmqttfx_4.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/blog/enmqttfx_4.png)
 - Print log when mqtt connects</br>
![mqttfx_6.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/blog/mqttfx_6.png)
 - Print log when mqtt sends a message</br>
![mqttfx_7.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/blog/mqttfx_7.png)
 - Print log whenever mqtt is disconnected</br>
![mqttfx_8.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/blog/mqttfx_8.png)
