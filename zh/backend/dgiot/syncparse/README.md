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

# 数据同步

## API Hook同步

## Livequery同步
parse库修改同步到ets缓存 <br/>	
parse开启livequery<br/>	
编辑
vim /data/shuwa_parse_server/script/config.json <br/>	
修改 **app** 下 **liveQuery** 添加需要同步的表 <br/>	
![](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/parse/livequery_config.png)

登录获取SessionToken
```
shuwa_parse_handler:login_by_account(UserName, Password).
{ok,#{<<"sessionToken">> => <<"r:af99fafcfebbcfe04770e74ca2646b11">>}}
```
shuwa_livequery订阅Device表
```
 shuwa_livequery:subscribe(<<"r:af99fafcfebbcfe04770e74ca2646b11">>, <<"Device">>, #{}),
```

```
handle_info({livequery, #{<<"object">> := Object}}, #task{step = login} = State) ->
    {noreply, do_depploy(Object, State)};

handle_info({livequery, _Other}, State) ->
    {noreply, State};
```
