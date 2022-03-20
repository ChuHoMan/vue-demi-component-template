import { defineConfig } from 'vite'
import { createVuePlugin as vue2 } from 'vite-plugin-vue2'
import { baseBuildConfig, defaultPlugins } from '../vite.base.config'

export const viteVue2Config = defineConfig({
  plugins: [vue2(), ...defaultPlugins],
  server: {
    port: 2000
  },
  resolve: {
    alias: {
      vue: '../node_modules/vue/dist/vue.runtime.esm.js',
      'vue-demi': '../node_modules/vue-demi/lib/v2/index.mjs'
    }
  },
  ...baseBuildConfig
})

export default viteVue2Config
