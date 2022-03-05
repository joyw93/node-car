const url = (process.env.NODE_ENV === 'production') ? "http://3.39.63.126:80" : "http://127.0.0.1:3080"

export const state = () => ({
  me: null,
});

export const mutations = {
  //동기
  setMe(state, payload) {
    state.me = payload;
  },
  changeNickname(state, payload) {
    state.me.nickname = payload.nickname;
  },
};

export const actions = {
  //비동기
  signUp({ commit, state }, payload) {
    this.$axios.post(`${url}/auth/signup`, {
      name: payload.name,
      email: payload.email,
      password: payload.password,
    });
    commit("setMe", payload);
  },
  login({ commit }, payload) {
    this.$axios.post(`${url}/auth/login`, {
      email: payload.email,
      password: payload.password,
    });
    commit("setMe", payload);
  },
  logOut({ commit }, payload) {
    commit("setMe", null);
  },
  changeNickname({ commit }, payload) {
    commit("changeNickname", payload);
  },
};
