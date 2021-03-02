module.exports = [
  {
    "title": '产品概览',
    "collapsable": true,
    "children": [
      ['./', 'EMQ X 消息服务器简介'],
      ['introduction/checklist', 'EMQ X 消息服务器功能列表']
    ],
    "category": "工业数据云平台"
  },
  {
    "title": '开始使用',
    "collapsable": true,
    "children": [
      ['getting-started/install-ee', '安装'],
      ['getting-started/start', '启动 EMQ X'],
      ['getting-started/command-line', '基本命令'],
      ['getting-started/cluster', '分布式集群'],
      ['getting-started/directory', '目录结构'],
      ['getting-started/config', '配置说明'],
      ['getting-started/log', '日志与追踪'],
      ['getting-started/dashboard-ee', 'Dashboard'],
    ],
    "category": "工业数据云平台"
  },
  {
    "title": '用户指南',
    "collapsable": true,
    "children": [
      ['advanced/auth', '认证鉴权'],
      ['advanced/acl', '发布订阅 ACL'],
      ['rule/rule-engine', '规则引擎'],
      ['backend/backend', '数据存储'],
      ['bridge/bridge', '消息桥接'],
      ['advanced/shared-subscriptions', '共享订阅'],
      ['advanced/blacklist', '$SYS 系统主题'],
      ['getting-started/dashboard-ee', '黑名单'],
      ['advanced/webhook', 'WebHook'],
      ['advanced/cluster', '分布集群'],
      ['advanced/hooks', '钩子'],
      ['advanced/metrics-and-stats', '指标监控'],
      ['advanced/rate-limit', '速率限制'],
      ['advanced/inflight-window-and-message-queue', '飞行窗口与消息队列'],
      ['advanced/retransmission', '消息重传'],
      ['advanced/alarms', '告警'],
      ['advanced/data-import-and-export', '数据导入导出'],
    ],
    "category": "工业数据云平台"
  },
  {
    "title": '模块管理',
    "collapsable": true,
    "children": [
      ['modules/modules', '模块介绍'],
      ['modules/internal_acl', '内置访问控制'],
      ['modules/mysql_authentication', 'MySQL 认证/访问控制'],
      ['modules/pgsql_authentication', 'PostgreSQL 认证/访问控制'],
      ['modules/redis_authentication', 'Redis 认证/访问控制'],
      ['modules/http_authentication', 'HTTP 认证/访问控制'],
      ['modules/mnesia_authentication', '内置数据库 认证/访问控制'],
      ['modules/mongo_authentication', 'MongoDB 认证/访问控制'],
      ['modules/psk_authentication', 'PKSFile 认证'],
      ['modules/ldap_authentication', 'LDAP 认证/访问控制'],
      ['modules/jwt_authentication', 'JWT 认证'],
      ['modules/lwm2m_protocol', 'LwM2M 网关'],
      ['modules/mqtt_sn_protocol', 'MQTT-SN 网关'],
      ['modules/tcp_protocol', 'TCP 网关'],
      ['modules/jt808_protocol', 'JT/T808 网关'],
      ['modules/coap_protocol', 'CoAP 网关'],
      ['modules/stomp_protocol', 'Stomp 网关'],
      ['modules/kafka_consumer', 'Kafka 消费组'],
      ['modules/pulsar_consumer', 'Pulsar 消费组'],
      ['modules/mqtt_subscriber', 'MQTT Subscriber'],
      ['modules/exproto', '多语言扩展协议接入'],
      ['modules/recon', 'Recon'],
      ['modules/prometheus', 'EMQ X Prometheus Agent'],
      ['modules/hot_confs', '热配置'],
      ['modules/topic_metrics', '主题指标统计'],
      ['modules/auth_sasl', 'MQTT 增强认证'],
      ['modules/presence', '上下线通知'],
      ['modules/subscription', 'MQTT 代理订阅'],
      ['modules/topic_rewrite', '主题重写'],
      ['modules/retainer', 'MQTT 保留消息'],
      ['modules/delayed_publish', 'MQTT 消息延迟发布']
    ],
    "category": "工业数据云平台"
  }
]
