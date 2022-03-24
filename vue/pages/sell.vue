<template>
  <div>
    <carousel />
    <v-container>
      <v-row>
        <v-col cols="3">
          <v-item-group v-model="selected" mandatory>
            <v-row v-for="n in 6" :key="n">
              <v-col cols="12">
                <v-item v-slot="{ active, toggle }">
                  <v-card
                    id="side-card"
                    :color="active ? 'primary' : ''"
                    :class="{ 'card-selected': active }"
                    width="200"
                    height="80"
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
              <template v-if="selected == 0">
                <DefaultCard />
              </template>
              <template v-if="selected == 1">
                <OptionCard />
              </template>
              <template v-if="selected == 2">
                <AccidentCard />
              </template>
              <template v-if="selected == 3">
                <RegionCard />
              </template>
              <template v-if="selected == 4">
                <FeatureCard />
              </template>
              <template v-if="selected == 5">
                <ImageCard />
              </template>
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
import ImageCard from '../components/sell-car/ImageCard.vue';

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
      ],
      selected: "",
    };
  },
  components: {
    DefaultCard,
    OptionCard,
    RegionCard,
    AccidentCard,
    FeatureCard,
    Carousel,
    ImageCard,
  },
};
</script>
AccidentCard

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
