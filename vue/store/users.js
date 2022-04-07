import axios from "axios";
const url =
  process.env.NODE_ENV === "production"
    ? "http://nodecar-api.co.kr"
    : "http://127.0.0.1:3080";

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
    console.log(url);
    axios
      .post(
        `${url}/auth/signup`,
        {
          name: payload.name,
          email: payload.email,
          password: payload.password,
        },
        {
          withCredentials: true,
        }
      )
      .then((data) => {
        console.log(data);
        commit("setMe", payload);
      })
      .catch((err) => {
        console.error(err);
      });
  },
  login({ commit }, payload) {
    axios
      .post(
        `${url}/auth/login`,
        {
          email: payload.email,
          password: payload.password,
        },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        console.log(res.data);
        commit("setMe", res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  },
  logout({ commit }) {
    axios
      .post(
        `${url}/auth/logout`,
        {},
        {
          withCredentials: true,
        }
      )
      .then(() => {
        commit("setMe", null);
        console.log("로그아웃되었습니다.");
      })
      .catch((err) => {
        console.error(err);
      });
  },
  changeNickname({ commit }, payload) {
    commit("changeNickname", payload);
  },
};
