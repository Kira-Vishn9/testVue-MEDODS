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
          $lazy: true,
        },
        lastName: {
          required: helpers.withMessage("This field cannot be empty", required),
          $lazy: true,
        },
        middleName: "",
        dateOfBirth: {
          required: helpers.withMessage("This field cannot be empty", required),
          customValidation: myValidation.validateBirthday,
          $lazy: true,
        },
        phoneNumber: {
          required: helpers.withMessage("This field cannot be empty", required),
          customValidation: myValidation.validateRussianPhoneNumber,
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

    <layoutError :message="v$.generalModel.selectedClient.$errors[0]?.$message">
      <Select
        @onChangeValidation="v$.generalModel.selectedClient.$reset()"
        v-model="generalModel.selectedClient"
        :options="arrayClients"
      />
    </layoutError>

    <div class="select-row">
      <Select
        v-model="generalModel.selectedDoctor"
        :options="generalModel.arrayDoctors"
      />
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
</template>

<style lang="scss" scoped>
.wrap--general {
  border: 0 solid;
  border-radius: 25px;
  background-color: rgba(255, 255, 255, 0.5);
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(4, 2fr) 1fr;
  padding: 20px;
  justify-items: center;
}
.select-row {
  grid-column: span 2;
  width: 100%;
  text-align: -webkit-center;
}
.select-row select {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
