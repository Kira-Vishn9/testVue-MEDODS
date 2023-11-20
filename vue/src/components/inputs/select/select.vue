<script>
export default {
  props: {
    value: String,
    name: String,
    options: Array,
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
  <div id="example">
    <select :value="value" @input="emitInput">
      <option :value="''">Please Select</option>
      <option v-for="option in options" :value="option" :key="option">
        {{ option }}
      </option>
    </select>
  </div>
</template>

<style></style>
