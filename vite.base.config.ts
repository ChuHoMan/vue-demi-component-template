/// <reference types="vitest" />
import { defineConfig } from 'vite'
import * as path from 'path'
import { isVue2, isVue3 } from 'vue-demi'
import Unocss from 'unocss/vite'
//@ts-expect-error unocss
import presetUno from '@unocss/preset-uno'
import presetAttributify from '@unocss/preset-attributify'

const outputName = 'index'
export const defaultPlugins = [
  Unocss({
    presets: [presetAttributify(), presetUno()]
  })
]

console.log('Vue version:', isVue2 ? 'v2' : 'v3')

// https://vitejs.dev/config/
export const baseBuildConfig = defineConfig({
  build: {
    outDir: path.resolve(__dirname, `./dist/${isVue2 ? 'v2' : 'v3'}`),
    emptyOutDir: false,
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      formats: ['es', 'cjs', 'umd'],
      name: 'index',
      fileName: (format) => `${outputName}.${format}.js`
    },
    rollupOptions: {
      external: ['vue', '@vue/composition-api/dist/vue-composition-api.mjs'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue',
          '@vue/composition-api/dist/vue-composition-api.mjs':
            'VueCompositionAPI'
        }
      }
    }
  },
  optimizeDeps: {
    exclude: ['vue-demi', 'vue', 'vue2']
  },
  test: {
    globals: true,
    environment: 'jsdom',
    include: [
      '__test__/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'
    ],
    alias: {
      '@tests/utils': path.resolve(__dirname, `./tests/utils/vueTestUtils.ts`)
    },
    setupFiles: [path.resolve(__dirname, 'tests/setup.ts')],
    deps: {
      inline: ['vue2', '@vue/composition-api', 'vue-demi', '@vue/test-utils', '@vue/test-utils2']
    },
    resolveSnapshotPath: (testPath, snapExtension) => {
      return path.join(
        path.join(
          path.dirname(testPath),
          isVue3 ? '__snapshotsV3__' : '__snapshots__'
        ),
        `${path.basename(testPath)}${snapExtension}`
      )
    }
  }
})
