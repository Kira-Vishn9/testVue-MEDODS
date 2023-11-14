<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'checkbox',
  props: {
    modelValue: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['update:modelValue'],
  computed: {
    isChecked: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit('update:modelValue', value);
      },
    },
  },
  methods: {
    handleChange(event) {
      this.isChecked = event.target.checked;
    },
  },
});
</script>

<template>
 <input type="checkbox" :placeholder="placeholder"  :checked="isChecked" @change="handleChange"/>
</template>

<style scoped>

</style>