module.exports = [
  {
    "title": "案例教程",
    "collapsable": true,
    "children": [
      {
        "title": '电力集抄教程',
        "collapsable": true,
        "children": [
          ['meter/', '教程概述'],
          ['meter/virtual_serialport', '虚拟串口'],
          ['meter/virtual_meter', '虚拟电表'],
          ['meter/virtual_dtu', '虚拟DTU'],
          ['meter/Digital_Twin', '数字孪生'],
          ['meter/meter_channel', '通道开发'],
          ['meter/iot_app', '应用开发']
        ],
        "category": "工业数据云平台"
      },
      {
        "title": 'Mqtt设备接入',
        "collapsable": true,
        "children": [
          ['add_device_by_mqtt/Create_product', '添加产品与设备'],
          ['add_device_by_mqtt/Rule-engine', '规则引擎']
        ],
        "category": "工业数据云平台"
      },
      {
         "title": '水泵性能曲线测量案例',
         "collapsable": true,
         "children": [
           ['pump/', '案例：水泵性能曲线'],
           ['pump/study', '平台配置'],
           ['pump/dtu', 'dtu配置'],
         ],
         "category": "工业数据云平台"
      },
      {
        "title": 'modbus设备接入',
        "collapsable": true,
        "children": [
          ['modbus/', '学习计划'],
          ['modbus/modbus', 'modbus基础']
        ],
        "category": "工业数据云平台"
      },
      {
        "title": 'OPC-DA设备接入',
        "collapsable": true,
        "children": [
          ['opc/', 'OPC简介'],
          ['opc/keepserver', 'OPC数据模拟'],
          ['opc/bridge','OPC数据桥接']
        ],
        "category": "工业数据云平台"
      },
      {
        "title": 'OPC-UA设备接入',
        "collapsable": true,
        "children": [
          ['modbus/', '学习计划'],
          ['modbus/modbus', 'OPC-UA基础']
        ],
        "category": "工业数据云平台"
      }
    ],
    "category": "工业数据云平台"
  }
]
