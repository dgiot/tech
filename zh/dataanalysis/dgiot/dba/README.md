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

# 查询单个Device时序数据
**简要描述：** 

- 获取当前设备时序数据

**请求URL：** 
- ` http://prod.iotn2n.com:5080/iotapi/device `
  
  
**请求方式：**
- GET 

**参数：** 

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|deviceid  |是  |string |设备ID   |
|order | 否  |string | 排序方式, 负为降序, eg: score,-name    |
|limit     |否  |integer | limit, 显示多少条记录，显示100条记录 eg:100    |
|skip     |否  |integer | skip, 从第几条记录开始    |
|keys     |否  |string | 需要显示的字段,加count(*)则结果里面会显示总记录数, last_row为获取最后一条记录, eg: username,email    |
|where     |否  |integer | 过滤条件，eg: {"createdat": {"$gte":"now - 10d"}}    |

```
curl -X GET "http://prod.iotn2n.com:5080/iotapi/device/69c7f9e376?order=createdAt&limit=10&skip=10&where=%7B%22createdat%22%3A%20%7B%22%24gte%22%3A%22now%20-%2010d%22%7D%7D" -H "accept: application/json" -H "authorization: Basic YWRtaW46c3dTV2lvdG4ybi5jb20="
```
 **返回示例**
``` 
  {
    "results": [
      {
        "activetotalenergy": 0,
        "createdat": "2021-04-14 03:27:02.577"
      },
      {
        "activetotalenergy": 0,
        "createdat": "2021-04-14 03:27:12.582"
      },
      {
        "activetotalenergy": 0,
        "createdat": "2021-04-14 03:27:22.512"
      },
      {
        "activetotalenergy": 0,
        "createdat": "2021-04-14 03:27:32.451"
      },
      {
        "activetotalenergy": 0,
        "createdat": "2021-04-14 03:27:42.515"
      },
      {
        "activetotalenergy": 0,
        "createdat": "2021-04-14 03:27:52.389"
      },
      {
        "activetotalenergy": 0,
        "createdat": "2021-04-14 03:28:02.390"
      },
      {
        "activetotalenergy": 0,
        "createdat": "2021-04-14 03:28:12.454"
      },
      {
        "activetotalenergy": 0,
        "createdat": "2021-04-14 03:28:22.360"
      },
      {
        "activetotalenergy": 0,
        "createdat": "2021-04-14 03:28:32.279"
      }
    ]
  }
```
 **返回参数说明** 


 **备注** 

- 更多返回错误代码请看首页的错误代码描述


#RESTful接口使用帮助

 **重复登录问题解决方案：**
 
 curl 是常用的命令行工具，用来请求 Web 服务器。它的名字就是客户端（client）的 URL 工具的意思。
 
 它的功能非常强大，命令行参数多达几十种。其中 -u 参数可以用来设置服务器认证的用户名和密码。
 
 - ` $ curl -u 'demo:123456' `
 
 上面命令设置用户名为demo，密码为123456。
 
以上文curl为例：

```
原：curl -X GET "http://prod.iotn2n.com:5080/iotapi/device/a47072cd8b?order=createdAt&limit=10&skip=10&where=%7B%22createdat%22%3A%20%7B%22%24gte%22%3A%22now%20-%2010d%22%7D%7D" -H "accept: application/json" 
现：curl -u 'demo:123456' -X GET "http://prod.iotn2n.com:5080/iotapi/device/a47072cd8b?order=createdAt&limit=10&skip=10&where=%7B%22createdat%22%3A%20%7B%22%24gte%22%3A%22now%20-%2010d%22%7D%7D" -H "accept: application/json" 
```

**TDengine支持SQL语句：**

为支持各种不同类型平台的开发，TDengine提供符合REST设计标准的API，即RESTful API。为最大程度降低学习成本，不同于其他数据库RESTful API的设计方法，TDengine直接通过HTTP POST 请求BODY中包含的SQL语句来操作数据库，仅需要一个URL。
```
http://<ip>:<PORT>/rest/sql
```

curl语法如下：
```
curl -u username:password -d '<SQL>' <ip>:<PORT>/rest/sql
```
注意：SQL语句中的数据表应提供数据库前缀

下面以查询最近十条记录为例
```
curl -H "accept: application/json" -u root:taosdata -d 'SELECT createdat FROM _3ea14b556a._d46d4340d9   order by createdat desc limit 10 ' 121.40.78.136:6041/rest/sql
```
**返回示例**
``` 
  {
      "status":"succ",
      "head":[
          "createdat"
      ],
      "data":[
          [
              "2021-04-20 03:09:42.737"
          ],
          [
              "2021-04-20 03:09:17.726"
          ],
          [
              "2021-04-20 03:08:51.004"
          ],
          [
              "2021-04-20 03:08:14.428"
          ],
          [
              "2021-04-20 03:07:48.258"
          ],
          [
              "2021-04-20 03:07:13.028"
          ],
          [
              "2021-04-20 03:06:47.026"
          ],
          [
              "2021-04-20 03:06:20.609"
          ],
          [
              "2021-04-20 03:05:44.695"
          ],
          [
              "2021-04-20 03:05:18.560"
          ]
      ],
      "rows":10
  }
```