<template>
  <div class="container">
    <main class="main-page">
      <h3>系列文章</h3>
      <hr>
      <h3>最新文章</h3>
      <hr>
      <div v-for="post in recentPosts" class="archive-post" :key="post.path + ':recent'">
        <span v-text="dayjs(post.frontmatter.date).format('YYYY/MM/DD')" class="archive-post-date"></span>
        <router-link
          class="nav-link"
          :to="post.path"
        >{{ post.title }}</router-link>
      </div>
      <div class="archive-post">
        <router-link
          class="nav-link"
          to="/post"
        >更多文章...</router-link>
      </div>
      <h3>热门文章</h3>
      <hr>
      <div v-for="post in hotPosts" class="archive-post" :key="post.path + ':hot'">
        <span v-text="dayjs(post.frontmatter.date).format('YYYY/MM/DD')" class="archive-post-date"></span>
        <router-link
          class="nav-link"
          :to="post.path"
        >{{ post.title }}</router-link>
      </div>
      <div class="archive-post">
        <router-link
          class="nav-link"
          to="/post"
        >更多文章...</router-link>
      </div>
    </main>
    <aside class="aside-page">
      <Bar/>
      <h3>友情链接</h3>
      <h3>找到我</h3>
      <ul>
        <li>微信(shanyue94)</li>
        <li><a href="https://www.zhihu.com/people/shfshanyue/activities">知乎</a></li>
        <li><a href="https://juejin.im/user/56a34361816dfa005925a654">掘金</a></li>
        <li><a href="https://www.jianshu.com/u/f014acb0b697">简书</a></li>
      </ul>
    </aside>
  </div>
</template>

<script>
import QR from '@theme/components/QR.vue'
import Bar from '@theme/components/Bar.vue'
import dayjs from 'dayjs'

export default {
  components: { QR, Bar },
  data () {
    return {
      dayjs
    }
  },
  computed: {
    hotPosts () {
      return this.$site.pages
        .filter(page => page.title && page.frontmatter.date && page.frontmatter.hot)
        .sort((x, y) => dayjs(y.frontmatter.hot) - dayjs(x.frontmatter.hot))
        .slice(0, 10)
    },
    recentPosts () {
      return this.$site.pages
        .filter(page => page.title && page.frontmatter.date)
        .sort((x, y) => dayjs(y.frontmatter.date) - dayjs(x.frontmatter.date))
        .slice(0, 10)
    }
  }
}
</script>

