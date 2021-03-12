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

物联网平台支持CoAP协议连接通信。CoAP协议适用在资源受限的低功耗设备上，尤其是NB-IoT的设备使用。本文介绍基于CoAP协议进行设备接入的流程，及使用DTLS和对称加密两种认证方式下的自主接入流程。

## 基础流程

基于CoAP协议将NB-IoT设备接入物联网平台的流程如下图所示。![coap](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/4645559951/p110116.png)

  
| 序号 | 描述 |
| --- | --- |
| ① | 在设备端NB-IoT模块中，集成阿里云物联网平台SDK。厂商在物联网平台控制台申请设备证书（ProductKey、DeviceName和DeviceSecret）并烧录到设备中。 |
| ② | NB-IoT设备通过运营商的蜂窝网络进行入网。需要联系当地运营商，确保设备所属地区已经覆盖NB网络，并已具备NB-IoT入网能力。 |
| ③ | 设备入网成功后，NB设备产生的流量数据及产生的费用数据，将由运营商的M2M平台管理。此部分平台能力由运营商提供。 |
| ④ | 设备开发者可通过CoAP/UDP协议，将设备采集的实时数据上报到阿里云物联网平台，借助物联网平台，实现海量亿级设备的安全连接和数据管理能力。并且，可通过规则引擎，将数据转发至阿里云的大数据产品、云数据库、表格存储等服务中进行处理。 |
| ⑤ | 物联网平台提供相关的数据开放接口和消息推送服务，可将数据转发到业务服务器中，实现设备资产与实际应用的快速集成。 |

## 使用对称加密自主接入

1.  连接CoAP服务器。
    
    Endpoint地址：
    
    +   企业版实例的接入域名，请在[物联网平台控制台](https://iot.console.aliyun.com/)，找到对应的实例，单击实例，进入实例详情页面查看。
        
        具体操作，请参见[查看实例终端节点](https://help.aliyun.com/document_detail/147356.htm#section-7lj-bvu-re8)。
        
    +   公共实例的Endpoint地址为`${YourProductKey}.coap.${region}.link.aliyuncs.com:${port}`。
        +   ${YourProductKey}：请替换为设备所属产品的ProductKey。可登录[物联网平台控制台](https://iot.console.aliyun.com/)，在对应实例的设备详情页面获取。
        +   `${region}`：地域代码。各地域代码的表达方法，请参见[地域和可用区](https://help.aliyun.com/document_detail/40654.htm#concept-2459516 "本文提供完整的阿里云地域和可用区列表。")。
        +   `${port}`：端口。使用对称加密时端口为5682。
    
2.  设备认证。
    
    设备认证请求：
    
    ```auto
    POST /auth
    Host: ${YourEndpoint}
    Port: 5682
    Accept: application/json or application/cbor
    Content-Format: application/json or application/cbor
    payload: {"productKey":"a1NUjcV****","deviceName":"ff1a11e7c08d4b3db2b1500d8e0e55","clientId":"a1NUjcV****&ff1a11e7c08d4b3db2b1500d8e0e55","sign":"F9FD53EE0CD010FCA40D14A9FE******", "seq":"10"}
    ```
    
    表 1. 设备认证参数说明  
    | 参数 | 说明 |
    | --- | --- |
    | Method | 请求方法，只支持POST方法。 |
    | URL | URL地址，取值：`/auth`。 |
    | Host | Endpoint地址。 |
    | Port | 端口，取值：`5682`。 |
    | Accept | 设备接收的数据编码方式。目前，支持两种方式：application/json和application/cbor。 |
    | Content-Format | 设备发送给物联网平台的上行数据的编码格式，目前，支持两种方式：application/json和application/cbor。 |
    | payload | 设备认证信息内容，JSON数据格式。具体参数，请参见下表Payload说明。 |
    
    表 2. Payload 说明  
    | 字段名称 | 是否必需 | 说明 |
    | --- | --- | --- |
    | productKey | 是 | 设备证书信息中ProductKey的值，是物联网平台为产品颁发的全局唯一标识。可从物联网平台控制台对应实例下的设备详情页获取。 |
    | deviceName | 是 | 设备证书信息中DeviceName的值，在注册设备时自定义或自动生成的设备名称。可从物联网平台控制台对应实例下的设备详情页获取。 |
    | ackMode | 否 | 通信模式。取值：
    +   0：request/response是携带模式，即客户端发送请求到服务端后，服务端处理完业务，回复业务数据和ACK。
    +   1：request/response是分离模式，即客户端发送请求到服务端后，服务端先回复一个确认ACK，然后再处理业务，回复业务数据。
    
    若不传入此参数，则默认为携带模式。
    
     |
    | sign | 是 | 签名。
    
    您需将根据签名计算方法`signmethod(DeviceSecret,content)`计算出的值，作为sign的值。支持hmacmd5和hmacsha1方法。
    
    签名计算所需参数：
    
    +   signmethod：签名方法，需与您的传入signmethod取值一致。
    +   DeviceSecret：设备的DeviceSecret。可在物联网平台控制台对应实例下的设备详情页查看。
    +   content：是将所有提交给服务器的参数（除version、sign、resources和signmethod外），按照英文字母升序，依次拼接排序（无拼接符号）。
        
        **说明** 用于签名计算的参数值需与设备认证请求中提交的参数值一致。
        
    
    签名计算示例：
    
    ```auto
    hmac_md5(mRPVdzSMu2nVBxzK77ERPIMxSYIv****, clientIda1NUjcV****&ff1a11e7c08d4b3db2b1500d8e0e55deviceNameff1a11e7c08d4b3db2b1500d8e0e55productKeya1NUjcV****seq10timestamp1524448722000)
    ```
    
     |
    | signmethod | 否 | 算法类型，支持hmacmd5和hmacsha1。默认是hmacmd5。 |
    | clientId | 是 | 客户端ID，长度需在64字符内。建议使用设备的MAC地址或SN码作为clientId的值。 |
    | timestamp | 否 | 时间戳。目前，时间戳不做时间窗口校验。 |
    
    返回结果示例：
    
    ```auto
    {"random":"ad2b3a5eb51d6****","seqOffset":1,"token":"MZ8m37hp01w1SSqoDFzo001050****.ad2b"}
    ```
    
    表 3. 返回参数说明  
    | 字段名称 | 说明 |
    | --- | --- |
    | random | 用于后续上、下行加密，组成加密Key。 |
    | seqOffset | 认证seq偏移初始值。 |
    | token | 设备认证成功后，返回的Token值。 |
    
3.  上报数据。
    
    上报数据请求：
    
    ```auto
    POST /topic/${topic}
    Host: ${YourEndpoint}
    Port: 5682
    Accept: application/json or application/cbor
    Content-Format: application/json or application/cbor
    payload: ${your_data}
    CustomOptions: number:2088, 2089
    ```
    
    表 4. 上报数据参数说明  
    | 字段名称 | 是否必需 | 说明 |
    | --- | --- | --- |
    | Method | 是 | 请求方法，只支持POST方法。 |
    | URL | 是 | 传入格式：`/topic/${topic}`。其中，变量${topic}需替换为设备数据上行Topic。 |
    | Host | 是 | Endpoint地址。 |
    | Port | 是 | 端口，取值：`5682`。 |
    | Accept | 是 | 设备接收的数据编码方式。目前，支持两种方式：application/json和application/cbor。 |
    | Content-Format | 是 | 上行数据的编码格式，服务端对此不做校验。目前，支持两种方式：application/json和application/cbor。 |
    | payload | 是 | 待上传的数据经高级加密标准（AES）加密后的数据。
    **说明** AES加密时，Transform为`AES/CBC/PKCS5Padding`， 初始向量IV为`543yhjy97ae7fyfg`，Key由sha256算法生成。
    
    Key生成示例：
    
    假设`deviceSecret=zPwChiLh0EaifR809D5Rc6LDIC6A****`，设备认证返回`random=8fe3c8d50e10****`。
    
    1.  将deviceSecret和random按照`${deviceSecret},${random}`格式组成以下字符串。
        
        ```auto
        zPwChiLh0EaifR809D5Rc6LDIC6A****,8fe3c8d50e10****
        ```
        
    2.  使用sha256对以上字符串的UTF-8编码结果进行加密，并转换为16进制字符串。
        
        ```auto
        59ea5ac1cb092e5910c405821119959e5297516d185b71e344735cf3f268****
        ```
        
    3.  从上一步得到的字符串的第17位开始，截取长度为32位的字符串（subString(16,48)），得到密钥。
        
        ```auto
        10c405821119959e5297516d185b71e3
        ```
        
    
    
    
     |
    | CustomOptions | 是 | option值有`2088`和`2089`两种类型：
    
    +   `2088`：表示token，取值为设备认证后返回的token值。
        
        **说明** 每次上报数据都需要携带token信息。如果token失效，需要重新进行设备认证，获取token。
        
    +   `2089`：表示seq，取值需比设备认证后返回的seqOffset值更大，且在认证生效周期内不重复的随机值。建议设置为根据每次请求数据包中的seq递增值，使用上一栏所介绍的方法进行AES加密填充。
    
    option返回示例：
    
    ```auto
    number:2090
    ```
    
    `2090`：表示云端消息ID。
    
    token和seq除了写在options中，还可以写在URL中，例如`/topic/${topic}?token=xxxx&seq=xxxxx`。如果同时存在于options和URL中，以options为准。
    
     |
    
    消息上行成功后，返回成功状态码，同时返回物联网平台生成的消息ID。
    

## 使用DTLS自主接入

1.  连接CoAP服务器。
    
    Endpoint地址：
    
    +   企业版实例的接入域名，请在[物联网平台控制台](https://iot.console.aliyun.com/)，找到对应的实例，单击实例，进入实例详情页面查看。
        
        具体操作，请参见[查看实例终端节点](https://help.aliyun.com/document_detail/147356.htm#section-7lj-bvu-re8)。
        
    +   华东2（上海）地域，公共实例的Endpoint地址为`${YourProductKey}.coap.${region}.link.aliyuncs.com:${port}`。
        +   ${YourProductKey}：请替换为设备所属产品的ProductKey。可登录[物联网平台控制台](https://iot.console.aliyun.com/)，在对应实例的设备详情页面获取。
        +   `${region}`：地域代码。各地域代码的表达方法，请参见[地域和可用区](https://help.aliyun.com/document_detail/40654.htm#concept-2459516 "本文提供完整的阿里云地域和可用区列表。")。
        +   ${port}：端口。使用DTLS时，端口为5684。
    
2.  如果您使用阿里云提供的[设备端SDK](https://help.aliyun.com/document_detail/42648.htm#concept-jlk-mjl-vdb "物联网平台提供各类设备端SDK，简化开发过程，使设备快速上云。")，则DTLS安全通道默认使用PSK加密算法。
    
    如果您未使用阿里云提供的设备端SDK，则需要[下载DTLS安全通道根证书](https://aliyun-iot.oss-cn-hangzhou.aliyuncs.com/cert_pub/root.crt?spm=5176.doc30539.2.1.1MRvV5&file=root.crt)，自行使用DTLS库连接物联网平台，PSK对应的加密方式如下：
    
    ```auto
    psk_id: "${authType}" + "|" + "${signMethod}" + "|" + "${productKey}" + "&" + "${deviceName}" + "timestamp"
    psk: signMethod(DeviceSecret, "${productKey}" + "&" + "${deviceName}" + "${timestamp}")
    ```
    
    表 5. 字段说明  
    | 字段 | 是否必需 | 说明 |
    | --- | --- | --- |
    | authType | 是 | 认证类型，这里设为固定值：devicename。 |
    | signMethod | 是 | 算法类型，支持hmacmd5、hmacsha1、hmacsha256。 |
    | productKey | 是 | 设备所属产品的ProductKey。 |
    | deviceName | 是 | 设备名称，DeviceName。 |
    | DeviceSecret | 是 | 设备的DeviceSecret |
    | timestamp | 是 | 时间戳。 |
    
3.  设备认证。使用auth接口认证设备，获取Token。上报数据时，需携带Token信息。
    
    设备认证请求：
    
    ```auto
    POST /auth
    Host: ${YourEndpoint}
    Port: 5684
    Accept: application/json or application/cbor
    Content-Format: application/json or application/cbor
    payload: {"productKey":"ZG1EvTE****","deviceName":"NlwaSPXsCpTQuh8FxBGH","clientId":"mylight1000002","sign":"bccb3d2618afe74b3eab12b94042****"}
    ```
    
    除 Port参数外，其他参数及Payload内容说明，可参见。
    
    返回结果示例：
    
    ```auto
    response：{"token":"f13102810756432e85dfd351eeb4****"}
    ```
    
    表 6. 返回码说明  
    | Code | 描述 | Payload | 备注 |
    | --- | --- | --- | --- |
    | 2.05 | Content | 认证通过：Token对象 | 正确请求。 |
    | 4.00 | Bad Request | no payload | 请求发送的Payload非法。 |
    | 4.01 | Unauthorized | no payload | 未授权的请求。 |
    | 4.03 | Forbidden | no payload | 禁止的请求。 |
    | 4.04 | Not Found | no payload | 请求的路径不存在。 |
    | 4.05 | Method Not Allowed | no payload | 请求方法不是指定值。 |
    | 4.06 | Not Acceptable | no payload | Accept不是指定的类型。 |
    | 4.15 | Unsupported Content-Format | no payload | 请求的content不是指定类型。 |
    | 5.00 | Internal Server Error | no payload | auth服务器超时或错误。 |
    
4.  上行数据。
    
    设备通过指定自定义Topic将数据发送到云端
    
    自定义Topic，在物联网平台的控制台，设备所属产品的产品详情页的Topic类列表中进行创建。仅支持发布权限的Topic用于数据上报。
    
    例如：Topic为`/${YourProductKey}/${YourDeviceName}/pub`，假设当前设备名称为device，所属产品的ProductKey为a1GFjLP\*\*\*\*，那么您可使用 `a1GFjLP****.coap.cn-shanghai.link.aliyuncs.com:5684/topic/a1GFjLP****/device/pub` 地址来上报数据。
    
    上报数据请求：
    
    ```auto
    POST /topic/${topic}
    Host: ${YourEndpoint}
    Port: 5684
    Accept: application/json or application/cbor
    Content-Format: application/json or application/cbor
    payload: ${your_data}
    CustomOptions: number:2088
    ```
    
   表 7. 上报数据请求参数说明  
   
   | 参数 | 是否必需 | 说明 |
   | --- | --- | --- |
   | Method | 是 | 请求方法。支持POST方法。 |
   | URL | 是 | `/topic/${topic}`。其中，变量`${topic}`需替换为当前设备对应的Topic。 |
   | Host | 是 | Endpoint地址。 |
   | Port | 是 | 端口，取值：`5684`。 |
   | Accept | 是 | 设备接收的数据编码方式。目前，支持两种方式：application/json和application/cbor。 |
   | Content-Format | 是 | 上行数据的编码格式，服务端对此不做校验。目前，支持两种方式：application/json和application/cbor。 |
   | CustomOptions | 是 | 
   
   +   number取值：`2088`。
   +   token为设备认证（auth）返回的token值。
    
    **说明** 每次上报数据都需要携带token信息。如果token失效，需要重新进行设备认证，获取token。
    
    
    
    |
    

## 示例

设备通过CoAP协议接入物联网平台的示例，请参见[CoAP客户端对称加密接入示例](https://help.aliyun.com/document_detail/148620.htm#concept-2378835 "本文提供设备通过CoAP协议接入物联网平台的示例代码。")。
