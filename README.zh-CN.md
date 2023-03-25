# Vue-Demi + TS + Vite For SFC template

> 同时支持 Vue 2 & 2.7 & 3 的 Vue.js 单文件组件模板示例。

<p align='center'>
<a href="https://github.com/ChuHoMan/vue-demi-component-template/blob/main/README.md">English</a> | <b>简体中文</b>
</p>

## 使用模板

要直接使用此模板，请执行以下命令:

```bash
npx degit ChuHoMan/vue-demi-component-template my-component
```

并将 `vue-demi-component-template` 和 `VueDemiComponentTemplate` 全局替换为您的组件库名称。

## 安装

确保先安装依赖：

```bash
# pnpm
pnpm install
```

## 开发

启动开发服务：

```bash
# Vue 2.6.x
pnpm run dev:2
# Vue 2.7.x
pnpm run dev:2.7
# Vue 3
pnpm run dev:3
```

## 构建

构建库用于生产或发布：

```bash
# build all versions
pnpm run build
```

## 如何使用 dist 文件？

### 不使用构建工具或通过 `CDN` 引入

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" href="/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite App</title>
    <script src="https://unpkg.com/vue@3.2.47/dist/vue.global.prod.js"></script>
    <!-- 确保你的当前目录有该产物 -->
    <script src="/dist/v3/index.umd.js"></script>
  </head>
  <body>
    <div id="app">
        <vue-demi-template-component></vue-demi-template-component>
    </div>
  </body>
  <script>
    const app = Vue.createApp({})
    app.use(VueDemiTemplateComponent)
    app.mount('#app')
  </script>
</html>
```

## License

Made with 💙

Published under [MIT License](./LICENSE).
