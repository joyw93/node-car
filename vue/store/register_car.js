export const state = () => ({
  brand: null,
  model: null,
  odo: null,
  age: null,
  fuel: null,
  color: null,
  price: null,
  isRented: "N",
  options: null,
  isAccident: "N",
  accidentDetail: null,
  isNeedFix: "N",
  needFixDetail: null,
  regions: null,
  feature: null,
  dealerRecommend: "N",
  images: null,
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
  setPrice(state, payload) {
    state.price = payload.price;
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
  setIsAccident(state, payload) {
    state.isAccident = payload.isAccident;
  },
  setAccidentDetail(state, payload) {
    state.accidentDetail = payload.accidentDetail;
  },
  setIsNeedFix(state, payload) {
    state.isNeedFix = payload.isNeedFix;
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
    const imgFormData = new FormData();
    payload.imgFiles.forEach((imgFile) => {
      imgFormData.append("image", imgFile);
    });
    state.images = imgFormData;
  },
};

export const actions = {
  setBrand({ commit }, payload) {
    commit("setBrand", payload);
  },
  setModel({ commit }, payload) {
    commit("setModel", payload);
  },
  setOdo({ commit }, payload) {
    commit("setOdo", payload);
  },
  setAge({ commit }, payload) {
    commit("setAge", payload);
  },
  setPrice({ commit }, payload) {
    commit("setPrice", payload);
  },
  setFuel({ commit }, payload) {
    commit("setFuel", payload);
  },
  setColor({ commit }, payload) {
    commit("setColor", payload);
  },
  setIsRented({ commit }, payload) {
    commit("setIsRented", payload);
  },
  setOptions({ commit }, payload) {
    commit("setOptions", payload);
  },
  setIsAccident({ commit }, payload) {
    commit("setIsAccident", payload);
  },
  setAccidentDetail({ commit }, payload) {
    commit("setAccidentDetail", payload);
  },
  setIsNeedFix({ commit }, payload) {
    commit("setIsNeedFix", payload);
  },
  setNeedFixDetail({ commit }, payload) {
    commit("setNeedFixDetail", payload);
  },
  setRegions({ commit }, payload) {
    commit("setRegions", payload);
  },
  setFeature({ commit }, payload) {
    commit("setFeature", payload);
  },
  setIsRecommend({ commit }, payload) {
    commit("setIsRecommend", payload);
  },
  setImages({ commit }, payload) {
    commit("setImages", payload);
  },
  clearState({ commit }) {
    commit("clearState");
  },
};
