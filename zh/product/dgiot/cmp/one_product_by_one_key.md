一型一密认证方式下，同一产品下所有设备可以烧录相同固件，包含相同的产品证书（ProductKey和ProductSecret）。设备发送激活请求时，物联网平台进行身份确认，认证通过，下发设备接入所需信息。

## 背景信息

**说明**

+   采用一型一密认证方式，设备烧录相同固件，存在产品证书泄露风险。您可以在产品详情页面，手动关闭动态注册开关，拒绝新设备的认证请求。
+   一型一密动态注册时必须使用TLS加密，如果您的设备端SDK无法运行TLS加密，则无法使用一型一密认证方式，请采用[一机一密](https://www.alibabacloud.com/help/zh/doc-detail/74005.htm#task-n21-glp-wfb "一机一密认证方法，即预先为每个设备烧录其唯一的设备证书（ProductKey、DeviceName和DeviceSecret）。当设备与物联网平台建立连接时，物联网平台对其携带的设备证书信息进行认证。认证通过，物联网平台激活设备，设备与物联网平台间才可传输数据。")认证方式。

一型一密认证使用流程示意图：

![一型一密流程](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/3545559951/p133168.jpg)

图中有两种使用方式：

-   一型一密预注册：
    
    设备联网前，需要在物联网平台预注册设备DeviceName，建议采用设备的MAC地址、IMEI、SN码等作为DeviceName。物联网平台为设备颁发DeviceSecret。
    
    云端鉴权成功后，设备采用设备证书（ProductKey、DeviceName和DeviceSecret）与云端建立通信连接。
    
    支持通过MQTT通道进行一型一密预注册认证。
    
-   一型一密免预注册：
    
    不需要在物联网平台预注册设备DeviceName，便于使用物联网卡卡号等作为DeviceName。
    
    云端鉴权成功后，设备采用ProductKey、ProductSecret、ClientID和DeviceToken与云端建立通信连接。
    
    支持通过MQTT通道进行一型一密预注册认证。
    

## 操作步骤

1.  创建产品。
2.  开启动态注册。
    
    在已创建产品的产品详情页面，开启动态注册开关。系统将进行短信验证，以确认是您本人操作。
    
    **说明** 若设备发出激活请求时，系统校验发现该开关未开启，将拒绝新设备的动态激活请求。已激活设备不受影响。
    
    ![开启动态注册](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/3545559951/p131592.png)
    
3.  添加设备。
    
    +   一型一密预注册：
        
        在已创建产品下添加设备，具体步骤，请参见[批量创建设备](https://www.alibabacloud.com/help/zh/doc-detail/89261.htm#task-av2-fcw-y2b "产品指某一类设备，创建完产品后，需要为具体设备创建身份。您可以创建单个设备，也可以批量创建设备。本文介绍如何批量创建设备。")或[单个创建设备](https://www.alibabacloud.com/help/zh/doc-detail/73729.htm#task-yk1-rnl-vdb "产品指某一类设备，创建完产品后，需要为设备创建身份。您可以创建单个设备，也可以批量创建设备。本文介绍单个设备的创建。")。
        
        因设备激活时会校验DeviceName，建议您采用可以直接从设备中读取到的ID，如设备的MAC地址、IMEI或SN码等，作为DeviceName使用。
        
        物联网平台为设备颁发DeviceSecret。设备初始状态为未激活。
        
    +   一型一密免预注册，请跳过本步骤。
    
4.  产线烧录。
    1.  下载[设备端SDK](https://www.alibabacloud.com/help/doc-detail/96627.htm)。
    2.  初始化设备端SDK，开通设备端SDK动态注册。在设备端SDK中，填入产品证书（ProductKey和ProductSecret）。
        
        开通设备端SDK一型一密注册，请参见[Link SDK](https://www.alibabacloud.com/help/doc-detail/96627.htm)文档中，各语言SDK的《认证与连接》文档。
        
    3.  根据实际需求，完成设备端SDK开发，如OTA开发、子设备接入、设备物模型开发、设备影子开发等。
    4.  在产线上，将已开发完成的设备SDK烧录至设备中。
5.  设备联网。
6.  云端激活。
    
    +   一型一密预注册：
        
        物联网平台校验通过后，下发已在第3步中为该设备颁发的DeviceSecret。至此，设备获得连接云端所需的设备证书（ProductKey、DeviceName和DeviceSecret），可以与云端建立连接，进行数据通信。
        
        **说明**
        
        +   同一组设备证书只能用于激活一个物理设备。
        +   若DeviceName名下已激活物理设备A，但物理设备B需要使用这个DeviceName，则您可以在物联网平台上删除设备A，作废设备A的DeviceSecret，再使用原DeviceName重新添加设备，激活物理设备B。
        +   若设备因丢失DeviceSecret等原因需要重新激活，可以通过[ResetThing](https://www.alibabacloud.com/help/zh/doc-detail/155680.htm#doc-api-Iot-ResetThing "调用该接口重置指定设备，重置直连设备一型一密状态，同时删除当前设备的拓扑关系。")接口重置设备，然后将设备重新联网激活，云端下发的DeviceSecret不变。
        
    +   一型一密免预注册：
        
        物联网平台校验通过后，下发ClientID、DeviceToken。设备后续通过ProductKey、ProductSecret和下发的ClientID、DeviceToken与云端建立连接，进行数据通信。
        
        **说明** 一型一密免预注册情况下，物联网平台允许最多5个物理设备使用同一组ProductKey、ProductSecret、DeviceName进行激活，为这些物理设备下发不同的ClientID、DeviceToken。
        
        当一个DeviceName名下有多个不同ClientID的物理设备时，物联网平台控制台产品详情页将提示“当前产品下有设备同时有两个ClientID”。您可以指定保留唯一物理设备，或清除所有物理设备：
        
        1.  在产品详情页，单击该提示后的查看，跳转到产品下的风险设备列表。
        2.  在设备管理 > 设备，单击列表中设备对应的查看，进入设备详情页，页面显示当前连接的ClientID，单击ClientID右侧的切换或清除。
            +   切换：从下拉列表选择ClientID，通过该ClientID对应设备的首次连接时间，或者单击日志服务，通过该ClientID对应设备的[云端运行日志](https://www.alibabacloud.com/help/zh/doc-detail/44542.htm#concept-a32-x4w-f2b "您可以在物联网平台控制台日志服务页，查询云端运行日志。本文主要介绍云端运行日志中的错误码和排错方法。")判断其是否为需要保留的物理设备。选择要保留的物理设备的ClientID，单击确认，使用其他ClientID的物理设备将被禁止连接。
            +   清除：所有物理设备都将被禁止连接。
