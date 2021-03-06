import Vue from "vue";
import BootstrapVue from 'bootstrap-vue'
import App from "./App.vue";
import router from "./router";
import store from "./store";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

var firebase = require("firebase/app");

require("firebase/auth");
require("firebase/firestore");
// require("firebase/database");
// require("firebase/messaging");
// require("firebase/functions");

const config = {
  apiKey: "AIzaSyCnD5w80EokvlQLfRYWzOExt_o_y0GfnLE",
  authDomain: "simplecrud-d777b.firebaseapp.com",
  databaseURL: "https://simplecrud-d777b.firebaseio.com",
  projectId: "simplecrud-d777b",
  storageBucket: "simplecrud-d777b.appspot.com",
  messagingSenderId: "876179655534",
  appId: "1:876179655534:web:40c79984c732ce314ecf7f",
  measurementId: "G-1FJMDFRSZ7"
};

const firebaseApp = firebase.initializeApp(config);

Vue.config.productionTip = false;

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    store.dispatch("connectedUser", { email: user.email, uid: user.uid });
  } else {
    store.dispatch("connectedUser", null);
  }

  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount("#app");
});

export default firebaseApp.firestore();
