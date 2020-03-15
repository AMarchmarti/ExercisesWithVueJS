<template>
  <div>
    <h1>Users login</h1>
    <form @submit.prevent="loginUser({ email: email, password: password })">
      <input type="email" v-model="email" />
      <input type="password" v-model="password" />
      <button type="submit">Acceder</button>
    </form>
    <p>{{ error }}</p>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  computed: {
    ...mapState(["error"])
  },
  methods: {
    ...mapActions(["loginUser"])
  }
};
</script>
