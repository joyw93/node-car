<template>
  <div>
    <Carousel />
    <Predicted />
  </div>
</template>

<script>
import Predicted from "~/components/Predicted.vue";
import Carousel from "~/components/Carousel.vue";
export default {
  components: {
    Predicted,
    Carousel,
  },
  data() {
    return {};
  },
};
</script>

<style></style>
