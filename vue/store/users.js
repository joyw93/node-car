import axios from "axios";
const serverUrl =
  process.env.NODE_ENV === "production"
    ? "http://api.nodecar.co.kr"
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
    axios
      .post(
        `${serverUrl}/auth/signup`,
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
      })
      .catch((err) => {
        console.error(err);
      });
  },
  login({ commit }, payload) {
    axios
      .post(
        `${serverUrl}/auth/login`,
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
        `${serverUrl}/auth/logout`,
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
