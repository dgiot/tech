const head =[
  ['link', {
    rel: 'shortcut icon',
    href: '/favicon.ico',
    type: 'image/x-icon'
  }],
  ['meta', {
    name: 'referrer',
    content: 'never'
  }],
  ['script', {
    src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.slim.min.js'
  }],
  ['script', {
    src: 'https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.2/jquery.fancybox.min.js'
  }],
  ['link', {
    rel: 'stylesheet',
    type: 'text/css',
    href: 'https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.2/jquery.fancybox.min.css'
  }]
]
module.exports = head