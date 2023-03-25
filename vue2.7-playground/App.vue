<template>
  <div>
    <span>{{ Vue2Version }}</span>
    <vue-demi-template-component />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, isVue3, isVue2 } from "vue-demi";

export default defineComponent({
  name: "App",
  setup() {
    const versionStr = isVue2 ? "Vue2" : "Vue3";
    const Vue2Version = ref(versionStr);

    console.warn(`Vue env: Vue3:${isVue3} -- Vue2: ${isVue2}`);

    return {
      Vue2Version,
    };
  },
});
</script>

<style>
body > div {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
