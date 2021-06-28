# DTU调试

进行下列操作前,先获取传感器的波特率,数据地址,设备信息奇偶校验和开始停止位. ***可以通过询问卖家、查看说明书或查看传感器自身标签等方式获得设备信息.*** 

DTU调试分3个方面。分别是网络配置、MCU配置和服务器信息配置。对于DTU而言,我们将在网页上面对它进行信息变更，关于DTU具体信息可在背面查看。

1.*网络配置*:此步骤以建立DTU连接网络为目的。点击DTU进行无线网络进行设置。将要连的wifi用户和密码输入到指定位置，设置完后若要点确认的因在完成每一次更改后都点一次,否则信息不会保存。

![网络连接.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/threeinone/%E7%BD%91%E7%BB%9C%E8%BF%9E%E6%8E%A5.png)

2.*MCU配置*:此步骤以建立电表和DTU之间的通讯为目的(对DTU的MCU进行调试时务必将传感设备所有配置与MCU配置调制成一致)，并选择设备上报注册包信息为MAC地址,方便设备自动上线后我们的检查。最后确认DTU不会上报有些没必要的信息，修改信息如下图所示:

![串口注册包.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/threeinone/%E4%B8%B2%E5%8F%A3%E6%B3%A8%E5%86%8C%E5%8C%85.png)

3.*服务器信息配置*:此步骤以建立DTU与服务器数据库连接为目的，先将我们的DTU设置为client模式去连接服务器,后将服务器地址和将要接收信息的端口号填入即可。如图示:

![服务器参数.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/threeinone/%E6%9C%8D%E5%8A%A1%E5%99%A8%E5%8F%82%E6%95%B0.png)

*****确保网络配置连接已完成更改后,在模式一栏将AP改为STA模式.即变为静态连接关闭原有的热点模式*****

![sta模式设置.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/threeinone/sta%E6%A8%A1%E5%BC%8F%E8%AE%BE%E7%BD%AE.png)

---
点击重启,让系统重启生效:

![模块重启.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/blog/study/threeinone/%E6%A8%A1%E5%9D%97%E9%87%8D%E5%90%AF.png)



