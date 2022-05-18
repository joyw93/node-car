<template>
  <v-container>
    <v-divider></v-divider>
    <div class="result">
      <div class="text-block">
        <div id="text1">조회하신</div>
        <div id="text2">{{ info.brand }} {{ info.model }}</div>
        <div id="text3">차량 정보입니다.</div>
      </div>
      <div class="info-block">
        <div class="info-text">
          <div id="model">{{ info.brand }} {{ info.model }}</div>
          <p class="muted">
            {{ info.age }}식 &nbsp;|&nbsp; {{ info.odo }}km &nbsp;|&nbsp;
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
        </div>
        <div class="info-img">
          <img
            :src="
              require(`@/static/images/car/${info.brand}/${info.model}.jpg`)
            "
            width="288"
          />
        </div>
      </div>
    </div>
    <v-divider></v-divider>
    <v-row class="vrow" justify="center">
      <!-- <div id="report-title">시세 리포트</div> -->
      <v-row>
        <v-col cols="12" sm="8" md="4" lg="4">
          <h3>시세정보</h3>
          <div id="price-text">시세예측구간</div>
          <h2 id="price-range">
            {{ parseInt(price * 0.95) | comma }} ~
            {{ parseInt(price * 1.05) | comma }}만원
          </h2>
          <PriceRange :price="price" />
        </v-col>
        <v-col cols="12" sm="8" md="4" lg="4">
          <h3>신차 가격대비 잔존율</h3>
          <PriceRemain :price="price" />
        </v-col>
        <v-col cols="12" sm="8" md="4" lg="4">
          <div>
            <h3 :style="{ display: 'inline-block' }">시세예측 그래프</h3>
            <span :style="{ float: 'right' }">[단위 : 만원]</span>
          </div>
          <div id="predict-text">판매가 기준 감가 예측 그래프입니다.</div>
          <PricePredict :price="price" />
        </v-col>
      </v-row>
    </v-row>
  </v-container>
</template>

<script>
import PricePredict from "~/components/predicted/chart/PricePredict.vue";
import PriceRange from "~/components/predicted/chart/PriceRange.vue";
import PriceRemain from "~/components/predicted/chart/PriceRemain.vue";
export default {
  components: {
    PricePredict,
    PriceRange,
    PriceRemain,
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
      return this.$store.state.predict_car.info;
    },
    price() {
      return this.$store.state.predict_car.price;
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
  clear: both;
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
  margin-bottom: 50px;
  clear: both;
}

.text-block {
  margin-right: 50px;
  margin-bottom: 30px;
  float: left;
}
.info-block {
  /* display: inline-block; */
  margin-bottom: 80px;
  float: right;
}

.info-text {
  margin-right: 25px;
  display: inline-block;
}

.info-img {
  display: inline-block;
}

#text1 {
  font-size: 42px;
  color: #2196f3;
}

#text2 {
  font-size: 42px;
  font-weight: bold;
}

#text3 {
  font-size: 42px;
  color: #757575;
}

#brand {
  font-size: 17px;
  font-weight: bold;
  vertical-align: middle;
}

#model {
  font-size: 25px;
  font-weight: bold;
}

#price {
  font-size: 40px;
  color: #2196f3;
}

#report-title {
  font-size: 25px;
  display: inline-block;
  margin-top: 70px;
  margin-bottom: 70px;
  background: linear-gradient(to top, #ffecb3 50%, transparent 40%);
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

#predict-text {
  color: #90a4ae;
  text-align: center;
  margin-top: 30px;
  margin-bottom: 10px;
}
</style>
