<script>
import Vue from "vue";
import dateInput from "../components/inputs/dateInput/dateInput.vue";
import mySelect from "../components/inputs/select/select.vue";
import layoutError from "../components/layoutError/layoutError.vue";
import numberInput from "../components/inputs/numberInput/numberInput.vue";
import textInput from "../components/inputs/textInput/textInput.vue";
import myValidation from "../validations/validation.js";
import { required, helpers } from "@vuelidate/validators";
import { passportModel } from "../models/passport.js";
import { useVuelidate } from "@vuelidate/core";

export default {
  name: "Passport",
  components: { textInput, numberInput, layoutError, mySelect, dateInput },
  setup: (_, { refs }) => ({ passportRef: refs, v$: useVuelidate() }),
  validations() {
    return {
      passportModel: {
        selectedDocumentType: {
          required: helpers.withMessage("This field cannot be empty", required),
          $lazy: true,
        },
        passportSeries: "",
        passportNumber: "",
        passportIssued: "",
        dateOfIssue: {
          required: helpers.withMessage("This field cannot be empty", required),
          validateToFuture: helpers.withMessage(
            "You document from future",
            myValidation.validateToFuture,
          ),
          validateTooOld: helpers.withMessage(
            "You document is too old",
            myValidation.validateTooOld,
          ),
          $lazy: true,
        },
      },
    };
  },
  data() {
    return {
      passportModel,
      textInputPlaceHolderPassportSeries: "Passport Series",
      numberInputPlaceHolderPassportNumber: "Passport Number",
      textInputPlaceHolderPassportIssued: "Passport issued",
      dateInputPlaceHolderDateIssue: "Date of Issue",
    };
  },
};
</script>

<template>
  <div class="wrap--passport">
    <div class="select-row">
      <layoutError
        :message="v$.passportModel.selectedDocumentType.$errors[0]?.$message"
      >
        <mySelect
          @onChangeValidation="v$.passportModel.selectedDocumentType.$reset()"
          v-model="passportModel.selectedDocumentType"
          :options="passportModel.arrayDocuments"
        />
      </layoutError>
    </div>
    <textInput
      v-model="passportModel.passportSeries"
      :placeholder="textInputPlaceHolderPassportSeries"
    />
    <numberInput
      v-model="passportModel.passportNumber"
      :placeholder="numberInputPlaceHolderPassportNumber"
    />
    <textInput
      v-model="passportModel.passportIssued"
      :placeholder="textInputPlaceHolderPassportIssued"
    />

    <layoutError :message="v$.passportModel.dateOfIssue.$errors[0]?.$message">
      <dateInput
        @onChangeValidation="v$.passportModel.dateOfIssue.$reset()"
        v-model="passportModel.dateOfIssue"
        :placeholder="dateInputPlaceHolderDateIssue"
      />
    </layoutError>
  </div>
</template>

<style lang="sass">

.wrap--passport
  background-color: rgba(255, 255, 255, 0.5)
  padding: 20px
  border: 0 solid
  border-radius: 25px
  display: grid
  grid-template-columns: 1fr 1fr
  justify-items: center
  gap: 10px 10px
  margin: 10px 0
.wrap--passport :has(input, select)
  max-width: 100%
  width: 100%

.select-row
  grid-column: span 2
  width: 100%
  text-align: -webkit-center
@media (max-width: 800px)
  .wrap--passport
    display: flex
    flex-direction: column
</style>
