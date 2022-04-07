<template>
  <v-footer
    class="footer"
    dark
    padless
  >
    <v-card
      id="card"
      class="white--text text-center"
    >
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4 white--text"
          icon
        >
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0" id="card-middle">
        <h1>YONGCAR</h1>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text" id="card-bottom">
        Copyright ⓒ&nbsp;{{ new Date().getFullYear() }} — <strong>NODECAR</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
  export default {
    data: () => ({
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
    }),
  }
</script>

<style scoped>
.footer {
    margin-top: 200px;
}

#card {
    width: 100%;   
}

#card-bottom {
    margin-top:15px;
    margin-bottom: 15px;
}

#card-middle{
    margin-bottom:20px;
}

</style>