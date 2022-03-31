<template>
  <v-form ref="form" v-model="valid" @submit.prevent="onSubmitForm">
    <v-row justify="center">
      <v-col cols="12" sm="9" md="9" lg="9">
        <h2 class="header">제조사</h2>
        <v-chip-group
          v-model="brand"
          column
          mandatory
          active-class="primary--text"
        >
          <v-chip
            outlined
            v-for="_brand in Object.keys(models)"
            :key="_brand"
            :value="_brand"
          >
            <img
              :src="require(`@/static/images/logo/${_brand}.png`)"
              width="42"
            />
            &nbsp;
            {{ _brand }}
          </v-chip>
        </v-chip-group>
      </v-col>
      <v-col cols="12" sm="9" md="9" lg="9">
        <h2 class="header">모델</h2>
        <v-item-group v-model="model" active-class="primary">
          <v-container>
            <v-row>
              <v-col
                cols="12"
                md="4"
                sm="6"
                xs="8"
                v-for="_model in models[brand]"
                :key="_model"
              >
                <v-item
                  class="card"
                  v-slot="{ active, toggle }"
                  :value="_model"
                >
                  <v-hover v-slot="{ hover }">
                    <v-card
                      :elevation="hover ? 12 : 2"
                      :class="{ 'on-hover': hover }"
                      id="card"
                      @click="toggle"
                    >
                      <div>
                        <div>
                          <img
                            :src="
                              require(`@/static/images/car/${brand}/${_model}.jpg`)
                            "
                            width="150"
                          />
                        </div>
                        <div
                          id="text"
                          class="card"
                          :class="{ 'card-selected': active }"
                        >
                          {{ _model }}
                        </div>
                      </div>
                      <v-scroll-y-transition>
                        <div v-if="active" class="card-selected"></div>
                      </v-scroll-y-transition>
                    </v-card>
                  </v-hover>
                </v-item>
              </v-col>
            </v-row>
          </v-container>
        </v-item-group>
      </v-col>
      <v-col cols="9">
        <v-row>
          <v-col cols="12" sm="12" md="6">
            <h2 class="header">주행거리</h2>
            <v-text-field
              class="input"
              :rules="odoRules"
              v-model="odo"
              label="주행거리를 입력하세요"
              solo
              suffix="km"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="12" md="6">
            <h2 class="header">연식</h2>
            <v-select
              class="input"
              :rules="ageRules"
              v-model="age"
              :items="years"
              label="연식을 선택하세요"
              solo
            ></v-select>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="9">
        <v-row>
          <v-col cols="12" sm="12" md="6">
            <h2 class="header">색상</h2>
            <div class="color-select">
              <v-color-picker
                class="color-picker"
                v-model="color"
                swatches-max-height="100"
                :swatches="swatches"
                show-swatches
                hide-inputs
                hide-canvas
                hide-sliders
              >
              </v-color-picker>
            </div>
          </v-col>
          <v-col cols="12" sm="12" md="6">
            <h2 class="header">연료타입</h2>
            <v-select
              class="input"
              :rules="fuelRules"
              v-model="fuel"
              :items="fuels"
              label="연료종류를 선택하세요"
              solo
            ></v-select>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="9">
        <v-btn
          id="submit-button"
          @click="dialog = false"
          type="submit"
          x-large
          color="primary"
        >
          시세확인
        </v-btn>
        <v-divider class="divider"></v-divider>
      </v-col>
    </v-row>
  </v-form>
</template>

<script>
export default {
  computed: {
    info() {
      return this.$store.state.predict.price;
    },
  },
  data: () => ({
    valid: false,
    dialog: false,
    brand: "",
    model: "",
    odo: "",
    age: "",
    fuel: "",
    color: "#000000",
    odoRules: [(v) => !!v || "주행거리를 입력하세요."],
    ageRules: [(v) => !!v || "연식을 선택하세요."],
    fuelRules: [(v) => !!v || "연료 타입을 선택하세요."],
    models: {
      현대: ["그랜저", "쏘나타", "아반떼"],
      기아: ["K3", "K5", "K7"],
      르노삼성: ["SM3", "SM5", "SM6", "SM7"],
      BMW: ["3시리즈", "5시리즈", "7시리즈"],
      벤츠: ["C클래스", "E클래스", "S클래스"],
      아우디: ["A4", "A6", "A7"],
    },
    years: ["2022", "2021", "2020", "2019"],
    fuels: ["가솔린", "디젤", "LPG", "하이브리드", "전기"],
    swatches: [
      ["#000000", "#2196F3"],
      ["#FFFFFF", "#795548"],
      ["#9E9E9E", "#4CAF50"],
      ["#F44336", "#FFEB3B"],
    ],
    transparent: "rgba(255, 255, 255, 0)",
  }),
  watch: {
    info(value, oldvalue) {
      if (value) {
        this.$router.push({
          path: "/predicted",
        });
      }
    },
    odo(newValue) {
      const result = newValue
        .replace(/\D/g, "")
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      this.$nextTick(() => (this.odo = result));
    },
  },
  methods: {
    onSubmitForm() {
      let isValid = this.$refs.form.validate();
      let isModelSelected = this.model;
      if (!isModelSelected) {
        alert("차량 모델을 선택하세요");
      }
      if (isValid && isModelSelected) {
        this.$store
          .dispatch("predict/predictPrice", {
            brand: this.brand,
            model: this.model,
            age: this.age,
            odo: this.odo,
            color: this.color,
            fuel: this.fuel,
          })
          .then(() => {
            console.log("데이터 전송 성공");
          })
          .catch(() => {
            console.log("데이터 전송 실패");
          });
      } else {
        console.log("양식이 유효하지 않습니다.");
      }
    },
  },
};
</script>

<style scoped>
.header {
  margin-top: 30px;
  margin-bottom: 15px;
  color: #2196f3;
}
.v-card {
  transition: opacity 0.4s ease-in-out;
}

.card {
  display: flex;
  justify-content: center;
  align-items: center;
}

.card-selected {
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
}

.color-picker {
  border-style: solid;
  border-width: 1px;
  border-color: #e0e0e0;
  background-color: #f5f5f5;
}

.divider {
  margin-bottom: 25px;
  margin-top: 50px;
}

.input {
  max-width: 500px;
}

#text {
  margin-bottom: 15px;
}


#card {
  max-width: 400px;
}

#submit-button {

  margin-top: 20px;
  font-size: 13px;

}
</style>
