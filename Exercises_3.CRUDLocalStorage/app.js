const app = new Vue({
  el: "#app",
  data: {
    titulo: "Gym con Vue",
    tareas: [],
    nuevaTarea: ""
  },
  methods: {
    agregarTarea() {
      this.tareas.push({
        nombre: this.nuevaTarea,
        estado: false
      });

      this.nuevaTarea = "";
      localStorage.setItem("gym-vue", JSON.stringify(this.tareas));
    },
    editarTarea(index) {
      this.tareas[index].estado = true;
      localStorage.setItem("gym-vue", JSON.stringify(this.tareas));
    },
    eliminarTarea(index) {
      this.tareas.splice(index, 1);
      localStorage.setItem("gym-vue", JSON.stringify(this.tareas));
    }
  },
  created() {
    let datosDB = JSON.parse(localStorage.getItem("gym-vue"));
    if (!datosDB) {
      this.tareas = [];
    } else {
      this.tareas = datosDB;
    }
  }
});
