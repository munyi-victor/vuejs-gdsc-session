<script setup>
// let time = "8.00pm"

let timetable = [
  {
    period:"Morning",
    time: "8:00"
  },
  {
    period:"Noon",
    time: "12:00"
  },
  {
    period:"Afternoon",
    time: "2:00"
  },
  {
    period:"Evening",
    time: "6:00"
  }
]
</script>

<template>
  <main>
    <h1>Welcome to Vue</h1>

    <div v-for="i in timetable" :key="i">
      <div class="grid">
        <p>{{ i.period }}</p>
        <p>{{ i.time }}</p>
      </div>
    </div>

    <div class="grid">
      <div>
        <p>Morning</p>
      </div>
      <div>
        <p>Noon</p>
      </div>
      <div>
        <p>Afternoon</p>
      </div>
      <div>
        <p>Evening</p>
      </div>
    </div>
  </main>
</template>

<style scoped>
  .grid{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
  }
  .grid div {
    border: 1px solid black;
    padding: 10px;
  }
</style>