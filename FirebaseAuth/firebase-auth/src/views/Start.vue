<template>
  <div>
    <h1>protected route</h1>
    {{ user }}
    <h3>Bienvenido {{ user.email }}</h3>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Start",
  computed: {
    ...mapState(["user"])
  }
};
</script>
