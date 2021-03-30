(window.webpackJsonp=window.webpackJsonp||[]).push([[354],{406:function(n,t,a){"use strict";a.r(t);var e=a(42),r=Object(e.a)({},(function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[a("p",[n._v("完成设备创建，需为产品定义物模型，与电信AEP平台进行通信。数蛙的物模型和中国电信平台物模型的数据格式不同，需要在物联网平台中进行格式转换。本案例通过Python脚本完成转换。")]),n._v(" "),a("h2",{attrs:{id:"操作步骤"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#操作步骤"}},[n._v("#")]),n._v(" 操作步骤")]),n._v(" "),a("ol",[a("li",[a("p",[n._v("回到物联网平台的连接实例下，单击左侧导航栏的设备管理 > 设备，单击云网关设备（15008261001）的查看，单击日志服务下的前往查看。")])]),n._v(" "),a("li",[a("p",[n._v("在云端运行日志页签的日志列表中，单击查看，来查看该设备到云的消息。")])]),n._v(" "),a("li",[a("p",[n._v("在内容下拉列表选择Hex，复制并保存内容到本地，用于后续数据分析脚本验证。")]),n._v(" "),a("p",[a("img",{attrs:{src:"https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/2043155061/p180252.png",alt:"HEX"}})])]),n._v(" "),a("li",[a("p",[n._v("在左侧导航栏，选择设备管理 > 产品，单击产品NBProduct1，在产品详情页，单击数据解析页签，选择Python 2.7，删除原脚本代码，复制粘贴以下脚本代码。")]),n._v(" "),a("p",[n._v("本示例脚本仅适用当前案例，您可根据实际物模型，进行修改。具体操作，请参见"),a("a",{attrs:{href:"https://help.aliyun.com/document_detail/114621.htm#concept-185365",title:"本文以解析上、下行属性数据的脚本为例，介绍在数据格式为透传/自定义的产品下，物模型数据解析脚本的编写方法。",target:"_blank",rel:"noopener noreferrer"}},[n._v("物模型数据解析使用示例"),a("OutboundLink")],1),n._v("。")]),n._v(" "),a("div",{staticClass:"language-auto extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("# -*- coding: UTF-8 -*-\n# 以下为alink产品模版，您可以基于以下模版进行脚本编写\n\n# 将设备自定义topic数据转换为json格式数据, 设备上报数据到物联网平台时调用\n# 入参: topic   字符串，设备上报消息的topic\n# 入参: rawData 列表，列表元素取值为int类型    不能为空\n# 出参: jsonObj 字典\ndef transform_payload(topic, rawData):\n   jsonObj = {}\n   return jsonObj\n\nimport json\nimport common_util\n\nALINK_PROP_REPORT_METHOD = 'thing.event.property.post'\nCOMMAND_REPORT = 0x00  # 属性上报。\nCOMMAND_SET = 0x01  # 属性设置。\nCOMMAND_REPORT_REPLY = 0x02  # 上报数据返回结果。\nCOMMAND_SET_REPLY = 0x03  # 属性设置设备返回结果。\nCOMMAD_UNKOWN = 0xff  # 未知的命令。\nALINK_PROP_SET_METHOD = 'thing.service.property.set'  # 物联网平台Topic，云端下发属性控制指令到设备端。\nALINK_PROP_SET_REPLY_METHOD = 'thing.service.property.set'  # 物联网平台Topic，设备上报属性设置的结果到云端。\nSELF_DEFINE_TOPIC_UPDATE_FLAG = '/user/update'  # 自定义Topic：/user/update。\nSELF_DEFINE_TOPIC_ERROR_FLAG = '/user/update/error' # 自定义Topic：/user/update/error。\n\n# 将设备的自定义格式数据转换为Alink协议的数据，设备上报数据到物联网平台时调用\n# 入参: rawData 列表，列表元素取值为int类型    不能为空\n# 出参: jsonObj 字典                         不能为空\ndef raw_data_to_protocol(rawData):\n    output = []\n    for iters in rawData:\n        output.append(chr(iters))\n\n    inStr = ''.join(output)\n\n    try:\n        json_object = json.loads(inStr)\n        # matched_out = json_object['notifyType']\n        deviceId = json_object['deviceId']\n        water_consumption = json_object['payload']\n        running_data = water_consumption['water_consumption']\n        # gatewayId = json_object['gatewayId']\n        # service = json_object['service']\n        # data_object = service['data']\n        # imei = data_object['IMEI']\n        # MeasureValue = json_object['MeasureValue']\n        # Temperature = json_object['Temperature']\n        # BatteryVoltage = data_object['BatteryVoltage']\n    except ValueError, e:\n        MeasureValue = 'err'\n        # imei = 'err'\n\n    jsonMap = {}\n    jsonMap['method'] = ALINK_PROP_REPORT_METHOD\n    jsonMap['version'] = '1.0'\n    jsonMap['id'] = '123'\n    params = {}\n    # params['IMEI'] = imei\n    params['deviceId'] = deviceId\n    params['water_consumption']= running_data\n    # params['gatewayId'] = gatewayId\n    # params['MeasureValue'] = MeasureValue\n    # params['BatteryVoltage'] = BatteryVoltage\n    # params['Temperature'] = Temperature\n    jsonMap['params'] = params\n    return jsonMap\n\n# 8位整形转成byte数组。\ndef int_8_to_byte(value):\n    t_value = '%02X' % value\n    if len(t_value) % 2 != 0:\n        t_value += '0'\n\n    return hex_string_to_byte_array(t_value)\n\n    # 32位整形转成byte数组。\ndef int_32_to_byte(value):\n    t_value = '%08X' % value\n    if len(t_value) % 2 != 0:\n        t_value += '0'\n\n    return hex_string_to_byte_array(t_value)\n\n\n# 16位整形转成byte数组。\ndef int_16_to_byte(value):\n    t_value = '%04X' % value\n    if len(t_value) % 2 != 0:\n        t_value += '0'\n\n    return hex_string_to_byte_array(t_value)\n\n\n# 16进制字符串转成byte数组。\ndef hex_string_to_byte_array(str_value):\n    if len(str_value) % 2 != 0:\n        return None\n\n    cycle = len(str_value) / 2\n\n    pos = 0\n    result = []\n    for i in range(0, cycle, 1):\n        temp_str_value = str_value[pos:pos + 2]\n        temp_int_value = int(temp_str_value, base=16)\n\n        result.append(temp_int_value)\n        pos += 2\n    return result\n\n\n# 将Alink协议的数据转换为设备能识别的格式数据，物联网平台给设备下发数据时调用\n# 入参: jsonData 字典                                           不能为空\n# 出参: rawdata  列表    列表元素取值为int类型且大小为[0, 255]之间  不能为空\ndef protocol_to_raw_data(myjson):\n    payload_array = []\n    in_params = myjson.get(\"params\")\n    test = in_params.get('test', None)\n    method = myjson.get('method')\n    print(method);\n\n    if method == ALINK_PROP_SET_METHOD:\n        params = myjson.get('params')\n\n        params = {}\n        params['test'] = test\n\n        content= {}\n        content['params']=params\n        content['serviceIdentifier'] = 'test'\n\n        mystr = json.dumps(content)\n\n        for ch in mystr:\n                print(ch)\n                payload_array = payload_array + int_8_to_byte(ord(ch))\n\n    elif method == ALINK_PROP_REPORT_METHOD:\n        code = json.get('code', None)\n        payload_array = payload_array + int_8_to_byte(COMMAND_REPORT_REPLY)\n        payload_array = payload_array + int_32_to_byte(int(id))\n        payload_array = payload_array + int_8_to_byte(code)\n    else:\n        code = json.get('code')\n        payload_array = payload_array + int_8_to_byte(COMMAD_UNKOWN)\n        payload_array = payload_array + int_32_to_byte(int(id))\n        payload_array = payload_array + int_8_to_byte(code)\n\n    return payload_array\n")])])])]),n._v(" "),a("li",[a("p",[n._v("在模拟输入下，选择模拟类型为设备上报数据，复制粘贴步骤3中的内容，单击执行。")])]),n._v(" "),a("li",[a("p",[n._v("确认脚本可用后，单击提交，将脚本提交到物联网平台系统。")])]),n._v(" "),a("li",[a("p",[n._v("回到中国电信AEP平台，在设备nbdevice的AEP-在线调试页面，再上报一次用水量。")]),n._v(" "),a("p",[a("img",{attrs:{src:"https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/2043155061/p180261.png",alt:"电信上报数据"}})])]),n._v(" "),a("li",[a("p",[n._v("回到物联网平台的连接型实例下，选择设备管理 > 设备，单击设备15008261001操作栏的查看。")]),n._v(" "),a("p",[n._v("在设备详情页的物模型数据 > 运行状态下，查看到数据已转化为物联网平台物模型的数据格式。"),a("img",{attrs:{src:"https://static-aliyun-doc.oss-accelerate.aliyuncs.com/assets/img/zh-CN/8787638061/p180260.png",alt:"运行数据"}})])])])])}),[],!1,null,null,null);t.default=r.exports}}]);