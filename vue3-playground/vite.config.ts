import { defineConfig } from 'vite'
import vue3 from '@vitejs/plugin-vue'
import { baseBuildConfig, defaultPlugins } from '../vite.base.config'

export const viteVue3Config = defineConfig({
  plugins: [vue3(), ...defaultPlugins],
  server: {
    port: 3000
  },
  resolve: {
    alias: {
      'vue': "../node_modules/vue/dist/vue.runtime.esm-browser.js",
      'vue-demi': '../node_modules/vue-demi/lib/v3/index.mjs'
    }
  },
  ...baseBuildConfig
})

export default viteVue3Config