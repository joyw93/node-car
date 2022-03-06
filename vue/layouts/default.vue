<template>
  <v-app>
    <v-card color="grey lighten-4" flat height="200px" tile>
      <v-toolbar class="fixed-bar" color="white" dark>
        <v-toolbar-title>
          <nuxt-link class="nuxtlink" to="/">COCODING</nuxt-link>
        </v-toolbar-title>

        <nuxt-link id="board" class="nuxtlink" to="/board">게시판</nuxt-link>
        <v-spacer />
        <v-toolbar-items v-if="!me">
          <login-form
            id="loginform"
            :style="{ display: 'flex', alignItems: 'center', color: '#2196F3' }"
          />
          <signup-form
            :style="{ display: 'flex', alignItems: 'center', color: '#2196F3' }"
          />
        </v-toolbar-items>
        <v-toolbar-items v-else>
          <div
            class="text-center"
            :style="{ display: 'flex', alignItems: 'center' }"
          >
            <v-btn color="primary" @click="onLogout">로그아웃</v-btn>
          </div>
        </v-toolbar-items>
      </v-toolbar>
      <Carousel />

      <nuxt />
    </v-card>
  </v-app>
</template>

<script>
import Carousel from "~/components/Carousel.vue";
import SignupForm from "~/components/SignupForm.vue";
import LoginForm from "~/components/LoginForm.vue";

export default {
  components: {
    Carousel,
    SignupForm,
    LoginForm,
  },
  data() {
    return {};
  },
  computed: {
    me() {
      return this.$store.state.users.me;
    },
  },
  methods: {
    onLogout() {
      this.$store.dispatch("users/logout");
    },
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

#loginform {
  margin-right: 10px;
}

</style>
