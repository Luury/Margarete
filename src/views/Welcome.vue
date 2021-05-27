<template>
 <ion-page>
   <ion-content>

  <ion-slides pager="true" :options="slideOpts">

    <ion-slide class="slide">
      <ion-img src="https://myrp.com.br/wp-content/uploads/2020/01/Icones-Controle-Financeiro-contas-a-pagar.png"></ion-img>
      <h1>Tudo na vida é uma <br> questão de equilíbrio!</h1>
      <h2>Acredite, quando o assunto é finanças <br> não é diferente</h2>
    </ion-slide>

    <ion-slide class="slide">
      <ion-img src="https://meuvista.com/wp-content/uploads/2020/03/Camada_x-1-768x573.png"> </ion-img>
      <h1>Criar prioridades ajuda <br> a ter clareza</h1>
      <h2>Não depende de quanto ganhamos, mas de como gastamos o <br> nosso rico dinheirinho.</h2>
    </ion-slide>

    <ion-slide class="slide">
      <ion-img src="https://i2.wp.com/desenvolvimentes.com.br/wp-content/uploads/2019/10/desenvolvimentes_mentoria_financeira.png"> </ion-img>
      <h1>Disso a gente <br> entende!</h1>
      <h2>Conte com a nossa inteligência financeira e aproveite a <br> facilidade de controlar todas as suas contas num só lugar!</h2>
    </ion-slide>

  </ion-slides>

    <ion-button id="loginButton" router-link="/login" >
      Login
    </ion-button>

    <ion-button id="registerButton" router-link="/Register" >
      Cadastrar
    </ion-button>
    
    </ion-content>
 </ion-page> 
</template>

<script>
import { IonSlides, IonSlide, IonButton, IonPage, IonContent, IonImg } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name:'Welcome',
  components: { IonSlides, IonSlide, IonButton, IonPage, IonContent, IonImg},
  setup() {
    const slideOpts = {
      initialSlide: 0,
      speed: 400
    };
    return { slideOpts }
  }
});
</script>

<style scoped>

ion-slides{
  height: 80%;
  max-height: 80%;
  position: relative; 
  top:50%;
  transform: translate(0,-50%); 
}

.slide {
  display: inline-block;
}

ion-img {
  height: 60%;
}

.slide h1 {
  font-weight: bold;
  text-align: center;
  font-size: 6vw;
}


.slide h2 {
  text-align: center;
  font-size: 3vw;
  margin-bottom: 15vw;
  color: var(--ion-color-medium);
}

ion-button{
  font-size: 4vw;
  font-weight: bold;
  width: 40vw;
  height: 10vw;
  --border-radius: 10px;
}

#loginButton{
   position:absolute;
   bottom:0;
   left:0;
   margin-left: 4vw;
   margin-bottom: 3vw;
  --background: var(--ion-background-color);
  --color: var(--ion-color-primary);
  --border-color: var(--ion-color-primary);
  --border-width: 1px;
  --border-style: solid;
}

#registerButton{
     position:absolute;
     bottom:0;
     right:0;
     margin-right: 4vw;
     margin-bottom: 3vw;
}

</style>