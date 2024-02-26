<script setup>
import { RouterLink, RouterView } from "vue-router";
import { ref } from "vue";
// import store from "./store";
// import router from "./router";

const isSmallScreen = ref(false);

const menuRef = ref(null);

// const isLoggedIn = ref(store.state.isLoggedIn);

// const route = useRoute();
// route.afterEach(() => {
//   isLoggedIn.value = store.state.isLoggedIn;
// })

function openMenu() {
  if (menuRef.value.style.display === "none") {
      menuRef.value.style.display = "flex";
    } else {
      menuRef.value.style.display = "none"
    }
}

function closeMenu() {
  isSmallScreen.value = window.innerWidth < 760;

  if (isSmallScreen.value) {
    menuRef.value.style.display = "none"
  }
}
</script>

<template>
  <nav class="nav">
    <div class="men">
      <div class="main-logo" style="background: transparent;">
        <RouterLink to="/" class="logo" @click="closeMenu">DigiVote</RouterLink>
      </div>

      <span class="open" @click="openMenu()">&#9776;</span>
    </div>

    <div class="link-container" ref="menuRef">      
      <div class="nav-links">
        <RouterLink to="/" class="link" @click="closeMenu">Home</RouterLink>
        <RouterLink to="/dashboard" class="link" @click="closeMenu">Dashboard</RouterLink>
      </div>

      <div class="auth-links">
        <RouterLink to="/login" class="link" @click="closeMenu">Login</RouterLink>
        <RouterLink to="/create-accout" class="link" @click="closeMenu">Create Accout</RouterLink>
      </div>
      <!-- <div class="auth-links">
        <RouterLink to="/" class="link" @click="closeMenu">Logout</RouterLink>
      </div> -->
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
    color: white;
    background: transparent;
    text-decoration: none;
    font-size: 28px;
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
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
    display: none;
    color: #fff;
  }

  @media screen and (max-width:760px) {
    .nav1{
      justify-content: space-between;
      max-width: 100%;
    }
    .nav, .auth-links, .nav-links {
      display: flex;
      flex-direction: column;
      height: 100%;
    }

    .link-container{
      display: none;
      flex-direction: column;
      gap: 0;
      position: absolute;
      top: 8vh;
      width: 200px;
      right: 0;
      height: 50vh;
      padding-top: 20px;
      background: crimson;
      z-index: 1;
      transition: right 0.5s ease-in-out;
    }

    .men {
      display: flex;
      justify-content: space-between;
    }

    .open{
      display: block;
    }
  }
</style>
