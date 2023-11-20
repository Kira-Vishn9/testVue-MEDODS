<script>
import Vue from "vue";

export default {
  name: "layoutError",
  props: {
    nameTitle: String,
    message: String,
    status: {
      type: String,
      validator: (value) => ["Error", "success"].includes(value),
    },
  },
};
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
