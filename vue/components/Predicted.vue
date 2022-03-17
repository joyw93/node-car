<template>
  <v-row justify="center">
    <v-col cols="8">
    <h1 class="font-weight-bold">{{info.brand}} {{info.model}} <span class="grey--text">조회 결과입니다.</span></h1>
    <img :src='require(`@/static/images/car/${info.brand}/${info.model}.jpg`)' width="450" height="300"/>
    <p class="grey--text">{{info.age}} | {{info.odo}}km | {{info.fuel}}</p>
    <p>
      <span>예측가격 &nbsp; </span>
      <strong id="price">{{price}}만원</strong>
    </p>
    </v-col>
  </v-row>
</template>
<script>
export default {
  data() {
    return {
    }
  },
  computed: {
    info() {
      return this.$store.state.cars.info
    },
    price() {
      return this.$store.state.cars.price
    },
  },
  
}
</script>

<style scoped>
#price {
    font-size: 40px;
    color: #2196f3;
}

</style>