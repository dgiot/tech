(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{556:function(_,v,t){"use strict";t.r(v);var d=t(9),o=Object(d.a)({},(function(){var _=this,v=_.$createElement,t=_._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[t("h1",{attrs:{id:"平台配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#平台配置"}},[_._v("#")]),_._v(" 平台配置")]),_._v(" "),t("p",[_._v("绘制性能曲线，有"),t("code",[_._v("Q-H")]),_._v("（流量-扬程）、"),t("code",[_._v("Q-N")]),_._v("（流量-功率）、"),t("code",[_._v("Q-n")]),_._v("（流量-效率）三根曲线，蕴含有流量"),t("code",[_._v("Q")]),_._v("、扬程"),t("code",[_._v("H")]),_._v("、功率"),t("code",[_._v("N")]),_._v("和效率"),t("code",[_._v("n")]),_._v("四个变量。其中扬程"),t("code",[_._v("H")]),_._v("是根据进出口压力"),t("code",[_._v("f")]),_._v("得到的，\n效率"),t("code",[_._v("n")]),_._v("由流量、扬程和压力计算得到。故，只需要流量"),t("code",[_._v("Q")]),_._v("、功率"),t("code",[_._v("N")]),_._v("、进出口压力"),t("code",[_._v("f")]),_._v("这四个变量参数即可。")]),_._v(" "),t("p",[t("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/pump/xnqx.png",alt:"xnqx.png"}})]),_._v(" "),t("h2",{attrs:{id:"step-1-配置好通道"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#step-1-配置好通道"}},[_._v("#")]),_._v(" Step 1:配置好通道")]),_._v(" "),t("p",[t("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/pump/channel.png",alt:"channel.png"}})]),_._v(" "),t("p",[_._v("通过登录我们的平台，进入到"),t("code",[_._v("通道")]),_._v("界面。点击"),t("code",[_._v("创建通道")]),_._v("，依次创建三个通道，分别是"),t("code",[_._v("指令任务通道")]),_._v("、"),t("code",[_._v("数蛙水泵控制器采集通道")]),_._v("和"),t("code",[_._v("TD资源通道")]),_._v("。")]),_._v(" "),t("p",[t("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/pump/channel_create.png",alt:"channel_create.png"}})]),_._v(" "),t("p",[t("code",[_._v("指令任务通道")]),_._v("是给dtu下达采集任务指令，用于物接入。需要设置的有"),t("code",[_._v("开始时间")]),_._v("、"),t("code",[_._v("结束时间")]),_._v("、"),t("code",[_._v("采集频率")]),_._v("和"),t("code",[_._v("池子大小")]),_._v("这几个参数。其中"),t("code",[_._v("池子大小")]),_._v("改为1即可。")]),_._v(" "),t("p",[t("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/pump/channel_task.png",alt:"channel_task.png"}})]),_._v(" "),t("p",[t("code",[_._v("数蛙水泵控制器采集通道")]),_._v("是和dtu进行连接通讯，用于物接入。需要设置的有"),t("code",[_._v("端口")]),_._v("，"),t("code",[_._v("登录报文帧头")]),_._v("和"),t("code",[_._v("池子大小")]),_._v("这几个参数。其中，"),t("code",[_._v("端口")]),_._v("和"),t("code",[_._v("登录报文帧头")]),_._v("要与连接的dtu保持一致。"),t("code",[_._v("池子大小")]),_._v("也改为1。")]),_._v(" "),t("p",[_._v("dtu如何设置与我们平台通讯，可转到"),t("RouterLink",{attrs:{to:"/zh/blog/study/pump/dtu.html"}},[_._v("dtu配置页面")]),_._v("。")],1),_._v(" "),t("p",[t("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/pump/channel_dtu.png",alt:"channel_dtu.png"}})]),_._v(" "),t("p",[t("code",[_._v("TD资源通道")]),_._v("用于存储dtu传输的时序数据，用于物存储。其中设置好"),t("code",[_._v("服务器地址")]),_._v("、"),t("code",[_._v("端口")]),_._v("、"),t("code",[_._v("用户")]),_._v("、"),t("code",[_._v("密码")]),_._v("和"),t("code",[_._v("池子大小")]),_._v("这几个参数。")]),_._v(" "),t("p",[t("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/pump/channel_td.png",alt:"channel_td.png"}})]),_._v(" "),t("h2",{attrs:{id:"step-2-配置好分组"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#step-2-配置好分组"}},[_._v("#")]),_._v(" Step 2：配置好分组")]),_._v(" "),t("p",[_._v("配置好三个通道后，接下来是配置好分组。"),t("code",[_._v("分组")]),_._v("是将同用这三个通道的产品设备划为同一组。点击"),t("code",[_._v("新建")]),_._v("，新建成功后，在"),t("code",[_._v("物接入")]),_._v("处"),t("code",[_._v("选择通道")]),_._v("，将刚刚设置的指令任务通道和数蛙水泵控制器采集通道添加进去。")]),_._v(" "),t("p",[t("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/pump/group.png",alt:"group.png"}})]),_._v(" "),t("p",[_._v("同理，在物存储处添加"),t("code",[_._v("TD资源通道")]),_._v("。")]),_._v(" "),t("h2",{attrs:{id:"step-3-配置好产品和设备"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#step-3-配置好产品和设备"}},[_._v("#")]),_._v(" Step 3：配置好产品和设备")]),_._v(" "),t("p",[_._v("接下来，在通道页面，将配置好的"),t("code",[_._v("数蛙水泵控制器采集通道")]),_._v("启用。系统会自动生成一个产品和一个设备。设备即为我们用"),t("code",[_._v("数蛙水泵控制器采集通道")]),_._v("运行后绑定的dtu。设备的id与dtu的id一致。")]),_._v(" "),t("p",[_._v("在产品页面，选择刚刚生成好的产品，在其右侧，点击"),t("code",[_._v("配置")]),_._v("， 即可进入产品的编辑页面。")]),_._v(" "),t("p",[t("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/pump/product.png",alt:"product.png"}})]),_._v(" "),t("h3",{attrs:{id:"物模型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#物模型"}},[_._v("#")]),_._v(" 物模型")]),_._v(" "),t("p",[_._v("在物模型处我们配置不同的物模型，每个物模型分别与不同的传感器检测参数对应。")]),_._v(" "),t("p",[t("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/pump/model.png",alt:"model.png"}})]),_._v(" "),t("p",[_._v("点击"),t("code",[_._v("编辑")]),_._v("或者"),t("code",[_._v("新增自定义属性")]),_._v("，即可对物模型进行编辑。")]),_._v(" "),t("p",[t("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/pump/object_model.png",alt:"object_model.png"}})]),_._v(" "),t("p",[_._v("其中每一个空格的含义如下：")]),_._v(" "),t("table",[t("thead",[t("tr",[t("th",[_._v("名称")]),_._v(" "),t("th",[_._v("含义")])])]),_._v(" "),t("tbody",[t("tr",[t("td",[_._v("功能名称")]),_._v(" "),t("td",[_._v("物模型的作用，实现的功能")])]),_._v(" "),t("tr",[t("td",[_._v("标识符")]),_._v(" "),t("td",[_._v("唯一识别物模型，一般用功能名称的英译")])]),_._v(" "),t("tr",[t("td",[_._v("取值范围（数值）")]),_._v(" "),t("td",[_._v("物模型的取值范围")])]),_._v(" "),t("tr",[t("td",[_._v("步长")]),_._v(" "),t("td",[_._v("即step，物模型取值依次增长的幅度")])]),_._v(" "),t("tr",[t("td",[_._v("读写类型")]),_._v(" "),t("td",[_._v("读写；文档或属性既能读取，也能修改;  只读:又称唯读，表示文档或属性只能读取，不能修改，也不能存储")])]),_._v(" "),t("tr",[t("td",[_._v("数据类型")]),_._v(" "),t("td",[_._v("物模型的数据类型，可选择")])]),_._v(" "),t("tr",[t("td",[_._v("采集策略")]),_._v(" "),t("td",[_._v("可填入数值，代表是采集时间间隔；也可选择不采集（计算值）和不采集（主动上报）")])]),_._v(" "),t("tr",[t("td",[_._v("采集公式")]),_._v(" "),t("td",[_._v("我们需要的数据与采集的数据之间的数学关系式；%q:对应的是数据标识第二个空里面的数据;%s:采集到的数据;%r:采集的轮次")])]),_._v(" "),t("tr",[t("td",[_._v("控制公式")]),_._v(" "),t("td",[_._v("控制数据采集的次数或者满足特殊的采集需求（true为1,false为大于1的其他数字。语言erlang）")])]),_._v(" "),t("tr",[t("td",[_._v("数据标识第一个空")]),_._v(" "),t("td",[_._v("address地址值。如果是modbus协议，则数据标识表示传感器的寄存器地址。否则用唯一数字字母组合标识即可。相应传感器说明手册可查")])]),_._v(" "),t("tr",[t("td",[_._v("数据标识第二个空")]),_._v(" "),t("td",[_._v("即%q。如果读写类型选的只读，则此处填字节数。如果读写类型选的读写，用于modbus协议，表示参数地址，或模拟量的功能码。相应传感器说明手册可查。进制，十进制。")])]),_._v(" "),t("tr",[t("td",[_._v("协议类型")]),_._v(" "),t("td",[_._v("我们可以选择modbus协议，否则就是normal")])]),_._v(" "),t("tr",[t("td",[_._v("字节序")]),_._v(" "),t("td",[_._v("大端：高位字节排放在内存的低地址端，低位字节排放在内存的高地址端。小端：低位字节排放在内存的低地址端，高位字节排放在内存的高地址端。")])]),_._v(" "),t("tr",[t("td",[_._v("寄存器状态")]),_._v(" "),t("td",[_._v("线圈状态：读从机离散量输出口的on/off状态。读输入状态：读从机离散量输入信号的on/off状态。保持寄存器：可以通过通信命令读或者写的寄存器。输入寄存器：只能读不能写的寄存器。")])]),_._v(" "),t("tr",[t("td",[_._v("从机地址")]),_._v(" "),t("td",[_._v("从机的address，用于modbus通讯。传感器的说明手册可查，也可根据需要在传感器里更改。进制：十进制。")])])])]),_._v(" "),t("p",[_._v("例如，我们需要测量水泵运行的流量，就需要用到流量计进行测量。这个时候我们创建一个"),t("code",[_._v("流量")]),_._v("物模型。然后用"),t("code",[_._v("flow")]),_._v("做其标识符。取值范围根据实际情况取就行。读写类型选择只读。数据类型选择浮点值。\n因为是采集到的数据，采集公式填入"),t("code",[_._v("%s")]),_._v("即可。剩余的部分根据其代表的含义查阅流量计说明书即可。")]),_._v(" "),t("p",[_._v("但我们发现，有些参数是通过计算得到的。比如，扬程"),t("code",[_._v("H")]),_._v("是根据进出口压力"),t("code",[_._v("f")]),_._v("得到的。这样我们添加"),t("code",[_._v("扬程")]),_._v("这个物模型时该怎么设置呢？")]),_._v(" "),t("p",[_._v("因为是计算得到的，读写类型设置为读写。采集策略选择不采集（计算值）。采集公式写计算公式。注意，如果采集公式用到其他物模型参数，需要在其前面加上两个"),t("code",[_._v("%%")]),_._v("。比如"),t("code",[_._v("%%flow")]),_._v("代表的是采集的物模型流量的值。")]),_._v(" "),t("h3",{attrs:{id:"指令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#指令"}},[_._v("#")]),_._v(" 指令")]),_._v(" "),t("p",[_._v("配置好物模型，有些物模型时需要采集上来得到的，现在我们就需要配置其采集指令。平台通过采集指令来采集传感器收集的数据。")]),_._v(" "),t("p",[_._v("进入指令设置界面的途径：点击"),t("code",[_._v("设备")]),_._v("，在设备列表中找到使用的设备，点击"),t("code",[_._v("查看")]),_._v("，在功能列表中找到"),t("code",[_._v("设备指令")]),_._v("。")]),_._v(" "),t("p",[t("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/pump/instruct.png",alt:"instruct.png"}})]),_._v(" "),t("p",[_._v("在这个页面，你可以新增或者删除指令。也可以编辑、启用或者禁用指令。")]),_._v(" "),t("p",[t("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/pump/instruct_edit.png",alt:"instruct_edit.png"}})]),_._v(" "),t("p",[_._v("各项含义如下表：")]),_._v(" "),t("table",[t("thead",[t("tr",[t("th",[_._v("名称")]),_._v(" "),t("th",[_._v("含义")])])]),_._v(" "),t("tbody",[t("tr",[t("td",[_._v("指令名称")]),_._v(" "),t("td",[_._v("该指令的名称，与物模型的功能名称对应")])]),_._v(" "),t("tr",[t("td",[_._v("指令指标")]),_._v(" "),t("td",[_._v("可用寄存器地址表示")])]),_._v(" "),t("tr",[t("td",[_._v("操作类型")]),_._v(" "),t("td",[_._v("操作类型与物模型的读写类型对应")])]),_._v(" "),t("tr",[t("td",[_._v("指令序号")]),_._v(" "),t("td",[_._v("可设置指令下发顺序，格式阿拉伯数字")])]),_._v(" "),t("tr",[t("td",[_._v("超时时长")]),_._v(" "),t("td",[_._v("用于防止某个信号的缺失导致采集指令的中断。信号采集时间时间超过设置时长，则直接转到下一轮指令")])]),_._v(" "),t("tr",[t("td",[_._v("子网编号")]),_._v(" "),t("td",[_._v("内网地址。格式可用：从站/寄存器地址")])]),_._v(" "),t("tr",[t("td",[_._v("生效轮次")]),_._v(" "),t("td",[_._v("该指令起作用的轮次。可通过下拉框选择第一轮、最后一轮或全部；也可自行输入生效轮次，阿拉伯数字中间加逗号隔开")])]),_._v(" "),t("tr",[t("td",[_._v("发送间隔")]),_._v(" "),t("td",[_._v("指令发送时间间隔")])])])]),_._v(" "),t("p",[_._v("将上述指令配置好后，我们就可以通过启用"),t("code",[_._v("指令任务通道")]),_._v("和"),t("code",[_._v("TD资源通道")]),_._v("，来实现传感器数据的采集了。采集的数据就可以用来计算绘制性能曲线图了。")]),_._v(" "),t("p",[_._v("如果想实现全自动，也可以加一个电动阀门，给电动阀门发指令来控制流量即可。")]),_._v(" "),t("h2",{attrs:{id:"组态展示"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#组态展示"}},[_._v("#")]),_._v(" 组态展示")]),_._v(" "),t("p",[_._v("如果想实时展示采集到的数据，平台也有内置的组态展示模块。")]),_._v(" "),t("p",[_._v("我们通过依次进入"),t("code",[_._v("分组")]),_._v("-"),t("code",[_._v("编辑组态")]),_._v("或"),t("code",[_._v("设备")]),_._v("-"),t("code",[_._v("视图")]),_._v("或"),t("code",[_._v("产品")]),_._v("-"),t("code",[_._v("编辑组态")]),_._v("来进入组态的编辑与查看界面。")]),_._v(" "),t("p",[t("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/pump/show.png",alt:"show.png"}})]),_._v(" "),t("p",[_._v("组态过程：")]),_._v(" "),t("ul",[t("li",[_._v("背景图上传")])]),_._v(" "),t("p",[_._v("点击"),t("code",[_._v("上传背景图")]),_._v("，选择一张图作为背景图。确认"),t("code",[_._v("保存")]),_._v("。")]),_._v(" "),t("ul",[t("li",[_._v("数据条的拉取")])]),_._v(" "),t("p",[_._v("在界面左侧有不同的控件，我们通过拉取，将我们需要的控件拖入到图片相应位置。比如我们可以拖入三个text框并排在一起。分别写入测量量和单位。中间的text框\n可以通过点击"),t("code",[_._v("数据")]),_._v("，在"),t("code",[_._v("名称")]),_._v("栏选择相应的物模型。")])])}),[],!1,null,null,null);v.default=o.exports}}]);