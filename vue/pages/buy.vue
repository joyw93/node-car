<template>
  <div>
    <div>
      <Carousel />
      <div id="wrap">
        <div id="side"><SideNavigation /></div>
        <div id="main"><MainComponent /></div>
      </div>
    </div>
    <div class="pagination">
      <v-pagination
        v-model="page"
        :length="4"
        prev-icon="mdi-menu-left"
        next-icon="mdi-menu-right"
      ></v-pagination>
    </div>
  </div>
</template>

<script>
import SideNavigation from "~/components/buy/SideNavigation.vue";
import MainComponent from "~/components/buy/Content.vue";
import Carousel from "~/components/base/Carousel.vue";

export default {
  components: {
    SideNavigation,
    MainComponent,
    Carousel,
  },

  fetch({ store }) {
    store.dispatch("load_cars/loadAllCars");
  },

  data() {
    return {
      page: 1,
    };
  },
};
</script>

<style scoped>


#wrap {
  margin-top: 80px;
  display: flex;
}

#side {
  height: 100%;
  margin-top: 20px;
  margin-left: 20px;
  width: 280px;
  flex: none;
}

#main {
  margin-left: 50px;
  margin-right: 50px;
}
</style>
