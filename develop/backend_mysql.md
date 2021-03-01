# 保存数据到 MySQL

搭建 MySQL 数据库，并设置用户名密码为 root/public，以 MacOS X 为例:

```bash
$ brew install mysql

$ brew services start mysql

$ mysql -u root -h localhost -p

ALTER USER 'root'@'localhost' IDENTIFIED BY 'public';
```

初始化 MySQL 表:

```bash
$ mysql -u root -h localhost -ppublic
```

创建 “test” 数据库:
```bash
CREATE DATABASE test;
```
创建 t_mqtt_msg 表:

```sql
USE test;
CREATE TABLE `t_mqtt_msg` (
`id` int(11) unsigned NOT NULL AUTO_INCREMENT,
`msgid` varchar(64) DEFAULT NULL,
`topic` varchar(255) NOT NULL,
`qos` tinyint(1) NOT NULL DEFAULT '0',
`payload` blob,
`arrived` datetime NOT NULL,
PRIMARY KEY (`id`),
INDEX topic_index(`id`, `topic`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8MB4;
```

![mysql_init_1@2x.f001235c.png](https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/mysql_init_1%402x.f001235c.png)

创建规则:

打开 [EMQ X Dashboard](http://127.0.0.1:18083/#/rules)，选择左侧的 “规则” 选项卡。

填写规则 SQL:

```sql
SELECT * FROM "t/#"
```

![rule_sql.91dfbea9.png](https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/rule_sql.91dfbea9.png)

关联动作:

在 “响应动作” 界面选择 “添加”，然后在 “动作” 下拉框里选择 “保存数据到 MySQL”。

![rule_action_1@2x.73766093.png](https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/rule_action_1%402x.73766093.png)

填写动作参数:

“保存数据到 MySQL” 动作需要两个参数：

1). SQL 模板。这个例子里我们向 MySQL 插入一条数据，SQL
​    模板为:

```sql
insert into t_mqtt_msg(msgid, topic, qos, payload, arrived) values (${id}, ${topic}, ${qos}, ${payload}, FROM_UNIXTIME(${timestamp}/1000))
```

![rule_action_2@2x.bba21293.png](https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/rule_action_2%402x.bba21293.png)

2). 关联资源的 ID。现在资源下拉框为空，可以点击右上角的 “新建资源” 来创建一个 MySQL 资源:

填写资源配置:

数据库名填写 “mqtt”，用户名填写 “root”，密码填写 “123456”

![rule_action_3@2x.a3a245e8.png](https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/rule_action_3%402x.a3a245e8.png)

点击 “新建” 按钮。

返回响应动作界面，点击 “确认”。

![rule_action_4@2x.26c4389e.png](https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/rule_action_4%402x.26c4389e.png)

返回规则创建界面，点击 “创建”。

![rule_overview_1@2x.cec3d2b6.png](https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/rule_overview_1%402x.cec3d2b6.png)

在规则列表里，点击 “查看” 按钮或规则 ID 连接，可以预览刚才创建的规则:

![rule_overview_2@2x.8c73ae4e.png](https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/rule_overview_2%402x.8c73ae4e.png)

规则已经创建完成，现在发一条数据:

```bash
Topic: "t/a"
QoS: 1
Payload: "hello"
```

然后检查 MySQL 表，新的 record 是否添加成功:

![mysql_result_1@2x.099720d1.png](https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/mysql_result_1%402x.099720d1.png)