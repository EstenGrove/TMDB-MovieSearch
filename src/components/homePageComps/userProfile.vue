<template>
  <div id="wrapper">
    <h2>{{user.name}}</h2>
  </div>
</template>

<script>
export default {
  name: "user",
  data() {
    return {
      user: 'JoshJesuit'
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
