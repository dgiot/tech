(window.webpackJsonp=window.webpackJsonp||[]).push([[144],{619:function(s,t,a){"use strict";a.r(t);var e=a(42),r=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"psk-认证"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#psk-认证"}},[s._v("#")]),s._v(" PSK 认证")]),s._v(" "),a("p",[s._v("如果希望使用 PSK 认证，需要将 "),a("a",{attrs:{href:"#auth-tls"}},[s._v("TLS 认证")]),s._v(" 中的 "),a("code",[s._v("listener.ssl.external.ciphers")]),s._v(" 注释掉，然后配置 "),a("code",[s._v("listener.ssl.external.psk_ciphers")]),s._v("：")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#listener.ssl.external.ciphers = ECDHE-ECDSA-AES256-GCM-SHA384,...")]),s._v("\nlistener.ssl.external.psk_ciphers "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" PSK-AES128-CBC-SHA,PSK-AES256-CBC-SHA,PSK-3DES-EDE-CBC-SHA,PSK-RC4-SHA\n\n")])])]),a("h2",{attrs:{id:"创建模块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建模块"}},[s._v("#")]),s._v(" 创建模块")]),s._v(" "),a("p",[s._v("打开 "),a("a",{attrs:{href:"http://127.0.0.1:18083/#/modules",target:"_blank",rel:"noopener noreferrer"}},[s._v("EMQ X Dashboard"),a("OutboundLink")],1),s._v("，点击左侧的 “模块” 选项卡，选择添加：")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/develop_png/zh_CN/modules/assets/modules.png",alt:"modules.png"}})]),s._v(" "),a("p",[s._v("选择 PSK 认证")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/develop_png/zh_CN/modules/assets/auth_psk1.png",alt:"auth_psk1.png"}})]),s._v(" "),a("p",[s._v("配置相关参数")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/develop_png/zh_CN/modules/assets/auth_psk2.png",alt:"auth_psk2.png"}})]),s._v(" "),a("p",[s._v("点击添加后，模块添加完成")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/develop_png/zh_CN/modules/assets/auth_psk3.png",alt:"auth_psk3.png"}})]),s._v(" "),a("p",[s._v("PSK 的配置文件为 "),a("code",[s._v("psk.txt")]),s._v("，使用冒号"),a("code",[s._v(":")]),s._v(" 分隔 PSK ID 和 PSK：")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("client1:1234\nclient2:abcd\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);