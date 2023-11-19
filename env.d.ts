declare module '*.vue' {
  import type { DefineComponent } from 'vue3';

  const component: DefineComponent<Record<string, unknown>, Record<string, unknown>, any>;
  export default component;
}

declare module '@tests/utils/vueTestUtils'
