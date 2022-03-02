export const state = () => ({
  hello: "vuex",
});

export const mutations = {
  increment(state) {
    state.hello = "goodbye";
  },
};
