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
                  dense
                  class="select-min"
                  :items="items"
                  label="최소"
                  outlined
                ></v-select>

                <v-select
                  class="select-max"
                  dense
                  :items="items"
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
                  :items="items"
                  label="최소"
                  outlined
                ></v-select>
                <v-select
                  class="select-max"
                  dense
                  :items="items"
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
      items: ["1,000km", "2,000km", "3,000km", "4,000km"],
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
  },
  methods: {
    brandSelect(brand) {
      this.model = null;
      if (this.brand === null) this.brand = brand;
      else this.brand === brand ? (this.brand = null) : (this.brand = brand);
      this.$store.dispatch("buy_car/loadCars", {
        brand: this.brand,
        model: this.model,
        fuel: this.fuel,
        color: this.color,
      });
    },
    modelSelect(model) {
      if (this.model === null) this.model = model;
      else this.model === model ? (this.model = null) : (this.model = model);
      this.$store.dispatch("buy_car/loadCars", {
        brand: this.brand,
        model: this.model,
        fuel: this.fuel,
        color: this.color,
      });
    },
    fuelSelect(fuel) {
      if (this.fuel === null) this.fuel = fuel;
      else this.fuel === fuel ? (this.fuel = null) : (this.fuel = fuel);
      this.$store.dispatch("buy_car/loadCars", {
        brand: this.brand,
        model: this.model,
        fuel: this.fuel,
        color: this.color,
      });
    },
    colorSelect(color) {
      if (this.color === null) this.color = color;
      else this.color === color ? (this.color = null) : (this.color = color);
      this.$store.dispatch("buy_car/loadCars", {
        brand: this.brand,
        model: this.model,
        fuel: this.fuel,
        color: this.color,
      });
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
