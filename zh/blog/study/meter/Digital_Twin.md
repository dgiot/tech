
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
 ## 如何创建角色
  第一步
  
  点击“多租户”进入多租户页面，再点击“角色管理”进入角色管理页面，最后点击已有角色后的“+”图标添加新角色。
  ![role_manage1.png](https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/meter/role_manage1.png)
  
  第二步
  
  为新角色设置相应的角色名，部门，岗位，备注（角色名与备注必填）
  ![role_manage2.png](https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/meter/role_manage2.png)
  第三步
    
  为新角色分配对应的权限，分配对应的菜单。
   ![role_manage3.png](https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/meter/role_manage3.png)
   完成后即创建完成。
 ## 如何创建用户
 用户的权限资源均来自于角色，即权限资源先分配给角色，然后用户关联该角色。
 
 第一步
 
 点击“多租户”进入多租户页面，再点击“用户管理”进入用户管理页面，最后点击已有角色后的“+”图标添加新用户。
 ![user_manage1.png](https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/meter/user_manage1.png)
 
 第二步
 
 为新用户设置相应的姓名，手机号，邮箱，账号，密码，选择对应部门。
 ![user_manage2.png](https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/meter/user_manage2.png)
 
 第三步
 
 用新建的用户登录。
 ![user_manage3.png](https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/meter/user_manage3.png)
 可以看到之前分配的菜单界面
 ![user_manage4.png](https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/meter/user_manage4.png)

 ## 名词解释
|术语|描述|
|---|---|
|角色（Role）|资源权限的拥有者以及传递者|
|用户（User）|资源权限的具体操作者|
|部门（department）|角色的映射，方便使用者记忆使用|
|岗位|角色权限的具体实例化|
 # 产品设备
 使用物联网平台的第一步是在控制台创建产品。产品是设备的集合，通常是一组具有相同功能定义的设备集合。例如，产品指同一个型号的产品，设备就是该型号下的某个设备。
  - 产品：设备的集合，指一组具有相同功能的设备。在这个界面，你可以给其配置物模型、物接入与物存储。物模型是对设备在云端的功能描述，包括设备的属性、服务和事件。物联网平台通过定义一种物的描述语言来描述物模型，称之为TSL（即Thing Specification Language ），采用JSON格式，我们根据TSL组装上报设备的数据。在产品界面，我们可以运行或编辑组态。
  - 设备：归属于某个产品下的具体设备。设备可以直接连接物联网平台，也可以作为子设备通过网关连接物联网平台。在这个界面，你可以对设备进行增删查改等编辑操作，并可组态展示设备的当前状态。
 ## 如何创建产品
 登录平台控制台。
 在左侧导航栏，选择设备云 > 产品管理 >创建产品，单击创建产品。
 按照页面提示填写信息，然后单击确认。
 ![product_manage1.png](https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/meter/product_manage1.png)
 ![product_manage2.png](https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/meter/product_manage2.png)
 
|参数|描述|
|---|---|  
|产品名称|为产品命名，产品名称在账号内具有唯一性|
|产品分组|产品标识，用于区分不同设备|
|所属分类|该产品的类型|
|所属应用|拥有该产品的角色|
|节点类型|产品下设备的类型，分为设备和网关|
|连网方式|直连设备和网关设备的连网方式|
|产品描述|可输入文字，用来描述产品信息|

## 后续操作
在“产品管理”控制台下，可以进行产品开发，设备管理等操作。
- 产品管理

选择“产品管理”，在产品列表,操作栏中，单击“配置”，进入“产品详情”页。单击相应页签，查看产品信息、Topic类列表，设置自定义Topic、物模型、物解析、物接入、物存储等。
![product_manage3.png](https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/meter/product_manage3.png)

![product_manage4.png](https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/meter/product_manage4.png)

- 设备管理
单击产品详情页的设备开发页签，跟随界面提示进行设备创建、功能开发、连接验证，完成设备开发，接入物联网平台。
## 添加物模型
+ 自定义属性添加
![product_manage5.png](https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/meter/product_manage5.png)
填写名称，标识符，取值范围，数据类型，单位等值
![product_manage6.png](https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/meter/product_manage6.png)

其中各项含义见下表

|名称|含义|
|----|----|
|功能名称|物模型的作用，实现的功能|
|标识符|唯一识别物模型，一般用功能名称的英文翻译|
|取值范围（数值）|物模型的取值范围|
|步长|即step，物模型取值依次增长的幅度|
|读写类型|读写：文档或属性既能读取，也能修改 只读：又称唯读，表示文档或属性只能读取，不能修改也不能存储。|
|数据类型|物模型的数据类型，可选择|
|采集公式|我们需要的数据与采集的数据之间的数学关系式 %q：数据标识第二个空里面的数据 %s：采集到的数据 %r：采集的轮次|
|控制公式|控制数据采集的次数或满足特殊的采集需求（true为1，false为大于1的其他数字）|
|数据标识第一个空|address地址值。如果是modbus协议，则数据标识表示传感器的寄存器地址。 否则用唯一数字字母组合标识即可。相应传感器说明手册可查。|
|数据标识第二个空|即%q。如果读写类型选的只读，则此处填字节数。 如果读写类型选的读写，用于modbus协议，表示参数地址，或模拟量的功能码。相应传感器说明手册可查。进制，十进制。|
|协议类型|我们可以选择modbus协议，否则就是normal|
|字节序|大端：高位字节排放在内存的低地址端，低位字节排放在内存的高地址端。 小端：低位字节排放在内存的低地址端，高位字节排放在内存的高地址端。|
|寄存器状态|线圈状态：读从机离散量输出口的ON/OFF状态。 <br>读输入状态：读从机离散量输入信号的ON/OFF状态。  <br>保持寄存器：可以通过通信命令读或者写的寄存器  <br>输入寄存器：只能读不能写的寄存器|
|从机地址|从机的address，用于modbus通讯。相应传感器说明手册可查。进制：十进制|

+ 标准属性的添加

点击“新增标准属性”
![product_manage7.png](https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/meter/product_manage7.png)
![product_manage8.png](https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/meter/product_manage8.png)
自动添加相关属性
![product_manage9.png](https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/meter/product_manage9.png)

+ 添加物接入

选择物接入，选择通道<br>
注：每次添加通道后，需重启对应的通道，即禁用通道后再启用
![product_manage10.png](https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/meter/product_manage10.png)
![product_manage11.png](https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/meter/product_manage11.png)

+ 物存储
选择物存储，选择通道<br>
注：每次添加通道后，需重启对应的通道，即禁用通道后再启用
![product_manage12.png](https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/meter/product_manage12.png)

## 如何添加设备

左侧导航栏选择设备管理，点击设备添加；<br>
依次填写名称，设备编号，资产编号，型号，品牌，选择对应的产品等
![product_manage14.png](https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/meter/product_manage14.png)<br>
![product_manage13.png](https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/meter/product_manage13.png)

 
   
