<template>
  <div>
    <v-card>
      <v-tabs class="tabs">
        <v-tab>전체</v-tab>
        <v-tab>국산</v-tab>
        <v-tab>수입</v-tab>
      </v-tabs>
      <v-divider></v-divider>
      <div id="head"><h1>32,403대</h1></div>
      <v-divider></v-divider>
      <div id="brand">
        <v-expansion-panels>
          <v-expansion-panel>
            <v-expansion-panel-header class="panel-header">
              제조사
            </v-expansion-panel-header>
            <v-divider />
            <v-expansion-panel-content
              :style="{
                overflow: 'scroll',
                height: '250px',
                overflowX: 'hidden',
              }"
            >
              <div
                class="element"
                :class="{ 'element-selected': brand == _brand }"
                v-for="_brand in Object.keys(models)"
                :key="_brand"
                @click="brandSelect(_brand)"
              >
                {{ _brand }}
              </div>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header class="panel-header">
              모델
            </v-expansion-panel-header>
            <v-divider />
            <v-expansion-panel-content
              :style="{
                overflow: 'scroll',
                maxHeight: '250px',
                overflowX: 'hidden',
              }"
            >
              <div v-if="!models[brand]" :style="{ marginTop: '20px' }">
                제조사를 선택하세요.
              </div>
              <div
                v-else
                class="element"
                :class="{ 'element-selected': model == _model }"
                v-for="_model in models[brand]"
                :key="_model"
                @click="modelSelect(_model)"
              >
                {{ _model }}
              </div>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header class="panel-header">
              주행거리
            </v-expansion-panel-header>
            <v-divider />
            <v-expansion-panel-content>
              <div class="content">
                <v-select
                  v-model="odoMinSelect"
                  dense
                  class="select-min"
                  :items="odos"
                  label="최소"
                  outlined
                ></v-select>

                <v-select
                  v-model="odoMaxSelect"
                  class="select-max"
                  dense
                  :items="odos"
                  label="최대"
                  outlined
                ></v-select>
              </div>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header class="panel-header">
              연식
            </v-expansion-panel-header>
            <v-divider></v-divider>
            <v-expansion-panel-content>
              <div class="content">
                <v-select
                  dense
                  class="select-min"
                  :items="years"
                  label="최소"
                  outlined
                ></v-select>
                <v-select
                  class="select-max"
                  dense
                  :items="years"
                  label="최대"
                  outlined
                ></v-select>
              </div>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header class="panel-header">
              연료타입
            </v-expansion-panel-header>
            <v-divider></v-divider>
            <v-expansion-panel-content>
              <div
                class="element"
                :class="{ 'element-selected': fuel == _fuel }"
                v-for="_fuel in fuels"
                :key="_fuel"
                @click="fuelSelect(_fuel)"
              >
                {{ _fuel }}
              </div>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header class="panel-header">
              색상
            </v-expansion-panel-header>
            <v-divider></v-divider>
            <v-expansion-panel-content>
              <div
                class="element"
                :class="{ 'element-selected': color == _color }"
                v-for="_color in colors"
                :key="_color"
                @click="colorSelect(_color)"
              >
                {{ _color }}
              </div>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      brand: null,
      model: null,
      fuel: null,
      color: null,
      odoMin: null,
      odoMax: null,
      ageMin: null,
      ageMax: null,
    };
  },

  computed: {
    models() {
      return this.$store.state.static.models;
    },
    fuels() {
      return this.$store.state.static.fuels;
    },
    colors() {
      return this.$store.state.static.colors;
    },
    odos() {
      return this.$store.state.static.odos;
    },
    years() {
      return this.$store.state.static.years;
    },
    tags() {
      return this.$store.state.buy_car.tags;
    },
  },
  created() {
    this.$nuxt.$on("updateFiltCond", (tag) => {
      if (Object.keys(this.models).includes(tag)) this.brandSelect(tag);
      if (this.brand !== null && this.models[this.brand].includes(tag))
        this.modelSelect(tag);
      if (this.fuels.includes(tag)) this.fuelSelect(tag);
      if (this.colors.includes(tag)) this.colorSelect(tag);
    });
  },
  methods: {
    brandSelect(brand) {
      this.model = null;
      if (this.brand === null) this.brand = brand;
      else this.brand === brand ? (this.brand = null) : (this.brand = brand);
    },
    modelSelect(model) {
      if (this.model === null) this.model = model;
      else this.model === model ? (this.model = null) : (this.model = model);
    },
    fuelSelect(fuel) {
      if (this.fuel === null) this.fuel = fuel;
      else this.fuel === fuel ? (this.fuel = null) : (this.fuel = fuel);
    },
    colorSelect(color) {
      if (this.color === null) this.color = color;
      else this.color === color ? (this.color = null) : (this.color = color);
    },
    odoMinSelect(odoMin) {
      if (this.odoMin === null) this.odoMin = odoMin;
      else
        this.odoMin === odoMin ? (this.odoMin = null) : (this.odoMin = odoMin);
    },
    reloadCars() {
      this.$store.dispatch("buy_car/loadCars", {
        brand: this.brand,
        model: this.model,
        fuel: this.fuel,
        color: this.color,
      });
    },
    updateTags(newVal, oldVal) {
      if (oldVal === null) this.$store.dispatch("buy_car/addTag", newVal);
      else {
        if (newVal === null) {
          this.$store.dispatch("buy_car/removeTag", oldVal);
        } else {
          this.$store.dispatch("buy_car/removeTag", oldVal);
          this.$store.dispatch("buy_car/addTag", newVal);
        }
      }
    },
  },
  watch: {
    brand(newVal, oldVal) {
      this.reloadCars();
      this.updateTags(newVal, oldVal);
    },
    model(newVal, oldVal) {
      this.reloadCars();
      this.updateTags(newVal, oldVal);
    },
    fuel(newVal, oldVal) {
      this.reloadCars();
      this.updateTags(newVal, oldVal);
    },
    color(newVal, oldVal) {
      this.reloadCars();
      this.updateTags(newVal, oldVal);
    },
    odoMin(newVal, oldVal) {
      this.reloadCars();
      this.updateTags(newVal, oldVal);
    },
    odoMax(newVal, oldVal) {
      this.reloadCars();
      this.updateTags(newVal, oldVal);
    },
  },
};
</script>

<style scoped>
h1 {
  color: #2196f3;
}

.tabs {
  display: flex;
  justify-content: center;
  align-items: center;
}

.divider {
  margin-bottom: 10px;
}

.element {
  color: #757575;
  margin-top: 10px;
  cursor: pointer;
}

.element-selected {
  color: #2196f3;
  margin-top: 10px;
  cursor: pointer;
}

.panel-header {
  color: #000000;
}

.panel-content {
  margin-top: 10px;
  margin-bottom: 20px;
}

.select-min {
  float: left;
}

.select-max {
  float: right;
}

.content {
  margin-top: 20px;
}

#head {
  margin-top: 30px;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
