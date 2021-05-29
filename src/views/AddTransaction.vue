<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button></ion-back-button>
        </ion-buttons>
        <ion-title>Nova Transação</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-item>
        <ion-radio-group v-model="transaction.type">
          <ion-item>
            <ion-label>Despesa</ion-label>
            <ion-radio value="1"></ion-radio>
          </ion-item>

          <ion-item>
            <ion-label>Receita</ion-label>
            <ion-radio value="2"></ion-radio>
          </ion-item>
        </ion-radio-group>
      </ion-item>

      <ion-item>
        <ion-label position="floating">Descrição</ion-label>
        <ion-input v-model="transaction.description" type="text"></ion-input>
      </ion-item>

      <ion-item>
        <ion-label position="floating">Data</ion-label>
        <ion-datetime
          v-model="transaction.date"
          display-format="MM DD YY"
        ></ion-datetime>
      </ion-item>

      <ion-item>
        <ion-label position="floating">Categoria</ion-label>
        <ion-select
          v-model="transaction.category"
          ok-text="Okay"
          cancel-text="Dismiss"
        >
          <ion-select-option value="Casa">Casa</ion-select-option>
          <ion-select-option value="Alimentação">Alimentação</ion-select-option>
        </ion-select>
      </ion-item>

      <ion-item>
        <ion-label position="floating">Valor</ion-label>
        <ion-input v-model="transaction.value" type="number"></ion-input>
      </ion-item>
    </ion-content>

    <ion-fab vertical="bottom" horizontal="center">
      <ion-fab-button @click="AddTransaction()">
        <ion-icon :icon="checkmark"></ion-icon>
      </ion-fab-button>
    </ion-fab>
  </ion-page>
</template>

<script>
import Transactions from "../services/transactions";
import Store from "../store/index";

import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonTitle,
  IonContent,
  IonItem,
  IonLabel,
  IonInput,
  IonIcon,
  IonFab,
  IonFabButton,
  IonDatetime,
  IonRadioGroup,
  IonRadio,
  IonSelectOption,
  IonSelect,
} from "@ionic/vue";

import { checkmark } from "ionicons/icons";

import { defineComponent } from "vue";

export default defineComponent({
  name: "AddTransaction",
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonButtons,
    IonBackButton,
    IonTitle,
    IonContent,
    IonItem,
    IonLabel,
    IonInput,
    IonIcon,
    IonFab,
    IonFabButton,
    IonDatetime,
    IonRadioGroup,
    IonRadio,
    IonSelectOption,
    IonSelect,
  },
  setup() {
    return {
      checkmark,
    };
  },
  data() {
    return {
      transaction: {
        type: "",
        description: "",
        date: "",
        category: "",
        value: "",
      },
    };
  },
  methods: {
    AddTransaction() {
      Store.get().then((response) => {
        Transactions.create(this.transaction, response).then((response) => {
          if (response.status == 200) {
            this.$router.push("/transactions");
          }
        });
      });
    },
  },
});
</script>

<style scoped>
ion-radio-group {
  display: flex;
}
</style>