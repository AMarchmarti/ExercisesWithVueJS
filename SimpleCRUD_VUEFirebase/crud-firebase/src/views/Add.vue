<template>
  <div>
    <h1>Add</h1>
    <form @submit.prevent="addTask(task)">
      <input type="text" v-model="task.name" />
      <button type="submit">Add</button>
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
    ...mapActions(["addTask"])
  }
};
</script>
