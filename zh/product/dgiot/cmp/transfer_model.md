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

完成设备创建，需为产品定义物模型，与电信AEP平台进行通信。数蛙的物模型和中国电信平台物模型的数据格式不同，需要在物联网平台中进行格式转换。本案例通过Python脚本完成转换。

## 操作步骤

1.  回到物联网平台的连接实例下，单击左侧导航栏的设备管理 > 设备，单击云网关设备（15008261001）的查看，单击日志服务下的前往查看。
2.  在云端运行日志页签的日志列表中，单击查看，来查看该设备到云的消息。
3.  在内容下拉列表选择Hex，复制并保存内容到本地，用于后续数据分析脚本验证。
    
    ![HEX](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/2043155061/p180252.png)
    
4.  在左侧导航栏，选择设备管理 > 产品，单击产品NBProduct1，在产品详情页，单击数据解析页签，选择Python 2.7，删除原脚本代码，复制粘贴以下脚本代码。
    
    本示例脚本仅适用当前案例，您可根据实际物模型，进行修改。具体操作，请参见[物模型数据解析使用示例](https://help.aliyun.com/document_detail/114621.htm#concept-185365 "本文以解析上、下行属性数据的脚本为例，介绍在数据格式为透传/自定义的产品下，物模型数据解析脚本的编写方法。")。
    
    ```auto
    # -*- coding: UTF-8 -*-
    # 以下为alink产品模版，您可以基于以下模版进行脚本编写
    
    # 将设备自定义topic数据转换为json格式数据, 设备上报数据到物联网平台时调用
    # 入参: topic   字符串，设备上报消息的topic
    # 入参: rawData 列表，列表元素取值为int类型    不能为空
    # 出参: jsonObj 字典
    def transform_payload(topic, rawData):
       jsonObj = {}
       return jsonObj
    
    import json
    import common_util
    
    ALINK_PROP_REPORT_METHOD = 'thing.event.property.post'
    COMMAND_REPORT = 0x00  # 属性上报。
    COMMAND_SET = 0x01  # 属性设置。
    COMMAND_REPORT_REPLY = 0x02  # 上报数据返回结果。
    COMMAND_SET_REPLY = 0x03  # 属性设置设备返回结果。
    COMMAD_UNKOWN = 0xff  # 未知的命令。
    ALINK_PROP_SET_METHOD = 'thing.service.property.set'  # 物联网平台Topic，云端下发属性控制指令到设备端。
    ALINK_PROP_SET_REPLY_METHOD = 'thing.service.property.set'  # 物联网平台Topic，设备上报属性设置的结果到云端。
    SELF_DEFINE_TOPIC_UPDATE_FLAG = '/user/update'  # 自定义Topic：/user/update。
    SELF_DEFINE_TOPIC_ERROR_FLAG = '/user/update/error' # 自定义Topic：/user/update/error。
    
    # 将设备的自定义格式数据转换为Alink协议的数据，设备上报数据到物联网平台时调用
    # 入参: rawData 列表，列表元素取值为int类型    不能为空
    # 出参: jsonObj 字典                         不能为空
    def raw_data_to_protocol(rawData):
        output = []
        for iters in rawData:
            output.append(chr(iters))
    
        inStr = ''.join(output)
    
        try:
            json_object = json.loads(inStr)
            # matched_out = json_object['notifyType']
            deviceId = json_object['deviceId']
            water_consumption = json_object['payload']
            running_data = water_consumption['water_consumption']
            # gatewayId = json_object['gatewayId']
            # service = json_object['service']
            # data_object = service['data']
            # imei = data_object['IMEI']
            # MeasureValue = json_object['MeasureValue']
            # Temperature = json_object['Temperature']
            # BatteryVoltage = data_object['BatteryVoltage']
        except ValueError, e:
            MeasureValue = 'err'
            # imei = 'err'
    
        jsonMap = {}
        jsonMap['method'] = ALINK_PROP_REPORT_METHOD
        jsonMap['version'] = '1.0'
        jsonMap['id'] = '123'
        params = {}
        # params['IMEI'] = imei
        params['deviceId'] = deviceId
        params['water_consumption']= running_data
        # params['gatewayId'] = gatewayId
        # params['MeasureValue'] = MeasureValue
        # params['BatteryVoltage'] = BatteryVoltage
        # params['Temperature'] = Temperature
        jsonMap['params'] = params
        return jsonMap
    
    # 8位整形转成byte数组。
    def int_8_to_byte(value):
        t_value = '%02X' % value
        if len(t_value) % 2 != 0:
            t_value += '0'
    
        return hex_string_to_byte_array(t_value)
    
        # 32位整形转成byte数组。
    def int_32_to_byte(value):
        t_value = '%08X' % value
        if len(t_value) % 2 != 0:
            t_value += '0'
    
        return hex_string_to_byte_array(t_value)
    
    
    # 16位整形转成byte数组。
    def int_16_to_byte(value):
        t_value = '%04X' % value
        if len(t_value) % 2 != 0:
            t_value += '0'
    
        return hex_string_to_byte_array(t_value)
    
    
    # 16进制字符串转成byte数组。
    def hex_string_to_byte_array(str_value):
        if len(str_value) % 2 != 0:
            return None
    
        cycle = len(str_value) / 2
    
        pos = 0
        result = []
        for i in range(0, cycle, 1):
            temp_str_value = str_value[pos:pos + 2]
            temp_int_value = int(temp_str_value, base=16)
    
            result.append(temp_int_value)
            pos += 2
        return result
    
    
    # 将Alink协议的数据转换为设备能识别的格式数据，物联网平台给设备下发数据时调用
    # 入参: jsonData 字典                                           不能为空
    # 出参: rawdata  列表    列表元素取值为int类型且大小为[0, 255]之间  不能为空
    def protocol_to_raw_data(myjson):
        payload_array = []
        in_params = myjson.get("params")
        test = in_params.get('test', None)
        method = myjson.get('method')
        print(method);
    
        if method == ALINK_PROP_SET_METHOD:
            params = myjson.get('params')
    
            params = {}
            params['test'] = test
    
            content= {}
            content['params']=params
            content['serviceIdentifier'] = 'test'
    
            mystr = json.dumps(content)
    
            for ch in mystr:
                    print(ch)
                    payload_array = payload_array + int_8_to_byte(ord(ch))
    
        elif method == ALINK_PROP_REPORT_METHOD:
            code = json.get('code', None)
            payload_array = payload_array + int_8_to_byte(COMMAND_REPORT_REPLY)
            payload_array = payload_array + int_32_to_byte(int(id))
            payload_array = payload_array + int_8_to_byte(code)
        else:
            code = json.get('code')
            payload_array = payload_array + int_8_to_byte(COMMAD_UNKOWN)
            payload_array = payload_array + int_32_to_byte(int(id))
            payload_array = payload_array + int_8_to_byte(code)
    
        return payload_array
    ```
    
5.  在模拟输入下，选择模拟类型为设备上报数据，复制粘贴步骤3中的内容，单击执行。
6.  确认脚本可用后，单击提交，将脚本提交到物联网平台系统。
7.  回到中国电信AEP平台，在设备nbdevice的AEP-在线调试页面，再上报一次用水量。
    
    ![电信上报数据](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/2043155061/p180261.png)
    
8.  回到物联网平台的连接型实例下，选择设备管理 > 设备，单击设备15008261001操作栏的查看。
    
    在设备详情页的物模型数据 > 运行状态下，查看到数据已转化为物联网平台物模型的数据格式。![运行数据](https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/8787638061/p180260.png)
