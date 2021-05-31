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
        <ion-label position="floating">Tipo</ion-label>
        <ion-select
          v-model="account.type"
          ok-text="Okay"
          cancel-text="Dismiss"
        >
          <ion-select-option value="1">Carteira</ion-select-option>
          <ion-select-option value="2">Conta Corrente</ion-select-option>
          <ion-select-option value="3">Poupança</ion-select-option>
          <ion-select-option value="4">Investimentos</ion-select-option>
        </ion-select>
      </ion-item>

      <ion-item>
        <ion-label position="floating">Descrição</ion-label>
        <ion-input v-model="account.description" type="text"></ion-input>
      </ion-item>

    </ion-content>

    <ion-fab vertical="bottom" horizontal="center">
      <ion-fab-button @click="UpdateAccount()">
        <ion-icon :icon="checkmark"></ion-icon>
      </ion-fab-button>
    </ion-fab>
  </ion-page>
</template>

<script>
import Accounts from "../services/accounts";
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
  IonSelectOption,
  IonSelect,
} from "@ionic/vue";

import { checkmark } from "ionicons/icons";

import { defineComponent } from "vue";

export default defineComponent({
  name: "EditAccount",
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
      Accounts.account(this.$route.params.id, response).then(
        (response) => {
          this.account.type = response.data.type + "";
          this.account.description = response.data.description + "";
        }
      );
    });
  },
  data() {
    return {
      account: {
        type: "",
        description: "",
      },
    };
  },
  methods: {
    UpdateAccount() {
      Store.get().then((response) => {
        Accounts.update(
          this.$route.params.id,
          this.account,
          response
        ).then((response) => {
          if (response.status == 200) {
            this.$router.push("/accounts");
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