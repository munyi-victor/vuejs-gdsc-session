<script setup>
import { ref } from 'vue'
import { useToast } from 'vue-toast-notification';
import router from '@/router';

const toast = useToast();

const name = ref('')
const email = ref("")
const password = ref('')
const confirm = ref('')

async function handleSubmit(event) {
  try {
    event.preventDefault()

    if (name.value < 4 || password.value < 8) {
      toast.info("Please enter the details as required", {
        duration: 3000,
        position:"top-left"
      })
    } else if (confirm.value !== password.value) {
      toast.info("Confirm password must match password", {
        duration: 3000,
        position:"top-left"
      })
    } else {
      toast.info("Account created successfully!", {
        duration: 3000,
        position:"top-left"
      })

      router.push("/");

      name.value = ''
      email.value = ""
      password.value = ''
      confirm.value = ""
    }
  } catch (error) {
    alert(error)
  }
}
</script>

<template>
  <main>
    <div>
      <form class="form" @submit="handleSubmit">
        <div style="text-align: center">
          <h2>Register now</h2>
        </div>

        <div>
          <label>Name:</label>
          <input type="text" v-model="name" placeholder="Enter name" required />
        </div>

        <div>
          <label>Email:</label>
          <input type="email" v-model="email" placeholder="Enter email" required />
        </div>

        <div>
          <label>Password:</label>
          <input type="password" v-model="password" placeholder="Enter password" required />
        </div>

        <div>
          <label>Confirm password:</label>
          <input type="password" v-model="confirm" id="confirm" placeholder="Confirm password" required />
        </div>

        <button type="submit" class="btn">Register</button>

        <div>
          <p style="font-size: 18px">
            Alredy have an account? <RouterLink to="/login">Login</RouterLink>
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
  height: 75vh;
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
