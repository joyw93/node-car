<template>
  <v-container>
    <v-card-text class="card-content">
      <h2><span>차량기본정보</span>를 선택해주세요</h2>
      <v-row>
        <v-col cols="5">
          <h3 class="header">주행거리</h3>
          <v-text-field
            class="input"
            :rules="odoRules"
            v-model="odo"
            label="주행거리를 입력하세요"
            solo
            suffix="km"
          ></v-text-field>
        </v-col>
        <v-col cols="5">
          <h3 class="header">연식</h3>
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
      <v-row>
        <v-col cols="5">
          <h3 class="header">연료타입</h3>
          <v-select
            class="input"
            :rules="odoRules"
            v-model="odo"
            label="연료 타입을 선택하세요"
            solo
          ></v-select>
        </v-col>
        <v-col cols="5">
          <h3 class="header">색상</h3>
          <v-select
            class="input"
            :rules="ageRules"
            v-model="age"
            :items="years"
            label="색상을 선택하세요"
            solo
          ></v-select>
        </v-col>
      </v-row>
      <h3 class="header">리스/렌트 이력</h3>
      <v-item-group class="item-group" v-model="accident" mandatory>
        <v-row>
          <v-col cols="2">
            <v-item value="false" class="option" v-slot="{ active, toggle }">
              <v-card
                :class="{ 'card-selected': active }"
                :color="active ? 'primary' : ''"
                height="45"
                width="90"
                @click="toggle"
                >없음
                <v-scroll-y-transition>
                  <div v-if="active" class="card-selected"></div>
                </v-scroll-y-transition>
              </v-card>
            </v-item>
          </v-col>
          <v-col cols="2">
            <v-item value="true" class="option" v-slot="{ active, toggle }">
              <v-card
                :class="{ 'card-selected': active }"
                :color="active ? 'primary' : ''"
                height="45"
                width="90"
                @click="toggle"
                >있음
                <v-scroll-y-transition>
                  <div v-if="active" class="card-selected"></div>
                </v-scroll-y-transition>
              </v-card>
            </v-item>
          </v-col>
        </v-row>
      </v-item-group>
    </v-card-text>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      accident: false,
      age: "",
      
    }
  }
};
</script>

<style scoped>
.card-content {
  margin-left: 50px;
  margin-top: 30px;
}
.card-selected {
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
}

.card {
  border: 2px solid #1565c0;
  border-radius: 15px;
}

.card-content {
  margin-left: 50px;
  margin-top: 30px;
}

.header {
  margin-top: 10px;
}

.option {
  display: flex;
  justify-content: center;
  align-items: center;
}

.item-group {
  margin-top: 20px;
  margin-bottom: 40px;
}

.input{
  margin-top:10px;
}

span {
  color: #2196f3;
}

h2 {
  margin-bottom: 50px;
}

#side-card {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
