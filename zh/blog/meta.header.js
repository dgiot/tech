module.exports = [
  {
    "title": "经典案例",
    "collapsable": true,
    "path": "test",
    "category": "工业数据云平台"
  },
  {
    "title": "从0到1学习进阶",
    "collapsable": true,
    "children": [
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
          ['modbus/', '学习计划'],
          ['modbus/modbus', 'OPC-DA基础']
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
