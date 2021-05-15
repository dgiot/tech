---
# 编写日期
date: 2020-02-07 17:15:26
# 作者 Github 名称
author: jhonliu
# 关键字
keywords:
# 描述
description:
# 分类
category: 
# 引用
ref:
---

# 产品管理

产品是设备的集合，通常是一组具有相同功能定义的设备集合。例如，产品指同一个型号的产品，设备就是该型号下的某个设备。

因此，使用物联网平台的第一步是在产品管理控制台创建产品。

## 操作简述

1.进入[产品管理控制台](http://prod.iotn2n.com/#/dashboard/productlist)

2.在我的产品页面，找到对应的创建产品按钮，单击创建产品按钮进入创建产品详情页面。

![创建产品.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/product/dgiot/product_presentation/%E5%88%9B%E5%BB%BA%E4%BA%A7%E5%93%81.png)

![创建产品详细参数.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/product/dgiot/product_presentation/%E5%88%9B%E5%BB%BA%E4%BA%A7%E5%93%81%E8%AF%A6%E7%BB%86%E5%8F%82%E6%95%B0.png)

按照页面提示填写信息，然后单击确认。

|参数|描述|
|---|---|  
|产品名称|为产品命名，产品名称在账号内具有唯一性|
|产品分组|产品标识，用于区分不同设备|
|所属分类|该产品的类型|
|所属应用|拥有该产品的角色|
|节点类型|产品下设备的类型，分为设备和网关|
|连网方式|直连设备和网关设备的连网方式|
|产品描述|可输入文字，用来描述产品信息|

## 后续操作
在“产品管理”控制台下，可以进行产品开发，设备管理等操作。
- 产品管理

选择“产品管理”，在产品列表,操作栏中，单击“配置”，进入“产品详情”页。单击相应页签，查看产品信息、Topic类列表，设置自定义Topic、物模型、物解析、物接入、物存储等。
![product_manage3.png](https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/meter/product_manage3.png)

![product_manage4.png](https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/meter/product_manage4.png)

- 设备管理
单击产品详情页的设备开发页签，跟随界面提示进行设备创建、功能开发、连接验证，完成设备开发，接入物联网平台。
## 添加物模型
+ 自定义属性添加
![product_manage5.png](https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/meter/product_manage5.png)
填写名称，标识符，取值范围，数据类型，单位等值
![product_manage6.png](https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/meter/product_manage6.png)

其中各项含义见下表

|名称|含义|
|----|----|
|功能名称|物模型的作用，实现的功能|
|标识符|唯一识别物模型，一般用功能名称的英文翻译|
|取值范围（数值）|物模型的取值范围|
|步长|即step，物模型取值依次增长的幅度|
|读写类型|读写：文档或属性既能读取，也能修改 只读：又称唯读，表示文档或属性只能读取，不能修改也不能存储。|
|数据类型|物模型的数据类型，可选择|
|采集公式|我们需要的数据与采集的数据之间的数学关系式 %q：数据标识第二个空里面的数据 %s：采集到的数据 %r：采集的轮次|
|控制公式|控制数据采集的次数或满足特殊的采集需求（true为1，false为大于1的其他数字）|
|数据标识第一个空|address地址值。如果是modbus协议，则数据标识表示传感器的寄存器地址。 否则用唯一数字字母组合标识即可。相应传感器说明手册可查。|
|数据标识第二个空|即%q。如果读写类型选的只读，则此处填字节数。 如果读写类型选的读写，用于modbus协议，表示参数地址，或模拟量的功能码。相应传感器说明手册可查。进制，十进制。|
|协议类型|我们可以选择modbus协议，否则就是normal|
|字节序|大端：高位字节排放在内存的低地址端，低位字节排放在内存的高地址端。 小端：低位字节排放在内存的低地址端，高位字节排放在内存的高地址端。|
|寄存器状态|线圈状态：读从机离散量输出口的ON/OFF状态。 <br>读输入状态：读从机离散量输入信号的ON/OFF状态。  <br>保持寄存器：可以通过通信命令读或者写的寄存器  <br>输入寄存器：只能读不能写的寄存器|
|从机地址|从机的address，用于modbus通讯。相应传感器说明手册可查。进制：十进制|

+ 标准属性的添加

点击“新增标准属性”
![product_manage7.png](https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/meter/product_manage7.png)
![product_manage8.png](https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/meter/product_manage8.png)
自动添加相关属性
![product_manage9.png](https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/meter/product_manage9.png)

+ 添加物接入

选择物接入，选择通道<br>
注：每次添加通道后，需重启对应的通道，即禁用通道后再启用
![product_manage10.png](https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/meter/product_manage10.png)
![product_manage11.png](https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/meter/product_manage11.png)

+ 物存储
选择物存储，选择通道<br>
注：每次添加通道后，需重启对应的通道，即禁用通道后再启用
![product_manage12.png](https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/meter/product_manage12.png)

