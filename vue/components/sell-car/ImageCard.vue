<template>
  <v-container class="item-group">
    <v-card-text class="card-content">
      <h2><span>차량의 사진</span>을 등록해주세요</h2>
      <h4>각각의 사진 영역에 맞는 사진을 등록해주세요.</h4>
      <h4 id="text1">
        번호판과 계기판 주행거리가 잘 보이는지 꼭 확인해주세요.
      </h4>
      <h3>※사진등록(최대 6장 / 1장당 5MB 이하)</h3>
      <h4 id="text2">많은 사진을 등록할수록 정확한 견적에 용이합니다.</h4>
      <v-row>
        <v-col cols="4">
          <v-card
            class="image-card"
            width="180"
            height="130"
            @click="onClickImageUpload(0)"
          >
            <input
              ref="imageInput0"
              type="file"
              multiple
              hidden
              @change="onChangeImages($event, 0)"
            />
            <template v-if="imageUrls[0]">
              <img :src="imageUrls[0]" class="image" />
            </template>
            <template v-else> <v-icon x-large> mdi-plus </v-icon> </template>
          </v-card>
        </v-col>
        <v-col cols="4">
          <v-card
            class="image-card"
            width="180"
            height="130"
            @click="onClickImageUpload(1)"
          >
            <input
              ref="imageInput1"
              type="file"
              multiple
              hidden
              @change="onChangeImages($event, 1)"
            />
            <template v-if="imageUrls[1]">
              <img :src="imageUrls[1]" class="image" />
            </template>
            <template v-else> <v-icon x-large> mdi-plus </v-icon> </template>
          </v-card>
        </v-col>
        <v-col cols="4">
          <v-card
            class="image-card"
            width="180"
            height="130"
            @click="onClickImageUpload(2)"
          >
            <input
              ref="imageInput2"
              type="file"
              multiple
              hidden
              @change="onChangeImages($event, 2)"
            />
            <template v-if="imageUrls[2]">
              <img :src="imageUrls[2]" class="image" />
            </template>
            <template v-else> <v-icon x-large> mdi-plus </v-icon> </template>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="4">
          <v-card
            class="image-card"
            width="180"
            height="130"
            @click="onClickImageUpload(3)"
          >
            <input
              ref="imageInput3"
              type="file"
              multiple
              hidden
              @change="onChangeImages($event, 3)"
            />
            <template v-if="imageUrls[3]">
              <img :src="imageUrls[3]" class="image" />
            </template>
            <template v-else> <v-icon x-large> mdi-plus </v-icon> </template>
          </v-card>
        </v-col>
        <v-col cols="4">
          <v-card
            class="image-card"
            width="180"
            height="130"
            @click="onClickImageUpload(4)"
          >
            <input
              ref="imageInput4"
              type="file"
              multiple
              hidden
              @change="onChangeImages($event, 4)"
            />
            <template v-if="imageUrls[4]">
              <img :src="imageUrls[4]" class="image" />
            </template>
            <template v-else> <v-icon x-large> mdi-plus </v-icon> </template>
          </v-card>
        </v-col>
        <v-col cols="4">
          <v-card
            class="image-card"
            width="180"
            height="130"
            @click="onClickImageUpload(5)"
          >
            <input
              ref="imageInput5"
              type="file"
              multiple
              hidden
              @change="onChangeImages($event, 5)"
            />
            <template v-if="imageUrls[5]">
              <img :src="imageUrls[5]" class="image" />
            </template>
            <template v-else> <v-icon x-large> mdi-plus </v-icon> </template>
          </v-card>
        </v-col>
      </v-row>
    </v-card-text>
  </v-container>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    imageUrls() {
      return this.$store.state.cars.images;
    },
  },
  watch: {},
  methods: {
    onClickImageUpload(index) {
      const imageInputs = [
        this.$refs.imageInput0,
        this.$refs.imageInput1,
        this.$refs.imageInput2,
        this.$refs.imageInput3,
        this.$refs.imageInput4,
        this.$refs.imageInput5,
      ];
      imageInputs[index].click();
    },
    onChangeImages(event, index) {
      const files = event.target.files;
      if (files["length"] === 1) {
        const image = URL.createObjectURL(files[0]);
        this.$store.dispatch("cars/setImages", {
          index,
          image,
        });
      }
    },
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
  margin-top: 10px;
}

.option {
  display: flex;
  justify-content: center;
  align-items: center;
}

.item-group {
  display: flex;
  justify-content: center;
  align-items: center;
}

.input {
  margin-top: 10px;
}

.image-card {
  display: flex;
  justify-content: center;
  align-items: center;
}

.image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

span {
  color: #2196f3;
}

h3 {
  margin-bottom: 20px;
}

h2 {
  margin-bottom: 20px;
}

#side-card {
  display: flex;
  justify-content: center;
  align-items: center;
}

#text1 {
  margin-bottom: 20px;
}

#text2 {
  margin-bottom: 20px;
}
</style>
