<template>
  <v-container>
    <v-row>
      <v-col v-for="car in allCars" :key="car" md="4" lg="3" sm="6" cols="12">
        <v-card class="card" min-width="200" max-width="350" @click="showDetail(car.id)">
          <v-img :src="car.images.split(',')[0]" width="350"></v-img>
          <v-chip class="badge" small label color="#3F51B5" text-color="white">
            실차주
          </v-chip>
          <v-card-title>{{ car.brand }} {{ car.model }} </v-card-title>
          <v-card-subtitle>
            <P>{{ car.age }}년식</P>
            <P>{{ car.odo }}km | {{ car.regions }}</P>
          </v-card-subtitle>
          <v-card-actions>
            <v-btn color="primary" text> 2,039만원 </v-btn>
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {

    };
  },
  methods: {
    showDetail(id) {
      this.$router.push({
        path: `/car/${id}`,
      });
    },
  },
  computed: {
    allCars() {
      return this.$store.state.load_cars.allCars;
    },
  },
};
</script>

<style scoped>
.card {
  border-radius: 20px;
}

.badge {
  margin-top:10px;
  margin-left: 10px;
  height: 20px;
}
</style>
