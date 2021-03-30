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
              "title": 'dgiot_dashboard',
              "collapsable": true,
              "children": [
                  ['web/', '开始'],
                  ['web/dgiot_dashboard/Controller', '总控台'],
                  ['web/dgiot_dashboard/ConfigurationMenu', '菜单配置'],
                  ['web/dgiot_dashboard/AccessConfiguration', '权限配置'],
                  ['web/dgiot_dashboard/UserPermissions', '用户权限'],
                  ['web/dgiot_dashboard/RoleAuthorization', '角色权限'],
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
