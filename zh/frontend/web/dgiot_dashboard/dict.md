## 开发、打包注意事项
## 开发、打包注意事项

### node 版本与包管理工具

- node 版本请安装官网最新正式版 14，node 版本小于 12 无法运行此项目
- 包管理工具建议使用 cnpm 或 pnpm，使用 npm 或 yarn 安装可能导致图片压缩依赖无法正常安装

### 打包时可能遇到的常见错误

- 打包报错 Cannot find module 'gifsicle'

解决方法
```cmd
cnpm i image-webpack-loader -D
```