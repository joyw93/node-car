import axios from "axios";
const serverUrl =
  process.env.NODE_ENV === "production"
    ? "http://api.nodecar.co.kr"
    : "http://127.0.0.1:3080";
export const state = () => ({
    allCars: null
});

export const mutations = {
  loadAllCars(state, payload) {
      state.allCars = payload
  },
};

export const actions = {
  loadAllCars({ commit, state }, payload) {
    axios
      .post(`${serverUrl}/car/loadAllData`, {})
      .then((res) => {
        commit("loadAllCars", res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
