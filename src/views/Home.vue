<template>
  <div class="home container-fluid">
    <div class="row bg-dark py-3">
      <div class="col h1 text-info">Movie Lookup</div>
    </div>
    <div class="row justify-content-center mt-3">
      <div class="col-4">
        <form @submit.prevent="searchMovie">
          <input
            type="text"
            placeholder="Enter movie name..."
            name="input"
            v-model="newSearch"
            required
          />
          <button class="btn btn-info ml-2" type="submit">
            <i class="fa fa-search" aria-hidden="true"></i>
          </button>
        </form>
      </div>
    </div>
    <div class="row mt-3">
      <div class="col-6 text-warning">
        <movies />
      </div>
      <div class="col-6">
        <movie-details />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Movies from "@/components/Movies";
import MovieDetails from "@/components/MovieDetails";

export default {
  name: "Home",
  components: {
    Movies,
    MovieDetails
  },
  data() {
    return {
      newSearch: ""
    };
  },
  methods: {
    searchMovie() {
      this.$store.dispatch("searchMovie", this.newSearch);
    }
  }
};
</script>
