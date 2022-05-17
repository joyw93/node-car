module.exports = {
  head: {
    title: "NodeCar",
    link: [
      {
        type:'text/css',
        rel:'stylesheet',
        href:'https://cdn.rawgit.com/innks/NanumSquareRound/master/nanumsquareround.min.css'
      }
    ]
  },
  buildModules: ["@nuxtjs/vuetify", "@nuxtjs/dotenv"],
  plugins: [],
  modules: ["@nuxtjs/axios"],
  vuetify: {
  },
  server: {
    port: process.env.PORT || 3081,
  },
  build: {},
};
