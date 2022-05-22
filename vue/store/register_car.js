export const state = () => ({
  brand: null,
  model: null,
  odo: null,
  age: null,
  fuel: null,
  color: null,
  price: null,
  isRented: null,
  options: null,
  accident: "true", // 토글은 0,1,2로 해라.
  accidentDetail: null,
  needFix: "true",
  needFixDetail: null,
  regions: null,
  feature: null,
  isRecommend: "true",
  images: [0, 0, 0, 0, 0, 0],
  tempImageList: [0, 0, 0, 0, 0, 0],
  imageFormData: null,
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
    const { image, index, file } = payload;
    const imageData = new FormData();
    state.images.splice(index, 1, image);
    state.tempImageList.splice(index, 1, file);
    state.tempImageList.forEach((file) => {
      imageData.append("image", file);
    });
    state.imageFormData = imageData;
  },
  clearState(state) {
    state.brand = null;
    state.model = null;
    state.odo = null;
    state.age = null;
    state.fuel = null;
    state.color = null;
    state.price = null;
    state.isRented = null;
    state.options = null;
    state.accident = "true";
    state.accidentDetail = null;
    state.needFix = "true";
    state.needFixDetail = null;
    state.regions = null;
    state.feature = null;
    state.isRecommen = "true";
    state.images = [0, 0, 0, 0, 0, 0];
    state.tempImageList = [0, 0, 0, 0, 0, 0];
    state.imageFormData = null;
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
  setAccident({ commit }, payload) {
    commit("setAccident", payload);
  },
  setAccidentDetail({ commit }, payload) {
    commit("setAccidentDetail", payload);
  },
  setNeedFix({ commit }, payload) {
    commit("setNeedFix", payload);
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
