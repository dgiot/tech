module.exports = [
    {
        "title": '产品简介',
        "collapsable": true,
        "children": [
            ['product_presentation/', '什么是物联网平台'],
            ['product_presentation/product_functions', '产品功能'],
            ['product_presentation/product_architecture', '产品架构'],
            ['product_presentation/word_construction', '名词解释'],
            ['product_presentation/product_advantage', '产品优势'],
            ['product_presentation/application_scenarios', '应用场景']
        ],
        "category": "一站式物联网平台"
    },
    {
        "title": '设备接入',
        "collapsable": true,
        "children": [
            ['cmp/', '创建产品'],
            {
                "title": '设备接入',
                "collapsable": true,
                "children": [
                    ['cmp/single_creation_device', '创建单个设备'],
                    ['cmp/batch_creation_device', '批量创建设备'],
                    ['cmp/creation_lora_device', '创建LoRa设备'],
                    ['cmp/creation_nb-iot_device', '创建云网关设备'],
                    ['cmp/manage_device', '管理设备']
                ],
                "category": "一站式物联网平台"
            },
            ['cmp/get_sdk', '下载设备端SDK'],
            {
                "title": '设备接入',
                "collapsable": true,
                "children": [
                    ['cmp/equipment_safety_certification', '设备安全认证'],
                    ['cmp/one_device_by_one_key', '一机一密'],
                    ['cmp/one_product_by_one_key', '一型一密'],
                    ['cmp/X_509', '使用X.509证书认证'],
                ],
                "category": "一站式物联网平台"
            },
            {
                "title": '设备安全认证',
                "collapsable": true,
                "children": [
                    ['cmp/device_certificate', '概述'],
                    ['cmp/push_device_certificate', '将证书烧录至设备'],
                    ['cmp/get_device_certificate_from_cloud', '设备从云端获取证书']
                ],
                "category": "一站式物联网平台"
            },
            {
                "title": '消息通信Topic',
                "collapsable": true,
                "children": [
                    ['cmp/what_is_topic', '什么是Topic'],
                    ['cmp/my_topic', '自定义Topic'],
                    ['cmp/sub_topic', '自动订阅Topic说明']
                ],
                "category": "一站式物联网平台"
            },
            {
                "title": 'Mqtt协议接入',
                "collapsable": true,
                "children": [
                    ['cmp/what_is_mqtt', 'MQTT协议规范'],
                    ['cmp/mqtt-tcp_connect', '自定义Topic'],
                    ['cmp/mqtt_dynamically_registering', '基于MQTT通道的设备动态注册'],
                    ['cmp/mqtt-websocket_connect', 'MQTT-WebSocket连接通信'],
                    ['cmp/mqtt-tls_connect', 'MQTT连接签名示例'],
                    ['cmp/mqtt-ipv6', '基于IPv6的MQTT连接通信'],
                ],
                "category": "一站式物联网平台"
            },
            {
                "title": 'CoAP协议接入',
                "collapsable": true,
                "children": [
                    ['cmp/what_is_coap', 'CoAP协议规范'],
                    ['cmp/coap_connect', 'CoAP连接通信']
                ],
                "category": "一站式物联网平台"
            },
            {
                "title": 'HTTP协议接入',
                "collapsable": true,
                "children": [
                    ['cmp/what_is_http', 'HTTP协议规范'],
                    ['cmp/http_connect', 'HTTP连接通信']
                ],
                "category": "一站式物联网平台"
            },
            {
                "title": 'NB-IoT设备接入',
                "collapsable": true,
                "children": [
                    ['cmp/what_is_nb_iot', '概述'],
                    ['cmp/what_is_aep', '在电信平台开发设备和添加应用'],
                    ['cmp/add_device_for_aep', '在物联网平台创建产品'],
                    ['cmp/add_device_for_iotcloud', '使用云网关创建设备'],
                    ['cmp/transfer_model', '转换物模型格式'],
                    ['cmp/iotcloud_to_aep', '测试物联网平台与电信AEP平台下行通信'],
                ],
                "category": "一站式物联网平台"
            }
        ],
        "category": "一站式物联网平台"
    },
    {
        "title": '消息通信',
        "collapsable": true,
        "children": [
            ['message_route/', '通信方式概述'],
        ],
        "category": "一站式物联网平台"
    }
]
