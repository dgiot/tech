(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{751:function(t,e,a){"use strict";a.r(e);var l=a(9),v=Object(l.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"查询device-parse数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查询device-parse数据"}},[t._v("#")]),t._v(" 查询Device parse数据")]),t._v(" "),a("p",[a("strong",[t._v("简要描述：")])]),t._v(" "),a("ul",[a("li",[t._v("获取当前设备parse数据")])]),t._v(" "),a("p",[a("strong",[t._v("请求URL：")])]),t._v(" "),a("ul",[a("li",[a("code",[t._v("http://prod.iotn2n.com:5080/iotapi/classes/Device")])])]),t._v(" "),a("p",[a("strong",[t._v("请求方式：")])]),t._v(" "),a("ul",[a("li",[t._v("GET")])]),t._v(" "),a("p",[a("strong",[t._v("参数：")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("参数名")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("必选")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),a("th",[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("order")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("否")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("string")]),t._v(" "),a("td",[t._v("排序方式, 负为降序, eg: score,-name")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("limit")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("否")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("integer")]),t._v(" "),a("td",[t._v("limit, 显示多少条记录，显示100条记录 eg:100")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("skip")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("否")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("integer")]),t._v(" "),a("td",[t._v("skip, 从第几条记录开始")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("keys")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("否")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("string")]),t._v(" "),a("td",[t._v("需要显示的字段,加count(*)则结果里面会显示总记录数, last_row为获取最后一条记录, eg: devaddr,status")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("include")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("否")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("string")]),t._v(" "),a("td",[t._v("include")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("where")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("否")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("integer")]),t._v(" "),a("td",[t._v('过滤条件，eg: {"devaddr":{"$in":["842500EE"]}}')])])])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('curl -X GET "http://suke168.com/iotapi/classes/Device?order=createdAt&limit=10&skip=0&keys=devaddr%2Cstatus&where=%7B%22devaddr%22%3A%7B%22%24in%22%3A%5B%22842500EE%22%5D%7D%7D" -H "accept: application/json" -H "authorization: Basic bGl1c2hvdXhpbjpsaXVzaG91eGlu"\n')])])]),a("p",[a("strong",[t._v("返回示例")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('  {\n    "results": [\n      {\n        "devaddr": "842500EE",\n        "status": "ONLINE",\n        "objectId": "7f484ee521",\n        "createdAt": "2021-04-18T11:06:53.878Z",\n        "updatedAt": "2021-04-19T05:43:14.419Z",\n        "ACL": {\n          "role:admin": {\n            "read": true,\n            "write": true\n          }\n        }\n      }\n    ]\n  }\n')])])]),a("p",[a("strong",[t._v("返回参数说明")])]),t._v(" "),a("p",[a("strong",[t._v("备注")])]),t._v(" "),a("ul",[a("li",[t._v("更多返回错误代码请看首页的错误代码描述")])])])}),[],!1,null,null,null);e.default=v.exports}}]);