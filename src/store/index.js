import { createStore } from "vuex";

export default createStore({
  state: {
    showLogin:false
  },
  getters: {},
  mutations: {
    SET_SHOW_LOGIN(state,showLogin){
      state.showLogin = showLogin;
    },
  },
  actions: {
    async isShownPopup({commit},showLogin){
      commit('SET_SHOW_LOGIN', showLogin);
    },
  },
  modules: {},
});
