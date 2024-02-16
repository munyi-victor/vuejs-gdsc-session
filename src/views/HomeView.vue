<script setup>
import { ref } from "vue";

let timetable = [
  {
    period:"Morning",
    time: "8:00 a.m"
  },
  {
    period:"Noon",
    time: "12:00 p.m"
  },
  {
    period:"Afternoon",
    time: "2:00 p.m"
  },
  {
    period:"Evening",
    time: "6:00 p.m"
  }
]

let show = ref(false)

function showTimetable() {
  show.value = true
}
</script>

<template>
  <main>
    <h1>Welcome to Vue</h1>

    <div class="grid" v-if="show===true">
      <div v-for="i in timetable" :key="i">
        <p>{{ i.period }}</p>
        <p>{{ i.time }}</p>
    </div>
    </div>
    <div v-else>
      <p>No timetable</p>
    </div>

    <!-- <p v-if="show===false">0708xxxx36</p>
    <p v-else>0708905136</p> -->

    <!-- <div class="grid">
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
    </div> -->

    <button class="btn" @click="showTimetable">Click to view timetable</button>
  </main>
</template>


<style scoped>
  h1{
    color: red;
  }
  p{
    font-size: 18px;
  }
  .grid{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    font-size: 18px;
  }
  .btn {
    display: flex;
    padding: 10px 20px;
    border: none;
    border-radius: 10px;
    background-color: black;
    color: white;
    margin-top: 10px;
    font-size: 18px;
    cursor: pointer;
  }
</style>