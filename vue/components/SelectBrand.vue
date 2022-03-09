<template>
  <div>
    
    <v-row justify="center">
      <v-col cols="12" sm="8" md="8" lg="8">
        <h2 class="header">브랜드</h2>
        <v-chip-group column mandatory active-class="primary--text">
          <v-chip v-for="tag in tags" :key="tag">
            {{ tag }}
          </v-chip>
        </v-chip-group>
      </v-col>
      <v-col cols="12" sm="8" md="8" lg="8">
        <h2 class="header">모델</h2>
        <v-chip-group column mandatory active-class="primary--text">
          <v-chip v-for="tag in tags" :key="tag">
            {{ tag }}
          </v-chip>
        </v-chip-group>
      </v-col>
      <v-col cols="8" sm="8" md="8" lg="8">
        <h2 class="header">주행거리</h2>
        <v-text-field
          outlined
          suffix="km"
        ></v-text-field>
      </v-col>
      <v-col cols="8" sm="8" md="8" lg="8">
        <h2 class="header">연식</h2>
        <v-select
          :items="items"
          label="연식을 선택하세요"
          outlined
        ></v-select>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data: () => ({
    tags: [
      "현대",
      "기아",
      "GM대우",
      "BMW",
      "아우디",
      "벤츠",
      "포르쉐",
      "람보르기니",
      "렉서스",
      "링컨",
      "마세라티",
      "제네시스",
      "현대",
      "기아",
      "GM대우",
      "BMW",
      "Audi",
      "Benz",
      "포르쉐",
      "람보르기니",
      "르노",
      "캐딜락",
      "지프",
      "인피니티",
    ],
    items: ['2022', '2021', '2020', '2019'],
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
