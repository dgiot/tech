---
# 这是页面的图标
icon: page
# 这是文章的标题
title: 规则引擎
# 设置作者
author: h7ml
# 设置写作时间
time: 2021-01-25
# 一个页面只能有一个分类
category: 规则引擎
# 一个页面可以有多个标签
tag:
  - DEVICE
---

#
# 一、创建通道
#### 1、顶部导航栏选择通道，点击创建通道
(1)依次选择通道类型，所属应用，填写通道名称等</br>
![channel_1.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/mqtt/channel_1.png)

# 一、添加规则
#### 1、顶部导航栏选择规则，点击添加
 - 选择客户端连接事件，筛选 Username 为 'ammeter' 的设备并获取连接信息：
```
SELECT clientid, connected_at FROM "$events/client_connected" WHERE username = 'ammeter'
```
 - 选择客户端断开事件，筛选 Username 为 'ammeter' 的设备并获取断开信息：	
```
SELECT clientid, disconnected_at FROM "$events/client_disconnected" WHERE username = 'ammeter'
```
 - 选择发布到 thing/9cc13a64f7/ammeter_001/post 主题的消息，并从消息内容中筛选出 "clientid","payload","topic" 字段：
```	
SELECT clientid, payload, topic FROM "thing/9cc13a64f7/ammeter_001/post"
```
![image.png](https://i.loli.net/2021/01/28/gemxZlFEnkMJLGz.png)
下拉添加响应动作，选择相应的通道添加，然后新建</br>
注：每次添加通道后，需重启对应的通道，即禁用通道后再启用</br>
![product_5.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/mqtt/product_5.png)
