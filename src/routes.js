import homePage from './components/homePage.vue'
import favorites from './components/homePageComps/favorites.vue'
import myMovies from './components/homePageComps/myMovies.vue'
import myTV from './components/homePageComps/myTV.vue'
import recents from './components/homePageComps/recents.vue'
import userProfile from './components/homePageComps/userProfile.vue'
import genres from './components/homePageComps/genres.vue'
import nowPlaying from './components/homePageComps/nowPlaying.vue'
import comingSoon from './components/homePageComps/comingSoon.vue'

export default [{
    path: '/',
    name: 'homePage',
    component: homePage
  },
  {
    path: '/recents',
    name: 'recents',
    component: recents
  },
  {
    path: '/myTV',
    name: 'myTV',
    component: myTV
  },
  {
    path: '/myMovies',
    name: 'myMovies',
    component: myMovies
  },
  {
    path: '/favorites',
    name: 'favorites',
    component: favorites
  },
  {
    path: '/genres',
    name: 'genres',
    component: genres
  },
  {
    path: '/nowPlaying',
    name: 'nowPlaying',
    component: nowPlaying
  },
  {
    path: '/comingSoon',
    name: 'comingSoon',
    component: comingSoon
  },
  {
    path: '/user',
    name: 'user',
    component: userProfile
  }

]
