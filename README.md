# Vue-Demi + TS + Vite For SFC template

> Vue.js component template for Vue 2 and 2.7 and 3.

<p align='center'>
<b>English</b> | <a href="https://github.com/ChuHoMan/vue-demi-component-template/blob/main/README.zh-CN.md">简体中文</a>
</p>

## Template Usage

To use this template, clone it down using:

```bash
npx degit ChuHoMan/vue-demi-component-template my-component
```

And do a global replace of `vue-demi-component-template` and `VueDemiComponentTemplate` with your component library name.

## Setup

Make sure to install the dependencies:

```bash
# pnpm
pnpm install
```

## Development Server

Start the development server

```bash
# Vue 2.6.x
pnpm run dev:2
# Vue 2.7.x
pnpm run dev:2.7
# Vue 3
pnpm run dev:3
```

## How to use dist file？

### From CDN or without a Bundler

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" href="/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite App</title>
    <script src="https://unpkg.com/vue@3.2.47/dist/vue.global.prod.js"></script>
    <!-- Make sure your current directory has this umd asset -->
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

## Production

Build the library for production or publish:

```bash
# build all versions
pnpm run build
```

## License

Made with 💙

Published under [MIT License](./LICENSE).
