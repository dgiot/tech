(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{631:function(v,_,t){"use strict";t.r(_);var a=t(9),e=Object(a.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"操作步骤"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#操作步骤"}},[v._v("#")]),v._v(" 操作步骤")]),v._v(" "),t("h2",{attrs:{id:"涉及用电安全-非专业人员请勿操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#涉及用电安全-非专业人员请勿操作"}},[v._v("#")]),v._v(" "),t("strong",[v._v("涉及用电安全,非专业人员请勿操作")])]),v._v(" "),t("h2",{attrs:{id:"硬件准备"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#硬件准备"}},[v._v("#")]),v._v(" 硬件准备")]),v._v(" "),t("p",[v._v("本次操作用到的电表:DDZY1296型单向费控智能电能表,DTU:USR-W610.两者之间的通讯需要利用RS485线来完成.\n由于该型号的DTU利用网络进行调试,所以确保后期电脑与DTU可以在一个网段下进行操作.所需硬件如下图:")]),v._v(" "),t("p",[v._v("(图2)")]),v._v(" "),t("hr"),v._v(" "),t("h2",{attrs:{id:"本次测试用到的设备涉及到220v或更高电压的连线-在后续操作中缺乏电工基础请立即停止-如若后续调试由于个人原因或操作不当造成人员受伤本公司将豁免责任"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#本次测试用到的设备涉及到220v或更高电压的连线-在后续操作中缺乏电工基础请立即停止-如若后续调试由于个人原因或操作不当造成人员受伤本公司将豁免责任"}},[v._v("#")]),v._v(" "),t("strong",[v._v("本次测试用到的设备涉及到220V或更高电压的连线,在后续操作中缺乏电工基础请立即停止.如若后续调试由于个人\n原因或操作不当造成人员受伤本公司将豁免责任")])]),v._v(" "),t("p",[v._v("首先我们观察电表盒盖上标注的信息.根据图示初步了解各个数字标记处接口的作用和一些注意事项.如下图所示,我们\n做简单介绍:")]),v._v(" "),t("p",[v._v("(图3)")]),v._v(" "),t("p",[v._v("一."),t("em",[v._v("1")]),v._v("和"),t("em",[v._v("3")]),v._v("为一对串口.'入'为输入端,即为连接电网的两个端口.主要作用是将电接收做一个控制.")]),v._v(" "),t("p",[v._v("二."),t("em",[v._v("2")]),v._v("和"),t("em",[v._v("4")]),v._v("为一对串口.'出'为输出端,即向设备供电的两个端口.主要作用是将电输出到用电器上.")]),v._v(" "),t("p",[v._v("三."),t("em",[v._v("7")]),v._v("和"),t("em",[v._v("8")]),v._v("为一对串口.根据标识得知为脉冲串口,注意上方标注的正负,接线要分清.")]),v._v(" "),t("p",[v._v("四."),t("em",[v._v("9")]),v._v("和"),t("em",[v._v("10")]),v._v("为一对串口.标注为多功能口,由于本次操作不涉及该端口,所以不做过多介绍.")]),v._v(" "),t("p",[v._v("五."),t("em",[v._v("11")]),v._v("和"),t("em",[v._v("12")]),v._v("为一对串口.为485口即我们熟悉的通讯端口.上方的A、B分别代表着正、负,注意连线分正负极.")]),v._v(" "),t("p",[v._v("其次,我们来介绍DTU.该DTU支持wifi和网线联网.那么这次我们是利用wifi对其进行接网操作.该型号支持RS485和\nRS232口数据传输,鉴于电表只支持485口协议那此次采用RS485做串联口.")]),v._v(" "),t("h2",{attrs:{id:"硬件连接"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#硬件连接"}},[v._v("#")]),v._v(" 硬件连接")]),v._v(" "),t("hr"),v._v(" "),t("p",[v._v("接下来涉及带电操作,先关闭电闸,然后根据步骤进行连接:")]),v._v(" "),t("p",[v._v("1.将电表的1、3口分别接入电网.注意1为+,3为-.")]),v._v(" "),t("p",[v._v("2.将电表的2、4口连接到用电器的+-极.(也可连接到接线板,后续测量用电量)")]),v._v(" "),t("p",[v._v("3.将电表与DTU的485串口连接起来,注意AB接口是否连接正确.")]),v._v(" "),t("p",[v._v("目前连线已经完成,可以尝试通电查看是否正常.若一切正常运行进入下一阶段DTU的配置.")])])}),[],!1,null,null,null);_.default=e.exports}}]);