<template>
  <div>
  
  </div>
</template>

<script>
export default {
  name: "nowPlaying",
  data() {
    return {
      URL: 'https://api.themoviedb.org/3/movie/now_playing?api_key=cccd068854b8f25c4c97f38feb725d78&language=en-US&page=1',
      movies: [],
      loadedResults: ''
    };
  },
  methods: {
    nowPlaying: async function() {
      const request = await fetch(this.URL);
      const response = await request.json();
      const results = await response.results;
      this.movies = results.slice(0, 9);
      this.loadedResults = results.slice(0, 18);
    },
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
</style>
