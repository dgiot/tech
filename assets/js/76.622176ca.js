(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{593:function(v,_,t){"use strict";t.r(_);var e=t(8),r=Object(e.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"消息重传"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#消息重传"}},[v._v("#")]),v._v(" 消息重传")]),v._v(" "),t("p",[v._v("消息重传 (Message Retransmission) 是属于 MQTT 协议标准规范的一部分。")]),v._v(" "),t("p",[v._v("协议中规定了作为通信的双方 "),t("strong",[v._v("服务端")]),v._v(" 和 "),t("strong",[v._v("客户端")]),v._v(" 对于自己发送到对端的 PUBLISH 消息都应满足其 "),t("strong",[v._v("服务质量 (Quality of Service levels)")]),v._v(" 的要求。如：")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("QoS 1：表示 "),t("strong",[v._v("消息至少送达一次 (At least once delivery)")]),v._v("；即发送端会一直重发该消息，除非收到了对端对该消息的确认。意思是在 MQTT 协议的上层（即业务的应用层）相同的 QoS 1 消息可能会收到多次。")])]),v._v(" "),t("li",[t("p",[v._v("QoS 2：表示 "),t("strong",[v._v("消息只送达一次 (Exactly once delivery)")]),v._v("；即该消息在上层仅会接收到一次。")])])]),v._v(" "),t("p",[v._v("虽然，QoS 1 和 QoS 2 的 PUBLISH 报文在 MQTT 协议栈这一层都会发生重传，但请你谨记的是：")]),v._v(" "),t("ul",[t("li",[v._v("QoS 1 消息发生重传后，在 MQTT 协议栈上层，也会收到这些重发的 PUBLISH 消息。")]),v._v(" "),t("li",[v._v("QoS 2 消息无论如何重传，最终在 MQTT 协议栈上层，都只会收到一条 PUBLISH 消息")])]),v._v(" "),t("h2",{attrs:{id:"基础配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基础配置"}},[v._v("#")]),v._v(" 基础配置")]),v._v(" "),t("p",[v._v("有两种场景会导致消息重发：")]),v._v(" "),t("ol",[t("li",[v._v("PUBLISH 报文发送给对端后，规定时间内未收到应答。则重发这个报文。")]),v._v(" "),t("li",[v._v("在保持会话的情况下，客户端重连后；EMQ X 会自动重发  "),t("em",[v._v("未应答的消息")]),v._v("，以确保 QoS 流程的正确。")])]),v._v(" "),t("p",[v._v("在 "),t("code",[v._v("etc/emqx.conf")]),v._v(" 中可配置：")]),v._v(" "),t("table",[t("thead",[t("tr",[t("th",[v._v("配置项")]),v._v(" "),t("th",[v._v("类型")]),v._v(" "),t("th",[v._v("可取值")]),v._v(" "),t("th",[v._v("默认值")]),v._v(" "),t("th",[v._v("说明")])])]),v._v(" "),t("tbody",[t("tr",[t("td",[v._v("retry_interval")]),v._v(" "),t("td",[v._v("duration")]),v._v(" "),t("td",[v._v("-")]),v._v(" "),t("td",[v._v("30s")]),v._v(" "),t("td",[v._v("等待一个超时间隔，如果没收到应答则重传消息")])])])]),v._v(" "),t("p",[v._v("一般来说，你只需要关心以上内容就足够了。")]),v._v(" "),t("p",[v._v("如需了解更多 EMQ X 在处理 MQTT 协议的重传的细节见以下内容。")]),v._v(" "),t("h2",{attrs:{id:"协议规范与设计"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#协议规范与设计"}},[v._v("#")]),v._v(" 协议规范与设计")]),v._v(" "),t("h3",{attrs:{id:"重传的对象"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#重传的对象"}},[v._v("#")]),v._v(" 重传的对象")]),v._v(" "),t("p",[v._v("首先，在了解 EMQ X 对于重传机制的设计前，我们需要先确保你已经了解协议中 QoS 1 和 QoS 2 的传输过程，否则请参见 "),t("a",{attrs:{href:"http://docs.oasis-open.org/mqtt/mqtt/v3.1.1/os/mqtt-v3.1.1-os.html#_Toc398718101",target:"_blank",rel:"noopener noreferrer"}},[v._v("MQTTv3.1.1 - QoS 1: At least once delivery"),t("OutboundLink")],1),v._v(" 和 "),t("a",{attrs:{href:"http://docs.oasis-open.org/mqtt/mqtt/v3.1.1/os/mqtt-v3.1.1-os.html#_Toc398718102",target:"_blank",rel:"noopener noreferrer"}},[v._v("MQTTv3.1.1 - QoS 2: Exactly once delivery"),t("OutboundLink")],1),v._v("。")]),v._v(" "),t("p",[v._v("此处，仅作一个简单的回顾，用来说明不同 QoS 下重传的对象有哪些。")]),v._v(" "),t("h4",{attrs:{id:"qos-1"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#qos-1"}},[v._v("#")]),v._v(" QoS 1")]),v._v(" "),t("p",[v._v("QoS 1 要求消息至少送达一次；所以消息在 MQTT 协议层中，可能会不断的重传，直到发送端收到了该消息的确认报文。")]),v._v(" "),t("p",[v._v("其流程示意图如下：")]),v._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[v._v("               PUBLISH\n#1 Sender  ---------------\x3e  Receiver       (*)\n               PUBACK\n#2 Sender  <---------------  Receiver\n")])])]),t("ul",[t("li",[v._v("涉及到 2 个报文；共 2 次发送动作，发送端和接收端各 1 次；这 2 个报文都持有相同的 PacketId。")]),v._v(" "),t("li",[v._v("行尾标记为 * 号的，表示发送方在等待确认报文超时后，可能会主动发起重传。")])]),v._v(" "),t("p",[v._v("可见 "),t("strong",[v._v("QoS 1 消息只需要对 PUBLISH 报文进行重发")])]),v._v(" "),t("h4",{attrs:{id:"qos-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#qos-2"}},[v._v("#")]),v._v(" QoS 2")]),v._v(" "),t("p",[v._v("QoS 2 要求消息只送达一次；所以在实现它时，需要更复杂的流程。其流程示意图如下：")]),v._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[v._v("               PUBLISH\n#1 Sender  ---------------\x3e  Receiver       (*)\n               PUBREC\n#2 Sender  <---------------  Receiver\n               PUBREL\n#3 Sender  ---------------\x3e  Receiver       (*)\n               PUBCOM\n#4 Sender  <---------------  Receiver\n")])])]),t("ul",[t("li",[v._v("涉及到 4 个报文；共 4 次发送动作，发送端和接收端各 2 次；这 4 个报文都持有相同的 PacketId。")]),v._v(" "),t("li",[v._v("行尾标记为 * 号的，表示发送方在等待确认报文超时后，可能会主动发起重传。")])]),v._v(" "),t("p",[v._v("可见 "),t("strong",[v._v("QoS 2 消息需要对 PUBLISH 和 PUBREL 报文进行重发")])]),v._v(" "),t("p",[v._v("综上：")]),v._v(" "),t("ul",[t("li",[t("p",[t("strong",[v._v("重传动作")]),v._v(" 都是由于 "),t("strong",[v._v("发送端")]),v._v(" 报文发送后，在 "),t("strong",[v._v("规定时间")]),v._v(" 内未收到其期待的返回而触发的。")])]),v._v(" "),t("li",[t("p",[t("strong",[v._v("重传对象")]),v._v(" 仅包含以下三种：")]),v._v(" "),t("ul",[t("li",[v._v("QoS 1 的 PUBLISH 报文")]),v._v(" "),t("li",[v._v("QoS 2 的 PUBLISH 报文")]),v._v(" "),t("li",[v._v("QoS 2 的 PUBREL 报文")])])])]),v._v(" "),t("p",[v._v("当 EMQ X 作为 PUBLISH 消息的接收端时，它不需要重发操作")]),v._v(" "),t("h3",{attrs:{id:"飞行窗口与最大接收值"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#飞行窗口与最大接收值"}},[v._v("#")]),v._v(" 飞行窗口与最大接收值")]),v._v(" "),t("p",[v._v("其概念的定义和解释参见 "),t("RouterLink",{attrs:{to:"/zh/backend/emqx/advanced/inflight-window-and-message-queue.html#"}},[v._v("飞行窗口与消息队列")])],1),v._v(" "),t("p",[v._v("引入这两个概念的作用是为了理解：")]),v._v(" "),t("ol",[t("li",[v._v("EMQ X 作为发送端时，再次重发的消息，必然是已存储在飞行窗口中的消息")]),v._v(" "),t("li",[v._v("EMQ X 作为接收端时，发送端重发的消息时：\n"),t("ul",[t("li",[v._v("如 QoS 1，EMQ X 则直接回复 PUBACK 进行应答；")]),v._v(" "),t("li",[v._v("如 QoS 2，EMQ X 则会释放，存储在 "),t("em",[v._v("最大接收消息")]),v._v(" 队列中的 PUBLISH 或者 PUBREL 报文。")])])])]),v._v(" "),t("h3",{attrs:{id:"消息顺序"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#消息顺序"}},[v._v("#")]),v._v(" 消息顺序")]),v._v(" "),t("p",[v._v("当然，以上的概念仅需要了解即可，你最需要关心的是，"),t("strong",[v._v("消息在被重复发送后，消息顺序出现的变化，尤其是 QoS 1 类的消息")]),v._v("。例如：")]),v._v(" "),t("p",[v._v("假设，当前飞行窗口设置为 2 时，EMQ X 计划向客户端的某主题投递 4 条 QoS 1 的消息。并假设客户端程序、或网络在中间出现过问题，那么整个发送流程会变成：")]),v._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[v._v("#1  [4,3,2,1 || ]   -----\x3e   []\n#2  [4,3 || 2, 1]   -----\x3e   [1, 2]\n#3  [4 || 3, 2]     -----\x3e   [1, 2, 3]\n#4  [4 || 3, 2]     -----\x3e   [1, 2, 3, 2, 3]\n#5  [ || 4]         -----\x3e   [1, 2, 3, 2, 3, 4]\n#6  [ || ]          -----\x3e   [1, 2, 3, 2, 3, 4]\n")])])]),t("p",[v._v("流程共 6 个步骤；左边表示 EMQ X 的 消息队列 和 飞行窗口，以 "),t("code",[v._v("||")]),v._v(" 分割；右侧表示客户端收到的消息顺序，其中每步表示：")]),v._v(" "),t("ol",[t("li",[v._v("Broker 将 4 条消息放入消息队列中。")]),v._v(" "),t("li",[v._v("Broker 依次发送 "),t("code",[v._v("1")]),v._v(" "),t("code",[v._v("2")]),v._v("，并将其放入 "),t("strong",[v._v("飞行窗口")]),v._v(" 中；客户端仅应答消息 "),t("code",[v._v("1")]),v._v("；且此时由于客户端发送流出现了问题，无法发送后续应答报文。")]),v._v(" "),t("li",[v._v("Broker 收到消息 "),t("code",[v._v("1")]),v._v(" 的应答；从飞行窗口移除消息 "),t("code",[v._v("1")]),v._v("；并将 "),t("code",[v._v("3")]),v._v(" 发送出去；继续等待 "),t("code",[v._v("2")]),v._v(" "),t("code",[v._v("3")]),v._v(" 的应答；")]),v._v(" "),t("li",[v._v("Broker 等待应答超时，重发了报文 "),t("code",[v._v("2")]),v._v(" "),t("code",[v._v("3")]),v._v("；客户端收到重发的报文 "),t("code",[v._v("2")]),v._v(" "),t("code",[v._v("3")]),v._v(" 并正常应答。")]),v._v(" "),t("li",[v._v("Broker 从飞行窗口移除了消息 "),t("code",[v._v("2")]),v._v(" "),t("code",[v._v("3")]),v._v("，并发送报文 "),t("code",[v._v("4")]),v._v("；客户端收到了报文 4 并回复应答。")]),v._v(" "),t("li",[v._v("至此，所有报文处理完成。客户端收到的报文顺序为 "),t("code",[v._v("[1, 2, 3, 2, 3, 4]")]),v._v("，并也依次上报给 MQTT 协议栈的上层。")])]),v._v(" "),t("p",[v._v("虽然，存在重复的报文消息。但这是完全符合协议的规范的，每个报文第一次出现的位置都是有序的，并且重复收到的报文 "),t("code",[v._v("2")]),v._v(" "),t("code",[v._v("3")]),v._v(" 的报文中，会携带一个标识位，表明其为重发报文。")]),v._v(" "),t("p",[v._v("MQTT 协议和 EMQ X 将这个主题认为是 "),t("code",[v._v("有序的主题 (Ordered Topic)")]),v._v(" 参见: "),t("a",{attrs:{href:"http://docs.oasis-open.org/mqtt/mqtt/v3.1.1/os/mqtt-v3.1.1-os.html#_Toc398718105",target:"_blank",rel:"noopener noreferrer"}},[v._v("MQTTv3.1.1 - Message ordering"),t("OutboundLink")],1),v._v("。")]),v._v(" "),t("p",[v._v("它确保 "),t("strong",[v._v("相同的主题和 QoS 下，消息是按顺序投递和应答的")]),v._v("。")]),v._v(" "),t("p",[v._v("此外，如果用户期望所有主题下的 QoS 1 与 QoS 2 消息都严格有序，那么需要设置飞行窗口的最大长度为 1，但代价是会降低该客户端的吞吐。")]),v._v(" "),t("h3",{attrs:{id:"相关配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#相关配置"}},[v._v("#")]),v._v(" 相关配置")]),v._v(" "),t("p",[v._v("此节列举了上述机制中，用到的所有配置。它们都包含在 "),t("code",[v._v("etc/emqx.conf")]),v._v(" 中：")]),v._v(" "),t("table",[t("thead",[t("tr",[t("th",[v._v("配置项")]),v._v(" "),t("th",[v._v("类型")]),v._v(" "),t("th",[v._v("可取值")]),v._v(" "),t("th",[v._v("默认值")]),v._v(" "),t("th",[v._v("说明")])])]),v._v(" "),t("tbody",[t("tr",[t("td",[v._v("mqueue_store_qos0")]),v._v(" "),t("td",[v._v("bool")]),v._v(" "),t("td",[t("code",[v._v("true")]),v._v(", "),t("code",[v._v("false")])]),v._v(" "),t("td",[v._v("true")]),v._v(" "),t("td",[v._v("是否将 QoS 0 消息存入消息队列中")])]),v._v(" "),t("tr",[t("td",[v._v("max_mqueue_len")]),v._v(" "),t("td",[v._v("integer")]),v._v(" "),t("td",[v._v(">= 0")]),v._v(" "),t("td",[v._v("1000")]),v._v(" "),t("td",[v._v("消息队列长度")])]),v._v(" "),t("tr",[t("td",[v._v("max_inflight")]),v._v(" "),t("td",[v._v("integer")]),v._v(" "),t("td",[v._v(">= 0")]),v._v(" "),t("td",[v._v("0")]),v._v(" "),t("td",[v._v("飞行窗口大小；默认 "),t("code",[v._v("0")]),v._v(" 即无限制")])]),v._v(" "),t("tr",[t("td",[v._v("max_awaiting_rel")]),v._v(" "),t("td",[v._v("integer")]),v._v(" "),t("td",[v._v(">= 0")]),v._v(" "),t("td",[v._v("0")]),v._v(" "),t("td",[v._v("最大接收；默认 "),t("code",[v._v("0")]),v._v(" 即无限制")])]),v._v(" "),t("tr",[t("td",[v._v("await_rel_timeout")]),v._v(" "),t("td",[v._v("durtaion")]),v._v(" "),t("td",[v._v(">  0")]),v._v(" "),t("td",[v._v("300s")]),v._v(" "),t("td",[t("code",[v._v("最大接收")]),v._v(" 中消息等待释放的最大超时时间；超过则直接丢弃")])])])])])}),[],!1,null,null,null);_.default=r.exports}}]);