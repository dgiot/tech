
 本节结合电力抄表的用户场景与业务流程, 讲述如何通过用户权限、产品设备、物模型等一些概念来设计数据模型，完成从实入虚的转换。

# 一点心得

   这几年在物联网项目中爬坑的一点心，套用道家几句话，希望能对您今后的工业物联网实践有帮助
   + 顺其自然 
   
   调研阶段要多观察，抓住物理层本身的规律，抓住事物的本质，不要凭空胡思乱想
   
   + 清净无为
 
   设计阶段要如庖丁解牛，顺着物理层本身关系，去映射虚拟层，不要凭空添加路由
   
   + 万物均衡 
 
   运营阶段要不偏不倚， 在时空维度上做好均衡，进行各种削峰处理，保持长期稳定运行
   
   典型案例是陶总在时间维度对物的观察创造了Tdengine，Joe Armstrong在空间维度对物的观察创造了Erlang
   
#  用户场景

 从用户到设备，主要需要解决如下几个问题：
 + 人与设备的关系，User基于流动性，权限系统里一般不会直接绑定User与Device的权限关系，中间会通过Department(Role)来间接绑定ACL
 + 设备与设备的关系，设备与设备之间有可能存在真实的关系，例如DTU与Meter，也可能只有一种虚拟关系，例如Group与DTU，属于因工程需要，临时拉群
 + 对具体设备来说，1、需要一个UID来表征身份；2、需要一个route来表征关系；3、需要多个tag来表征特征
 + 重点讨论Meter、DTU和TCP Server的交互过程
 
   | No.|名称|   Meter         |   DTU                  | TCP Server                 |  说明      |
   | --| ----   | -------      | ------                 | -----------               |-----------|
   |1 |连接     |               | send ->  [IP]           | ack <-- [IP]             | 必选      |
   |2 |登陆     |               | send ->  [DtuAddr]      | ack <-- [DtuAddr]        | 可选，可用IP代替|
   |3 |扫串口   | ack-> [485]   | send <-- [search 485]   | send <--[search 485]    | 可选，有档案可免 |
   |4 |扫modbus | ack-> [modbus]| send <-- [search modbus]   | send <--[search modbus] |可选，有档案可免 |
   |5 |扫表 | ack-> [Meter Addr]| send <-- [search meter]   | send <--[search meter] |可选，有档案可免 |
   |6 |抄表 | ack-> [Meter Data]| send <-- [read meter]   | send <--[read meter] |必选 |
   |7 |写表 | ack-> [Meter Control]| send <-- [write meter]   | send <--[write meter] |可选 |
   |8 |登出 |       |  send -> [DtuAddr] |  ack <-- [DtuAddr]        |可选 |
   |9 |断开 |     |  send -> [IP]      |  do_something        |必选 |
   
   扫串口、扫描modbus、扫表是一个费时费流量的操作，例如扫表一般至少需要扫256次，一般只会在物联网工程施工阶段进行，并完成相应的自动注册功能，形成设备档案，正常运行中不进行这些操作。
   
   这也是为什么电力抄表非常强调电表档案建设，如果没有档案，每一次DTU掉线都需要重新进行非常耗时耗流量的扫描任务   
   
 # 交互流程
 
 ```
 ---------------------------------------------------------------------------------------------------------------------
 |             物理层                                      |   连接层                 |      虚拟层            | 应用层|
 ---------------------------------------------------------------------------------------------------------------------
          User1(Session)                User2(Session)                           
              |                              |           
             API                            API             <--http--> shuwa_rest  --+
              |                              |                                       |
              +                              +                                       |
         Department1(Role)             Department2(Role)                             |
              |                              |                                       |
             ACL                            ACL            <--parse--> shuaw_parse --+
              +                              +                                       |              +-- 时序数据--+
          Group(Devcie)                 Group(Devcie)                                |              |            |
              |                              |                                       | === 流计算==> 物理层镜像    +--> 批量计算      
     +--------+-------+                      +                                       |              |            |
     |                |                      |                                       |              +-- 关系数据--+              
DTU1(Device1)    DTU2(Device)           DTU3(Device)        <--tcp-->  tcp_server ---+
     |                |                      |                                       | 
 modbus             modbus                modbus            <--modbus-->  proctol ---+
     |                |                      |                                       |
     +                +                      +                                       |
    485              485                     485             <--485-->    proctol  --+ 
     |                |                      |                                       |
     +                +             +--------+--------+                              |
     |                |             |                 |                              |
 Meter1(Device) Meter2(Device) Meter4(Device）Meter5(Device）<--DLT/645--> proctol --+                
```
 在正式动手之前，请先体会一下心得和理解用户场景
 
 # 用户权限
 角色（Role）是资源的拥有者以及传递者。
 用户（User）是角色的实例化。
 ##如何创建角色
  第一步
  
  点击“多租户”进入多租户页面，再点击“角色管理”进入角色管理页面，最后点击已有角色后的“+”图标添加新角色。
  ![role_manage1.png](https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/blog/meter/role_manage1.png)
  
  第二步
  
  为新角色设置相应的角色名，部门，岗位，备注（角色名与备注必填）
  ![role_manage2.png](https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/blog/meter/role_manage2.png)
  第三步
    
  为新角色分配对应的权限，分配对应的菜单。
   ![role_manage3.png](https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/blog/meter/role_manage3.png)
   完成后即创建完成。
 ##如何创建用户
 用户的权限资源均来自于角色，即权限资源先分配给角色，然后用户关联该角色。
 
 第一步
 
 点击“多租户”进入多租户页面，再点击“用户管理”进入用户管理页面，最后点击已有角色后的“+”图标添加新用户。
 ![user_manage1.png](https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/blog/meter/user_manage1.png)
 
 第二步
 
 为新用户设置相应的姓名，手机号，邮箱，账号，密码，选择对应部门。
 ![user_manage2.png](https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/blog/meter/user_manage2.png)
 
 第三步
 
 用新建的用户登录。
 ![user_manage3.png](https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/blog/meter/user_manage3.png)
 可以看到之前分配的菜单界面
 ![user_manage4.png](https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/blog/meter/user_manage4.png)

 # 产品设备
 
 
   
