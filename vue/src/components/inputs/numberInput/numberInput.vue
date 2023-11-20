<script>
export default {
  name: "numberInput",
  props: {
    value: {
      type: [Number, String],
      default: "",
    },
    placeholder: {
      type: String,
      default: "placeholder",
    },
  },
  methods: {
    emitInput(event) {
      if (event.target.value.length === 0) {
        this.$emit("onChangeValidation");
      }
      this.$emit("input", event.target.value);
    },
  },
};
</script>

<template>
  <input
    type="number"
    v-model="value"
    @input="emitInput"
    :placeholder="placeholder"
  />
</template>

<style></style>
