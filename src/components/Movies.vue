<template>
  <div class="movies row mt-5">
    <h4 class="col-12 text-center">
      <u>Movies</u>
    </h4>
    <movie v-for="movie in movies" :key="movie.id" :movieData="movie" />
  </div>
</template>

<script>
import Movie from "./Movie";

export default {
  name: "Movies",
  mounted() {
    this.$store.dispatch("getMovies");
  },
  data() {
    return {};
  },
  computed: {
    movies() {
      return this.$store.state.movies;
    }
  },
  components: { Movie }
};
</script>

<style>
</style>