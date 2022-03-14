<template>
  <div>
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
        <v-chip-group column mandatory active-class="primary--text">
          <v-chip v-for="model in model_list[current_brand]" :key="model">
            {{ model }}
          </v-chip>
        </v-chip-group>
      </v-col>
      <v-col cols="8">
        <v-row>
          <v-col cols="6">
            <h2 class="header">주행거리</h2>
            <v-text-field
              label="주행거리를 입력하세요"
              outlined
              suffix="km"
            ></v-text-field>
          </v-col>
          <v-col  cols="6">
            <h2 class="header">연식</h2>
            <v-select
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
            dot-size="25"
            swatches-max-height="200"
            :swatches="swatches"
            show-swatches
            hide-inputs
            hide-canvas
            hide-sliders>
            </v-color-picker>
          </v-col>
          <v-col  cols="6">
            <h2 class="header">연료타입</h2>
            <v-select
              :items="fuels"
              label="연료종류를 선택하세요"
              outlined
            ></v-select>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="8">
       <v-btn 
       block
       x-large
       color="primary">
          결과 확인
       </v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data: () => ({
    current_brand:'',
    model_list: {
      "현대": ['그랜저', '쏘나타', '아반떼'],
      "기아": ['k3', 'k5', 'k7']
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
};
</script>

<style scoped>
.header {
  margin-top: 30px;
  margin-bottom: 15px;
  color: #2196f3;
}


</style>
