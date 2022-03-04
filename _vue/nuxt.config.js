module.exports = {
  head: {
    title: "COCODING",
  },
  buildModules: ["@nuxtjs/vuetify"],
  plugins: [],
  modules: ["@nuxtjs/axios"],
  vuetify: {},
  server: {
      port: process.env.PORT || 3081,
  },
  build: {
    // babel: {
    //   presets(env, [ preset, options ]) {
    //     return [
    //       [ "@babel/preset-env", options ]
    //     ]
    //   }
    // },
  }
};
