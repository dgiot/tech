# 操作步骤
以下会使用两种方法来对DTU配置参数,用户根据自己需求和条件进行选择和调配.

串口调试和网络调试的利弊:

串口调试:传输速度快,后续修改方便;有线连接冗杂.

网络调试:设备不受限;传输速度较慢,后续修改麻烦.

[点击下载](https://www.usr.cn/Down/USR-IO_set_V2.2.9.rar)下载DTU调试软件,解压后打开软件进行后续步骤:

此处说明一下,若不想下载且没有485转USB线可以将DTU和电脑连入同一网段即一个路由器下,然后在浏览器内进入10.10.100.254后可以进行网页DTU更改.需要更改处可以参考下列图例理解后更改.注意的时每次更改完都要确认才可进入下一项的更改,最后重启DTU后直接进入平台配置.那后续修改的话网页输入DTU的IP即可.

**注:** 为确保设备正常连接,最好将设备恢复出厂设置.长按Reload键5-15s即可.

## 串口调试

用户利用RS485转USB将DTU和电脑连接后,打开软件选择USR-IO424T后进入页面,为查询并修改设备相关信息,请按照以下图片和讲解操作:

![temp-3.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/temp/temp-3.png)

1.打开串口配置.默认为波特率9600;校验位none;数据位8;停止位1.

2.点击'打开串口'.正常情况下此时右侧LOG会显示串口信息并提示以打开.

3.点击'搜索'.此时串口会寻找DTU,若搜索到设备则单击'停止',否则影像后续操作.

4.选择'设备'的下拉框,选择要连接的设备.

5.点击'切换到IO控制'.在该面板可查看DTU的一些信息.

6.点击'查询参数'.经过10S左右会读取到DTU所有信息并显示.

7.点击'重启'.

在信息显示后我们将对部分数据进行更改使其温度数据可以通过DTU上传到我们的服务器.具体修改处如图所示:

![temp-4.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/temp/temp-4.png)

1.选择注册包为**2.MAC**类型.注册包是为了让服务器能够识别数据来源设备，或作为获取服务器功能授权的密码。

2.设置远程连接地址,此处采用平台的服务器地址.(服务器的购买与租用参考阿里腾讯等)

3.设置'tcpc远程连接端口'.选择端口时务必检查是否会引起端口冲突.该端口在平台通道创建会用到,请牢记.

4.修改DTU所属WIFI的用户名.

5.修改DTU所属WIFI的密码.

6.将WIFI模式设置为'2STA'模式.

**切记:** 更改WIFI AP/STA模式这一步放在修改万wifi配置后再执行!!!若顺序错误会造成数据无法透传到服务器.

## 网络调试

针对于不用串口进行调试的用户,可以选择使用网络进行连接.

用户在进行下列步骤前先打开无线连接连上DTU后再操作.DTU初始密码为www.usr.cn

![temp-5.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/temp/temp-5.png)

1.点击'通过网络操作'.

2.点击'查找设备'.此时右侧会提示已经搜索到设备.

3.选择'设备'的下拉框,选择要连接的设备.

4.点击'切换到IO控制'.在该面板可查看DTU的一些信息.

5.点击'查询参数'.经过20S左右会读取到DTU所有信息并显示.

6.点击'重启',使DTU重新加载新配置.

-绿框内也可进行网络设置,此操作电脑和DTU必须处于同一路由器下.配置时参考图例加以理解即可.

-----
在信息显示后我们将对部分数据进行更改使其温度数据可以通过DTU上传到我们的服务器.具体修改处如图所示:

![temp-4.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/temp/temp-4.png)

1.选择注册包为**2.MAC**类型.注册包是为了让服务器能够识别数据来源设备，或作为获取服务器功能授权的密码。

2.设置远程连接地址,此处采用平台的服务器地址.(服务器的购买与租用参考阿里腾讯等)

3.设置'tcpc远程连接端口'.选择端口时务必检查是否会引起端口冲突.该端口在平台通道创建会用到,请牢记.

4.修改DTU所属WIFI的用户名.

5.修改DTU所属WIFI的密码.

6.将WIFI模式设置为'2STA'模式.

**切记:** 更改WIFI AP/STA模式这一步放在修改万wifi配置后再执行!!!若顺序错误会造成数据无法透传到服务器.

---------

此时我们已经将DTU配置完成,接下去将去平台上完成数据的可视化.







