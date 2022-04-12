import axios from "axios";
const mlServerUrl =
  process.env.NODE_ENV === "production"
    ? "http://43.200.0.181:5000"
    : "http://127.0.0.1:5000";
export const state = () => ({
  price: null,
  info: null,
});

export const mutations = {
  setPrice(state, payload) {
    state.price = payload;
  },
  setInfo(state, payload) {
    state.info = payload;
  },
};

export const actions = {
  predictPrice({ commit, state }, payload) {
    axios
      .post(`${mlServerUrl}/predict`, {
        model: payload.model,
        age: payload.age,
        odo: payload.odo,
        color: payload.color,
        fuel: payload.fuel,
      })
      .then((res) => {
        commit("setPrice", res.data);
        commit("setInfo", payload);
      })
      .catch((err) => {
        console.error(err);
      });
  },
};
