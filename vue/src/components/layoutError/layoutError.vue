<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "layoutError",
  props: {
    nameTitle: String,
    message: String,
    status: "Error" | "success",
  },
});
</script>

<template>
  <div>
    <p>{{ nameTitle }}</p>
    <slot> </slot>

    <div class="input-errors">
      <div class="error">{{ message }}</div>
    </div>
  </div>
</template>

<style scoped>
.error {
  color: red;
}
</style>
