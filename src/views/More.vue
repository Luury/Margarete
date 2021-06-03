<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Mais Opções</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <ion-button router-link="/accounts" expand="block">Contas</ion-button>
      <ion-button router-link="/categories" expand="block">Categorias</ion-button>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { 
  IonContent, 
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton
} from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: {
    IonContent, 
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonButton
  }
});
</script>