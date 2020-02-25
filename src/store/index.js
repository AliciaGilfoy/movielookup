import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

let _api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  timeout: 5000
});

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    movies: [],
    activeMovie: {}
  },
  mutations: {
    setMovies(state, movies) {
      state.movies = movies
    },
    setActiveMovie(state, movie) {
      state.activeMovie = movie;
    }
  },
  actions: {
    async getMovies({ commit, dispatch }) {
      try {
        let res = await _api.get("discover/movie?api_key=529f54dec6b4e37145a5f04f68a8594a&sort_by=popularity.desc&include_adult=false");
        commit("setMovies", res.data.results)
      } catch (error) {
        console.error(error)
      }
    },
    setActiveMovie({ commit }, movie) {
      commit("setActiveMovie", movie);
    }
  },

})
