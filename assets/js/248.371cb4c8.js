(window.webpackJsonp=window.webpackJsonp||[]).push([[248],{791:function(t,s,a){"use strict";a.r(s);var n=a(8),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"角色"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#角色"}},[t._v("#")]),t._v(" 角色")]),t._v(" "),a("p",[t._v("随着你的应用的规模增长，你可能发现你需要更高颗粒度的权限管理来控制用户访问，而不是用户链接ACL的方法管理。要解决这个需求，Parse提供了基于用户角色的权限管理。角色提供了一种合理的方法，通过访问权限对用户分组。角色对象包含了用户和其他角色。任何角色被允许访问的数据，那么角色所包含的用户和角色也可以访问该数据。")]),t._v(" "),a("p",[t._v("比如，在具有角色扮演的应用中，可能有一些用户身份是主人，主人有权限领取皮鞭、项圈等；可能还有一些用户身份是宠物，无权限领取那些物件。如果一个主人有很多宠物，一个个给宠物设置权限是很麻烦的。通过角色，就不必手动的为每个用户授予访问每个资源的权限。")]),t._v(" "),a("p",[t._v("我们提供了一个专门的类"),a("code",[t._v("Parse.Role")]),t._v("，它在你的客户端代码中代表角色对象，"),a("code",[t._v("Parse.Role")]),t._v("是"),a("code",[t._v("Parse.Object")]),t._v("的子类，并且具有"),a("code",[t._v("Parse.Object")]),t._v("的所有功能，比如灵活的模型、自动持久化、键值接口。"),a("code",[t._v("Parse.Object")]),t._v("的所有方法，"),a("code",[t._v("Parse.Role")]),t._v("都具备，不同的是，"),a("code",[t._v("Parse.Role")]),t._v("有角色管理功能。")]),t._v(" "),a("hr"),t._v(" "),a("h2",{attrs:{id:"parse-role属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parse-role属性"}},[t._v("#")]),t._v(" Parse.Role属性")]),t._v(" "),a("p",[a("code",[t._v("Parse.Role")]),t._v("的这些属性"),a("code",[t._v("Parse.Object")]),t._v("没有：")]),t._v(" "),a("ul",[a("li",[t._v("name：角色名，必需，并且只能在创建的时候设置。这个值是由字母、数字、空格或下划线组成，name将被用来识别角色，而不需要objectId。")]),t._v(" "),a("li",[t._v("users：继承此角色被授予权限的用户。")]),t._v(" "),a("li",[t._v("roles：继承此角色被授予权限的角色。")])]),t._v(" "),a("hr"),t._v(" "),a("h2",{attrs:{id:"角色安全"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#角色安全"}},[t._v("#")]),t._v(" 角色安全")]),t._v(" "),a("p",[a("code",[t._v("Parse.Role")]),t._v("使用的是和Parse上其他对象一样的安全模型（ACL），不同的是它需要被显示的设置。通常，只有权限足够大的用户，比如管理员，才可以创建和修改角色，所以你应该定义合理的ACL。记住，如果你授予一个用户对角色的写权限，那么这个用户可以添加其他用户到这个角色中，甚至删除所有角色。")]),t._v(" "),a("p",[t._v("要创建一个新的"),a("code",[t._v("Parse.Role")]),t._v("，你要这样写：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 为此角色禁用写权限")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" roleACL "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Parse"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ACL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nroleACL"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setPublicReadAccess")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" role "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Parse"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Role")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Administrator"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" roleACL"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nrole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("save")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("你可以通过"),a("code",[t._v("Parse.Role")]),t._v("上的users和roles关联对象，添加用户和角色来继承你的新角色权限：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" role "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Parse"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Role")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("roleName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" roleACL"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nrole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getUsers")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("usersToAddToRole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nrole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getRoles")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rolesToAddToRole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nrole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("save")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("当你指派ACL到你的角色时应尤其小心，确保只有有权修改的用户可以修改数据。")]),t._v(" "),a("hr"),t._v(" "),a("h2",{attrs:{id:"基于角色的对象安全"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基于角色的对象安全"}},[t._v("#")]),t._v(" 基于角色的对象安全")]),t._v(" "),a("p",[t._v("现在你为你的应用创建了一组角色，你可以在ACL中使用他们定义对象权限。每一个"),a("code",[t._v("Parse.Object")]),t._v("可以指定一个"),a("code",[t._v("Parse.ACL")]),t._v("，它提供了访问控制列表，可以标示哪些用户和角色可以读写对象。")]),t._v(" "),a("p",[t._v("给予一个对象某角色的读写权限非常简单：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" moderators "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 查询到的 Parse.Role */")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" wallPost "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Parse"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Object")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"WallPost"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" postACL "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Parse"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ACL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\npostACL"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setRoleWriteAccess")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("moderators"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nwallPost"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setACL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("postACL"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nwallPost"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("save")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("你也可以不使用查询获取角色，直接给ACL指定角色名：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" wallPost "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Parse"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Object")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"WallPost"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" postACL "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Parse"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ACL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\npostACL"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setRoleWriteAccess")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Moderators"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nwallPost"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setACL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("postACL"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nwallPost"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("save")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("hr"),t._v(" "),a("h2",{attrs:{id:"角色等级"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#角色等级"}},[t._v("#")]),t._v(" 角色等级")]),t._v(" "),a("p",[t._v("如上所述，一个角色可以包含另一个角色，两个角色间建立了父子关系，这种关系的结果就是，当父对象的权限被承认后，所有的子对象也会被承认。")]),t._v(" "),a("p",[t._v("这些类型的关系通常在具有用户管理的应用中存在，比如论坛。用户的小部分子集是管理员，具备最高级别的权限，可以创建新板块，设置全局消息等。还有部分用户是版主，他们负责确保用户创建的内容是合适的。任何具备管理员权限的用户也会具备版主的权限。要完成这样的关系，你要使你的管理员角色成为版主角色的子角色：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" administrators "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 你的管理员角色 */")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" moderators "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 你的版主角色 */")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nmoderators"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getRoles")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("administrators"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nmoderators"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("save")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);