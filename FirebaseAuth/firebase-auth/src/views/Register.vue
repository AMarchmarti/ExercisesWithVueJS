<template>
  <div>
    <h1>Users Register</h1>
    <form @submit.prevent="createUser({ email: email, password: password })">
      <input type="email" v-model="email" />
      <input type="password" v-model="password" />
      <input type="password" v-model="confirmPassword" />
      <button type="submit">Create User</button>
    </form>
    <p>{{ error }}</p>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "Register",
  data() {
    return {
      email: "",
      password: "",
      confirmPassword: ""
    };
  },
  methods: {
    ...mapActions(["createUser"])
  },
  computed: {
    ...mapState(["error"])
  }
};
</script>
