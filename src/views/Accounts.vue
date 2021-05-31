<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/more"></ion-back-button>
        </ion-buttons>
        <ion-title>Contas</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-list>
        <ion-item-sliding v-for="account in accounts" :key="account.id">
          <ion-item>
            <ion-icon :icon="cashOutline"></ion-icon>
            <ion-label>
              <h2>{{ account.description }}</h2>
              <h3>{{ account.balance }}</h3>
            </ion-label>
          </ion-item>

          <ion-item-options side="end">
            <ion-item-option :router-link="`/EditAccount/${account.id}`"
              >Editar</ion-item-option
            >
            <ion-item-option color="danger" @click="DeleteAccount(account.id)"
              >Excluir</ion-item-option
            >
          </ion-item-options>
        </ion-item-sliding>
      </ion-list>
    </ion-content>

    <ion-fab vertical="bottom" horizontal="center">
      <ion-fab-button router-link="/AddAccount">
        <ion-icon :icon="add"></ion-icon>
      </ion-fab-button>
    </ion-fab>
  </ion-page>
</template>

<script>
import Accounts from "../services/accounts";
import Store from "../store/index";

import { defineComponent } from "vue";
import {
  IonIcon,
  IonLabel,
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonList,
  IonItemSliding,
  IonItemOption,
  IonItemOptions,
  IonContent,
  IonItem,
  IonButtons,
  IonBackButton,
  IonFab,
  IonFabButton,
} from "@ionic/vue";
import { cashOutline, add } from "ionicons/icons";

export default defineComponent({
  name: "AccountsPage",
  components: {
    IonIcon,
    IonLabel,
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonList,
    IonItemSliding,
    IonItemOption,
    IonItemOptions,
    IonContent,
    IonItem,
    IonButtons,
    IonBackButton,
    IonFab,
    IonFabButton,
  },
  updated() {
    Store.get().then((response) => {
      Accounts.list(response).then((response) => {
        this.accounts = response.data;
      });
    });
  },
  setup() {
    return {
      cashOutline,
      add
    };
  },
  data() {
    return {
      accounts: [],
    };
  },
  methods: {
    DeleteAccount(AccountId) {
      Store.get().then((response) => {
        Accounts.delete(AccountId, response).then((response) => {
          if (response.status == 200) {
            this.$forceUpdate();
          }
        });
      });
    },
  },
});
</script>

<style scoped>
</style>