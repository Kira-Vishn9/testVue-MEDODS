<script>
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    modelValue: String,
    name: String,
    options: Array,
  },
  emits: ["update:modelValue", "onChangeValidation"],
  methods: {
    emitInput(event) {
      if (event.target.value === "") {
        this.$emit("onChangeValidation");
      }
      this.$emit("update:modelValue", event.target.value);
    },
  },
});
</script>

<template>
  <select v-model="selectedValue" @change="emitInput">
    <option :value="''">{{ name }}</option>
    <option v-for="item in options" :value="item" :key="item">
      {{ item }}
    </option>
  </select>
</template>

<style scoped></style>
