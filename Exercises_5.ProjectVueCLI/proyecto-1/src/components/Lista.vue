<template>
  <div>
    <ul class="list-group">
      <li
        v-for="(fruta, index) in frutas"
        :key="index"
        @click="aumentar(index)"
        class="list-group-item d-flex justify-content-between align-items-center"
      >
        {{ index }} - {{ fruta.nombre }}
        <span class="badge badge-primary badge-pill">{{ fruta.cantidad }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "Lista",
  computed: {
    ...mapState(["frutas"])
  },
  methods: {
    ...mapMutations(["aumentar"])
  }
};
</script>
