<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button></ion-back-button>
        </ion-buttons>
        <ion-title>Adicionar Fundos a Meta</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
    
      <ion-item>
        <ion-label position="floating">Metas</ion-label>
        <ion-select
          v-model="goal.id"
          ok-text="Okay"
          cancel-text="Dismiss"
        >
          <ion-select-option
            v-for="goal in goals"
            :key="goal.id"
            :value="goal.id"
            >{{ goal.description }}</ion-select-option
          >
        </ion-select>
      </ion-item>

      <ion-item>
        <ion-label position="floating">Nome</ion-label>
        <ion-input v-model="goal.description" type="text"></ion-input>
      </ion-item>

      <ion-item>
        <ion-label position="floating">Data</ion-label>
        <ion-datetime
          v-model="goal.date"
          display-format="MM DD YY"
        ></ion-datetime>
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
import Accounts from "../services/accounts";
import Categories from "../services/categories";


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
    IonSelectOption,
    IonSelect,
  },
  setup() {
    return {
      checkmark,
    };
  },
  updated() {
    Store.get().then((response) => {
      Accounts.list(response).then((response) => {
        this.accounts = response.data;
      });
      Categories.list(response).then((response) => {
        this.categories = response.data;
      });
    });
  },
  data() {
    return {
      transaction: {
        type: "",
        account_id: "",
        description: "",
        date: "",
        category_id: "",
        value: "",
      },
      accounts: [],
      categories: [],
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