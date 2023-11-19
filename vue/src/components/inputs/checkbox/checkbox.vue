<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "checkbox",
  props: {
    modelValue: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["update:modelValue"],
  computed: {
    isChecked: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit("update:modelValue", value);
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
  <label class="sms_Checkbox" for="smsCheckbox">
    <input
      type="checkbox"
      id="smsCheckbox"
      v-model="isChecked"
      @change="handleChange"
    />
    Не отправлять СМС</label
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
