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

在物联网平台为产品开启动态注册功能后，直连设备可使用一型一密安全认证方式完成动态注册，通过MQTT通信协议连接物联网平台。设备先基于TLS建立与物联网平台的连接，获取MQTT连接所需的设备密钥，再断开连接，然后重新建立MQTT连接进行通信。本文介绍动态注册流程。

## 前提条件

已完成[一型一密文档](https://help.aliyun.com/document_detail/74006.htm#task-m1l-zqq-wfb "一型一密认证方式下，同一产品下所有设备可以烧录相同固件，包含相同的产品证书（ProductKey和ProductSecret）。设备发送激活请求时，物联网平台进行身份确认，认证通过，下发设备接入所需信息。")中的以下步骤：

**注意** 目前仅华东2（上海）地域支持设备进行一型一密免预注册认证。

1.  创建产品。
2.  开启动态注册。
3.  添加设备。
4.  产线烧录。

## 动态注册流程

![流程](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/2645559951/p146802.png)

1.  设备发送CONNECT报文，报文中包含动态注册参数，请求建立连接。
    
    **说明** 目前，动态注册只支持使用TLS建立连接，不支持TCP直连。动态注册时，云端不会校验MQTT连接的Keep Alive（保活时间），因此可以不用设置Keep Alive时间。
    
    +   MQTT连接域名说明：
        +   企业版实例：请在[物联网平台控制台](https://iot.console.aliyun.com/)，找到对应的实例，单击实例，进入实例详情页面查看。
            
            具体操作，请参见[查看实例终端节点](https://help.aliyun.com/document_detail/147356.htm#section-7lj-bvu-re8)。
            
        +   公共实例：格式为`${YourProductKey}.iot-as-mqtt.${YourRegionId}.aliyuncs.com:1883`。
            
            其中：
            
            +   ${YourProductKey}：请替换为设备所属产品的ProductKey。可登录[物联网平台控制台](https://iot.console.aliyun.com/)，在对应实例的设备详情页面获取。
            +   ${YourRegionId}：请替换为您的物联网平台设备所在地域代码。地域代码表达方法，请参见[地域和可用区](https://help.aliyun.com/document_detail/40654.htm#concept-2459516 "本文提供完整的阿里云地域和可用区列表。")。
                
                **说明** 若直连设备使用一型一密免预注册认证方式，则${YourRegionId}值为`cn-shanghai`。
                
    +   CONNECT报文的动态注册参数：
        
        +   当设备属于企业版实例，且使用[一型一密](https://help.aliyun.com/document_detail/74006.htm#task-m1l-zqq-wfb "一型一密认证方式下，同一产品下所有设备可以烧录相同固件，包含相同的产品证书（ProductKey和ProductSecret）。设备发送激活请求时，物联网平台进行身份确认，认证通过，下发设备接入所需信息。")免预注册认证方式时，动态注册参数如下：
            
            ```auto
            mqttClientId: clientId+"|securemode=-2,authType=xxxx,random=xxxx,signmethod=xxxx,instanceId=xxxx|"
            mqttUserName: deviceName+"&"+productKey
            mqttPassword: sign_hmac(productSecret,content) 
            ```
            
        +   当设备属于公共实例，或使用[一型一密](https://help.aliyun.com/document_detail/74006.htm#task-m1l-zqq-wfb "一型一密认证方式下，同一产品下所有设备可以烧录相同固件，包含相同的产品证书（ProductKey和ProductSecret）。设备发送激活请求时，物联网平台进行身份确认，认证通过，下发设备接入所需信息。")预注册认证方式时，动态注册参数如下：
            
            ```auto
            mqttClientId: clientId+"|securemode=2,authType=xxxx,random=xxxx,signmethod=xxxx|"
            mqttUserName: deviceName+"&"+productKey
            mqttPassword: sign_hmac(productSecret,content) 
            ```
            
        
        参数说明：
        
   +   mqttClientId
            
            参数取值中包含的详细参数如下表所示。
            
  
| 参数 | 说明 |
| --- | --- |
| clientId | 客户端ID，可自定义，长度在64个字符内。建议使用设备的MAC地址或SN码，方便您识别区分不同的客户端。 |
| securemode | 安全模式。<br> *    [一型一密](https://help.aliyun.com/document_detail/74006.htm#task-m1l-zqq-wfb "一型一密认证方式下，同一产品下所有设备可以烧录相同固件，包含相同的产品证书（ProductKey和ProductSecret）。设备发送激活请求时，物联网平台进行身份确认，认证通过，下发设备接入所需信息。")预注册认证方式：固定取值为2。 <br> *   [一型一密](https://help.aliyun.com/document_detail/74006.htm#task-m1l-zqq-wfb "一型一密认证方式下，同一产品下所有设备可以烧录相同固件，包含相同的产品证书（ProductKey和ProductSecret）。设备发送激活请求时，物联网平台进行身份确认，认证通过，下发设备接入所需信息。")免预注册认证方式：固定取值为-2。|
| authType | 一型一密认证方式，不同类型将返回不同的认证参数： <br> *   register：[一型一密](https://help.aliyun.com/document_detail/74006.htm#task-m1l-zqq-wfb "一型一密认证方式下，同一产品下所有设备可以烧录相同固件，包含相同的产品证书（ProductKey和ProductSecret）。设备发送激活请求时，物联网平台进行身份确认，认证通过，下发设备接入所需信息。")预注册认证方式，返回DeviceSecret。 <br> *   regnwl：[一型一密](https://help.aliyun.com/document_detail/74006.htm#task-m1l-zqq-wfb "一型一密认证方式下，同一产品下所有设备可以烧录相同固件，包含相同的产品证书（ProductKey和ProductSecret）。设备发送激活请求时，物联网平台进行身份确认，认证通过，下发设备接入所需信息。")免预注册认证方式，返回DeviceToken、ClientID。  |
| random | 随机数。您自定义随机数。 |
| signMethod | 签名算法。目前支持hmacmd5、hmacsha1、hmacsha256。 |
| instanceId | 实例ID。请登录[物联网平台控制台](http://iot.console.aliyun.com/)，在实例概览页面查看。 |

            
   +   mqttUserName
            
            组成结构：`deviceName+"&"+productKey`
            
            示例：`device1&al123456789`
            
   +   mqttPassword
            
            计算方法：`sign_hmac(productSecret,content)`
            
            其中，content的值是提交给服务器的必需参数和值（deviceName、productKey、random）按照字母顺序排序、拼接（无拼接符号）的字符串。然后，将content的值通过mqttClientId中的signMethod指定的算法，使用产品的ProductSecret进行签名计算。
            
            示例：`hmac_sha1(h1nQFYPZS0mW****, deviceNamedevice1productKeyal123456789random123)`
            
    
2.  物联网平台返回CONNECT ACK。
    
    +   返回0，表示设备动态注册成功。
    +   返回其他值，表示设备动态注册失败。请根据返回的错误码，确定错误原因。
    
    设备发送连接请求后，物联网平台返回的结果状态码和说明如下表。
    
      
| 结果码 | 消息 | 说明 |
| --- | --- | --- |
| 0 | CONNECTION\_ACCEPTED | 动态注册成功。 |
| 2 | IDENTIFIER\_REJECTED | 参数错误。原因可能是： <br> *   必填参数缺失或格式错误。<br> * +   您使用了TCP直连注册。动态注册只能使用TLS通道。|
| 3 | SERVER\_UNAVAILABLE | 云端错误。请稍后再试。 |
| 4 | BAD\_USERNAME\_OR\_PASSWORD | 动态注册失败，鉴权未通过。<br> * 请检查传入的mqttUserName和mqttPassword取值是否正确。|

    
3.  建立连接后，物联网平台使用Topic：`/ext/register`，根据CONNECT报文中的authType，返回不同的认证参数。
    
    +   authType取值为register：一型一密预注册认证方式，返回DeviceSecret。
        
        物联网平台推送的消息Payload格式如下：
        
        ```auto
        {
          "productKey" : "***",
          "deviceName" : "***",
          "deviceSecret" : "***"
        }
        ```
        
    +   authType取值为regnwl：一型一密免预注册认证方式，返回ClientID、DeviceToken。
        
        物联网平台推送的消息Payload格式如下：
        
        ```auto
        {
          "productKey" : "***",
          "deviceName" : "***",
          "clientId" : "***",
          "deviceToken" : "***"
        }
        ```
        
    
4.  设备收到并保存DeviceSecret，或ClientID和DeviceToken的组合，断开当前MQTT连接。
    
    设备可以通过发送DISCONNECT报文或直接断开TCP连接，断开当前连接。
    
    如果设备未断开此连接，15秒之后，物联网平台会主动断开连接。
    
    如果您使用Eclipse Paho MQTT客户端，需设置`MqttConnectOptions.setAutomaticReconnect(false)`关闭自动重连。否则，注册成功且TCP断连后，重连逻辑会发起新的动态注册请求。
    
5.  设备使用DeviceSecret，或使用ClientID和DeviceToken的组合，再次发起MQTT连接请求，建立设备与物联网平台的连接，进行消息通信。具体操作，请参见[MQTT-TCP连接通信](https://help.aliyun.com/document_detail/73742.htm#concept-mhv-ghm-b2b "本文主要介绍基于TCP的MQTT连接，连接方式为MQTT客户端直连。")。
