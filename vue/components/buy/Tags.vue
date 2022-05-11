<template>
  <div>
    <v-chip
      class="chip"
      color="#EEEEEE"
      v-for="tag in tags"
      :key="tag"
      small
      label
      close
      @click:close="remove(tag)"
    >
      <span>{{ tag }}</span>
    </v-chip>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    };
  },
  methods: {
    remove(tag) {
      //this.$store.dispatch("buy_car/removeTag", tag);
      this.$nuxt.$emit("updateFiltCond", tag);
    },
  },
  computed: {
    tags() {
      return this.$store.state.buy_car.tags;
    },
  },
};
</script>

<style scoped>
.chip {
  margin-left: 6px;
}
</style>
