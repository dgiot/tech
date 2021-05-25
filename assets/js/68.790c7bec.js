(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{673:function(_,v,t){"use strict";t.r(v);var p=t(9),s=Object(p.a)({},(function(){var _=this,v=_.$createElement,t=_._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[t("h1",{attrs:{id:"操作步骤"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#操作步骤"}},[_._v("#")]),_._v(" 操作步骤")]),_._v(" "),t("p",[_._v("以下会使用两种方法来对DTU配置参数,用户根据自己需求和条件进行选择和调配.")]),_._v(" "),t("p",[_._v("串口调试和网络调试的利弊:")]),_._v(" "),t("p",[_._v("串口调试:传输速度快,后续修改方便;有线连接冗杂.")]),_._v(" "),t("p",[_._v("网络调试:设备不受限;传输速度较慢,后续修改麻烦.")]),_._v(" "),t("p",[t("a",{attrs:{href:"https://www.usr.cn/Down/USR-IO_set_V2.2.9.rar",target:"_blank",rel:"noopener noreferrer"}},[_._v("点击下载"),t("OutboundLink")],1),_._v("下载DTU调试软件,解压后打开软件进行后续步骤:")]),_._v(" "),t("p",[t("strong",[_._v("注:")]),_._v(" 为确保设备正常连接,最好将设备恢复出厂设置.长按Reload键5-15s即可.")]),_._v(" "),t("h2",{attrs:{id:"串口调试"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#串口调试"}},[_._v("#")]),_._v(" 串口调试")]),_._v(" "),t("p",[_._v("用户利用RS485转USB将DTU和电脑连接后,打开软件选择USR-IO424T后进入页面,为查询并修改设备相关信息,请按照以下图片和讲解操作:")]),_._v(" "),t("p",[t("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/temp/temp-3.png",alt:"temp-3.png"}})]),_._v(" "),t("p",[_._v("1.打开串口配置.默认为波特率9600;校验位none;数据位8;停止位1.")]),_._v(" "),t("p",[_._v("2.点击'打开串口'.正常情况下此时右侧LOG会显示串口信息并提示以打开.")]),_._v(" "),t("p",[_._v("3.点击'搜索'.此时串口会寻找DTU,若搜索到设备则单击'停止',否则影像后续操作.")]),_._v(" "),t("p",[_._v("4.选择'设备'的下拉框,选择要连接的设备.")]),_._v(" "),t("p",[_._v("5.点击'切换到IO控制'.在该面板可查看DTU的一些信息.")]),_._v(" "),t("p",[_._v("6.点击'查询参数'.经过10S左右会读取到DTU所有信息并显示.")]),_._v(" "),t("p",[_._v("7.点击'重启'.")]),_._v(" "),t("p",[_._v("在信息显示后我们将对部分数据进行更改使其温度数据可以通过DTU上传到我们的服务器.具体修改处如图所示:")]),_._v(" "),t("p",[t("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/temp/temp-4.png",alt:"temp-4.png"}})]),_._v(" "),t("p",[_._v("1.选择注册包为"),t("strong",[_._v("2.MAC")]),_._v("类型.注册包是为了让服务器能够识别数据来源设备，或作为获取服务器功能授权的密码。")]),_._v(" "),t("p",[_._v("2.设置远程连接地址,此处采用平台的服务器地址.(服务器的购买与租用参考阿里腾讯等)")]),_._v(" "),t("p",[_._v("3.设置'tcpc远程连接端口'.选择端口时务必检查是否会引起端口冲突.该端口在平台通道创建会用到,请牢记.")]),_._v(" "),t("p",[_._v("4.修改DTU所属WIFI的用户名.")]),_._v(" "),t("p",[_._v("5.修改DTU所属WIFI的密码.")]),_._v(" "),t("p",[_._v("6.将WIFI模式设置为'2STA'模式.")]),_._v(" "),t("p",[t("strong",[_._v("切记:")]),_._v(" 更改WIFI AP/STA模式这一步放在修改万wifi配置后再执行!!!若顺序错误会造成数据无法透传到服务器.")]),_._v(" "),t("h2",{attrs:{id:"网络调试"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#网络调试"}},[_._v("#")]),_._v(" 网络调试")]),_._v(" "),t("p",[_._v("针对于不用串口进行调试的用户,可以选择使用网络进行连接.")]),_._v(" "),t("p",[_._v("用户在进行下列步骤前先打开无线连接连上DTU后再操作.DTU初始密码为www.usr.cn")]),_._v(" "),t("p",[t("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/temp/temp-5.png",alt:"temp-5.png"}})]),_._v(" "),t("p",[_._v("1.点击'通过网络操作'.")]),_._v(" "),t("p",[_._v("2.点击'查找设备'.此时右侧会提示已经搜索到设备.")]),_._v(" "),t("p",[_._v("3.选择'设备'的下拉框,选择要连接的设备.")]),_._v(" "),t("p",[_._v("4.点击'切换到IO控制'.在该面板可查看DTU的一些信息.")]),_._v(" "),t("p",[_._v("5.点击'查询参数'.经过20S左右会读取到DTU所有信息并显示.")]),_._v(" "),t("p",[_._v("6.点击'重启',使DTU重新加载新配置.")]),_._v(" "),t("p",[_._v("在信息显示后我们将对部分数据进行更改使其温度数据可以通过DTU上传到我们的服务器.具体修改处如图所示:")]),_._v(" "),t("p",[t("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/temp/temp-4.png",alt:"temp-4.png"}})]),_._v(" "),t("p",[_._v("1.选择注册包为"),t("strong",[_._v("2.MAC")]),_._v("类型.注册包是为了让服务器能够识别数据来源设备，或作为获取服务器功能授权的密码。")]),_._v(" "),t("p",[_._v("2.设置远程连接地址,此处采用平台的服务器地址.(服务器的购买与租用参考阿里腾讯等)")]),_._v(" "),t("p",[_._v("3.设置'tcpc远程连接端口'.选择端口时务必检查是否会引起端口冲突.该端口在平台通道创建会用到,请牢记.")]),_._v(" "),t("p",[_._v("4.修改DTU所属WIFI的用户名.")]),_._v(" "),t("p",[_._v("5.修改DTU所属WIFI的密码.")]),_._v(" "),t("p",[_._v("6.将WIFI模式设置为'2STA'模式.")]),_._v(" "),t("p",[t("strong",[_._v("切记:")]),_._v(" 更改WIFI AP/STA模式这一步放在修改万wifi配置后再执行!!!若顺序错误会造成数据无法透传到服务器.")]),_._v(" "),t("p",[_._v("-绿框内也可进行网络设置,等同于进入192.168.10.1进入修改.进入后修改处参考下图,切记每次更改后点击确认,最后重启.-")]),_._v(" "),t("hr"),_._v(" "),t("p",[_._v("此时我们已经将DTU配置完成,接下去将去平台上完成数据的可视化.")])])}),[],!1,null,null,null);v.default=s.exports}}]);