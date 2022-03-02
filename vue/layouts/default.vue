<template>
  <v-app>
    <nav>
      <v-toolbar dark color="blue">
        <v-toolbar-title>
          <nuxt-link class="nuxtlink" to="/">COCODING</nuxt-link>
        </v-toolbar-title>
        <v-spacer />
        <v-toolbar-items>
          <v-text-field
            label="검색"
            hide-details
            prepend-icon="mdi-magnify"
            :style="{ display: 'flex', alignItems: 'center' }"
          />
          <v-btn
            text
            nuxt
            to="/profile"
            :style="{ display: 'flex', alignItems: 'center' }"
          >
            <div>프로필</div>
          </v-btn>
          <v-btn
            text
            nuxt
            to="/signup"
            :style="{ display: 'flex', alignItems: 'center' }"
          >
            <div>회원가입</div>
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>
    </nav>
    <nuxt />
  </v-app>
</template>

<script>
export default {};
</script>

<style>

.nuxtlink {
  color: rgb(50, 93, 172);
  text-decoration: none;
}


</style>
