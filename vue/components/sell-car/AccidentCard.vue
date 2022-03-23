<template>
  <v-container class="item-group">
    <v-card-text class="card-content">
      <h2><span>사고, 수리이력</span>을 알려주세요</h2>
      <h4>과거 사고이력이 있나요?</h4>
      <h4 class="muted">ex) 단순 교환, 도장 판금, 그 외 경미사고는 사고없음</h4>
      <v-item-group v-model="accident" mandatory>
        <v-row>
          <v-col cols="2">
            <v-item value=false class="option" v-slot="{ active, toggle }">
              <v-card
                :class="{ 'card-selected': active }"
                :color="active ? 'primary' : ''"
                height="45"
                width="90"
                @click="toggle"
                >사고없음
                <v-scroll-y-transition>
                  <div v-if="active" class="card-selected"></div>
                </v-scroll-y-transition>
              </v-card>
            </v-item>
          </v-col>
          <v-col cols="2">
            <v-item value=true class="option" v-slot="{ active, toggle }">
              <v-card
                :class="{ 'card-selected': active }"
                :color="active ? 'primary' : ''"
                height="45"
                width="90"
                @click="toggle"
                >사고있음
                <v-scroll-y-transition>
                  <div v-if="active" class="card-selected"></div>
                </v-scroll-y-transition>
              </v-card>
            </v-item>
          </v-col>
          <v-col cols="2">
            <v-item
              value="undetermined"
              class="option"
              v-slot="{ active, toggle }"
            >
              <v-card
                :class="{ 'card-selected': active }"
                :color="active ? 'primary' : ''"
                height="45"
                width="90"
                @click="toggle"
                >몰라요
                <v-scroll-y-transition>
                  <div v-if="active" class="card-selected"></div>
                </v-scroll-y-transition>
              </v-card>
            </v-item>
          </v-col>
        </v-row>
        <template v-if="accident">
          <v-textarea
            hint="예) 골격사고, 뒤 팬더 교환, 전손, 침수 등"
            class="textarea"
            label="사고 유형을 입력해 주세요"
            auto-grow
            outlined
            rows="6"
            row-height="25"
          ></v-textarea>
        </template>
      </v-item-group>
      <h4 id="need-fix-text">현재 수리가 필요한 부위가 있나요?</h4>
      <v-item-group class="item-group" v-model="needFix" mandatory>
        <v-row>
          <v-col cols="2">
            <v-item value=false class="option" v-slot="{ active, toggle }">
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
            <v-item value=true class="option" v-slot="{ active, toggle }">
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
          <v-col cols="2">
            <v-item
              value="undetermined"
              class="option"
              v-slot="{ active, toggle }"
            >
              <v-card
                :class="{ 'card-selected': active }"
                :color="active ? 'primary' : ''"
                height="45"
                width="90"
                @click="toggle"
                >몰라요
                <v-scroll-y-transition>
                  <div v-if="active" class="card-selected"></div>
                </v-scroll-y-transition>
              </v-card>
            </v-item>
          </v-col>
        </v-row>
      </v-item-group>
      <v-row>
        <v-col> </v-col>
      </v-row>
    </v-card-text>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      accident: false,
      needFix: "",
    };
  },
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
  margin-bottom: 10px;
}

.muted {
  color: #bdbdbd;
}

.item-group {
  display: flex;
  justify-content: center;
  align-items: center;
}

.option {
  display: flex;
  justify-content: center;
  align-items: center;
}

.textarea {
  margin-top: 20px;
}

span {
  color: #2196f3;
}

h2 {
  margin-bottom: 50px;
}

h4 {
  margin-bottom: 10px;
}

#need-fix-text {
  margin-top: 50px;
}
</style>
