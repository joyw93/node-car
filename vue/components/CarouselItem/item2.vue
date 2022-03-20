<template>
  <v-carousel-item>
    <v-sheet color="#0D47A1" height="100%">
      <v-row justify="center">
        <v-col cols="12" sm="9" md="9" lg="9">
          <div>
            <v-row>
              <v-col cols="8" class="content">
                <h1>직접 등록/판매 지원</h1>
                <h3>각종 수수료 없이 원하는 가격에</h3>
                <h3>내 차를 직접 판매해보세요!</h3>
              </v-col>
              <v-col cols="4">
                <img
                  class="carousel-image"
                  :src="require(`@/static/images/carousel/carousel2.svg`)"
                  width="300"
                  height="200"
                />
              </v-col>
            </v-row>
          </div>
        </v-col>
      </v-row>
    </v-sheet>
  </v-carousel-item>
</template>

<script>
export default {};
</script>

<style scoped>
h1 {
  font-size: 45px;
  color: white;
  margin-top: 10px;
  margin-bottom: 25px;
}

h3 {
  color: white;
  margin-top: 10px;
}

.content {
  margin-top: 50px;
}

.carousel-image {
  margin-top: 30px;
}
</style>
