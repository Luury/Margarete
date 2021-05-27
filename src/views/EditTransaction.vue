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
        <ion-radio-group :value="`${transactions.type}`">
          <ion-item>
            <ion-label>Despesa</ion-label>
            <ion-radio value="Despesa"></ion-radio>
          </ion-item>

          <ion-item>
            <ion-label>Receita</ion-label>
            <ion-radio value="Receita"></ion-radio>
          </ion-item>
        </ion-radio-group>
      </ion-item>

      <ion-item>
        <ion-label position="floating">Descrição</ion-label>
        <ion-input type="text" :value="`${transactions.description}`"></ion-input>
      </ion-item>

      <ion-item>
        <ion-label position="floating">Data</ion-label>
        <ion-datetime display-format="MM DD YY" :value="`${transactions.date}`"></ion-datetime>
      </ion-item>

      <ion-item>
        <ion-label position="floating">Categoria</ion-label>
        <ion-select ok-text="Okay" cancel-text="Dismiss" :value="`${transactions.category}`">
          <ion-select-option value="Casa">Casa</ion-select-option>
          <ion-select-option value="Alimentação">Alimentação</ion-select-option>
        </ion-select>
      </ion-item>

      <ion-item>
        <ion-label position="floating">Valor</ion-label>
        <ion-input type="number" :value="`${transactions.value}`"></ion-input>
      </ion-item>
    </ion-content>

    <ion-fab vertical="bottom" horizontal="center">
      <ion-fab-button>
        <ion-icon :icon="checkmark"></ion-icon>
      </ion-fab-button>
    </ion-fab>
  </ion-page>
</template>

<script>
import TransactionsData from "./TransactionsData.json"

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
    data(){
    return{
      transactions: TransactionsData.transactions[this.$route.params.id],
    }
  },
});
</script>

<style scoped>
ion-radio-group {
  display: flex;
}
</style>