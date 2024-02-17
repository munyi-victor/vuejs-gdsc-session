<script setup>
  import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <nav class="nav">
    <div class="main-logo" style="background: transparent;">
      <RouterLink to="/" class="logo">DigiVote</RouterLink>
    </div>

    <div style="background-color: transparent; display: flex; gap: 20px;">
      <RouterLink to="/" class="link">Home Page</RouterLink>
      <RouterLink to="/landing" class="link">Landing Page</RouterLink>
      <RouterLink to="/contact" class="link">Contact Page</RouterLink>
    </div>

    <div class="auth-links">
      <RouterLink to="/login" class="link">Login</RouterLink>
      <RouterLink to="/register" class="link">Register</RouterLink>
    </div>
  </nav>
  <RouterView/>
</template>

<style scoped>
  .nav {
    top: 0;
    position: relative;
    display: flex;
    background-color: crimson;
    width: 100%;
    height: 8vh;
    padding: 12px 0;
    justify-content: space-around;
  }
  .link {
    text-decoration: none;
    font-size: 20px;
    cursor: pointer;
    background: transparent;
    color: white;
  }

  .logo {
    color: black;
    background: transparent;
    text-decoration: none;
    font-size: 22px;
    font-weight: bold;
  }

  .auth-links {
    background: transparent;
    display: flex;
    gap: 20px;
  }
</style>
