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
    <v-snackbar v-model="completeSnackbar" :timeout="timeout">
      등록성공
      <template v-slot:action="{ attrs }">
        <v-btn
          color="blue"
          text
          v-bind="attrs"
          @click="completeSnackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
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
const serverUrl = process.env.serverUrl;
const mlServerUrl = process.env.mlServerUrl;

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
      dialog: false,
      timeout: 2000,
      completeSnackbar: false,
    };
  },
  computed: {
    me() {
      return this.$store.state.users.me;
    },
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
    price() {
      return this.$store.state.register_car.price;
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
    isAccident() {
      return this.$store.state.register_car.isAccident;
    },
    isNeedFix() {
      return this.$store.state.register_car.isNeedFix;
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
    dealerRecommend() {
      return this.$store.state.register_car.dealerRecommend;
    },
    images() {
      return this.$store.state.register_car.images;
    },
    sellCheckMsg() {
      return this.$store.state.static.sellCheckMsg;
    },
  },
  methods: {
    onSubmit() {
      for (let [condition, msg] of Object.entries(this.sellCheckMsg)) {
        if (!this[condition]) {
          alert(msg);
          return;
        }
      }
      this.dialog = true;
    },
    async register() {
      this.dialog = false;
      const carDTO = {
        brand: this.brand,
        model: this.model,
        odo: this.odo,
        age: this.age,
        fuel: this.fuel,
        color: this.color,
        isRented: this.isRented,
        options: this.options,
        isAccident: this.isAccident,
        accidentDetail: this.accidentDetail,
        isNeedFix: this.isNeedFix,
        needFixDetail: this.needFixDetail,
        regions: this.regions,
        feature: this.feature,
        dealerRecommend: this.dealerRecommend,
        images: null,
        price: this.price,
        predictedPrice: null,
      };

      try {
        // S3에 차량 사진 저장 요청
        const imgUrls = await axios.post(
          `${serverUrl}/car/imageUpload`,
          this.images
        );
        // ML 서버에 차량 예측가격 요청
        const predictedPrice = await axios.post(`${mlServerUrl}/predict`, {
          model: this.model,
          age: this.age,
          odo: this.odo,
          color: this.color,
          fuel: this.fuel,
        });

        // S3에 저장된 이미지 주소와 차량 예측가격을 프로퍼티에 추가
        carDTO.images = imgUrls.data;
        carDTO.predictedPrice = predictedPrice.data;

        // api 서버에 보내기 전 데이터 가공
        carDTO.options = carDTO.options.join();
        carDTO.regions = carDTO.regions.join();
        carDTO.images = carDTO.images.join();
        carDTO.age = carDTO.age.replace("년", "");
        carDTO.odo = parseInt(carDTO.odo);
        carDTO.age = parseInt(carDTO.age);
        carDTO.price = parseInt(carDTO.price);

        // DB에 매물 정보 저장요청
        const result = await axios.post(`${serverUrl}/car/register`, carDTO, {
          withCredentials: true,
        });
        this.completeSnackbar = true;
      } catch (err) {
        console.log(err);
      }
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
