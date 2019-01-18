# Title: tmdb-search

> A movie search App using the TMDb API

# build for production with minification

npm run build

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).

Architecture

                            App.vue(root)
                           /       \
                      nav.vue     homePage.vue-- userProfile.vue 
                                 /                       \
                    inTheatres.vue                      favorites.vue
                    /             \
            genres.vue          nowPlaying.vue

Color Palette:

-Primary Palette:
Main: #e84855
Accent: #5cbcea

BoxShadow:
-webkit-box-shadow: -2px 2px 32px -2px rgba(0,0,0,0.75);
-moz-box-shadow: -2px 2px 32px -2px rgba(0,0,0,0.75);
box-shadow: -2px 2px 32px -2px rgba(0,0,0,0.75);

#e84855 - FLATRED ACCENTS
#d7263d - MAIN Vermillion
#eb2f64 - BRIGHT accents
#c7bfc5 - main font grey/white

#5c75ea - rgb(92, 117, 234)
#8a5cea - rgb(138, 92, 234)
#d7263d - rgb(215, 38, 61)
#c7bfc5 - rgb(199, 191, 197)
#e84855 - rgb(232, 72, 85)
#5cbcea - rgb(92, 188, 234)
#eaecef - rgb(234,236,239) - light border grey

TMDb API:
https://api.themoviedb.org/3/movie/550?api_key=cccd068854b8f25c4c97f38feb725d78
API Key: cccd068854b8f25c4c97f38feb725d78

Search Query: https://api.themoviedb.org/3/search/movie?api_key=cccd068854b8f25c4c97f38feb725d78&language=en-US&query=wick&page=1&include_adult=false

## Useful properties from HTTP GET request:

movie.title,
movie.poster_path
movie.overview
