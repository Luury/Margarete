<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/more"></ion-back-button>
        </ion-buttons>
        <ion-title>Categorias</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-item>
        <ion-radio-group
          v-model="select.type"
          @click="Filter()"
          allow-empty-selection="true"
        >
          <ion-item>
            <ion-label>Despesa</ion-label>
            <ion-radio value="1"></ion-radio>
          </ion-item>

          <ion-item>
            <ion-label>Receita</ion-label>
            <ion-radio value="2"></ion-radio>
          </ion-item>

          <ion-item>
            <ion-label>Investimento</ion-label>
            <ion-radio value="3"></ion-radio>
          </ion-item>
        </ion-radio-group>
      </ion-item>

      <ion-list>
        <ion-item-sliding v-for="category in categories" :key="category.id">
          <ion-item>
            <ion-icon :icon="cashOutline"></ion-icon>
            <ion-label>
              <h2>{{ category.description }}</h2>
              <h3>{{ category.balance }}</h3>
            </ion-label>
          </ion-item>

          <ion-item-options side="end">
            <ion-item-option :router-link="`/EditCategory/${category.id}`"
              >Editar</ion-item-option
            >
            <ion-item-option color="danger" @click="DeleteCategory(category.id)"
              >Excluir</ion-item-option
            >
          </ion-item-options>
        </ion-item-sliding>
      </ion-list>
    </ion-content>

    <ion-fab vertical="bottom" horizontal="center">
      <ion-fab-button router-link="/AddCategory">
        <ion-icon :icon="add"></ion-icon>
      </ion-fab-button>
    </ion-fab>
  </ion-page>
</template>

<script>
import Categories from "../services/categories";
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
  IonRadio,
  IonRadioGroup,
} from "@ionic/vue";
import { cashOutline, add } from "ionicons/icons";

export default defineComponent({
  name: "CategoriesPage",
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
    IonRadio,
    IonRadioGroup,
  },
  updated() {
    Store.get().then((response) => {
      Categories.list(response).then((response) => {
        this.categories = response.data;
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
      categories: [],
      select: {
        type: "",
      },
    };
  },
  methods: {
    Filter() {
      Store.get().then((response) => {
        if (this.select.type == "") {
          Categories.list(response).then((response) => {
            this.categories = response.data;
          });
        } else {
          Categories.listByType(this.select.type, response).then((response) => {
            this.categories = response.data;
          });
        }
      });
    },

    DeleteCategory(CategoryId) {
      Store.get().then((response) => {
        Categories.delete(CategoryId, response).then((response) => {
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
ion-radio-group {
  display: flex;
}
</style>