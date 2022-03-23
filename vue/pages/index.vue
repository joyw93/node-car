<template>
  <div>
    <Carousel />
    <SelectInfo />
  </div>
</template>

<script>
import SelectInfo from "~/components/SelectInfo.vue";
import Carousel from "~/components/Carousel.vue";

export default {
  components: {
    SelectInfo,
    Carousel,
  },
  data() {
    return {
      name: "nuxt",
    };
  },
};
</script>

<style></style>
