import Vue from "vue";
import Vuex from "vuex";
import db from "../firebase";
import router from "../router";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: [],
    task: {
      name: "",
      id: ""
    }
  },
  mutations: {
    setTasks(state, tasks) {
      state.tasks = tasks;
    },
    setTask(state, task) {
      state.task = task;
    },
    deleteTask(state, id) {
      state.tasks = state.tasks.filter(doc => {
        return doc.id !== id;
      });
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
      commit("setTasks", tasks);
    },
    getTask({ commit }, id) {
      db.collection("Tareas")
        .doc(id)
        .get()
        .then(doc => {
          let task = doc.data();
          task.id = doc.id;
          commit("setTask", task);
        });
    },
    editTask({ commit }, task) {
      db.collection("Tareas")
        .doc(task.id)
        .update({
          nombre: task.nombre
        })
        .then(() => {
          router.push({ name: "start" });
        });
    },
    addTask({ commit }, task) {
      db.collection("Tareas")
        .add({
          nombre: task.name
        })
        .then(doc => {
          router.push({ name: "start" });
        });
    },
    deleteTask({ commit, dispatch }, id) {
      db.collection("Tareas")
        .doc(id)
        .delete()
        .then(() => {
          console.log("delete a task");
          // dispatch('getTasks')
          commit("deleteTask", id);
        });
    }
  },
  modules: {}
});
