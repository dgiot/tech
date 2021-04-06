
# 操作步骤
 
 1. 获取软件
 
 [下载DGIOT-DTU](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/blog/meter/dgiot_dtu.zip),解压到D盘根目录,目录结构如下D:\dgiot_dtu

 [下载TCP_SERVER](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/blog/meter/TCPUDPDebug102_Setup.exe),双击安装,

 
 2. 运行软件
   +  在tcp server软件,开启tcp server服务器, 监听端口8067
   +  在dgiot_dtu 选择上一步创建的成对串口 com2,波特率:115200,校验位：无，数据位：8 停止位:1
   +  在dgiot_dtu 选择tcp client连接地址127.0.0.1 和端口8076,默认登陆地址为 12345678
   +  在dgiot_dtu点击开始建立com2的tcp桥接
   
  ![virtual_dtu_demo.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/blog/meter/virtual_dtu_demo.png)
   
   至此，设备层的虚拟环境准备完毕，下一步准备电表采集通道开发