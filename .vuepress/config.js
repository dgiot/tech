const _ = require('lodash')
const path = require('path')
const op = require('./op.header')
const k8s = require('./k8s.header')
const postsHeader = require('./post.header')
const { fe: feHeader, node: nodeHeader, tour: tourHeader,
  china: chinaHeader,
  noVps: noVpsHeader,
  bug: bugHeader,
  code: codeHeader,
  life: lifeHeader,
  growth: growthHeader,
  web: webHeader
} = require('./dir.header')

function getFrontMatter (path, metaFilePath) {
  const posts = require(metaFilePath)
  const postsByPath = _.keyBy(posts, 'path')
  const p = path.split(/\.|\//)[2]
  return _.get(postsByPath, p)
}

// 根据 meta.json 扩展 frontmatter
// 知识库：所有相关博客维护在一个文件夹，并由 meta.json 书写 frontmatter
function extendMetaByPath (page, path) {
  if (page.path.includes(`/${path}`)) {
    const fm = getFrontMatter(page.path, `../${path}/meta`)
    if (fm) {
      page.frontmatter = {
        ...fm,
        ...page.frontmatter
      }
    }
  }
}

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@assets': path.resolve(__dirname, '../assets')
      }
    }
  },
  
  
  
  
  base: '/',
  title: '数蛙技术团队',
  description: '数蛙科技是一家致力于提供物联网垂直领域应用使能平台及解决方案的创新型公司。',
  head: [
    ['link', { rel: 'shortcut icon', href: '/favicon.ico', type: 'image/x-icon' }],
    ['meta', { name: 'baidu-site-verification', content: 'ZAdkE6LA10'}],
    ['meta', { name: 'google-site-verification', content: '_rNB9Nt0ukzWmMfhXSSxCHUAeeMs24OiuhGm4QjdwXA'}] 
  ],
  themeConfig: {
    repo: 'dgiot',
    sidebarDepth: 2,
    nav: [
      {
        text: '用户手册', items: [
          { text: '实例', link: '/test/' },
        ]
      },
      {
        text: '项目部署', items: [
          { text: '数蛙科技', link: 'http://www.iotn2n.com/' },
        ]
      },
      {
        text: '技术博客', items: [
          { text: '数蛙科技', link: 'http://tech.iotn2n.com/' },
        ]
      },
      {
        text: '友情链接', items: [
          { text: '数蛙科技', link: 'http://www.iotn2n.com/' },
        ]
      },
    ],
    sidebar: {
      '/record/': [
        '',
        '2019',
        ['pre-2019', 'Pre 2019'],
        '2018',
        ['2017', 'Pre 2017'],
        ['2016', 'Pre 2016'],
        ['2015', 'Pre 2015']
      ],
      '/op/': op,
      '/k8s/': k8s,
      '/post/': postsHeader,
      '/frontend-engineering/': feHeader,
      '/node/': nodeHeader,
      '/tour/': tourHeader,
      '/note/china/': chinaHeader,
      '/no-vps/': noVpsHeader,
      '/bug/': bugHeader,
      '/code/': codeHeader,
      '/life/': lifeHeader,
      '/growth/': growthHeader,
      '/web-performance/': webHeader
    },

    lastUpdated: 'Last Updated'
  },
  plugins: [
    [ 'feed', {
        
    }],
    [
      'sitemap', {
        hostname: 'https://tech.iotn2n.com'
      },
    ],
    [ 
      '@vuepress/google-analytics',
      {
        'ga': 'UA-102193749-2'
      }
    ], 
    (options, ctx) => {
      return {
        name: 'archive',
        async additionalPages () {
          return [
            // {
            //   path: '/post/',
            //   frontmatter: {
            //     archive: true
            //   }
            // },
            // {
            //   path: '/',
            //   frontmatter: {
            //     home: true
            //   }
            // }
          ]
        },
        extendPageData ($page) {
          extendMetaByPath($page, 'frontend-enginerring')
          extendMetaByPath($page, 'node')
          extendMetaByPath($page, 'post')
          extendMetaByPath($page, 'note/china')

          if ($page.frontmatter.keywords) {
            const meta = $page.frontmatter.meta
            $page.frontmatter.meta = meta ? [
              ...meta,
              {
                name: 'keywords',
                content: $page.frontmatter.keywords
              }
            ] : [
              {
                name: 'keywords',
                content: $page.frontmatter.keywords
              }
            ]
          }
          // if (/^\/(code)\/.+?$/.test($page.path)) {
          //   $page.frontmatter.sidebar = 'auto'
          // }
          if (/^\/op\/.+?$/.test($page.path)) {
            $page.frontmatter.metaTitle = `${$page.title} | 一站式物联网PaaS平台|物联网应用服务|杭州数蛙`
          }
        }
      }
    }
  ]
}
