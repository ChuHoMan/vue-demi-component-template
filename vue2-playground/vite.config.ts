import { defineConfig } from 'vite'
import { resolve } from 'path'
import { createVuePlugin as vue2 } from 'vite-plugin-vue2'
import { baseBuildConfig, defaultPlugins } from '../vite.base.config'

export const viteVue2Config = defineConfig({
  plugins: [vue2(), ...defaultPlugins],
  server: {
    port: 2000
  },
  resolve: {
    alias: {
      vue: resolve(__dirname, './node_modules/vue/dist/vue.runtime.esm.js'),
      'vue-demi': resolve(__dirname, '../node_modules/vue-demi/lib/v2/index.mjs')
    }
  },
  ...baseBuildConfig
})

export default viteVue2Config
