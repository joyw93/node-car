<template>
  <v-app>
    <v-card flat height="200px" tile>
      <v-toolbar class="fixed-bar" color="white" dark>
        <v-toolbar-title>
          <nuxt-link class="nuxtlink" to="/">
            <h2>YongCar</h2>
          </nuxt-link>
        </v-toolbar-title>
        <nuxt-link id="board" class="nuxtlink" to="/sell">내차팔기</nuxt-link>
        <nuxt-link id="board" class="nuxtlink" to="/buy">내차사기</nuxt-link>
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
      <nuxt />
      <FloatingButton />
      <Footer />
    </v-card>
  </v-app>
</template>

<script>
import Carousel from "~/components/Carousel.vue";
import SignupForm from "~/components/SignupForm.vue";
import LoginForm from "~/components/LoginForm.vue";
import SelectInfo from "~/components/SelectInfo.vue";
import Predicted from "~/components/Predicted.vue";
import Footer from "~/components/Footer.vue";
import FloatingButton from "~/components/FloatingButton.vue";

export default {
  components: {
    Carousel,
    SignupForm,
    LoginForm,
    SelectInfo,
    Predicted,
    Footer,
    FloatingButton,
  },
  data() {
    return {};
  },
  computed: {
    me() {
      return this.$store.state.users.me;
    },
    price() {
      return this.$store.state.cars.price;
    },
  },
  methods: {
    onLogout() {
      this.$store.dispatch("users/logout");
    },
  },
  head() {
    return {
      title: "YongCar",
    };
  },
};
</script>

<style scoped>
.nuxtlink {
  color: #2196f3;
  text-decoration: none;
}

h2 {
  margin-left: 10px;
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
