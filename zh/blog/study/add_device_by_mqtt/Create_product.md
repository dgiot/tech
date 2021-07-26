---
# 这是页面的图标
icon: page
# 这是文章的标题
title: 添加产品
# 设置作者
author: h7ml
# 设置写作时间
time: 2021-01-25
# 一个页面只能有一个分类
category: 添加产品与设备
# 一个页面可以有多个标签
tag:
  - DGIOT
---
# 
# 一、添加产品
#### 1、登录DG-IoT-物联网开发平台
#### 2、顶部导航栏选择产品，点击创建产品
**配置参数**</br>
(1)依次填写名称，分组，选择分类和应用，节点，联网方式，确定回到上一页</br>
![product_1.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/mqtt/product_1.png)
(2) 选择刚刚创建的产品，点击配置</br>
![product_2.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/mqtt/product_2.png)
(3)添加物模型</br>
 - 自定义属性添加</br>
![product_3.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/mqtt/product_3.png)
填写名称，标识符，取值范围，数据类型，单位</br>
![product_4.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/mqtt/product_4.png)
 - 标准属性添加，选择符合产品的分类，点击添加</br>
![product_5.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/mqtt/product_5.png)
 自动添加相关属性
 ![image.png](https://i.loli.net/2021/01/28/cdvbRT5pVXOjiYB.png)
 
(4)添加物接入</br>
选择物接入，选择通道</br>
Voltage sensor Channel 是接收mqtt数据进行处理的通道
![image.png](https://i.loli.net/2021/01/28/n5RrXZ1AjYVOSPh.png)
选择对应通道</br>
注：每次添加通道后，需重启对应的通道，即禁用通道后再启用</br>
![image.png](https://i.loli.net/2021/01/28/NU7LufC5qkoK6Bw.png)

(5)添加物存储</br>
选择物存储，选择通道</br>
TD resource channel 是将数据存储到数据库的通道
![image.png](https://i.loli.net/2021/01/28/O75R1mwquMdahbE.png)
选择对应通道</br>
注：每次添加通道后，需重启对应的通道，即禁用通道后再启用</br>
![image.png](https://i.loli.net/2021/01/28/2BuJdlyL3m1hpRq.png)

# 二、添加设备
#### 1、顶部导航栏选择设备，点击设备添加；
(1)依次填写名称，设备编号，资产编号，型号，品牌，选择对应的产品等</br>
![image.png](https://i.loli.net/2021/01/28/9Ow3CZBD7l6atxv.png)

