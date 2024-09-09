import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import { createVuePlugin as vue2 } from 'vite-plugin-vue2';
import { baseBuildConfig, getSharedPlugins } from '../vite.base.config';

function fixCjsCompositionApi(): Plugin {
  return {
    name: 'vite-plugin-zyb-login:fix-cjs-composition-api',
    apply: 'build',
    enforce: 'post',
    generateBundle(options, bundle) {
      if (options.format === 'cjs') {
        Object.keys(bundle).forEach((key) => {
          if (key === 'index.cjs.js' && bundle[key].type === 'chunk') {
            (bundle[key] as OutputChunk).code = (bundle[key] as OutputChunk).code.replaceAll('@vue/composition-api/dist/vue-composition-api.mjs', '@vue/composition-api');
          }
        });
      }
    },
  };
}

export const viteVue2Config = defineConfig({
  plugins: [vue2(), ...getSharedPlugins('v2'), fixCjsCompositionApi()],
  server: {
    port: 2000,
  },
  resolve: {
    alias: {
      'vue': resolve(__dirname, './node_modules/vue/dist/vue.runtime.esm.js'),
      'vue-demi': resolve(__dirname, '../node_modules/vue-demi/lib/v2/index.mjs'),
    },
    dedupe: ['vue', '@vue/composition-api'],
  },
  ...baseBuildConfig,
});

export default viteVue2Config;
