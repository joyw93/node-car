<template>
  <v-container>
    <div class="header">
      <span>홈</span>
      <v-icon>mdi-chevron-right</v-icon>
      <span>내차사기</span>
    </div>
    <v-row>
      <v-col cols="12" sm="7" md="6" lg="6">
        <v-img :src="car.images.split(',')[0]" width="500"></v-img>
      </v-col>
      <v-col cols="12" sm="7" md="6" lg="6">
        <img
          :src="require(`@/static/images/logo/${car.brand}.png`)"
          width="42"
          height="30"
        />
        <div id="brand">
          {{ car.brand }}<span id="model">{{ car.model }}</span>
        </div>
        <p :style="{ float: 'right' }">
          <span :style="{ marginRight: '20px' }">판매가격 &nbsp; </span>
          <strong id="price">{{ car.price | comma }}만원</strong>
        </p>
        <v-divider />
        <div>
          <span class="detail">
            {{ car.age }}년식 &nbsp;|&nbsp; {{ car.odo | comma }} km
            &nbsp;|&nbsp; {{ car.fuel }} &nbsp;|&nbsp;
            {{ car.regions }} &nbsp;|&nbsp;
            {{ car.color }}
          </span>
        </div>

        <div class="history" :style="{ marginTop: '120px' }">
          <span class="history-icon"
            ><v-icon size="40" color="primary"
              >mdi-file-find-outline</v-icon
            ></span
          >
          <span class="history-icon"
            ><v-icon size="40" color="primary">mdi-hammer-wrench</v-icon></span
          >
          <span class="history-icon"
            ><v-icon size="40" color="primary">mdi-car-hatchback</v-icon></span
          >
        </div>
        <div class="history">
          <span class="history-icon">성능점검</span>
          <span class="history-icon">보험이력</span>
          <span class="history-icon">기본정보</span>
        </div>
      </v-col>
    </v-row>
    <v-divider />
    <div id="report-title">시세 리포트</div>
    <v-row>
      <v-col cols="12" sm="8" md="4" lg="4">
        <h3>시세정보</h3>
        <div id="price-text">시세안전구간</div>
        <h2 id="price-range">
          {{ priceMin | comma }} ~ {{ priceMax | comma }}만원
        </h2>
        <PriceRange :predictedPrice="predictedPrice" :price="price" />
      </v-col>
      <v-col cols="12" sm="8" md="4" lg="4">
        <h3>신차 가격대비 잔존율</h3>
        <PriceRemain
          :predictedPrice="predictedPrice"
          :price="price"
          :age="age"
        />
      </v-col>
      <v-col cols="12" sm="8" md="4" lg="4">
        <div>
          <h3 :style="{ display: 'inline-block' }">시세예측 그래프</h3>
          <span :style="{ float: 'right' }">[단위 : 만원]</span>
        </div>
        <div id="predict-text">판매가 기준 감가 예측 그래프입니다.</div>
        <PricePredict :predictedPrice="predictedPrice" :price="price" />
      </v-col>
    </v-row>
    <v-divider />
  </v-container>
</template>

<script>
import PriceRange from "./chart/PriceRange.vue";
import PriceRemain from "./chart/PriceRemain.vue";
import PricePredict from "./chart/PricePredict.vue";

export default {
  filters: {
    comma(val) {
      return String(val).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
  },
  data() {
    return {
      
    };
  },

  computed: {
    car() {
      return this.$store.state.buy_car.car;
    },
    predictedPrice() {
      return this.car.predictedPrice;
    },
    price() {
      return this.car.price;
    },
    age() {
      return this.car.age;
    },
    priceMin() {
      return parseInt(this.predictedPrice * 0.95);
    },
    priceMax() {
      return parseInt(this.predictedPrice * 1.05);
    },
  },

  components: {
    PriceRange,
    PriceRemain,
    PricePredict,
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

.watched {
  float: left;
  margin-top: 20px;
  color: #757575;
}

.detail {
  float: right;
  margin-top: 20px;
  color: #757575;
}

.span {
  color: #0d47a1;
}

.v-divider {
  margin-top: 80px;
}

.header {
  font-size: 14px;
  margin-top: 50px;
  margin-bottom: 50px;
}

.history {
  display: flex;
  margin-top: 20px;
}

.history-icon {
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

#brand {
  font-size: 35px;
  font-weight: bold;
}

#model {
  font-size: 35px;
  font-weight: bold;
  margin-left: 10px;
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

#history-text {
  font-weight: bold;
  color: #2196f3;
  font-size: 26px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
