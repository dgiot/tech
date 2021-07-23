---
# 编写日期
date: 2021-3-30 14:47:08
# 作者 Github 名称
author: h7ml
# 关键字
keywords: dgiot_dashboard
# 描述
description: dgiot_dashboard 接入说明文档
# 分类
category: frontend web
# 引用
ref: dgiot_dashboard 接入说明文档
---

# 接口调用相关说明

本项目接口请求使用了 axios，并在此基础上进行了二次封装

已封装接口至[shuwa_parse](https://github1s.com/dgiot/dgiot_dashboard/blob/master/src/api/shuwa_parse/index.js)

## shuwa_parse 接口说明


### 1. query_object

- 全局通用查询接口,传入查询表名（tabclass）和查询参数（params）

```javascript
/**
 * DG-IoT全局通用接口方法 查询
 * @param {*} tabclass  表名 必传 不可为空
 * @param {*} params    对应参数 必传  可为{}
 */
export async function query_object(tabclass, params) {
  if (tabclass && params) {
    return request({
      url: `/classes/${tabclass}`,
      method: 'get',
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json',
      },
      params: params,
    })
  } else {
    return Message({
      message: 'tabclass 和 params 字段为必传',
      type: 'error',
      duration: 1 * 1000,
    })
  }
}
```

### 2. get_object

- 全局通用查询单挑接口,传入查询表名（tabclass）和对应 Id（ObjectId）

```javascript
/**
 * DG-IoT全局通用接口方法 查询单条数据
 * @param {*} tabclass  表名 必传 不可为空
 * @param {*} ObjectId   对应查询id 必传
 */
export async function get_object(tabclass, ObjectId) {
  if (tabclass && ObjectId) {
    return request({
      url: `/classes/${tabclass}/${ObjectId}`,
      method: 'get',
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
  } else {
    return Message({
      message: 'tabclass 和 ObjectId字段为必传',
      type: 'error',
      duration: 1 * 1000,
    })
  }
}
```

### 3. del_object

- 全局通用删除接口,传入查询表名（tabclass）和对应 Id（ObjectId）

```javascript
/**
 * DG-IoT全局通用接口方法 删除单条数据
 * @param {*} tabclass  表名 必传 不可为空
 * @param {*} ObjectId   对应查询id 必传
 */

export async function del_object(tabclass, ObjectId) {
  if (tabclass && ObjectId) {
    return request({
      url: `/classes/${tabclass}/${ObjectId}`,
      method: 'DELETE',
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
  } else {
    return Message({
      message: 'tabclass 和 ObjectId字段为必传',
      type: 'error',
      duration: 1 * 1000,
    })
  }
}
```

### 4. update_object

- 全局通用更新数据接口,传入查询表名（tabclass）对应 id（ObjectId）和对应更新参数（data）

```javascript
/**
 * DG-IoT全局通用接口方法 更新单条数据
 * @param {*} tabclass  表名 必传 不可为空
 * @param {*} ObjectId   对应查询id 必传
 * @param {*} data 更新的参数 必传
 */
export async function update_object(tabclass, ObjectId, data) {
  if (tabclass && ObjectId && data) {
    return request({
      url: `/classes/${tabclass}/${ObjectId}`,
      method: 'PUT',
      data: data,
    })
  } else {
    return Message({
      message: 'tabclass  ObjectId 和 data 字段为必传',
      type: 'error',
      duration: 1 * 1000,
    })
  }
}
```

### 5. create_object

- 全局通用创建数据接口,传入查询表名（tabclass）和对应参数（data）

```javascript
/**
 * DG-IoT全局通用接口方法 创建对象
 * @param {*} tabclass  表名 必传 不可为空
 * @param {*} data   创建对象相关参数
 */

export async function create_object(tabclass, data) {
  if (tabclass && data) {
    return request({
      url: `/classes/${tabclass}`,
      method: 'POST',
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json',
      },
      data: data,
    })
  } else {
    return Message({
      message: 'tabclass 和 data字段为必传',
      type: 'error',
      duration: 1 * 1000,
    })
  }
}
```

## 使用全局挂载的方法

已经这些方法全局挂载在 vue 原型上，有两种调用方式

### 1. 异步方式调用

```javascript
<script>
mounted(){
  this.searchProduct();
},
mehtods(){
   async searchProduct() {
      const parsms = {
        order: "-updatedAt",
        limit: 10,
        where: {}
      };
      const { results } = await this.$query_object("Product", parsms); // 为es6 解构赋值
      // 等同于 const res = await this.$query_object("Product", parsms);
      // const results = res.results
   }
}
</script>
```

### 2. 普通方式调用

```javascript
<script>
mounted(){
  this.searchProduct();
},
mehtods(){
  searchProduct() {
      const parsms = {
        order: "-updatedAt",
        limit: 10,
        where: {}
      };
       this.$query_object("Product", parsms)
        .then(res=>{
          // Callback success
           const { results }  = res // 为es6结构赋值 等同于
          //  const results = res.results
       })
        .catch(error => {
          // error
        })
   }
}
</script>
```

## 使用未全局挂載的方法

### 1. 异步方式调用
```javascript
<script>
import { queryDict } from '@/api/Direct/index.js'
mounted(){
  this.searchDict();
},
mehtods(){
   async searchDict() {
      const parsms = {
        order: "-updatedAt",
        limit: 10,
        where: {}
      };
      const { results } = await queryDict(parsms); // 为es6 解构赋值
      // 等同于 const res = await queryDict(parsms);
      // const results = res.results
   }
}
</script>
```

### 2. 普通方式调用

```javascript
<script>
import { queryDict } from '@/api/Direct/index.js'
mounted(){
  this.searchDict();
},
mehtods(){
  searchDict() {
      const parsms = {
        order: "-updatedAt",
        limit: 10,
        where: {}
      };
      queryDict(parsms)
        .then(res=>{
          // Callback success
           const { results }  = res // 为es6结构赋值 等同于
          //  const results = res.results
       })
        .catch(error => {
          // error
        })
   }
}
</script>
```

## 拓展

### 1. 自定义请求头 header

可以将 header 在请求时传参过去

#### 定义方法

```javascript
export async function query_object_header(tabclass, params, headers) {
  if (tabclass && params) {
    return request({
      url: `iotapi/classes/${tabclass}`,
      method: 'get',
      headers,
      params,
    })
  } else {
    return Message({
      message: 'tabclass 和 params 字段为必传',
      type: 'error',
      duration: 1 * 1000,
    })
  }
}
```

#### 全局挂载

在[`src\utils\utilwen.js`](https://github1s.com/dgiot/dgiot_dashboard/blob/master/src/utils/utilwen.js)文件夹引入这个方法，并挂载到原型上

```javascript
import { query_object_header } from '@/api/shuwa_parse'
```

```javascript
export default {
  install(Vue, options) {
    Vue.prototype.$query_object_header = query_object_header
  },
}
```

### 2. 二次封装

#### 二次封装示例 `src\api\Dict\index.js`

```javascript
import { query_object, create_object } from '@/api/shuwa_parse'

export async function queryDict(params) {
  return query_object('Dict', params)
}

export async function getBatchNumer() {
  const params = {
    order: '-createdAt',
    where: {
      type: 'batch_number',
    },
  }
  return query_object('Dict', params)
}

export async function createBatchNumer(params) {
  return create_object('Dict', params)
}
```

#### 二次封装全局挂载

[`src\utils\utilwen.js`](https://github1s.com/dgiot/dgiot_dashboard/blob/master/src/utils/utilwen.js)

```javascript
import { getBatchNumer, createBatchNumer } from '@/api/Dict'
export default {
  install(Vue, options) {
    Vue.prototype.$getBatchNumer = getBatchNumer
    Vue.prototype.$createBatchNumer = createBatchNumer
  },
}
```
