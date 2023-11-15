<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "dateInput",
  props: {
    modelValue: {
      type: String,
      default: "",
    },
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
  <div>
    <input type="date" :value="modelValue" @input="emitInput" />
  </div>
</template>

<style scoped></style>
