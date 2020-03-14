import Vue from "vue";
import Vuex from "vuex";
var firebase = require("firebase/app");
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: "",
    error: ""
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },
    setError(state, payload) {
      state.error = payload;
    }
  },
  actions: {
    createUser({ commit }, payload) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(payload.email, payload.password)
        .then(response => {
          commit("setUser", {
            email: response.user.email,
            uid: response.user.uid
          });
        })
        .catch(error => {
          console.log("error :", error);
          commit("setError", error.message);
        });
    }
  },
  modules: {}
});
