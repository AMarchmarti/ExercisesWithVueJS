<template>
  <div>
    <h1>Lista de Tareas</h1>
    <ul>
      <li v-for="task of tasks" :key="task.id">
        {{ task.id }} - {{ task.nombre }}
        <router-link :to="{ name: 'edit', params: { id: task.id } }">
          <button>Edit</button>
        </router-link>
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
