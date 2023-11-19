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
    <div class="error">{{ message }}</div>
  </div>
</template>

<style lang="sass">
.error
  color: red
  position: relative
  margin-top: 10px
</style>
