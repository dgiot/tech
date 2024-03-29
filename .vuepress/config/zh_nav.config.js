const zh_nav = [{
    text: '用户手册',
    items: [{
        text: 'DG-IoT工业数据云平台',
        link: '/zh/manual/cloud/'
    },
        {
            text: 'DG-IoT工业边缘网关',
            link: '/zh/manual/edge/'
        },
    ]
},
    {
        text: '产品说明', items: [
            {text: '一站式物联网平台', link: '/zh/product/dgiot/'},
            {text: '一站式云压测平台', link: '/zh/product/dgpress/'},
            {text: '一站式云检测平台', link: '/zh/product/dgtest/'},
            {text: '一站式云工厂平台', link: '/zh/product/dgii/'}
        ]
    },
    {
        text: '开发指南',
        items: [{
            text: '服务架构',
            link: '/zh/backend/'
        },
            {
                text: '交互技术',
                link: '/zh/frontend/'
            },
            {
                text: '数据分析',
                link: '/zh/dataanalysis/'
            }
        ]
    },
    {
        text: '实战教程',
        items: [
            {
                text: '基础知识',
                link: '/zh/blog/knowledge/'
            },
            {
                text: '案例教程',
                link: '/zh/blog/study/'
            }
        ]
    }
]
module.exports = zh_nav
