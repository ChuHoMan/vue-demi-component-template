/// <reference types="vitest" />
import * as path from 'node:path';
import { Plugin, defineConfig } from 'vite';
import { isVue2, isVue3 } from 'vue-demi';
import Unocss from 'unocss/vite';

// @ts-expect-error unocss
import presetUno from '@unocss/preset-uno';
import presetAttributify from '@unocss/preset-attributify';
import DtsPlugin from 'vite-plugin-dts';

const outputName = 'index';
export const getSharedPlugins = (vueVersion: 'v2' | 'v2.7' | 'v3'): Plugin[] => [
  Unocss({
    presets: [presetAttributify(), presetUno()],
  }) as any,
  DtsPlugin({
    root: '..',
    compilerOptions: {
      skipLibCheck: true,
    },
    // only compiler our component source code
    include: ['src/**'],
    // vue2.6 does not apply to this plugin, ignore the error, 2.6 or handwritten .d.ts is better
    skipDiagnostics: vueVersion === 'v2',
    noEmitOnError: vueVersion === 'v2',
  }),
];

console.log('Vue version:', isVue2 ? 'v2' : 'v3');

// https://vitejs.dev/config/
export const baseBuildConfig = defineConfig({
  build: {
    outDir: path.resolve(__dirname, `./dist/${isVue2 ? 'v2' : 'v3'}`),
    emptyOutDir: false,
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      formats: ['es', 'cjs', 'umd'],
      name: 'VueDemiTemplateComponent',
      fileName: format => `${outputName}.${format}.js`,
    },
    rollupOptions: {
      external: ['vue',
        '@vue/composition-api',
        '@vue/composition-api/dist/vue-composition-api.mjs',
      ],
      output: {
        globals: {
          'vue': 'Vue',
          '@vue/composition-api': 'VueCompositionAPI',
          '@vue/composition-api/dist/vue-composition-api.mjs':
            'VueCompositionAPI',
        },
      },
    },
  },
  optimizeDeps: {
    exclude: ['vue-demi', 'vue', 'vue2', 'vue3'],
  },
  test: {
    globals: true,
    environment: 'jsdom',
    include: [
      '__test__/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}',
    ],
    alias: {
      '@tests/utils': path.resolve(__dirname, `./tests/utils`),
    },
    setupFiles: [path.resolve(__dirname, 'tests/setup.ts')],
    deps: {
      inline: ['vue2.7', 'vue2', 'vue-demi', '@vue/test-utils', '@vue/test-utils2'],
    },
    resolveSnapshotPath: (testPath, snapExtension) => {
      return path.join(
        path.join(
          path.dirname(testPath),
          isVue3 ? '__snapshotsV3__' : '__snapshots__',
        ),
        `${path.basename(testPath)}${snapExtension}`,
      );
    },
  },
});
