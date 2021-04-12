(window.webpackJsonp=window.webpackJsonp||[]).push([[384],{478:function(t,a,s){"use strict";s.r(a);var e=s(8),i=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("若您不使用数蛙提供的设备端SDK，而是使用其他方式，自己进行开发使您的设备使用MQTT协议与物联网平台连接，您可以参见本文提供的签名代码示例进行MQTT连接签名。")]),t._v(" "),s("h2",{attrs:{id:"说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#说明"}},[t._v("#")]),t._v(" 说明")]),t._v(" "),s("p",[t._v("推荐您使用数蛙提供的设备端SDK。使用数蛙提供的任何一种语言的设备端SDK，则不用您自己配置签名机制。请访问"),s("a",{attrs:{href:"https://help.aliyun.com/document_detail/42648.htm#concept-jlk-mjl-vdb",title:"物联网平台提供各类设备端SDK，简化开发过程，使设备快速上云。",target:"_blank",rel:"noopener noreferrer"}},[t._v("下载设备端SDK"),s("OutboundLink")],1),t._v("查看数蛙提供的SDK下载路径。")]),t._v(" "),s("p",[t._v("如果您不使用阿里云提供的设备端SDK，而是使用其他方式将您的设备接入物联网平台，需了解：")]),t._v(" "),s("ul",[s("li",[t._v("需要您自己保证连接的稳定性、MQTT连接保活和MQTT连接断开重连。")]),t._v(" "),s("li",[t._v("不使用设备端SDK连接数蛙物联网平台导致的连接问题，阿里云不负责相关的技术支持。")]),t._v(" "),s("li",[t._v("如果您要使用物联网平台提供的OTA、物模型、一型一密等多种功能，需您自己去编写这些功能的实现。这将会耗费较多的开发时间、以及bug修复时间。")])]),t._v(" "),s("h2",{attrs:{id:"签名计算代码示例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#签名计算代码示例"}},[t._v("#")]),t._v(" 签名计算代码示例")]),t._v(" "),s("p",[t._v("若您不使用数蛙物联网平台设备端SDK，可单击以下链接，访问相关代码示例页面。")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://code.aliyun.com/edward.yangx/public-docs/raw/master/docs/sign_mqtt.c",target:"_blank",rel:"noopener noreferrer"}},[t._v("sign_mqtt.c"),s("OutboundLink")],1),t._v("：实现签名函数的代码示例。")]),t._v(" "),s("li",[s("a",{attrs:{href:"https://code.aliyun.com/edward.yangx/public-docs/raw/master/docs/sign_api.h",target:"_blank",rel:"noopener noreferrer"}},[t._v("sign_api.h"),s("OutboundLink")],1),t._v("：定义签名函数用到的数据结构的代码示例。")]),t._v(" "),s("li",[s("a",{attrs:{href:"https://code.aliyun.com/edward.yangx/public-docs/raw/master/docs/sign_sha256.c",target:"_blank",rel:"noopener noreferrer"}},[t._v("sign_sha256.c"),s("OutboundLink")],1),t._v("：签名函数可能使用的算法实现代码示例。如果您自己的平台上有HMACSHA256的实现，可以不编译本文件，但是需要提供函数"),s("code",[t._v("utils_hmac_sha256()")]),t._v("给sign_mqtt.c中的API调用。")]),t._v(" "),s("li",[t._v("用于测试签名函数的。")])]),t._v(" "),s("h2",{attrs:{id:"签名函数api接口说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#签名函数api接口说明"}},[t._v("#")]),t._v(" 签名函数API接口说明")]),t._v(" "),s("table",{staticClass:"table",attrs:{id:"table-nnf-3ln-ylv"}},[s("caption"),s("colgroup",[s("col"),t._v(" "),s("col")]),s("tbody",{staticClass:"tbody",attrs:{id:"tbody-xvu-1sq-qpz"}},[s("tr",{attrs:{id:"row-kjb-wdv-lje"}},[s("td",{staticClass:"entry align-left",attrs:{id:"entry-wca-qfq-ngj"}},[t._v("函数原型")]),s("td",{staticClass:"entry align-left",attrs:{id:"entry-6zl-liv-6u8"}},[s("pre",{staticClass:"pre codeblock lanuage-c",attrs:{id:"codeblock-1cy-egq-yo2"}},[s("code",[t._v("int32_t IOT_Sign_MQTT(iotx_mqtt_region_types_t region,\n              iotx_dev_meta_info_t *meta,\n              iotx_sign_mqtt_t *signout);")])])])]),s("tr",{attrs:{id:"row-82b-gkf-z20"}},[s("td",{staticClass:"entry align-left",attrs:{id:"entry-b82-qm8-q6n"}},[t._v("函数功能")]),s("td",{staticClass:"entry align-left",attrs:{id:"entry-jw9-bq3-3fc"}},[t._v("根据输入的IoT设备身份认证信息，输出连接到阿里云物联网平台时所需要的域名、MQTT ClientID、MQTT Username、MQTT Password。之后，您可以将这些信息提供给MQTT Client用于连接阿里云物联网平台。")])]),s("tr",{attrs:{id:"row-3ho-cz1-19c"}},[s("td",{staticClass:"entry align-left",attrs:{id:"entry-q5y-311-7fv"}},[t._v("输入参数")]),s("td",{staticClass:"entry align-left",attrs:{id:"entry-t2b-z9z-qjs"}},[t._v("输入参数内容包括："),s("ul",{staticClass:"ul",attrs:{id:"ul-5s3-azb-hkj"}},[s("li",{staticClass:"li",attrs:{id:"li-g2g-rih-q0x"}},[t._v("region：指定设备需要连接的阿里云站点。"),s("p",{staticClass:"p",attrs:{id:"p-rz7-jul-hjk"}},[t._v("代码示例：")]),s("pre",{staticClass:"pre codeblock lanuage-c",attrs:{id:"codeblock-yni-mle-9u5"}},[s("code",[t._v("typedef enum {\n    IOTX_CLOUD_REGION_SHANGHAI,   /* Shanghai */\n    IOTX_CLOUD_REGION_SINGAPORE,  /* Singapore */\n    IOTX_CLOUD_REGION_JAPAN,      /* Japan */\n    IOTX_CLOUD_REGION_USA_WEST,   /* America */\n    IOTX_CLOUD_REGION_GERMANY,    /* Germany */\n    IOTX_CLOUD_REGION_CUSTOM,     /* Custom setting */\n    IOTX_CLOUD_DOMAIN_MAX         /* Maximum number of domain */\n} iotx_mqtt_region_types_t;")])])]),s("li",{staticClass:"li",attrs:{id:"li-0zr-as3-tpx"}},[t._v("meta：指定设备的身份认证信息。"),s("div",{staticClass:"note note note-note",attrs:{id:"note-8st-mvu-zk4"}},[s("p",[s("strong",[t._v("说明")]),t._v(" API调用者需为meta分配内存。")])]),s("p",{staticClass:"p",attrs:{id:"p-ih9-5so-oar"}},[t._v("代码示例：")]),s("pre",{staticClass:"pre codeblock lanuage-c",attrs:{id:"codeblock-056-v1s-h9h"}},[s("code",[t._v("typedef struct _iotx_dev_meta_info {\n    char product_key[IOTX_PRODUCT_KEY_LEN + 1];\n    char product_secret[IOTX_PRODUCT_SECRET_LEN + 1];\n    char device_name[IOTX_DEVICE_NAME_LEN + 1];\n    char device_secret[IOTX_DEVICE_SECRET_LEN + 1];\n} iotx_dev_meta_info_t;\n\t\t\t\t\t\t\t\t\t\t")])]),s("p",{staticClass:"p",attrs:{id:"p-w35-ngn-49r"}},[t._v("其中包含的参数：")]),s("ul",{staticClass:"ul",attrs:{id:"ul-vlr-c93-mov"}},[s("li",{staticClass:"li",attrs:{id:"li-2fk-0wn-rna"}},[t._v("product_key：设备所属产品的ProductKey。")]),s("li",{staticClass:"li",attrs:{id:"li-3a9-yt0-wl8"}},[t._v("product_secret：设备所属产品的ProductSecret。")]),s("li",{staticClass:"li",attrs:{id:"li-r2j-797-os5"}},[t._v("device_name：设备名称DeviceName。")]),s("li",{staticClass:"li",attrs:{id:"li-9ii-0v1-97l"}},[t._v("device_secret：设备的DeviceSecret。")])])])])])]),s("tr",{attrs:{id:"row-3ho-cz1-19c"}},[s("td",{staticClass:"entry align-left",attrs:{id:"entry-q5y-311-7fv"}},[t._v("输出参数")]),s("td",{staticClass:"entry align-left",attrs:{id:"entry-t2b-z9z-qjs"}},[t._v("signout：输出的数据，该数据将用于MQTT连接。"),s("p",{staticClass:"p",attrs:{id:"p-1hg-3qb-y1a"}},[t._v("代码示例：")]),s("pre",{staticClass:"pre codeblock lanuage-c",attrs:{id:"codeblock-1si-8r9-qld"}},[s("code",[t._v("typedef struct {\n    char hostname[DEV_SIGN_HOSTNAME_MAXLEN];\n    uint16_t port;\n    char clientid[DEV_SIGN_CLIENT_ID_MAXLEN];\n    char username[DEV_SIGN_USERNAME_MAXLEN];\n    char password[DEV_SIGN_PASSWORD_MAXLEN];\n} iotx_sign_mqtt_t;\n\t\t\t\t\t\t\t\t")])]),s("p",{staticClass:"p",attrs:{id:"p-hwm-dc2-ezd"}},[t._v("其中包含参数：")]),s("ul",{staticClass:"ul",attrs:{id:"ul-udu-bpn-p2i"}},[s("li",{staticClass:"li",attrs:{id:"li-sd2-oyy-27i"}},[t._v("hostname：完整的阿里云物联网站点域名。")]),s("li",{staticClass:"li",attrs:{id:"li-3px-tfj-dae"}},[t._v("port：阿里云站点的端口号。")]),s("li",{staticClass:"li",attrs:{id:"li-yxn-s86-r13"}},[t._v("clientid：MQTT建立连接时需要指定的ClientID。建议使用设备的MAC地址或SN码，64字符内。")]),s("li",{staticClass:"li",attrs:{id:"li-2vv-d98-vq6"}},[t._v("username：MQTT建立连接时需要指定的Username。由设备名DeviceName、符号（&）和产品ProductKey组成，格式："),s("code",{staticClass:"ph codeph",attrs:{id:"codeph-8vf-hr2-j7t"}},[t._v('deviceName+"&"+productKey')]),t._v("。示例："),s("code",{staticClass:"ph codeph",attrs:{id:"codeph-cx1-3bf-p4n"}},[t._v("Device1&alSseIs****")]),t._v("。")]),s("li",{staticClass:"li",attrs:{id:"li-ech-v2l-kln"}},[t._v("password：MQTT建立连接时需要指定的Password。把提交给服务器的参数按字典排序并拼接后，使用hmacsha256方法和设备的DeviceSecret，加签生成Password。")])]),s("p",{staticClass:"p",attrs:{id:"p-3by-02l-y7q"}},[t._v("具体参数说明，请参见"),s("a",{attrs:{title:"本文档主要介绍基于TCP的MQTT连接，并提供了两种连接方式：MQTT客户端直连和使用HTTPS认证再连接。",href:"https://help.aliyun.com/document_detail/73742.htm#concept-mhv-ghm-b2b"}},[t._v("MQTT-TCP连接通信")]),t._v("。")])])]),s("tr",{attrs:{id:"row-3ho-cz1-19c"}},[s("td",{staticClass:"entry align-left",attrs:{id:"entry-q5y-311-7fv"}},[t._v("返回值")]),s("td",{staticClass:"entry align-left",attrs:{id:"entry-t2b-z9z-qjs"}},[s("ul",{staticClass:"ul",attrs:{id:"ul-vqt-6aq-juy"}},[s("li",{staticClass:"li",attrs:{id:"li-ha8-kfs-9fx"}},[t._v("0：表示成功。")]),s("li",{staticClass:"li",attrs:{id:"li-or4-8ty-8p2"}},[t._v("-1：表示输入参数非法而失败。")])])])])])]),t._v(" "),s("h2",{attrs:{id:"签名api使用示例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#签名api使用示例"}},[t._v("#")]),t._v(" 签名API使用示例")]),t._v(" "),s("p",[t._v("以下以sign_test.c中的测试代码为例。")]),t._v(" "),s("div",{staticClass:"language-auto extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('#include <stdio.h>\n#include <string.h>\n#include "sign_api.h"  //包含签名所需的各种数据结构定义\n\n//下面的几个宏用于定义设备的阿里云身份认证信息：ProductKey、ProductSecret、DeviceName、DeviceSecret\n//在实际产品开发中，设备的身份认证信息应该是设备厂商将其加密后存放于设备Flash中或者某个文件中，\n//设备上电时将其读出后使用\n#define EXAMPLE_PRODUCT_KEY     "a1X2bEn****"\n#define EXAMPLE_PRODUCT_SECRET  "7jluWm1zql7b****"\n#define EXAMPLE_DEVICE_NAME     "example1"\n#define EXAMPLE_DEVICE_SECRET   "ga7XA6KdlEeiPXQPpRbAjOZXwG8y****"\n\nint main(int argc, char *argv[])\n{\n    iotx_dev_meta_info_t meta_info;\n    iotx_sign_mqtt_t sign_mqtt;\n\n    memset(&meta_info, 0, sizeof(iotx_dev_meta_info_t));\n    //下面的代码是将上面静态定义的设备身份信息赋值给meta_info\n    memcpy(meta_info.product_key, EXAMPLE_PRODUCT_KEY, strlen(EXAMPLE_PRODUCT_KEY));\n    memcpy(meta_info.product_secret, EXAMPLE_PRODUCT_SECRET, strlen(EXAMPLE_PRODUCT_SECRET));\n    memcpy(meta_info.device_name, EXAMPLE_DEVICE_NAME, strlen(EXAMPLE_DEVICE_NAME));\n    memcpy(meta_info.device_secret, EXAMPLE_DEVICE_SECRET, strlen(EXAMPLE_DEVICE_SECRET));\n\n    //调用签名函数，生成MQTT连接时需要的各种数据\n    IOT_Sign_MQTT(IOTX_CLOUD_REGION_SHANGHAI, &meta_info, &sign_mqtt);\n\n    ...\n\n}\n\t\t\t\n')])])])])}),[],!1,null,null,null);a.default=i.exports}}]);