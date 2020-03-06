import Vue from "vue";
import Vuex from "vuex";
import db from "../firebase";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: []
  },
  mutations: {
    setTasks(state, tasks) {
      state.tasks = tasks;
    }
  },
  actions: {
    getTasks({ commit }) {
      const tasks = [];
      db.collection("Tareas")
        .get()
        .then(docs => {
          docs.forEach(doc => {
            let task = doc.data();
            task.id = doc.id;
            tasks.push(task);
          });
        });
        console.log('tasks :', tasks);
      commit("setTasks", tasks);
    }
  },
  modules: {}
});
