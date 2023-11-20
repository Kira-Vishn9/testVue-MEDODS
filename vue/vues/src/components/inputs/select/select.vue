<script>
export default {
  props: {
    value: String,
    name: String,
    options: Array,
  },
  emits: ["update:modelValue", "onChangeValidation"],
  methods: {
    emitInput(event) {
      console.log(event.target.value);
      if (event.target.value === "") {
        this.$emit("onChangeValidation");
      }
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>

<template>
  <select :value="value" @change="emitInput">
    <option :value="''">{{ name }}</option>
    <option v-for="item in options" :value="item" :key="item">
      {{ item }}
    </option>
  </select>
</template>

<style></style>
