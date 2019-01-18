<template>
  <div id="homeWrapper">
    <div id="sidebar">
      <router-link to="/" exact>
        <div class="sideLink">
          <a href="#">
            <svg class="icon home">
              <use xlink:href="/src/assets/sprite.svg#icon-home"></use>
            </svg>
          </a>
          <a href="#" class="sideLink_text home">Home</a>
          <span class="underline"></span>
        </div>
      </router-link>
      <router-link to="/favorites" exact>
        <div class="sideLink">
          <a href="#">
            <svg class="icon">
              <use xlink:href="/src/assets/sprite.svg#icon-star"></use>
            </svg>
          </a>
          <a href="#" class="sideLink_text">Favorites</a>
          <span class="underline"></span>
        </div>
      </router-link>
      <router-link to="/recents" exact>
        <div class="sideLink">
          <a href="#">
            <svg class="icon">
              <use xlink:href="/src/assets/sprite.svg#icon-video"></use>
            </svg>
          </a>
          <a href="#" class="sideLink_text">Recent</a>
          <span class="underline"></span>
        </div>
      </router-link>
      <router-link to="/myTV" exact>
        <div class="sideLink">
          <a href="#">
            <svg class="icon">
              <use xlink:href="/src/assets/sprite.svg#icon-folder-video"></use>
            </svg>
          </a>
          <a href="#" class="sideLink_text">My TV</a>
          <span class="underline"></span>
        </div>
      </router-link>
      <router-link to="/myMovies" exact>
        <div class="sideLink">
          <a href="#">
            <svg class="icon">
              <use xlink:href="/src/assets/sprite.svg#icon-folder-video"></use>
            </svg>
          </a>
          <a href="#" class="sideLink_text">My Movies</a>
          <span class="underline"></span>
        </div>
      </router-link>
    </div>
    <!-- Nest searches  and the rest in here -->
    <main id="contentArea">
      <div id="searchSection">
        <input type="text" placeholder="Search movies, tv..." id="search" v-model="search">
        <button id="searchBtn" @click="fetchMovies">Search Movies</button>
      </div>

      <div id="displaySection">
        <div class="movie" v-for="movie in movies" :key="movie.id">
          <div class="movieImg">
            <img
              class="movieImage"
              width="100%"
              height="100%"
              v-bind:src="`https://image.tmdb.org/t/p/original${movie.poster_path}`"
            >
          </div>

          <div class="movieTitle">
            <h4>{{movie.title}}</h4>
            <p>{{movie.overview | snippet}}</p>
            <p id="score">Score: {{movie.vote_average}}</p>
          </div>
          <div class="faves" @click="addToFaves">
            <svg class="icon star">
              <use xlink:href="/src/assets/sprite.svg#icon-star"></use>
            </svg>
            Add to Favorites
          </div>
        </div>

        <button id="loadMore" @click="loadMore" v-if="loaded">Load More...</button>
      </div>
    </main>
  </div>
</template>

<script>
import favorites from "./homePageComps/favorites";
import myMovies from "./homePageComps/myMovies.vue";
import myTV from "./homePageComps/myTV.vue";
import recents from "./homePageComps/recents.vue";
import userProfile from "./homePageComps/userProfile.vue";
import genres from "./homePageComps/genres.vue";
import nowPlaying from "./homePageComps/nowPlaying.vue";
import comingSoon from "./homePageComps/comingSoon.vue";
import moreDetails from "./homePageComps/moreDetails.vue";
import VueResource from "vue-resource";

export default {
  components: {
    "coming-Soon": comingSoon,
    favorites: favorites,
    genres: genres,
    "my-Movies": myMovies,
    "my-TV": myTV,
    "now-Playing": nowPlaying,
    recents: recents,
    "user-Profile": userProfile,
    "more-details": moreDetails
  },
  data() {
    return {
      search: "",
      movies: [],
      API_KEY: "cccd068854b8f25c4c97f38feb725d78",
      title:
        "Search for your favorite movies, TV shows, even stuff that hasn't made it to theaters yet",
      baseURL1:
        "https://api.themoviedb.org/3/search/movie?api_key=cccd068854b8f25c4c97f38feb725d78&language=en-US&query=",
      baseURL2: "&page=1&include_adult=false",
      imgPath: "https://image.tmdb.org/t/p/w500",
      test:
        "https://api.themoviedb.org/3/search/movie?api_key=cccd068854b8f25c4c97f38feb725d78&language=en-US&query=wick&page=1&include_adult=false",
      favorites: [],
      loaded: false,
      searchResults: ""
    };
  },
  methods: {
    getMovies: function() {
      this.$http
        .get(`${this.baseURL1} + ${this.search} + ${this.baseURL2}`)
        .then(function(data) {
          console.log(data.body.result);
          this.movies = data.body.results.slice(0, 9);
          this.search = "";
        });
    },
    fetchMovies: async function() {
      const request = await fetch(
        `${this.baseURL1} + ${this.search} + ${this.baseURL2}`
      );
      const response = await request.json();
      const results = await response.results;
      // console.log(results);
      this.movies = results.slice(0, 9);
      this.loaded = true;
      this.search = "";
      this.searchResults = results.slice(0, 18);
      console.log(this.searchResults);
    },
    addToFaves: function(e) {
      e.target.classList.toggle("starActive");
    },
    loadMore: function() {
      this.movies = this.searchResults;
    }
  },
  filters: {
    snippet: function(value) {
      return value.slice(0, 150) + "...";
    }
  }
};
</script>

<style scoped>
*,
*::after,
*::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
html {
  font-size: 62.5%;
}

#homeWrapper {
  max-width: 100vw;
  height: 80vh;
  display: grid;
  grid-template-columns: 10rem calc(100% - 10rem);
  grid-auto-flow: row;
}

#sidebar {
  background: #555;
  max-width: 10rem;
  height: 100%;
  display: flex;
  flex-direction: column;
}
#contentArea {
  background: #333;
  width: 100%;
  height: 100%;
}
#searchSection {
  max-width: 100%;
  height: 2.2rem;
  text-align: center;
  margin-bottom: 4rem;
  margin-top: 0.5rem;
}
#search {
  margin: 0 auto;
  width: 60%;
  height: 100%;
  font-size: 1.3rem;
  font-weight: 300;
  border: none;
  outline: none;
  background: transparent;
  border-bottom: 0.2rem solid #e84855;
  padding-left: 0.5rem;
  color: #eaecef;
}
#search:focus {
  border-bottom: 0.2rem solid #5cbcea;
}
#searchBtn {
  padding: 0.7rem 1.2rem;
  background: #e84855;
  color: #fff;
  outline: none;
  border: none;
  border-radius: 0.3rem;
  cursor: pointer;
}
#searchBtn:hover {
  background: #5cbcea;
}
#displaySection {
  width: 100%;
  height: calc(100% - 6.2rem);
  padding: 1rem 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex: 1 0 33.33%;
}
.icon {
  width: 1.5rem;
  height: 1.5rem;
}
.sideLink {
  display: flex;
  justify-content: flex-start;
  padding-left: 0.5rem;
  position: relative;
}
.sideLink:first-child {
  margin-bottom: 0.5rem;
}

.sideLink_text {
  padding-left: 1rem;
  align-self: center;
  text-decoration: none;
  font-family: "Nunito";
  color: #5cbcea;
}

/* -- Icon Colors --*/
.home {
  fill: #111;
  color: #5cbcea;
  font-weight: 500;
  font-size: 1.2rem;
}
.underline {
  position: absolute;
  height: 0.2rem;
  width: 0%;
  bottom: 0;
  left: 30%;
  border-bottom: 0.2rem solid #5c75ea;
  z-index: 10;
  transition: all 0.2s ease-in-out;
}
.sideLink_text:hover ~ .underline {
  width: 3.2rem;
  z-index: 10;
}
a:-webkit-any-link {
  text-decoration: none;
}
.router-link-active .sideLink_text {
  color: #e84855;
}
h5 {
  text-align: center;
  color: #c7bfc5;
  font-family: "Nunito";
  font-size: 1rem;
}
/*-- Response data styling --*/
.movie {
  max-width: 33.33%;
  /* flex: 1 0 33.33%; */
  height: 15rem;
  border: 0.1rem solid #fff;
  object-fit: fill;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #000;
  color: #fff;
  border-radius: 0.3rem;
}
.movieImg {
  height: 40%;
  width: 100%;
  border-radius: 0.3rem;
}
.movieImage {
  max-width: 100%;
  max-height: 100;
  object-fit: cover;
  object-position: center;
  border-radius: 0.3rem;
}
.movieTitle {
  height: 35%;
  padding: 0.2rem 0.5rem;
}
.movieTitle h4 {
  font-size: 1rem;
  font-family: "Nunito";
  color: #e84855;
}
.movieTitle p {
  font-size: 0.8rem;
  font-family: "Nunito";
}
#score {
  color: #5c75ea;
}
.faves {
  font-family: "Nunito";
  font-size: 0.7rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.star {
  cursor: pointer;
  fill: #fff;
}
.starActive {
  fill: #e84855;
}
#loadMore {
  height: 2rem;
  padding: 0.5rem 1.2rem;
  border: none;
  outline: none;
  border-radius: 0.3rem;
  background: #e84855;
  color: #fff;
  font-size: 0.7rem;
  margin-top: 2rem;
  transition: all 0.2s ease-in;
}
#loadMore:hover {
  transform: scale(1.1) translateY(-0.2rem);
  cursor: pointer;
}
</style>
