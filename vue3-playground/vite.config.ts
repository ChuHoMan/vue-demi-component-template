import { defineConfig } from 'vite'
import * as path from 'path'
import vue3 from '@vitejs/plugin-vue'
import { baseBuildConfig, defaultPlugins } from '../vite.base.config'

console.log(path.resolve(__dirname, `../tests/utils/v3/vueTestUtils.ts`))
export const viteVue3Config = defineConfig({
  plugins: [vue3(), ...defaultPlugins],
  server: {
    port: 3000
  },
  resolve: {
    alias: {
      'vue': path.resolve(__dirname, "./node_modules/vue/dist/vue.runtime.esm-browser.js"),
      'vue-demi': path.resolve(__dirname, '../node_modules/vue-demi/lib/v3/index.mjs')
    }
  },
  ...baseBuildConfig
})

export default viteVue3Config