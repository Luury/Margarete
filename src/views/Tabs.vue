<template>
  <ion-page>
    <ion-tabs
      @ionTabsWillChange="beforeTabChange"
      @ionTabsDidChange="afterTabChange"
    >
      <ion-tab-bar>
        <ion-tab-button tab="Home" href="/home">
          <ion-icon :icon="homeOutline"></ion-icon>
          <ion-label>Início</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="Transactions" href="/transactions">
          <ion-icon :icon="listOutline"></ion-icon>
          <ion-label>Transações</ion-label>
        </ion-tab-button>

        <ion-tab-button tab=""> </ion-tab-button>

        <ion-tab-button tab="Goals" href="/goals">
          <ion-icon :icon="flagOutline"></ion-icon>
          <ion-label>Metas</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="More" href="/more">
          <ion-icon :icon="ellipsisHorizontalOutline"></ion-icon>
          <ion-label>Mais</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>

    <ion-fab vertical="bottom" horizontal="center">
      <ion-fab-button router-link="/Addtransaction">
        <ion-icon :icon="add"></ion-icon>
      </ion-fab-button>
    </ion-fab>
  </ion-page>
</template>

<script>
import { defineComponent } from "vue";
import {
  IonIcon,
  IonLabel,
  IonPage,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonFab,
  IonFabButton,
} from "@ionic/vue";
import {
  homeOutline,
  add,
  listOutline,
  ellipsisHorizontalOutline,
  flagOutline,
} from "ionicons/icons";

export default defineComponent({
  name: "Home",
  components: {
    IonIcon,
    IonLabel,
    IonPage,
    IonTabBar,
    IonTabButton,
    IonTabs,
    IonFab,
    IonFabButton,
  },
  setup() {
    const beforeTabChange = () => {
      // do something before tab change
    };
    const afterTabChange = () => {
      // do something after tab change
    };
    return {
      homeOutline,
      add,
      listOutline,
      beforeTabChange,
      afterTabChange,
      ellipsisHorizontalOutline,
      flagOutline,
    };
  },
});
</script>

<style scoped>
ion-label {
  font-size: 2vw;
}
</style>