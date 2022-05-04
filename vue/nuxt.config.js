module.exports = {
  head: {
    title: "NodeCar",
  },
  buildModules: ["@nuxtjs/vuetify", "@nuxtjs/dotenv"],
  plugins: [],
  modules: ["@nuxtjs/axios"],
  vuetify: {},
  server: {
    port: process.env.PORT || 3081,
  },
  build: {},
};
