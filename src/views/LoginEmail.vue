<template>
  <ion-page>
    <ion-header class="ion-no-border">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/login"></ion-back-button>
        </ion-buttons>
        <ion-title>Login</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <div>
        <ion-img src="assets/icon/favicon.png"></ion-img>
        <h1>
          Bem vindo <br />
          novamente!
        </h1>
        <ion-item>
          <ion-icon slot="start" :icon="mail"></ion-icon>
          <ion-label position="floating">E-Mail</ion-label>
          <ion-input></ion-input>
        </ion-item>

        <ion-item>
          <ion-icon slot="start" :icon="key"></ion-icon>
          <ion-label position="floating">Senha</ion-label>
          <ion-input></ion-input>
        </ion-item>

        <ion-button v-on:click="onClick()">Entrar</ion-button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonButton,
  IonPage,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonTitle,
  IonItem,
  IonLabel,
  IonInput,
  IonContent,
  IonIcon,
  IonImg,
} from "@ionic/vue";
import { defineComponent } from "vue";

import { mail, key } from "ionicons/icons";

export default defineComponent({
  name: "Register",
  components: {
    IonButton,
    IonPage,
    IonHeader,
    IonToolbar,
    IonButtons,
    IonBackButton,
    IonTitle,
    IonItem,
    IonLabel,
    IonInput,
    IonContent,
    IonIcon,
    IonImg,
  },
  setup() {
    return {
      mail,
      key,
    };
  },
});
</script>

<style scoped>
ion-content div {
  margin: 0;
  text-align: center;
  padding: 10vw;
}

ion-button {
  font-size: 4vw;
  font-weight: bold;
  width: 100%;
  height: 10vw;
  --border-radius: 10px;
  margin-top: 6vw;
}

ion-toolbar {
  --background: none;
}

ion-item {
  margin-bottom: 2vw;
  border-radius: 10px;
}

ion-icon {
  padding-top: 4px;
}

ion-img {
  height: 20vw;
}

h1 {
  font-weight: bold;
  font-size: 5vw;
  margin-bottom: 7vw;
}
</style>