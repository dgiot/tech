module.exports = [
    {
        "title": '交互技术',
        "collapsable": true,
        "path": "./",
        "category": "工业数据云平台"
    },
    {
        "title": '云组态',
        "collapsable": true,
        "children": [
            ['dgiottopo/', '开始']
        ],
        "category": "工业数据云平台"
    },
    {
        "title": 'Web前端',
        "collapsable": true,
        "children": [
            {
              "title": '快速入门',
              "collapsable": true,
              "children": [
                  ['web/', '预览'],
                  ['web/dgiot_dashboard/developmentTools', '开发工具和配置'],
                  ['web/dgiot_dashboard/start', '如何开始'],
                  ['web/dgiot_dashboard/config', '全局配置'],
                  ['web/dgiot_dashboard/interface_alignment', '后端接口联调'],
                  ['web/dgiot_dashboard/alert', '注意事项'],
                  ['web/dgiot_dashboard/deploy', '构建发布'],
              ],
              "category": "一站式物联网平台"
          },
          {
            "title": '开发指南',
            "collapsable": true,
            "children": [
                ['web/development', '总览'],
                ['web/Interface', '接口'],
                ['web/detail/_Role', '_Role 角色'],
                ['web/detail/Crond', '_Crond 任务'],
                ['web/detail/Device', 'Device 设备'],
                ['web/detail/Product', 'Product 产品'],
                ['web/detail/Menu', 'Menu 菜单'],
                ['web/detail/_User', '_User 用户'],
                ['web/detail/Instruct', 'Instruct 指令'],
                ['web/detail/Timescale', 'Timescale 时序管理'],
                ['web/detail/Dict', 'Dict 字典'],
                ['web/detail/Notification', 'Notification 通知管理'],
                ['web/detail/App', 'App 应用管理'],
                ['web/detail/_Session', '_Session 会话管理'],
                ['web/detail/_Installation', '_Installation 部署管理'],
                ['web/detail/Permission', 'Permission 权限管理'],
                ['web/detail/Project', 'Project 项目管理'],
                ['web/detail/Channel', 'Channel 通道管理'],
                ['web/detail/View', 'View 视图管理'],
                ['web/detail/License', 'License 授权管理'],
                ['web/detail/DBA', 'DBA 数据库'],
                ['web/detail/Data', 'Data 数据管理'],
                ['web/detail/Rule', 'Rule 规则引擎'],
                ['web/detail/Stsyem', 'Stsyem 系统管理'],
                ['web/detail/EXPROTO', 'EXPROTO 拓展编程'],
                ['web/detail/Decoder', 'Decoder 解码器'],
                ['web/detail/Group', 'Group 组'],
            ],
            "category": "一站式物联网平台"
        },
        ],
        "category": "工业数据云平台"
    },
    {
        "title": '安卓App',
        "collapsable": true,
        "children": [
            ['androidapp/', '开始']
        ],
        "category": "工业数据云平台"
    },
    {
        "title": '苹果App',
        "collapsable": true,
        "children": [
            ['iosapp/', '开始']
        ],
        "category": "工业数据云平台"
    },
    {
        "title": '微信小程序',
        "collapsable": true,
        "children": [
            ['wechat/', '开始']
        ],
        "category": "工业数据云平台"
    },
    {
        "title": 'Konva',
        "collapsable": true,
        "children": [
            ['konva/overview', '概述'],
            ['konva/how_it_works', '设计概要'],
            ['konva/tools', '配套工具'],
            ['konva/support', '技术支持'],
        ],
        "category": "工业数据云平台"
    },
    {
        "title": 'Parse-Server',
        "collapsable": true,
        "children": [
            ['parse/parse', '简介'],
            ['parse/get-started', '开始'],
            ['parse/Object', '对象Objects'],
            ['parse/Query', '查询Queries'],
            ['parse/Live Query', '实时查询Live Queries'],
            ['parse/Users', '用户Users'],
            ['parse/Session', '会话Session'],
            ['parse/Roles', '角色Roles'],
            ['parse/Files', '角色Files'],
            ['parse/Promise', '链式写法Promise'],
            ['parse/Geo Point', '坐标GeoPoint'],
            ['parse/config', '配置Config'],
            ['parse/analytics', '分析analytics'],
            ['parse/data', '分析data'],
            ['parse/relation', '对象关系relation'],
            ['parse/error-handling', '错误处理error-handling'],
            ['parse/security', '安全security'],
            ['parse/performance', '性能performance'],
            ['parse/error-code', '错误码error-code'],
            ['parse/parseserver', '番外: ParseServer配置指南'],
            ['parse/dashboard', '番外: 仪表盘配置指南'],
            ['parse/cloudcode', '番外: 云代码使用指南']
        ],
        "category": "工业数据云平台"
    }
]
