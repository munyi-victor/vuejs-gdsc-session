<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <nav class="nav">
    <div class="main-logo" style="background: transparent;">
      <RouterLink to="/" class="logo">DigiVote</RouterLink>
    </div>

    <div class="link-container">
      <span class="open">Open</span>
      <div class="nav-links">
        <RouterLink to="/" class="link">Home</RouterLink>
        <RouterLink to="/landing" class="link">Landing</RouterLink>
        <RouterLink to="/contact" class="link">Contact</RouterLink>
      </div>

      <div class="auth-links">
        <RouterLink to="/login" class="link">Login</RouterLink>
        <RouterLink to="/register" class="link">Register</RouterLink>
      </div>
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
    padding: 12px 80px;
    justify-content: space-between;
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

  .link-container {
    display: flex; 
    gap: 30px;
  }

  .nav-links {
    background-color: transparent; 
    display: flex; 
    gap: 20px;
  }

  .auth-links {
    background: transparent;
    display: flex;
    gap: 20px;
  }

  .open {
    display: none;
  }

  @media screen and (max-width:760px) {
    .nav{
      justify-content: space-between;
    }
    .nav, .auth-links, .nav-links {
      display: flex;
      flex-direction: column;
      gap: 10px;
      height: 100%;
    }

    .link-container {
      display: flex;
      flex-direction: column;
      gap: 10px;
      position: absolute;
      right: 0;
      top: 0;
      background-color: crimson;
      z-index: 10;
      width: 200px;
      height: 50vh;
      padding-top: 20px;
    }

    .open{
      display: block;
    }
  }
</style>
