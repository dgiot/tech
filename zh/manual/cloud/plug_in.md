---
icon: creative
category: 插件插入
---

# 插件的开发使用

## zetag压测场景描述

开发一个新的插件后，在项目的rebar.config文档里{cloud_deps,[]}的方括号中添加该插件名。同理，在{releaes,[]}的方括号中添加{插件名,load}。转到vars-cloud.config中，加上{enable_plugin_插件名,true}。转到data包里的loaded_plugins.tmpl文件，添加{插件名,{{enable_plugin_插件名}}}。再通过msys2,指令cd 打开项目，再输入指令make，完成项目对插件的导入。

