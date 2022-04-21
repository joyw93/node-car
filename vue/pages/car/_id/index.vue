<template>
  <div>
    
  </div>
</template>

<script>
export default {
  computed: {
    car() {
      return this.$store.state.load_cars.car;
    },
  },
  fetch({ store, params }) {
    return store.dispatch("load_cars/loadCar", params.id);
  },
};
</script>

<style></style>
