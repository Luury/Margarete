<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button></ion-back-button>
        </ion-buttons>
        <ion-title>Adicionar Meta</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>

      <ion-item>
        <ion-label position="floating">Nome da Meta</ion-label>
        <ion-input v-model="goal.description" type="text"></ion-input>
      </ion-item>

      <ion-item>
        <ion-label position="floating">Categorias</ion-label>
        <ion-select
          v-model="goal.category_id"
          ok-text="Okay"
          cancel-text="Dismiss"
        >
          <ion-select-option
            v-for="category in categories"
            :key="category.id"
            :value="category.id"
            >{{ category.description }}</ion-select-option>
        </ion-select>
      </ion-item>

      <ion-item>
        <ion-label position="floating">Data de Início</ion-label>
        <ion-datetime
          v-model="goal.date_start"
          display-format="MM DD YY"
        ></ion-datetime>
      </ion-item>
      
      <ion-item>
        <ion-label position="floating">Data para Terminar</ion-label>
        <ion-datetime
          v-model="goal.date_end"
          display-format="MM DD YY"
        ></ion-datetime>
      </ion-item>

      <ion-item>
        <ion-label position="floating">Valor de Início</ion-label>
        <ion-input v-model="goal.value_start" type="number"></ion-input>
      </ion-item>

      <ion-item>
        <ion-label position="floating">Valor que deseja alcançar</ion-label>
        <ion-input v-model="goal.value_end" type="number"></ion-input>
      </ion-item>
    </ion-content>

    <ion-fab vertical="bottom" horizontal="center">
      <ion-fab-button @click="AddGoal()">
        <ion-icon :icon="checkmark"></ion-icon>
      </ion-fab-button>
    </ion-fab>
  </ion-page>
</template>

<script>

import Goals from "../services/goals";
import Store from "../store/index";
//import Accounts from "../services/accounts";
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
      this.goal.user_id = response.user_id
      Categories.list(response).then((response) => {
        this.categories = response.data;
      });
    });
  },
  data() {
    return {
      goal: {
        user_id:"",
        description: "",
        date_start: "",
        date_end: "",
        category_id: "",
        value_start: "",
        value_end: "",
      },
      accounts: [],
      users:[],
      categories: [],
    };
  },
  methods: {
    AddGoal() {
      Store.get().then((response) => {
        Goals.create(this.goal, response).then((response) => {
          if (response.status == 200) {
            this.$router.push("/goals");
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