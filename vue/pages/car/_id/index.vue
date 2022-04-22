<template>
  <v-container>
    <v-row>
      <v-col>
        <v-img :src="car.images.split(',')[0]" width="350"></v-img>
      </v-col>
      <v-col cols="12" sm="7" md="7" lg="6">
        <div id="brand">
          {{ car.brand }}<span id="model">{{ car.model }}</span>
        </div>

        <p class="muted">
          {{ car.age }}년식 &nbsp;|&nbsp; {{ car.odo }}km &nbsp;|&nbsp;
          {{ car.fuel }}
        </p>
        <p>
          <span>판매가격 &nbsp; </span>
          <strong id="price">1,234만원</strong>
        </p>
        <a class="span" @click="specInfo"
          >제원정보<v-icon>mdi-chevron-right</v-icon>
        </a>
        &nbsp;
        <a class="span" @click="brandInfo"
          >브랜드정보<v-icon>mdi-chevron-right</v-icon></a
        >
      </v-col>
    </v-row>
    <v-divider />
    <h1>NODECAR 국민시세</h1>
    <v-row>
      <v-col>
        시세정보
      </v-col>
      <v-col>
        신차 가격대비 잔존율
      </v-col>
      <v-col>
        시세예측 그래프
      </v-col>
    </v-row>
    
    <v-divider />
  </v-container>
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

<style scoped>
.vrow {
  margin-left: 30px;
  margin-right: 30px;
  margin-top: 100px;
  margin-bottom: 100px;
}

.muted {
  margin-top: 20px;
  color: #757575;
}

.span {
  color: #0d47a1;
}

.v-divider {
  margin-top: 80px;
  
}

#text1 {
  font-size: 45px;
  color: #2196f3;
}

#text2 {
  font-size: 45px;
  font-weight: bold;
}

#text3 {
  font-size: 45px;
  color: #757575;
}

#brand {
  font-size: 17px;
  font-weight: bold;
}

#model {
  font-size: 25px;
  font-weight: bold;
}

#price {
  font-size: 40px;
  color: #2196f3;
}
</style>
