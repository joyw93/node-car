<template>
  <div>
    <v-row>
      <v-col>
        <v-card class="mx-auto" max-width="344">
          <v-img
            :src="require(`@/static/images/car/벤츠/E클래스.jpg`)"
            height="200px"
          ></v-img>

          <v-card-title> BMW </v-card-title>

          <v-card-subtitle> 5시리즈 </v-card-subtitle>

          <v-card-actions>
            <v-btn color="primary" text> 상세보기 </v-btn>

            <v-spacer></v-spacer>

            <v-btn icon @click="show = !show">
              <v-icon>{{
                show ? "mdi-chevron-up" : "mdi-chevron-down"
              }}</v-icon>
            </v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="show">
              <v-divider></v-divider>

              <v-card-text> BMW </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
        <v-card class="mx-auto" max-width="344">
          <v-img
            :src="require(`@/static/images/car/BMW/5시리즈.jpg`)"
            height="200px"
          ></v-img>

          <v-card-title> BMW </v-card-title>

          <v-card-subtitle> 5시리즈 </v-card-subtitle>

          <v-card-actions>
            <v-btn color="primary" text> 상세보기 </v-btn>

            <v-spacer></v-spacer>

            <v-btn icon @click="show = !show">
              <v-icon>{{
                show ? "mdi-chevron-up" : "mdi-chevron-down"
              }}</v-icon>
            </v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="show">
              <v-divider></v-divider>

              <v-card-text> BMW </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </v-col>
      <v-col>
        <v-card class="mx-auto" max-width="344">
          <v-img
            :src="require(`@/static/images/car/BMW/3시리즈.jpg`)"
            height="200px"
          ></v-img>

          <v-card-title> BMW </v-card-title>

          <v-card-subtitle> 5시리즈 </v-card-subtitle>

          <v-card-actions>
            <v-btn color="primary" text> 상세보기 </v-btn>

            <v-spacer></v-spacer>

            <v-btn icon @click="show = !show">
              <v-icon>{{
                show ? "mdi-chevron-up" : "mdi-chevron-down"
              }}</v-icon>
            </v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="show">
              <v-divider></v-divider>

              <v-card-text> BMW </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
        <v-card class="mx-auto" max-width="344">
          <v-img
            :src="require(`@/static/images/car/BMW/7시리즈.jpg`)"
            height="200px"
          ></v-img>

          <v-card-title> BMW </v-card-title>

          <v-card-subtitle> 5시리즈 </v-card-subtitle>

          <v-card-actions>
            <v-btn color="primary" text> 상세보기 </v-btn>

            <v-spacer></v-spacer>

            <v-btn icon @click="show = !show">
              <v-icon>{{
                show ? "mdi-chevron-up" : "mdi-chevron-down"
              }}</v-icon>
            </v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="show">
              <v-divider></v-divider>

              <v-card-text> BMW </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Card from "~/components/car-list/Card.vue";
export default {
  components: {
    Card,
  },
};
</script>

<style scoped>
.v-card {
  margin-top: 30px;
}

.v-col {
  margin-top: 10px;
}
</style>
