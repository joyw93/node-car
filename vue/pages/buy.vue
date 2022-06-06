<template>
  <div>
    <Carousel />
    <div id="wrap">
      <div id="side"><SideNavigation /></div>
      <div id="main">
        <Tags class="tag" />
        <v-divider class="divider" />
        <MainComponent />
      </div>
    </div>
  </div>
</template>

<script>
import SideNavigation from "~/components/buy/SideNavigation.vue";
import MainComponent from "~/components/buy/Content.vue";
import Carousel from "~/components/base/Carousel.vue";
import Tags from "~/components/buy/Tags.vue";

export default {
  components: {
    SideNavigation,
    MainComponent,
    Carousel,
    Tags,
  },
  created() {
    this.$store.dispatch("buy_car/loadAllCars");
  },

  data() {
    return {
      page: 1,
    };
  },
};
</script>

<style scoped>
.tag {
  height: 30px;
  text-align: right;
  margin-right: 20px;
  margin-top: 20px;
}

.main-component {
  display: block;
}

.divider {
  margin-right: 20px;
  margin-left: 20px;
  margin-top: 18px;
  margin-bottom: 20px;
}

#wrap {
  margin-top: 80px;
  display: flex;
  height: 100%;
  flex-direction: row;
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
  flex: 1;
  overflow: auto;
}
</style>
