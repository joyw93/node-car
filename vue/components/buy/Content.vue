<template>
  <v-container>
    <v-row>
      <v-col v-for="img in imgUrls" :key="img">
        <v-card max-width="320">
          <v-img
            :src="require(`@/static/images/car-forsale/${img}.jpg`)"
            height="200px"
          ></v-img>

          <v-card-title> 기아 K5 </v-card-title>

          <v-card-subtitle>
            <P>2015년 09월 (16년식)</P>
            <P>128,174km | 경기</P>
          </v-card-subtitle>

          <v-card-actions>
            <v-btn color="primary" text> 2,039만원 </v-btn>

            <v-spacer></v-spacer>

            <v-btn icon>
              <v-icon>{{
                show ? "mdi-chevron-up" : "mdi-chevron-down"
              }}</v-icon>
            </v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div>
              <v-divider></v-divider>
            </div>
          </v-expand-transition>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
    data() {
        return {
            imgUrls: ["기아K5",  "아우디S5", "BMW5시리즈"]
        }
    },
    computed: {
      allCars() {
        return this.$store.state.load_cars.allCars;
      }
    }
};
</script>

<style scoped></style>
