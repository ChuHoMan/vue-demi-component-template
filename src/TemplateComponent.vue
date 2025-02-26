<script lang="ts">
import { defineComponent } from 'vue-demi';
import { templateComponentProps } from './props';

export default defineComponent({
  name: 'VueDemiComponentTemplate',
  props: templateComponentProps,
  setup() {},
});
</script>

<template>
  <div>
    <div ma4 class="template-component">
      Template Component
    </div>
  </div>
</template>
