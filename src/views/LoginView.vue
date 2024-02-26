<script setup>
import { ref } from 'vue';
import { useToast } from 'vue-toast-notification';
import router from '@/router';

import store from '@/store'

const email = ref("")
const password = ref('')

const toast = useToast();

async function handleSubmit(event) {
  try {
    event.preventDefault()

    if (password.value.length < 8) {
      toast.info("Password must be atleast 8 characters", {
        duration: 3000,
        position:'top-right'
      })
    } else {
      router.push("/dashboard");

      store.commit('setIsLoggedIn', true);

      email.value = ""
      password.value = ''
    }
  } catch (error) {
    alert(error)
  }
}
</script>

<template>
  <main class="container">
    <div>
      <form class="form" @submit="handleSubmit">
        <div style="text-align: center; margin-bottom: 20px;">
          <h2>Login</h2>
        </div>

        <div>
          <label>Email:</label>
          <input type="email" v-model="email" id="email" placeholder="Enter email" required />
        </div>

        <div>
          <label>Password:</label>
          <input type="password" v-model="password" id="password" placeholder="Enter password" required />
        </div>

        <button type="submit" class="btn">Login</button>

        <div>
          <p style="font-size: 18px; margin-left: 8px; margin-top: 20px;">
            Don't have an account? <RouterLink to="/create-accout">Create Accout</RouterLink>
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

@media screen and (max-width: 760px) {
  .form {
    margin: 10vh 10vw;
    width: 80vw;
  }
}
</style>