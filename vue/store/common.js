export const state = () => ({
  loginDialog: false,
  signupDialog: false,
});

export const mutations = {
  goToSignup(state) {
    state.loginDialog = false;
    state.signupDialog = true;
  },
  goToLogin(state) {
    state.loginDialog = true;
    state.signupDialog = false;
  },
};

export const actions = {
  goToSignup({ commit }) {
    commit("goToSignup");
  },
  goToLogin({ commit }) {
    commit("goToLogin");
  },
};
