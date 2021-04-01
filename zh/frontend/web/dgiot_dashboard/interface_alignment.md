## 如何连接后端接口

- 注意直接连接方案与代理连接方案互斥，建议使用方案 1

### 方案 1：直接连接方案（后端配置跨域）

修改位置``src/config/net.config.js``

```javascript
/**
 * @description 导出网络配置
 **/
module.exports = {
  // 默认的接口地址，开发环境和生产环境走/mock-server
  // 当然你也可以选择自己配置成需要的接口地址，如"https://api.xxx.com"
  // 问号后边代表开发环境，冒号后边代表生产环境
  // baseURL:
  //   process.env.NODE_ENV === 'development' ? '/mock-server' : '/mock-server',
  baseURL: 'iotapi',
  }
```

### 方案 2：代理连接方案（不推荐方案）
打开 [vue.config.js](https://github.com/dgiot/dgiot_dashboard/blob/master/vue.config.js#L62) 放开注释

```javascript
proxy: {
  [baseURL]: {
    target: `http://你的后端接口地址`,//所有配置不要动，只改这一个地方，改完重启项目
    ws: true,
    changeOrigin: true,
    pathRewrite: {
      ["^/" + baseURL]: "",
    },
  },
},
```

### 后端跨域的配置

#### nginx
```nginx
location / {
    if ($request_method = OPTIONS ) {
        add_header Content-Type *;
        add_header Access-Control-Allow-Origin *;
        add_header Access-Control-Allow-Methods 'POST, GET, OPTIONS, PUT, DELETE';
        add_header Access-Control-Allow-Credentials true;
        add_header Access-Control-Allow-Headers *;
        return 200;
    }
}
```

#### spring-boot
```spring-boot
// spring-boot跨域
// 在相应的controller上加入@CrossOrigin注解
```

#### php
```php
/**
 * 解决跨域访问，nginx需要在伪静态里面添加“nginx伪静态.txt”规则
 */
header('Content-Type: *');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');//设置允许访问的协议
header('Access-Control-Allow-Credentials: true'); // 设置是否允许发送 cookies
header('Access-Control-Allow-Headers: *');
```

### 必要接口

> 本项目需要三个必要的接口，联调前务必保证这登录接口、用户菜单接口、退出接口无问题，请注意application/x-www-form-urlencoded;charset=UTF-8与 application/json;charset=UTF-8请求的区别，具体可在src/config/settings.js 中配置， 注意：除登录接口外其他接口连接后端后携带 token，格式如下Authorization: r:6a3de7ef5f45131eed59696acf7b0ef7后端在登陆时返回给你的token字符串

#### 登录接口 [login](http://prod.iotn2n.com/swagger/#/License/post_login)

```curl
curl -X POST "http://prod.iotn2n.com/iotapi/login" -H "accept: application/json" -H "Content-Type: text/plain" -d "{ \"password\": \"dgiot_admin\", \"username\": \"dgiot_admin\"}"
```
返回参数

```json
{
  "ACL": {
    "Klht7ERlYn": {
      "read": true,
      "write": true
    }
  },
  "createdAt": "2021-03-30T03:45:59.228Z",
  "department": "CUgndqoYDy",
  "email": "dgiot_admin@iotn2n.com",
  "emailVerified": true,
  "nick": "管理员",
  "objectId": "Klht7ERlYn",
  "phone": "",
  "roles": [
    {
      "alias": "系统管理员",
      "name": "admin",
      "org_type": "SW",
      "tag": {
        "appconfig": {
          "expires": 180000,
          "file": "http://127.0.0.1:1250/shapes/upload",
          "graphql": "http://127.0.0.1:5080/iotapi/graphql",
          "home": "D:/shuwa/shuwa_data_center/datacenter/file/files",
          "rest": "http://127.0.0.1:5080/iotapi",
          "secret": "TTY4NDMyMTExNjAyNTU1ODI4MTc5",
          "topo": "http://127.0.0.1:1350/"
        }
      }
    }
  ],
  "sessionToken": "r:0a566cc9011ccbe9dff2830ec51992d9",
  "updatedAt": "2021-03-30T09:08:29.644Z",
  "username": "dgiot_admin"
}
```

#### 菜单接口 [Navigation](http://prod.iotn2n.com/swagger/#/Menu/get_classes_navigation)
```curl
curl -X GET "http://prod.iotn2n.com/iotapi/classes/Navigation?limit=100" -H "accept: application/json" -H "authorization: Basic ZGdpb3RfYWRtaW46ZGdpb3RfYWRtaW4="
```
返回参数
```json
{
  "results": [
    {
      "ACL": {
        "*": {
          "read": true,
          "write": true
        },
        "role:admin": {
          "read": true,
          "write": true
        }
      },
      "children": [
        {
          "ACL": {
            "*": {
              "read": true,
              "write": true
            },
            "role:admin": {
              "read": true,
              "write": true
            }
          },
          "createdAt": "2021-03-25T03:00:44.981Z",
          "icon": "home-3-fill",
          "meta": {
            "alwaysShow": false,
            "badge": "",
            "component": "@/views/equipment_management/platform_overview",
            "hidden": false,
            "icon": "home-3-fill",
            "isCustomSvg": false,
            "noClosable": true,
            "noKeepAlive": true,
            "redirect": "",
            "tabHidden": false,
            "title": "总控台"
          },
          "name": "Index",
          "navShow": [
            {
              "alias": "系统管理员",
              "roleId": "CUgndqoYDy",
              "roleName": "admin"
            }
          ],
          "objectId": "ad779d85c6",
          "orderBy": 11,
          "parent": "d0d7c1052d",
          "updatedAt": "2021-03-29T02:18:07.424Z",
          "url": "/index"
        }
      ],
      "createdAt": "2021-03-25T03:00:01.532Z",
      "icon": "home-2-line",
      "meta": {
        "alwaysShow": false,
        "badge": "",
        "component": "Layout",
        "hidden": false,
        "icon": "home-2-line",
        "isCustomSvg": false,
        "noClosable": true,
        "noKeepAlive": true,
        "redirect": "/index",
        "tabHidden": false,
        "title": "总控台"
      },
      "name": "Root",
      "navShow": [
        {
          "alias": "系统管理员",
          "roleId": "CUgndqoYDy",
          "roleName": "admin"
        }
      ],
      "objectId": "d0d7c1052d",
      "orderBy": 1,
      "parent": "0",
      "updatedAt": "2021-03-29T02:17:22.490Z",
      "url": "/"
    },
    {
      "ACL": {
        "*": {
          "read": true,
          "write": true
        },
        "role:admin": {
          "read": true,
          "write": true
        }
      },
      "children": [
        {
          "ACL": {
            "*": {
              "read": true,
              "write": true
            }
          },
          "createdAt": "2021-02-07T09:35:01.727Z",
          "icon": "connect",
          "meta": {
            "component": "@/views/equipment_management/home_index",
            "icon": "device-fill",
            "title": "设备管理"
          },
          "name": "Device",
          "navShow": [
            {
              "alias": "系统管理员",
              "roleId": "CUgndqoYDy",
              "roleName": "admin"
            }
          ],
          "objectId": "0e2cdbff7a",
          "orderBy": 20,
          "parent": "4fc9074f0a",
          "updatedAt": "2021-03-25T06:18:25.715Z",
          "url": "/dashboard/devicelist"
        },
        {
          "ACL": {
            "*": {
              "read": true,
              "write": true
            }
          },
          "createdAt": "2021-02-07T09:35:01.714Z",
          "icon": "connect",
          "meta": {
            "component": "@/views/engine/home_resourcechannel",
            "icon": "compasses-2-fill",
            "title": "通道管理"
          },
          "name": "Resourcechannel",
          "navShow": [
            {
              "alias": "系统管理员",
              "roleId": "CUgndqoYDy",
              "roleName": "admin"
            }
          ],
          "objectId": "db80195bb5",
          "orderBy": 21,
          "parent": "4fc9074f0a",
          "updatedAt": "2021-03-25T06:17:59.671Z",
          "url": "/dashboard/resourcechannel"
        },
        {
          "ACL": {
            "*": {
              "read": true,
              "write": true
            }
          },
          "createdAt": "2021-02-07T09:35:01.702Z",
          "icon": "connect",
          "meta": {
            "component": "@/views/equipment_management/home_group",
            "icon": "newspaper-line",
            "title": "分组管理"
          },
          "name": "DeviceGroup",
          "navShow": [
            {
              "alias": "系统管理员",
              "roleId": "CUgndqoYDy",
              "roleName": "admin"
            }
          ],
          "objectId": "59c9f1ef17",
          "orderBy": 22,
          "parent": "4fc9074f0a",
          "updatedAt": "2021-03-25T06:18:08.449Z",
          "url": "/dashboard/devproduct"
        },
        {
          "ACL": {
            "*": {
              "read": true,
              "write": true
            }
          },
          "createdAt": "2021-02-07T09:35:01.741Z",
          "icon": "connect",
          "meta": {
            "component": "@/views/equipment_management/home_group2",
            "icon": "product-hunt-fill",
            "title": "产品管理"
          },
          "name": "UserProduct",
          "navShow": [
            {
              "alias": "系统管理员",
              "roleId": "CUgndqoYDy",
              "roleName": "admin"
            }
          ],
          "objectId": "42d013913c",
          "orderBy": 23,
          "parent": "4fc9074f0a",
          "updatedAt": "2021-03-25T06:18:16.534Z",
          "url": "/dashboard/productlist"
        },
        {
          "ACL": {
            "*": {
              "read": true,
              "write": true
            }
          },
          "createdAt": "2021-02-07T09:35:01.757Z",
          "icon": "connect",
          "meta": {
            "component": "@/views/engine/rulesengine",
            "icon": "ruler-line",
            "title": "规则管理"
          },
          "name": "RuleEngine",
          "navShow": [
            {
              "alias": "系统管理员",
              "roleId": "CUgndqoYDy",
              "roleName": "admin"
            }
          ],
          "objectId": "03b7f440c5",
          "orderBy": 24,
          "parent": "4fc9074f0a",
          "updatedAt": "2021-03-25T06:19:04.532Z",
          "url": "/dashboard/engine"
        },
        {
          "ACL": {
            "*": {
              "read": true,
              "write": true
            },
            "role:admin": {
              "read": true,
              "write": true
            }
          },
          "createdAt": "2021-03-03T04:25:29.684Z",
          "icon": "platform",
          "meta": {
            "component": "@/views/engine/dict",
            "icon": "building-4-fill",
            "title": "字典管理"
          },
          "name": "Dictionary",
          "navShow": [
            {
              "alias": "系统管理员",
              "roleId": "CUgndqoYDy",
              "roleName": "admin"
            }
          ],
          "objectId": "bf3ec8c859",
          "orderBy": 29,
          "parent": "4fc9074f0a",
          "updatedAt": "2021-03-25T06:19:36.854Z",
          "url": "/dashboard/dict"
        },
        {
          "ACL": {
            "*": {
              "read": true,
              "write": true
            },
            "role:admin": {
              "read": true,
              "write": true
            }
          },
          "createdAt": "2021-03-31T10:21:57.175Z",
          "icon": "edit-box-fill",
          "meta": {
            "alwaysShow": false,
            "badge": "",
            "component": "@/views/equipment_management/editdevices",
            "hidden": true,
            "icon": "edit-box-fill",
            "isCustomSvg": false,
            "noClosable": true,
            "noKeepAlive": false,
            "redirect": "",
            "tabHidden": false,
            "title": "设备详情"
          },
          "name": "Editdevices",
          "navShow": [
            {
              "alias": "系统管理员",
              "roleId": "CUgndqoYDy",
              "roleName": "admin"
            }
          ],
          "objectId": "3574fbe806",
          "orderBy": 31,
          "parent": "4fc9074f0a",
          "updatedAt": "2021-03-31T10:21:57.175Z",
          "url": "/roles/editdevices"
        },
        {
          "ACL": {
            "*": {
              "read": true,
              "write": true
            },
            "role:admin": {
              "read": true,
              "write": true
            }
          },
          "createdAt": "2021-03-31T10:23:18.849Z",
          "icon": "code-box-fill",
          "meta": {
            "alwaysShow": false,
            "badge": "",
            "component": "@/views/equipment_management/proddetail",
            "hidden": true,
            "icon": "code-box-fill",
            "isCustomSvg": false,
            "noClosable": true,
            "noKeepAlive": false,
            "redirect": "",
            "tabHidden": false,
            "title": "产品详情"
          },
          "name": "Detailproduct",
          "navShow": [
            {
              "alias": "系统管理员",
              "roleId": "CUgndqoYDy",
              "roleName": "admin"
            }
          ],
          "objectId": "e321f2b92a",
          "orderBy": 32,
          "parent": "4fc9074f0a",
          "updatedAt": "2021-03-31T10:23:18.849Z",
          "url": "/roles/detailproduct"
        },
        {
          "ACL": {
            "*": {
              "read": true,
              "write": true
            },
            "role:admin": {
              "read": true,
              "write": true
            }
          },
          "createdAt": "2021-03-31T10:24:26.016Z",
          "icon": "bar-chart-horizontal-fill",
          "meta": {
            "alwaysShow": false,
            "badge": "",
            "component": "@/views/engine/createResourcechannel",
            "hidden": true,
            "icon": "bar-chart-horizontal-fill",
            "isCustomSvg": false,
            "noClosable": true,
            "noKeepAlive": false,
            "redirect": "",
            "tabHidden": false,
            "title": "创建通道"
          },
          "name": "CreateResourcechannel",
          "navShow": [
            {
              "alias": "系统管理员",
              "roleId": "CUgndqoYDy",
              "roleName": "admin"
            }
          ],
          "objectId": "bf67fc7e79",
          "orderBy": 33,
          "parent": "4fc9074f0a",
          "updatedAt": "2021-03-31T10:24:26.016Z",
          "url": "/CreateResourcechannel"
        },
        {
          "ACL": {
            "*": {
              "read": true,
              "write": true
            },
            "role:admin": {
              "read": true,
              "write": true
            }
          },
          "createdAt": "2021-03-31T10:26:11.139Z",
          "icon": "device-line",
          "meta": {
            "alwaysShow": false,
            "badge": "",
            "component": "@/views/equipment_management/index",
            "hidden": true,
            "icon": "device-line",
            "isCustomSvg": false,
            "noClosable": true,
            "noKeepAlive": false,
            "redirect": "",
            "tabHidden": false,
            "title": "设备管理"
          },
          "name": "Thing",
          "navShow": [
            {
              "alias": "系统管理员",
              "roleId": "CUgndqoYDy",
              "roleName": "admin"
            }
          ],
          "objectId": "caab9b9a30",
          "orderBy": 34,
          "parent": "4fc9074f0a",
          "updatedAt": "2021-03-31T10:26:11.139Z",
          "url": "/roles/thing"
        }
      ],
      "createdAt": "2021-03-16T11:04:21.073Z",
      "icon": "product-hunt-fill",
      "meta": {
        "alwaysShow": true,
        "badge": "",
        "component": "Layout",
        "hidden": false,
        "icon": "product-hunt-fill",
        "isCustomSvg": false,
        "noClosable": true,
        "noKeepAlive": false,
        "redirect": "/dashboard/productlist",
        "tabHidden": false,
        "title": "设备云"
      },
      "name": "Platform",
      "navShow": [
        {
          "alias": "系统管理员",
          "roleId": "CUgndqoYDy",
          "roleName": "admin"
        }
      ],
      "objectId": "4fc9074f0a",
      "orderBy": 2,
      "parent": "0",
      "updatedAt": "2021-03-23T11:50:33.820Z",
      "url": "/dashboard"
    },
    {
      "ACL": {
        "*": {
          "read": true,
          "write": true
        }
      },
      "children": [
        {
          "ACL": {
            "*": {
              "read": true,
              "write": true
            }
          },
          "createdAt": "2021-02-07T09:35:01.781Z",
          "icon": "usermanage",
          "meta": {
            "component": "@/views/roles/structure",
            "icon": "shopping-cart-line",
            "title": "用户管理"
          },
          "name": "Structure",
          "navShow": [
            {
              "alias": "系统管理员",
              "roleId": "CUgndqoYDy",
              "roleName": "admin"
            }
          ],
          "objectId": "a1319a4298",
          "orderBy": 31,
          "parent": "9a5761b537",
          "updatedAt": "2021-03-29T02:23:17.263Z",
          "url": "/structures"
        },
        {
          "ACL": {
            "*": {
              "read": true,
              "write": true
            }
          },
          "createdAt": "2021-02-07T09:35:01.792Z",
          "icon": "adminmanage",
          "meta": {
            "component": "@/views/roles/rolelist/roles",
            "icon": "admin-line",
            "title": "角色管理"
          },
          "name": "Role_management",
          "navShow": [
            {
              "alias": "系统管理员",
              "roleId": "CUgndqoYDy",
              "roleName": "admin"
            }
          ],
          "objectId": "b9ab745947",
          "orderBy": 32,
          "parent": "9a5761b537",
          "updatedAt": "2021-03-25T06:21:11.073Z",
          "url": "/roles/roles"
        },
        {
          "ACL": {
            "*": {
              "read": true,
              "write": true
            }
          },
          "createdAt": "2021-02-07T09:35:01.802Z",
          "icon": "rolescontrol",
          "meta": {
            "component": "@/views/roles/rolelist/rolescontrol",
            "icon": "user-3-line",
            "title": "接口管理"
          },
          "name": "OpenApi",
          "navShow": [
            {
              "alias": "系统管理员",
              "roleId": "CUgndqoYDy",
              "roleName": "admin"
            }
          ],
          "objectId": "64bee0cf95",
          "orderBy": 33,
          "parent": "9a5761b537",
          "updatedAt": "2021-03-25T06:21:31.461Z",
          "url": "/roles/rolescontrol"
        },
        {
          "ACL": {
            "*": {
              "read": true,
              "write": true
            }
          },
          "createdAt": "2021-02-07T09:35:01.814Z",
          "icon": "menu",
          "meta": {
            "component": "@/views/roles/menu",
            "icon": "menu-2-fill",
            "title": "菜单管理"
          },
          "name": "Menu_management",
          "navShow": [
            {
              "alias": "系统管理员",
              "roleId": "CUgndqoYDy",
              "roleName": "admin"
            }
          ],
          "objectId": "082e4e0eef",
          "orderBy": 34,
          "parent": "9a5761b537",
          "updatedAt": "2021-03-29T02:21:25.239Z",
          "url": "/roles/menu"
        },
        {
          "ACL": {
            "*": {
              "read": true,
              "write": true
            }
          },
          "createdAt": "2021-02-07T09:35:01.835Z",
          "icon": "department",
          "meta": {
            "component": "@/views/roles/department/department",
            "icon": "group-line",
            "title": "岗位管理"
          },
          "name": "Department",
          "navShow": [
            {
              "alias": "系统管理员",
              "roleId": "CUgndqoYDy",
              "roleName": "admin"
            }
          ],
          "objectId": "01ae3c6a8c",
          "orderBy": 35,
          "parent": "9a5761b537",
          "updatedAt": "2021-03-25T06:22:05.735Z",
          "url": "/department"
        },
        {
          "ACL": {
            "*": {
              "read": true,
              "write": true
            }
          },
          "createdAt": "2021-02-07T09:35:01.847Z",
          "icon": "application",
          "meta": {
            "component": "@/views/equipment_management/appOperate/application",
            "icon": "key-2-fill",
            "title": "应用管理"
          },
          "name": "Application",
          "navShow": [
            {
              "alias": "系统管理员",
              "roleId": "CUgndqoYDy",
              "roleName": "admin"
            }
          ],
          "objectId": "06fabe0ec2",
          "orderBy": 36,
          "parent": "9a5761b537",
          "updatedAt": "2021-03-25T06:22:23.313Z",
          "url": "/roles/applicationManagement"
        },
        {
          "ACL": {
            "*": {
              "read": true,
              "write": true
            },
            "role:admin": {
              "read": true,
              "write": true
            }
          },
          "createdAt": "2021-03-17T09:11:21.102Z",
          "icon": "ancient-pavilion-fill",
          "meta": {
            "alwaysShow": false,
            "badge": "",
            "component": "@/views/equipment_management/onlinetest",
            "hidden": true,
            "icon": "ancient-pavilion-fill",
            "isCustomSvg": false,
            "noClosable": true,
            "noKeepAlive": false,
            "redirect": "",
            "tabHidden": true,
            "title": "在线调试"
          },
          "name": "Onlinetest",
          "navShow": [
            {
              "alias": "系统管理员",
              "roleId": "CUgndqoYDy",
              "roleName": "admin"
            }
          ],
          "objectId": "b1435f0a49",
          "orderBy": 39,
          "parent": "9a5761b537",
          "updatedAt": "2021-03-26T02:09:15.915Z",
          "url": "/roles/onlinetest"
        },
        {
          "ACL": {
            "*": {
              "read": true,
              "write": true
            },
            "role:admin": {
              "read": true,
              "write": true
            }
          },
          "createdAt": "2021-03-17T09:06:46.838Z",
          "icon": "sound-module-line",
          "meta": {
            "alwaysShow": false,
            "badge": "",
            "component": "@/views/systemmanage/modules",
            "hidden": true,
            "icon": "sound-module-line",
            "isCustomSvg": false,
            "noClosable": true,
            "noKeepAlive": false,
            "redirect": "",
            "tabHidden": true,
            "title": "模板管理"
          },
          "name": "Modules",
          "navShow": [
            {
              "alias": "系统管理员",
              "roleId": "CUgndqoYDy",
              "roleName": "admin"
            }
          ],
          "objectId": "68de776461",
          "orderBy": 39,
          "parent": "9a5761b537",
          "updatedAt": "2021-03-25T06:24:22.431Z",
          "url": "/modules"
        },
        {
          "ACL": {
            "*": {
              "read": true,
              "write": true
            },
            "role:admin": {
              "read": true,
              "write": true
            }
          },
          "createdAt": "2021-03-17T09:07:50.330Z",
          "icon": "chat-private-line",
          "meta": {
            "alwaysShow": false,
            "badge": "",
            "component": "@/views/equipment_management/devproduct",
            "hidden": true,
            "icon": "chat-private-line",
            "isCustomSvg": false,
            "noClosable": true,
            "noKeepAlive": false,
            "redirect": "",
            "tabHidden": true,
            "title": "产品管理"
          },
          "name": "Product",
          "navShow": [
            {
              "alias": "系统管理员",
              "roleId": "CUgndqoYDy",
              "roleName": "admin"
            }
          ],
          "objectId": "35ae983eaf",
          "orderBy": 39,
          "parent": "9a5761b537",
          "updatedAt": "2021-03-25T06:24:47.879Z",
          "url": "/roles/product"
        },
        {
          "ACL": {
            "*": {
              "read": true,
              "write": true
            },
            "role:admin": {
              "read": true,
              "write": true
            }
          },
          "createdAt": "2021-03-17T09:06:11.206Z",
          "icon": "bar-chart-grouped-line",
          "meta": {
            "alwaysShow": false,
            "badge": "",
            "component": "@/views/equipment_management/group",
            "hidden": true,
            "icon": "bar-chart-grouped-line",
            "isCustomSvg": false,
            "noClosable": true,
            "noKeepAlive": false,
            "redirect": "",
            "tabHidden": true,
            "title": "设备管理"
          },
          "name": "Group",
          "navShow": [
            {
              "alias": "系统管理员",
              "roleId": "CUgndqoYDy",
              "roleName": "admin"
            }
          ],
          "objectId": "e4ec193eea",
          "orderBy": 39,
          "parent": "9a5761b537",
          "updatedAt": "2021-03-25T06:24:55.736Z",
          "url": "/roles/group"
        },
        {
          "ACL": {
            "*": {
              "read": true,
              "write": true
            },
            "role:admin": {
              "read": true,
              "write": true
            }
          },
          "createdAt": "2021-03-22T05:43:11.481Z",
          "icon": "apps-line",
          "meta": {
            "alwaysShow": false,
            "badge": "",
            "component": "@/views/equipment_management/appOperate/addApp",
            "hidden": true,
            "icon": "apps-line",
            "isCustomSvg": false,
            "noClosable": false,
            "noKeepAlive": false,
            "redirect": "",
            "tabHidden": true,
            "title": "新增应用"
          },
          "name": "AddApp",
          "navShow": [
            {
              "alias": "系统管理员",
              "roleId": "CUgndqoYDy",
              "roleName": "admin"
            }
          ],
          "objectId": "8f2264d93c",
          "orderBy": 39,
          "parent": "9a5761b537",
          "updatedAt": "2021-03-25T06:24:39.107Z",
          "url": "/applicationManagement/addApp"
        }
      ],
      "createdAt": "2021-02-07T09:35:01.770Z",
      "icon": "connect",
      "meta": {
        "component": "Layout",
        "icon": "admin-fill",
        "redirect": "/structures",
        "title": "多租户"
      },
      "name": "User",
      "navShow": [
        {
          "alias": "系统管理员",
          "roleId": "CUgndqoYDy",
          "roleName": "admin"
        }
      ],
      "objectId": "9a5761b537",
      "orderBy": 3,
      "parent": "0",
      "updatedAt": "2021-03-29T02:20:13.448Z",
      "url": "/roles"
    },
    {
      "ACL": {
        "*": {
          "read": true,
          "write": true
        }
      },
      "children": [
        {
          "ACL": {
            "*": {
              "read": true,
              "write": true
            }
          },
          "createdAt": "2021-02-07T09:35:01.943Z",
          "icon": "platform",
          "meta": {
            "component": "@/views/systemmanage/expandprogram",
            "icon": "mini-program-fill",
            "title": "扩展编程"
          },
          "name": "ExpandProgram",
          "navShow": [
            {
              "alias": "系统管理员",
              "roleId": "CUgndqoYDy",
              "roleName": "admin"
            }
          ],
          "objectId": "e1385c3707",
          "orderBy": 41,
          "parent": "ac296fe691",
          "updatedAt": "2021-03-25T06:26:07.759Z",
          "url": "/dashboard/expandprogram"
        },
        {
          "ACL": {
            "*": {
              "read": true,
              "write": true
            }
          },
          "createdAt": "2021-02-07T09:35:01.917Z",
          "icon": "appmanage",
          "meta": {
            "component": "@/views/equipment_management/thingsParse",
            "icon": "code-box-line",
            "title": "解码管理"
          },
          "name": "ThingsParseCode",
          "navShow": [
            {
              "alias": "系统管理员",
              "roleId": "CUgndqoYDy",
              "roleName": "admin"
            }
          ],
          "objectId": "713e97a014",
          "orderBy": 42,
          "parent": "ac296fe691",
          "updatedAt": "2021-03-25T06:26:40.479Z",
          "url": "/roles/thingsParse"
        }
      ],
      "createdAt": "2021-02-07T09:35:01.858Z",
      "icon": "engine",
      "meta": {
        "component": "Layout",
        "icon": "team-fill",
        "redirect": "/roles/projectManagement",
        "title": "云函数"
      },
      "name": "Computer",
      "navShow": [
        {
          "alias": "系统管理员",
          "roleId": "CUgndqoYDy",
          "roleName": "admin"
        }
      ],
      "objectId": "ac296fe691",
      "orderBy": 4,
      "parent": "0",
      "updatedAt": "2021-03-23T11:51:10.787Z",
      "url": "/base"
    },
    {
      "ACL": {
        "*": {
          "read": true,
          "write": true
        },
        "role:admin": {
          "read": true,
          "write": true
        }
      },
      "children": [
        {
          "ACL": {
            "*": {
              "read": true,
              "write": true
            },
            "role:admin": {
              "read": true,
              "write": true
            }
          },
          "createdAt": "2021-03-22T05:50:15.239Z",
          "icon": "home-3-fill",
          "meta": {
            "alwaysShow": false,
            "badge": "",
            "component": "@/views/equipment_management/appOperate/applicationManagement",
            "hidden": false,
            "icon": "home-3-fill",
            "isCustomSvg": false,
            "noClosable": true,
            "noKeepAlive": false,
            "redirect": "",
            "tabHidden": true,
            "title": "工程管理"
          },
          "name": "ProjectManagement",
          "navShow": [
            {
              "alias": "系统管理员",
              "roleId": "CUgndqoYDy",
              "roleName": "admin"
            }
          ],
          "objectId": "4189572acb",
          "orderBy": 6,
          "parent": "2f8ced4b6f",
          "updatedAt": "2021-03-22T05:50:15.239Z",
          "url": "/roles/projectManagement"
        },
        {
          "ACL": {
            "*": {
              "read": true,
              "write": true
            },
            "role:admin": {
              "read": true,
              "write": true
            }
          },
          "createdAt": "2021-03-22T05:44:23.376Z",
          "icon": "group-2-fill",
          "meta": {
            "alwaysShow": false,
            "badge": "",
            "component": "@/views/installation/log",
            "hidden": false,
            "icon": "group-2-fill",
            "isCustomSvg": false,
            "noClosable": true,
            "noKeepAlive": false,
            "redirect": "",
            "tabHidden": true,
            "title": "集群管理"
          },
          "name": "Cluster1",
          "navShow": [
            {
              "alias": "系统管理员",
              "roleId": "CUgndqoYDy",
              "roleName": "admin"
            }
          ],
          "objectId": "56e72b238d",
          "orderBy": 6,
          "parent": "2f8ced4b6f",
          "updatedAt": "2021-03-22T05:44:23.376Z",
          "url": "/roles/nodes"
        },
        {
          "ACL": {
            "*": {
              "read": true,
              "write": true
            },
            "role:admin": {
              "read": true,
              "write": true
            }
          },
          "createdAt": "2021-03-22T05:50:46.705Z",
          "icon": "home-3-fill",
          "meta": {
            "alwaysShow": false,
            "badge": "",
            "component": "@/views/equipment_management/server_control",
            "hidden": false,
            "icon": "home-3-fill",
            "isCustomSvg": false,
            "noClosable": true,
            "noKeepAlive": false,
            "redirect": "",
            "tabHidden": true,
            "title": "部署管理"
          },
          "name": "Deploy",
          "navShow": [
            {
              "alias": "系统管理员",
              "roleId": "CUgndqoYDy",
              "roleName": "admin"
            }
          ],
          "objectId": "2c51ab5db7",
          "orderBy": 6,
          "parent": "2f8ced4b6f",
          "updatedAt": "2021-03-22T05:50:46.705Z",
          "url": "/roles/server_control"
        },
        {
          "ACL": {
            "*": {
              "read": true,
              "write": true
            },
            "role:admin": {
              "read": true,
              "write": true
            }
          },
          "createdAt": "2021-03-22T02:19:00.026Z",
          "icon": "home-3-fill",
          "meta": {
            "alwaysShow": false,
            "badge": "",
            "component": "@/views/systemmanage/appmarage",
            "hidden": false,
            "icon": "home-3-fill",
            "isCustomSvg": false,
            "noClosable": true,
            "noKeepAlive": false,
            "redirect": "",
            "tabHidden": true,
            "title": "插件管理"
          },
          "name": "Plugins",
          "navShow": [
            {
              "alias": "系统管理员",
              "roleId": "CUgndqoYDy",
              "roleName": "admin"
            }
          ],
          "objectId": "66de31bb6a",
          "orderBy": 102,
          "parent": "2f8ced4b6f",
          "updatedAt": "2021-03-22T02:19:00.026Z",
          "url": "/roles/appmanage"
        },
        {
          "ACL": {
            "*": {
              "read": true,
              "write": true
            },
            "role:admin": {
              "read": true,
              "write": true
            }
          },
          "createdAt": "2021-03-22T02:17:19.097Z",
          "icon": "video-chat-line",
          "meta": {
            "alwaysShow": false,
            "badge": "",
            "component": "@/views/dashboard/index",
            "hidden": false,
            "icon": "video-chat-line",
            "isCustomSvg": false,
            "noClosable": true,
            "noKeepAlive": false,
            "redirect": "",
            "tabHidden": true,
            "title": "性能监控"
          },
          "name": "Performance",
          "navShow": [
            {
              "alias": "系统管理员",
              "roleId": "CUgndqoYDy",
              "roleName": "admin"
            }
          ],
          "objectId": "a50a7c7419",
          "orderBy": 102,
          "parent": "2f8ced4b6f",
          "updatedAt": "2021-03-22T02:17:19.097Z",
          "url": "/performance_monitoring"
        }
      ],
      "createdAt": "2021-03-22T02:14:02.399Z",
      "icon": "home-3-fill",
      "meta": {
        "alwaysShow": false,
        "badge": "",
        "component": "Layout",
        "hidden": false,
        "icon": "home-3-fill",
        "isCustomSvg": false,
        "noClosable": true,
        "noKeepAlive": false,
        "redirect": "/performance_monitoring",
        "tabHidden": true,
        "title": "系统"
      },
      "name": "System",
      "navShow": [
        {
          "alias": "系统管理员",
          "roleId": "CUgndqoYDy",
          "roleName": "admin"
        }
      ],
      "objectId": "2f8ced4b6f",
      "orderBy": 7,
      "parent": "0",
      "updatedAt": "2021-03-25T06:28:50.851Z",
      "url": "/dashboard/expandprogram"
    },
    {
      "ACL": {
        "*": {
          "read": true,
          "write": true
        },
        "role:admin": {
          "read": true,
          "write": true
        }
      },
      "children": [
        {
          "ACL": {
            "*": {
              "read": true,
              "write": true
            },
            "role:admin": {
              "read": true,
              "write": true
            }
          },
          "createdAt": "2021-03-24T05:49:09.111Z",
          "icon": "vuejs-fill",
          "meta": {
            "alwaysShow": false,
            "badge": "",
            "component": "@/views/topo/VueKonva",
            "hidden": false,
            "icon": "vuejs-fill",
            "isCustomSvg": false,
            "noClosable": false,
            "noKeepAlive": false,
            "redirect": "",
            "tabHidden": false,
            "title": "VueKonva"
          },
          "name": "VueKonva",
          "navShow": [
            {
              "alias": "系统管理员",
              "roleId": "CUgndqoYDy",
              "roleName": "admin"
            }
          ],
          "objectId": "ed8d198be6",
          "orderBy": 102,
          "parent": "7f4dea0f38",
          "updatedAt": "2021-03-26T06:39:59.088Z",
          "url": "/Topo/VueKonva"
        },
        {
          "ACL": {
            "*": {
              "read": true,
              "write": true
            },
            "role:admin": {
              "read": true,
              "write": true
            }
          },
          "createdAt": "2021-03-24T01:54:44.584Z",
          "icon": "ancient-gate-fill",
          "meta": {
            "alwaysShow": false,
            "badge": "",
            "component": "@/views/topo/TopoEditor",
            "hidden": false,
            "icon": "ancient-gate-fill",
            "isCustomSvg": false,
            "noClosable": false,
            "noKeepAlive": false,
            "redirect": "",
            "tabHidden": false,
            "title": "云组态"
          },
          "name": "Topo",
          "navShow": [
            {
              "alias": "系统管理员",
              "roleId": "CUgndqoYDy",
              "roleName": "admin"
            }
          ],
          "objectId": "b0f6f8cd27",
          "orderBy": 102,
          "parent": "7f4dea0f38",
          "updatedAt": "2021-03-25T04:47:21.131Z",
          "url": "/Topo/TopoEditor"
        },
        {
          "ACL": {
            "*": {
              "read": true,
              "write": true
            },
            "role:admin": {
              "read": true,
              "write": true
            }
          },
          "createdAt": "2021-03-25T04:53:49.820Z",
          "icon": "app-store-fill",
          "meta": {
            "alwaysShow": false,
            "badge": "",
            "component": "@/views/topo/Topology",
            "hidden": false,
            "icon": "app-store-fill",
            "isCustomSvg": false,
            "noClosable": false,
            "noKeepAlive": false,
            "redirect": "",
            "tabHidden": false,
            "title": "Topology"
          },
          "name": "Topology",
          "navShow": [
            {
              "alias": "系统管理员",
              "roleId": "CUgndqoYDy",
              "roleName": "admin"
            }
          ],
          "objectId": "c9210cbc46",
          "orderBy": 111,
          "parent": "7f4dea0f38",
          "updatedAt": "2021-03-25T04:53:49.820Z",
          "url": "/Topo/Topology"
        }
      ],
      "createdAt": "2021-03-24T01:53:44.430Z",
      "icon": "layout-top-fill",
      "meta": {
        "alwaysShow": false,
        "badge": "",
        "component": "Layout",
        "hidden": false,
        "icon": "layout-top-fill",
        "isCustomSvg": false,
        "noClosable": true,
        "noKeepAlive": false,
        "redirect": "/Topo/TopoEditor",
        "tabHidden": false,
        "title": "云组态"
      },
      "name": "Dgiottopo",
      "navShow": [
        {
          "alias": "系统管理员",
          "roleId": "CUgndqoYDy",
          "roleName": "admin"
        }
      ],
      "objectId": "7f4dea0f38",
      "orderBy": 8,
      "parent": "0",
      "updatedAt": "2021-03-25T06:28:57.878Z",
      "url": "/Topo"
    },
    {
      "ACL": {
        "*": {
          "read": true,
          "write": true
        },
        "role:admin": {
          "read": true,
          "write": true
        }
      },
      "children": [
        {
          "ACL": {
            "*": {
              "read": true,
              "write": true
            },
            "role:admin": {
              "read": true,
              "write": true
            }
          },
          "createdAt": "2021-03-17T04:07:38.388Z",
          "icon": "webcam-fill",
          "meta": {
            "alwaysShow": false,
            "badge": "",
            "component": "@/views/tools/websocket",
            "hidden": false,
            "icon": "webcam-fill",
            "isCustomSvg": false,
            "noClosable": true,
            "noKeepAlive": false,
            "redirect": "",
            "tabHidden": true,
            "title": "websocket"
          },
          "name": "Websocket",
          "navShow": [
            {
              "alias": "系统管理员",
              "roleId": "CUgndqoYDy",
              "roleName": "admin"
            }
          ],
          "objectId": "1cb2e76d87",
          "orderBy": 51,
          "parent": "edb0fa1e8b",
          "updatedAt": "2021-03-25T06:27:27.051Z",
          "url": "/tools/websocket"
        },
        {
          "ACL": {
            "*": {
              "read": true,
              "write": true
            },
            "role:admin": {
              "read": true,
              "write": true
            }
          },
          "createdAt": "2021-03-17T04:11:29.634Z",
          "icon": "alert-fill",
          "meta": {
            "alwaysShow": false,
            "badge": "",
            "component": "@/views/tools/alarms",
            "hidden": false,
            "icon": "alert-fill",
            "isCustomSvg": false,
            "noClosable": true,
            "noKeepAlive": false,
            "redirect": "",
            "tabHidden": true,
            "title": "系统告警"
          },
          "name": "Alarms",
          "navShow": [
            {
              "alias": "系统管理员",
              "roleId": "CUgndqoYDy",
              "roleName": "admin"
            }
          ],
          "objectId": "99413e77e0",
          "orderBy": 102,
          "parent": "edb0fa1e8b",
          "updatedAt": "2021-03-17T04:11:29.634Z",
          "url": "/tools/alarms"
        },
        {
          "ACL": {
            "*": {
              "read": true,
              "write": true
            },
            "role:admin": {
              "read": true,
              "write": true
            }
          },
          "createdAt": "2021-03-22T01:40:51.698Z",
          "icon": "video-fill",
          "meta": {
            "alwaysShow": false,
            "badge": "",
            "component": "@/views/monitor/index",
            "hidden": false,
            "icon": "video-fill",
            "isCustomSvg": false,
            "noClosable": true,
            "noKeepAlive": false,
            "redirect": "",
            "tabHidden": true,
            "title": "监控"
          },
          "name": "Monitor",
          "navShow": [
            {
              "alias": "系统管理员",
              "roleId": "CUgndqoYDy",
              "roleName": "admin"
            }
          ],
          "objectId": "5841252616",
          "orderBy": 102,
          "parent": "edb0fa1e8b",
          "updatedAt": "2021-03-22T01:40:51.698Z",
          "url": "/monitor/index"
        },
        {
          "ACL": {
            "*": {
              "read": true,
              "write": true
            },
            "role:admin": {
              "read": true,
              "write": true
            }
          },
          "createdAt": "2021-03-17T04:06:32.462Z",
          "icon": "video-upload-fill",
          "meta": {
            "alwaysShow": false,
            "badge": "",
            "component": "@/views/tools/topic_metrics",
            "hidden": false,
            "icon": "video-upload-fill",
            "isCustomSvg": false,
            "noClosable": true,
            "noKeepAlive": false,
            "redirect": "",
            "tabHidden": true,
            "title": "主题监控"
          },
          "name": "Topic_metrics",
          "navShow": [
            {
              "alias": "系统管理员",
              "roleId": "CUgndqoYDy",
              "roleName": "admin"
            }
          ],
          "objectId": "640c8c5aa3",
          "orderBy": 102,
          "parent": "edb0fa1e8b",
          "updatedAt": "2021-03-17T04:06:32.462Z",
          "url": "/tools/topic_metrics"
        },
        {
          "ACL": {
            "*": {
              "read": true,
              "write": true
            },
            "role:admin": {
              "read": true,
              "write": true
            }
          },
          "createdAt": "2021-03-17T04:03:13.042Z",
          "icon": "layout-top-line",
          "meta": {
            "alwaysShow": false,
            "badge": "",
            "component": "@/views/tools/topics",
            "hidden": false,
            "icon": "layout-top-line",
            "isCustomSvg": false,
            "noClosable": false,
            "noKeepAlive": false,
            "redirect": "",
            "tabHidden": false,
            "title": "主题"
          },
          "name": "Topics",
          "navShow": [
            {
              "alias": "系统管理员",
              "roleId": "CUgndqoYDy",
              "roleName": "admin"
            }
          ],
          "objectId": "da11402158",
          "orderBy": 102,
          "parent": "edb0fa1e8b",
          "updatedAt": "2021-03-17T04:03:13.042Z",
          "url": "/tools"
        },
        {
          "ACL": {
            "*": {
              "read": true,
              "write": true
            },
            "role:admin": {
              "read": true,
              "write": true
            }
          },
          "createdAt": "2021-03-17T04:01:01.829Z",
          "icon": "reserved-fill",
          "meta": {
            "alwaysShow": false,
            "badge": "",
            "component": "@/views/tools/clients",
            "hidden": false,
            "icon": "reserved-fill",
            "isCustomSvg": false,
            "noClosable": false,
            "noKeepAlive": false,
            "redirect": "",
            "tabHidden": false,
            "title": "客户端"
          },
          "name": "Clients",
          "navShow": [
            {
              "alias": "系统管理员",
              "roleId": "CUgndqoYDy",
              "roleName": "admin"
            }
          ],
          "objectId": "79bf7ddf8c",
          "orderBy": 102,
          "parent": "edb0fa1e8b",
          "updatedAt": "2021-03-17T04:03:37.567Z",
          "url": "/tools/clients"
        },
        {
          "ACL": {
            "*": {
              "read": true,
              "write": true
            },
            "role:admin": {
              "read": true,
              "write": true
            }
          },
          "createdAt": "2021-03-17T04:08:51.233Z",
          "icon": "play-list-2-fill",
          "meta": {
            "alwaysShow": false,
            "badge": "",
            "component": "@/views/tools/listeners",
            "hidden": false,
            "icon": "play-list-2-fill",
            "isCustomSvg": false,
            "noClosable": true,
            "noKeepAlive": false,
            "redirect": "",
            "tabHidden": true,
            "title": "主题监控"
          },
          "name": "Listeners",
          "navShow": [
            {
              "alias": "系统管理员",
              "roleId": "CUgndqoYDy",
              "roleName": "admin"
            }
          ],
          "objectId": "252284574a",
          "orderBy": 102,
          "parent": "edb0fa1e8b",
          "updatedAt": "2021-03-22T06:54:47.736Z",
          "url": "/tools/listeners"
        },
        {
          "ACL": {
            "*": {
              "read": true,
              "write": true
            },
            "role:admin": {
              "read": true,
              "write": true
            }
          },
          "createdAt": "2021-03-17T04:05:06.944Z",
          "icon": "anticlockwise-2-line",
          "meta": {
            "alwaysShow": false,
            "badge": "",
            "component": "@/views/tools/subscriptions",
            "hidden": false,
            "icon": "anticlockwise-2-line",
            "isCustomSvg": false,
            "noClosable": false,
            "noKeepAlive": false,
            "redirect": "",
            "tabHidden": false,
            "title": "订阅"
          },
          "name": "Subscriptions",
          "navShow": [
            {
              "alias": "系统管理员",
              "roleId": "CUgndqoYDy",
              "roleName": "admin"
            }
          ],
          "objectId": "dd19e47256",
          "orderBy": 102,
          "parent": "edb0fa1e8b",
          "updatedAt": "2021-03-17T04:06:46.793Z",
          "url": "/tools/subscriptions"
        }
      ],
      "createdAt": "2021-03-17T03:58:51.680Z",
      "icon": "tools-fill",
      "meta": {
        "alwaysShow": false,
        "badge": "",
        "component": "Layout",
        "hidden": false,
        "icon": "tools-fill",
        "isCustomSvg": false,
        "noClosable": false,
        "noKeepAlive": false,
        "redirect": "/tools/clients",
        "tabHidden": false,
        "title": "工具集"
      },
      "name": "Tools",
      "navShow": [
        {
          "alias": "系统管理员",
          "roleId": "CUgndqoYDy",
          "roleName": "admin"
        }
      ],
      "objectId": "edb0fa1e8b",
      "orderBy": 9,
      "parent": "0",
      "updatedAt": "2021-03-25T06:28:08.892Z",
      "url": "/tools"
    },
    {
      "ACL": {
        "*": {
          "read": true,
          "write": true
        },
        "role:admin": {
          "read": true,
          "write": true
        }
      },
      "children": [
        {
          "ACL": {
            "*": {
              "read": true,
              "write": true
            },
            "role:admin": {
              "read": true,
              "write": true
            }
          },
          "createdAt": "2021-03-24T11:54:04.792Z",
          "icon": "home-3-fill",
          "meta": {
            "alwaysShow": false,
            "badge": "",
            "component": "@/views/engine/checkengine",
            "hidden": true,
            "icon": "ruler-fill",
            "isCustomSvg": false,
            "noClosable": true,
            "noKeepAlive": false,
            "redirect": "",
            "tabHidden": true,
            "title": "查看规则"
          },
          "name": "Checkengine",
          "navShow": [
            {
              "alias": "系统管理员",
              "roleId": "CUgndqoYDy",
              "roleName": "admin"
            }
          ],
          "objectId": "a53240966c",
          "orderBy": 100001,
          "parent": "5e066075ed",
          "updatedAt": "2021-03-25T02:51:05.825Z",
          "url": "/rules_engine/checkengine"
        },
        {
          "ACL": {
            "*": {
              "read": true,
              "write": true
            },
            "role:admin": {
              "read": true,
              "write": true
            }
          },
          "createdAt": "2021-03-24T08:35:26.657Z",
          "icon": "home-3-fill",
          "meta": {
            "alwaysShow": false,
            "badge": "",
            "component": "@/views/equipment_management/index",
            "hidden": true,
            "icon": "home-3-fill",
            "isCustomSvg": false,
            "noClosable": false,
            "noKeepAlive": false,
            "redirect": "",
            "tabHidden": true,
            "title": "设备信息"
          },
          "name": "Deviceinfo",
          "navShow": [
            {
              "alias": "系统管理员",
              "roleId": "CUgndqoYDy",
              "roleName": "admin"
            }
          ],
          "objectId": "df7f2bcf55",
          "orderBy": 100001,
          "parent": "5e066075ed",
          "updatedAt": "2021-03-25T07:08:01.917Z",
          "url": "/roles/thing"
        },
        {
          "ACL": {
            "*": {
              "read": true,
              "write": true
            },
            "role:admin": {
              "read": true,
              "write": true
            }
          },
          "createdAt": "2021-03-24T10:36:01.292Z",
          "icon": "home-3-fill",
          "meta": {
            "alwaysShow": false,
            "badge": "",
            "component": "@/views/equipment_management/proddetail",
            "hidden": true,
            "icon": "home-3-fill",
            "isCustomSvg": false,
            "noClosable": true,
            "noKeepAlive": false,
            "redirect": "",
            "tabHidden": true,
            "title": "产品详情"
          },
          "name": "Proddetail",
          "navShow": [
            {
              "alias": "系统管理员",
              "roleId": "CUgndqoYDy",
              "roleName": "admin"
            }
          ],
          "objectId": "b3ff543504",
          "orderBy": 100001,
          "parent": "5e066075ed",
          "updatedAt": "2021-03-24T10:47:56.065Z",
          "url": "/roles/detailproduct"
        },
        {
          "ACL": {
            "*": {
              "read": true,
              "write": true
            },
            "role:admin": {
              "read": true,
              "write": true
            }
          },
          "createdAt": "2021-03-24T11:56:33.692Z",
          "icon": "home-3-fill",
          "meta": {
            "alwaysShow": false,
            "badge": "",
            "component": "@/views/user/userinfo",
            "hidden": true,
            "icon": "home-3-fill",
            "isCustomSvg": false,
            "noClosable": true,
            "noKeepAlive": false,
            "redirect": "",
            "tabHidden": true,
            "title": "用户中心"
          },
          "name": "Userinfo",
          "navShow": [
            {
              "alias": "系统管理员",
              "roleId": "CUgndqoYDy",
              "roleName": "admin"
            }
          ],
          "objectId": "b61401f7cd",
          "orderBy": 100001,
          "parent": "5e066075ed",
          "updatedAt": "2021-03-25T07:07:24.290Z",
          "url": "/userinfo/:userid"
        },
        {
          "ACL": {
            "*": {
              "read": true,
              "write": true
            },
            "role:admin": {
              "read": true,
              "write": true
            }
          },
          "createdAt": "2021-03-25T02:50:21.621Z",
          "icon": "edit-box-fill",
          "meta": {
            "alwaysShow": false,
            "badge": "",
            "component": "@/views/roles/adduser/edituser",
            "hidden": true,
            "icon": "edit-box-fill",
            "isCustomSvg": false,
            "noClosable": true,
            "noKeepAlive": false,
            "redirect": "",
            "tabHidden": true,
            "title": "编辑用户"
          },
          "name": "Edituser",
          "navShow": [
            {
              "alias": "系统管理员",
              "roleId": "CUgndqoYDy",
              "roleName": "admin"
            }
          ],
          "objectId": "cc09772a9c",
          "orderBy": 100001,
          "parent": "5e066075ed",
          "updatedAt": "2021-03-25T02:50:21.621Z",
          "url": "/roles/edituser"
        }
      ],
      "createdAt": "2021-03-17T10:45:41.852Z",
      "icon": "bug-line",
      "meta": {
        "alwaysShow": false,
        "badge": "",
        "component": "Layout",
        "hidden": true,
        "icon": "bug-line",
        "isCustomSvg": false,
        "noClosable": false,
        "noKeepAlive": false,
        "redirect": "/tools/clients",
        "tabHidden": true,
        "title": "隐藏的菜单，不展示"
      },
      "name": "Hidden",
      "navShow": [
        {
          "alias": "系统管理员",
          "roleId": "CUgndqoYDy",
          "roleName": "admin"
        }
      ],
      "objectId": "5e066075ed",
      "orderBy": 100000,
      "parent": "0",
      "updatedAt": "2021-03-24T10:46:56.222Z",
      "url": "/hidden"
    }
  ]
}
```
#### 退出接口 [logout](http://prod.iotn2n.com/swagger/#/_User/post_logout)
```curl
curl -X POST "http://prod.iotn2n.com/iotapi/logout" -H "accept: application/json" -H "sessionToken: r:0a566cc9011ccbe9dff2830ec51992d9"
```
返回参数
```json
{}
```