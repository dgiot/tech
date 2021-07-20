## 物模型导入

鉴于物模型的配置容易出现错误，现将物模型数据导出供大家使用和参考。可在产品-物模型-查看物模型中将下列参数更新然后刷新网页即可。

```
{
    "properties": [
        {
            "name": "一氧化碳",
            "dataForm": {
                "data": "1",
                "rate": 1,
                "order": 3,
                "round": "all",
                "offset": 0,
                "address": "0X02",
                "control": "%d",
                "slaveid": "0X01",
                "protocol": "modbus",
                "strategy": "20",
                "byteorder": "big",
                "collection": "%s",
                "operatetype": "readHregs",
                "originaltype": "ushort16_AB"
            },
            "dataType": {
                "type": "int",
                "specs": {
                    "max": 1000,
                    "min": 0,
                    "step": 0.01,
                    "unit": "mm³",
                    "precision": 3
                }
            },
            "required": true,
            "accessMode": "r",
            "identifier": "co"
        },
        {
            "name": "温度",
            "dataForm": {
                "data": "1",
                "rate": 1,
                "order": 2,
                "round": "all",
                "offset": 0,
                "address": "0X01",
                "control": "%d",
                "slaveid": "0X01",
                "protocol": "modbus",
                "strategy": "20",
                "byteorder": "big",
                "collection": "(%s/10)",
                "operatetype": "readHregs",
                "originaltype": "short16_AB"
            },
            "dataType": {
                "type": "float",
                "specs": {
                    "max": 100,
                    "min": -100,
                    "step": 0.01,
                    "unit": "℃",
                    "precision": 3
                }
            },
            "required": true,
            "accessMode": "r",
            "identifier": "temperature"
        },
        {
            "ico": "http://1.117.219.8:1250/group1/group1/long.jpg",
            "name": "湿度",
            "dataForm": {
                "data": "1",
                "rate": 1,
                "order": 1,
                "round": "all",
                "offset": 0,
                "address": "0X00",
                "control": "%d",
                "slaveid": "0X01",
                "protocol": "modbus",
                "strategy": "20",
                "byteorder": "big",
                "collection": "(%s/10)",
                "operatetype": "readHregs",
                "originaltype": "ushort16_AB"
            },
            "dataType": {
                "type": "float",
                "specs": {
                    "max": 100,
                    "min": 0,
                    "step": 0.01,
                    "unit": "%",
                    "precision": 3
                }
            },
            "required": true,
            "accessMode": "r",
            "identifier": "humidity"
        }
    ]
}
```