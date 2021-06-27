<template>
    <ion-page>    
        <ion-header>
            <ion-toolbar>
                <ion-buttons slot="start">
                <ion-back-button default-href="/more"></ion-back-button>
                </ion-buttons>
                <ion-title>Perguntas Frequentes</ion-title>
            </ion-toolbar>
            </ion-header>
            
            <ion-content>
                <ion-card   v-for="question in questions" :key="question.id">
                    <ion-item class="question" button @click="showAnswer(question.id-1)">
                        <ion-label class="ion-text-wrap"> {{question.question}} </ion-label>
                    </ion-item>

                    <ion-item lines="none"  class="answer" v-if="question.state === true">
                        <ion-label class="ion-text-wrap"> {{question.answer}} </ion-label>         
                    </ion-item>

                </ion-card>

            </ion-content>
        </ion-page>
</template>

<script >
import Faq from '../services/faq'
import Store from "../store/index";

import {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonBackButton,
    IonButtons,
    IonContent,
    IonItem,
    IonLabel,
    IonCard,
    IonPage

}from '@ionic/vue'

import { defineComponent } from 'vue';

export default defineComponent({
    name:'FaqPage',
    components:{
        IonHeader,
        IonToolbar,
        IonTitle,
        IonBackButton,
        IonButtons,
        IonContent,
        IonItem,
        IonLabel,
        IonCard,
        IonPage
    },
    data(){
        return{
            clicaste:false,
            questions:[]

        }
    },
    mounted(){
        Store.get().then((response) => {
            Faq.faq(response).then((response) => {
                this.questions = response.data;
            });
        });
    },
    methods:{
        showAnswer(id){
            this.questions[id].state = !this.questions[id].state;
            return this.questions[id].state
        }
    }
})

</script>

<style scoped>
.question{
    --color: var(--ion-color-primary);
}
ion-card{
    margin: 5px 15px 5px 15px;
}

</style>

