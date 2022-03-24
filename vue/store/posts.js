export const state = () => ({
  imagePaths: [],
});

export const mutations = {
  concatImagePaths(state, payload) {
    state.imagePaths = state.imagePaths.concat(payload);
  },
};

export const actions = {
  uploadImages({ commit }, payload) {
    commit("concatImagePaths", payload);
  },
};
