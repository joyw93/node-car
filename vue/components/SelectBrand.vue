<template>
  <v-form ref="form" v-model="valid" @submit.prevent="onSubmitForm">
    <v-row justify="center">
      <v-col cols="12" sm="8" md="8" lg="8">
        <h2 class="header">브랜드</h2>
        <v-chip-group v-model="current_brand" column mandatory active-class="primary--text">
          <v-chip v-for="brand in Object.keys(model_list)" :key="brand" :value="brand">
            {{ brand }}
          </v-chip>
        </v-chip-group>
      </v-col>
      <v-col cols="12" sm="8" md="8" lg="8">
        <h2 class="header">모델</h2>
        <v-chip-group v-model="current_model" column mandatory active-class="primary--text">
          <v-chip v-for="model in model_list[current_brand]" :key="model" :value="model">
            {{ model }}
          </v-chip>
        </v-chip-group>
      </v-col>
      <v-col cols="8">
        <v-row>
          <v-col cols="6">
            <h2 class="header">주행거리</h2>
            <v-text-field
              :rules="odoRules"
              v-model="odo"
              label="주행거리를 입력하세요"
              outlined
              suffix="km"
            ></v-text-field>
          </v-col>
          <v-col  cols="6">
            <h2 class="header">연식</h2>
            <v-select
              :rules="ageRules"
              v-model="age"
              :items="years"
              label="연식을 선택하세요"
              outlined
            ></v-select>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="8">
        <v-row>
          <v-col cols="6">
          <h2 class="header">색상</h2>
            <v-color-picker
            v-model="color"
            swatches-max-height="200"
            :swatches="swatches"
            show-swatches
            hide-inputs
            hide-canvas
            hide-sliders>
            </v-color-picker>
          </v-col>
          <v-col cols="6">
            <h2 class="header">연료타입</h2>
            <v-select
              :rules="fuelRules"
              v-model="fuel"
              :items="fuels"
              label="연료종류를 선택하세요"
              outlined
            ></v-select>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="8">
       <v-btn
       @click="dialog = false"
       type="submit" 
       block
       x-large
       color="primary">
          결과 확인
       </v-btn>
      </v-col>
    </v-row>
  </v-form>
</template>

<script>
export default {
  computed: {
    price() {
      return this.$store.state.cars.price
    }
  },
  data: () => ({
    valid: false,
    dialog: false,
    current_brand: '',
    current_model: '',
    odo: '',
    age: '',
    fuel: '',
    color: '#000000',
    odoRules: [
      (v) => !!v || "주행거리를 입력하세요."
    ],
    ageRules: [
      (v) => !!v || "연식을 선택하세요."
    ],
    fuelRules: [
      (v) => !!v || "연료 타입을 선택하세요."
    ],
    model_list: {
      "현대": ['그랜저', '쏘나타', '아반떼'],
      "기아": ['K3', 'K5', 'K7']
    },
    years: ['2022', '2021', '2020', '2019'],
    fuels: ['가솔린', '디젤', 'LPG', '하이브리드', '전기'],
    swatches: [
      ['#000000', '#2196F3'],
      ['#FFFFFF', '#795548'],
      ['#9E9E9E', '#4CAF50'],
      ['#F44336', '#FFEB3B'],
    ]
  }),
  methods: {
    onSubmitForm() {
      let isValid = this.$refs.form.validate();
      if (isValid) {
        this.$store.dispatch("cars/predictPrice", {
          model: this.current_model,
          age: this.age,
          odo: this.odo,
          color: this.color,
          fuel: this.fuel,
        })
        .then(() => {
          console.log("데이터 전송 성공")
        })
        .catch(() => {
          console.log("데이터 전송 실패")
        })
      } else {
        console.log("양식이 유효하지 않습니다.")
      }
    }
  }
};
</script>

<style scoped>
.header {
  margin-top: 30px;
  margin-bottom: 15px;
  color: #2196f3;
}
</style>