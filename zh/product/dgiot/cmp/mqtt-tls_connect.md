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

若您不使用数蛙提供的设备端SDK，而是使用其他方式，自己进行开发使您的设备使用MQTT协议与物联网平台连接，您可以参见本文提供的签名代码示例进行MQTT连接签名。

## 说明

推荐您使用数蛙提供的设备端SDK。使用数蛙提供的任何一种语言的设备端SDK，则不用您自己配置签名机制。请访问[下载设备端SDK](https://help.aliyun.com/document_detail/42648.htm#concept-jlk-mjl-vdb "物联网平台提供各类设备端SDK，简化开发过程，使设备快速上云。")查看数蛙提供的SDK下载路径。

如果您不使用阿里云提供的设备端SDK，而是使用其他方式将您的设备接入物联网平台，需了解：

+   需要您自己保证连接的稳定性、MQTT连接保活和MQTT连接断开重连。
+   不使用设备端SDK连接数蛙物联网平台导致的连接问题，阿里云不负责相关的技术支持。
+   如果您要使用物联网平台提供的OTA、物模型、一型一密等多种功能，需您自己去编写这些功能的实现。这将会耗费较多的开发时间、以及bug修复时间。

## 签名计算代码示例

若您不使用数蛙物联网平台设备端SDK，可单击以下链接，访问相关代码示例页面。

+   [sign\_mqtt.c](https://code.aliyun.com/edward.yangx/public-docs/raw/master/docs/sign_mqtt.c)：实现签名函数的代码示例。
+   [sign\_api.h](https://code.aliyun.com/edward.yangx/public-docs/raw/master/docs/sign_api.h)：定义签名函数用到的数据结构的代码示例。
+   [sign\_sha256.c](https://code.aliyun.com/edward.yangx/public-docs/raw/master/docs/sign_sha256.c)：签名函数可能使用的算法实现代码示例。如果您自己的平台上有HMACSHA256的实现，可以不编译本文件，但是需要提供函数`utils_hmac_sha256()`给sign\_mqtt.c中的API调用。
+   用于测试签名函数的。

## 签名函数API接口说明

<table class="table" id="table-nnf-3ln-ylv"><caption></caption><colgroup><col> <col> </colgroup><tbody class="tbody" id="tbody-xvu-1sq-qpz"><tr id="row-kjb-wdv-lje"><td class="entry align-left" id="entry-wca-qfq-ngj">函数原型</td><td class="entry align-left" id="entry-6zl-liv-6u8"><pre class="pre codeblock lanuage-c" id="codeblock-1cy-egq-yo2"><code>int32_t IOT_Sign_MQTT(iotx_mqtt_region_types_t region,
              iotx_dev_meta_info_t *meta,
              iotx_sign_mqtt_t *signout);</code></pre></td></tr><tr id="row-82b-gkf-z20"><td class="entry align-left" id="entry-b82-qm8-q6n">函数功能</td><td class="entry align-left" id="entry-jw9-bq3-3fc">根据输入的IoT设备身份认证信息，输出连接到阿里云物联网平台时所需要的域名、MQTT ClientID、MQTT Username、MQTT Password。之后，您可以将这些信息提供给MQTT Client用于连接阿里云物联网平台。</td></tr><tr id="row-3ho-cz1-19c"><td class="entry align-left" id="entry-q5y-311-7fv">输入参数</td><td class="entry align-left" id="entry-t2b-z9z-qjs">输入参数内容包括：<ul class="ul" id="ul-5s3-azb-hkj"><li class="li" id="li-g2g-rih-q0x">region：指定设备需要连接的阿里云站点。<p class="p" id="p-rz7-jul-hjk">代码示例：</p><pre class="pre codeblock lanuage-c" id="codeblock-yni-mle-9u5"><code>typedef enum {
    IOTX_CLOUD_REGION_SHANGHAI,   /* Shanghai */
    IOTX_CLOUD_REGION_SINGAPORE,  /* Singapore */
    IOTX_CLOUD_REGION_JAPAN,      /* Japan */
    IOTX_CLOUD_REGION_USA_WEST,   /* America */
    IOTX_CLOUD_REGION_GERMANY,    /* Germany */
    IOTX_CLOUD_REGION_CUSTOM,     /* Custom setting */
    IOTX_CLOUD_DOMAIN_MAX         /* Maximum number of domain */
} iotx_mqtt_region_types_t;</code></pre></li><li class="li" id="li-0zr-as3-tpx">meta：指定设备的身份认证信息。<div class="note note note-note" id="note-8st-mvu-zk4"><p><strong>说明</strong> API调用者需为meta分配内存。</p></div><p class="p" id="p-ih9-5so-oar">代码示例：</p><pre class="pre codeblock lanuage-c" id="codeblock-056-v1s-h9h"><code>typedef struct _iotx_dev_meta_info {
    char product_key[IOTX_PRODUCT_KEY_LEN + 1];
    char product_secret[IOTX_PRODUCT_SECRET_LEN + 1];
    char device_name[IOTX_DEVICE_NAME_LEN + 1];
    char device_secret[IOTX_DEVICE_SECRET_LEN + 1];
} iotx_dev_meta_info_t;
										</code></pre><p class="p" id="p-w35-ngn-49r">其中包含的参数：</p><ul class="ul" id="ul-vlr-c93-mov"><li class="li" id="li-2fk-0wn-rna">product_key：设备所属产品的ProductKey。</li><li class="li" id="li-3a9-yt0-wl8">product_secret：设备所属产品的ProductSecret。</li><li class="li" id="li-r2j-797-os5">device_name：设备名称DeviceName。</li><li class="li" id="li-9ii-0v1-97l">device_secret：设备的DeviceSecret。</li></ul></li></ul></td></tr><tr id="row-3ho-cz1-19c"><td class="entry align-left" id="entry-q5y-311-7fv">输出参数</td><td class="entry align-left" id="entry-t2b-z9z-qjs">signout：输出的数据，该数据将用于MQTT连接。<p class="p" id="p-1hg-3qb-y1a">代码示例：</p><pre class="pre codeblock lanuage-c" id="codeblock-1si-8r9-qld"><code>typedef struct {
    char hostname[DEV_SIGN_HOSTNAME_MAXLEN];
    uint16_t port;
    char clientid[DEV_SIGN_CLIENT_ID_MAXLEN];
    char username[DEV_SIGN_USERNAME_MAXLEN];
    char password[DEV_SIGN_PASSWORD_MAXLEN];
} iotx_sign_mqtt_t;
								</code></pre><p class="p" id="p-hwm-dc2-ezd">其中包含参数：</p><ul class="ul" id="ul-udu-bpn-p2i"><li class="li" id="li-sd2-oyy-27i">hostname：完整的阿里云物联网站点域名。</li><li class="li" id="li-3px-tfj-dae">port：阿里云站点的端口号。</li><li class="li" id="li-yxn-s86-r13">clientid：MQTT建立连接时需要指定的ClientID。建议使用设备的MAC地址或SN码，64字符内。</li><li class="li" id="li-2vv-d98-vq6">username：MQTT建立连接时需要指定的Username。由设备名DeviceName、符号（&amp;）和产品ProductKey组成，格式：<code class="ph codeph" id="codeph-8vf-hr2-j7t">deviceName+"&amp;"+productKey</code>。示例：<code class="ph codeph" id="codeph-cx1-3bf-p4n">Device1&amp;alSseIs****</code>。</li><li class="li" id="li-ech-v2l-kln">password：MQTT建立连接时需要指定的Password。把提交给服务器的参数按字典排序并拼接后，使用hmacsha256方法和设备的DeviceSecret，加签生成Password。</li></ul><p class="p" id="p-3by-02l-y7q">具体参数说明，请参见<a title="本文档主要介绍基于TCP的MQTT连接，并提供了两种连接方式：MQTT客户端直连和使用HTTPS认证再连接。" href="https://help.aliyun.com/document_detail/73742.htm#concept-mhv-ghm-b2b">MQTT-TCP连接通信</a>。</p></td></tr><tr id="row-3ho-cz1-19c"><td class="entry align-left" id="entry-q5y-311-7fv">返回值</td><td class="entry align-left" id="entry-t2b-z9z-qjs"><ul class="ul" id="ul-vqt-6aq-juy"><li class="li" id="li-ha8-kfs-9fx">0：表示成功。</li><li class="li" id="li-or4-8ty-8p2">-1：表示输入参数非法而失败。</li></ul></td></tr></tbody></table>

## 签名API使用示例

以下以sign\_test.c中的测试代码为例。

```auto
#include <stdio.h>
#include <string.h>
#include "sign_api.h"  //包含签名所需的各种数据结构定义

//下面的几个宏用于定义设备的阿里云身份认证信息：ProductKey、ProductSecret、DeviceName、DeviceSecret
//在实际产品开发中，设备的身份认证信息应该是设备厂商将其加密后存放于设备Flash中或者某个文件中，
//设备上电时将其读出后使用
#define EXAMPLE_PRODUCT_KEY     "a1X2bEn****"
#define EXAMPLE_PRODUCT_SECRET  "7jluWm1zql7b****"
#define EXAMPLE_DEVICE_NAME     "example1"
#define EXAMPLE_DEVICE_SECRET   "ga7XA6KdlEeiPXQPpRbAjOZXwG8y****"

int main(int argc, char *argv[])
{
    iotx_dev_meta_info_t meta_info;
    iotx_sign_mqtt_t sign_mqtt;

    memset(&meta_info, 0, sizeof(iotx_dev_meta_info_t));
    //下面的代码是将上面静态定义的设备身份信息赋值给meta_info
    memcpy(meta_info.product_key, EXAMPLE_PRODUCT_KEY, strlen(EXAMPLE_PRODUCT_KEY));
    memcpy(meta_info.product_secret, EXAMPLE_PRODUCT_SECRET, strlen(EXAMPLE_PRODUCT_SECRET));
    memcpy(meta_info.device_name, EXAMPLE_DEVICE_NAME, strlen(EXAMPLE_DEVICE_NAME));
    memcpy(meta_info.device_secret, EXAMPLE_DEVICE_SECRET, strlen(EXAMPLE_DEVICE_SECRET));

    //调用签名函数，生成MQTT连接时需要的各种数据
    IOT_Sign_MQTT(IOTX_CLOUD_REGION_SHANGHAI, &meta_info, &sign_mqtt);

    ...

}
			
```
