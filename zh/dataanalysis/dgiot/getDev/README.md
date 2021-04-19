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

# 查询Device parse数据
**简要描述：** 

- 获取当前设备parse数据

**请求URL：** 
- ` http://prod.iotn2n.com:5080/iotapi/classes/Device `
  
  
**请求方式：**
- GET 

**参数：** 

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|order | 否  |string | 排序方式, 负为降序, eg: score,-name    |
|limit     |否  |integer | limit, 显示多少条记录，显示100条记录 eg:100    |
|skip     |否  |integer | skip, 从第几条记录开始    |
|keys     |否  |string | 需要显示的字段,加count(*)则结果里面会显示总记录数, last_row为获取最后一条记录, eg: devaddr,status    |
|include  |否  |string |  include |
|where     |否  |integer | 过滤条件，eg: {"devaddr":{"$in":["842500EE"]}}    |

```
curl -X GET "http://suke168.com/iotapi/classes/Device?order=createdAt&limit=10&skip=0&keys=devaddr%2Cstatus&where=%7B%22devaddr%22%3A%7B%22%24in%22%3A%5B%22842500EE%22%5D%7D%7D" -H "accept: application/json" -H "authorization: Basic bGl1c2hvdXhpbjpsaXVzaG91eGlu"
```
 **返回示例**
``` 
  {
    "results": [
      {
        "devaddr": "842500EE",
        "status": "ONLINE",
        "objectId": "7f484ee521",
        "createdAt": "2021-04-18T11:06:53.878Z",
        "updatedAt": "2021-04-19T05:43:14.419Z",
        "ACL": {
          "role:admin": {
            "read": true,
            "write": true
          }
        }
      }
    ]
  }
```
 **返回参数说明** 


 **备注** 

- 更多返回错误代码请看首页的错误代码描述


