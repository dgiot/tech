(window.webpackJsonp=window.webpackJsonp||[]).push([[113],{546:function(e,t,a){"use strict";a.r(t);var s=a(9),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[a("a",{attrs:{href:"http://zhenhua-lee.github.io/repository/parse.html",target:"_blank",rel:"noopener noreferrer"}},[a("em",[a("strong",[e._v("原文地址")])]),a("OutboundLink")],1)]),e._v(" "),a("p",[a("img",{attrs:{src:"https://segmentfault.com/img/bVbuHXu?w=520&h=114",alt:"图片描述",title:"图片描述"}})]),e._v(" "),a("p",[e._v("近年来NODEJS发展迅速，很多工程师尤其是前端工程师，用NODEJS来开发一些后端应用。同时，研发效率和研发成本成为开发者关注的重点，对于一些基础常用功能，如何避免重复开发，成为大家关注的重点，而 "),a("a",{attrs:{href:"https://parseplatform.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Parse Server"),a("OutboundLink")],1),e._v(" 就是抽象了常用功能的NODEJS开源项目。")]),e._v(" "),a("p",[e._v("首先，从整体上看看 "),a("code",[e._v("Parse Server")]),e._v(" 提供了哪些基础功能:")]),e._v(" "),a("ul",[a("li",[e._v("用户的登录注册")]),e._v(" "),a("li",[e._v("用户身份的认证")]),e._v(" "),a("li",[e._v("数据存储 && 灵活查询")]),e._v(" "),a("li",[e._v("文件存储")]),e._v(" "),a("li",[e._v("实时查询")]),e._v(" "),a("li",[e._v("消息推送")]),e._v(" "),a("li",[e._v("缓存服务")]),e._v(" "),a("li",[e._v("与云平台很好的对接")]),e._v(" "),a("li",[e._v("自定义业务逻辑与Hook机制")])]),e._v(" "),a("h2",{attrs:{id:"服务快速搭建"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#服务快速搭建"}},[e._v("#")]),e._v(" 服务快速搭建")]),e._v(" "),a("p",[e._v("默认情况下，Parse Server 使用的默认数据库是 "),a("code",[e._v("MonogDB")]),e._v("，所以需要提前安装该数据库。关于数据库的安装与使用不是本文的重点，暂且跳过。")]),e._v(" "),a("div",{staticClass:"language-auto extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("const config = require('./config');\nconst app = express();\n\nvar api = new ParseServer({\n  databaseURI: config.databaseURI,\n  cloud: './cloud/main.js',\n  appId: config.appId,\n  masterKey: config.masterKey,\n  // push: { ... }, // See the Push wiki page\n  // filesAdapter: ..., // 对应不同云厂商的 FilesAdapter \n  // javascriptKey: config.javascriptKey, // js客户端认证\n  liveQuery: { // 建立websocket链接，实现实时通信\n    classNames: ['Sdtuent']\n  }\n});\n\nvar dashboard = new ParseDashboard({\n  \"apps\": [\n    {\n      \"serverURL\": \"http://localhost:1337/parse\",\n      \"appId\": config.appId,\n      \"masterKey\": config.masterKey,\n      \"appName\": \"test\"\n    },\n  ]\n});\n\n// Serve the Parse API at /parse URL prefix\napp.use('/parse', api);\napp.use('/dashboard', dashboard);\n\nconst port = 1337;\nconst httpServer = http.createServer(app);\n\nhttpServer.listen(port, function() {\n  console.log('parse-server-example running on port ' + port + '.');\n});\n\nvar parseLiveQueryServer = ParseServer.createLiveQueryServer(httpServer);\n")])])]),a("p",[e._v("通过上述少量的代码，快速完成服务的搭建，"),a("code",[e._v("/parse")]),e._v(" 是API的前缀，"),a("code",[e._v("/dashboard")]),e._v(" 是后台的页面路由前缀，这样就可以快速使用 Parse Server 提供的各种功能。")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://segmentfault.com/img/bVbuHXC?w=2868&h=878",alt:"图片描述",title:"图片描述"}})]),e._v(" "),a("h2",{attrs:{id:"客户端调用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#客户端调用"}},[e._v("#")]),e._v(" 客户端调用")]),e._v(" "),a("p",[e._v("针对不同环境、不同语言，parse server提供了大量的 "),a("a",{attrs:{href:"https://parseplatform.org/#sdks",target:"_blank",rel:"noopener noreferrer"}},[e._v("SDK"),a("OutboundLink")],1),e._v("，本文以 "),a("code",[e._v("javascript")]),e._v(" 为例进行简单介绍。")]),e._v(" "),a("div",{staticClass:"language-auto extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("<head>\n  <script src=\"https://unpkg.com/parse@2.1.0/dist/parse.js\"><\/script>\n</head>\n<body>\n  ...\n  <script>\n    // 对应服务端设置的id\n    Parse.initialize(${appId}, ${javascriptKey}); \n    Parse.serverURL = 'http://127.0.0.1:1337/parse'\n\n    const username = \"xxx\", password = 'xxxx';\n    const email = 'xxx'\n    async function signup() {\n      try {\n        const user = new Parse.User;\n        user.set('username', username);\n        user.set('password', password);\n        user.set('email', email);\n        const result = await user.signUp();\n        console.log('result is: ', result);\n      } catch(err) {\n        console.log('error: ', err);\n      }\n    }\n    signup();\n  <\/script>\n</body>\n")])])]),a("p",[e._v("上面的示例，是在浏览器端进行用户的注册: 首先引入"),a("code",[e._v("Javascript SDK")]),e._v("；然后进行基本的环境设置 "),a("code",[e._v("Parse.initialize")]),e._v("、"),a("code",[e._v("Parse.serverURL")]),e._v("；第三部就是使用SDK调用 "),a("code",[e._v("user.signUp")]),e._v(" 完成注册。")]),e._v(" "),a("p",[e._v("然后到 "),a("code",[e._v("dashboard")]),e._v("，可以看到 "),a("code",[e._v("user")]),e._v(" 中新增了一条记录:")]),e._v(" "),a("div",{staticClass:"language-auto extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('{\n    "results": [\n        {\n            "objectId": "1r2sFIzSRP",\n            "username": "xxx",\n            "createdAt": "2019-02-16T10:30:00.070Z",\n            "updatedAt": "2019-02-16T10:30:00.070Z",\n            "ACL": {\n                "*": {\n                    "read": true\n                },\n                "1r2sFIzSRP": {\n                    "read": true,\n                    "write": true\n                }\n            }\n        }\n    ]\n}\n')])])]),a("h2",{attrs:{id:"重点功能介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#重点功能介绍"}},[e._v("#")]),e._v(" 重点功能介绍")]),e._v(" "),a("h3",{attrs:{id:"权限控制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#权限控制"}},[e._v("#")]),e._v(" 权限控制")]),e._v(" "),a("p",[e._v("Parse Server的权限控制分为两层: Class level permission(类级别的权限控制)、Object level access control(对象级别的权限控制)。")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://segmentfault.com/img/bVbuHXG?w=1000&h=888",alt:"图片描述",title:"图片描述"}})]),e._v(" "),a("div",{staticClass:"language-auto extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('async function saveData() {\n  const Student = Parse.Object.extend("Student");\n  const student = new Student();\n\n  student.setACL(new Parse.ACL(Parse.User.current()));\n  student.set("name", "小明");\n  student.set("age", 12);\n\n  const result = await student.save();\n  console.log(\'save data: \', result);\n}\nasync function getData() {\n  const Student = Parse.Object.extend("Student");\n  const query = new Parse.Query(Student);\n  query.equalTo(\'name\', \'小明\');\n  const result = await query.find();\n  console.log(\'save data: \', result);\n}\n\nasync function run() {\n  await saveData();\n  await getData(); // 获得一条数据\n  await Parse.User.logOut();\n  // 用另外一个账号登录\n  await getData(); // 结果为空\n}\n')])])]),a("p",[e._v("上述示例设置了 "),a("code",[e._v("Object level access control")]),e._v(" ，只有拥有该 "),a("code",[e._v("object")]),e._v(" 权限的用户，才能获取对应的数据。")]),e._v(" "),a("h3",{attrs:{id:"数据的实时通信"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据的实时通信"}},[e._v("#")]),e._v(" 数据的实时通信")]),e._v(" "),a("p",[e._v("要实现数据的实时通信，通常的做法是搭建一个websocket服务，客户端与服务端建立长连接，这样就可以实现数据的实时通信。"),a("code",[e._v("Parse Server")]),e._v(" 也集成了这个功能，把websocket服务跟HTTP服务整合在一起，便于 client 端统一调用。")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://segmentfault.com/img/bVbuHXX?w=1742&h=442",alt:"图片描述",title:"图片描述"}})]),e._v(" "),a("h3",{attrs:{id:"class的schema问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#class的schema问题"}},[e._v("#")]),e._v(" Class的schema问题")]),e._v(" "),a("p",[e._v("因为 Parse Server 背后的数据存储使用的是 MongoDB，数据格式是 schemaless 的， 但是这并不是说可以随意写入数据:")]),e._v(" "),a("ul",[a("li",[e._v("第一次创建 "),a("code",[e._v("Class")]),e._v(" 的时候，可以自定义字段及类型，同时默认添加 _id、_created_at、_updated_at、_acl 等字段")]),e._v(" "),a("li",[e._v("同时，在底层数据中，存在一个 "),a("code",[e._v("_SCHEMA")]),e._v(" 集合，存储了 Class 的格式信息，约束了数据再次写入时的字段类型")])]),e._v(" "),a("p",[e._v("为了验证上述两点，直接登录 "),a("code",[e._v("MongoDB")]),e._v(" 数据库后台:")]),e._v(" "),a("div",{staticClass:"language-auto extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('// step1: 登录数据库后台\nmongo\n\n// step2: 查看 collection 情况\nshow collections\n结果如下: \nStudent\n_Role\n_SCHEMA\n_Session\n_User\n\n// step3: 查看 _SCHEMA 内容\ndb.getCollection(\'_SCHEMA\').find()\n结果如下:\n{\n    "_id":"Student",\n    "objectId":"string",\n    "updatedAt":"date",\n    "createdAt":"date",\n    "name":"string",\n    "age":"number",\n    "address":"string"\n}\n...\n')])])]),a("p",[e._v("接下来对Student表进行写入操作，age的类型不是number，而使用string:")]),e._v(" "),a("div",{staticClass:"language-auto extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("async function saveData() {\n  const Student = Parse.Object.extend(\"Student\");\n  const student = new Student();\n\n  student.setACL(new Parse.ACL(Parse.User.current()));\n  student.set(\"name\", \"张三\");\n  student.set(\"age\", '9999');\n  student.set('address', '北京');\n\n  const result = await student.save();\n  console.log('save data: ', result);\n}\n")])])]),a("p",[e._v("执行上述代码，会抛出异常信息 "),a("code",[e._v("schema mismatch for Student.age; expected Number but got String")])]),e._v(" "),a("h3",{attrs:{id:"cloud-code-hook-机制-实现自定义业务逻辑"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cloud-code-hook-机制-实现自定义业务逻辑"}},[e._v("#")]),e._v(" Cloud Code / HOOK 机制 - 实现自定义业务逻辑")]),e._v(" "),a("p",[e._v("如果进行业务开发，肯定存在自定义的业务逻辑，Parse Server 同样提供了对应的解决途径。")]),e._v(" "),a("p",[e._v("先来看看 "),a("a",{attrs:{href:"https://docs.parseplatform.org/cloudcode/guide/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cloud Code"),a("OutboundLink")],1),e._v(" 是如何工作的:")]),e._v(" "),a("div",{staticClass:"language-auto extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('// step1 在Parse Server入口处指定路径\nvar api = new ParseServer({\n  ...\n  cloud: \'./cloud/main.js\',\n  ...\n});\n// step2 定义一般的Function\nParse.Cloud.define("averageStars", async (request, response) => {\n  const params = request.params;\n  ...\n  const result = ...\n  response.success(result);\n});\n// 定义hook函数\nParse.Cloud.beforeSave("Student", (request) => {\n  ...\n});\n// step3 客户端调用自定义函数方式\nasync function invokeFn() {\n  const params =  {  ... };\n  const ratings = await Parse.Cloud.run("averageStars", params);\n  console.log(\'ratings: \', ratings);\n}\n// 客户端出发hook比较简单，对Student进行写入，就会触发hook函数\nasync function saveData() {\n  const Student = Parse.Object.extend("Student");\n  const student = new Student();\n  ...\n  const result = await student.save();\n}\n')])])]),a("p",[e._v("同时，Parse Server 也支持远程调用，使用 Dashboard 的 Webhook功能，就可以配置远程调用API")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://segmentfault.com/img/bVbuHX3?w=2866&h=1156",alt:"图片描述",title:"图片描述"}})]),e._v(" "),a("h2",{attrs:{id:"思考总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#思考总结"}},[e._v("#")]),e._v(" 思考总结")]),e._v(" "),a("p",[e._v("Parse Server这个开源项目给了不少项目设计上的思考:")]),e._v(" "),a("ul",[a("li",[e._v("具体功能抽象，把一些常用功能抽象出来，是研发提效的一个很重要的手段")]),e._v(" "),a("li",[e._v("server + client模式，抽象出业务模型之后，如果只是解决了某一部分的问题(例如server)，使用成本依然很高，但是如果解决更多链路上的问题，那就会变得更加容易使用和落地。Parser Server不仅提供了server端的实现，而且提供了Dashboard、Client、Adapter等内容")]),e._v(" "),a("li",[e._v("hook功能，用于解决个性化需求，满足业务定制")]),e._v(" "),a("li",[e._v("与云的结合，目前已成为未来技术选型的一个很大趋势，Parse Server 的文件存储，提供了很多云存储相关的 Adapter，快速实现跟云产品的对接")]),e._v(" "),a("li",[e._v("权限控制设计，数据的安全已经成为研发很重要的一个工作，分级控制是个思路")])])])}),[],!1,null,null,null);t.default=n.exports}}]);