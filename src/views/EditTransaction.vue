<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button></ion-back-button>
        </ion-buttons>
        <ion-title>Editar Transação</ion-title>
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
        <ion-input type="text" v-model="transaction.description"></ion-input>
      </ion-item>

      <ion-item>
        <ion-label position="floating">Data</ion-label>
        <ion-datetime
          display-format="MM DD YY"
          v-model="transaction.date"
        ></ion-datetime>
      </ion-item>

      <ion-item>
        <ion-label position="floating">Categoria</ion-label>
        <ion-select
          ok-text="Okay"
          cancel-text="Dismiss"
          v-model="transaction.category"
        >
          <ion-select-option value="Casa">Casa</ion-select-option>
          <ion-select-option value="Alimentação">Alimentação</ion-select-option>
        </ion-select>
      </ion-item>

      <ion-item>
        <ion-label position="floating">Valor</ion-label>
        <ion-input type="number" v-model="transaction.value"></ion-input>
      </ion-item>
    </ion-content>

    <ion-fab vertical="bottom" horizontal="center">
      <ion-fab-button @click="UpdateTransaction()">
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
  mounted() {
    Store.get().then((response) => {
      Transactions.transaction(this.$route.params.id, response).then(
        (response) => {
          this.transaction.type = response.data.type + "";
          this.transaction.description = response.data.description + "";
          this.transaction.date = response.data.date.replace("Z", "") + "";
          this.transaction.category = response.data.category + "";
          this.transaction.value = response.data.value + "";
        }
      );
    });
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
    UpdateTransaction() {
      Store.get().then((response) => {
        Transactions.update(
          this.$route.params.id,
          this.transaction,
          response
        ).then((response) => {
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