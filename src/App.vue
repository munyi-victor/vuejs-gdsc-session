<script setup>
  import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <nav>
    <div>
      <RouterLink to="/">Home Page</RouterLink>
      <RouterLink to="/landing">Landing Page</RouterLink>
      <RouterLink to="/contact">Contact Page</RouterLink>
    </div>
  </nav>
  <RouterView/>
</template>
