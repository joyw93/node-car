import axios from "axios";
const serverUrl = process.env.serverUrl;
export const state = () => ({
  cars: null,
  car: null,
});

export const mutations = {
  loadCars(state, payload) {
    state.cars = payload;
  },
  loadCar(state, payload) {
    state.car = payload;
  },
};

export const actions = {
  loadCars({ commit }, payload) {
    axios
      .post(`${serverUrl}/car/loadCars`, { tag: payload })
      .then((res) => {
        commit("loadCars", res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  
  loadAllCars({ commit }, payload) {
    axios
      .post(`${serverUrl}/car/loadAllCars`)
      .then((res) => {
        commit("loadCars", res.data);
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
