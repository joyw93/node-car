<template>
  <v-container>
    <v-card-text class="card-content">
      <h2><span>차량의 옵션</span>을 선택해주세요</h2>
      <v-item-group class="item-group" v-model="optionSelected" multiple>
        <v-row>
          <v-col v-for="(option, index) in options" :key="index" cols="3">
            <v-item
              :value="option"
              id="option"
              class="rounded-circle"
              v-slot="{ active, toggle }"
            >
              <v-card
                :class="{ 'card-selected': active }"
                :color="active ? 'primary' : ''"
                height="100"
                width="100"
                @click="toggle"
              >
                {{ option }}
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
      optionSelected: [],
      options: [
        "썬루프",
        "통풍시트",
        "열선핸들",
        "네비게이션",
        "스마트키",
        "크루즈컨트롤",
        "블루투스",
        "차선이탈경보",
        "자동긴급제동",
        "커튼에어백",
        "전동트렁크",
        "오토라이트",
        "레인센서",
        "주차감지센서",
        "하이패스",
        "가죽시트",
      ],
    };
  },
  watch: {
    optionSelected(newVal) {
      this.$store.dispatch("register_car/setOptions", {
        options: newVal,
      });
    },
  },
};
</script>

<style scoped>
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
  margin-right: 50px;
  margin-top: 30px;
}

.header {
  margin-bottom: 10px;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.item-group {
  margin-top: 50px;
}

span {
  color: #2196f3;
}

h2 {
  margin-bottom: 5px;
}

#side-card {
  display: flex;
  justify-content: center;
  align-items: center;
}

#option {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
