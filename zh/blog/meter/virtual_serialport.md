
# 操作步骤
 
 ##. 部署软件
 
 [点击下载](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/blog/meter/virtual_serialport.zip),解压到D盘根目录,目录结构如下D:\virtual_serialport
 
 + 选中D:\virtual_serialport\vspdxp_install.exe 选择管理员运行,提示安装成功
 
 ##. 配对串口
 
 + 选中D:\virtual_serialport\vspdconfig.exe 选择管理员运行 选择virtual ports 在Manage ports中 点击addpair
 生成一对串口,例如COM1和COM2 
  ![vitual_serialport_demo.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/blog/meter/vitual_serialport_demo.png)
  
  配对串口分配
  ```
   COM1-- METER
    |
    |
   COM2 -- DTU
  
  ```
 **注意**  虚拟电表和虚拟DTU的串口配置必须一一致
 
# 产品说明