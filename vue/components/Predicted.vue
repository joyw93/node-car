<template>
  <div>
    <v-row class="mt-5" justify="center">
      <v-col cols="12" sm="12" md="4" lg="4">
        <div id="text1">조회하신</div>
        <div id="text2">{{ info.brand }} {{ info.model }}</div>
        <div id="text3">차량 정보입니다.</div>
      </v-col>
      <v-col cols="12" sm="12" md="8" lg="8">
        <v-row>
          <v-col cols="12" sm="5" md="5" lg="5">
            <div id="brand">{{ info.brand }}</div>
            <div id="model">{{ info.model }}</div>
            <p class="muted">
              {{ info.age }}년식 &nbsp;|&nbsp; {{ info.odo }}km &nbsp;|&nbsp;
              {{ info.fuel }}
            </p>
            <p>
              <span>예측가격 &nbsp; </span>
              <strong id="price">{{ price | comma }}만원</strong>
            </p>
            <span class="span"
              >제원정보<v-icon>mdi-chevron-right</v-icon>
            </span>
            &nbsp;
            <span class="span"
              >브랜드정보<v-icon>mdi-chevron-right</v-icon></span
            >
          </v-col>
          <v-col cols="12" sm="7" md="7" lg="7">
            <img
              :src="
                require(`@/static/images/car/${info.brand}/${info.model}.jpg`)
              "
              width="300"
              height="250"
            />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row class="mt-5" justify="center">
      <v-col cols="6" sm="6" md="6" lg="4">
        <Chart />
      </v-col>
      <v-col cols="6" sm="6" md="6" lg="4">
        <BubbleChart />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Chart from "~/components/chart/Chart.vue";
import BubbleChart from "~/components/chart/BubbleChart.vue";
export default {
  components: {
    Chart,
    BubbleChart,
  },
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
  margin-top: 20px;
  color: #757575;
}

.span {
  color: #0d47a1;
}

#text1 {
  font-size: 48px;
  color: #2196f3;
}

#text2 {
  font-size: 48px;
  font-weight: bold;
}

#text3 {
  font-size: 48px;
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
