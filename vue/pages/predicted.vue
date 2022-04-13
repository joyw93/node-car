<template>
  <div>
    <Carousel />
    <Predicted />
  </div>
</template>

<script>
import Predicted from "~/components/predicted/Result.vue";
import Carousel from "~/components/base/Carousel.vue";
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
