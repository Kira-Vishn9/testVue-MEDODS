<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "numberInput",
  props: {
    modelValue: {
      type: [Number, String],
      default: "",
    },
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
  <input
    type="number"
    :value="modelValue"
    @input="emitInput"
    :placeholder="placeholder"
  />
</template>

<style scoped></style>
