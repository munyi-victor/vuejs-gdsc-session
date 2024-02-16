<script setup>
function handleSubmit() {
  
}
</script>

<template>
  <main>
    <div>
      <form class="form" @submit="handleSubmit">
        <div>
          <label>Name:</label>
          <input type="text" placeholder="Enter name" required/>
        </div>

        <div>
          <label>Password:</label>
          <input type="password" placeholder="Enter password" required/>
        </div>

        <button type="submit" class="btn">Submit</button>
      </form>
    </div>
  </main>
</template>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.form div{
  display: flex;
  flex-direction: column;
}

.form div label {
  font-size: 16px;
  font-weight: bold;
}
.form div input {
  padding: 10px;
  border-radius: 10px;
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
    justify-content: center;
    text-align: center;
  }
</style>