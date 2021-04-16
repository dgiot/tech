---
# 编写日期
date: 2020-02-07 17:15:26
# 作者 Github 名称
author: johnliu
# 关键字
keywords:
# 描述
description:
# 分类
category: 
# 引用
ref:
---

# 反向代理

  源路径： oldpath
  目标路径: newpath
  源host: 127.0.0.1:5080
  目标host：www.iotn2n.com
  协议: http
  支持modify_path,支持x-forwarded-for
  
 配置词典内容如下：
 
```
{
"key":"oldpath",
"data":{
  "host": "www.iotn2n.com",
  "protocol": "http",
  "modify_path": "newpath",
  "x-forwarded-for": true
}
}
```
在浏览器里面输入
http://127.0.0.1:5080/oldpath

则返回反向代理路径结果

http://www.iotn2n.com/newpath
