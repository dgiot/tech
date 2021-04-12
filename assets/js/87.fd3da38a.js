(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{607:function(s,t,a){"use strict";a.r(t);var e=a(8),r=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"mqtt-桥接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mqtt-桥接"}},[s._v("#")]),s._v(" MQTT 桥接")]),s._v(" "),a("p",[s._v("EMQ X 桥接转发 MQTT 消息到 MQTT Broker，支持桥接至常见 MQTT 云服务:")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/develop_png/zh_CN/bridge/assets/bridge_mqtt.png",alt:"bridge_mqtt.png"}})]),s._v(" "),a("p",[s._v("mqtt bridge 桥接插件配置文件: etc/plugins/emqx_bridge_mqtt.conf。")]),s._v(" "),a("h2",{attrs:{id:"配置-mqtt-桥接的-broker-地址"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置-mqtt-桥接的-broker-地址"}},[s._v("#")]),s._v(" 配置 MQTT 桥接的 Broker 地址")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 桥接地址： 使用节点名则用于 rpc 桥接，使用 host:port 用于 mqtt 连接")]),s._v("\nbridge.mqtt.aws.address "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:1883\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 桥接的协议版本")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 枚举值: mqttv3 | mqttv4 | mqttv5")]),s._v("\nbridge.mqtt.aws.proto_ver "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" mqttv4\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## mqtt 连接是否启用桥接模式")]),s._v("\nbridge.mqtt.aws.bridge_mode "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## mqtt 客户端的 client_id")]),s._v("\nbridge.mqtt.aws.client_id "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" bridge_aws\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## mqtt 客户端的 clean_start 字段")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 注: 有些 MQTT Broker 需要将 clean_start 值设成 `true`")]),s._v("\nbridge.mqtt.aws.clean_start "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## mqtt 客户端的 username 字段")]),s._v("\nbridge.mqtt.aws.username "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" user\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## mqtt 客户端的 password 字段")]),s._v("\nbridge.mqtt.aws.password "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("passwd")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## mqtt 客户端是否使用 ssl 来连接远程服务器")]),s._v("\nbridge.mqtt.aws.ssl "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" off\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 客户端 SSL 连接的 CA 证书 (PEM格式)")]),s._v("\nbridge.mqtt.aws.cacertfile "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" etc/certs/cacert.pem\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 客户端 SSL 连接的 SSL 证书")]),s._v("\nbridge.mqtt.aws.certfile "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" etc/certs/client-cert.pem\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 客户端 SSL 连接的密钥文件")]),s._v("\nbridge.mqtt.aws.keyfile "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" etc/certs/client-key.pem\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## SSL 加密算法")]),s._v("\nbridge.mqtt.aws.ciphers "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" ECDHE-ECDSA-AES256-GCM-SHA384,ECDHE-RSA-AES256-GCM-SHA384\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## TLS PSK 的加密算法")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 注意 'listener.ssl.external.ciphers' 和 'listener.ssl.external.psk_ciphers' 不能同时配置")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("##")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## See 'https://tools.ietf.org/html/rfc4279#section-2'.")]),s._v("\nbridge.mqtt.aws.psk_ciphers "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" PSK-AES128-CBC-SHA,PSK-AES256-CBC-SHA,PSK-3DES-EDE-CBC-SHA,PSK-RC4-SHA\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 客户端的心跳间隔")]),s._v("\nbridge.mqtt.aws.keepalive "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" 60s\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 支持的 TLS 版本")]),s._v("\nbridge.mqtt.aws.tls_versions "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" tlsv1.2,tlsv1.1,tlsv1\n")])])]),a("h2",{attrs:{id:"配置-mqtt-桥接转发和订阅主题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置-mqtt-桥接转发和订阅主题"}},[s._v("#")]),s._v(" 配置 MQTT 桥接转发和订阅主题")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 桥接的 mountpoint(挂载点)")]),s._v("\nbridge.mqtt.aws.mountpoint "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" bridge/aws/"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${node}")]),s._v("/\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 转发消息的主题")]),s._v("\nbridge.mqtt.aws.forwards "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" topic1/"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#,topic2/#")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 用于桥接的订阅主题")]),s._v("\nbridge.mqtt.aws.subscription.1.topic "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" cmd/topic1\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 用于桥接的订阅 qos")]),s._v("\nbridge.mqtt.aws.subscription.1.qos "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 用于桥接的订阅主题")]),s._v("\nbridge.mqtt.aws.subscription.2.topic "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" cmd/topic2\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 用于桥接的订阅 qos")]),s._v("\nbridge.mqtt.aws.subscription.2.qos "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n")])])]),a("h2",{attrs:{id:"mqtt-桥接转发和订阅主题说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mqtt-桥接转发和订阅主题说明"}},[s._v("#")]),s._v(" MQTT 桥接转发和订阅主题说明")]),s._v(" "),a("p",[s._v("挂载点 Mountpoint: mountpoint 用于在转发消息时加上主题前缀，该配置选项须配合 forwards 使用，转发主题为\nsensor1/hello 的消息, 到达远程节点时主题为 bridge/aws/emqx1@192.168.1.1/sensor1/hello。")]),s._v(" "),a("p",[s._v("转发主题 Forwards: 转发到本地 EMQX 指定 forwards 主题上的消息都会被转发到远程 MQTT Broker 上。")]),s._v(" "),a("p",[s._v("订阅主题 Subscription: 本地 EMQX 通过订阅远程 MQTT Broker 的主题来将远程 MQTT Broker\n上的消息同步到本地。")]),s._v(" "),a("h2",{attrs:{id:"启用-bridge-mqtt-桥接插件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启用-bridge-mqtt-桥接插件"}},[s._v("#")]),s._v(" 启用 bridge_mqtt 桥接插件")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("./bin/emqx_ctl plugins load emqx_bridge_mqtt\n")])])]),a("h2",{attrs:{id:"桥接-cli-命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#桥接-cli-命令"}},[s._v("#")]),s._v(" 桥接 CLI 命令")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" emqx1/ "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" ./bin/emqx_ctl bridges\nbridges list                                    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# List bridges")]),s._v("\nbridges start "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("Name"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("                            "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Start a bridge")]),s._v("\nbridges stop "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("Name"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("                             "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Stop a bridge")]),s._v("\nbridges forwards "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("Name"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("                         "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Show a bridge forward topic")]),s._v("\nbridges add-forward "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("Name"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("Topic"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("              "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Add bridge forward topic")]),s._v("\nbridges del-forward "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("Name"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("Topic"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("              "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Delete bridge forward topic")]),s._v("\nbridges subscriptions "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("Name"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("                    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Show a bridge subscriptions topic")]),s._v("\nbridges add-subscription "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("Name"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("Topic"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("Qos"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Add bridge subscriptions topic")]),s._v("\n")])])]),a("h2",{attrs:{id:"列出全部-bridge-状态"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#列出全部-bridge-状态"}},[s._v("#")]),s._v(" 列出全部 bridge 状态")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ ./bin/emqx_ctl bridges list\nname: emqx     status: Stopped\n")])])]),a("h2",{attrs:{id:"启动指定-bridge"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启动指定-bridge"}},[s._v("#")]),s._v(" 启动指定 bridge")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ ./bin/emqx_ctl bridges start emqx\nStart bridge successfully.\n")])])]),a("h2",{attrs:{id:"停止指定-bridge"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#停止指定-bridge"}},[s._v("#")]),s._v(" 停止指定 bridge")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ ./bin/emqx_ctl bridges stop emqx\nStop bridge successfully.\n")])])]),a("h2",{attrs:{id:"列出指定-bridge-的转发主题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#列出指定-bridge-的转发主题"}},[s._v("#")]),s._v(" 列出指定 bridge 的转发主题")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ ./bin/emqx_ctl bridges forwards emqx\ntopic:   topic1/"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\ntopic:   topic2/"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n")])])]),a("h2",{attrs:{id:"添加指定-bridge-的转发主题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#添加指定-bridge-的转发主题"}},[s._v("#")]),s._v(" 添加指定 bridge 的转发主题")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ ./bin/emqx_ctl bridges add-forwards emqx topic3/"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\nAdd-forward topic successfully.\n")])])]),a("h2",{attrs:{id:"删除指定-bridge-的转发主题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#删除指定-bridge-的转发主题"}},[s._v("#")]),s._v(" 删除指定 bridge 的转发主题")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ ./bin/emqx_ctl bridges del-forwards emqx topic3/"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\nDel-forward topic successfully.\n")])])]),a("h2",{attrs:{id:"列出指定-bridge-的订阅"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#列出指定-bridge-的订阅"}},[s._v("#")]),s._v(" 列出指定 bridge 的订阅")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ ./bin/emqx_ctl bridges subscriptions emqx\ntopic: cmd/topic1, qos: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\ntopic: cmd/topic2, qos: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n")])])]),a("h2",{attrs:{id:"添加指定-bridge-的订阅主题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#添加指定-bridge-的订阅主题"}},[s._v("#")]),s._v(" 添加指定 bridge 的订阅主题")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ ./bin/emqx_ctl bridges add-subscription emqx cmd/topic3 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\nAdd-subscription topic successfully.\n")])])]),a("h2",{attrs:{id:"删除指定-bridge-的订阅主题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#删除指定-bridge-的订阅主题"}},[s._v("#")]),s._v(" 删除指定 bridge 的订阅主题")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ ./bin/emqx_ctl bridges del-subscription emqx cmd/topic3\nDel-subscription topic successfully.\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);