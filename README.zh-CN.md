# Vue-Demi + TS + Vite For SFC template

> 同时支持 Vue 2 & 2.7 & 3 的 Vue.js 单文件组件模板示例。

<p align='center'>
<a href="https://github.com/ChuHoMan/vue-demi-component-template/blob/main/README.md">English</a> | <b>简体中文</b>
</p>

## 功能

- 为 Vue2.6/2.7/3 提供库模式的开发环境
- 为 Vue2/3 提供库模式的测试/构建环境
- 提供 Vue2.7/3 库模式的 dts 解决方案（Vue 2.6 仅部分支持）
- 在发布时用于适配 package.json 的脚本

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

> ⚠️ 重要提示：如果你使用 pnpm 10.x 版本，需要在 package.json 中添加以下配置：
> ```json
> {
>   "pnpm": {
>     "onlyBuiltDependencies": ["vue-demi-component-template"]
>   }
> }
> ```
> 这是因为 pnpm 10.x 默认会阻止 postinstall 脚本运行，而 vue-demi-component-template 需要依赖 postinstall 脚本来选择适配 Vue 版本的构建产物。详情可见 [pnpm/pnpm#8897](https://github.com/pnpm/pnpm/pull/8897)。

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
        <vue-demi-component-template></vue-demi-component-template>
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
