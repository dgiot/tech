/*
 * @Author: your name
 * @Date: 2021-02-03 15:20:02
 * @LastEditTime: 2021-02-03 17:26:25
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \blog\.vuepress\dir.header.js
 */
const zh_cloudPosts = require('../zh/manual/cloud/meta')
const zh_edgePosts = require('../zh/manual/edge/meta')
const zh_productPosts = require('../zh/product/meta')
const zh_developPosts = require('../zh/develop/meta')
const zh_blogPosts = require('../zh/blog/meta')
const en_cloudPosts = require('../en/manual/cloud/meta')
const en_edgePosts = require('../en/manual/edge/meta')
const en_productPosts = require('../en/product/meta')
const en_developPosts = require('../en/develop/meta')
const en_blogPosts = require('../en/blog/meta')
// {
//   sideTitle,
//   path,
//   category
// } -> 
// [{ title: category, collapsable: false, children: [] }]
function getHeader (posts) {
  const getPostPair = x => [x.path, x.sideTitle || x.title]

  if (posts[0].category) {
    let category = []
    for (const post of posts) {
      if (post.category) {
        category = [...category, { title: post.category, collapsable: false, children: [ getPostPair(post) ] }] 
      } else {
        category[category.length - 1].children.push(getPostPair(post))
      }
    }
    return category
  }
  return posts.map(getPostPair)
}

module.exports = {
  zh_cloud: getHeader(zh_cloudPosts),
  zh_edge: getHeader(zh_edgePosts),
  zh_product: getHeader(zh_productPosts),
  zh_develop: getHeader(zh_developPosts),
  zh_blog: getHeader(zh_blogPosts),
  en_cloud: getHeader(en_cloudPosts),
  en_edge: getHeader(en_edgePosts),
  en_product: getHeader(en_productPosts),
  en_develop: getHeader(en_developPosts),
  en_blog: getHeader(en_blogPosts),
}
