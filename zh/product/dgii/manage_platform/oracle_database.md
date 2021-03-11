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

#### 前提条件

+   Oracle数据库为11.2.0.4/12.1.0.2或以上版本。
    
+   Oracle数据库需具备OGG License（无需安装OGG）。
    
+   若Oracle数据库为主备模式，不支持使用Oracle备库。
    

## 一、Oracle为非CDB数据库时的配置

***建议由数据库管理员进行CDC功能的配置操作。***

### 1 开启日志归档和XStream。

#### 1.1 在命令行工具中执行以下命令以sys用户连接到数据库。

在实际使用过程中，可以有多种方式连接数据库，此处以命令行方式为例进行说明。

*如果遇到问题，请尝试在数据库所在机器开启日志。*

```javascript
sqlplus /nolog
CONNECT sys/password@host:port AS SYSDBA;
```

+   **password**
    
    为数据库sys用户的密码，可向数据库管理员获取。
    
+   **host**
    
    为数据库实例所在服务器的IP地址，请根据实际情况设置。
    
+   **port**
    
    为数据库实例所使用的端口，请根据实际情况设置。
    

#### 1.2 执行以下命令开启Xstream。

```javascript
alter system set enable_goldengate_replication=true;
```

#### 1.3 执行以下命令，检查日志归档是否已开启。

```javascript
archive log list;
```

+   若回显打印“Database log mode: No Archive Mode”，说明日志归档未开启，继续执行下一步。
    
+   若回显打印“Database log mode: Archive Mode”，说明日志归档已开启，直接跳到1.7。
    

#### 1.4 执行以下命令配置归档日志参数。

```javascript
alter system set db_recovery_file_dest_size = 100G;
alter system set db_recovery_file_dest = '/opt/oracle/oradata/recovery_area' scope=spfile;
```

+   **100G**
    
    为日志文件存储空间的大小，请根据实际情况设置。
    
+   **/opt/oracle/oradata/recovery\_area**
    
    为日志存储路径，请根据实际规划设置，但须确保路径提前创建。
    

#### 1.5 执行以下命令开启日志归档。

**注意：**

+   开启日志归档功能需重启数据库，重启期间将导致业务中断，请谨慎操作。
    
+   归档日志会占用较多的磁盘空间，若磁盘空间满了会影响业务，请定期清理过期归档日志。
    

```javascript
shutdown immediate;
startup mount;
alter database archivelog;
alter database open;
```

#### 1.6 执行以下命令，确认日志归档是否已成功开启。

```javascript
archive log list;
```

当回显打印“Database log mode: Archive Mode”，说明日志归档已开启。

#### 1.7 执行以下命令退出数据库连接。

```javascript
exit;
```

### 2 创建XStream用户并给用户赋予权限。

#### 2.1 在命令行工具中执行以下命令以sys用户连接到数据库实例。

```javascript
sqlplus sys/password@host:port/SID as sysdba
```

+   **password**
    
    为数据库sys用户的密码，请向数据库管理员获取。
    
+   **host**
    
    为数据库实例所在服务器的IP地址，请根据实际情况设置。
    
+   **port**
    
    为数据库实例所使用的端口，请根据实际情况设置。
    
+   **SID**
    
    为要同步数据所在实例的实例名，请根据实际情况设置。
    

#### 2.2 执行以下命令创建XStream管理员用户并配置权限。

```javascript
CREATE TABLESPACE xstream_adm_tbs DATAFILE '/opt/oracle/oradata/orcl/xstream_adm_tbs.dbf' SIZE 25M REUSE AUTOEXTEND ON MAXSIZE UNLIMITED;
CREATE USER xstrmadmin IDENTIFIED BY password DEFAULT TABLESPACE xstream_adm_tbs QUOTA UNLIMITED ON xstream_adm_tbs;
GRANT CREATE SESSION TO xstrmadmin;
GRANT ALL PRIVILEGES TO xstrmadmin;
BEGIN
   DBMS_XSTREAM_AUTH.GRANT_ADMIN_PRIVILEGE(
      grantee                 => 'xstrmadmin',
      privilege_type          => 'CAPTURE',
      grant_select_privileges => TRUE,
      container             => 'ALL'
   );
END;
```

+   **xstream\_adm\_tbs**
    
    为XStream管理员用户的表空间名，请根据实际规划设置。
    
+   **/opt/oracle/oradata/orcl/xstream\_adm\_tbs.dbf**
    
    为XStream管理员用户的表空间文件，请根据实际规划设置。
    
+   **xstrmadmin**
    
    为XStream管理员用户名，请根据实际规划设置。
    
+   **password**
    
    为XStream管理员用户密码，请根据实际规划设置。
    
+   “**container => 'ALL'**”仅当Oracle为12c或以上版本时，才需要添加，否则删除此行内容。
    

#### 2.3 执行以下命令创建八爪鱼连接数据库的用户并配置权限。

```javascript
CREATE TABLESPACE xstream_tbs DATAFILE '/opt/oracle/oradata/orcl/xstream_tbs.dbf' SIZE 25M REUSE AUTOEXTEND ON MAXSIZE UNLIMITED;
CREATE USER xstrm IDENTIFIED BY password DEFAULT TABLESPACE xstream_tbs QUOTA UNLIMITED ON xstream_tbs;
GRANT CREATE SESSION TO xstrm;
GRANT SELECT ON V_$DATABASE to xstrm;
GRANT FLASHBACK ANY TABLE TO xstrm;
GRANT SELECT ANY TABLE to xstrm;
GRANT LOCK ANY TABLE TO xstrm;
grant select_catalog_role to xstrm;
```

+   **xstream\_tbs**
    
    为八爪鱼订阅连接用户的表空间名，请根据实际规划设置。
    
+   **/opt/oracle/oradata/orcl/xstream\_tbs.dbf**
    
    为八爪鱼订阅连接用户的表空间文件，请根据实际规划设置。
    
+   **xstrm**
    
    为八爪鱼订阅连接用户名，请根据实际规划设置。
    
+   **password**
    
    为八爪鱼订阅连接用户密码，请根据实际规划设置。
    

#### 2.4 执行以下命令修改日志记录参数。

```javascript
alter database add supplemental log data (all) columns;
```

#### 2.5 执行以下命令退出数据库连接。

```javascript
exit;
```

### 3 创建XStream出站服务器。

**注意：****一个XStream出站服务器只能在一个边缘集群中使用，若该数据库需要用于多个边缘集群，需创建多个XStream出站服务器。**

#### 3.1 在命令行工具中执行以下命令以xstrmadmin用户连接到数据库实例。

```javascript
sqlplus xstrmadmin/password@host:port/SID
```

+   **xstrmadmin**
    
    为XStream管理员用户名，在2.2中创建。
    
+   **password**
    
    为XStream管理员用户密码，在2.2中设置。
    
+   **host**
    
    为数据库实例所在服务器的IP地址，请根据实际情况设置。
    
+   **port**
    
    为数据库实例所使用的端口，请根据实际情况设置。
    
+   **SID**
    
    为要同步数据所在实例的实例名，请根据实际情况设置。
    

#### 3.2 执行以下命令创建XStream出站服务器。

```javascript
DECLARE
  tables DBMS_UTILITY.UNCL_ARRAY;
  schemas DBMS_UTILITY.UNCL_ARRAY;
BEGIN
   tables(1) := 'dbusr.tablename';
   tables(2) := NULL;
   schemas(1) := 'dbschemas';
   schemas(2) := NULL;
   DBMS_XSTREAM_ADM.CREATE_OUTBOUND(
      server_name => 'dbzxout',
      table_names => tables,
      schema_names => schemas
   );
END;
```

+   **dbusr.tablename**
    
    为要同步的数据表名，可以先只填一个。
    
+   **dbschemas**
    
    为要同步数据表所在的schemas，即CDC需要抓取哪个schemas下的数据，请根据实际情况设置。一个用户一般相应一个schema，该用户的schema名等于username，并作为该用户缺省schema。如果不限制可以设置schemas(1) := NULL;
    
+   **dbzxout**
    
    为出站服务器名称，需保证唯一，请根据实际规划设置。
    

#### 3.3 执行以下命令退出数据库连接。

```javascript
exit;
```

#### 3.4 执行以下命令以sys用户连接到数据库实例。

```javascript
sqlplus sys/password@host:port/SID as sysdba
```

+   **password**
    
    为数据库sys用户的密码，请向数据库管理员获取。
    
+   **host**
    
    为数据库实例所在服务器的IP地址，请根据实际情况设置。
    
+   **port**
    
    为数据库实例所使用的端口，请根据实际情况设置。
    
+   **SID**
    
    为要同步数据所在实例的实例名，请根据实际情况设置。
    

#### 3.5 执行以下命令允许xstrm用户连接XStream出站服务器。

```javascript
BEGIN
   DBMS_XSTREAM_ADM.ALTER_OUTBOUND(
      server_name  => 'dbzxout',
      connect_user => 'xstrm'
   );
END;
```

+   **dbzxout**
    
    为出站服务器名称，在3.2中设置。
    
+   **xstrm**
    
    为八爪鱼连接用户名，在2.3中设置。
    

#### 3.6 执行以下命令退出数据库连接。

```javascript
exit;
```

## 二、配置Oracle数据源

![image.png](http://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/7118359951/p135696.png "image.png")

+   **xstream\_adm\_username、**
    
    **xstream\_adm\_password**
    
    对应2.2创建的用户名和密码
    
+   **xstream\_username、xstream\_password**
    
    对应2.3创建的用户名和密码
    
+   **xstream\_server\_name**
    
    对应3.2创建的**dbzxout**
    

## 三、日志清理

1\. 背景

数据库开启归档日志，若不及时清理归档日志，系统就会报

**ORA-00257: archiver error. Connect internal only, until freed**

实现自动清理归档日志，可以通过 Linux crontab,Oracle rman。

2\. 创建日志清理脚本

2.1 新建一个脚本clearLog.sh

```shell
${ORACLE_HOME}/bin/rman nocatalog log=/home/oracle/del_arch$(date +%Y-%m-%d).log  
    connect target /
    crosscheck archivelog all;
    delete noprompt expired archivelog all;
    DELETE noprompt force ARCHIVELOG ALL COMPLETED BEFORE 'SYSDATE-11';
    exit;
EOF
```

2.2 手动测试脚本

赋权：chomd +x clearLog.sh

执行：./clearLog.sh

查看del\_arch.log文件，能删除归档。

![lok](http://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/7543230061/p167189.png)

3 设置自动清理

在oracle用户下执行

crontab -e

```shell
30 02 * * * /home/oracle/clearLOG.sh
```

凌晨2:30分执行clearLog.sh

cron服务是Linux的内置服务，但它不会开机自动启动。可以用以下命令启动和停止服务：

`/sbin/service` `crond start`

`/sbin/service` `crond stop`

`/sbin/service` `crond restart`

`/sbin/service` `crond reload`
