<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'textInput',
  props: {
    modelValue: String,
    placeholder: {
      type: String,
      default: 'placeholder',
    },
  },
  emits: ['update:modelValue'],

  methods: {
    emitInput(event) {
      this.$emit('update:modelValue', event.target.value);
    },
  },
});
</script>

<template>
  <div>
    <input type="text" v-model="modelValue" @input="emitInput" :placeholder="placeholder" />
  </div>
</template>

<style scoped>
</style>