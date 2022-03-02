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
            :style="{ display: 'flex', alignItems: 'center', color: '#55d099' }"
          />
          <v-btn
            text
            nuxt
            to="/profile"
            :style="{ display: 'flex', alignItems: 'center', color: '#55d099' }"
          >
            <div>로그인</div>
          </v-btn>
          <v-btn
            text
            nuxt
            to="/signup"
            :style="{ display: 'flex', alignItems: 'center', color: '#55d099' }"
          >
            <div>회원가입</div>
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>

      <v-carousel
        cycle
        height="400"
        hide-delimiter-background
        show-arrows-on-hover
      >
        <v-carousel-item v-for="(slide, i) in slides" :key="i">
          <v-sheet :color="colors[i]" height="100%">
            <v-row class="fill-height" align="center" justify="center">
              <div class="text-h2">
                {{ slide }}
              </div>
            </v-row>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
      <nuxt />
    </v-card>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      colors: ["indigo", "warning"],
      slides: ["지식을 나눠요", "평등한 지식"],
    };
  },
};
</script>

<style scoped>
.nuxtlink {
  color: #55d099;
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
