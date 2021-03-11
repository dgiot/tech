本方案不在设备上烧录设备证书，而是设备上电联网后，向您的服务器发起请求，获取设备证书（ProductKey、DeviceName和DeviceSecret）。

## 原理

本方案中，您需要部署自己的设备证书分发服务器，开发相应的服务器API和设备信息数据表。

证书分发服务器收到来自设备的获取证书请求时，调用上述API。该API的业务逻辑为：根据请求中的设备标识查询设备信息数据表，根据查询结果，进行以下后续操作。

+   没有查到传入的设备标识，则返回设备非法错误。
+   有对应的设备标识，且已有设备证书，则返回设备证书。
+   有对应的设备标识，但没有设备证书，则调用物联网平台API [RegisterDevice](https://www.alibabacloud.com/help/zh/doc-detail/69470.htm#doc-api-Iot-RegisterDevice "调用该接口在指定产品下注册设备。")注册设备身份，获取证书后，再发送给设备。

设备获得证书之后，再使用该证书连接阿里云物联网平台。

参与该过程的各个角色的时序图如下所示。

![设备获取证书过程](https://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/5492642951/p97200.jpg)

**说明**

+   设备需要能自动获取IP地址，并连接您的证书分发服务器。
+   证书分发服务器由您自行设计实现。
+   您需要确保设备连接到证书分发服务器的安全性和可靠性。

## 服务器API设计建议

建议您按以下方法设计该API。

+   请求参数：

| 参数 | 说明 |
| --- | --- |
| deviceId | 设备在您的系统中的唯一标识。自定义，可以是设备MAC或者SN等。 |

+   返回参数：

| 参数 | 说明 |
| --- | --- |
| productKey | 对应物联网平台颁发的设备证书的ProductKey。 |
| deviceName | 对应物联网平台颁发的设备证书的DeviceName。 |
| deviceSecret | 对应物联网平台颁发的设备证书的DeviceSecret。 |

## 设备信息数据表设计建议

建议您按以下方法设计设备信息数据表。

表格属性：

| 表格属性 | 建议取值 |
| --- | --- |
| 数据表名称 | device\_table |
| 数据生命周期 | \-1 |
| 最大数据版本 | 1 |
| 数据有效版本偏差 | 86400 |
| 主键 | deviceId，字符串（String） ，分区键。 |

数据字段：

| 字段 | 说明 |
| --- | --- |
| deviceId | 设备唯一标识。自定义，可以是设备MAC或者SN等。 |
| registerTime | 设备注册时间。 |
| activateTime | 设备激活时间。 |
| productKey | 对应物联网平台颁发的设备证书的ProductKey。 |
| deviceName | 对应物联网平台颁发的设备证书的DeviceName。 |
| deviceSecret | 对应物联网平台颁发的设备证书的DeviceSecret。 |
| IotId | 物联网平台为该设备颁发的设备ID，该设备在物联网平台上的唯一标识。 |
