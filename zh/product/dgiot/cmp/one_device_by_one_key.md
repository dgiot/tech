一机一密认证方法，即预先为每个设备烧录其唯一的设备证书（ProductKey、DeviceName和DeviceSecret）。当设备与物联网平台建立连接时，物联网平台对其携带的设备证书信息进行认证。认证通过，物联网平台激活设备，设备与物联网平台间才可传输数据。

## 背景信息

一机一密认证方式的安全性较高，推荐使用。

使用流程示意图：

![设备认证](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/2545559951/p32767.png)

## 操作步骤

1.  创建产品。

    在[物联网平台控制台](http://iot.console.aliyun.com/)创建产品，具体步骤，请参见[创建产品](https://www.alibabacloud.com/help/zh/doc-detail/73728.htm#task-lxd-pnl-vdb "使用物联网平台的第一步：在控制台创建产品。产品是设备的集合，通常是一组具有相同功能定义的设备集合。例如：产品指同一个型号的产品，设备就是该型号下的某个设备。")。

2.  添加设备。

    在已创建产品下添加设备，并获取设备证书信息，具体步骤，请参见[单个创建设备](https://www.alibabacloud.com/help/zh/doc-detail/73729.htm#task-yk1-rnl-vdb "产品指某一类设备，创建完产品后，需要为设备创建身份。您可以创建单个设备，也可以批量创建设备。本文介绍单个设备的创建。")、[批量创建设备](https://www.alibabacloud.com/help/zh/doc-detail/89261.htm#task-av2-fcw-y2b "产品指某一类设备，创建完产品后，需要为具体设备创建身份。您可以创建单个设备，也可以批量创建设备。本文介绍如何批量创建设备。")。

3.  产线烧录。
    1.  下载[设备端SDK](https://www.alibabacloud.com/help/doc-detail/96627.htm)。
    2.  初始化设备端SDK。在设备端SDK中，填入设备证书。

        初始化一机一密认证方式的设备端SDK，请参见[Link SDK](https://www.alibabacloud.com/help/doc-detail/96627.htm)文档中，各语言SDK《设备认证》、《认证与连接》文档。

    3.  根据实际需求，完成设备端SDK开发，如OTA开发、子设备接入、设备物模型开发、设备影子开发等。
    4.  在产线上，将已开发完成的设备SDK烧录至设备中。
4.  设备联网。

    设备上电联网后，携带设备证书发起认证请求。请参见[MQTT-TCP连接通信](https://www.alibabacloud.com/help/zh/doc-detail/73742.htm#concept-mhv-ghm-b2b "本文档主要介绍基于TCP的MQTT连接，连接方式为MQTT客户端直连。")、[CoAP连接通信](https://www.alibabacloud.com/help/zh/doc-detail/57697.htm#concept-gn3-kr5-wdb "物联网平台支持CoAP协议连接通信。CoAP协议适用在资源受限的低功耗设备上，尤其是NB-IoT的设备使用。本文介绍基于CoAP协议进行设备接入的流程，及使用DTLS和对称加密两种认证方式下的自主接入流程。")、[HTTP连接通信](https://www.alibabacloud.com/help/zh/doc-detail/58034.htm#concept-djd-vt5-wdb "物联网平台支持使用HTTP接入，目前仅支持HTTPS协议。下面介绍使用HTTP连接通信的接入流程。")。

5.  云端激活。

    物联网平台对设备证书进行校验。认证通过后，与设备建立连接，设备便可通过发布消息至Topic和订阅Topic消息，与物联网平台进行数据通信。
