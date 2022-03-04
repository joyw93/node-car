<template>
  <v-app>
    <v-card color="grey lighten-4" flat height="200px" tile>
      <v-toolbar class="fixed-bar" color="white">
        <v-toolbar-title>
          <nuxt-link class="nuxtlink" to="/">COCODING</nuxt-link>
        </v-toolbar-title>

        <nuxt-link id="board" class="nuxtlink" to="/board">게시판</nuxt-link>
        <v-spacer />
        <v-toolbar-items>
          <v-text-field
            label="검색"
            hide-details
            prepend-icon="mdi-magnify"
            :style="{ display: 'flex', alignItems: 'center', color: '#2196F3' }"
          />
          <v-btn
            text
            nuxt
            to="/profile"
            :style="{ display: 'flex', alignItems: 'center', color: '#2196F3' }"
          >
            <div>로그인</div>
          </v-btn>
          <signup-form :style="{ display: 'flex', alignItems: 'center', color: '#2196F3' }" />
        </v-toolbar-items>
      </v-toolbar>
      <Carousel />
      <nuxt />
    </v-card>
  </v-app>
</template>

<script>
import Carousel from "~/components/Carousel.vue";
import SignupForm from "~/components/SignupForm.vue"

export default {
  components: {
    Carousel,
    SignupForm
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.nuxtlink {
  color: #2196f3;
  text-decoration: none;
}

#board {
  margin-left: 20px;
  color: gray;
}

.fixed-bar {
  position: sticky;
  top: 0em;
  z-index: 2;
}

.carousel-item {
  height: auto;
}
</style>
