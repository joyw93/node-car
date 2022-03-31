import axios from "axios";
export const state = () => ({
  odo: null,
  age: null,
  fuel: null,
  color: null,
  isRented: null,
  options: null,
  accident: "true",
  accidentDetail: null,
  needFix: "true",
  needFixDetail: null,
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
  },
  setOptions(state, payload) {
    state.options = payload.options;
  },
  setAccident(state, payload) {
    state.accident = payload.accident;
  },
  setAccidentDetail(state, payload) {
    state.accidentDetail = payload.accidentDetail;
  },
  setNeedFix(state, payload) {
    state.needFix = payload.needFix;
  },
  setNeedFixDetail(state, payload) {
    state.needFixDetail = payload.needFixDetail;
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
  setOptions({ commit, state }, payload) {
    commit("setOptions", payload);
  },
  setAccident({ commit, state }, payload) {
    commit("setAccident", payload);
  },
  setAccidentDetail({ commit, state }, payload) {
    commit("setAccidentDetail", payload);
  },
  setNeedFix({ commit, state }, payload) {
    commit("setNeedFix", payload);
  },
  setNeedFixDetail({ commit, state }, payload) {
    commit("setNeedFixDetail", payload);
  },
};
