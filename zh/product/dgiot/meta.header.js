module.exports = [
    {
        "title": '产品简介',
        "collapsable": true,
        "children": [
            ['product_presentation/', 'DG-IoT介绍'],
            ['product_presentation/product_functions', '产品功能'],
            ['product_presentation/product_architecture', '产品架构'],
            ['product_presentation/word_construction', '名词解释'],
            ['product_presentation/product_advantage', '产品优势'],
            ['product_presentation/public', '中性部署'],
            ['product_presentation/personal', '私人部署'],
        ],
        "category": "一站式物联网平台"
    },
    {
        "title": '设备云',
        "collapsable": true,
        "children": [
            ['device_cloud/', '概述'],
            ['device_cloud/product/', '产品管理'],
            {
                "title": '通道管理',
                "collapsable": true,
                "children": [
                    ['device_cloud/channel/', '什么是通道'],
                    ['device_cloud/channel/instruct', '指令任务通道'],
                    ['device_cloud/channel/mqtt_channel', 'mqtt通道']
                ],
                "category": "一站式物联网平台"
            },
            ['device_cloud/device/', '设备管理'],
            ['device_cloud/group/', '分组管理'],
            {
                "title": '规则管理',
                "collapsable": true,
                "children": [
                    ['device_cloud/rules/rule-engine', '规则引擎'],
                    ['device_cloud/rules/rule-create', '创建规则'],
                    ['device_cloud/rules/rule-example', '检查 (调试)']
                ]
            },
            ['device_cloud/dict/', '字典管理']
        ],
        "category": "一站式物联网平台"
    },
    {
        "title": '多租户',
        "collapsable": true,
        "children": [
            ['tenant/role/', '角色管理'],
            ['tenant/user/', '用户管理'],
            ['tenant/api/', '接口管理'],
            ['tenant/menu/', '菜单管理'],
            ['tenant/job/', '岗位管理'],
            ['tenant/app/', '应用管理']
        ],
        "category": "一站式物联网平台"
    },
        {
            "title": '云运维',
            "collapsable": true,
            "children": [
                ['cloudoperation/', '云运维介绍'],
                ['cloudoperation/alarmmanagement', '告警管理'],
                ['cloudoperation/workmanagement', '工单管理'],
            ],
            "category": "一站式物联网平台"
        },
    // {
    //     "title": '云组态',
    //     "collapsable": true,
    //     "children": [
    //         ['topo/konova/', 'konova']
    //     ],
    //     "category": "一站式物联网平台"
    // },
    {
        "title": '云函数',
        "collapsable": true,
        "children": [
            ['function/exproto/', '扩展管理'],
            ['function/thing/', '解码管理']
        ],
        "category": "一站式物联网平台"
    },
        {
            "title": '云检测',
            "collapsable": true,
            "children": [
                ['clouddetection/', '云检测介绍'],
                ['clouddetection/Qualityinspection', '质检项目'],
                ['clouddetection/Detectiontask', '检测任务'],
                ['clouddetection/Teststandard', '质检标准'],
            ],
            "category": "一站式物联网平台"
        },
    {
        "title": '云系统',
        "collapsable": true,
        "children": [
            // ['system/project/', '工程管理'],
            ['system/cluster/', '集群管理'],
            ['system/deploy/', '部署管理'],
            ['system/plugin/', '插件管理'],
            // ['system/monitor/', '运维管理'],
        ],
        "category": "一站式物联网平台"
    },
    {
        "title": '工具集',
        "collapsable": true,
        "children": [
            ['tools/websocket/', 'mqtt客户端'],
            ['tools/vadio/', '视频播放'],
            //修复vadio无法显示等bug
        ],
        "category": "一站式物联网平台"
    }
]
