/*
 * @Author: your name
 * @Date: 2021-02-03 15:20:02
 * @LastEditTime: 2021-02-03 17:26:25
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \blog\.vuepress\dir.header.js
 */
const cloudPosts = require('../cloud/meta')
const edgePosts = require('../edge/meta')
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
  cloud: getHeader(cloudPosts),
  edge: getHeader(edgePosts),
}
