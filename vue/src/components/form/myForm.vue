<script>
import { defineComponent } from "vue";
import { useVuelidate } from "@vuelidate/core";
import addressForm from "../view/addressForm.vue";
import passport from "../view/passport.vue";
import general from "../view/general.vue";
import { generalModel } from "../../models/general.js";
import { addressModel } from "../../models/address.js";
import { passportModel } from "../../models/passport.js";

export default defineComponent({
  components: { general, passport, addressForm },
  setup: () => ({ v$: useVuelidate() }),
  validations() {
    return {};
  },
  methods: {
    async submitForm() {
      const isFormCorrect = await this.v$.$validate();
      console.log(generalModel);
      console.log(addressModel);
      console.log(passportModel);
      if (!isFormCorrect) return;
    },
  },
});
</script>

<template>
  <form>
    <general />
    <addressForm />
    <passport />
    <button type="submit" @click.prevent="submitForm">Log Form Data</button>
  </form>
</template>

<style scoped></style>
