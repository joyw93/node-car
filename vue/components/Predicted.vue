<template>
  <div>
    <v-divider></v-divider>
    <v-row class="vrow" justify="center">
      <v-col cols="12" sm="12" md="5" lg="5">
        <div id="text1">조회하신</div>
        <div id="text2">{{ info.brand }} {{ info.model }}</div>
        <div id="text3">차량 정보입니다.</div>
      </v-col>
      <v-col cols="12" sm="12" md="7" lg="7">
        <v-row>
          <v-col cols="12" sm="7" md="7" lg="6">
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
            <a class="span" @click="specInfo"
              >제원정보<v-icon>mdi-chevron-right</v-icon>
            </a>
            &nbsp;
            <a class="span" @click="brandInfo"
              >브랜드정보<v-icon>mdi-chevron-right</v-icon></a
            >
          </v-col>
          <v-col cols="12" sm="5" md="5" lg="6">
            <img
              :src="
                require(`@/static/images/car/${info.brand}/${info.model}.jpg`)
              "
              width="288"
            />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-divider></v-divider>
    <v-row class="vrow" justify="center">
      <v-col cols="6" sm="6" md="6" lg="4">
        <ResidualChart />
      </v-col>
      <v-col cols="6" sm="6" md="6" lg="4">
        <BubbleChart />
      </v-col>
    </v-row>
    <v-divider></v-divider>
  </div>
</template>

<script>
import Chart from "~/components/chart/Chart.vue";
import ResidualChart from "~/components/chart/ResidualChart.vue";
import BubbleChart from "~/components/chart/BubbleChart.vue";
export default {
  components: {
    Chart,
    ResidualChart,
    BubbleChart,
  },
  data() {
    return {};
  },
  methods: {
    brandInfo() {
      alert("준비중입니다.");
    },
    specInfo() {
      alert("준비중입니다.");
    },
  },
  computed: {
    info() {
      return this.$store.state.predict.info;
    },
    price() {
      return this.$store.state.predict.price;
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
.vrow {
  margin-left: 30px;
  margin-right: 30px;
  margin-top: 100px;
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
  margin-left: 30px;
  margin-right: 30px;
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
