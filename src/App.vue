<template>
  <div id="app">
    <app-nav></app-nav>
    <home-page></home-page>
  </div>
</template>

<script>
import nav from "./components/nav";
import homePage from "./components/homePage";
export default {
  name: "app",
  components: {
    "app-nav": nav,
    "home-page": homePage
  },
  data() {
    return {
      
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
#app {
  margin: 2rem auto;
}
</style>
