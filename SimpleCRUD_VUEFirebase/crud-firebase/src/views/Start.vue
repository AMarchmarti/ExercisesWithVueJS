<template>
  <div>
    <h1>Lista de Tareas</h1>
    <router-link :to="{ name: 'add' }" class="btn btn-success btn-block">
      Add
    </router-link>
    <ul class="list-group mt-5">
      <li
        class="list-group-item d-flex justify-content-between"
        v-for="task of tasks"
        :key="task.id"
      >
        {{ task.id }} - {{ task.nombre }}
        <div>
          <router-link
            class="btn btn-warning btn-sm mr-2"
            :to="{ name: 'edit', params: { id: task.id } }"
          >
            Edit
          </router-link>
          <button @click="deleteTask(task.id)" class="btn btn-danger btn-sm">
            Delete
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "Start",
  methods: {
    ...mapActions(["getTasks", "deleteTask"])
  },
  created() {
    this.getTasks();
  },
  computed: {
    ...mapState(["tasks"])
  }
};
</script>
