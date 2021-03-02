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
    },
    {
        "title": '规则引擎',
        "collapsable": true,
        "children": [
            ['rule/rule-engine', '规则引擎'],
            ['rule/rule-create', '创建规则'],
            ['rule/rule-example', '检查 (调试)'],
            {
                "title": '数据存储',
                "collapsable": true,
                "children": [
                    ['rule/backend_mysql', '保存数据到 MySQL'],
                    ['rule/backend_pgsql', '保存数据到 PostgreSQL'],
                    ['rule/backend_mongodb', '保存数据到 MongoDB'],
                    ['rule/backend_redis', '保存数据到 Redis'],
                    ['rule/backend_cassandra', '保存数据到 Cassandra'],
                    ['rule/backend_dynamodb', '保存数据到 DynamoDB'],
                    ['rule/backend_clickhouse', '保存数据到 ClickHouse'],
                    ['rule/backend_opentsdb', '保存数据到 OpenTSDB'],
                    ['rule/backend_influxdb', '保存数据到 InfluxDB'],
                    ['rule/backend_timescaledb', '保存数据到 TimescaleDB'],
                    ['rule/backend_oracle', '保存数据到 Oracle DB'],
                    ['rule/backend_sqlserver', '保存数据到 SQLServer'],
                    ['rule/backend_dolphindb', '保存数据到 DolphinDB'],
                    ['rule/backend_tdengine', '保存数据到 TDengine']
                ]
            },
            {
                "title": '数据桥接',
                "collapsable": true,
                "children": [
                    ['rule/bridge_kafka', '桥接数据到 Kafka'],
                    ['rule/bridge_pulsar', '桥接数据到 Pulsar'],
                    ['rule/bridge_rabbitmq', '桥接数据到 RabbitMQ'],
                    ['rule/bridge_rocketmq', '桥接数据到 RocketMQ'],
                    ['rule/bridge_mqtt', '桥接数据到 MQTT Broker'],
                    ['rule/bridge_emqx', '桥接数据到 EMQ X']
                ],
                "category": "工业数据云平台"
            },
            {
                "title": '离线消息',
                "collapsable": true,
                "children": [
                    ['rule/offline_msg_to_redis', '离线消息保存到 Redis'],
                    ['rule/offline_msg_to_mysql', '离线消息保存到 MySQL'],
                    ['rule/offline_msg_to_pgsql', '离线消息保存到 PostgreSQL'],
                    ['rule/offline_msg_to_cassandra', '离线消息保存到 Cassandra'],
                    ['rule/offline_msg_to_mongodb', '离线消息保存到 MongoDB']
                ],
                "category": "工业数据云平台"
            },
            {
            "title": '获取订阅关系',
            "collapsable": true,
            "children": [
              ['rule/get_subs_from_redis', '从 Redis 中获取订阅关系'],
              ['rule/get_subs_from_mysql', '从 MySQL 中获取订阅关系'],
              ['rule/offline_msg_to_pgsql', '离线消息保存到 PostgreSQL'],
              ['rule/get_subs_from_pgsql', '从 PostgreSQL 中获取订阅关系'],
              ['rule/get_subs_from_cassandra', '从 Cassandra 中获取订阅关系'],
              ['rule/get_subs_from_mongodb', '从 MongoDB 中获取订阅关系']
            ]
          },
          {
            "title": '编解码',
            "collapsable": true,
            "path": "rule/schema-registry"
          }
        ],
        "category": "工业数据云平台"
    },
  {
    "title": '插件管理',
    "collapsable": true,
    "children": [
      ['advanced/plugins', '插件介绍'],
      {
        "title": '数据存储插件',
        "collapsable": true,
        "children": [
          ['backend/backend', '数据存储设计'],
          ['backend/backends', 'EMQ X 规则引擎数据存储']
        ]
      },
      {
        "title": '消息桥接插件',
        "collapsable": true,
        "children": [
          ['bridge/bridge', '消息桥接简介'],
          ['bridge/bridge-mqtt', 'MQTT 桥接'],
          ['bridge/bridge-rpc', 'RPC 桥接'],
          ['bridge/bridge-kafka', 'Kafka 桥接'],
          ['bridge/bridge-rabbitmq', 'RabbitMQ 桥接'],
          ['bridge/bridge-pulsar', 'Pulsar 桥接'],
          ['bridge/bridge-rocketmq', 'RocketMQ 桥接']
        ]
      },
    ],
    "category": "工业数据云平台"
  },
  {
    "title": '运维操作',
    "collapsable": true,
    "children": [
      ['tutorial/tune', '系统调优'],
      ['tutorial/deploy', '生产部署'],
      ['tutorial/prometheus', 'Prometheus 监控告警'],
      ['tutorial/benchmark', '性能测试']
    ],
    "category": "工业数据云平台"
  },
  {
    "title": 'HTTP API',
    "collapsable": true,
    "path": "advanced/http-api",
    "category": "工业数据云平台"
  },
  {
    "title": '参数配置',
    "collapsable": true,
    "path": "configuration/configuration",
    "category": "工业数据云平台"
  },
  {
    "title": '命令行接口',
    "collapsable": true,
    "children": [
      ['advanced/cli', '命令行']
    ],
    "category": "工业数据云平台"
  },
  {
    "title": '版本热升级',
    "collapsable": true,
    "path": "advanced/relup",
    "category": "工业数据云平台"
  },
  {
    "title": 'FAQ 常见问题解答',
    "collapsable": true,
    "children": [
      ['faq/faq', '入门概念'],
      ['faq/use-guide', '使用教程'],
      ['faq/deployment', '安装部署'],
      ['faq/error', '常见错误'],
      ['faq/enterprise', '商业服务'],
      ['faq/tags', 'FAQ 标签']
    ],
    "category": "工业数据云平台"
  },
  {
    "title": 'SDK & Tools',
    "collapsable": true,
    "children": [
      ['development/client', 'MQTT Client Library'],
      ['development/c', 'MQTT C Client Library'],
      ['development/java', 'MQTT Java Client Library'],
      ['development/go', 'MQTT Go Client Library'],
      ['development/erlang', 'MQTT Erlang Client Library'],
      ['development/javascript', 'MQTT JavaScript Client Library'],
      ['development/python', 'MQTT Python Client Library'],
      ['development/wechat-miniprogram', 'MQTT 微信小程序接入'],
      ['development/resource', '其他资源']
    ],
    "category": "工业数据云平台"
  },
  {
    "title": '协议介绍',
    "collapsable": true,
    "children": [
      ['development/protocol', 'MQTT 协议'],
      ['modules/lwm2m_protocol', 'LwM2M 网关'],
      ['modules/mqtt_sn_protocol', 'MQTT-SN 网关'],
      ['modules/tcp_protocol', 'TCP 网关'],
      ['modules/jt808_protocol', 'JT/T808 网关'],
      ['modules/coap_protocol', 'CoAP 网关'],
      ['modules/stomp_protocol', 'Stomp 网关']
    ],
    "category": "工业数据云平台"
  },
  {
    "title": '版本发布',
    "collapsable": true,
    "children": [
      ['changes/changes-ee', '变更日志'],
      ['changes/upgrade', '升级指南']
    ],
    "category": "工业数据云平台"
  },
  {
    "title": '相关资料',
    "collapsable": true,
    "children": [
      ['design/design', '架构设计'],
      ['awesome/awesome', '资源']
    ],
    "category": "工业数据云平台"
  },
]
