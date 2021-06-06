<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button></ion-back-button>
        </ion-buttons>
        <ion-title>Nova Categoria</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-item>
        <ion-label position="floating">Tipo</ion-label>
        <ion-select
          v-model="category.type"
          ok-text="Okay"
          cancel-text="Dismiss"
        >
          <ion-select-option value="1">Despesa</ion-select-option>
          <ion-select-option value="2">Receita</ion-select-option>
          <ion-select-option value="3">Investimento</ion-select-option>
    
        </ion-select>
      </ion-item>

      <ion-item>
        <ion-label position="floating">Descrição</ion-label>
        <ion-input v-model="category.description" type="text"></ion-input>
      </ion-item>

    <ion-item>
        <ion-label position="floating">Ícone</ion-label>
        <ion-select
          v-model="category.icon_id"
          ok-text="Okay"
          cancel-text="Dismiss"
        >
          <ion-select-option value="1">Alimentação</ion-select-option>
          <ion-select-option value="2">Moradia</ion-select-option>
    
        </ion-select>
      </ion-item>     

    </ion-content>

    <ion-fab vertical="bottom" horizontal="center">
      <ion-fab-button @click="AddCategory()">
        <ion-icon :icon="checkmark"></ion-icon>
      </ion-fab-button>
    </ion-fab>
  </ion-page>
</template>

<script>
import Categories from "../services/categories";
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
  name: "AddCategory",
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
  data() {
    return {
      category: {
        type: "",
        description: "",
        icon_id: "",
      },
    };
  },
  methods: {
    AddCategory() {
      Store.get().then((response) => {
        Categories.create(this.category, response).then((response) => {
          if (response.status == 200) {
            this.$router.push("/categories");
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