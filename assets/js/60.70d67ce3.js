(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{501:function(t,n,s){"use strict";s.r(n);var e=s(7),i=Object(e.a)({},(function(){var t=this.$createElement,n=this._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[n("p",[this._v("在尝试任何设备的接入之前，首先要清楚需要做什么。\n连接任何设备都离不开三个点：传感器设备、DTU、平台。传感器与DTU保持一个通讯，通过特定代码获得传感器数据。那这个特定代码就是我们配置的产品物模型，接着平台通过指令通道下发包装后的指令到DTU，DTU完成与传感器的数据交互在反馈给平台实现闭环。\n理解后设备连接也简单，两个设备通上电，然后用线把两个传感器的485口对接就完成了。接下去就开始读产品说明书，串口4项数据贯通DTU和传感器的通讯。然后将DTU设置连接到你的服务器上，找一个空闲通道号设置好。\n接着按实际情况为这个通道号配上合适的采集通道。加上两个公用的通道就能完成了。然后在产品里配置物模型。对于物模型而言，所需数据在说明书内都可以找到，实在不行让厂家提供收发代码，看懂格式填进去就可以了。\n最后把几个通道配进去，重启通道和产品就可以了。设备不上线你重启刷新，看看通道日志有没有DTU发数据上来。部分文档后面都有排错的方法。实在无法解决可以去github下Issues留言或者网页下面留言。")])])}),[],!1,null,null,null);n.default=i.exports}}]);