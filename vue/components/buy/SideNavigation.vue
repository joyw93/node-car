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
      <v-divider class="divider"></v-divider>
      <div id="brand">
        <v-expansion-panels>
          <v-expansion-panel>
            <v-expansion-panel-header> 제조사 </v-expansion-panel-header>
            <v-expansion-panel-content> 
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </div>
      <v-divider class="divider"></v-divider>
      <div id="model">
        <v-expansion-panels>
          <v-expansion-panel>
            <v-expansion-panel-header> 모델 </v-expansion-panel-header>
            <v-expansion-panel-content> </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </div>
      <v-divider class="divider"></v-divider>
      <div id="odo">
        <v-expansion-panels>
          <v-expansion-panel>
            <v-expansion-panel-header> 주행거리 </v-expansion-panel-header>
            <v-expansion-panel-content> </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </div>
      <v-divider class="divider"></v-divider>
      <div id="age">
        <v-expansion-panels>
          <v-expansion-panel>
            <v-expansion-panel-header> 연식 </v-expansion-panel-header>
            <v-expansion-panel-content> </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </div>
      <v-divider class="divider"></v-divider>
      <div id="fuel">
        <v-expansion-panels>
          <v-expansion-panel>
            <v-expansion-panel-header> 연료타입 </v-expansion-panel-header>
            <v-expansion-panel-content> </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </div>
      <v-divider class="divider"></v-divider>
      <div id="color">
        <v-expansion-panels>
          <v-expansion-panel>
            <v-expansion-panel-header> 색상 </v-expansion-panel-header>
            <v-expansion-panel-content> </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {};
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


#head {
  margin-top: 30px;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
