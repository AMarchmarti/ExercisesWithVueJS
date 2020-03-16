import db from "../main";
const firebase = require("firebase/app");
const user = firebase.auth().currentUser;
export default {
  namespaced: true,
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
      db.collection(user.email)
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
      db.collection(user.email)
        .doc(id)
        .get()
        .then(doc => {
          let task = doc.data();
          task.id = doc.id;
          commit("setTask", task);
        });
    },
    editTask({ commit }, task) {
      db.collection(user.email)
        .doc(task.id)
        .update({
          nombre: task.nombre
        })
        .then(() => {
          router.push({ name: "start" });
        });
    },
    addTask({ commit }, task) {
      db.collection(user.email)
        .add({
          nombre: task.name
        })
        .then(doc => {
          router.push({ name: "start" });
        });
    },
    deleteTask({ commit, dispatch }, id) {
      db.collection(user.email)
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
};
