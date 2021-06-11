<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button></ion-back-button>
        </ion-buttons>
        <ion-title>Nova Transação</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-item>
        <ion-radio-group v-model="transaction.type">
          <ion-item>
            <ion-label class="ion-margin-end" color="danger">Despesa</ion-label>
            <ion-radio value="1" @click="NewListCategory(1)"></ion-radio>
          </ion-item>

          <ion-item>
            <ion-label class="ion-margin-end" color="success">Receita</ion-label>
            <ion-radio value="2" @click="NewListCategory(2)"></ion-radio>
          </ion-item>

          <ion-item>
            <ion-label class="ion-margin-end" color="warning">Investimento</ion-label>
            <ion-radio value="3" @click="NewListCategory(3)"></ion-radio>
          </ion-item>
        </ion-radio-group>
      </ion-item>

      <ion-item v-if="transaction.type == 3">
        <ion-label position="floating">Meta</ion-label>
        <ion-select
          v-model="transaction.goal_id"
          ok-text="Okay"
          cancel-text="Dismiss"
        >
          <ion-select-option
            v-for="goal in goals"
            :key="goal.id"
            :value="goal.id"
            >{{ goal.description }}</ion-select-option
          >
        </ion-select>
      </ion-item>

      <ion-item>
        <ion-label position="floating">Conta</ion-label>
        <ion-select
          v-model="transaction.account_id"
          ok-text="Okay"
          cancel-text="Dismiss"
        >
          <ion-select-option
            v-for="account in accounts"
            :key="account.id"
            :value="account.id"
            >{{ account.description }}</ion-select-option
          >
        </ion-select>
      </ion-item>

      <ion-item>
        <ion-label position="floating">Descrição</ion-label>
        <ion-input v-model="transaction.description" type="text"></ion-input>
      </ion-item>

      <ion-item>
        <ion-label position="floating">Data</ion-label>
        <ion-datetime
          v-model="transaction.date"
          display-format="MM DD YY"
        ></ion-datetime>
      </ion-item>

      <ion-item>
        <ion-label position="floating">Categoria</ion-label>
        <ion-select
          v-model="transaction.category_id"
          ok-text="Okay"
          cancel-text="Dismiss"
        >
          <ion-select-option
            v-for="category  in categories"
            :key="category.id"
            :value="category.id"
            >{{ category.description }}</ion-select-option
          >
        </ion-select>
      </ion-item>

      <ion-item>
        <ion-label position="floating">Valor</ion-label>
        <ion-input v-model="transaction.value" type="number"></ion-input>
      </ion-item>
    </ion-content>

    <ion-fab vertical="bottom" horizontal="center">
      <ion-fab-button @click="AddTransaction()">
        <ion-icon :icon="checkmark"></ion-icon>
      </ion-fab-button>
    </ion-fab>
  </ion-page>
</template>

<script>
import Transactions from "../services/transactions";
import Store from "../store/index";
import Accounts from "../services/accounts";
import Categories from "../services/categories";
import Goals from "../services/goals";


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
  IonRadioGroup,
  IonRadio,
  IonSelectOption,
  IonSelect,
} from "@ionic/vue";

import { checkmark } from "ionicons/icons";

import { defineComponent } from "vue";


export default defineComponent({
  name: "AddTransaction",
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
    IonRadioGroup,
    IonRadio,
    IonSelectOption,
    IonSelect,
  },
  setup() {
    return {
      checkmark,
    };
  },
    updated() {
    Store.get().then((response) => {
      Accounts.list(response).then((response) => {
        this.accounts = response.data;
      });
      Categories.list(response).then((response) => {
        this.categories = response.data; 
      });
      Goals.list(response).then((response) => {
        this.goals = response.data;
      });
    });
  },
  data() {
    return {
      transaction: {
        type: "",
        account_id: "",
        goal_id: "",
        description: "",
        date: "",
        category_id: "",
        value: "",
      },
      accounts: [],
      categories: [],
      goals: [],
      newList: [],
    };
  },
  methods: {
    AddTransaction() {
      Store.get().then((response) => {
        Transactions.create(this.transaction, response).then((response) => {
          if (response.status == 200) {
            this.$router.push("/transactions");
          }
        });
      });
    },
    NewListCategory(value){
      Store.get().then((response) => {
            Categories.list(response).then((response) => {
              this.newList.splice(0, this.newList.length);
              for(let i = 0; i < response.data.length; i++){
                if(value === response.data[i].type){
                  this.newList.push(response.data[i])
                }
              }
              console.log(this.newList)
              return this.newList
            });
      });
    }
    
  },

});
</script>

<style scoped>
ion-radio-group {
  display: flex;
}
</style>