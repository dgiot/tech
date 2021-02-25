const _ = require('lodash')
const path = require('path')
const {
  cloud: cloudHeader,
  edge: edgeHeader,
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
        text: '文档', items: [
          { text: 'DGIOT CLOUD', link: '/cloud/' },
          { text: 'DGIOT EDGE', link: '/edge/' },
        ]
      }
    ],
    sidebar: {
      '/cloud/': cloudHeader,
      '/edge/': edgeHeader,
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
          ]
        },
        extendPageData ($page) {
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
