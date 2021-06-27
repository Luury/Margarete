<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button></ion-back-button>
        </ion-buttons>
        <ion-title>Editar Orçamento</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-item>
        <ion-label position="floating">Descrição</ion-label>
        <ion-input v-model="budget.description" type="text"></ion-input>
      </ion-item>

      <ion-item>
        <ion-label position="floating">Valor</ion-label>
        <ion-input v-model="budget.value" type="number"></ion-input>
      </ion-item>

    </ion-content>

    <ion-fab vertical="bottom" horizontal="center">
      <ion-fab-button @click="UpdateBudget()">
        <ion-icon :icon="checkmark"></ion-icon>
      </ion-fab-button>
    </ion-fab>
  </ion-page>
</template>

<script>
import Store from "../store/index";
import Budgets from "../services/budgets";

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
} from "@ionic/vue";

import { checkmark } from "ionicons/icons";

import { defineComponent } from "vue";

export default defineComponent({
  name: "AddGoalPage",
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

  },
  setup() {
    return {
      checkmark,
    };
  },
  created() {
    Store.get().then((response) => {
      Budgets.budget(this.$route.params.id, response).then((response) => {
        this.budget.description = response.data.description + "";
        this.budget.value = response.data.value + "";
      });
    });
    
  },
  data() {
    return {
      budget: {
        description:"",
        value: "",
      },
    };
  },
  methods: {
    UpdateBudget() {
      Store.get().then((response) => {
        Budgets.update(
          this.$route.params.id,
          this.budget,
          response
        ).then((response) => {
          if (response.status == 200) {
            this.$router.push("/budgets");
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