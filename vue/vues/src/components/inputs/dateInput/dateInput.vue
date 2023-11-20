<script>
export default {
  name: "dateInput",
  props: {
    value: {
      type: String,
      default: "",
    },
  },
  methods: {
    emitInput(event) {
      if (event.target.value === "") {
        this.$emit("onChangeValidation");
      }
      this.$emit("input", event.target.value);
    },
  },
};
</script>

<template>
  <input type="date" :value="value" @input="emitInput" />
</template>

<style></style>
