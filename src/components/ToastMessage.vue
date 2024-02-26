<script>
export default {
  props: ['message']
};
</script>

<template>
  <div>
    <p>{{ message }}</p>
  </div>
</template>

<style scoped>
p{
  position: absolute;
  top: 20vh;
  text-align: center;
  background-color: red;
  color: white;
  z-index: 10;
  left: 45vw;
}
</style>