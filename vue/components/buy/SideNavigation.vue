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
            <v-expansion-panel-content>
              <div
                class="element"
                v-for="brand in Object.keys(models)"
                :key="brand"
              >
                {{ brand }}
              </div>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header class="panel-header">
              모델
            </v-expansion-panel-header>
            <v-expansion-panel-content> </v-expansion-panel-content>
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
              <div class="element" v-for="fuel in fuels" :key="fuel">
                {{ fuel }}
              </div>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header class="panel-header">
              색상
            </v-expansion-panel-header>
            <v-divider></v-divider>
            <v-expansion-panel-content>
              <div class="element" v-for="color in colors" :key="color">
                {{ color }}
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
    allCars() {
      return this.$store.state.load_cars.allCars;
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
}

.panel-header {
  color: #000000;
}

.select-min {
  float: left;
}

.select-max {
  float: right;
}

.tilde {
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
