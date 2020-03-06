<template>
  <div>
    <h1>Galery</h1>

    <router-link
      :to="{ name: 'Photos', params: { id: photo } }"
      v-for="(photo, index) of photos"
      :key="index"
    >
      <button>photo {{ photo }}</button>
    </router-link>

    <Photo />


    <button @click="home">Home</button>
    <button @click="before">Before</button>
    <button @click="next">Next</button>
  </div>
</template>

<script>
import Photo from "@/components/Photo.vue";

export default {
  components: {
    Photo
  },
  data() {
    return {
      photos: [1, 2, 3]
    };
  },
  methods: {
      home(){
          this.$router.push('/')
      },
      before(){
          this.$router.go(-1)
      },
      next(){
          this.$router.go(1)
      }
  },
};
</script>
