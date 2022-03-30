import axios from "axios";
export const state = () => ({
  odo: null,
  age: null,
  fuel: null,
  color: null,
  isRented: null,
});

export const mutations = {
  setOdo(state, payload) {
    state.odo = payload.odo;
  },
  setAge(state, payload) {
    state.age = payload.age;
  },
  setFuel(state, payload) {
    state.fuel = payload.fuel;
  },
  setColor(state, payload) {
    state.color = payload.color;
  },
  setIsRented(state, payload) {
    state.isRented = payload.isRented;
  }
};

export const actions = {
  setDefaultInfo({ commit, state }, payload) {
    commit("setDefaultInfo", payload);
  },
  setOdo({ commit, state }, payload) {
    commit("setOdo", payload);
  },
  setAge({ commit, state }, payload) {
    commit("setAge", payload);
  },
  setFuel({ commit, state }, payload) {
    commit("setFuel", payload);
  },
  setColor({ commit, state }, payload) {
    commit("setColor", payload);
  },
  setIsRented({ commit, state }, payload) {
    commit("setIsRented", payload);
  },
};
