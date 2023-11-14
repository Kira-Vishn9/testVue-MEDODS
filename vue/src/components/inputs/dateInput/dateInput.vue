<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'dateInput',
  props: {
    modelValue: {
      type: String, // Assuming the date is represented as a string
      default: '',
    },
  },
  emits: ['update:modelValue'],
  computed: {
    selectedDate: {
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
  <div>
    <input type="date" v-model="selectedDate">
  </div>
</template>

<style scoped>

</style>