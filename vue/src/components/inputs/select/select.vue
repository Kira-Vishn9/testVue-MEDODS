<script>
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    modelValue: String,
    name: String,
    options: Array,
  },
  emits: ['update:modelValue'],
  computed: {
    selectedValue: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit('update:modelValue', value);
      },
    },
  },
});
</script>

<template>
  <select v-model="selectedValue">
    <option :value="''">{{ name }}</option>
    <option v-for="item in options" :value="item" :key="item">
      {{ item }}
    </option>
  </select>
</template>

<style scoped>

</style>