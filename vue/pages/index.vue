<template>
  <SelectBrand />
</template>

<script>
import SelectBrand from "~/components/SelectBrand.vue";

export default {
  components: {
    SelectBrand
  },
  data() {
    return {
      name: "nuxt",
    };
  },
};
</script>

<style>
</style>
