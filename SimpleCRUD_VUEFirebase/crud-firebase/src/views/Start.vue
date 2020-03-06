<template>
  <div>
    <h1>Lista de Tareas</h1>
    <ul>
      <li v-for="task of tasks" :key="task.id">
        {{ task.id }} - {{ task.nombre }}
      </li>
    </ul>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "Start",
  methods: {
    ...mapActions(["getTasks"])
  },
  created() {
    this.getTasks();
  },
  computed: {
    ...mapState(["tasks"])
  }
};
</script>
