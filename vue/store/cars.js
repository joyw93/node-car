import axios from "axios";
export const state = () => ({
  brand: null,
  model: null,
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
  regions: null,
  feature: null,
  isRecommend: "true",
  images: new Array(6),
});

export const mutations = {
  setBrand(state, payload) {
    state.brand = payload.brand;
  },
  setModel(state, payload) {
    state.model = payload.model;
  },
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
  },
  setRegions(state, payload) {
    state.regions = payload.regions;
  },
  setFeature(state, payload) {
    state.feature = payload.feature;
  },
  setIsRecommend(state, payload) {
    state.isRecommend = payload.isRecommend;
  },
  setImages(state, payload) {
    const { image, index } = payload;
    state.images.splice(index, 1, image);
  },
};

export const actions = {
  setBrand({ commit, state }, payload) {
    commit("setBrand", payload);
  },
  setModel({ commit, state }, payload) {
    commit("setModel", payload);
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
  setRegions({ commit, state }, payload) {
    commit("setRegions", payload);
  },
  setFeature({ commit, state }, payload) {
    commit("setFeature", payload);
  },
  setIsRecommend({ commit, state }, payload) {
    commit("setIsRecommend", payload);
  },
  setImages({ commit, state }, payload) {
    commit("setImages", payload);
  },
};
