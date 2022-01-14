<template>
  <div class="App">
    <nav-bar />
    <router-view> </router-view>
  </div>
</template>

<script>
import Nav from "./components/Nav.vue";

export default {
  name: "App",
  components: {
    "nav-bar": Nav,
  },
};
</script>

<style></style>
