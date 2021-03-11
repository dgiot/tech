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

在数据集成作业中，输入、转换、输出节点都可以通过自定义脚本来实现功能。

## 支持的语法

脚本使用JavaScript语言进行编写，语法上支持ES5以及ES6的const和let语法。

ES5的语法及常见API可以参考地址： [http://www.ecma-international.org/ecma-262/5.1/index.html](http://www.ecma-international.org/ecma-262/5.1/index.html)

ES6语法

+   const
    
+   +   const声明一个只读的常量，一旦声明，常量的值就就不能改变；
        
    +   const的作用域和let一样，只在声明所在的块级作用域内有效。
        
+   let
    
+   +   在ES5中，只有两种作用域，一种是函数作用域，另一种是全局作用域，这个导致在写脚本的时候容易出现变量覆盖的情况；
        
    +   所以ES6增加了let语法，用于声明变量，用法类似于var，但是所声明的变量只在let所在的代码块内有效；
        
    +   建议在脚本开发的时候函数内部尽量使用let来声明变量，全局的采用var。
        

## 基础扩展API

我们对标准的JavaScript API进行了相应的扩展，以提供访问数据库，调用IoT服务模型， 同步数据到主数据的能力。

如下：

### 1\. 数据库操作

**说明：数据库操作API的使用依赖标准扩展插件包**

`var iotPluginApi = require('./iotPlugin.js'); //(默认已经引用)`

#### 1.1 SQL查询接口 - iotSqlSelect

API: **iotSqlSelect(statement)**

用途：用于在JS脚本中执行sql select语句

<table data-tag="table" id="table-625-cpe-5bz" class="table"><colgroup width="240" span="1" data-tag="col" id="col-t93-ey6-5hi" colwidth="1*" colnum="1" colname="col1" class="col"></colgroup><colgroup width="240" span="1" data-tag="col" id="col-h9u-c35-vsz" colwidth="1*" colnum="2" colname="col2" class="col"></colgroup><colgroup width="240" span="1" data-tag="col" id="col-0cq-akh-ssw" colwidth="1*" colnum="3" colname="col3" class="col"></colgroup><tbody data-tag="tbody" id="tbody-zvw-xmt-ane" class="tbody"><tr data-tag="tr" id="tr-6nd-aq3-yg5" class="tr"><td data-tag="td" id="td-se6-z9l-ve4" class="td"><p data-tag="p" id="p-qon-mpn-al2" class="p">参数</p></td><td data-tag="td" id="td-qis-2qa-jx8" class="td"><p data-tag="p" id="p-hpc-zf3-qbx" class="p">类型</p></td><td data-tag="td" id="td-rht-epn-m98" class="td"><p data-tag="p" id="p-7q8-8ym-u1l" class="p">说明</p></td></tr><tr data-tag="tr" id="tr-qzm-l86-gb3" class="tr"><td data-tag="td" id="td-dn4-7ar-vk0" class="td"><p data-tag="p" id="p-ayc-pcz-deg" class="p">statement</p></td><td data-tag="td" id="td-xzz-7hq-gz8" class="td"><p data-tag="p" id="p-e62-f7z-0y5" class="p">String</p></td><td data-tag="td" id="td-rdc-uak-w4f" class="td"><p data-tag="p" id="p-ymt-wmi-qzo" class="p">需要执行的select sql语句，底层已经适配了数据库，所以这里只需要填写对应的sql语句</p></td></tr><tr data-tag="tr" id="tr-agw-t9e-v2z" class="tr"><td data-tag="td" id="td-06p-c7w-pn4" colspan="1" class="td"></td><td data-tag="td" id="td-1uj-wcl-lf0" colspan="1" class="td"></td><td data-tag="td" id="td-5kc-iao-f7a" colspan="1" class="td"></td></tr></tbody></table>

返回值

<table data-tag="table" id="table-99a-r0n-hu8" class="table"><colgroup width="240" span="1" data-tag="col" id="col-21g-bxg-8au" colwidth="1*" colnum="1" colname="col1" class="col"></colgroup><colgroup width="240" span="1" data-tag="col" id="col-hon-5nz-8wg" colwidth="1*" colnum="2" colname="col2" class="col"></colgroup><colgroup width="240" span="1" data-tag="col" id="col-h7o-e7p-rez" colwidth="1*" colnum="3" colname="col3" class="col"></colgroup><tbody data-tag="tbody" id="tbody-8j9-j87-xr5" class="tbody"><tr data-tag="tr" id="tr-0yi-adp-k37" class="tr"><td data-tag="td" id="td-k1b-san-7uj" class="td"><p data-tag="p" id="p-qnt-1se-ti4" class="p">参数</p></td><td data-tag="td" id="td-v5c-kia-d0m" class="td"><p data-tag="p" id="p-b7j-cco-gj3" class="p">类型</p></td><td data-tag="td" id="td-nni-4sq-thr" class="td"><p data-tag="p" id="p-byu-hdw-sfi" class="p">说明</p></td></tr><tr data-tag="tr" id="tr-at5-rfd-v2b" class="tr"><td data-tag="td" id="td-j3k-6a3-9xz" class="td"><p data-tag="p" id="p-7lv-4i1-j5u" class="p">code</p></td><td data-tag="td" id="td-l5x-fbf-emc" class="td"><p data-tag="p" id="p-uqg-kpl-j1c" class="p">Integer</p></td><td data-tag="td" id="td-rcq-g6l-ajj" class="td"><p data-tag="p" id="p-50q-3bi-6b0" class="p">200代表sql语句执行成功</p><p data-tag="p" id="p-te9-xn1-far" class="p">其他代表sql执执行失败，</p><p data-tag="p" id="p-nol-0ou-3l8" class="p">在使用时需要判断该返回值</p></td></tr><tr data-tag="tr" id="tr-vg3-esm-2ka" class="tr"><td data-tag="td" id="td-znj-287-97q" colspan="1" class="td"><p data-tag="p" id="p-gcq-vww-hng" class="p">data</p></td><td data-tag="td" id="td-6bp-ey2-12f" colspan="1" class="td"><p data-tag="p" id="p-505-gtj-0tc" class="p">RowValueObject[]</p><p data-tag="p" id="p-ren-g6k-ad3" class="p">其中RowValueObject的类型为：</p><p data-tag="p" id="p-i45-y9l-t7g" class="p">Map&lt;String，Object&gt;;</p></td><td data-tag="td" id="td-arw-0pz-8r8" colspan="1" class="td"><p data-tag="p" id="p-mim-hlh-so0" class="p">一个数组对象，数组成员为一个Map&lt;String，Object&gt;对象。</p><p data-tag="p" id="p-vny-mbs-2qi" class="p">对应sql select出来的每一行内容</p><p data-tag="p" id="p-dht-nrp-g16" class="p">Map的Key为列名，Object为该列对应的值。</p><p data-tag="p" id="p-1l7-8ni-7y6" class="p">使用的时候需要判断该数组的长度。</p><p data-tag="p" id="p-ues-tu2-b57" class="p">示例：</p><p data-tag="p" id="p-urm-ohy-sut" class="p">[</p><p data-tag="p" id="p-cma-5l7-cxo" class="p">{"key1":1，"key2":2}，{"key1":3，"key2":4}</p><p data-tag="p" id="p-ovk-d43-gjm" class="p">]</p></td></tr></tbody></table>

使用示例

```javascript
let sqlselect = "select num, name from dbo.TestTable where num < 10";
let sqlResult = iotPluginApi.iotSqlSelect(sqlselect);
if (sqlResult.code == 200 && sqlResult.data.length > 0 ) {
    var packingList = new Array();
    for (var i = 0; i < sqlResult.data.length; i++) {
        var itemData = new Map();
    //每一行的数据
        itemData["id"] = (sqlResult.data)[i]["num"];
        itemData["name"] = (sqlResult.data)[i]["name];
  }    
}
```

#### 1.2 SQL执行接口 - iotSqlExecute

API: **iotSqlExecute(statement)**

用途：用于在JS脚本中执行sql update 或者 delete语句

<table data-tag="table" id="table-nmc-0t7-5fy" class="table"><colgroup width="240" span="1" data-tag="col" id="col-yde-cll-ily" colwidth="1*" colnum="1" colname="col1" class="col"></colgroup><colgroup width="240" span="1" data-tag="col" id="col-cxx-izv-wdc" colwidth="1*" colnum="2" colname="col2" class="col"></colgroup><colgroup width="240" span="1" data-tag="col" id="col-72s-6n2-6o9" colwidth="1*" colnum="3" colname="col3" class="col"></colgroup><tbody data-tag="tbody" id="tbody-8j0-a7u-yxv" class="tbody"><tr data-tag="tr" id="tr-ths-95s-og7" class="tr"><td data-tag="td" id="td-h2q-s45-959" class="td"><p data-tag="p" id="p-dbm-nzg-20b" class="p">参数</p></td><td data-tag="td" id="td-q6b-169-uiu" class="td"><p data-tag="p" id="p-5hv-x0i-3im" class="p">类型</p></td><td data-tag="td" id="td-mx2-2jm-5rb" class="td"><p data-tag="p" id="p-4t1-wpr-k6h" class="p">说明</p></td></tr><tr data-tag="tr" id="tr-elk-pud-1mr" class="tr"><td data-tag="td" id="td-qv7-bcg-xqa" class="td"><p data-tag="p" id="p-o65-2dt-3ar" class="p">statement</p></td><td data-tag="td" id="td-pmo-99p-93a" class="td"><p data-tag="p" id="p-oa9-ze8-4ye" class="p">String</p></td><td data-tag="td" id="td-pfu-g8k-331" class="td"><p data-tag="p" id="p-j2h-41y-edn" class="p">需要执行的update或delete sql语句，底层已经适配了数据库，所以这里只需要填写对应的sql语句</p></td></tr><tr data-tag="tr" id="tr-h8r-nca-wmq" class="tr"><td data-tag="td" id="td-vxk-p8w-il3" colspan="1" class="td"></td><td data-tag="td" id="td-sn8-7re-k6m" colspan="1" class="td"></td><td data-tag="td" id="td-td8-sk0-fpm" colspan="1" class="td"></td></tr></tbody></table>

返回值

<table data-tag="table" id="table-q0b-tjq-w6u" class="table"><colgroup width="240" span="1" data-tag="col" id="col-ssv-tfd-tvr" colwidth="1*" colnum="1" colname="col1" class="col"></colgroup><colgroup width="240" span="1" data-tag="col" id="col-bgw-81w-157" colwidth="1*" colnum="2" colname="col2" class="col"></colgroup><colgroup width="240" span="1" data-tag="col" id="col-l66-0gi-gky" colwidth="1*" colnum="3" colname="col3" class="col"></colgroup><tbody data-tag="tbody" id="tbody-ktg-e8x-3uo" class="tbody"><tr data-tag="tr" id="tr-3k9-ss6-626" class="tr"><td data-tag="td" id="td-8mw-mhx-vav" class="td"><p data-tag="p" id="p-u72-t14-bxl" class="p">参数</p></td><td data-tag="td" id="td-776-yuc-dru" class="td"><p data-tag="p" id="p-yip-aom-y89" class="p">类型</p></td><td data-tag="td" id="td-6vy-4xf-fc1" class="td"><p data-tag="p" id="p-zu3-ymf-qkr" class="p">说明</p></td></tr><tr data-tag="tr" id="tr-ne2-aj3-ob8" class="tr"><td data-tag="td" id="td-spr-yb7-4cn" class="td"><p data-tag="p" id="p-r20-rhu-ptg" class="p">code</p></td><td data-tag="td" id="td-6mp-yum-4ro" class="td"><p data-tag="p" id="p-t5e-j7u-xkw" class="p">Integer</p></td><td data-tag="td" id="td-fqr-xkc-lw4" class="td"><p data-tag="p" id="p-z49-b7x-ubo" class="p">200代表sql语句执行成功</p><p data-tag="p" id="p-4c4-sc7-2kq" class="p">其他代表sql执执行失败，</p><p data-tag="p" id="p-hsd-9vv-39q" class="p">在使用时需要判断该返回值</p></td></tr><tr data-tag="tr" id="tr-6nj-myr-puh" class="tr"><td data-tag="td" id="td-gsh-wqr-m3z" colspan="1" class="td"><p data-tag="p" id="p-001-xvq-9x1" class="p">data</p></td><td data-tag="td" id="td-mn4-g3p-oix" colspan="1" class="td"><p data-tag="p" id="p-ock-1iv-w24" class="p">Integer</p></td><td data-tag="td" id="td-hls-4nt-jbw" colspan="1" class="td"><p data-tag="p" id="p-gzj-co3-30y" class="p">影响的行数</p></td></tr></tbody></table>

使用示例

```javascript
let sqlUpdate = 'update dbo.TestTable set name = "abc" where num = 1';
let sqlResult = iotPluginApi.iotSqlExecute(sqlUpdate);
if (sqlResult.code == 200) {
    console.log(sqlResult.data);
}
```

#### 1.3 事务处理接口 - iotGetTransaction

API: **iotGetTransaction()**

用途：用于在JS脚本中创建一个事务

返回值：事务对象transaction

<table data-tag="table" id="table-mgj-5b8-hou" class="table"><colgroup width="240" span="1" data-tag="col" id="col-dae-4b9-01o" colwidth="1*" colnum="1" colname="col1" class="col"></colgroup><colgroup width="240" span="1" data-tag="col" id="col-itv-aq2-c0o" colwidth="1*" colnum="2" colname="col2" class="col"></colgroup><colgroup width="240" span="1" data-tag="col" id="col-shh-p8j-gi3" colwidth="1*" colnum="3" colname="col3" class="col"></colgroup><tbody data-tag="tbody" id="tbody-dg7-bdb-nnv" class="tbody"><tr data-tag="tr" id="tr-fqb-3zd-ssr" class="tr"><td data-tag="td" id="td-d2f-rhq-k9v" class="td"><p data-tag="p" id="p-oo4-j7r-umb" class="p">方法</p></td><td data-tag="td" id="td-bwr-o96-6hq" class="td"><p data-tag="p" id="p-q4d-aig-2mw" class="p">作用</p></td><td data-tag="td" id="td-sci-hc4-e7a" class="td"><p data-tag="p" id="p-imd-ars-3un" class="p">说明</p></td></tr><tr data-tag="tr" id="tr-rq2-3nq-62v" class="tr"><td data-tag="td" id="td-swy-ipp-i2t" class="td"><p data-tag="p" id="p-b5j-s3u-5c9" class="p">transaction.select(statement)</p></td><td data-tag="td" id="td-l97-17d-hai" class="td"><p data-tag="p" id="p-gnb-mdu-zeh" class="p">查询数据</p></td><td data-tag="td" id="td-fw3-drv-5p8" class="td"><p data-tag="p" id="p-7zm-iag-9ob" class="p">参考iotSqlSelect的调用方式</p></td></tr><tr data-tag="tr" id="tr-wd5-yrp-47f" class="tr"><td data-tag="td" id="td-zyi-lgd-g7y" colspan="1" class="td"><p data-tag="p" id="p-q0j-v09-grw" class="p">transaction.execute(statement)</p></td><td data-tag="td" id="td-gq9-uup-n9w" colspan="1" class="td"><p data-tag="p" id="p-f15-p00-zy4" class="p">修改或删除数据</p></td><td data-tag="td" id="td-3cg-g1k-3sh" colspan="1" class="td"><p data-tag="p" id="p-aac-zxm-60g" class="p">参考iotSqlExecute的调用方式</p></td></tr><tr data-tag="tr" id="tr-481-xp9-oey" class="tr"><td data-tag="td" id="td-ffc-wxh-3fw" colspan="1" class="td"><p data-tag="p" id="p-6w8-ei1-fdd" class="p">transaction.commit()</p></td><td data-tag="td" id="td-wg8-fii-1vx" colspan="1" class="td"><p data-tag="p" id="p-mlg-8og-rio" class="p">事务提交</p></td><td data-tag="td" id="td-r4f-yos-ust" colspan="1" class="td"></td></tr><tr data-tag="tr" id="tr-ttl-mke-utu" class="tr"><td data-tag="td" id="td-7yv-n0e-d93" colspan="1" class="td"><p data-tag="p" id="p-a03-418-tnz" class="p">transaction.rollback()</p></td><td data-tag="td" id="td-bs0-d21-f4i" colspan="1" class="td"><p data-tag="p" id="p-rzw-6er-c4r" class="p">事务回滚</p></td><td data-tag="td" id="td-cha-yeg-4ls" colspan="1" class="td"></td></tr></tbody></table>

使用示例

```javascript
    let transaction = iotPluginApi.iotGetTransaction();

    let sql1 = "INSERT INTO dbo.TB1(id,name,remark) VALUES("1,'XXX1','YYY1')";
    let sql2 = "INSERT INTO dbo.TB2(id,name,remark) VALUES("1,'XXX2','YYY2')";

    try {
        transaction.execute(sql1);
        transaction.execute(sql2);
    //事务提交
        let r = transaction.commit();
        console.log("commit:" + r);

        return iotPluginApi.newIoTxResult(200, "OK", r);
    } catch (e) {
        console.log("rollback:" + e);
    //事务回滚
        transaction.rollback();
        return iotPluginApi.newIoTxResult(500, "rollback");
    }
```

#### 1.4 数据快照接口 - newDbSnapshot

API: **newDbSnapshot()**

用途：一般用于【数据库查询】输入节点的脚本编辑

<table data-tag="table" id="table-up7-22w-jbb" class="table"><colgroup width="240" span="1" data-tag="col" id="col-y8d-392-gaz" colwidth="1*" colnum="1" colname="col1" class="col"></colgroup><colgroup width="240" span="1" data-tag="col" id="col-9pj-qn5-jrf" colwidth="1*" colnum="2" colname="col2" class="col"></colgroup><colgroup width="240" span="1" data-tag="col" id="col-0nt-x7y-xyr" colwidth="1*" colnum="3" colname="col3" class="col"></colgroup><tbody data-tag="tbody" id="tbody-1f1-ha8-7dy" class="tbody"><tr data-tag="tr" id="tr-u5b-pun-bac" class="tr"><td data-tag="td" id="td-4xp-lny-w5w" class="td"><p data-tag="p" id="p-49h-wco-r67" class="p">参数</p></td><td data-tag="td" id="td-ij1-v10-xb2" class="td"><p data-tag="p" id="p-5gh-66t-60m" class="p">类型</p></td><td data-tag="td" id="td-t08-m2r-uz8" class="td"><p data-tag="p" id="p-1pt-wpk-d16" class="p">说明</p></td></tr><tr data-tag="tr" id="tr-knv-hi9-aaj" class="tr"><td data-tag="td" id="td-lwx-r0o-nfn" class="td"><p data-tag="p" id="p-p8l-vn2-pok" class="p">statement</p></td><td data-tag="td" id="td-p4t-0ej-dms" class="td"><p data-tag="p" id="p-zsf-ot1-4hf" class="p">String</p></td><td data-tag="td" id="td-ykq-kmk-rsq" class="td"><p data-tag="p" id="p-3di-am7-lu9" class="p">需要执行的select sql语句，底层已经适配了数据库。所以这里只需要填写对应的sql语句</p></td></tr><tr data-tag="tr" id="tr-y9f-1ys-2gl" class="tr"><td data-tag="td" id="td-x5c-20v-imd" class="td"></td><td data-tag="td" id="td-0u9-ckx-5cw" class="td"></td><td data-tag="td" id="td-5fu-53u-lfe" class="td"></td></tr></tbody></table>

返回值：快照对象snapshot

使用示例

```javascript
function snapshot(snapshotType, context) {
    if (snapshotType === 'increment') {
        //扫描整张表来计算增量
        return iotPluginApi.newDbSnapshot("SELECT * FROM dbo.TB");
  }
}
```

### 2\. API操作

**说明：API操作的使用依赖HTTP扩展插件包**

`var iotPluginApi = require('./httpPlugin.js'); //(默认已经引用)`

#### 2.1 HTTP GET

API: **httpGet()**

用途：一般用于【API查询】输入节点或者【API依赖】输出节点的脚本编辑

<table data-tag="table" id="table-u7q-2gz-tc1" class="table"><colgroup width="240" span="1" data-tag="col" id="col-51r-fv0-ymr" colwidth="1*" colnum="1" colname="col1" class="col"></colgroup><colgroup width="240" span="1" data-tag="col" id="col-8ao-ol0-hia" colwidth="1*" colnum="2" colname="col2" class="col"></colgroup><colgroup width="240" span="1" data-tag="col" id="col-zcv-ntf-9dj" colwidth="1*" colnum="3" colname="col3" class="col"></colgroup><tbody data-tag="tbody" id="tbody-f1u-hnx-e33" class="tbody"><tr data-tag="tr" id="tr-fml-mas-0bb" class="tr"><td data-tag="td" id="td-ksu-t9y-2ku" class="td"><p data-tag="p" id="p-9r7-j33-1cy" class="p">参数</p></td><td data-tag="td" id="td-45v-6kv-zy3" class="td"><p data-tag="p" id="p-cb1-dv8-erg" class="p">类型</p></td><td data-tag="td" id="td-3b0-zm3-oof" class="td"><p data-tag="p" id="p-g6t-697-urr" class="p">说明</p></td></tr><tr data-tag="tr" id="tr-rug-i3o-kaj" class="tr"><td data-tag="td" id="td-obd-pul-sys" class="td"><p data-tag="p" id="p-0zb-e8k-g5n" class="p">apiPath</p></td><td data-tag="td" id="td-zpw-813-rfj" class="td"><p data-tag="p" id="p-nrm-7q9-kxn" class="p">String</p></td><td data-tag="td" id="td-4t3-u7v-6hd" class="td"><p data-tag="p" id="p-kax-l6h-3k7" class="p">HTTP路径，例如 /api/test</p></td></tr><tr data-tag="tr" id="tr-zzt-lzm-7zv" class="tr"><td data-tag="td" id="td-f52-nba-amo" class="td"><p data-tag="p" id="p-iek-rmr-iut" class="p">headers</p></td><td data-tag="td" id="td-ljb-i8o-ad7" class="td"><p data-tag="p" id="p-svt-fg3-8f1" class="p">Map&lt;String，String&gt;</p></td><td data-tag="td" id="td-0su-kcz-sjm" class="td"><p data-tag="p" id="p-z63-uf0-rmk" class="p">需要扩展的HTTP Header</p></td></tr></tbody></table>

返回值：

<table data-tag="table" id="table-524-2tf-3fi" class="table"><colgroup width="240" span="1" data-tag="col" id="col-6c4-2fa-mpg" colwidth="1*" colnum="1" colname="col1" class="col"></colgroup><colgroup width="240" span="1" data-tag="col" id="col-dlx-mo4-v9z" colwidth="1*" colnum="2" colname="col2" class="col"></colgroup><colgroup width="240" span="1" data-tag="col" id="col-qd3-0bn-v2e" colwidth="1*" colnum="3" colname="col3" class="col"></colgroup><tbody data-tag="tbody" id="tbody-4hn-adx-ekw" class="tbody"><tr data-tag="tr" id="tr-tsd-26t-36i" class="tr"><td data-tag="td" id="td-h30-xox-7ne" class="td"><p data-tag="p" id="p-k94-3kt-52k" class="p">参数</p></td><td data-tag="td" id="td-r99-q8s-sb3" class="td"><p data-tag="p" id="p-2fg-vzu-r1s" class="p">类型</p></td><td data-tag="td" id="td-ukl-3qu-n51" class="td"><p data-tag="p" id="p-eli-8n8-ahw" class="p">说明</p></td></tr><tr data-tag="tr" id="tr-3gw-37v-iem" class="tr"><td data-tag="td" id="td-bm9-55j-16n" class="td"><p data-tag="p" id="p-vqp-031-xzv" class="p">code</p></td><td data-tag="td" id="td-9uu-gox-r7d" class="td"><p data-tag="p" id="p-pgp-e62-3dr" class="p">Integer</p></td><td data-tag="td" id="td-kuk-rcz-95k" class="td"><p data-tag="p" id="p-nj8-1tb-dgq" class="p">200代表HTTP请求成功</p><p data-tag="p" id="p-fk0-qnz-dbu" class="p">其他代表HTTP请求失败，</p><p data-tag="p" id="p-h3h-v02-6gw" class="p">在使用时需要判断该返回值</p></td></tr><tr data-tag="tr" id="tr-pdj-n96-0pi" class="tr"><td data-tag="td" id="td-0kw-v1r-qh0" class="td"><p data-tag="p" id="p-yac-ztz-wx3" class="p">data</p></td><td data-tag="td" id="td-8pq-av4-29r" class="td"><p data-tag="p" id="p-a39-on6-2mr" class="p">String</p></td><td data-tag="td" id="td-rno-eff-805" class="td"><p data-tag="p" id="p-wsl-n9r-sdl" class="p">返回的HTTP BODY</p></td></tr></tbody></table>

使用示例

```javascript
let response = httpPlugin.httpGet('/api/test');
if (response.code === 200) {
    //这里需要对response.data的数据处理
    console.log(response.data);
}
```

#### 2.2 HTTP POST

API: **httpPost()**

用途： 一般用于【API查询】输入节点或者【API依赖】输出节点的脚本编辑

<table data-tag="table" id="table-dr8-ozq-u8t" class="table"><colgroup width="240" span="1" data-tag="col" id="col-82y-ydl-ygg" colwidth="1*" colnum="1" colname="col1" class="col"></colgroup><colgroup width="240" span="1" data-tag="col" id="col-xja-lvr-jij" colwidth="1*" colnum="2" colname="col2" class="col"></colgroup><colgroup width="240" span="1" data-tag="col" id="col-apq-hl2-7nh" colwidth="1*" colnum="3" colname="col3" class="col"></colgroup><tbody data-tag="tbody" id="tbody-fq6-8wi-q9c" class="tbody"><tr data-tag="tr" id="tr-dl7-kun-a17" class="tr"><td data-tag="td" id="td-uoq-z47-tvu" class="td"><p data-tag="p" id="p-prk-zw7-43s" class="p">参数</p></td><td data-tag="td" id="td-r9c-1xc-y69" class="td"><p data-tag="p" id="p-oa2-dwm-z6i" class="p">类型</p></td><td data-tag="td" id="td-b5f-3no-j3u" class="td"><p data-tag="p" id="p-3sx-do7-4n3" class="p">说明</p></td></tr><tr data-tag="tr" id="tr-pek-7if-085" class="tr"><td data-tag="td" id="td-95c-la9-2bd" class="td"><p data-tag="p" id="p-pan-xt4-32h" class="p">apiPath</p></td><td data-tag="td" id="td-mm0-mmi-o9j" class="td"><p data-tag="p" id="p-228-stf-5g6" class="p">String</p></td><td data-tag="td" id="td-iel-c90-say" class="td"><p data-tag="p" id="p-fkm-6cs-089" class="p">HTTP路径，例如 /api/test</p></td></tr><tr data-tag="tr" id="tr-lqr-3zc-z0p" class="tr"><td data-tag="td" id="td-vdc-cyy-r52" colspan="1" class="td"><p data-tag="p" id="p-f2m-hk0-9zk" class="p">jsonBody</p></td><td data-tag="td" id="td-kmk-4su-gx7" colspan="1" class="td"><p data-tag="p" id="p-09g-ieq-ssd" class="p">String</p></td><td data-tag="td" id="td-995-z5q-8kh" colspan="1" class="td"><p data-tag="p" id="p-x6h-9wj-xem" class="p">POST的JSON数据</p></td></tr><tr data-tag="tr" id="tr-m8n-zpo-t6l" class="tr"><td data-tag="td" id="td-3tp-5ze-mum" class="td"><p data-tag="p" id="p-0ln-yih-7u2" class="p">headers</p></td><td data-tag="td" id="td-3ic-4hn-hfp" class="td"><p data-tag="p" id="p-0ap-u23-2mr" class="p">Map&lt;String，String&gt;</p></td><td data-tag="td" id="td-ip1-sg9-dr1" class="td"><p data-tag="p" id="p-pf8-4ba-k67" class="p">需要扩展的HTTP Header</p></td></tr></tbody></table>

返回值：

<table data-tag="table" id="table-cpu-hkg-mr4" class="table"><colgroup width="240" span="1" data-tag="col" id="col-rw0-5qe-t8b" colwidth="1*" colnum="1" colname="col1" class="col"></colgroup><colgroup width="240" span="1" data-tag="col" id="col-9qp-k6f-vj7" colwidth="1*" colnum="2" colname="col2" class="col"></colgroup><colgroup width="240" span="1" data-tag="col" id="col-bin-jj3-syo" colwidth="1*" colnum="3" colname="col3" class="col"></colgroup><tbody data-tag="tbody" id="tbody-5t2-wt1-eqd" class="tbody"><tr data-tag="tr" id="tr-ah6-56y-fyd" class="tr"><td data-tag="td" id="td-qoc-4vk-wya" class="td"><p data-tag="p" id="p-1ln-owj-t1o" class="p">参数</p></td><td data-tag="td" id="td-np5-mj6-q10" class="td"><p data-tag="p" id="p-i36-lam-n3u" class="p">类型</p></td><td data-tag="td" id="td-qtp-9pd-af9" class="td"><p data-tag="p" id="p-kwk-r0w-a91" class="p">说明</p></td></tr><tr data-tag="tr" id="tr-al8-rkc-sn4" class="tr"><td data-tag="td" id="td-ush-335-j7q" class="td"><p data-tag="p" id="p-of2-5v9-ffw" class="p">code</p></td><td data-tag="td" id="td-3q1-nwi-xf2" class="td"><p data-tag="p" id="p-zl7-aoy-roh" class="p">Integer</p></td><td data-tag="td" id="td-g86-zmk-ydo" class="td"><p data-tag="p" id="p-cb2-qkr-p47" class="p">200代表HTTP请求成功</p><p data-tag="p" id="p-lhv-sza-ksz" class="p">其他代表HTTP请求失败，</p><p data-tag="p" id="p-3mb-0t5-hl3" class="p">在使用时需要判断该返回值</p></td></tr><tr data-tag="tr" id="tr-da1-bk2-xxj" class="tr"><td data-tag="td" id="td-6t9-8gu-irq" class="td"><p data-tag="p" id="p-6ny-2pq-qwf" class="p">data</p></td><td data-tag="td" id="td-u38-rcn-eyb" class="td"><p data-tag="p" id="p-mno-fwn-jbm" class="p">String</p></td><td data-tag="td" id="td-b5x-wx8-ivy" class="td"><p data-tag="p" id="p-sfq-sac-all" class="p">返回的HTTP BODY</p></td></tr></tbody></table>

使用示例

```javascript
let response = httpPlugin.httpPostJson('/api/test', '{"name":"abc"}');
if (response.code === 200) {
    //这里需要对response.data的数据处理
    console.log(response.data);
}
```

### 3\. 日志打印

#### 3.1 API: log(format，..args)

用途：格式化日志打印

<table data-tag="table" id="table-h8d-dc2-y50" class="table"><colgroup width="240" span="1" data-tag="col" id="col-23g-jyu-i44" colwidth="1*" colnum="1" colname="col1" class="col"></colgroup><colgroup width="240" span="1" data-tag="col" id="col-i4w-2re-kqy" colwidth="1*" colnum="2" colname="col2" class="col"></colgroup><colgroup width="240" span="1" data-tag="col" id="col-5nh-frw-tok" colwidth="1*" colnum="3" colname="col3" class="col"></colgroup><tbody data-tag="tbody" id="tbody-ypt-fe4-hgg" class="tbody"><tr data-tag="tr" id="tr-wet-6on-x3w" class="tr"><td data-tag="td" id="td-hnv-864-ood" class="td"><p data-tag="p" id="p-vzu-w4f-2ru" class="p">参数</p></td><td data-tag="td" id="td-81k-s70-xbi" class="td"><p data-tag="p" id="p-mkk-mr4-nhp" class="p">类型</p></td><td data-tag="td" id="td-go7-80t-xiy" class="td"><p data-tag="p" id="p-8o2-u5m-bz5" class="p">说明</p></td></tr><tr data-tag="tr" id="tr-x33-hkd-5zi" class="tr"><td data-tag="td" id="td-zo5-96t-y9j" class="td"><p data-tag="p" id="p-ie4-ldr-k5n" class="p">format</p></td><td data-tag="td" id="td-eka-4dk-dsm" class="td"><p data-tag="p" id="p-a66-z3m-bj8" class="p">String</p></td><td data-tag="td" id="td-x2e-0wd-br1" class="td"><p data-tag="p" id="p-h60-5y1-k01" class="p">支持%s，%d，%c，%f等通用的格式转换符号</p></td></tr><tr data-tag="tr" id="tr-pnu-bba-byz" class="tr"><td data-tag="td" id="td-pxa-r2h-kbn" colspan="1" class="td"><p data-tag="p" id="p-ndg-fbp-3hv" class="p">args</p></td><td data-tag="td" id="td-zb2-hzu-lvl" colspan="1" class="td"><p data-tag="p" id="p-vqk-3x8-i07" class="p">Object...</p></td><td data-tag="td" id="td-rhr-yku-wrn" colspan="1" class="td"><p data-tag="p" id="p-ztn-8mb-5q1" class="p">需要打印的参数，可以为多个</p></td></tr></tbody></table>

返回值

使用示例

```javascript
var iotPluginApi = require('./iotPlugin.js');
function transform(eventType,msgPayLoadList){
   iotPluginApi.log("toJSONString %s",utils.toJSONString(msgPayLoadList));
}
```

#### 3.2 API: log(object)

用途： 日志打印

<table data-tag="table" id="table-e0s-3rw-loa" class="table"><colgroup width="240" span="1" data-tag="col" id="col-7ci-c1y-j1r" colwidth="1*" colnum="1" colname="col1" class="col"></colgroup><colgroup width="240" span="1" data-tag="col" id="col-b6d-yoh-43f" colwidth="1*" colnum="2" colname="col2" class="col"></colgroup><colgroup width="240" span="1" data-tag="col" id="col-74h-jmv-j4t" colwidth="1*" colnum="3" colname="col3" class="col"></colgroup><tbody data-tag="tbody" id="tbody-z0n-347-58g" class="tbody"><tr data-tag="tr" id="tr-4mb-7je-1tz" class="tr"><td data-tag="td" id="td-4fp-nea-cup" class="td"><p data-tag="p" id="p-jbo-k0g-nuy" class="p">参数</p></td><td data-tag="td" id="td-s11-80a-qov" class="td"><p data-tag="p" id="p-xho-dtg-t1j" class="p">类型</p></td><td data-tag="td" id="td-75r-r9b-ttk" class="td"><p data-tag="p" id="p-ae1-vs1-45j" class="p">说明</p></td></tr><tr data-tag="tr" id="tr-gbv-1of-re5" class="tr"><td data-tag="td" id="td-bzo-2mt-xn5" class="td"><p data-tag="p" id="p-l4g-paj-yin" class="p">object</p></td><td data-tag="td" id="td-suk-5fy-mdn" class="td"><p data-tag="p" id="p-smj-ugv-otn" class="p">Object</p></td><td data-tag="td" id="td-q0g-m9v-oat" class="td"><p data-tag="p" id="p-o80-f8a-314" class="p">需要打印的对象，可以为String，也可以为其他类型，如果是其他类型，则默认转成相应的String打印出来</p></td></tr></tbody></table>

返回值

使用示例

```javascript
var iotPluginApi = require('./iotPlugin.js');
function transform(eventType,msgPayLoadList){
    iotPluginApi.log(eventType);
  iotPluginApi.log(msgPayLoadList);
  iotPluginApi.log('this is msgPlayLoad:' +msgPayLoadList);
}
```

### 4\. 触发报警通知

API: **t****riggerAlarm****(param)**

用途： 用于在JS脚本中触发一条报警消息到云端的数字工厂，可以指定接收报警的人员，角色和组织。

<table data-tag="table" id="table-l0g-uks-pqs" class="table"><colgroup width="240" span="1" data-tag="col" id="col-drm-ogm-ltt" colwidth="1*" colnum="1" colname="col1" class="col"></colgroup><colgroup width="240" span="1" data-tag="col" id="col-1qs-4te-vgu" colwidth="1*" colnum="2" colname="col2" class="col"></colgroup><colgroup width="240" span="1" data-tag="col" id="col-18u-fbd-4z0" colwidth="1*" colnum="3" colname="col3" class="col"></colgroup><tbody data-tag="tbody" id="tbody-99l-y3f-1xm" class="tbody"><tr data-tag="tr" id="tr-u3o-mfd-j0h" class="tr"><td data-tag="td" id="td-whf-fzb-iiu" class="td"><p data-tag="p" id="p-q2m-z2x-l29" class="p">参数</p></td><td data-tag="td" id="td-dp6-cl1-k6d" class="td"><p data-tag="p" id="p-mwk-sem-fxj" class="p">类型</p></td><td data-tag="td" id="td-3vj-i4u-t64" class="td"><p data-tag="p" id="p-6yu-lki-azi" class="p">说明</p></td></tr><tr data-tag="tr" id="tr-yqu-4fr-sq1" class="tr"><td data-tag="td" id="td-pi8-0m0-706" class="td"><p data-tag="p" id="p-8kv-pmq-ntr" class="p">param</p></td><td data-tag="td" id="td-akg-t7z-ev2" class="td"><p data-tag="p" id="p-ac8-ruf-2d3" class="p">Map&lt;String，Object&gt;</p></td><td data-tag="td" id="td-i3t-cxn-uhh" class="td"><p data-tag="p" id="p-727-qy7-wcq" class="p">param为一个Map结构</p></td></tr><tr data-tag="tr" id="tr-fv5-x5b-8ny" class="tr"><td data-tag="td" id="td-yfe-1ex-87y" colspan="1" class="td"><p data-tag="p" id="p-g0p-oo2-5cg" class="p">param的具体定义如下</p></td><td data-tag="td" id="td-qjl-bst-3zq" colspan="1" class="td"></td><td data-tag="td" id="td-c46-52y-81n" colspan="1" class="td"></td></tr><tr data-tag="tr" id="tr-cur-fvk-gx5" class="tr"><td data-tag="td" id="td-dmf-fag-qir" colspan="1" class="td"><p data-tag="p" id="p-3xy-t2l-q0j" class="p">level</p></td><td data-tag="td" id="td-243-vtf-7t6" colspan="1" class="td"><p data-tag="p" id="p-lyc-vx9-ry6" class="p">Integer</p></td><td data-tag="td" id="td-bnu-7bv-bod" colspan="1" class="td"><p data-tag="p" id="p-phs-tgl-k0j" class="p">报警级别</p><p data-tag="p" id="p-2c8-e1z-sjl" class="p">0：提醒</p><p data-tag="p" id="p-hpy-ht5-sem" class="p">1： 故障</p><p data-tag="p" id="p-1i4-6ez-m4k" class="p">2：报警</p></td></tr><tr data-tag="tr" id="tr-tg4-d1h-6pm" class="tr"><td data-tag="td" id="td-e6x-mqi-jb1" colspan="1" class="td"><p data-tag="p" id="p-zo9-ye3-xdt" class="p">receiverList</p></td><td data-tag="td" id="td-j5y-ivx-g01" colspan="1" class="td"><p data-tag="p" id="p-odt-75m-ah8" class="p">List&lt;String&gt;</p></td><td data-tag="td" id="td-nwt-ttl-4yy" colspan="1" class="td"><p data-tag="p" id="p-qe8-1v3-xuy" class="p">消息接收者的code码集合。</p><p data-tag="p" id="p-k9w-cyq-3tq" class="p">如果receiverType为role，则为角色码，如果receiverType为user，则为identityId，如果receiverType为organization，则为组织ID。</p></td></tr><tr data-tag="tr" id="tr-uxr-02n-wg6" class="tr"><td data-tag="td" id="td-4k9-q9d-qpo" colspan="1" class="td"><p data-tag="p" id="p-33c-77o-zw8" class="p">receiverType</p></td><td data-tag="td" id="td-72y-vi7-qdw" colspan="1" class="td"><p data-tag="p" id="p-xaq-m9j-uau" class="p">String</p></td><td data-tag="td" id="td-6vv-3rh-r8m" colspan="1" class="td"><p data-tag="p" id="p-1r4-ysu-uti" class="p">role：角色</p><p data-tag="p" id="p-sgg-8ha-b9z" class="p">user：人员</p><p data-tag="p" id="p-0q3-pcy-cos" class="p">organization：组织</p><p data-tag="p" id="p-80o-8rz-pfe" class="p">说明：管理员的特殊角色码为ADMINISTRATOR</p></td></tr><tr data-tag="tr" id="tr-5uw-chw-9h2" class="tr"><td data-tag="td" id="td-ul9-ozq-8al" colspan="1" class="td"><p data-tag="p" id="p-7aj-9ok-7nc" class="p">title</p></td><td data-tag="td" id="td-gdp-b83-9yz" colspan="1" class="td"><p data-tag="p" id="p-ant-eo8-z1e" class="p">String</p></td><td data-tag="td" id="td-liz-5ep-4d7" colspan="1" class="td"><p data-tag="p" id="p-a7j-3xo-696" class="p">报警的标题</p></td></tr><tr data-tag="tr" id="tr-2s8-4ka-4pp" class="tr"><td data-tag="td" id="td-7cl-guc-go2" colspan="1" class="td"><p data-tag="p" id="p-pzf-xfu-tw5" class="p">content</p></td><td data-tag="td" id="td-400-y7x-tjp" colspan="1" class="td"><p data-tag="p" id="p-kw6-m8d-daw" class="p">String</p></td><td data-tag="td" id="td-isj-kgz-vwd" colspan="1" class="td"><p data-tag="p" id="p-dgf-fjb-hht" class="p">报警的内容</p></td></tr></tbody></table>

<table data-tag="table" id="table-jjl-cq1-d89" class="table"><colgroup width="240" span="1" data-tag="col" id="col-4su-e58-l7o" colwidth="1*" colnum="1" colname="col1" class="col"></colgroup><colgroup width="240" span="1" data-tag="col" id="col-wo5-p7b-u42" colwidth="1*" colnum="2" colname="col2" class="col"></colgroup><colgroup width="240" span="1" data-tag="col" id="col-s99-yiv-m84" colwidth="1*" colnum="3" colname="col3" class="col"></colgroup><tbody data-tag="tbody" id="tbody-ptk-ust-en7" class="tbody"><tr data-tag="tr" id="tr-k7i-1vc-ims" class="tr"><td data-tag="td" id="td-l2d-lxe-tq7" class="td"><p data-tag="p" id="p-iw8-rkv-6d9" class="p">参数</p></td><td data-tag="td" id="td-n23-j1r-fvt" class="td"><p data-tag="p" id="p-a54-o3a-dcc" class="p">类型</p></td><td data-tag="td" id="td-0q5-2i3-tsr" class="td"><p data-tag="p" id="p-gdy-r1x-7u3" class="p">说明</p></td></tr><tr data-tag="tr" id="tr-530-bgq-eqz" class="tr"><td data-tag="td" id="td-jmc-ohf-hiu" class="td"><p data-tag="p" id="p-yxp-qrh-tb1" class="p">code</p></td><td data-tag="td" id="td-unm-y7h-f2e" class="td"><p data-tag="p" id="p-cq0-uh4-om5" class="p">Integer</p></td><td data-tag="td" id="td-fit-dzb-ezn" class="td"><p data-tag="p" id="p-5fh-xko-z6f" class="p">200代表执行成功</p><p data-tag="p" id="p-88i-frd-zz7" class="p">其他代表执行失败，</p><p data-tag="p" id="p-gw9-6fm-405" class="p">在使用时需要判断该返回值</p></td></tr><tr data-tag="tr" id="tr-j3z-acj-06a" class="tr"><td data-tag="td" id="td-54t-yp4-m18" colspan="1" class="td"><p data-tag="p" id="p-wph-pkf-1xv" class="p">data</p></td><td data-tag="td" id="td-18z-8mg-dep" colspan="1" class="td"><p data-tag="p" id="p-26j-yht-6qq" class="p">Object</p></td><td data-tag="td" id="td-paj-f6f-oen" colspan="1" class="td"><p data-tag="p" id="p-og0-kqa-esi" class="p">无返回，为null</p></td></tr></tbody></table>

使用示例

```javascript
var iotPluginApi = require('./iotPlugin.js');
var Map = Java.type('java.util.HashMap');

function transform(eventType,msgPayLoadList){
   var transformResultList = new Array();
   var receveiverList = ['ADMINISTRATOR'];

  // 这里填入报警的相关参数
   let triggerParam = new Map();
   triggerParam.put("level",1);
   triggerParam.put("receiverList",receveiverList);
   triggerParam.put("receiverType","role")
   triggerParam.put("title","边缘数据集成报警内容自定义标题");
   triggerParam.put('content',"边缘数据集成报警内容:产线异常");
  
  // 这里为调用扩展API触发报警
   iotPluginApi.triggerAlarm(triggerParam);
  
     return transformResultList;
}
```

### 5\. 获取设备的属性

**API: cloudThingPropertiesGet(param)**

用途：获取物联网设备的属性

入参列表

| 
入参名称

 | 

数据类型

 | 

是否必须

 | 

入参描述

 |
| --- | --- | --- | --- |
| 

param

 | 

Map<String，Object>

 | 

param

 | 

param

 |
| 

param的具体定义如下

 |  |  |  |
| 

iotId

 | 

字符串

 | 

否

 | 

设备ID，生活物联网平台为设备颁发的ID，设备的唯一标识符。productKey和deviceName为空时，该入参不允许为空。

 |
| 

productKey

 | 

字符串

 | 

否

 | 

产品的Key，设备证书信息之一。创建产品时，生活物联网平台为该产品颁发的全局唯一标识。当iotId为空时，该参数不允许为空。

 |
| 

deviceName

 | 

字符串

 | 

否

 | 

设备的名称，设备证书信息之一。在注册设备时，自定义的或系统生成的设备名称，具备产品维度内的唯一性。当iotId为空时，该参数不允许为空。

 |

返回值

<table data-tag="table" id="table-06p-qzo-z2s" class="table"><colgroup width="240" span="1" data-tag="col" id="col-x7h-3nm-zgv" colwidth="1*" colnum="1" colname="col1" class="col"></colgroup><colgroup width="240" span="1" data-tag="col" id="col-17t-8q7-uoe" colwidth="1*" colnum="2" colname="col2" class="col"></colgroup><colgroup width="240" span="1" data-tag="col" id="col-9bt-dme-fqk" colwidth="1*" colnum="3" colname="col3" class="col"></colgroup><tbody data-tag="tbody" id="tbody-lb3-m90-fju" class="tbody"><tr data-tag="tr" id="tr-lpi-yyn-wr0" class="tr"><td data-tag="td" id="td-l7c-moa-lzj" class="td"><p data-tag="p" id="p-nuw-kf7-gxj" class="p">参数</p></td><td data-tag="td" id="td-d3p-mnq-wmz" class="td"><p data-tag="p" id="p-6qy-nti-gv7" class="p">类型</p></td><td data-tag="td" id="td-7vo-c3z-o8n" class="td"><p data-tag="p" id="p-8dp-4xh-9kz" class="p">说明</p></td></tr><tr data-tag="tr" id="tr-elq-dqs-na3" class="tr"><td data-tag="td" id="td-1tg-j8v-7s5" class="td"><p data-tag="p" id="p-21r-y4q-rix" class="p">code</p></td><td data-tag="td" id="td-asw-mpv-0kk" class="td"><p data-tag="p" id="p-w45-yhw-usf" class="p">Integer</p></td><td data-tag="td" id="td-6ml-kuy-izf" class="td"><p data-tag="p" id="p-gl7-nz1-mdd" class="p">200代表执行成功</p><p data-tag="p" id="p-r07-vqg-a22" class="p">其他代表执行失败，</p><p data-tag="p" id="p-gws-rnt-zk0" class="p">在使用时需要判断该返回值</p></td></tr><tr data-tag="tr" id="tr-vvv-xru-xvq" class="tr"><td data-tag="td" id="td-w4v-n8f-ytb" colspan="1" class="td"><p data-tag="p" id="p-m3u-vnr-14j" class="p">data</p></td><td data-tag="td" id="td-1ts-5p5-t84" colspan="1" class="td"><p data-tag="p" id="p-fsm-pak-ur9" class="p">Object</p></td><td data-tag="td" id="td-q73-pvn-ry2" colspan="1" class="td"><p data-tag="p" id="p-ld2-9b8-lgv" class="p">无返回，为null</p></td></tr></tbody></table>

使用示例

```javascript
var iotPluginApi = require('./iotPlugin.js');
var Map = Java.type('java.util.HashMap');

function transform(eventType,msgPayLoadList){
  let getParam = new Map();
  getParam.put("productKey","a17nEF9qLYJ");
  getParam.put("deviceName","mIwfRzXY9wLpRFz5RfJJ")
  let result = iotPluginApi.cloudThingPropertiesGet(getParam);

  if (result.code == 200) {
      iotPluginApi.log("获取物的属性成功")
      iotPluginApi.log("属性值为 %s",utils.toJSONString(result.data));
  }
  return;
}
```

### 6\. 设置设备的属性

**API:** **cloudThingPropertiesSet****(param)**

入参列表

| 
入参名称

 | 

数据类型

 | 

是否必须

 | 

入参示例

 | 

入参描述

 |
| --- | --- | --- | --- | --- |
| 

iotId

 | 

字符串

 | 

否

 |  | 

设备ID，物联网平台为设备颁发的ID，设备的唯一标识符。productKey和deviceName为空时，该入参不允许为空

 |
| 

items

 | 

JSON

 | 

是

 | 

{}

 | 

set参数

 |
| 

productKey

 | 

字符串

 | 

否

 |  | 

产品的Key，设备证书信息之一。创建产品时，生活物联网平台为该产品颁发的全局唯一标识。当iotId为空时，该参数不允许为空

 |
| 

deviceName

 | 

字符串

 | 

否

 |  | 

设备的名称，设备证书信息之一。在注册设备时，自定义的或系统生成的设备名称，具备产品维度内的唯一性。当iotId为空时，该参数不允许为空

 |

返回值

<table data-tag="table" id="table-fi8-tlt-7lp" class="table"><colgroup width="240" span="1" data-tag="col" id="col-uqa-ahv-ppp" colwidth="1*" colnum="1" colname="col1" class="col"></colgroup><colgroup width="240" span="1" data-tag="col" id="col-qpx-sg2-6k6" colwidth="1*" colnum="2" colname="col2" class="col"></colgroup><colgroup width="240" span="1" data-tag="col" id="col-sy9-gh3-rju" colwidth="1*" colnum="3" colname="col3" class="col"></colgroup><tbody data-tag="tbody" id="tbody-nl7-wne-r4h" class="tbody"><tr data-tag="tr" id="tr-vr9-dhl-ypw" class="tr"><td data-tag="td" id="td-y2t-72l-7ds" class="td"><p data-tag="p" id="p-w5z-13u-g58" class="p">参数</p></td><td data-tag="td" id="td-f47-r2n-xm7" class="td"><p data-tag="p" id="p-xk6-jvn-hxi" class="p">类型</p></td><td data-tag="td" id="td-dob-pes-mif" class="td"><p data-tag="p" id="p-m4r-fxp-88h" class="p">说明</p></td></tr><tr data-tag="tr" id="tr-crc-5dy-xja" class="tr"><td data-tag="td" id="td-pmo-m7v-4uo" class="td"><p data-tag="p" id="p-mcm-qcn-f34" class="p">code</p></td><td data-tag="td" id="td-uj6-4bz-6lc" class="td"><p data-tag="p" id="p-r9y-je9-0b2" class="p">Integer</p></td><td data-tag="td" id="td-y22-dyt-swm" class="td"><p data-tag="p" id="p-a3p-gl1-7ck" class="p">200代表执行成功</p><p data-tag="p" id="p-v88-psw-gwa" class="p">其他代表执行失败，</p><p data-tag="p" id="p-q23-d06-p9c" class="p">在使用时需要判断该返回值</p></td></tr><tr data-tag="tr" id="tr-5td-k2z-f9g" class="tr"><td data-tag="td" id="td-8ka-sgw-02p" colspan="1" class="td"><p data-tag="p" id="p-zl4-usy-k3m" class="p">data</p></td><td data-tag="td" id="td-cqz-znp-cmd" colspan="1" class="td"><p data-tag="p" id="p-r17-nes-nia" class="p">Object</p></td><td data-tag="td" id="td-56t-js1-ej3" colspan="1" class="td"><p data-tag="p" id="p-v8b-nca-7je" class="p">无返回，为null</p></td></tr></tbody></table>

使用示例

```javascript
var iotPluginApi = require('./iotPlugin.js');
var Map = Java.type('java.util.HashMap');

function transform(eventType,msgPayLoadList){
  let param = new Map();
  let serviceParam = new Map();
  param.put("productKey","a17nEF9qLYJ");
  param.put("deviceName","mIwfRzXY9wLpRFz5RfJJ");
  serviceParam.put("wendu",1);
  serviceParam.put("shidu",2);
  param.put("items",serviceParam);
  let result = iotPluginApi.cloudThingPropertiesSet(param);

  if (result.code == 200) {
      iotPluginApi.log("设置物的属性成功")
  }
  return;
}
```

### 7\. 调用设备的服务

**API:** **cloudThingServiceInvoke**

入参列表

| 
入参名称

 | 

数据类型

 | 

是否必须

 | 

入参示例

 | 

入参描述

 |
| --- | --- | --- | --- | --- |
| 

iotId

 | 

字符串

 | 

否

 | 

xxxxxxxx

 | 

设备ID，物联网平台为设备颁发的ID，设备的唯一标识符。productKey和deviceName为空时，该入参不允许为空

 |
| 

identifier

 | 

字符串

 | 

是

 | 

xxxxxxxx

 | 

服务的标识符

 |
| 

args

 | 

JSON

 | 

是

 | 

{}

 | 

服务入参

 |
| 

productKey

 | 

字符串

 | 

是

 |  | 

产品的Key，设备证书信息之一。创建产品时，生活物联网平台为该产品颁发的全局唯一标识。当iotId为空时，该参数不允许为空

 |
| 

deviceName

 | 

字符串

 | 

是

 |  | 

设备的名称，设备证书信息之一。在注册设备时，自定义的或系统生成的设备名称，具备产品维度内的唯一性。当iotId为空时，该参数不允许为空

 |

返回值

<table data-tag="table" id="table-q3o-d36-hms" class="table"><colgroup width="240" span="1" data-tag="col" id="col-u38-7cd-0zf" colwidth="1*" colnum="1" colname="col1" class="col"></colgroup><colgroup width="240" span="1" data-tag="col" id="col-wkc-hnu-xkd" colwidth="1*" colnum="2" colname="col2" class="col"></colgroup><colgroup width="240" span="1" data-tag="col" id="col-up6-v7y-kvx" colwidth="1*" colnum="3" colname="col3" class="col"></colgroup><tbody data-tag="tbody" id="tbody-awk-47y-d6s" class="tbody"><tr data-tag="tr" id="tr-za4-tbj-htc" class="tr"><td data-tag="td" id="td-fkd-o3q-qpy" class="td"><p data-tag="p" id="p-dgi-8ym-zv5" class="p">参数</p></td><td data-tag="td" id="td-0et-f6x-2nw" class="td"><p data-tag="p" id="p-ffw-a1v-p0i" class="p">类型</p></td><td data-tag="td" id="td-fte-uml-jlk" class="td"><p data-tag="p" id="p-wyf-bhj-akm" class="p">说明</p></td></tr><tr data-tag="tr" id="tr-ddh-f0i-cg6" class="tr"><td data-tag="td" id="td-gm6-rez-gv4" class="td"><p data-tag="p" id="p-nv0-y3k-wd3" class="p">code</p></td><td data-tag="td" id="td-l4s-kp6-6ch" class="td"><p data-tag="p" id="p-ejc-cpi-toh" class="p">Integer</p></td><td data-tag="td" id="td-0o0-rql-ket" class="td"><p data-tag="p" id="p-k8r-s4r-pms" class="p">200代表执行成功</p><p data-tag="p" id="p-q83-wss-i9x" class="p">其他代表执行失败，</p><p data-tag="p" id="p-js2-opc-s33" class="p">在使用时需要判断该返回值</p></td></tr><tr data-tag="tr" id="tr-3xk-4yz-vfx" class="tr"><td data-tag="td" id="td-jyg-59m-htd" colspan="1" class="td"><p data-tag="p" id="p-b27-g9l-vyf" class="p">data</p></td><td data-tag="td" id="td-xh6-3ap-7sq" colspan="1" class="td"><p data-tag="p" id="p-2xn-jvu-2tz" class="p">Object</p></td><td data-tag="td" id="td-rd3-f20-3ha" colspan="1" class="td"><p data-tag="p" id="p-weg-rhs-isu" class="p">无返回，为null</p></td></tr></tbody></table>

使用示例

```javascript
var iotPluginApi = require('./iotPlugin.js');
var Map = Java.type('java.util.HashMap');

function transform(eventType,msgPayLoadList){
  let param = new Map();
  let args =new Map();
  param.put("productKey","a17nEF9qLYJ");
  param.put("deviceName","mIwfRzXY9wLpRFz5RfJJ");
  param.put("identifier","start");
  args.put("param1",1);
  args.put("param2",2);
  param.put("args",args);
  let result = iotPluginApi.cloudThingServiceInvoke(param);

  if (result.code == 200) {
      iotPluginApi.log("调用物的服务成功")
      iotPluginApi.log("返回值为 %s",utils.toJSONString(result.data));
  }
  return;
}
```

### 8\. 工具函数utils

#### 8.1 API: sleep(ms)

用途： 用于在JS脚本中休眠sleep

返回值

使用示例

```javascript
//引用iot扩展Api模块,必须引用
var iotPluginApi = require('./iotPlugin.js');

function transform(eventType,msgPayLoadList){
    utils.sleep(1000);
    iotPluginApi.log("sleep 1 seconds");
}
```

#### 8.2 API: toJSONString(param);

用途： 用于在JS中将一个JS对象转成JSON字符串5.1 API: **sle****ep****(ms);**

<table data-tag="table" id="table-vds-qsx-42n" class="table"><colgroup width="240" span="1" data-tag="col" id="col-3m8-4fg-mgk" colwidth="1*" colnum="1" colname="col1" class="col"></colgroup><colgroup width="240" span="1" data-tag="col" id="col-msa-k5r-o3b" colwidth="1*" colnum="2" colname="col2" class="col"></colgroup><colgroup width="240" span="1" data-tag="col" id="col-r6m-f71-tk4" colwidth="1*" colnum="3" colname="col3" class="col"></colgroup><tbody data-tag="tbody" id="tbody-5t9-s9x-r1g" class="tbody"><tr data-tag="tr" id="tr-pfr-3a5-zoj" class="tr"><td data-tag="td" id="td-6pj-ru9-ism" class="td"><p data-tag="p" id="p-05j-5bv-rt1" class="p">参数</p></td><td data-tag="td" id="td-h34-rsp-4xz" class="td"><p data-tag="p" id="p-gs7-ghm-myz" class="p">类型</p></td><td data-tag="td" id="td-pz5-3sw-y6e" class="td"><p data-tag="p" id="p-zrw-1d6-73j" class="p">说明</p></td></tr><tr data-tag="tr" id="tr-4k3-hfq-y2h" class="tr"><td data-tag="td" id="td-tcl-7o8-9y3" class="td"><p data-tag="p" id="p-8wg-rrn-jpo" class="p"><b><u data-tag="u" class="u">param</u></b></p></td><td data-tag="td" id="td-6li-kho-jww" class="td"><p data-tag="p" id="p-krv-svv-5ex" class="p">Object</p></td><td data-tag="td" id="td-yr0-oaq-e99" class="td"><p data-tag="p" id="p-gwy-ym0-1p2" class="p">需要转换的JS对象，比如为Map，List可以JSON序列化的对象</p></td></tr><tr data-tag="tr" id="tr-4ln-sig-lry" class="tr"><td data-tag="td" id="td-fkh-whe-y8n" colspan="1" class="td"></td><td data-tag="td" id="td-s19-4xf-lxz" colspan="1" class="td"></td><td data-tag="td" id="td-co6-s1f-dau" colspan="1" class="td"></td></tr></tbody></table>

返回值

使用示例

```javascript
//引用iot扩展Api模块,必须引用
var iotPluginApi = require('./iotPlugin.js');

function transform(eventType,msgPayLoadList){
     iotPluginApi.log("toJSONString %s",utils.toJSONString(msgPayLoadList));
}
```

8.3 全局变量

读取、存储、删除全局变量，在JS中调用。

| 
方法

 | 

说明

 |
| --- | --- |
| 

**utils.getVar(key）**

 | 

读取一个变量

 |
| 

**utils.putVar(key）**

 | 

存储一个变量

 |
| 

**utils.removeVar(key）**

 | 

删除一个变量

 |

8.4 API: 时间格式化

**（1）formatDate****(timestamp, unitName, pattern)**

| 
参数

 | 

类型

 | 

说明

 |
| --- | --- | --- |
| 

**timestamp**

 | 

Long

 | 

时间戳

 |
| 

**unitName**

 | 

String

 | 

时间单位

*NANOSECONDS - 纳秒*

*MICROSECONDS - 微秒*

*MILLISECONDS - 毫秒*

*SECONDS - 秒*

*DAYS - 天*

 |
| 

**pattern**

 | 

String

 | 

yyyy-MM-dd hh:mm:ss

 |

返回值

| 
参数

 | 

类型

 | 

说明

 |
| --- | --- | --- |
|  | 

String

 | 

格式化时间字符串

 |

返回值

```auto
//引用iot扩展Api模块,必须引用
var iotPluginApi = require('./iotPlugin.js');

function transform(eventType,msgPayLoadList){
  masterData["DatetimeX"] = utils.formatDate(msgPayload["DateTimeX"], "NANOSECONDS", "yyyy-MM-dd HH:mm:ss");
  masterData["TimestampX"] = utils.formatDate(msgPayload["TsX"], "NANOSECONDS", "yyyy-MM-dd HH:mm:ss");
  masterData["DateX"] = utils.formatDate(msgPayload["DateX"], "DAYS", "yyyy-MM-dd");
  masterData["TimeX"] = utils.formatDate(msgPayload["TimeX"], "MICROSECONDS", "HH:mm:ss");
}
```

**（2）formatDate****(datetime, pattern)**

| 
参数

 | 

类型

 | 

说明

 |
| --- | --- | --- |
| 

**timestamp**

 | 

Long

 | 

时间戳

 |
| 

**pattern**

 | 

String

 | 

yyyy-MM-dd hh:mm:ss

 |

返回值

| 
参数

 | 

类型

 | 

说明

 |
| --- | --- | --- |
|  | 

String

 | 

格式化时间字符串

 |

返回值

```auto
//引用iot扩展Api模块,必须引用
var iotPluginApi = require('./iotPlugin.js');

function transform(eventType,msgPayLoadList){
  let datestr = utils.formatDate(datetime, "yyyy-MM-dd HH:mm:ss");
}
```

9 环境变量

![环境变量](https://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/7878664061/p180016.png)在输入/输出/转换节点的脚本函数中，都用一个context记录作业的上下文，context.envConfig.get("参数名") 可以读取到边缘数据集成中已经配置的参数值。

10 JS插件

写好一个插件，上传到边缘数据集成配置中，可以被这个配置中的任务一个作业节点脚本引用。

典型例子：写好一个API登录检测的包，在输入输出节点脚本中调用。

```auto
var httpPlugin = require('./../httpPlugin.js');

var token = null;
//上次使用token的时间
var token_time = 0;

function getToken(name, password) {
 if (new Date().getTime() - token_time > 1000*30) {
  //模拟获取Token的过程
  let response = httpPlugin.httpPostJson("/api/getToken", {"name":name, "pwd": password});
  if (response.code === 200) {
   token = response.data;
  } else {
   console.log("GetToken error:" + response.code);
      return null;
  }
 }
 token_time = new Date().getTime();
 return token;
}

module.exports.getToken = getToken;
```

## 常见问题

1.  JS的变量提升问题
    

说明：在脚本中经常需要在函数中实现较多的转换逻辑，而这里需要注意的是JavaScript(ES5)中的var变量的作用域跟Java和C的作用域不同，否则会出现函数中的变量被覆盖的情况，导致各种问题，例如死循环。

在大多数编程语言中，会用花括号`{}`来形成一个作用域，俗称“块作用域”，例如C语言、C++等。但是在JS中`{}`并不能产生块作用域，JS中的作用域是依靠函数形成的。

在ECMAScript5中，JS只有两类作用域：全局作用域、函数作用域。

+   全局作用域：全局对象的作用域，在代码的任何地方都可访问，但有时会被函数作用域覆盖
    
+   函数作用域：作用于整个函数范围内，不管到底是在函数中的何处进行声明
    

在最新的数字工厂脚本引擎版本中，已经支持了ES6的let和const语法，建议在编写脚本的时候使用let和const以避免该问题的产生。

## 调试方法

### 1\. 调试转换节点的脚本函数

在创建一个数据集成任务后，需要在作业任务的转换节点编写转换函数（即transform函数，默认有参考代码），

在编写完该函数后，可以通过mock数据的方法来运行该函数，并进行日志打印和结果输出。

步骤

1) 登录oc.supet.com，进入平台管理-》边缘计算-》选择一个数据集成任务-》编辑-》任务列表-》

点击转换节点的“配置”按钮；

![image.png](https://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/2218359951/p131996.png "image.png")

mock参数说明：mock参数是在点击调试的时候，transform函数的入参：msgPayLoad 其类型为一个Map<String，Object>类型。

### 2\. 查看JS的调试日志

在调试阶段，可以在云端直接针对某个集成任务进行实时调试，即脚本在边缘运行时，日志可以实时输出到云端的调试窗口中，该功能主要帮助在开发、调试阶段查看脚本的运行结果和日志情况。

2.1 在边缘数据集成中选择一个需要调试的任务，点击调试。

![image.png](https://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/2218359951/p131997.png "image.png")

2.2 通过修改数据库或者其他方法触发数据变化，然后查看脚本的日志打印

### 3\. 查看JS的运行日志

当调试完一个脚本后，需要将该脚本正式下发到边缘应用，以正式数据集成。

数据集成时可能会产生全量数据，增量数据，进而出发脚本运行，如果需要查看运行中的JS日志，可以通过如下方法查看：

进入边缘数据集成-》点击查看日志

输入阿里云账号和密码：

![image.png](https://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/2218359951/p131999.png "image.png")

打开SLS日志窗口后，输入关键字“JsScriptLog”进行搜索查看。

![image.png](https://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/2218359951/p132000.png "image.png")

## 作业节点脚本函数说明

### 1\. 输入节点

输入节点类型是“数据库增量”、“服务提供”、“API上传”的情况不需要编写脚本。

#### 1.1 数据库查询

方法一：获取整张表的全量数据，增量数据由系统计算两次SELECT之间的差别。

```javascript
/**
 *
 * @param snapshotType full=全量同步，increment=增量同步，retry=重传数据
 * @param context
 *     context.snapshotOffset：记录目前偏移值，类型是数字、文本、MAP
 *     context.snapshotDiffDelete：是否计算删除增量
 *     context.snapshotRetryKeys：重传的唯一标识，Map类型，只有在snapshotType=retry才有值
 */
function snapshot(snapshotType, context) {
        //扫描整张表读取全量数据
        return iotPluginApi.newDbSnapshot("SELECT * FROM dbo.BG_Item");
}
```

方法二：完整的实现全量、增量、重传

```javascript
/**
 *
 * @param snapshotType full=全量同步，increment=增量同步，retry=重传数据
 * @param context
 *     context.snapshotOffset：记录目前偏移值，类型是数字、文本、MAP
 *     context.snapshotDiffDelete：是否计算删除增量
 *     context.snapshotRetryKeys：重传的唯一标识，Map类型，只有在snapshotType=retry才有值
 */
function snapshot(snapshotType, context) {
    if (snapshotType === 'increment') {
        //扫描整张表来计算增量
        return iotPluginApi.newDbSnapshot("SELECT * FROM dbo.BG_Item");

        /* 高级用法：
        //自定义增量
        if (context.snapshotOffset == null) {
            context.snapshotOffset = utils.currentTimeMillis();
        }
        let sql = "SELECT * FROM dbo.TB WHERE timestamp > " + context.snapshotOffset;
        context.snapshotOffset = utils.currentTimeMillis();
        context.snapshotDiffDelete = false;
    return iotPluginApi.newDbSnapshot(sql);
         */
    } else if (snapshotType === 'retry') {
        //失败数据重传
        return iotPluginApi.newDbSnapshot("SELECT * FROM dbo.BG_Item WHERE cItemCode = " + context.snapshotRetryKeys['cItemCode']);
    } else {
        //扫描整张表读取全量数据
        return iotPluginApi.newDbSnapshot("SELECT * FROM dbo.BG_Item");
    }
}
```

#### 1.2 API查询

说明：从一个API获取增量数据，不实现全量和重传功能。

```javascript
/**
 *
 * @param snapshotType full=全量同步，increment=增量同步，retry=重传数据
 * @param context
 *       context.path: api路径
 *     context.snapshotOffset：记录目前偏移值，类型是数字、文本、MAP
 *     context.snapshotDiffDelete：是否计算删除增量
 *     context.snapshotMore：如果全量太多数据，需要分页，设置这个参数是true
 *     context.snapshotRetryKeys：重传的唯一标识，Map类型，只有在snapshotType=retry才有值
 */
function snapshot(snapshotType, context) {
    if (snapshotType === 'increment') { //重传，不实现无法拉增量数据
        if (context.snapshotOffset == null) {
            context.snapshotOffset = utils.currentTimeMillis(); //从当前时间戳开始
        }

        //构造请求参数
        let params = {'timestamp': context.snapshotOffset};

        //发起HTTP请求,也支持httpGet
        let body = httpPlugin.httpPostJson(context.path, utils.toJSONString(params)); //发起HTTP请求

        if (body.code !== 200) {
            return null;
        }
        //处理返回结果
        let records = iotPluginApi.newList();
        let record = JSON.parse(body.data);
        records.add(record);
        //records.add(xxx);添加更多数据

        //不需要计算增量删除
        context.snapshotDiffDelete = false;

        //更新记录
        context.snapshotOffset = utils.currentTimeMillis();

        return records;
    } else if (snapshotType === 'full') { //全量同步，不实现无法拉取全量数据
        //参考增量实现方法
        //如果需要分页：可以用context.snapshotOffset记录位置
        //           同时设置context.snapshotMore=true
        return null;
    } else if (snapshotType === 'retry') { //重传，不实现无法重传数据
        //参考增量实现方法
        //重传的标识符从context.snapshotRetryKeys读取
        return null;
    }
}
```

### 2\. 转换节点

说明：转换输入节点采集到的原始数据到目标数据格式。

```javascript
/**
 * 客户实现: transform()转换函数
 * 这是脚本转换器的第一个转换函数,负责将 数据来源(如数据库变换的数据) 转换成 目标数据格式,如主数据,服务模型数据,物联网数据等
 * 如下的代码是一个示例：仅供参考,需要根据您的实际业务场景转换逻辑进行编写
 * 示例代码是数据源的数据转换成iot工业数字工厂的人员主数据格式
 * @param eventType为事件类型,对于数据库事件有 insert,update,delete
 * @param msgPayload 为需要转换的目标数据,注意其格式是一个Map,对应Java的格式为Map<String, Object>
 * @context 系统上下文参数
 * @return 返回转换后的数据格式,必须也为一个Map,即数据输入为Map,转换格式后还是为Map
 */
function transform(eventType, msgPayload, context) {
    let masterData = new iotPluginApi.newMap();
  //在这里实现数据转换逻辑
    masterData["num"] = msgPayload["id"];
    masterData["name"] = msgPayload["name"];
  
  //这里也可以调用数据库操作API来查询数据

    return masterData;
}
```

**注**：**转换节点如果需要调用【数据库操作】或者【API操作】，默认访问的数据源是输入数据源。**

### 3\. 输出节点

输出节点类似是“主数据 ”、“服务依赖”的情况不需要编写脚本。

#### 3.1 数据库回写

不需要事务支持。

```javascript
/**
 * 客户实现: distribute()分发函数
 * 负责将 transform转换后的数据写入边缘数据库
 * @param eventType 为事件类型,对于数据库事件有 insert,update,delete
 * @param transformData transform转换后的数据，是一个Map
 * @param context
 */
function distribute(eventType, transformData, context) {
    let sql = "INSERT INTO dbo.TB2(id,name,remark) VALUES(" + transformData['id'] + ",'XXX','YYY')";

    //写入边缘数据库
    let ret = iotPluginApi.iotSqlExecute(sql);
    //在这里构造服务模型返回数据
    if (ret.code === 200) {
        //成功
    } else {
        //失败
    }
    return ret;
}
```

方法二：事务支持。

```javascript
/**
 * 客户实现: distribute()分发函数
 * 负责将 transform转换后的数据写入边缘数据库
 * @param eventType 为事件类型,对于数据库事件有 insert,update,delete
 * @param transformData transform转换后的数据，是一个Map
 * @param context
 */
function distribute(eventType, transformData, context) {
    let transaction = iotPluginApi.iotGetTransaction();

    let sql1 = "INSERT INTO dbo.TB1(id,name,remark) VALUES(" + transformData['id'] + ",'XXX','YYY')";
    let sql2 = "INSERT INTO dbo.TB2(id,name,remark) VALUES(" + transformData['id'] + ",'XXX','YYY')";

    try {
        transaction.execute(sql1);
        transaction.execute(sql2);
        let r = transaction.commit();
        console.log("commit:" + r);

        return iotPluginApi.newIoTxResult(200, "OK", r);
    } catch (e) {
        console.log("rollback:" + e);
        transaction.rollback();
        return iotPluginApi.newIoTxResult(500, "rollback");
    }
}
```

3.2 调用API

说明：发起HTTP请求并分析响应结果。

```javascript
/**
 * 客户实现: distribute()分发函数
 * 负责将 transform转换后的返回数据通过API方式上报
 * @param eventType 为事件类型,对于数据库事件有 insert,update,delete
 * @param transformData transform转换后的数据，是一个Map
 * @param context
 *     context.path：传入来的API路径
 */
function distribute(eventType, transformData, context) {
    //发起一个HTTP请求，
    let data = httpPlugin.httpPostJson(context.path, utils.toJSONString(transformData));
    console.log("HTTP返回数据：" + data);
    //如果返回是一个JSON结构
    let jsonMap = JSON.parse(data.data);
    //返回结果
    return iotPluginApi.newIoTxResult(200, "success", jsonMap);
}
```

3.3 告警

说明：输出节点为告警的场景适用于监听数据变化后触发通知，注意这里的报警需要提前在数字工厂->通知规则中进行报警定义，并定义报警的标题和内容。报警触发后，会在数字工厂的报警弹窗和钉钉中通知。

```javascript
/**
 * 客户实现: distribute()分发函数，用于输出节点
 * 如下的代码是一个示例:仅供参考,需要根据您的实际业务场景转换逻辑进行编写
 * @param eventType为事件类型,对于数据库事件有 insert,update,delete
 * @param transformData 这是转换节点的transform()函数返回的内容，即转换后的数据格式
 * @context 系统上下文参数
 * @return
 */
function distribute(eventType, transformData, context) {
   //提示：可以在这里对transformData进行判断，符合触发条件的才走下面的告警逻辑
   iotPluginApi.log('告警');
   let a = iotPluginApi.triggerCloudAlarm('报警的内容写在这里');
   return iotPluginApi.newIoTxResult(200, "success", null);
}
```

3.4 物联网设备服务

说明：需要在IOT的物联网设备上为该设备创建一个服务，并在输出时选择设备及需要调用的设备的服务。

```javascript
/**
 * 客户实现: distribute()分发函数，用于输出节点为设备物模型服务调用
 * 如下的代码是一个示例:仅供参考,需要根据您的实际业务场景转换逻辑进行编写
 * @param eventType为事件类型,对于数据库事件有 insert,update,delete
 * @param transformData 这是转换节点的transform()函数返回的内容，即转换后的数据格式
 * @context 系统上下文参数
 * @return
 */
function distribute(eventType, transformData, context) {
    //注意：triggerDeviceServiceCall的参数为一个JSON结构,即设备服务调用的参数
    //如果该服务未设置任何参数，这传入空的json对象接口。
    //也可以在这里进行if判断，对数据进行过滤，只有符合条件对才触发设备调用
   let a = iotPluginApi.triggerDeviceServiceCall({});
   return a;
}
```

3.5 自定义脚本

说明：自定义脚本为用户自定义的输出逻辑，用户可以在该脚本中调用八爪鱼脚本的API函数实现自己的逻辑。注：该distribute函数需要返回IoTxResult 200代表函数调用成功。

```javascript
/**
 * 客户实现: distribute()分发函数，用于输出节点
 * 如下的代码是一个示例:仅供参考,需要根据您的实际业务场景转换逻辑进行编写
 * @param eventType为事件类型,对于数据库事件有 insert,update,delete
 * @param transformData 这是转换节点的transform()函数返回的内容，即转换后的数据格式
 * @context 系统上下文参数
 * @return
 */
function distribute(eventType, transformData, context) {
   //这是一个自定义的脚本，您可以在这里通过调用数据集成的脚本API实现自定义的输出逻辑
   //这个示例脚本仅仅只是打印了一条语句，用于参考
   iotPluginApi.log('this is user-defined script');
   return iotPluginApi.newIoTxResult(200, "success", null);
}
```

### 4\. 使用步骤

下面介绍如何使用脚本的几个步骤。

#### 4.1. 创建数据集成和开发作业任务

创建一个数据集成，然后在该数据中创建一个作业任务，同时完成输入节点、转换节点、输出节点的配置和脚本编写。

转换节点必须实现脚本，其他的输入节点、输出节点根据不同的类型有些需要配置，

有些需要进行脚本编写，请根据实际业务场景进行配置。

#### 4.2. 调试脚本

在完成脚本编写后，通过Mock参数和调试的方法进行脚本调试，查看调试的返回值确认脚本是否编写正确。

#### 4.3. 下载配置

脚本编写和调试完成后，进行数据集成页面的编辑页面，点击“下载配置”，将脚本下载到边缘应用。

#### 4.4. 查看数据集成结果

查看主数据/服务模型/API等输出节点的同步结果。

下载成功后，查看主数据的数据，或者服务模型的数据以判断是否同步成功。

也可以通过在边缘的数据库进行数据库表的修改触发增量数据，进而脚本转换查看同步的结果。
