[TOC]

[线上地址](https://tech-5g8h9y7s90510d9e-1253666439.tcloudbaseapp.com/ "线上地址")

### 示例·1
 - 自定义nav导航栏
 需要修改``.vuepress\config.js`` 字段定义
![](http://doc.iotn2n.com/server/index.php?s=/api/attachment/visitFile/sign/229949d2c6ad0030a024337646dd5500&showdoc=.jpg)
 nav的数组
 对应显示内容为
 ![](http://doc.iotn2n.com/server/index.php?s=/api/attachment/visitFile/sign/f3160ae042cf2b18081d0ae19a0612f7&showdoc=.jpg)
 其中repo为github地址。不需要带前缀
 
 - 定义 sidebar![](http://doc.iotn2n.com/server/index.php?s=/api/attachment/visitFile/sign/1733a57554f5b91302b99122159ad919&showdoc=.jpg)则显示内容为
 ![](http://doc.iotn2n.com/server/index.php?s=/api/attachment/visitFile/sign/695371247161ac9c7de60f6dfacbb296&showdoc=.jpg)
 ![](http://doc.iotn2n.com/server/index.php?s=/api/attachment/visitFile/sign/eddadf15a74e9dff375c20cebb6861df&showdoc=.jpg)
 - 引入header示例
 ![](http://doc.iotn2n.com/server/index.php?s=/api/attachment/visitFile/sign/84d3b8f28ec2bcc4efd3733d9c5d491a&showdoc=.jpg)
 ![](http://doc.iotn2n.com/server/index.php?s=/api/attachment/visitFile/sign/6c7b393e367d32097972836c26335890&showdoc=.jpg)
 这是另外一种以json引入的方式定义侧边栏可以看到上图实际效果，这种方式是定义文件夹的
 ![](http://doc.iotn2n.com/server/index.php?s=/api/attachment/visitFile/sign/1e116c50df7ea9b11b77c4b861c874d5&showdoc=.jpg)
 应该必须照这样写
 
 ### 推送到github（建议不要所有人都将项目推送到github）
 **请勿删除修改.github\workflows\deploy.yml** 文件 ,如需修改，请先阅读[GitHub Actions 相关教程](http://www.ruanyifeng.com/blog/2019/09/getting-started-with-github-actions.html "GitHub Actions 相关教程")

 成功推送到github后会通过github action 发布到腾讯云静态托管。需要在当前目录.git/config下新增``  url = https://github.com/dgiot/tech.git``这里开头必须有空格，示例
 ![](http://doc.iotn2n.com/server/index.php?s=/api/attachment/visitFile/sign/83621e12a5a6cb8a2d1c843c2c321094&showdoc=.jpg)
 然后使用命令 ``git push -f origin master`` 需要有仓库权限
 
  ### 二次开发本项目
  本项目主题，位于``.vuepress\theme``下， 主题修改，只需要修改这里面的文件。[二次开发主题文档](https://vuepress.vuejs.org/zh/theme/writing-a-theme.html "二次开发主题文档")