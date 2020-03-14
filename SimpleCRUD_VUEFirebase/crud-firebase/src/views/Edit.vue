<template>
  <div>
    <h1>Edit</h1>
    {{ id }} - {{ task }}
    <form @submit.prevent="editTask(task)">
      <input type="text" v-model="task.nombre" />
      <button>Edit</button>
    </form>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "Edit",
  data() {
    return {
      id: this.$route.params.id
    };
  },
  methods: {
    ...mapActions(["getTask", "editTask"])
  },
  created() {
    this.getTask(this.id);
  },
  computed: {
    ...mapState(["task"])
  }
};
</script>
