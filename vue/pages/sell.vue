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
                    height="60"
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
          <div>
            <v-dialog v-model="dialog" width="400">
              <template v-slot:activator="{ attrs }">
                <v-btn
                  v-bind="attrs"
                  width="200"
                  height="65"
                  x-large
                  id="submit-button"
                  @click="onSubmit"
                  >등록하기</v-btn
                >
              </template>
              <v-card>
                <v-card-title class="text-h6 grey lighten-2">
                  매물등록
                </v-card-title>
                <h2 class="modal-title">등록하시겠습니까?</h2>
                <v-divider class="divider"></v-divider>
                <v-card-actions class="modal-action">
                  <v-spacer></v-spacer>
                  <v-btn large id="cancel-button" @click="dialog = false">
                    취소
                  </v-btn>
                  <v-btn large id="confirm-button" @click="register">
                    확인
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </div>
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
            </v-responsive>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import DefaultCard from "~/components/sell/DefaultCard.vue";
import OptionCard from "~/components/sell/OptionCard.vue";
import RegionCard from "~/components/sell/RegionCard.vue";
import AccidentCard from "~/components/sell/AccidentCard.vue";
import FeatureCard from "~/components/sell/FeatureCard.vue";
import Carousel from "~/components/base/Carousel.vue";
import ImageCard from "~/components/sell/ImageCard.vue";
import axios from "axios";
const serverUrl =
  process.env.NODE_ENV === "production"
    ? "http://api.nodecar.co.kr"
    : "http://localhost:3080";

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
        "등록완료",
      ],
      selected: "",
      dialog: false,
    };
  },
  computed: {
    brand() {
      return this.$store.state.register_car.brand;
    },
    model() {
      return this.$store.state.register_car.model;
    },
    odo() {
      return this.$store.state.register_car.odo;
    },
    age() {
      return this.$store.state.register_car.age;
    },
    fuel() {
      return this.$store.state.register_car.fuel;
    },
    color() {
      return this.$store.state.register_car.color;
    },
    isRented() {
      return this.$store.state.register_car.isRented;
    },
    options() {
      return this.$store.state.register_car.options;
    },
    accident() {
      return this.$store.state.register_car.accident;
    },
    needFix() {
      return this.$store.state.register_car.needFix;
    },
    accidentDetail() {
      return this.$store.state.register_car.accidentDetail;
    },
    needFixDetail() {
      return this.$store.state.register_car.needFixDetail;
    },
    regions() {
      return this.$store.state.register_car.regions;
    },
    feature() {
      return this.$store.state.register_car.feature;
    },
    isRecommend() {
      return this.$store.state.register_car.isRecommend;
    },
    images() {
      return this.$store.state.register_car.images;
    },
  },
  methods: {
    onSubmit() {
      if (!this.brand) {
        alert("제조사를 선택하세요");
      } else if (!this.model) {
        alert("모델을 선택하세요");
      } else if (!this.odo) {
        alert("주행거리를 입력하세요");
      } else if (!this.age) {
        alert("연식을 선택하세요");
      } else if (!this.fuel) {
        alert("연료타입을 선택하세요");
      } else if (!this.color) {
        alert("색상을 선택하세요");
      } else if (!this.isRented) {
        alert("렌트이력 여부를 선택하세요");
      } else if (!this.regions) {
        alert("판매 지역을 선택하세요");
      } else if (!this.feature) {
        alert("차량 특징을 입력하세요");
      } else {
        this.dialog = true;
      }
    },
    register() {
      const car = {
        brand: this.brand,
        model: this.model,
        odo: this.odo,
        age: this.age,
        fuel: this.fuel,
        color: this.color,
        isRented: this.isRented,
        options: this.options,
        accident: this.accident,
        accidentDetail: this.accidentDetail,
        needFix: this.needFix,
        needFixDetail: this.needFixDetail,
        regions: this.regions,
        feature: this.feature,
        isRecommend: this.isRecommend,
        images: this.images,
      };
      axios.post(`${serverUrl}/car/register`, car);
      this.dialog = false;
    },
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

.modal-title {
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal-action {
  display: flex;
  align-items: center;
}
.divider {
  margin-top: 40px;
  margin-bottom: 5px;
}

#side-card {
  display: flex;
  justify-content: center;
  align-items: center;
}

#submit-button {
  margin-top: 20px;
  background-color: #364f7f;
  color: white;
}

#confirm-button {
  background-color: #364f7f;
  color: white;
  margin-right: 5px;
  margin-bottom: 10px;
}

#cancel-button {
  background-color: #eeeeee;
  margin-bottom: 10px;
}
</style>
