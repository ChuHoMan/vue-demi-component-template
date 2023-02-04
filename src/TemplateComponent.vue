<template>
  <div>
    <div ma4 class="template-component">Template Component</div>
  </div>
</template>

<script lang="ts">
import { templateComponentProps } from "./props";
import { defineComponent } from "vue-demi";

export default defineComponent({
  name: "VueDemiComponentTemplate",
  props: templateComponentProps,
  setup() {},
});
</script>
