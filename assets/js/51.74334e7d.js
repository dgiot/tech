(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{492:function(t,_,v){"use strict";v.r(_);var a=v(7),s=Object(a.a)({},(function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("p",[t._v("本节结合电力抄表的用户场景与业务流程, 讲述如何通过用户权限、产品设备、物模型等一些概念来设计数据模型，完成从实入虚的转换。")]),t._v(" "),v("h1",{attrs:{id:"一点心得"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#一点心得"}},[t._v("#")]),t._v(" 一点心得")]),t._v(" "),v("p",[t._v("这几年在物联网项目中爬坑的一点心，套用道家几句话，希望能对您今后的工业物联网实践有帮助")]),t._v(" "),v("ul",[v("li",[t._v("顺其自然")])]),t._v(" "),v("p",[t._v("调研阶段要多观察，抓住物理层本身的规律，抓住事物的本质，不要凭空胡思乱想")]),t._v(" "),v("ul",[v("li",[t._v("清净无为")])]),t._v(" "),v("p",[t._v("设计阶段要如庖丁解牛，顺着物理层本身关系，去映射虚拟层，不要凭空添加路由")]),t._v(" "),v("ul",[v("li",[t._v("万物均衡")])]),t._v(" "),v("p",[t._v("运营阶段要不偏不倚， 在时空维度上做好均衡，进行各种削峰处理，保持长期稳定运行")]),t._v(" "),v("p",[t._v("典型案例是陶总在时间维度对物的观察创造了Tdengine，Joe Armstrong在空间维度对物的观察创造了Erlang")]),t._v(" "),v("h1",{attrs:{id:"用户场景"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#用户场景"}},[t._v("#")]),t._v(" 用户场景")]),t._v(" "),v("p",[t._v("从用户到设备，主要需要解决如下几个问题：")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("人与设备的关系，User基于流动性，权限系统里一般不会直接绑定User与Device的权限关系，中间会通过Department(Role)来间接绑定ACL")])]),t._v(" "),v("li",[v("p",[t._v("设备与设备的关系，设备与设备之间有可能存在真实的关系，例如DTU与Meter，也可能只有一种虚拟关系，例如Group与DTU，属于因工程需要，临时拉群")])]),t._v(" "),v("li",[v("p",[t._v("对具体设备来说，1、需要一个UID来表征身份；2、需要一个route来表征关系；3、需要多个tag来表征特征")])]),t._v(" "),v("li",[v("p",[t._v("重点讨论Meter、DTU和TCP Server的交互过程")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("No.")]),t._v(" "),v("th",[t._v("名称")]),t._v(" "),v("th",[t._v("Meter")]),t._v(" "),v("th",[t._v("DTU")]),t._v(" "),v("th",[t._v("TCP Server")]),t._v(" "),v("th",[t._v("说明")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("1")]),t._v(" "),v("td",[t._v("连接")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("send ->  [IP]")]),t._v(" "),v("td",[t._v("ack <-- [IP]")]),t._v(" "),v("td",[t._v("必选")])]),t._v(" "),v("tr",[v("td",[t._v("2")]),t._v(" "),v("td",[t._v("登陆")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("send ->  [DtuAddr]")]),t._v(" "),v("td",[t._v("ack <-- [DtuAddr]")]),t._v(" "),v("td",[t._v("可选，可用IP代替")])]),t._v(" "),v("tr",[v("td",[t._v("3")]),t._v(" "),v("td",[t._v("扫串口")]),t._v(" "),v("td",[t._v("ack-> [485]")]),t._v(" "),v("td",[t._v("send <-- [search 485]")]),t._v(" "),v("td",[t._v("send <--[search 485]")]),t._v(" "),v("td",[t._v("可选，有档案可免")])]),t._v(" "),v("tr",[v("td",[t._v("4")]),t._v(" "),v("td",[t._v("扫modbus")]),t._v(" "),v("td",[t._v("ack-> [modbus]")]),t._v(" "),v("td",[t._v("send <-- [search modbus]")]),t._v(" "),v("td",[t._v("send <--[search modbus]")]),t._v(" "),v("td",[t._v("可选，有档案可免")])]),t._v(" "),v("tr",[v("td",[t._v("5")]),t._v(" "),v("td",[t._v("扫表")]),t._v(" "),v("td",[t._v("ack-> [Meter Addr]")]),t._v(" "),v("td",[t._v("send <-- [search meter]")]),t._v(" "),v("td",[t._v("send <--[search meter]")]),t._v(" "),v("td",[t._v("可选，有档案可免")])]),t._v(" "),v("tr",[v("td",[t._v("6")]),t._v(" "),v("td",[t._v("抄表")]),t._v(" "),v("td",[t._v("ack-> [Meter Data]")]),t._v(" "),v("td",[t._v("send <-- [read meter]")]),t._v(" "),v("td",[t._v("send <--[read meter]")]),t._v(" "),v("td",[t._v("必选")])]),t._v(" "),v("tr",[v("td",[t._v("7")]),t._v(" "),v("td",[t._v("写表")]),t._v(" "),v("td",[t._v("ack-> [Meter Control]")]),t._v(" "),v("td",[t._v("send <-- [write meter]")]),t._v(" "),v("td",[t._v("send <--[write meter]")]),t._v(" "),v("td",[t._v("可选")])]),t._v(" "),v("tr",[v("td",[t._v("8")]),t._v(" "),v("td",[t._v("登出")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("send -> [DtuAddr]")]),t._v(" "),v("td",[t._v("ack <-- [DtuAddr]")]),t._v(" "),v("td",[t._v("可选")])]),t._v(" "),v("tr",[v("td",[t._v("9")]),t._v(" "),v("td",[t._v("断开")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("send -> [IP]")]),t._v(" "),v("td",[t._v("do_something")]),t._v(" "),v("td",[t._v("必选")])])])]),t._v(" "),v("p",[t._v("扫串口、扫描modbus、扫表是一个费时费流量的操作，例如扫表一般至少需要扫256次，一般只会在物联网工程施工阶段进行，并完成相应的自动注册功能，形成设备档案，正常运行中不进行这些操作。")]),t._v(" "),v("p",[t._v("这也是为什么电力抄表非常强调电表档案建设，如果没有档案，每一次DTU掉线都需要重新进行非常耗时耗流量的扫描任务")])])]),t._v(" "),v("h1",{attrs:{id:"交互流程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#交互流程"}},[t._v("#")]),t._v(" 交互流程")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("---------------------------------------------------------------------------------------------------------------------\n|             物理层                                      |   连接层                 |      虚拟层            | 应用层|\n---------------------------------------------------------------------------------------------------------------------\n         User1(Session)                User2(Session)                           \n             |                              |           \n            API                            API             <--http--\x3e shuwa_rest  --+\n             |                              |                                       |\n             +                              +                                       |\n        Department1(Role)             Department2(Role)                             |\n             |                              |                                       |\n            ACL                            ACL            <--parse--\x3e shuaw_parse --+\n             +                              +                                       |              +-- 时序数据--+\n         Group(Devcie)                 Group(Devcie)                                |              |            |\n             |                              |                                       | === 流计算==> 物理层镜像    +--\x3e 批量计算      \n    +--------+-------+                      +                                       |              |            |\n    |                |                      |                                       |              +-- 关系数据--+              \nDTU1(Device1)    DTU2(Device)           DTU3(Device)        <--tcp--\x3e  tcp_server ---+\n    |                |                      |                                       | \nmodbus             modbus                modbus            <--modbus--\x3e  proctol ---+\n    |                |                      |                                       |\n    +                +                      +                                       |\n   485              485                     485             <--485--\x3e    proctol  --+ \n    |                |                      |                                       |\n    +                +             +--------+--------+                              |\n    |                |             |                 |                              |\nMeter1(Device) Meter2(Device) Meter4(Device）Meter5(Device）<--DLT/645--\x3e proctol --+                \n")])])]),v("p",[t._v("在正式动手之前，请先体会一下心得和理解用户场景")]),t._v(" "),v("h1",{attrs:{id:"用户权限"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#用户权限"}},[t._v("#")]),t._v(" 用户权限")]),t._v(" "),v("p",[t._v("角色（Role）是资源的拥有者以及传递者。\n用户（User）是角色的实例化。")]),t._v(" "),v("h2",{attrs:{id:"如何创建角色"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#如何创建角色"}},[t._v("#")]),t._v(" 如何创建角色")]),t._v(" "),v("p",[t._v("第一步")]),t._v(" "),v("p",[t._v("点击“多租户”进入多租户页面，再点击“角色管理”进入角色管理页面，最后点击已有角色后的“+”图标添加新角色。\n"),v("img",{attrs:{src:"https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/meter/role_manage1.png",alt:"role_manage1.png"}})]),t._v(" "),v("p",[t._v("第二步")]),t._v(" "),v("p",[t._v("为新角色设置相应的角色名，部门，岗位，备注（角色名与备注必填）\n"),v("img",{attrs:{src:"https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/meter/role_manage2.png",alt:"role_manage2.png"}}),t._v("\n第三步")]),t._v(" "),v("p",[t._v("为新角色分配对应的权限，分配对应的菜单。\n"),v("img",{attrs:{src:"https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/meter/role_manage3.png",alt:"role_manage3.png"}}),t._v("\n完成后即创建完成。")]),t._v(" "),v("h2",{attrs:{id:"如何创建用户"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#如何创建用户"}},[t._v("#")]),t._v(" 如何创建用户")]),t._v(" "),v("p",[t._v("用户的权限资源均来自于角色，即权限资源先分配给角色，然后用户关联该角色。")]),t._v(" "),v("p",[t._v("第一步")]),t._v(" "),v("p",[t._v("点击“多租户”进入多租户页面，再点击“用户管理”进入用户管理页面，最后点击已有角色后的“+”图标添加新用户。\n"),v("img",{attrs:{src:"https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/meter/user_manage1.png",alt:"user_manage1.png"}})]),t._v(" "),v("p",[t._v("第二步")]),t._v(" "),v("p",[t._v("为新用户设置相应的姓名，手机号，邮箱，账号，密码，选择对应部门。\n"),v("img",{attrs:{src:"https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/meter/user_manage2.png",alt:"user_manage2.png"}})]),t._v(" "),v("p",[t._v("第三步")]),t._v(" "),v("p",[t._v("用新建的用户登录。\n"),v("img",{attrs:{src:"https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/meter/user_manage3.png",alt:"user_manage3.png"}}),t._v("\n可以看到之前分配的菜单界面\n"),v("img",{attrs:{src:"https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/meter/user_manage4.png",alt:"user_manage4.png"}})]),t._v(" "),v("h2",{attrs:{id:"名词解释"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#名词解释"}},[t._v("#")]),t._v(" 名词解释")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("术语")]),t._v(" "),v("th",[t._v("描述")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("角色（Role）")]),t._v(" "),v("td",[t._v("资源权限的拥有者以及传递者")])]),t._v(" "),v("tr",[v("td",[t._v("用户（User）")]),t._v(" "),v("td",[t._v("资源权限的具体操作者")])]),t._v(" "),v("tr",[v("td",[t._v("部门（department）")]),t._v(" "),v("td",[t._v("角色的映射，方便使用者记忆使用")])]),t._v(" "),v("tr",[v("td",[t._v("岗位")]),t._v(" "),v("td",[t._v("角色权限的具体实例化")])])])]),t._v(" "),v("h1",{attrs:{id:"产品设备"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#产品设备"}},[t._v("#")]),t._v(" 产品设备")]),t._v(" "),v("p",[t._v("使用物联网平台的第一步是在控制台创建产品。产品是设备的集合，通常是一组具有相同功能定义的设备集合。例如，产品指同一个型号的产品，设备就是该型号下的某个设备。")]),t._v(" "),v("ul",[v("li",[t._v("产品：设备的集合，指一组具有相同功能的设备。在这个界面，你可以给其配置物模型、物接入与物存储。物模型是对设备在云端的功能描述，包括设备的属性、服务和事件。物联网平台通过定义一种物的描述语言来描述物模型，称之为TSL（即Thing Specification Language ），采用JSON格式，我们根据TSL组装上报设备的数据。在产品界面，我们可以运行或编辑组态。")]),t._v(" "),v("li",[t._v("设备：归属于某个产品下的具体设备。设备可以直接连接物联网平台，也可以作为子设备通过网关连接物联网平台。在这个界面，你可以对设备进行增删查改等编辑操作，并可组态展示设备的当前状态。")])]),t._v(" "),v("h2",{attrs:{id:"如何创建产品"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#如何创建产品"}},[t._v("#")]),t._v(" 如何创建产品")]),t._v(" "),v("p",[t._v("登录平台控制台。\n在左侧导航栏，选择设备云 > 产品管理 >创建产品，单击创建产品。\n按照页面提示填写信息，然后单击确认。\n"),v("img",{attrs:{src:"https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/meter/product_manage1.png",alt:"product_manage1.png"}}),t._v(" "),v("img",{attrs:{src:"https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/meter/product_manage2.png",alt:"product_manage2.png"}})]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("参数")]),t._v(" "),v("th",[t._v("描述")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("产品名称")]),t._v(" "),v("td",[t._v("为产品命名，产品名称在账号内具有唯一性")])]),t._v(" "),v("tr",[v("td",[t._v("产品分组")]),t._v(" "),v("td",[t._v("产品标识，用于区分不同设备")])]),t._v(" "),v("tr",[v("td",[t._v("所属分类")]),t._v(" "),v("td",[t._v("该产品的类型")])]),t._v(" "),v("tr",[v("td",[t._v("所属应用")]),t._v(" "),v("td",[t._v("拥有该产品的角色")])]),t._v(" "),v("tr",[v("td",[t._v("节点类型")]),t._v(" "),v("td",[t._v("产品下设备的类型，分为设备和网关")])]),t._v(" "),v("tr",[v("td",[t._v("连网方式")]),t._v(" "),v("td",[t._v("直连设备和网关设备的连网方式")])]),t._v(" "),v("tr",[v("td",[t._v("产品描述")]),t._v(" "),v("td",[t._v("可输入文字，用来描述产品信息")])])])]),t._v(" "),v("h2",{attrs:{id:"后续操作"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#后续操作"}},[t._v("#")]),t._v(" 后续操作")]),t._v(" "),v("p",[t._v("在“产品管理”控制台下，可以进行产品开发，设备管理等操作。")]),t._v(" "),v("ul",[v("li",[t._v("产品管理")])]),t._v(" "),v("p",[t._v("选择“产品管理”，在产品列表,操作栏中，单击“配置”，进入“产品详情”页。单击相应页签，查看产品信息、Topic类列表，设置自定义Topic、物模型、物解析、物接入、物存储等。\n"),v("img",{attrs:{src:"https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/meter/product_manage3.png",alt:"product_manage3.png"}})]),t._v(" "),v("p",[v("img",{attrs:{src:"https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/meter/product_manage4.png",alt:"product_manage4.png"}})]),t._v(" "),v("ul",[v("li",[t._v("设备管理\n单击产品详情页的设备开发页签，跟随界面提示进行设备创建、功能开发、连接验证，完成设备开发，接入物联网平台。")])]),t._v(" "),v("h2",{attrs:{id:"添加物模型"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#添加物模型"}},[t._v("#")]),t._v(" 添加物模型")]),t._v(" "),v("ul",[v("li",[t._v("自定义属性添加\n"),v("img",{attrs:{src:"https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/meter/product_manage5.png",alt:"product_manage5.png"}}),t._v("\n填写名称，标识符，取值范围，数据类型，单位等值\n"),v("img",{attrs:{src:"https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/meter/product_manage6.png",alt:"product_manage6.png"}})])]),t._v(" "),v("p",[t._v("其中各项含义见下表")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("名称")]),t._v(" "),v("th",[t._v("含义")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("功能名称")]),t._v(" "),v("td",[t._v("物模型的作用，实现的功能")])]),t._v(" "),v("tr",[v("td",[t._v("标识符")]),t._v(" "),v("td",[t._v("唯一识别物模型，一般用功能名称的英文翻译")])]),t._v(" "),v("tr",[v("td",[t._v("取值范围（数值）")]),t._v(" "),v("td",[t._v("物模型的取值范围")])]),t._v(" "),v("tr",[v("td",[t._v("步长")]),t._v(" "),v("td",[t._v("即step，物模型取值依次增长的幅度")])]),t._v(" "),v("tr",[v("td",[t._v("读写类型")]),t._v(" "),v("td",[t._v("读写：文档或属性既能读取，也能修改 只读：又称唯读，表示文档或属性只能读取，不能修改也不能存储。")])]),t._v(" "),v("tr",[v("td",[t._v("数据类型")]),t._v(" "),v("td",[t._v("物模型的数据类型，可选择")])]),t._v(" "),v("tr",[v("td",[t._v("采集公式")]),t._v(" "),v("td",[t._v("我们需要的数据与采集的数据之间的数学关系式 %q：数据标识第二个空里面的数据 %s：采集到的数据 %r：采集的轮次")])]),t._v(" "),v("tr",[v("td",[t._v("控制公式")]),t._v(" "),v("td",[t._v("控制数据采集的次数或满足特殊的采集需求（true为1，false为大于1的其他数字）")])]),t._v(" "),v("tr",[v("td",[t._v("数据标识第一个空")]),t._v(" "),v("td",[t._v("address地址值。如果是modbus协议，则数据标识表示传感器的寄存器地址。 否则用唯一数字字母组合标识即可。相应传感器说明手册可查。")])]),t._v(" "),v("tr",[v("td",[t._v("数据标识第二个空")]),t._v(" "),v("td",[t._v("即%q。如果读写类型选的只读，则此处填字节数。 如果读写类型选的读写，用于modbus协议，表示参数地址，或模拟量的功能码。相应传感器说明手册可查。进制，十进制。")])]),t._v(" "),v("tr",[v("td",[t._v("协议类型")]),t._v(" "),v("td",[t._v("我们可以选择modbus协议，否则就是normal")])]),t._v(" "),v("tr",[v("td",[t._v("字节序")]),t._v(" "),v("td",[t._v("大端：高位字节排放在内存的低地址端，低位字节排放在内存的高地址端。 小端：低位字节排放在内存的低地址端，高位字节排放在内存的高地址端。")])]),t._v(" "),v("tr",[v("td",[t._v("寄存器状态")]),t._v(" "),v("td",[t._v("线圈状态：读从机离散量输出口的ON/OFF状态。 "),v("br"),t._v("读输入状态：读从机离散量输入信号的ON/OFF状态。  "),v("br"),t._v("保持寄存器：可以通过通信命令读或者写的寄存器  "),v("br"),t._v("输入寄存器：只能读不能写的寄存器")])]),t._v(" "),v("tr",[v("td",[t._v("从机地址")]),t._v(" "),v("td",[t._v("从机的address，用于modbus通讯。相应传感器说明手册可查。进制：十进制")])])])]),t._v(" "),v("ul",[v("li",[t._v("标准属性的添加")])]),t._v(" "),v("p",[t._v("点击“新增标准属性”\n"),v("img",{attrs:{src:"https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/meter/product_manage7.png",alt:"product_manage7.png"}}),t._v(" "),v("img",{attrs:{src:"https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/meter/product_manage8.png",alt:"product_manage8.png"}}),t._v("\n自动添加相关属性\n"),v("img",{attrs:{src:"https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/meter/product_manage9.png",alt:"product_manage9.png"}})]),t._v(" "),v("ul",[v("li",[t._v("添加物接入")])]),t._v(" "),v("p",[t._v("选择物接入，选择通道"),v("br"),t._v("\n注：每次添加通道后，需重启对应的通道，即禁用通道后再启用\n"),v("img",{attrs:{src:"https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/meter/product_manage10.png",alt:"product_manage10.png"}}),t._v(" "),v("img",{attrs:{src:"https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/meter/product_manage11.png",alt:"product_manage11.png"}})]),t._v(" "),v("ul",[v("li",[t._v("物存储\n选择物存储，选择通道"),v("br"),t._v("\n注：每次添加通道后，需重启对应的通道，即禁用通道后再启用\n"),v("img",{attrs:{src:"https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/meter/product_manage12.png",alt:"product_manage12.png"}})])]),t._v(" "),v("h2",{attrs:{id:"如何添加设备"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#如何添加设备"}},[t._v("#")]),t._v(" 如何添加设备")]),t._v(" "),v("p",[t._v("左侧导航栏选择设备管理，点击设备添加；"),v("br"),t._v("\n依次填写名称，设备编号，资产编号，型号，品牌，选择对应的产品等\n"),v("img",{attrs:{src:"https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/meter/product_manage14.png",alt:"product_manage14.png"}}),v("br"),t._v(" "),v("img",{attrs:{src:"https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/meter/product_manage13.png",alt:"product_manage13.png"}})])])}),[],!1,null,null,null);_.default=s.exports}}]);