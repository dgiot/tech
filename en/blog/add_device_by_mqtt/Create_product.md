---
# 这是页面的图标
icon: page
# 这是文章的标题
title: Add products and devices
# 设置作者
author: stone
# 设置写作时间
time: 2021-01-25
# 一个页面只能有一个分类
category: Add products and devices
# 一个页面可以有多个标签
tag:
  - DGIOT
---
# 
# 一、Add products
#### 1、Log in to Shuwa-IoT Development Platform
#### 2、Select a product in the top navigation bar, click Create Product
**Configuration parameter**</br>
(1)Fill in the name, group, select category and application, node, Connection method, and confirm to return to the previous page</br>
![enproduct_1.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/blog/enproduct_1.png)
(2)Select the product you just created, click Configuration</br>
![enproduct_2.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/blog/enproduct_2.png)
(3)Add Object model</br>
 - Add custom attributes, Fill in the name, identifier, value range, type of data, unit</br>
![enproduct_3.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/blog/enproduct_3.png)
 - Add standard attributes, select the category that matches the product, and click add</br>
![enproduct_4.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/blog/enproduct_4.png)
 
(4)Add object access</br>
 - Select object access, select channel</br>
![enproduct_5.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/blog/enproduct_5.png)
 - Select the corresponding channel</br>
 - Voltage sensor Channel is the channel that receives mqtt data for processing
 - Note: Every time you add a channel, you need to restart the corresponding channel, that is, disable the channel and then enable it</br>
![enproduct_6.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/blog/enproduct_6.png)

(5)Add Storage</br>
 - Select Storage，select channel</br>
![enproduct_7.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/blog/enproduct_7.png)
 - Select the corresponding channel</br>
 - TD resource channel is the channel to store data to the database
 - Note: Every time you add a channel, you need to restart the corresponding channel, that is, disable the channel and then enable it</br>
![enproduct_8.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/blog/enproduct_8.png)

# 二、Add equipment
#### 1、Select the equipment on the top navigation bar and click Add equipment;
![enproduct_9.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/blog/enproduct_9.png)
#### 2、Fill in the name, device ID, Asset number, model, brand, and select the product name in turn</br>
![enproduct_10.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/blog/enproduct_10.png)

