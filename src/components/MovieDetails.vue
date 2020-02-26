<template>
  <div class="movie-details mt-5">
    <h4 class="text-center col-12 text-warning">
      <u>Movie Details</u>
    </h4>
    <div class="movie-poster bg-secondary text-white text-center">
      <img :src="`https://image.tmdb.org/t/p/w500/${details.poster_path}`" alt class="m-1" />
      <h5>{{ details.title }}</h5>
      <p>{{details.overview}}</p>
    </div>
  </div>
</template>


<script>
export default {
  name: "movieDetails",
  data() {
    return {};
  },
  computed: {
    details() {
      return this.$store.state.activeMovie;
    }
  },
  methods: {},
  components: {}
};
</script>


<style scoped>
img {
  max-width: 90%;
  height: auto;
}
</style>