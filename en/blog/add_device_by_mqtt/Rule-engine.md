---
# 这是页面的图标
icon: page
# 这是文章的标题
title: rule engine
# 设置作者
author: stone
# 设置写作时间
time: 2021-01-25
# 一个页面只能有一个分类
category: rule engine
# 一个页面可以有多个标签
tag:
  - DEVICE
---

#
# 一、Create channel
#### 1、Select the aisle in the top navigation bar, click to create channel
![enchannel_1.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/blog/enchannel_1.png)
#### 2、Select the channel type, belong to the application, fill in the channel name, etc.</br>
![enchannel_2.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/blog/enchannel_2.png)

# 一、Add rule
#### 1、Select the rule on the top navigation bar and click Add
 - Select the client connection event, filter the device whose Username is'ammeter' and get the connection information:
```
SELECT clientid, connected_at FROM "$events/client_connected" WHERE username = 'ammeter'
```
 - Select the client disconnection event, filter the devices whose Username is'ammeter' and get the disconnection information:
```
SELECT clientid, disconnected_at FROM "$events/client_disconnected" WHERE username = 'ammeter'
```
 - Select the message posted to the topic thing/9cc13a64f7/ammeter_001/post, and filter out the "clientid","payload","topic" fields from the message content:
```	
SELECT clientid, payload, topic FROM "thing/9cc13a64f7/ammeter_001/post"
```
 - Fill in the Regular SQL and add the Responsive action</br>
![enchannel_3.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/blog/enchannel_3.png)
 - Select the corresponding channel</br>
 - Note: Every time you add a channel, you need to restart the corresponding channel, that is, disable the channel and then enable it</br>
![enchannel_4.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/blog/enchannel_4.png)
