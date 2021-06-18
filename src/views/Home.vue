<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Home</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <ion-label>Olá {{ this.user.username }}, bom dia!</ion-label>

      <ion-item>
        <ion-label position="floating">Saldo Geral</ion-label>
        <ion-input v-model="resume.balance" type="number"> </ion-input>
        <ion-note slot="end">{{ resume.balanceAmount }}</ion-note>
      </ion-item>

      <ion-item>
        <ion-label position="floating" color="success">Receitas</ion-label>
        <ion-input v-model="resume.revenue" type="number"> </ion-input>
        <ion-note slot="end" color="success">{{
          resume.revenueAmount
        }}</ion-note>
      </ion-item>

      <ion-item>
        <ion-label position="floating" color="danger">Despesas</ion-label>
        <ion-input v-model="resume.expense" type="number"> </ion-input>
        <ion-note slot="end" color="danger">{{
          resume.expenseAmount
        }}</ion-note>
      </ion-item>

      <ion-item>
        <ion-label position="floating" color="warning">Investimentos</ion-label>
        <ion-input v-model="resume.investment" type="number"> </ion-input>
        <ion-note slot="end" color="warning">{{
          resume.investmentAmount
        }}</ion-note>
      </ion-item>

      <ion-label>Resumo de Contas:</ion-label>

      <ion-item v-for="account in accounts" :key="account.id">
        <ion-label>
          <h2>{{ account.description }}</h2>

          <ion-item>
            <ion-label position="floating">Saldo Geral</ion-label>
            <ion-input v-model="account.balance" type="number"> </ion-input>
            <ion-note slot="end">{{ account.balanceAmount }}</ion-note>
          </ion-item>

          <ion-item>
            <ion-label position="floating" color="success">Receitas</ion-label>
            <ion-input v-model="account.revenue" type="number"> </ion-input>
            <ion-note slot="end" color="success">{{
              account.revenueAmount
            }}</ion-note>
          </ion-item>

          <ion-item>
            <ion-label position="floating" color="danger">Despesas</ion-label>
            <ion-input v-model="account.expense" type="number"> </ion-input>
            <ion-note slot="end" color="danger">{{
              account.expenseAmount
            }}</ion-note>
          </ion-item>

          <ion-item>
            <ion-label position="floating" color="warning"
              >Investimentos</ion-label
            >
            <ion-input v-model="account.investment" type="number"> </ion-input>
            <ion-note slot="end" color="warning">{{
              account.investmentAmount
            }}</ion-note>
          </ion-item>
        </ion-label>
      </ion-item>

      <ion-label>Resumo de Metas:</ion-label>
      <ion-item v-for="goal in goals" :key="goal.id">
        <ion-label>
          <h3>{{ goal.description }}</h3>

          <ion-item>
            <h2>R${{ goal.investment }} / R${{ goal.value }}</h2>
            <ion-note slot="end" color="warning">{{goal.percentagemTrunc}}%</ion-note>
          </ion-item>
          <ion-progress-bar :value="goal.percentage"></ion-progress-bar>
        </ion-label>
      </ion-item>

    <ion-label>Resumo dos Orçamentos:</ion-label>
      <ion-item v-for="budget in budgets" :key="budget.id">
        <ion-label>
          <h3>{{ budget.description }}</h3>
          <ion-item>
            <h2>R${{ budget.budgetAmount }} / R${{ budget.value }}</h2>
          <ion-note slot="end" color="warning">{{ budget.percentagemTrunc }}%</ion-note>
          </ion-item>
          <ion-progress-bar :value="budget.percentage"></ion-progress-bar>
        </ion-label>
      </ion-item>

    </ion-content>
  </ion-page>
</template>

<script>
import Home from "../services/home";
import User from "../services/user";
import Accounts from "../services/accounts";
import Goals from "../services/goals";
import Budgets from "../services/budgets";
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
  IonProgressBar,
} from "@ionic/vue";
import { defineComponent } from "vue";

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
    IonProgressBar,
  },
  mounted() {
    Store.get().then((response) => {
      Home.resume(response).then((response) => {
        this.resume = response.data;
      });
      User.info(response).then((response) => {
        this.user = response.data;
      });
      Accounts.list(response).then((response) => {
        this.accounts = response.data;
      });
      Goals.list(response).then((response) => {
        this.goals = response.data;
      });
      Budgets.list(response).then((response) => {
        this.budgets = response.data;
      });
      
    });
  },
  updated() {
    Store.get().then((response) => {
      Home.resume(response).then((response) => {
        this.resume = response.data;
      });
      User.info(response).then((response) => {
        this.user = response.data;
      });
      Accounts.list(response).then((response) => {
        this.accounts = response.data;
      });
      Goals.list(response).then((response) => {
        this.goals = response.data;
      });
      Budgets.list(response).then((response) => {
        this.budgets = response.data;
      });
    });
  },
  data() {
    return {
      resume: [],
      user: [],
      accounts: [],
      goals: [],
      budgets: [],
    };
  },
});
</script>