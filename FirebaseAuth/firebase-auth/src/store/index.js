import Vue from "vue";
import Vuex from "vuex";
import router from "../router";
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
          router.push({ name: "start" });
        })
        .catch(error => {
          console.log("error :", error);
          commit("setError", error.message);
        });
    },
    loginUser({ commit }, payload) {
      firebase
        .auth()
        .signInWithEmailAndPassword(payload.email, payload.password)
        .then(res => {
          commit("setUser", {
            email: res.user.email,
            uid: res.user.uid
          });
          router.push({ name: "start" });
        })
        .catch(error => {
          commit("setError", error.message);
        });
    },
    connectedUser({ commit }, payload) {
      if( payload !== null){
        commit("setUser", { email: payload.email, uid: payload.uid });
      }else{
        commit('setUser', null)
      }
    },
    logOut({ commit }) {
      firebase.auth().signOut();
      commit('setUser', null)
      router.push({ name: "login" });
    }
  },
  modules: {}
});
