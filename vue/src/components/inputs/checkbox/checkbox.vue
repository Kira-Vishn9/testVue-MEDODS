<script>
export default {
  name: "checkbox",
  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    handleChange(event) {
      this.$emit("input", event.target.checked);
    },
  },
};
</script>

<template>
  <label class="sms_Checkbox" for="smsCheckbox">
    <input
      type="checkbox"
      id="smsCheckbox"
      :checked="value"
      @change="handleChange"
    />
    don't send SMS</label
  >
</template>

<style lang="sass">
.sms_Checkbox
  display: flex
  align-items: center
  justify-content: center
  input
    width: 50px
</style>
