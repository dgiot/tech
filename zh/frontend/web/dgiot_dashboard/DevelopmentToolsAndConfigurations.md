### 开发工具配置 

选择一种常用的开发工具，配置好环境即可规范代码

#### vscode 配置（建议使用）

vscode 下载地址[https://code.visualstudio.com/](https://code.visualstudio.com/)


##### 必备插件安装（建议 vscode 只保留以下插件，防止自动格式化、自动修复失效）
• [eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)（必须安装）
• [stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint) （必须安装）
• [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) 代码自动格式化（必须安装）
• [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur) vue 开发必备（必须安装）
• [Auto Import](https://marketplace.visualstudio.com/items?itemName=steoates.autoimport) import 引入自动补全（推荐安装）
• [Import Cost](https://marketplace.visualstudio.com/items?itemName=wix.vscode-import-cost) 查看你引入的依赖模块大小（推荐安装）
• [Auto Close Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag) 自动补全 html 标签（推荐安装）
• [Auto Rename Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag) 自动重命名 html 标签（推荐安装）
• [vscode-element-helper](https://marketplace.visualstudio.com/items?itemName=ElemeFE.vscode-element-helper) element 开发必备（推荐安装）
• [docthis](https://marketplace.visualstudio.com/items?itemName=oouo-diogo-perdigao.docthis) 注释插件（可不安装）
• [One Monokai Theme](https://marketplace.visualstudio.com/items?itemName=azemoh.one-monokai) vscode 主题包（可不安装）
• [Git History](https://marketplace.visualstudio.com/items?itemName=donjayamanne.githistory) 查看 git 提交历史（可不安装）
• [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) 打包项目可直接预览（可不安装）
• [Svg Preview](https://marketplace.visualstudio.com/items?itemName=SimonSiefke.svg-preview) svg 查看器（可不安装）

##### vscode/setting.js配置

```json
{
  "[vue]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "editor.quickSuggestions": {
    "strings": true
  },
  "workbench.colorTheme": "One Monokai",
  "editor.tabSize": 2,
  "editor.detectIndentation": false,
  "emmet.triggerExpansionOnTab": true,
  "editor.formatOnSave": true,
  "javascript.format.enable": true,
  "git.enableSmartCommit": true,
  "git.autofetch": true,
  "git.confirmSync": false,
  "[json]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "liveServer.settings.donotShowInfoMsg": true,
  "explorer.confirmDelete": false,
  "javascript.updateImportsOnFileMove.enabled": "always",
  "typescript.updateImportsOnFileMove.enabled": "always",
  "files.exclude": {
    "**/.idea": true
  },
  "editor.codeActionsOnSave": {
    "source.fixAll.stylelint": true,
    "source.fixAll.eslint": true
  },
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[jsonc]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[html]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "editor.suggest.snippetsPreventQuickSuggestions": false,
  "prettier.htmlWhitespaceSensitivity": "ignore",
  "prettier.vueIndentScriptAndStyle": true,
  "vetur.format.defaultFormatter.html": "prettier",
  "files.autoSave": "onFocusChange",
  "path-intellisense.mappings": {
    "@": "${workspaceRoot}/src"
  },
  "files.eol": "\n"
}
```

#### webstorm的配置

webstorm 下载地址[https://www.jetbrains.com/zh-cn/webstorm/download/](https://www.jetbrains.com/zh-cn/webstorm/download/)

##### eslint 配置
![6b875553-cccb-a757-9988-839d5baab96e.png](https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/web/6b875553-cccb-a757-9988-839d5baab96e.png)

##### stylelint 配置
![2bcb071c-0015-30b9-1be8-7211b6d47d93.png](https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/web/2bcb071c-0015-30b9-1be8-7211b6d47d93.png)