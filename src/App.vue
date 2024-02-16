<script setup>
  import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <nav class="nav">
    <RouterLink to="/">Home Page</RouterLink>
    <RouterLink to="/landing">Landing Page</RouterLink>
    <RouterLink to="/contact">Contact Page</RouterLink>
  </nav>
  <RouterView/>
</template>

<style scoped>
  .nav {
    top: 0;
    position: absolute;
    display: flex;
    background-color: #eee;
    width: 100%;
    height: 10vh;
  }
</style>
