const _ = require('lodash')
const path = require('path')
const {
  zh_cloud: zh_cloudHeader,
  zh_edge: zh_edgeHeader,
  zh_product: zh_productHeader,
  zh_develop: zh_developHeader,
  zh_blog: zh_blogHeader,
  en_cloud: en_cloudHeader,
  en_edge: en_edgeHeader,
  en_product: en_productHeader,
  en_develop: en_developHeader,
  en_blog: en_blogHeader,
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
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/': {
      lang: 'zh-CN', // 将会被设置为 <html> 的 lang 属性
      title: '数蛙技术团队',
      description: '数蛙科技是一家致力于提供物联网垂直领域应用使能平台及解决方案的创新型公司。'
    },
    '/en/': {
      lang: 'en-US',
      title: 'DGIOT',
      description: 'Digital frog technology is an innovative company dedicated to providing application enabling platform and solutions in the vertical field of Internet of things'
    }
  },
  head: [
    ['link', { rel: 'shortcut icon', href: '/favicon.ico', type: 'image/x-icon' }],
    ['meta', { name: 'baidu-site-verification', content: 'ZAdkE6LA10'}],
    ['meta', { name: 'google-site-verification', content: '_rNB9Nt0ukzWmMfhXSSxCHUAeeMs24OiuhGm4QjdwXA'}] 
  ],
  themeConfig: {
    repo: 'dgiot',
    sidebarDepth: 2,
    locales: {
      '/': {
        selectText: '选择语言',
        label: '简体中文',
        editLinkText: '在 GitHub 上编辑此页',
        serviceWorker: {
          updatePopup: {
            message: "发现新内容可用.",
            buttonText: "刷新"
          }
        },
        algolia: {},
        nav: [
          {
            text: '用户手册', items: [
              {text: 'DGIOT CLOUD', link: '/zh/manual/cloud/'},
              {text: 'DGIOT EDGE', link: '/zh/manual/edge/'},
            ]
          },
          {
            text: '产品手册', items: [
              {text: 'DGIOT PRODUCT', link: '/zh/product/'},
            ]
          },
          {
            text: '开发指南', items: [
              {text: 'DGIOT DEVELIOP', link: '/zh/develop/'}
            ]
          },
          {
            text: '博客', items: [
              {text: 'DGIOT BLOG', link: '/zh/blog/'}
            ]
          }
        ],
        sidebar: {
          '/zh/manual/cloud/': zh_cloudHeader,
          '/zh/manual/edge/': zh_edgeHeader,
          '/zh/product/': zh_productHeader,
          '/zh/develop/': zh_developHeader,
          '/zh/blog/': zh_blogHeader,
        },
      },
      '/en/': {
      selectText: 'Languages',
      label: 'English',
      editLinkText: 'Edit this page on GitHub',
      serviceWorker: {
        updatePopup: {
          message: "New content is available.",
          buttonText: "Refresh"
        }
      },
      algolia: {},
      nav: [
        {
          text: '用户手册', items: [
            {text: 'DGIOT CLOUD', link: '/en/manual/cloud/'},
            {text: 'DGIOT EDGE', link: '/en/manual/edge/'},
          ]
        },
        {
          text: '产品手册', items: [
            {text: 'DGIOT PRODUCT', link: '/en/product/'},
          ]
        },
        {
          text: '开发指南', items: [
            {text: 'DGIOT DEVELIOP', link: '/en/develop/'}
          ]
        },
        {
          text: '博客', items: [
            {text: 'DGIOT BLOG', link: '/en/blog/'}
          ]
        }
      ],
      sidebar: {
        '/en/manual/cloud/': en_cloudHeader,
        '/en/manual/edge/': en_edgeHeader,
        '/en/product/': en_productHeader,
        '/en/develop/': en_developHeader,
        '/en/blog/': en_blogHeader,
      },
    }
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
