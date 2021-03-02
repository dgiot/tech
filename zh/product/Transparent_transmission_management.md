---
# 这是页面的图标
icon: page
# 这是文章的标题
title: 透传管理
# 设置作者
author: peacefuldeng
# 设置写作时间
time: 2021-01-27
# 一个页面只能有一个分类
category: 使用指南
# 一个页面可以有多个标签
tag:
  - DGIOT
---

## 透传管理介绍
终端设备数据云端中转通过“透传管理”功能实现，结合有人云，可实现两类透传应用：
## 实现“设备”与“软件”（VCOM 或 SDK）间的数据透传
![image](/assets/images/Transparent_transmission_management_1.png)

单台设备数据云端中转，可以直接连接VCOM软件，不用创建透传组策略。
## 实现“设备”与“设备”间的数据透传
![image](/assets/images/Transparent_transmission_management_2.png)
## 如何实现透传
1、添加设备，第一步基本信息，打开“云组态”

![image](/assets/images/Transparent_transmission_management_3.png)

2、添加设备，第二步选择产品，选择“数据透传”，点击“确认添加”，完成设备添加

![image](/assets/images/Transparent_transmission_management_4.png)

3、扩展功能，开通“透传管理”

![image](/assets/images/Transparent_transmission_management_5.png)

4、扩展中心->透传管理->添加透传

![image](/assets/images/Transparent_transmission_management_6.png)

①　选择终端设备

![image](/assets/images/Transparent_transmission_management_7.png)

②　设置透传目标<br>
1、选择 “管理端”

![image](/assets/images/Transparent_transmission_management_8.png)

2、选择“设备端”

![image](/assets/images/Transparent_transmission_management_9.png)

③　透传策略创建成功<br>
1、“管理端”作为透传目标

![image](/assets/images/Transparent_transmission_management_10.png)

2、“设备端”作为透传目标

![image](/assets/images/Transparent_transmission_management_11.png)

④　用有人云账号登录VCOM软件(VCOM串口软件下载)选择已经创建好的透传组策略“边缘端组ID”，通过VCOM软件实现“设备”与“软件”（VCOM 或 SDK）间的数据透传、实现“设备”与“设备”间的数据透传。

![image](/assets/images/Transparent_transmission_management_12.png)

注：只有注册用户、系统用户拥有透传组功能，目前一个用户支持创建30个透传策略。
