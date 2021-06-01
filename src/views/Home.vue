<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Home</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">

      <ion-label>Olá {{this.user.username}}, bom dia!</ion-label>
      
      <ion-item>
        <ion-label position="floating">Saldo Geral</ion-label>
        <ion-input v-model="resume.geral" type="number"> </ion-input>
        <ion-note  slot="end">{{resume.geralAmount}}</ion-note>
      </ion-item>
      
      <ion-item>
        <ion-label position="floating" color="success">Receitas</ion-label>
        <ion-input  v-model="resume.receita" type="number"> </ion-input>
        <ion-note slot="end" color="success">{{resume.receitaAmount}}</ion-note>
      </ion-item>

      <ion-item>
        <ion-label position="floating" color="danger">Despesas</ion-label>
        <ion-input v-model="resume.despesa" type="number"> </ion-input>
        <ion-note slot="end" color="danger">{{resume.despesaAmount}}</ion-note>
      </ion-item>

    </ion-content>
  </ion-page>
</template>

<script>
import Home from "../services/home";
import User from "../services/user";
import Store from "../store/index";

import { 
  IonContent, 
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonItem,
  IonLabel,
  IonInput,
  IonNote,
} from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: {
    IonContent, 
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonItem,
    IonLabel,
    IonInput,
    IonNote,
  },
  updated() {
    Store.get().then((response) => {
      Home.resume(response).then(
        (response) => {
          this.resume.geral = response.data.geral + "";
          this.resume.receita = response.data.receita + "";
          this.resume.despesa = response.data.despesa + "";
          this.resume.geralAmount = response.data.geralAmount + "";
          this.resume.receitaAmount = response.data.receitaAmount + "";
          this.resume.despesaAmount = response.data.despesaAmount + "";
        }
      );
      User.info(response).then(
        (response) => {
          this.user.username = response.data.username + "";
        }
      );
    });
  },
  data() {
    return {
      resume: {
        geral: "",
        receita: "",
        despesa: "",
        geralAmount: "",
        receitaAmount: "",
        despesaAmount: "",
      },
      user: {
        username: "",
      },
    };
  },
});
</script>