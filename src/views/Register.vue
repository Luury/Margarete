<template>
  <ion-page>
    <ion-header class="ion-no-border">
      <ion-toolbar>
        <ion-buttons>
          <ion-back-button default-href="/welcome"></ion-back-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <div class="content">
      <ion-img src="assets/icon/favicon.png"></ion-img>
      <h1>Crie sua conta em poucos passos</h1>
      <h2>
        Nós já ajudamos milhares de pessoas a alcançarem seu <br />
        equilíbrio financeiro, agora é a sua vez! Bora lá?
      </h2>

      <ion-button v-on:click="onClick()"> Criar com Facebook </ion-button>

      <ion-button v-on:click="onClick()"> Criar com Google </ion-button>

      <ion-button router-link="/register/email"> Criar com E-mail </ion-button>

      <ion-button id="loginButton" href="/Login">
        Já tenho conta
      </ion-button>
    </div>
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
  IonImg,
} from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "Register",
  components: {
    IonButton,
    IonPage,
    IonHeader,
    IonToolbar,
    IonButtons,
    IonBackButton,
    IonImg,
  },
});
</script>

<style scoped>
.content {
  margin: 0;
  position: absolute;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  text-align: center;
}

ion-img {
  height: 20vw;
}

h1 {
  font-weight: bold;
  font-size: 5vw;
}

h2 {
  font-size: 3vw;
  color: var(--ion-color-medium);
  margin-bottom: 5vw;
}

ion-button {
  font-size: 4vw;
  font-weight: bold;
  width: 80vw;
  height: 10vw;
  --border-radius: 10px;
}

#loginButton {
  margin-top: 8vw;
  font-size: 3vw;
  --background: var(--ion-background-color);
  --box-shadow: none;
}

ion-toolbar {
  --background: none;
}
</style>