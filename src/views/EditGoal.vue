<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button></ion-back-button>
        </ion-buttons>
        <ion-title>Nova Meta</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-item>
        <ion-label position="floating">Descrição</ion-label>
        <ion-input v-model="goal.description" type="text"></ion-input>
      </ion-item>

      <ion-item>
        <ion-label position="floating">Data de Início</ion-label>
        <ion-datetime
          v-model="goal.date_start"
          display-format="MM DD YY"
        ></ion-datetime>
      </ion-item>

      <ion-item>
        <ion-label position="floating">Data de Término</ion-label>
        <ion-datetime
          v-model="goal.date_end"
          display-format="MM DD YY"
        ></ion-datetime>
      </ion-item>

      <ion-item>
        <ion-label position="floating">Valor</ion-label>
        <ion-input v-model="goal.value" type="number"></ion-input>
      </ion-item>
    </ion-content>

    <ion-fab vertical="bottom" horizontal="center">
      <ion-fab-button @click="UpdateGoal()">
        <ion-icon :icon="checkmark"></ion-icon>
      </ion-fab-button>
    </ion-fab>
  </ion-page>
</template>

<script>
import Goals from "../services/goals";
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
  IonDatetime,
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
  },
  setup() {
    return {
      checkmark,
    };
  },
  mounted() {
    Store.get().then((response) => {
      Goals.goal(this.$route.params.id, response).then((response) => {
        this.goal.description = response.data.description + "";
        this.goal.date_start = response.data.date_start.replace("Z", "") + "";
        this.goal.date_end = response.data.date_end.replace("Z", "") + "";
        this.goal.value = response.data.value + "";
      });
    });
  },
  data() {
    return {
      goal: {
        description: "",
        date_start: "",
        date_end: "",
        value: "",
      },
    };
  },
  methods: {
    UpdateGoal() {
      Store.get().then((response) => {
        Goals.update(
          this.$route.params.id,
          this.goal,
          response
        ).then((response) => {
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