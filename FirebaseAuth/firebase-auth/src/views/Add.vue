<template>
  <div>
    <h1>Add</h1>
    <form @submit.prevent="addTask(task)" class="form-inline">
      <div class="input-group mb-2 mr-sm-2">
        <div class="input-group-prepend">
          <div class="input-group-text">Nombre:</div>
        </div>
        <input type="text" class="form-control" v-model="task.name" />
      </div>
      <button type="submit" class="btn btn-primary mb-2">Add</button>
    </form>
    {{ task.name }}
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Add",
  data() {
    return {
      task: {
        name: ""
      }
    };
  },
  methods: {
    ...mapActions("tasks", ["addTask"])
  }
};
</script>
