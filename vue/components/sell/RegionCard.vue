<template>
  <v-container>
    <v-card-text class="card-content">
      <h2><span>판매를 원하시는 지역</span>을 선택해주세요 (최대 2개)</h2>
      <v-item-group class="item-group" v-model="regionSelected" multiple>
        <v-row>
          <v-col v-for="(region, index) in regions" :key="index" cols="3">
            <v-item :value="region" id="option" v-slot="{ active, toggle }">
              <v-card
                :class="{ 'card-selected': active }"
                :color="active ? 'primary' : ''"
                height="100"
                width="100"
                @click="
                  (regionSelected.length < 2 && !active) || active
                    ? toggle()
                    : null
                "
              >
                {{ region }}
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
      regionSelected: [],
    };
  },
  computed: {
    regions() {
      return this.$store.state.static.regions;
    },
  },
  watch: {
    regionSelected(newVal) {
      this.$store.dispatch("register_car/setRegions", {
        regions: newVal,
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
