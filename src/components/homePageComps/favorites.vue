<template>
  <div>
    <h2>{{title}}</h2>
  </div>
</template>

<script>
export default {
  name: "favorites",
  data() {
    return {
      title: "This is your Favorites Panel"
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
</style>
