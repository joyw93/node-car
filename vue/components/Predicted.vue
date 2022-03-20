<template>
  <v-row class="mt-5" justify="center">
    <v-col cols="4">
      <h1>{{ info.brand }} {{ info.model }}</h1>
      <h1>차량 정보입니다.</h1>
    </v-col>
    <v-col cols="7">
      <h1 class="font-weight-bold">
        {{ info.brand }} {{ info.model }}
        <span class="muted">조회 결과입니다.</span>
      </h1>
      <img
        :src="require(`@/static/images/car/${info.brand}/${info.model}.jpg`)"
        width="450"
        height="300"
      />
      <p class="muted">{{ info.age }} | {{ info.odo }}km | {{ info.fuel }}</p>
      <p>
        <span>예측가격 &nbsp; </span>
        <strong id="price">{{ price | comma }}만원</strong>
      </p>
    </v-col>
  </v-row>
</template>
<script>
export default {
  data() {
    return {};
  },
  computed: {
    info() {
      return this.$store.state.cars.info;
    },
    price() {
      return this.$store.state.cars.price;
    },
  },
  filters: {
    comma(val) {
      return String(val).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
  },
};
</script>

<style scoped>
.muted {
  color: #757575;
}

#price {
  font-size: 40px;
  color: #2196f3;
}
</style>
