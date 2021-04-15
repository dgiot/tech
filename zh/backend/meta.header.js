module.exports = [
    {
        "title": '产品概览',
        "collapsable": true,
        "children": [
            ['./', '简介'],
            ['dgiot/ddd/', '架构设计'],
            ['dgiot/ddd/threemodes', '三种模式'],
            ['dgiot/tenant/', '多租户'],
            ['dgiot/plugin/', '插件机制'],
            ['dgiot/erlang/', '编程规范'],
            ['dgiot/syncparse/', 'ets同步']
        ],
        "category": "工业数据云平台"
    },
    {
        "title": 'EMQX',
        "collapsable": true,
        "children": [
            ['emqx/', 'EMQX 简介'],
            ['emqx/introduction/checklist', 'EMQX 功能列表'],
            {
                "title": '开始使用',
                "collapsable": true,
                "children": [
                    ['emqx/getting-started/install-ee', '安装'],
                    ['emqx/getting-started/start', '启动 EMQ X'],
                    ['emqx/getting-started/command-line', '基本命令'],
                    ['emqx/getting-started/cluster', '分布式集群'],
                    ['emqx/getting-started/directory', '目录结构'],
                    ['emqx/getting-started/config', '配置说明'],
                    ['emqx/getting-started/log', '日志与追踪'],
                    ['emqx/getting-started/dashboard-ee', 'Dashboard'],
                ],
                "category": "工业数据云平台"
            },
            {
                "title": '用户指南',
                "collapsable": true,
                "children": [
                    ['emqx/advanced/auth', '认证鉴权'],
                    ['emqx/advanced/acl', '发布订阅 ACL'],
                    ['emqx/rule/rule-engine', '规则引擎'],
                    ['emqx/backend/backend', '数据存储'],
                    ['emqx/bridge/bridge', '消息桥接'],
                    ['emqx/advanced/shared-subscriptions', '共享订阅'],
                    ['emqx/advanced/blacklist', '$SYS 系统主题'],
                    ['emqx/getting-started/dashboard-ee', '黑名单'],
                    ['emqx/advanced/webhook', 'WebHook'],
                    ['emqx/advanced/cluster', '分布集群'],
                    ['emqx/advanced/hooks', '钩子'],
                    ['emqx/advanced/metrics-and-stats', '指标监控'],
                    ['emqx/advanced/rate-limit', '速率限制'],
                    ['emqx/advanced/inflight-window-and-message-queue', '飞行窗口与消息队列'],
                    ['emqx/advanced/retransmission', '消息重传'],
                    ['emqx/advanced/alarms', '告警'],
                    ['emqx/advanced/data-import-and-export', '数据导入导出'],
                ],
                "category": "工业数据云平台"
            },
            {
                "title": '模块管理',
                "collapsable": true,
                "children": [
                    ['emqx/modules/modules', '模块介绍'],
                    ['emqx/modules/internal_acl', '内置访问控制'],
                    ['emqx/modules/mysql_authentication', 'MySQL 认证/访问控制'],
                    ['emqx/modules/pgsql_authentication', 'PostgreSQL 认证/访问控制'],
                    ['emqx/modules/redis_authentication', 'Redis 认证/访问控制'],
                    ['emqx/modules/http_authentication', 'HTTP 认证/访问控制'],
                    ['emqx/modules/mnesia_authentication', '内置数据库 认证/访问控制'],
                    ['emqx/modules/mongo_authentication', 'MongoDB 认证/访问控制'],
                    ['emqx/modules/psk_authentication', 'PKSFile 认证'],
                    ['emqx/modules/ldap_authentication', 'LDAP 认证/访问控制'],
                    ['emqx/modules/jwt_authentication', 'JWT 认证'],
                    ['emqx/modules/lwm2m_protocol', 'LwM2M 网关'],
                    ['emqx/modules/mqtt_sn_protocol', 'MQTT-SN 网关'],
                    ['emqx/modules/tcp_protocol', 'TCP 网关'],
                    ['emqx/modules/jt808_protocol', 'JT/T808 网关'],
                    ['emqx/modules/coap_protocol', 'CoAP 网关'],
                    ['emqx/modules/stomp_protocol', 'Stomp 网关'],
                    ['emqx/modules/kafka_consumer', 'Kafka 消费组'],
                    ['emqx/modules/pulsar_consumer', 'Pulsar 消费组'],
                    ['emqx/modules/mqtt_subscriber', 'MQTT Subscriber'],
                    ['emqx/modules/exproto', '多语言扩展协议接入'],
                    ['emqx/modules/recon', 'Recon'],
                    ['emqx/modules/prometheus', 'EMQ X Prometheus Agent'],
                    ['emqx/modules/hot_confs', '热配置'],
                    ['emqx/modules/topic_metrics', '主题指标统计'],
                    ['emqx/modules/auth_sasl', 'MQTT 增强认证'],
                    ['emqx/modules/presence', '上下线通知'],
                    ['emqx/modules/subscription', 'MQTT 代理订阅'],
                    ['emqx/modules/topic_rewrite', '主题重写'],
                    ['emqx/modules/retainer', 'MQTT 保留消息'],
                    ['emqx/modules/delayed_publish', 'MQTT 消息延迟发布']
                ],
                "category": "工业数据云平台"
            },
            {
                "title": '规则引擎',
                "collapsable": true,
                "children": [
                    ['emqx/rule/rule-engine', '规则引擎'],
                    ['emqx/rule/rule-create', '创建规则'],
                    ['emqx/rule/rule-example', '检查 (调试)'],
                    {
                        "title": '数据存储',
                        "collapsable": true,
                        "children": [
                            ['emqx/rule/backend_mysql', '保存数据到 MySQL'],
                            ['emqx/rule/backend_pgsql', '保存数据到 PostgreSQL'],
                            ['emqx/rule/backend_mongodb', '保存数据到 MongoDB'],
                            ['emqx/rule/backend_redis', '保存数据到 Redis'],
                            ['emqx/rule/backend_cassandra', '保存数据到 Cassandra'],
                            ['emqx/rule/backend_dynamodb', '保存数据到 DynamoDB'],
                            ['emqx/rule/backend_clickhouse', '保存数据到 ClickHouse'],
                            ['emqx/rule/backend_opentsdb', '保存数据到 OpenTSDB'],
                            ['emqx/rule/backend_influxdb', '保存数据到 InfluxDB'],
                            ['emqx/rule/backend_timescaledb', '保存数据到 TimescaleDB'],
                            ['emqx/rule/backend_oracle', '保存数据到 Oracle DB'],
                            ['emqx/rule/backend_sqlserver', '保存数据到 SQLServer'],
                            ['emqx/rule/backend_dolphindb', '保存数据到 DolphinDB'],
                            ['emqx/rule/backend_tdengine', '保存数据到 TDengine']
                        ],
                        "category": "工业数据云平台"
                    },
                    {
                        "title": '数据桥接',
                        "collapsable": true,
                        "children": [
                            ['emqx/rule/bridge_kafka', '桥接数据到 Kafka'],
                            ['emqx/rule/bridge_pulsar', '桥接数据到 Pulsar'],
                            ['emqx/rule/bridge_rabbitmq', '桥接数据到 RabbitMQ'],
                            ['emqx/rule/bridge_rocketmq', '桥接数据到 RocketMQ'],
                            ['emqx/rule/bridge_mqtt', '桥接数据到 MQTT Broker'],
                            ['emqx/rule/bridge_emqx', '桥接数据到 EMQ X']
                        ],
                        "category": "工业数据云平台"
                    },
                    {
                        "title": '离线消息',
                        "collapsable": true,
                        "children": [
                            ['emqx/rule/offline_msg_to_redis', '离线消息保存到 Redis'],
                            ['emqx/rule/offline_msg_to_mysql', '离线消息保存到 MySQL'],
                            ['emqx/rule/offline_msg_to_pgsql', '离线消息保存到 PostgreSQL'],
                            ['emqx/rule/offline_msg_to_cassandra', '离线消息保存到 Cassandra'],
                            ['emqx/rule/offline_msg_to_mongodb', '离线消息保存到 MongoDB']
                        ],
                        "category": "工业数据云平台"
                    },
                    {
                        "title": '获取订阅关系',
                        "collapsable": true,
                        "children": [
                            ['emqx/rule/get_subs_from_redis', '从 Redis 中获取订阅关系'],
                            ['emqx/rule/get_subs_from_mysql', '从 MySQL 中获取订阅关系'],
                            ['emqx/rule/offline_msg_to_pgsql', '离线消息保存到 PostgreSQL'],
                            ['emqx/rule/get_subs_from_pgsql', '从 PostgreSQL 中获取订阅关系'],
                            ['emqx/rule/get_subs_from_cassandra', '从 Cassandra 中获取订阅关系'],
                            ['emqx/rule/get_subs_from_mongodb', '从 MongoDB 中获取订阅关系']
                        ],
                        "category": "工业数据云平台"
                    },
                    {
                        "title": '编解码',
                        "collapsable": true,
                        "path": "emqx/rule/schema-registry",
                        "category": "工业数据云平台"
                    }
                ],
                "category": "工业数据云平台"
            },
            {
                "title": '插件管理',
                "collapsable": true,
                "children": [
                    ['emqx/advanced/plugins', '插件介绍'],
                    {
                        "title": '数据存储插件',
                        "collapsable": true,
                        "children": [
                            ['emqx/backend/backend', '数据存储设计'],
                            ['emqx/backend/backends', 'EMQ X 规则引擎数据存储']
                        ],
                        "category": "工业数据云平台"
                    },
                    {
                        "title": '消息桥接插件',
                        "collapsable": true,
                        "children": [
                            ['emqx/bridge/bridge', '消息桥接简介'],
                            ['emqx/bridge/bridge-mqtt', 'MQTT 桥接'],
                            ['emqx/bridge/bridge-rpc', 'RPC 桥接'],
                            ['emqx/bridge/bridge-kafka', 'Kafka 桥接'],
                            ['emqx/bridge/bridge-rabbitmq', 'RabbitMQ 桥接'],
                            ['emqx/bridge/bridge-pulsar', 'Pulsar 桥接'],
                            ['emqx/bridge/bridge-rocketmq', 'RocketMQ 桥接']
                        ],
                        "category": "工业数据云平台"
                    },
                ],
                "category": "工业数据云平台"
            },
            {
                "title": '运维操作',
                "collapsable": true,
                "children": [
                    ['emqx/tutorial/tune', '系统调优'],
                    ['emqx/tutorial/deploy', '生产部署'],
                    ['emqx/tutorial/prometheus', 'Prometheus 监控告警'],
                    ['emqx/tutorial/benchmark', '性能测试']
                ],
                "category": "工业数据云平台"
            },
            {
                "title": 'HTTP API',
                "collapsable": true,
                "path": "emqx/advanced/http-api",
                "category": "工业数据云平台"
            },
            {
                "title": '参数配置',
                "collapsable": true,
                "path": "emqx/configuration/configuration",
                "category": "工业数据云平台"
            },
            {
                "title": '命令行接口',
                "collapsable": true,
                "children": [
                    ['emqx/advanced/cli', '命令行']
                ],
                "category": "工业数据云平台"
            },
            {
                "title": '版本热升级',
                "collapsable": true,
                "path": "emqx/advanced/relup",
                "category": "工业数据云平台"
            },
            {
                "title": 'FAQ 常见问题解答',
                "collapsable": true,
                "children": [
                    ['emqx/faq/faq', '入门概念'],
                    ['emqx/faq/use-guide', '使用教程'],
                    ['emqx/faq/deployment', '安装部署'],
                    ['emqx/faq/error', '常见错误'],
                    ['emqx/faq/enterprise', '商业服务'],
                    ['emqx/faq/tags', 'FAQ 标签']
                ],
                "category": "工业数据云平台"
            },
            {
                "title": 'SDK & Tools',
                "collapsable": true,
                "children": [
                    ['emqx/development/client', 'MQTT Client Library'],
                    ['emqx/development/c', 'MQTT C Client Library'],
                    ['emqx/development/java', 'MQTT Java Client Library'],
                    ['emqx/development/go', 'MQTT Go Client Library'],
                    ['emqx/development/erlang', 'MQTT Erlang Client Library'],
                    ['emqx/development/javascript', 'MQTT JavaScript Client Library'],
                    ['emqx/development/python', 'MQTT Python Client Library'],
                    ['emqx/development/wechat-miniprogram', 'MQTT 微信小程序接入'],
                    ['emqx/development/resource', '其他资源']
                ],
                "category": "工业数据云平台"
            },
            {
                "title": '协议介绍',
                "collapsable": true,
                "children": [
                    ['emqx/development/protocol', 'MQTT 协议'],
                    ['emqx/modules/lwm2m_protocol', 'LwM2M 网关'],
                    ['emqx/modules/mqtt_sn_protocol', 'MQTT-SN 网关'],
                    ['emqx/modules/tcp_protocol', 'TCP 网关'],
                    ['emqx/modules/jt808_protocol', 'JT/T808 网关'],
                    ['emqx/modules/coap_protocol', 'CoAP 网关'],
                    ['emqx/modules/stomp_protocol', 'Stomp 网关']
                ],
                "category": "工业数据云平台"
            },
            {
                "title": '版本发布',
                "collapsable": true,
                "children": [
                    ['emqx/changes/changes-ee', '变更日志'],
                    ['emqx/changes/upgrade', '升级指南']
                ],
                "category": "工业数据云平台"
            },
            {
                "title": '相关资料',
                "collapsable": true,
                "children": [
                    ['emqx/design/design', '架构设计'],
                    ['emqx/awesome/awesome', '资源']
                ],
                "category": "工业数据云平台"
            }
        ],
        "category": "工业数据云平台"
    }
]
