<script>
import { defineComponent } from "vue";
import layoutError from "../layoutError/layoutError.vue";
import numberInput from "../inputs/numberInput/numberInput.vue";
import textInput from "../inputs/textInput/textInput.vue";
import { useVuelidate } from "@vuelidate/core";
import myValidation from "../validation/validation.js";
import { required, helpers } from "@vuelidate/validators";
import { addressModel } from "../../models/address.js";

export default defineComponent({
  name: "address",
  components: { textInput, numberInput, layoutError },
  setup: (_, { refs }) => ({ addressRef: refs, v$: useVuelidate() }),
  validations() {
    return {
      addressModel: {
        indexAddress: "",
        country: "",
        region: "",
        city: {
          required: helpers.withMessage("This field cannot be empty", required),
          customValidation: helpers.withMessage(
            "Too short",
            myValidation.validateLength,
          ),
          $lazy: true,
        },
        street: "",
        houseNumber: "",
      },
    };
  },
  data() {
    return {
      addressModel,
      numberInputPlaceHolderIndexAddress: "Index Address",
      textInputPlaceHolderCountry: "Country",
      textInputPlaceHolderRegion: "Region",
      textInputPlaceHolderCity: "City",
      textInputPlaceHolderStreet: "Street",
      numberInputPlaceHolderHouseNumber: "Number your house",
    };
  },
});
</script>

<template>
  <div class="wrap--address">
    <numberInput
      v-model="addressModel.indexAddress"
      :placeholder="numberInputPlaceHolderIndexAddress"
    />
    <textInput
      v-model="addressModel.country"
      :placeholder="textInputPlaceHolderCountry"
    />
    <textInput
      v-model="addressModel.region"
      :placeholder="textInputPlaceHolderRegion"
    />
    <layoutError :message="v$.addressModel.city.$errors[0]?.$message">
      <textInput
        @onChangeValidation="v$.addressModel.city.$reset()"
        v-model="addressModel.city"
        :placeholder="textInputPlaceHolderCity"
      />
    </layoutError>

    <textInput
      v-model="addressModel.street"
      :placeholder="textInputPlaceHolderStreet"
    />
    <numberInput
      v-model="addressModel.houseNumber"
      :placeholder="numberInputPlaceHolderHouseNumber"
    />
  </div>
</template>

<style lang="sass">
.wrap--address
  position: relative
  border: 0 solid
  border-radius: 25px
  background-color: rgba(255, 255, 255, 0.5)
  display: grid
  grid-template-columns: 1fr 1fr
  padding: 20px
  justify-items: center
  gap: 20px 10px
  margin: 10px 0
@media (max-width: 800px)
  .wrap--address
    display: flex
    flex-direction: column
</style>
