// API: https://api.themoviedb.org/3/search/movie?api_key=cccd068854b8f25c4c97f38feb725d78&language=en-US&query=wick&page=1&include_adult=false

window.onload = async function nowPlaying() {
    const request = await fetch(this.URL);
    const response = await request.json();
    const results = await response.results;
    this.movies = results.slice(0, 9);
    this.loadedResults = results.slice(0, 18);
  }
