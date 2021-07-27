const zh_cloudHeader = require('../../zh/manual/cloud/meta.header')
const zh_edgeHeader = require('../../zh/manual/edge/meta.header')
const zh_productdgiiHeader = require('../../zh/product/dgii/meta.header')
const zh_productdgiotHeader = require('../../zh/product/dgiot/meta.header')
const zh_productdgpressHeader = require('../../zh/product/dgpress/meta.header')
const zh_productdgtestHeader = require('../../zh/product/dgtest/meta.header')
const zh_backendHeader = require('../../zh/backend/meta.header')
const zh_frontendHeader = require('../../zh/frontend/meta.header')
const zh_dataanalysisHeader = require('../../zh/dataanalysis/meta.header')
const zh_knowledgeHeader = require('../../zh/blog/knowledge/meta.header')
const zh_studyHeader = require('../../zh/blog/study/meta.header')

const en_cloudHeader = require('../../en/manual/cloud/meta.header')
const en_edgeHeader = require('../../en/manual/edge/meta.header')
const en_productHeader = require('../../en/product/meta.header')
const en_developHeader = require('../../en/develop/meta.header')
const en_blogHeader = require('../../en/blog/meta.header')
const zh_nav =  require('./zh_nav.config')
const en_nav =  require('./en_nav.config')
const themeConfig = {
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
      nav: zh_nav,
      sidebar: {
        '/zh/manual/cloud/': zh_cloudHeader,
        '/zh/manual/edge/': zh_edgeHeader,
        '/zh/product/dgiot/': zh_productdgiotHeader,
        '/zh/product/dgii/': zh_productdgiiHeader,
        '/zh/product/dgtest/': zh_productdgtestHeader,
        '/zh/product/dgpress/': zh_productdgpressHeader,
        '/zh/backend/': zh_backendHeader,
        '/zh/frontend/': zh_frontendHeader,
        '/zh/dataanalysis/': zh_dataanalysisHeader,
        '/zh/blog/knowledge/': zh_knowledgeHeader,
        '/zh/blog/study/': zh_studyHeader,
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
      nav: en_nav,
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
}

module.exports = themeConfig
