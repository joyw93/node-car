<template>
  <v-carousel
    class="carousel"
    cycle
    height="300"
    hide-delimiter-background
    show-arrows-on-hover
  >
    <item1 />
    <item2 />
  </v-carousel>
</template>

<script>
import item1 from "~/components/CarouselItem/item1";
import item2 from "~/components/CarouselItem/item2";
export default {
  components: {
    item1,
    item2,
  },
  data() {
    return {};
  },
};
</script>

<style scoped></style>
