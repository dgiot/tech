(window.webpackJsonp=window.webpackJsonp||[]).push([[293],{700:function(a,t,e){"use strict";e.r(t);var r=e(10),s=Object(r.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("p",[a._v("您的服务端可以使用 api，通过 HTTP/2 通道，接收物联网平台推送的设备消息。本文档为 web 端功能的开发指南，介绍了 web 版本的开发方法。")]),a._v(" "),e("h1",{attrs:{id:"相关信息"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#相关信息"}},[a._v("#")]),a._v(" 相关信息")]),a._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"http://prod.iotn2n.com/",target:"_blank",rel:"noopener noreferrer"}},[a._v("服务端地址"),e("OutboundLink")],1)]),a._v(" "),e("li",[e("a",{attrs:{href:"http://prod.iotn2n.com/swagger/",target:"_blank",rel:"noopener noreferrer"}},[a._v("swagger 文档地址"),e("OutboundLink")],1)])]),a._v(" "),e("h2",{attrs:{id:"接口列表"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#接口列表"}},[a._v("#")]),a._v(" 接口列表")]),a._v(" "),e("h3",{attrs:{id:"_1-role-角色"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-role-角色"}},[a._v("#")]),a._v(" 1. "),e("a",{attrs:{href:"./detail/_Role"}},[a._v("_Role 角色")])]),a._v(" "),e("h4",{attrs:{id:"parse-关于-role-的解释"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#parse-关于-role-的解释"}},[a._v("#")]),a._v(" "),e("a",{attrs:{href:"'https://parse-zh.buzhundong.com/Roles.html'"}},[a._v("parse 关于 Role 的解释")])]),a._v(" "),e("blockquote",[e("p",[a._v("随着你的应用的规模增长，你可能发现你需要更高颗粒度的权限管理来控制用户访问，而不是用户链接 ACL 的方法管理。要解决这个需求，Parse 提供了基于用户角色的权限管理。角色提供了一种合理的方法，通过访问权限对用户分组。角色对象包含了用户和其他角色。任何角色被允许访问的数据，那么角色所包含的用户和角色也可以访问该数据。")])]),a._v(" "),e("blockquote",[e("p",[a._v("比如，在具有角色扮演的应用中，可能有一些用户身份是主人，主人有权限领取皮鞭、项圈等；可能还有一些用户身份是宠物，无权限领取那些物件。如果一个主人有很多宠物，一个个给宠物设置权限是很麻烦的。通过角色，就不必手动的为每个用户授予访问每个资源的权限。")])]),a._v(" "),e("blockquote",[e("p",[a._v("我们提供了一个专门的类 Parse.Role，它在你的客户端代码中代表角色对象，Parse.Role 是 Parse.Object 的子类，并且具有 Parse.Object 的所有功能，比如灵活的模型、自动持久化、键值接口。Parse.Object 的所有方法，Parse.Role 都具备，不同的是，Parse.Role 有角色管理功能。")])]),a._v(" "),e("p",[a._v("通俗点的理解是每个用户都对应着一个或多个角色，角色控制着接口（api）能否调用，控制着菜单（Menu）是否有权限访问，如下图")]),a._v(" "),e("p",[e("img",{attrs:{src:"https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/web/Role/eb752dad-b413-db56-b760-fd53be312c9b.png",alt:"eb752dad-b413-db56-b760-fd53be312c9b.png"}})]),a._v(" "),e("p",[a._v("角色中可以挂载多个用户（user）方便管理调度")]),a._v(" "),e("p",[a._v("而角色是属于部门下的，每个部门可以挂载多个角色\n"),e("img",{attrs:{src:"https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/web/Role/431add77-98e1-9060-0570-c14bf08a859e.png",alt:"431add77-98e1-9060-0570-c14bf08a859e.png"}})]),a._v(" "),e("h3",{attrs:{id:"_2-crond-任务"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-crond-任务"}},[a._v("#")]),a._v(" 2. "),e("a",{attrs:{href:"./detail/Crond"}},[a._v("Crond 任务")])]),a._v(" "),e("h3",{attrs:{id:"_3-device-设备"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-device-设备"}},[a._v("#")]),a._v(" 3. "),e("a",{attrs:{href:"./detail/Device"}},[a._v("Device 设备")])]),a._v(" "),e("h3",{attrs:{id:"_4-product-产品"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-product-产品"}},[a._v("#")]),a._v(" 4. "),e("a",{attrs:{href:"./detail/Product"}},[a._v("Product 产品")])]),a._v(" "),e("h3",{attrs:{id:"_5-menu-菜单"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-menu-菜单"}},[a._v("#")]),a._v(" 5. "),e("a",{attrs:{href:"./detail/Menu"}},[a._v("Menu 菜单")])]),a._v(" "),e("h3",{attrs:{id:"_6-user-用户"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-user-用户"}},[a._v("#")]),a._v(" 6. "),e("a",{attrs:{href:"./detail/_User"}},[a._v("_User 用户")])]),a._v(" "),e("h3",{attrs:{id:"_7-timescale-时序管理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_7-timescale-时序管理"}},[a._v("#")]),a._v(" 7. "),e("a",{attrs:{href:"./detail/Timescale"}},[a._v("Timescale 时序管理")])]),a._v(" "),e("h3",{attrs:{id:"_8-dict-字典"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_8-dict-字典"}},[a._v("#")]),a._v(" 8. "),e("a",{attrs:{href:"./detail/Dict"}},[a._v("Dict 字典")])]),a._v(" "),e("h3",{attrs:{id:"_9-notification-通知管理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_9-notification-通知管理"}},[a._v("#")]),a._v(" 9. "),e("a",{attrs:{href:"./detail/Notification"}},[a._v("Notification 通知管理")])]),a._v(" "),e("h3",{attrs:{id:"_10-app-应用管理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_10-app-应用管理"}},[a._v("#")]),a._v(" 10. "),e("a",{attrs:{href:"./detail/App"}},[a._v("App 应用管理")])]),a._v(" "),e("h3",{attrs:{id:"_11-session-会话管理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_11-session-会话管理"}},[a._v("#")]),a._v(" 11. "),e("a",{attrs:{href:"./detail/_Session"}},[a._v("_Session 会话管理")])]),a._v(" "),e("h3",{attrs:{id:"_12-installation-部署管理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_12-installation-部署管理"}},[a._v("#")]),a._v(" 12. "),e("a",{attrs:{href:"./detail/_Installation"}},[a._v("_Installation 部署管理")])]),a._v(" "),e("h3",{attrs:{id:"_13-permission-权限管理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_13-permission-权限管理"}},[a._v("#")]),a._v(" 13. "),e("a",{attrs:{href:"./detail/Permission"}},[a._v("Permission 权限管理")])]),a._v(" "),e("h3",{attrs:{id:"_14-project-项目管理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_14-project-项目管理"}},[a._v("#")]),a._v(" 14. "),e("a",{attrs:{href:"./detail/Project"}},[a._v("Project 项目管理")])]),a._v(" "),e("h3",{attrs:{id:"_15-channel-通道管理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_15-channel-通道管理"}},[a._v("#")]),a._v(" 15. "),e("a",{attrs:{href:"./detail/Channel"}},[a._v("Channel 通道管理")])]),a._v(" "),e("h3",{attrs:{id:"_16-view-视图管理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_16-view-视图管理"}},[a._v("#")]),a._v(" 16. "),e("a",{attrs:{href:"./detail/View"}},[a._v("View 视图管理")])]),a._v(" "),e("h3",{attrs:{id:"_17-license-授权管理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_17-license-授权管理"}},[a._v("#")]),a._v(" 17. "),e("a",{attrs:{href:"./detail/License"}},[a._v("License 授权管理")])]),a._v(" "),e("h3",{attrs:{id:"_18-dba-数据库"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_18-dba-数据库"}},[a._v("#")]),a._v(" 18. "),e("a",{attrs:{href:"./detail/DBA"}},[a._v("DBA 数据库")])]),a._v(" "),e("h3",{attrs:{id:"_19-data-数据管理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_19-data-数据管理"}},[a._v("#")]),a._v(" 19. "),e("a",{attrs:{href:"./detail/Data"}},[a._v("Data 数据管理")])]),a._v(" "),e("h3",{attrs:{id:"_20-rule-规则引擎"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_20-rule-规则引擎"}},[a._v("#")]),a._v(" 20. "),e("a",{attrs:{href:"./detail/Rule"}},[a._v("Rule 规则引擎")])]),a._v(" "),e("h3",{attrs:{id:"_21-stsyem-系统管理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_21-stsyem-系统管理"}},[a._v("#")]),a._v(" 21. "),e("a",{attrs:{href:"./detail/Stsyem"}},[a._v("Stsyem 系统管理")])]),a._v(" "),e("h3",{attrs:{id:"_22-exproto-拓展编程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_22-exproto-拓展编程"}},[a._v("#")]),a._v(" 22. "),e("a",{attrs:{href:"./detail/EXPROTO"}},[a._v("EXPROTO 拓展编程")])]),a._v(" "),e("h3",{attrs:{id:"_23-decoder-解码器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_23-decoder-解码器"}},[a._v("#")]),a._v(" 23. "),e("a",{attrs:{href:"./detail/Decoder"}},[a._v("Decoder 解码器")])]),a._v(" "),e("h3",{attrs:{id:"_24-group-组"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_24-group-组"}},[a._v("#")]),a._v(" 24. "),e("a",{attrs:{href:"./detail/Group"}},[a._v("Group 组")])])])}),[],!1,null,null,null);t.default=s.exports}}]);