<script setup>
import { ref } from 'vue'

let email = ref("")
let password = ref('')

async function handleSubmit(event) {
  try {
    event.preventDefault()
    alert(`Email is ${email.value} and passowrd is ${password.value}`)

    email.value = ""
    password.value = ''
  } catch (error) {
    alert(error)
  }
}
</script>

<template>
  <main>
    <div>
      <form class="form" @submit="handleSubmit">
        <div style="text-align: center; margin-bottom: 20px;">
          <h2>Login</h2>
        </div>

        <div>
          <label>Email:</label>
          <input type="email" v-model="email" placeholder="Enter email" required />
        </div>

        <div>
          <label>Password:</label>
          <input type="password" v-model="password" placeholder="Enter password" required />
        </div>

        <button type="submit" class="btn">Login</button>

        <div>
          <p style="font-size: 18px; margin-left: 8px; margin-top: 20px;">
            Don't have an account? <RouterLink to="/register">Login</RouterLink>
          </p>
        </div>
      </form>
    </div>
  </main>
</template>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 40vw;
  text-align: left;
  border: 1px solid black;
  border-radius: 1rem;
  padding: 20px;
  margin: 0 30vw;
  margin-top: 10vh;
  height: 70vh;
  background-color: #eee;
}
.form div {
  display: flex;
  flex-direction: column;
}

.form div label {
  font-size: 18px;
  font-weight: bold;
}
.form div input {
  padding: 10px;
  border-radius: 10px;
  font-size: 18px;
  background-color: #fff;
}
.btn {
  display: flex;
  padding: 10px 20px;
  border: none;
  border-radius: 15px;
  background-color: #000;
  color: #fff;
  margin-top: 10px;
  font-size: 18px;
  cursor: pointer;
  justify-content: center;
  text-align: center;
}
.btn:hover {
  background-color: #333;
}

@media screen and (max-width: 760px) {
  .form {
    margin: 10vh 10vw;
    width: 80vw;
  }
}
</style>