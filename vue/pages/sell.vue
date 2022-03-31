<template>
  <div>
    <carousel />
    <v-container>
      <v-row>
        <v-col cols="3">
          <v-item-group v-model="selected" mandatory>
            <v-row v-for="n in 7" :key="n">
              <v-col cols="12">
                <v-item v-slot="{ active, toggle }">
                  <v-card
                    id="side-card"
                    :color="active ? 'primary' : ''"
                    :class="{ 'card-selected': active }"
                    width="160"
                    height="70"
                    @click="toggle"
                  >
                    <div>
                      {{ cardTexts[n - 1] }}
                    </div>
                    <v-scroll-y-transition>
                      <div v-if="active" class="card-selected"></div>
                    </v-scroll-y-transition>
                  </v-card>
                </v-item>
              </v-col>
            </v-row>
          </v-item-group>
        </v-col>
        <v-col cols="9">
          <v-card>
            <v-responsive class="card" :aspect-ratio="16 / 16">
              <div v-show="selected == 0">
                <DefaultCard />
              </div>
              <div v-show="selected == 1">
                <OptionCard />
              </div>
              <div v-show="selected == 2">
                <AccidentCard />
              </div>
              <div v-show="selected == 3">
                <RegionCard />
              </div>
              <div v-show="selected == 4">
                <FeatureCard />
              </div>
              <div v-show="selected == 5">
                <ImageCard />
              </div>
              <div v-show="selected == 6">
                <ConfirmCard />
              </div>
            </v-responsive>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import DefaultCard from "~/components/sell-car/DefaultCard.vue";
import OptionCard from "~/components/sell-car/OptionCard.vue";
import RegionCard from "~/components/sell-car/RegionCard.vue";
import AccidentCard from "~/components/sell-car/AccidentCard.vue";
import FeatureCard from "../components/sell-car/FeatureCard.vue";
import Carousel from "../components/Carousel.vue";
import ImageCard from "../components/sell-car/ImageCard.vue";
import ConfirmCard from "../components/sell-car/ConfirmCard.vue";

export default {
  data() {
    return {
      cardTexts: [
        "기본정보",
        "옵션정보",
        "사고.수리이력",
        "판매지역",
        "특이사항",
        "차량사진",
        "등록완료"
      ],
      selected: "",
    };
  },
  computed: {
    brand() {
      return this.$store.state.cars.brand;
    },
    model() {
      return this.$store.state.cars.model;
    },
    odo() {
      return this.$store.state.cars.odo;
    },
    age() {
      return this.$store.state.cars.age;
    },
    fuel() {
      return this.$store.state.cars.fuel;
    },
    color() {
      return this.$store.state.cars.color;
    },
    isRented() {
      return this.$store.state.cars.isRented;
    },
    options() {
      return this.$store.state.cars.options;
    },
    accident() {
      return this.$store.state.cars.accident;
    },
    needFix() {
      return this.$store.state.cars.needFix;
    },
    accidentDetail() {
      return this.$store.state.cars.accidentDetail;
    },
    needFixDetail() {
      return this.$store.state.cars.needFixDetail;
    },
    regions() {
      return this.$store.state.cars.regions;
    },
    feature() {
      return this.$store.state.cars.feature;
    },
    isRecommend() {
      return this.$store.state.cars.isRecommend;
    },
    images() {
      return this.$store.state.cars.images;
    },
  },
  methods: {
    
  },
  components: {
    DefaultCard,
    OptionCard,
    RegionCard,
    AccidentCard,
    FeatureCard,
    Carousel,
    ImageCard,
    ConfirmCard
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
  margin-top: 30px;
}

#side-card {
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>
