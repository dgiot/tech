const plugins = [
  ["add-this", {
    pubid: "ra-60642249a725a5ee"
  }],
  [
    "@mr-hope/git",
    {},
  ],
  [
    "photo-swipe",
    {},
  ],
  [
    "@mr-hope/copy-code",
    {},
  ],
  ['feed', {}],
  ['flowchart', {}],
  ['vuepress-plugin-mermaidjs', {}],
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
      async additionalPages() {
        return []
      },
      extendPageData($page) {
        if ($page.frontmatter.keywords) {
          const meta = $page.frontmatter.meta
          $page.frontmatter.meta = meta ? [
            ...meta,
            {
              name: 'keywords',
              content: $page.frontmatter.keywords
            }
          ] : [{
            name: 'keywords',
            content: $page.frontmatter.keywords
          }]
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
module.exports = plugins