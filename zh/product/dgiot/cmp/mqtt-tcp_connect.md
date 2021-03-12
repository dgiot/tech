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

本文主要介绍基于TCP的MQTT连接，连接方式为MQTT客户端直连。

## 背景信息

在进行MQTT CONNECT协议设置时，需注意：

+   如果同一个设备证书（ProductKey、DeviceName和DeviceSecret）或同一组ProductKey、DeviceName、ClientID、DeviceToken同时用于多个物理设备连接，可能会导致客户端频繁上下线。因为新设备连接认证时，原设备会被迫下线，而设备被下线后，又会自动尝试重新连接。
+   MQTT连接模式中，设备端[Link SDK](https://help.aliyun.com/product/93051.html)断开后会自动重连。您可以通过日志服务查看设备行为。

## MQTT客户端直连

1.  （可选）为保障通信安全，推荐使用TLS加密的连接方式。
    
    +   设备端Link SDK已配置TLS加密，您无需自行配置。
    +   若您自行开发设备端SDK，需要[下载根证书](https://aliyun-iot.oss-cn-hangzhou.aliyuncs.com/cert_pub/root.crt)。根证书使用方法，请参见[mbed TLS](https://tls.mbed.org/kb/how-to/mbedtls-tutorial)。
    
2.  使用MQTT客户端连接服务器。连接方法，请参见[开源MQTT客户端](https://github.com/mqtt/mqtt.github.io/wiki/libraries)。
3.  MQTT连接。
    
    建议您使用设备端SDK接入物联网平台。如果您自行开发接入，连接参数如下。
    
    <table class="table" id="table-eif-fcq-p6f"><caption></caption><colgroup><col> <col> </colgroup><tbody class="tbody" id="tbody-g1c-m5u-nsw"><tr id="row-0b6-lcz-teo"><td class="entry align-left colsep-1 rowsep-1" id="entry-kw3-s0l-rw8">接入域名</td><td class="entry align-left colsep-1 rowsep-1" id="entry-j50-ijs-a42"><ul class="ul" id="ul-tpi-w08-3ch"><li class="li" cond-props="china" id="li-nor-6b7-6x8"><span class="ph" cond-props="china" id="d7e51">企业版实例的接入域名，请在<span><a href="https://iot.console.aliyun.com/" target="_blank">物联网平台控制台</a></span>，找到对应的实例，单击实例，进入<span class="keyword wintitle" id="d7e56">实例详情</span>页面查看。</span><p class="p" cond-props="china" id="d7e59">具体操作，请参见<span><a title="" href="https://help.aliyun.com/document_detail/147356.htm#section-7lj-bvu-re8">查看实例终端节点</a></span>。</p></li><li class="li" cond-platform="SBKKlimitout" id="li-izw-1n3-ut0">公共实例的接入域名：<code class="ph codeph" id="codeph-xxx-ujm-63c">${YourProductKey}.iot-as-mqtt.${YourRegionId}.aliyuncs.com:1883</code>。 其中：<ul class="ul" id="ul-z99-g2u-6ii"><li class="li" id="li-aiv-c4j-d7d"><var class="keyword varname" id="d7e64">${YourProductKey}</var>：请替换为设备所属产品的ProductKey。<span class="ph" cond-props="china" id="d7e67">可登录<span><a href="https://iot.console.aliyun.com/" target="_blank">物联网平台控制台</a></span>，在对应实例的<span class="keyword wintitle" id="d7e72">设备详情</span>页面获取。</span></li><li class="li" id="li-nba-wnf-19d"><var class="keyword varname" id="varname-er2-bxv-0a9">${YourRegionId}</var>：<span class="ph" id="ph-snt-7om-sjk">请替换为您的物联网平台设备所在地域代码。地域代码表达方法，请参见<span><a title="本文提供完整的阿里云地域和可用区列表。" href="https://help.aliyun.com/document_detail/40654.htm#concept-2459516">地域和可用区</a></span>。</span></li></ul></li></ul></td></tr><tr id="row-gqj-wp3-5c8"><td class="entry align-left colsep-1 rowsep-1" id="entry-a0x-vzr-1yx">可变报头（variable header）：Keep Alive</td><td class="entry align-left colsep-1 rowsep-1" id="entry-m37-t0w-a5h">CONNECT指令中需包含Keep Alive（保活时间）。保活心跳时间取值范围为30秒~1200秒，建议取值300秒以上。若网络不稳定，请将心跳时间设置长一些。如果心跳时间不在保活时间内，物联网平台会拒绝连接。<p class="p" id="p-cem-pmy-npk">更多说明，请参见下文<span><a title="" href="#section-llx-5ay-oma">MQTT保活</a></span>。</p></td></tr><tr id="row-f01-3ch-7qc"><td class="entry align-left colsep-1 rowsep-1" id="entry-ctt-2hj-a1k">MQTT的CONNECT报文参数</td><td class="entry align-left colsep-1 rowsep-1" id="entry-thr-6kx-xxk"><ul class="ul" id="ul-107-yu5-py3"><li class="li" id="li-7nf-lhl-1vl">一机一密、一型一密预注册认证方式：使用设备证书（ProductKey、DeviceName和DeviceSecret）连接。<pre class="pre codeblock" id="codeblock-789-ir2-ves"><code>mqttClientId: clientId+"|securemode=3,signmethod=hmacsha1,timestamp=132323232|"
    mqttUsername: deviceName+"&amp;"+productKey
    mqttPassword: sign_hmac(deviceSecret,content)</code></pre><ul class="ul" id="ul-dtc-0dm-khd"><li class="li" id="li-wdr-lmi-uhu"><span class="keyword parmname" id="parmname-b15-df9-us3">mqttClientId</span>：格式中<code class="ph codeph" id="codeph-e38-11x-r50">| |</code>内为扩展参数。</li><li class="li" id="li-vdm-fud-b63"><span class="keyword parmname" id="parmname-0s8-9xs-gtr">clientId</span>：表示客户端ID，可自定义，长度不可超过64个字符。建议使用设备的MAC地址或SN码，方便您识别区分不同的客户端。</li><li class="li" id="li-5zh-nry-2xq"><span class="keyword parmname" id="parmname-861-kcd-w2i">securemode</span>：表示目前安全模式，可选值有2（TLS直连模式）和3（TCP直连模式）。</li><li class="li" id="li-8w1-gon-l2q"><span class="keyword parmname" id="parmname-n0k-why-g26">signmethod</span>：表示签名算法类型。支持hmacmd5，hmacsha1和hmacsha256，默认为hmacmd5。</li><li class="li" id="li-zpd-pq4-p9y"><span class="keyword parmname" id="parmname-d0k-z7h-3m3">timestamp</span>：表示当前时间毫秒值，可以不传递。</li><li class="li" id="li-a8l-fm5-guo"><span class="keyword parmname" id="parmname-py3-bze-rex">mqttPassword</span>：sign签名需把提交给服务器的参数按字典排序后，根据signmethod加签。签名计算示例，请参见<span><a title="若您不使用阿里云提供的设备端SDK，而是使用其他方式，自己进行开发使您的设备使用MQTT协议与物联网平台连接，您可以参见本文提供的签名代码示例进行MQTT连接签名。" href="https://help.aliyun.com/document_detail/116333.htm#concept-188639">MQTT连接签名示例</a></span>。</li><li class="li" id="li-6fg-e6v-kkq"><span class="keyword parmname" id="parmname-v0k-n4g-loe">content</span>的值为提交给服务器的参数（<span class="keyword parmname" id="parmname-dmd-63i-8rs">ProductKey</span>、<span class="keyword parmname" id="parmname-iyg-6yn-znd">DeviceName</span>、<span class="keyword parmname" id="parmname-kmx-zot-9sf">timestamp</span>和<span class="keyword parmname" id="parmname-zej-r5g-smw">clientId</span>），按照字母顺序排序， 然后将参数值依次拼接。</li></ul><p class="p" id="p-01h-535-ms9">示例：</p><p class="p" id="p-m03-2qn-cwn">假设<code class="ph codeph" id="codeph-mmo-hzq-r7o">clientId = 12345，deviceName = device， productKey = pk， timestamp = 789，signmethod=hmacsha1，deviceSecret=secret</code>，那么使用TCP方式提交给MQTT的参数如下：</p><pre class="pre codeblock" id="codeblock-b5w-3oi-780"><code>mqttclientId=12345|securemode=3,signmethod=hmacsha1,timestamp=789|
    mqttUsername=device&amp;pk
    mqttPassword=hmacsha1("secret","clientId12345deviceNamedeviceproductKeypktimestamp789").toHexString(); </code></pre><p class="p" id="p-3a0-gd4-u0a">加密后的Password为二进制转16制字符串，示例结果为：</p><pre class="pre codeblock" id="codeblock-a8h-bhp-17s"><code>FAFD82A3D602B37FB0FA8B7892F24A477F85****</code></pre></li><li class="li" id="li-f5h-xfu-yhs">一型一密免预注册认证方式：使用ProductKey、DeviceName、ClientID、DeviceToken连接。<pre class="pre codeblock" id="codeblock-vo1-m5i-7jh"><code>mqttClientId: clientId+"|securemode=-2,authType=connwl|"
    mqttUsername: deviceName+"&amp;"+productKey
    mqttPassword: deviceToken</code></pre><ul class="ul" id="ul-n2p-tzi-y37"><li class="li" id="li-2lw-n8e-4yb"><span class="keyword parmname" id="parmname-epf-w44-ear">mqttClientId</span>：格式中<code class="ph codeph" id="codeph-w8k-o4n-t8n">| |</code>内为扩展参数。</li><li class="li" id="li-o7y-rxa-jsa"><span class="keyword parmname" id="parmname-ekl-dem-bvd">clientId</span>、<span class="keyword parmname" id="parmname-lwi-g9i-3a3">deviceToken</span>：设备动态注册时获得的ClientID、DeviceToken，请参见<span><a title="直连设备可通过MQTT通道进行动态注册，即使用一型一密连接认证方式连接物联网平台。设备先基于TLS建立与物联网平台的连接，获取TCP连接所需信息，再断开连接，并重新建立TCP连接进行通信。下面介绍动态注册流程。" href="https://help.aliyun.com/document_detail/132111.htm#task-1545804">基于MQTT通道的设备动态注册</a></span>。</li><li class="li" id="li-vte-26g-8l2"><span class="keyword parmname" id="parmname-n9m-qss-5i3">securemode</span>：表示目前安全模式，采用一型一密免预注册时，固定取值为-2。</li><li class="li" id="li-5i8-ahk-n0k"><span class="keyword parmname" id="parmname-h42-614-su2">authType</span>：表示认证方式，采用一型一密免预注册时，固定取值为connwl。</li></ul></li></ul></td></tr></tbody></table>
    

## 示例

使用开源MQTT客户端接入物联网平台的示例，请参见：

+   [Paho-MQTT Go接入示例](https://help.aliyun.com/document_detail/146503.htm#task-2359926 "本示例介绍如何调用Go语言的Paho MQTT类库连接阿里云物联网平台，并进行消息收发。")
+   [Paho-MQTT C#接入示例](https://help.aliyun.com/document_detail/146505.htm#task-2360906 "本文档介绍如何使用C#语言的Paho MQTT类库接入阿里云物联网平台，并进行物模型数据通信。")
+   [Paho-MQTT C接入示例](https://help.aliyun.com/document_detail/146611.htm#task-2361871 "本文介绍如何使用Paho提供的嵌入式C语言MQTT开源工程接入阿里云物联网平台，并进行消息收发。")
+   [Paho-MQTT Java接入示例](https://help.aliyun.com/document_detail/146631.htm#task-2362406 "本文档介绍如何使用Java语言的Paho MQTT库接入阿里云物联网平台，并进行物模型消息通信。")
+   [Paho-MQTT Android接入示例](https://help.aliyun.com/document_detail/146630.htm#task-2362441 "本文介绍如何使用Paho Android Service接入阿里云物联网平台，并进行数据收发。")

## MQTT保活

设备端在保活时间间隔内，至少需要发送一次报文，包括ping请求。

连接保活时间的取值范围为30秒~1200秒。建议取值300秒以上。

从物联网平台发送CONNACK响应CONNECT消息时，开始心跳计时。收到PUBLISH、SUBSCRIBE、PING或 PUBACK消息时，会重置计时器。超过指定1.5倍心跳时间未收到消息（指定心跳时间乘以1.5），服务器将自动断开连接。
