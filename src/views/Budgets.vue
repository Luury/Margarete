<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/more"></ion-back-button>
        </ion-buttons>
        <ion-buttons slot="end">
          <ion-button router-link="/addBudget">
            <ion-icon slot="icon-only" :icon="add"></ion-icon>
          </ion-button>
        </ion-buttons>
        <ion-title>Orçamentos</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-list>
        <ion-item-sliding v-for="budget in budgets" :key="budget.id">
          <ion-item>
            <ion-icon :icon="homeOutline"></ion-icon>
            <ion-label>
              <h2>{{budget.description }}</h2>
              <h3>{{budget.BudgeAmount}}/{{ budget.value}}</h3>
              <ion-progress-bar :value="budget.percentage"></ion-progress-bar>
            </ion-label>
          </ion-item>

          <ion-item-options side="end">
            <ion-item-option :router-link="`/EditBudget/${budget.id}`"
              >Editar</ion-item-option
            >
            <ion-item-option color="danger" @click="DeleteBudget(budget.id)"
              >Excluir</ion-item-option
            >
          </ion-item-options>
        </ion-item-sliding>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script>
import Budgets from "../services/budgets";
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
  IonButton,
  IonButtons,
  IonProgressBar,
} from "@ionic/vue";
import { homeOutline, add } from "ionicons/icons";

export default defineComponent({
  name: "BudgetsPage",
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
    IonButton,
    IonButtons,
    IonProgressBar,
  },
  updated() {
    Store.get().then((response) => {
      Budgets.list(response).then((response) => {
        this.budgets = response.data;
      });
    });
  },
  setup() {
    return {
      homeOutline,
      add,
    };
  },
  data() {
    return {
      budgets: [],
    };
  },
  methods: {
    DeleteBudget(BudgetID) {
      Store.get().then((response) => {
        Budgets.delete(BudgetID, response).then((response) => {
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