<script>
import { defineComponent, reactive } from "vue";
import textInput from "../inputs/textInput/textInput.vue";
import dateInput from "../inputs/dateInput/dateInput.vue";
import numberInput from "../inputs/numberInput/numberInput.vue";
import Select from "../inputs/select/select.vue";
import checkbox from "../inputs/checkbox/checkbox.vue";
import toggleInput from "../inputs/toggleInput/toggleInput.vue";
import layoutError from "../layoutError/layoutError.vue";
import { useVuelidate } from "@vuelidate/core";
import myValidation from "../validation/validation.js";

import {
  required,
  email,
  minLength,
  alpha as error,
  helpers,
} from "@vuelidate/validators";

export default defineComponent({
  components: {
    textInput,
    dateInput,
    numberInput,
    Select,
    checkbox,
    toggleInput,
    layoutError,
  },
  data() {
    return {
      textInputPlaceHolderName: "Name",
      textInputPlaceHolderLastName: "Last Name",
      textInputPlaceHolderMiddleName: "Middle Name",
      textInputPlaceHolderCountry: "Country",
      textInputPlaceHolderRegion: "Region",
      textInputPlaceHolderCity: "City",
      textInputPlaceHolderStreet: "Street",
      textInputPlaceHolderPassportSeries: "Passport Series",
      textInputPlaceHolderPassportIssued: "Passport issued",
      dateInputPlaceHolderDateBirth: "Date of Birth",
      dateInputPlaceHolderDateIssue: "Date of Issue",
      numberInputPlaceHolderPhone: "Your Phone Number",
      numberInputPlaceHolderIndexAddress: "Index Address",
      numberInputPlaceHolderHouseNumber: "Number your house",
      numberInputPlaceHolderPassportNumber: "Passport Number",
      arrayClients: ["VIP", "Проблемные", "ОМС"],
      arrayDoctors: ["Иванов", "Захаров", "Чернышева"],
      arrayDocuments: [
        "Паспорт",
        "Свидетельство о рождении",
        "Вод. удостоверение",
      ],
      name: "",
      lastName: "",
      middleName: "",
      dateOfBirth: "",
      phoneNumber: "",
      selectedClient: "",
      selectedDoctor: "",
      isSubscribed: false,
      gender: true,
      indexAddress: "",
      country: "",
      region: "",
      city: "",
      street: "",
      houseNumber: "",
      selectedDocumentType: "",
      passportSeries: "",
      passportNumber: "",
      passportIssued: "",
      dateOfIssue: "",
    };
  },
  setup: () => ({ v$: useVuelidate() }),
  validations() {
    return {
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
      isSubscribed: false,
      gender: true,
      indexAddress: "",
      country: "",
      region: "",
      city: {
        required: helpers.withMessage("This field cannot be empty", required),
        $lazy: true,
      },
      street: "",
      houseNumber: "",
      selectedDocumentType: {
        required: helpers.withMessage("This field cannot be empty", required),
        $lazy: true,
      },
      passportSeries: "",
      passportNumber: "",
      passportIssued: "",
      dateOfIssue: {
        required: helpers.withMessage("This field cannot be empty", required),
        customValidation: myValidation.validatePassportIssueDate,
        $lazy: true,
      },
    };
  },
  methods: {
    async submitForm() {
      const isFormCorrect = await this.v$.$validate();
      if (!isFormCorrect) return;
    },

    // logFormData() {
    //   console.log(this.v$);
    //
    //   console.log("Form Data:", {
    //     name: this.name,
    // lastName: this.lastName,
    // middleName: this.middleName,
    // dateOfBirth: this.dateOfBirth,
    // phoneNumber: this.phoneNumber,
    // selectedClient: this.selectedClient,
    // selectedDoctor: this.selectedDoctor,
    // isSubscribed: this.isSubscribed,
    // gender: this.gender,
    // indexAddress: this.indexAddress,
    // country: this.country,
    // region: this.region,
    // city: this.city,
    // street: this.street,
    // houseNumber: this.houseNumber,
    // selectedDocumentType: this.selectedDocumentType,
    // passportSeries: this.passportSeries,
    // passportNumber: this.passportNumber,
    // passportIssued: this.passportIssued,
    // dateOfIssue: this.dateOfIssue,
    //   });
    // },
  },
});
</script>

<template>
  <form>
    <layoutError :message="v$.name.$errors[0]?.$message">
      <textInput
        @onChangeValidation="v$.name.$reset()"
        v-model="name"
        :placeholder="textInputPlaceHolderName"
      />
    </layoutError>

    <layoutError :message="v$.lastName.$errors[0]?.$message">
      <textInput
        @onChangeValidation="v$.lastName.$reset()"
        v-model="lastName"
        :placeholder="textInputPlaceHolderLastName"
      />
    </layoutError>

    <textInput
      v-model="middleName"
      :placeholder="textInputPlaceHolderMiddleName"
    />
    <layoutError :message="v$.dateOfBirth.$errors[0]?.$message">
      <dateInput
        @onChangeValidation="v$.dateOfBirth.$reset()"
        v-model="dateOfBirth"
        :placeholder="dateInputPlaceHolderDateBirth"
      />
    </layoutError>

    <layoutError :message="v$.phoneNumber.$errors[0]?.$message">
      <numberInput
        @onChangeValidation="v$.phoneNumber.$reset()"
        v-model="phoneNumber"
        :placeholder="numberInputPlaceHolderPhone"
      />
    </layoutError>

    <layoutError :message="v$.selectedClient.$errors[0]?.$message">
      <Select
        @onChangeValidation="v$.selectedClient.$reset()"
        v-model="selectedClient"
        :options="arrayClients"
      />
    </layoutError>

    <Select v-model="selectedDoctor" :options="arrayDoctors" />
    <checkbox v-model="isSubscribed" />
    <toggleInput v-model="gender" :value="gender" />

    <numberInput
      v-model="indexAddress"
      :placeholder="numberInputPlaceHolderIndexAddress"
    />
    <textInput v-model="country" :placeholder="textInputPlaceHolderCountry" />
    <textInput v-model="region" :placeholder="textInputPlaceHolderRegion" />
    <layoutError :message="v$.city.$errors[0]?.$message">
      <textInput
        @onChangeValidation="v$.city.$reset()"
        v-model="city"
        :placeholder="textInputPlaceHolderCity"
      />
    </layoutError>

    <textInput v-model="street" :placeholder="textInputPlaceHolderStreet" />
    <numberInput
      v-model="houseNumber"
      :placeholder="numberInputPlaceHolderHouseNumber"
    />

    <layoutError :message="v$.selectedDocumentType.$errors[0]?.$message">
      <Select
        @onChangeValidation="v$.selectedDocumentType.$reset()"
        v-model="selectedDocumentType"
        :options="arrayDocuments"
      />
    </layoutError>

    <textInput
      v-model="passportSeries"
      :placeholder="textInputPlaceHolderPassportSeries"
    />
    <numberInput
      v-model="passportNumber"
      :placeholder="numberInputPlaceHolderPassportNumber"
    />
    <textInput
      v-model="passportIssued"
      :placeholder="textInputPlaceHolderPassportIssued"
    />
    <layoutError :message="v$.dateOfIssue.$errors[0]?.$message">
      <dateInput
        @onChangeValidation="v$.dateOfIssue.$reset()"
        v-model="dateOfIssue"
        :placeholder="dateInputPlaceHolderDateIssue"
      />
    </layoutError>

    <button type="submit" @click.prevent="submitForm">Log Form Data</button>
  </form>
</template>

<style scoped></style>
