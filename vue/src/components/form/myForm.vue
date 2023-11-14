<script>
import { defineComponent } from 'vue';
import textInput from '../inputs/textInput/textInput.vue';
import dateInput from "../inputs/dateInput/dateInput.vue";
import numberInput from "../inputs/numberInput/numberInput.vue";
import Select from "../inputs/select/select.vue";
import checkbox from "../inputs/checkbox/checkbox.vue";
import toggleInput from "../inputs/toggleInput/toggleInput.vue";

export default defineComponent({
  components: {
    textInput,
    dateInput,
    numberInput,
    Select,
    checkbox,
    toggleInput
  },
  data() {
    return {
      textInputPlaceHolderName: 'Name',
      textInputPlaceHolderLastName: 'Last Name',
      textInputPlaceHolderMiddleName: 'Middle Name',
      textInputPlaceHolderCountry: "Country",
      textInputPlaceHolderRegion: "Region",
      textInputPlaceHolderCity: "City",
      textInputPlaceHolderStreet: "Street",
      textInputPlaceHolderPassportSeries: "Passport Series",
      textInputPlaceHolderPassportIssued: "Passport issued",
      dateInputPlaceHolderDateBirth: 'Date of Birth',
      dateInputPlaceHolderDateIssue: "Date of Issue",
      numberInputPlaceHolderPhone: "Your Phone Number",
      numberInputPlaceHolderIndexAddress: "Index Address",
      numberInputPlaceHolderHouseNumber: "Number your house",
      numberInputPlaceHolderPassportNumber: "Passport Number",
      arrayClients : ["VIP", "Проблемные", "ОМС"],
      arrayDoctors: ["Иванов", "Захаров", "Чернышева"],
      arrayDocuments: ["Паспорт", "Свидетельство о рождении", "Вод. удостоверение"],
          name: '',
          lastName: '',
          middleName: '',
          dateOfBirth: '',
          phoneNumber: '',
          selectedClient: '',
          selectedDoctor: '',
          isSubscribed: false,
          gender: true,
          indexAddress: '',
          country: '',
          region: '',
          city: '',
          street: '',
          houseNumber: '',
          selectedDocumentType: '',
          passportSeries: '',
          passportNumber: '',
          passportIssued: '',
          dateOfIssue: '',
    };
  },
  methods: {
    logFormData() {
      console.log('Form Data:', {
        name: this.name,
        lastName: this.lastName,
        middleName: this.middleName,
        dateOfBirth: this.dateOfBirth,
        phoneNumber: this.phoneNumber,
        selectedClient: this.selectedClient,
        selectedDoctor: this.selectedDoctor,
        isSubscribed: this.isSubscribed,
        gender: this.gender,
        indexAddress: this.indexAddress,
        country: this.country,
        region: this.region,
        city: this.city,
        street: this.street,
        houseNumber: this.houseNumber,
        selectedDocumentType: this.selectedDocumentType,
        passportSeries: this.passportSeries,
        passportNumber: this.passportNumber,
        passportIssued: this.passportIssued,
        dateOfIssue: this.dateOfIssue,
      });
    },
  },

});
</script>

<template>
  <form>


    <textInput  v-model="name" :placeholder="textInputPlaceHolderName" />
    <textInput v-model="lastName" :placeholder="textInputPlaceHolderLastName" />
    <textInput v-model="middleName" :placeholder="textInputPlaceHolderMiddleName" />
    <dateInput v-model="dateOfBirth" :placeholder="dateInputPlaceHolderDateBirth" />
    <numberInput v-model="passportNumber" :placeholder="numberInputPlaceHolderPhone" />
    <Select v-model="selectedClient" :name="Clients" :options="arrayClients" />
    <Select v-model="selectedDoctor" :name="Doctors" :options="arrayDoctors" />
    <checkbox v-model="isSubscribed" />
    <toggleInput v-model="gender" :value="gender"/>


    <numberInput v-model="indexAddress" :placeholder="numberInputPlaceHolderIndexAddress" />
    <textInput v-model="country" :placeholder="textInputPlaceHolderCountry" />
    <textInput v-model="region" :placeholder="textInputPlaceHolderRegion" />
    <textInput v-model="city" :placeholder="textInputPlaceHolderCity" />
    <textInput v-model="street" :placeholder="textInputPlaceHolderStreet" />
    <numberInput v-model="houseNumber" :placeholder="numberInputPlaceHolderHouseNumber"/>

    <Select v-model="selectedDocumentType" :name="typeDocuments" :options="arrayDocuments" />
    <textInput v-model="passportSeries" :placeholder="textInputPlaceHolderPassportSeries" />
    <numberInput v-model="passportNumber" :placeholder="numberInputPlaceHolderPassportNumber"/>
    <textInput v-model="passportIssued" :placeholder="textInputPlaceHolderPassportIssued" />
    <dateInput v-model="dateOfIssue" :placeholder="dateInputPlaceHolderDateIssue" />

    <button type="submit" @click.prevent="logFormData">Log Form Data</button>
  </form>
</template>

<style scoped>

</style>
