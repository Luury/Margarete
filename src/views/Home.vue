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
        <ion-input v-model="resume.balance" type="number"> </ion-input>
        <ion-note  slot="end">{{resume.balanceAmount}}</ion-note>
      </ion-item>
      
      <ion-item>
        <ion-label position="floating" color="success">Receitas</ion-label>
        <ion-input  v-model="resume.revenue" type="number"> </ion-input>
        <ion-note slot="end" color="success">{{resume.revenueAmount}}</ion-note>
      </ion-item>

      <ion-item>
        <ion-label position="floating" color="danger">Despesas</ion-label>
        <ion-input v-model="resume.expense" type="number"> </ion-input>
        <ion-note slot="end" color="danger">{{resume.expenseAmount}}</ion-note>
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
          this.resume.balance = response.data.balance + "";
          this.resume.revenue = response.data.revenue + "";
          this.resume.expense = response.data.expense + "";
          this.resume.balanceAmount = response.data.balanceAmount + "";
          this.resume.revenueAmount = response.data.revenueAmount + "";
          this.resume.expenseAmount = response.data.expenseAmount + "";
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
        balance: "",
        revenue: "",
        expense: "",
        balanceAmount: "",
        revenueAmount: "",
        expenseAmount: "",
      },
      user: {
        username: "",
      },
    };
  },
});
</script>