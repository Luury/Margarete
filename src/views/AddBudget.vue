<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/budgets"></ion-back-button>
        </ion-buttons>
        <ion-title>Novo Orçamento</ion-title>
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

      <ion-item>
        <ion-label position="floating">Categoria</ion-label>
        <ion-select v-model="budget.category_id">
          <ion-select-option 
          v-for="category in categories"
          :key="category.id"
          :value="category.id"
          >
          {{category.description}}
          </ion-select-option>
        </ion-select>
      </ion-item>

    </ion-content>

    <ion-fab vertical="bottom" horizontal="center">
      <ion-fab-button @click="AddBudget()">
        <ion-icon :icon="checkmark"></ion-icon>
      </ion-fab-button>
    </ion-fab>
  </ion-page>
</template>

<script>


import Store from "../store/index";
import Categories from "../services/categories";
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
  IonSelectOption,
  IonSelect
} from "@ionic/vue";

import { checkmark } from "ionicons/icons";

import { defineComponent } from "vue";

export default defineComponent({
  name: "AddBudgetPage",
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
    IonSelect
  },
  setup() {
    return {
      checkmark,
    };
  },
  data() {
    return {
      budget: {
        description: "",
        category_id:"",
        value: "",
      },
      type:1,
      categories:[],
    };
  },
  methods: {
    AddBudget() {
      Store.get().then((response) => {
        Budgets.create(this.budget, response).then((response) => {
          if (response.status == 200) {
            this.$router.push("/budgets");
          }
        });
      });
    },
  },
  updated() {
    Store.get().then((response) => {
      Categories.listByType(this.type, response).then(
        (response) => {
          this.categories = response.data;
        }
      );
    });
  },
});
</script>

<style scoped>
ion-radio-group {
  display: flex;
}
</style>