<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'numberInput',
  props: {
    modelValue: {
      type: [Number, String],
      default: '',
    },
    placeholder: {
      type: String,
      default: 'placeholder',
    },
  },
  emits: ['update:modelValue'],
  computed: {
    inputValue: {
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
 <input type="number" v-model="inputValue" :placeholder="placeholder"/>
</template>

<style scoped>

</style>