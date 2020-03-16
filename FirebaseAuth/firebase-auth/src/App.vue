<template>
  <div id="app">
    <div id="nav">
      <router-link :to="{ name: 'register' }" v-if="!existUser"
        >Registro</router-link
      >
      |
      <router-link :to="{ name: 'start' }" v-if="existUser"
        >Inicio</router-link
      >
      |
      <router-link :to="{ name: 'login' }" v-if="!existUser">Login</router-link>
      |
      <a @click="logOut" v-if="existUser">Logout</a>
    </div>
    <router-view />
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "App",
  methods: {
    ...mapActions(["logOut"])
  },
  computed: {
    ...mapGetters(["existUser"])
  }
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
