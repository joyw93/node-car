<template>
  <v-btn @click="top" fab dark large color="primary" fixed right bottom>
    <v-icon dark>mdi-chevron-up</v-icon>
  </v-btn>
</template>

<script>
export default {
  methods: {
    top() {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style></style>
