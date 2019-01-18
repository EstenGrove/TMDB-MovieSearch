<template>
  <div id="navWrapper">
    <nav>
        <div id="toggle">
            <a href="#" id="toggleIcon">
                <svg class="toggleBtn">
                    <use xlink:href="/src/assets/sprite.svg#icon-creative-commons-noderivs"></use>
                </svg>
            </a>
            <!-- <div class="toggleMenu">
                <a href="#" class="toggleLink">Home</a>
                <a href="#" class="toggleLink">Now Playing</a>
                <a href="#" class="toggleLink">Genres</a>
                <a href="#" class="toggleLink">Coming Soon!</a>
            </div> -->
        </div>
        <a href="#" class="navLink"><router-link to="/" exact>Home</router-link></a>
        <a href="#" class="navLink"><router-link to="/nowPlaying" exact>Now Playing</router-link></a>
        <a href="#" class="navLink"><router-link to="/genres" exact>Genres</router-link></a>
        <a href="#" class="navLink"><router-link to="/comingSoon" exact>Coming Soon!</router-link></a>
        <div id="user">
            <a href="#" class="userMenu">
              <router-link to="/user" exact>
                <svg class="icon">
                    <use xlink:href="/src/assets/sprite.svg#icon-mask"></use>    
                </svg> 
                </router-link>
            </a>
        </div>
    </nav>
  </div>
</template>

<script>
import homePage from "./homePage";
import nowPlaying from "./homePageComps/nowPlaying";
import genres from "./homePageComps/genres";
import comingSoon from "./homePageComps/comingSoon";
export default {
  data() {
    return {
      title: "This is the navbar, thanks"
    };
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
   
#navWrapper {
  background: #222;
  max-width: 100%;
}
nav {
  width: 100%;
  height: 2.8rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  flex-basis: 8.8rem;
  position: relative;
}
.navLink {
  text-decoration: none;
  font-size: 1rem;
  font-family: "Nunito";
  font-weight: 300;
  color: #e84845;
  padding: 0.5rem 1rem;
  flex-shrink: 1;
  transition: all 0.1s ease-in-out;
}
.navLink:hover {
  border-bottom: 0.1rem solid #8a5cea;
}
div#user {
  order: 5;
  position: absolute;
  top: 12%;
  right: 1rem;
  padding: 0.2rem 0.3rem;
  border: 1px solid #8a5cea;
  border-radius: 50%;
  background: #f6f6f6;
}
#user:hover {
  cursor: pointer;
}

.icon {
  width: 1rem;
  height: 1rem;
  fill: #000;
}
@media (min-width: 720px) {
  #toggle {
    display: none;
  }
}
@media (max-width: 720px) {
  .navLink {
    display: none;
  }
  nav {
    justify-content: space-between;
  }
}
#toggle {
  width: 2rem;
  height: 100%;
}
.toggleBtn {
  width: 100%;
  height: 100%;
  fill: #e84845;
  position: relative;
  z-index: 20;
}
#toggleIcon {
  width: 100%;
  height: 100%;
  stroke: 1;
  position: relative;
  z-index: 200;
}
a:-webkit-any-link {
  text-decoration: none;
  color: #e84855;
}
.router-link-active {
  border-left: 1px solid #8a5cea;
  border-right: 1px solid #8a5cea;
  border-radius: 0.3rem;
  padding: 0.2rem 0.2rem;
}
</style>
