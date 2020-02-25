<template>
  <div class="home container-fluid">
    <div class="row bg-dark py-3">
      <div class="col h1 text-info">Movie Lookup</div>
    </div>
    <div class="row justify-content-center mt-3">
      <div class="col-4">
        <input type="search" placeholder="Enter movie name..." />
        <button class="btn btn-info ml-2" type="submit">
          <i class="fa fa-search" aria-hidden="true"></i>
        </button>
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
  }
};
</script>
