---
title: 如何实现一个简单的 Promise
date: 2019-08-03
tags:
  - javascript
categories:
  - 前端
---

# 如何实现一个简单的 Promise

## 实现

一个简单的 `Promise` 的粗糙实现，关键点在于

1. 当 `pending` 时， `thenable` 函数由一个队列维护
1. 当状态变为 `resolved(fulfilled)` 时，队列中所有 `thenable` 函数执行
1. 当 `resolved` 时， `thenable` 函数直接执行

<!--more-->

`rejected` 状态同理

```javascript
class Prom {
  static resolve (value) {
    if (value && value.then) {
      return value 
    }
    return new Prom(resolve => resolve(value))
  }

  constructor (fn) {
    this.value = undefined
    this.reason = undefined
    this.status = 'PENDING'

    // 维护一个 resolve/pending 的函数队列
    this.resolveFns = []
    this.rejectFns = []

    const resolve = (value) => {
      // 注意此处的 setTimeout
      setTimeout(() => {
        this.status = 'RESOLVED'
        this.value = value
        this.resolveFns.forEach(({ fn, resolve: res, reject: rej }) => res(fn(value)))
      })
    }

    const reject = (e) => {
      setTimeout(() => {
        this.status = 'REJECTED'
        this.reason = e
        this.rejectFns.forEach(({ fn, resolve: res, reject: rej }) => rej(fn(e)))
      })
    }

    fn(resolve, reject)
  }


  then (fn) {
    if (this.status === 'RESOLVED') {
      const result = fn(this.value)
      // 需要返回一个 Promise
      // 如果状态为 resolved，直接执行
      return Prom.resolve(result)
    }
    if (this.status === 'PENDING') {
      // 也是返回一个 Promise
      return new Prom((resolve, reject) => {
        // 推进队列中，resolved 后统一执行
        this.resolveFns.push({ fn, resolve, reject }) 
      })
    }
  }

  catch (fn) {
    if (this.status === 'REJECTED') {
      const result = fn(this.value)
      return Prom.resolve(result)
    }
    if (this.status === 'PENDING') {
      return new Prom((resolve, reject) => {
        this.rejectFns.push({ fn, resolve, reject }) 
      })
    }
  }
}

Prom.resolve(10).then(o => o * 10).then(o => o + 10).then(o => {
  console.log(o)
})

return new Prom((resolve, reject) => reject('Error')).catch(e => {
  console.log('Error', e)
})
```
