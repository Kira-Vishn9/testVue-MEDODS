<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "textInput",
  props: {
    modelValue: String,
    placeholder: {
      type: String,
      default: "placeholder",
    },
  },
  emits: ["update:modelValue", "onChangeValidation"],

  methods: {
    emitInput(event) {
      if (event.target.value.length === 0) {
        this.$emit("onChangeValidation");
      }
      this.$emit("update:modelValue", event.target.value);
    },
  },
});
</script>

<template>
  <div>
    <input
      type="text"
      :value="modelValue"
      @input="emitInput"
      :placeholder="placeholder"
    />
  </div>
</template>

<style scoped></style>
