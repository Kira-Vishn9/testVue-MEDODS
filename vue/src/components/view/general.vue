<script>
import { defineComponent } from "vue";
import dateInput from "../inputs/dateInput/dateInput.vue";
import toggleInput from "../inputs/toggleInput/toggleInput.vue";
import Select from "../inputs/select/select.vue";
import layoutError from "../layoutError/layoutError.vue";
import numberInput from "../inputs/numberInput/numberInput.vue";
import checkbox from "../inputs/checkbox/checkbox.vue";
import textInput from "../inputs/textInput/textInput.vue";
import { useVuelidate } from "@vuelidate/core";
import myValidation from "../validation/validation.js";
import { required, helpers } from "@vuelidate/validators";
import { generalModel } from "../../models/general.js";

export default defineComponent({
  name: "general",
  components: {
    textInput,
    checkbox,
    numberInput,
    layoutError,
    Select,
    toggleInput,
    dateInput,
  },
  setup: (_, { refs }) => ({ generalRef: refs, v$: useVuelidate() }),
  validations() {
    return {
      generalModel: {
        name: {
          required: helpers.withMessage("This field cannot be empty", required),
          customValidationLength: helpers.withMessage(
            "Too short name",
            myValidation.validateLength,
          ),
          customValidationAlphabetic: helpers.withMessage(
            "Нou are using incorrect characters",
            myValidation.validateAlphabeticInput,
          ),
          $lazy: true,
        },
        lastName: {
          required: helpers.withMessage("This field cannot be empty", required),
          $lazy: true,
          customValidation: helpers.withMessage(
            "Too short lastname",
            myValidation.validateLength,
          ),
          customValidationAlphabetic: helpers.withMessage(
            "You are using incorrect characters",
            myValidation.validateAlphabeticInput,
          ),
        },
        middleName: "",
        dateOfBirth: {
          required: helpers.withMessage("This field cannot be empty", required),
          customValidation: helpers.withMessage(
            "Your birthday can't be in the future",
            myValidation.validateToFuture,
          ),
          $lazy: true,
        },
        phoneNumber: {
          required: helpers.withMessage("This field cannot be empty", required),
          customValidation: helpers.withMessage(
            "Phone number is incorrect",
            myValidation.validateRussianPhoneNumber,
          ),
          $lazy: true,
        },
        selectedClient: {
          required: helpers.withMessage("This field cannot be empty", required),
          $lazy: true,
        },
        selectedDoctor: "",
      },
    };
  },
  data() {
    return {
      generalModel,
      textInputPlaceHolderName: "Name",
      textInputPlaceHolderLastName: "Last Name",
      textInputPlaceHolderMiddleName: "Middle Name",
      dateInputPlaceHolderDateBirth: "Date of Birth",
      numberInputPlaceHolderPhone: "Your Phone Number",
      arrayClients: ["VIP", "Проблемные", "ОМС"],
      arrayDoctors: ["Иванов", "Захаров", "Чернышева"],
    };
  },
});
</script>

<template>
  <div class="wrap--general">
    <h2>General form</h2>
    <div class="wrap--content">
      <layoutError :message="v$.generalModel.name.$errors[0]?.$message">
        <textInput
          @onChangeValidation="v$.generalModel.name.$reset()"
          v-model="generalModel.name"
          :placeholder="textInputPlaceHolderName"
        />
      </layoutError>

      <layoutError :message="v$.generalModel.lastName.$errors[0]?.$message">
        <textInput
          @onChangeValidation="v$.generalModel.lastName.$reset()"
          v-model="generalModel.lastName"
          :placeholder="textInputPlaceHolderLastName"
        />
      </layoutError>

      <textInput
        v-model="generalModel.middleName"
        :placeholder="textInputPlaceHolderMiddleName"
      />
      <layoutError :message="v$.generalModel.dateOfBirth.$errors[0]?.$message">
        <dateInput
          @onChangeValidation="v$.generalModel.dateOfBirth.$reset()"
          v-model="generalModel.dateOfBirth"
          :placeholder="dateInputPlaceHolderDateBirth"
        />
      </layoutError>

      <layoutError :message="v$.generalModel.phoneNumber.$errors[0]?.$message">
        <numberInput
          @onChangeValidation="v$.generalModel.phoneNumber.$reset()"
          v-model="generalModel.phoneNumber"
          :placeholder="numberInputPlaceHolderPhone"
        />
      </layoutError>

      <layoutError
        :message="v$.generalModel.selectedClient.$errors[0]?.$message"
      >
        <Select
          @onChangeValidation="v$.generalModel.selectedClient.$reset()"
          v-model="generalModel.selectedClient"
          :options="arrayClients"
        />
      </layoutError>

      <div class="select-row">
        <Select v-model="generalModel.selectedDoctor" :options="arrayDoctors" />
      </div>
      <toggleInput
        @update:value="
          (a) => {
            console.log((generalModel.gender = a));
          }
        "
        :checked="generalModel.gender"
      />

      <checkbox v-model="generalModel.isSubscribed" />
    </div>
  </div>
</template>

<style lang="sass">
.wrap--general
  grid-column: span 2
  border: 0 solid
  border-radius: 25px
  background-color: rgba(255, 255, 255, 0.5)


  .wrap--content
    display: grid
    grid-template-columns: 1fr 1fr
    padding: 20px
    justify-items: center
    gap: 10px
    box-sizing: border-box

  .select-row
    grid-column: span 2
    width: 100%
    text-align: -webkit-center

    select
      width: 100%
      display: flex
      flex-direction: column
      align-items: center
@media (max-width: 800px)
  .wrap--general
    display: flex
    flex-direction: column
    .wrap--content
      display: flex
      flex-direction: column
</style>
