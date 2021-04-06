const locales = {
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
}

module.exports  = locales