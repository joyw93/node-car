<template>
  <v-container>
    <v-row>
      <v-col>
        <v-img
          :src="require(`@/static/images/car-forsale/아우디S5.jpg`)"
          width="350"
        ></v-img>
      </v-col>
      <v-col cols="12" sm="7" md="7" lg="6">
        <div id="brand">아우디<span id="model">A6</span></div>

        <p class="muted">2019년식 &nbsp;|&nbsp; 3,400km &nbsp;|&nbsp; 가솔린</p>
        <p>
          <span>판매가격 &nbsp; </span>
          <strong id="price">1,234만원</strong>
        </p>
        <a class="span">제원정보<v-icon>mdi-chevron-right</v-icon> </a>
        &nbsp;
        <a class="span">브랜드정보<v-icon>mdi-chevron-right</v-icon></a>
      </v-col>
    </v-row>
    <v-divider />
    <h2 id="report-title">시세 리포트</h2>
    <v-row>
      <v-col>
        <h3>시세정보</h3>
        <div id="price-text">시세안전구간</div>
        <h2 id="price-range">4,463~4,807만원</h2>
        <PriceRange />
      </v-col>
      <v-col> <h3>신차 가격대비 잔존율</h3></v-col>
      <v-col>
        <h3>시세예측 그래프</h3>
      </v-col>
    </v-row>

    <v-divider />
  </v-container>
</template>

<script>
import PriceRange from "./car/_id/chart/PriceRange.vue";

export default {
  computed: {
    // car() {
    //   return this.$store.state.load_cars.car;
    // },
  },
  components: {
    PriceRange,
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

#brand {
  font-size: 17px;
  font-weight: bold;
}

#model {
  font-size: 25px;
  font-weight: bold;
  margin-left: 10px;
}

#price {
  font-size: 40px;
  color: #2196f3;
}

#report-title {
  margin-top: 60px;
  margin-bottom: 60px;
}

#price-text {
  margin-top: 15px;
  text-align: center;
}

#price-range {
  text-align: center;
  font-size: 30px;
  color: #2196f3;
}
</style>
