<template>
  <div @click="setActive" class="col-12 movie">{{movieData.title}}</div>
</template>

<script>
export default {
  name: "Movie",
  props: ["movieData"],
  methods: {
    setActive() {
      this.$store.dispatch("setActiveMovie", this.movieData);
    }
  }
};
</script>

<style scoped>
.movie {
  cursor: pointer;
}
</style>