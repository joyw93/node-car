<template>
  <div>
    <!-- <div class="badge">
      <span id="badge"
        >시세안심지수&nbsp;<span
          :style="{ fontSize: '17px', fontWeight: 'bolder', color: '#1565C0' }"
          >적정</span
        >&nbsp;
        <v-tooltip right>
          <template v-slot:activator="{ on, attrs }">
            <v-icon v-bind="attrs" v-on="on" id="tooltip-range"
              >mdi-help-circle</v-icon
            >
          </template>
          <div :style="{ padding: '10px' }">
            <div>시세안심지수란?</div>
            <div>인공지능이 산출한 중고차</div>
            <div>시세 가격에 근접할수록</div>
            <div>시세안심지수가 높습니다.</div>
          </div>
        </v-tooltip>
      </span>
    </div> -->
    <div class="container">
      <span class="head"></span>
      <span class="body"></span>
      <span class="tail"></span>
    </div>

    <div class="price-text">
      <span class="price-item">{{ parseInt(price * 0.4) | comma }}</span>
      <span class="price-item">{{ parseInt(price * 0.7) | comma }}</span>
      <span class="price-item">{{ parseInt(price * 1) | comma }}</span>
      <span class="price-item">{{ parseInt(price * 1.3) | comma }}</span>
      <span class="price-item">{{ parseInt(price * 1.6) | comma }}</span>
    </div>
    <div id="text-under">시세는 인공지능시스템으로 산출됩니다.</div>
  </div>
</template>

<script>
export default {
  filters: {
    comma(val) {
      return String(val).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
  },
  props: {
    price: Number,
  },
};
</script>
<style scoped>
.price-item {
  width: 20%;
  text-align: center;
}

.badge {
  margin-top: 25px;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container {
  display: flex;
}

.price-text {
  display: flex;
}

.head {
  height: 4px;
  margin-top: 5px;
  background: #e0e0e0;
  line-height: 0.2em;
  flex-grow: 1;
}

.body {
  height: 4px;
  margin-top: 5px;
  background: #2196f3;
  line-height: 0.2em;
  flex-grow: 2;
}

.tail {
  height: 4px;
  margin-top: 5px;
  background: #e0e0e0;
  line-height: 0.2em;
  flex-grow: 1;
}

#badge {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #bdbdbd;
  height: 40px;
  padding-left: 30px;
  padding-right: 30px;
  border-radius: 30px;
}
#tooltip-range {
  color: #bdbdbd;
}

#text-under {
  font-size: 14px;
  margin-top: 50px;
  text-align: center;
  font-weight: bold;
  color: #90a4ae;
}
</style>
