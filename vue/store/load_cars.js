import axios from "axios";
const serverUrl =
  process.env.NODE_ENV === "production"
    ? "http://api.nodecar.co.kr"
    : "http://127.0.0.1:3080";
export const state = () => ({
  allCars: null,
  car: null,
});

export const mutations = {
  loadAllCars(state, payload) {
    state.allCars = payload;
  },
  loadCar(state, payload) {
    state.car = payload;
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

  loadCar({ commit }, payload) {
    axios
      .post(`${serverUrl}/car/loadCar`, { id: payload })
      .then((res) => {
        commit("loadCar", res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
