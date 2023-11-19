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
  data() {
    return {
      isSubmit: false,
    };
  },
  setup: () => ({ v$: useVuelidate() }),
  methods: {
    async submitForm() {
      const isFormCorrect = await this.v$.$validate();
      console.log(
        "тут должна быть функция отправки на какой-нибудь сервер",
        generalModel,
        addressModel,
        passportModel,
      );
      return (this.isSubmit = isFormCorrect);
    },
  },
});
</script>

<template>
  <div>
    <div v-if="isSubmit"><h1>Your form is being processed</h1></div>
    <form v-else>
      <general />
      <addressForm />
      <passport />
      <button type="submit" @click.prevent="submitForm">Log Form Data</button>
    </form>
  </div>
</template>

<style lang="sass">
form
  display: grid
  grid-template-columns: 1fr 1fr
  gap: 20px
  button
    grid-column: span 2
    width: 50%
    justify-self: center
@media (max-width: 800px)
  form
    display: flex
    flex-direction: column
    align-items: center
</style>
