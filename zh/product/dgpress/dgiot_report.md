---
icon: creative
category: 报告系统
---

# 报告系统部署
[shuwa_report-4.0.0.zip](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/dgiot_release/shuwa_report-4.0.0.zip)
点击下载，解压即用
- 支持word文档替换
- 支持主流办公文档的在线预览

### linux环境部署<br>
```
wget http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/dgiot_release/shuwa_report-4.0.0.zip && unzip shuwa_report-4.0.0.zip
./shuwa_report-4.0.0/bin/startup.sh
```
安装完之后可以打开 ip:8012/doc.html swagger接口文档即部署成功

大部分Linux系统上并没有预装中文字体或字体不全，需要把常用字体拷贝到Linux服务器上<br>
运行bin下面的fonts.sh进行安装
```
./shuwa_report-4.0.0/bin/fonts.sh
```