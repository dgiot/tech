# TDengine使用整理

## 数据库操作
**创建一个数据库test**

``CREATE DATABASE test;``

**创建库时候的参数(非必选)**

Keep:数据保留时间。超过此时间后自动删除过期的数据,缺省时默认3650天(十年)

EG: ``CREATE DATABASE test keep 730``;

days: 数据落成文件的时间范围。days 10 表示每十天的数据为一个数据文件，此范围官方推荐为10-100。

EG: ``CREATE DATABASE test keep 730 days 10``;

comp：文件压缩标志位，数据文件的压缩程度。一阶段压缩根据数据的类型进行了相应的压缩。二阶段压缩在一阶段压缩的基础上又用通用压缩算法进行了压缩，压缩率更高。0：关闭，1:一阶段压缩，2:两阶段压缩。默认为2。

EG: ``CREATE DATABASE mydb comp 1``;

replica: 虚拟节点(vnode) 数量,可理解为数据副本数量，一个数据库的数据将会存放在虚拟节点中，多个虚拟节点将会使用m/s主从方式异步备份。

虚拟节点数量必须小于等于集群的节点数(或cpu核心数)，默认与CPU核数相同，可通过maxVgroupsPerDb配置。默认为1。

EG: ``CREATE DATABASE test keep 730 days 10 replica 2``;

quorum: 设置值大于1的话，开启同步复制。异步复制时存在极低概率会数据丢失(主虚拟节点和从虚拟节点同时宕机)。

EG: ``CREATE DATABASE test keep 730 days 10 replica2 quorum 2``;

blocks: TDengine的每个虚拟节点都会占用一些独立的内存做缓存池用，数据放在缓存池中提高查询速度，内存的大小由blocks和cache参数决定。

blocks配置虚拟节点可以有几个内存块,cache设定每个内存块的大小，blocks默认为4个,cache默认16M,也就是说虚拟节点所占的内存默认至少为4*16=66M。官方文档两处不一致，一处blocks默认为6，一处说默认为4。

EG: ``CREATE DATABASE mydb keep 730 days 10 replica 2 quorum 2 blocks 8``;

precision:设定时间精度,默认ms毫秒，us为微秒

EG:``` CREATE DATABASE mydb precision 'us'```;

walLevel：TDengine支持WAL（Write Ahead Log）机制，实现数据的容错。请求到来时，先将请求的原始数据包写入数据库日志文件，等数据成功写入数据库数据文件后，再删除相应的WAL。配置项为0、1和2, 默认为1。

0：不写wal; 1：写wal, 但不执行fsync; 2：写wal, 而且执行fsync。

fsync：当wal设置为2时，执行fsync的周期。设置为0，表示每次写入，立即执行fsync。单位为毫秒，默认值：3000。fsync我理解为虚拟节点的数据同步周期,默认3000毫秒，为0 时表示数据总是立即同步，但会影响效率

minRows: 文件块中记录的最小条数，单位为条，默认值：100。

maxRows: 文件块中记录的最大条数，单位为条，默认值：4096。

**显示服务器和客户端的版本信息**

select client_version();

select server_version();

**查看服务器状态**

select server_status();

**显示所有的数据库的信息，包含数据库的各个参数**
show databases;

**使用数据库 test**
use test ;

**删除库**
drop database test ;

**修改数据的保留时间**
alter database test keep 365;

**修改数据库的副本数**
alter database test replica 3;

**修改数据库的文件压缩标志位**
alter database test comp 2;

**修改数据的同/异步方式，为1表示异步，大于1表示同步，数值越大，表示在同步时主/从节点的确认次数**
alter database test quorum 2;

**修改每个VNODE (TSDB) 中有多少cache大小的内存块**
alter database test blocks 100;

**表操作：**

**创建表时timestamp 字段必须为第一个字段类型**
create table if not exists mytable(ts timestamp, column_name int，……);

**根据超级表创建子表，子表会复制除超级表里的tag字段外的所有字段,但需子表设定tag内容**

create table tab using super_table tags (column_value,column_value……)；

**删除表**
drop table if exists mytable;

**显示当前数据库下的所有数据表信息  tables非表名，而是固定写法**
show tables;

**显示当前数据库下的所有数据表信息**
show tables like "%table_name%";

**获取表的结构信息**
describe mytable;

**表增加列**
alter table mytable add column addfield int;

**表删除列**
alter table mytable drop column addfield;

## 超级表操作
**创建STable, 与创建表的SQL语法相似，但需指定TAGS字段的名称和类型。说明：**
1. TAGS 列的数据类型不能是timestamp类型；
   2.TAGS 列名不能与其他列名相同；
3. TAGS 列名不能为预留关键字；
   4.TAGS 最多允许128个，可以0个，总长度不超过16k个字符

create table if not exists mysupertable (ts timestamp, field1 int，……) tags (tag1 nchar(50), tag2 nchar(100)，……);

**删除超级表**
drop table if exists super_table ;

**显示当前数据库下的所有超级表信息 show stables**
show stables like "%super%";

**获取超级表的结构信息**
describe super_table ;

**超级表增加列**
alter table super_table add column column_name int;

**超级表删除列**
alter table super_table drop column column_name;

**添加标签**
alter table super_table add tag column nchar(60);

**删除标签**
alter table super_table drop tag tag_name;

**修改标签名**
alter table super_table change tag old_tag_name  new_tag_name;

**修改子表标签值(TAG)**
alter table item_table_name set tag column_key = "value";


## 系统文件路径

/etc/taos/taos.cfg ：  配置文件

/var/lib/taos ： 数据文件目录，包括数据文件及数据节点、虚拟节点、管理节点等信息

/var/log/taos ： 日志文件

/usr/local/taos/bin ： 脚本文件

/usr/local/taos/driver ： 动态链接库 windows下安装客户端后为 C:\TDengine\driver


## 常见异常/错误信息
Out of DNodes : 创建数据库时指定了replica 的设置,但TDengine的服务端是单机版，因此一个数据节点的情况下无法创建出多个虚拟节点(Vnode)。

syntax error near xxx : 多数为语法错误或者某些关键字/函数不支持。

Unable to resolve FQDN: 是由于客户端或数据节点无法解析FQDN(Fully Qualified Domain Name)导致。检查windows本地的hosts文件是否配置FQDN的解析是否正确，可以ping和telnet看是否能通。

如果TDengine为集群，那么hosts中需要配置每个节点的解析。

如集群有三个节点td1,td2,td3, 则hosts中需要配置此三个节点 192.168.0.1  tdengine1    192.168.0.1  tdengine2   192.168.0.1  tdengine3

Unable to establish connection ： 出现频率较高的问题，多数时候为网络、端口的问题，官方给出了9个排查问题的方案，但几个方案也都是在排查网络和端口是否正常。

对于TDengine本身的安装而言，FQDN的设置需要保持几个地方的一致:

1. 服务器的host配置，一般为etc下的hostname和host

2. TDengine安装数据目录下的json，安装目录默认为 /var/lib/taos/dnode 其中某些json中的fqdn配置要和host文件中的fqdn地址一样

保证fqdn配置完全没问题后再进行端口等问题的排查

## PS

服务器和客户端安装时版本需要对应，如服务端是2.0.1.1，客户端也需要2.0.1.1。

数据都有保存时间，创建数据库时可通过keep设定数据保留时间，不设定默认3650天，一旦超过保存时间，数据将被系统自动删除。

数据备份时间days可在创建库时指定，默认10天，也就是说每隔十天将会进行一次数据备份，以文件形式保存。

TDengine对SQL语句中的英文字符不区分大小写，自动转化为小写执行。因此用户大小写敏感的字符串及密码，需要使用单引号将字符串引起来。
子表的Tag值在建表时已设定，insert操作时不用写入tag

SQL语句默认长度65480个字符(64KB)，但可通过系统配置参数maxSQLLength修改，最长可配置为1M

根据实际测试，默认sql长度下, ts+11个物理量(采集的字段)，一般数据量下Mybatis做批量插入时一次最多300+大小size的list插入数据库，ts+6个物理量的最多500+


