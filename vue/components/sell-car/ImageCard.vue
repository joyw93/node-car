<template>
  <v-container class="item-group">
    <v-card-text class="card-content">
      <h2><span>차량의 사진</span>을 등록해주세요</h2>
      <h3>각각의 사진 영역에 맞는 사진을 등록해주세요.</h3>
      <h3 id="text1">
        번호판과 계기판 주행거리가 잘 보이는지 꼭 확인해주세요.
      </h3>
      <h2>※사진등록(최대 6장 / 1장당 5MB 이하)</h2>
      <h3 id="text2">많은 사진을 등록할수록 정확한 견적에 용이합니다.</h3>
      <v-row>
        <v-col cols="4">
          <v-card
            class="image-card"
            width="180"
            height="130"
            @click="onClickImageUpload"
          >
            <input
              ref="imageInput"
              type="file"
              multiple
              hidden
              @change="onChangeImages"
            />
            <template v-if="imageUrl">
              <img :src="imageUrl" class="image" />
            </template>
            <template v-else> <v-icon x-large> mdi-plus </v-icon> </template>
          </v-card>
        </v-col>
        <v-col cols="4">
          <v-card
            class="image-card"
            width="180"
            height="130"
            @click="onClickImageUpload"
          >
            <input
              ref="imageInput"
              type="file"
              multiple
              hidden
              @change="onChangeImages"
            />
            <template v-if="imageUrl">
              <img :src="imageUrl" class="image" />
            </template>
            <template v-else> <v-icon x-large> mdi-plus </v-icon> </template>
          </v-card>
        </v-col>
        <v-col cols="4">
          <v-card class="image-card" width="180" height="130">
            <v-icon x-large> mdi-plus </v-icon></v-card
          >
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="4">
          <v-card class="image-card" width="180" height="130">
            <v-icon x-large> mdi-plus </v-icon></v-card
          >
        </v-col>
        <v-col cols="4">
          <v-card class="image-card" width="180" height="130">
            <v-icon x-large> mdi-plus </v-icon></v-card
          >
        </v-col>
        <v-col cols="4">
          <v-card class="image-card" width="180" height="130">
            <v-icon x-large> mdi-plus </v-icon></v-card
          >
        </v-col>
      </v-row>
    </v-card-text>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      imageUrl: "",
      imageUrls: []
    };
  },
  computed: {},
  methods: {
    onClickImageUpload() {
      this.$refs.imageInput.click();
    },
    onChangeImages(e) {
      const image = e.target.files;
      this.imageUrl = URL.createObjectURL(image[0]);
      this.imageUrls.push(URL.createObjectURL(image[0]))
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

h2 {
  margin-bottom: 20px;
}

#side-card {
  display: flex;
  justify-content: center;
  align-items: center;
}

#text1 {
  margin-bottom: 30px;
}

#text2 {
  margin-bottom: 30px;
}
</style>
