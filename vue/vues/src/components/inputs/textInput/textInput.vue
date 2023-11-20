<script>
export default {
  name: "textInput",
  props: {
    value: String,
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
  <div>
    <input
      type="text"
      :value="value"
      @input="emitInput"
      :placeholder="placeholder"
    />
  </div>
</template>

<style></style>
