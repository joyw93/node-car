import axios from "axios";
export const state = () => ({
  odo: null,
  age: null,
  fuel: null,
  color: null,
  isRented: null,
});

export const mutations = {
    setDefaultInfo(state, payload) {
    state.odo = payload.odo;
    state.age = payload.age;
    state.fuel = payload.fuel;
    state.color = payload.color;
    state.isRented = payload.isRented;
  }
};

export const actions = {
  setDefaultInfo({ commit, state }, payload) {
    commit("setDefaultInfo", payload);
  },
};
