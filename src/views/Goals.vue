<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/home"></ion-back-button>
        </ion-buttons>
        <ion-title>Metas</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-list>
        <ion-item-sliding
          v-for="goal in goals"
          :key="goal.id"
        >
          <ion-item>
            <ion-icon :icon="homeOutline"></ion-icon>
            <ion-label>
              <h2>{{ goal.description }}</h2>
              <h3>{{ goal.value_start }}</h3>
              <h3>{{ goal.value_end }}</h3>
              <h4>{{ goal.date_start }}</h4>
              <h4>{{ goal.date_end }}</h4>
              
            </ion-label>
          </ion-item>

          <ion-item-options side="end">
            <ion-item-option :router-link="`/EditGoal/${goal.id}`"
              >Editar</ion-item-option
            >
            <ion-item-option
              color="danger"
              @click="DeleteGoal(goal.id)"
              >Excluir</ion-item-option
            >
          </ion-item-options>
        </ion-item-sliding>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script>
import Goals from "../services/goals";
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
} from "@ionic/vue";
import { homeOutline } from "ionicons/icons";

export default defineComponent({
  name: "GoalPage",
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
  },
  updated() {
    Store.get().then((response) => {
      console.log(response)
      Goals.list(response).then((response) => {
        console.log(response)
        this.goals = response.data;
      });
    });
  },
  setup() {
    return {
      homeOutline,
    };
  },
  data() {
    return {
      goals: [],
    };
  },
  methods: {
    DeleteGoal(GoalId) {
      Store.get().then((response) => {
        Goals.delete(GoalId, response).then((response) => {
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