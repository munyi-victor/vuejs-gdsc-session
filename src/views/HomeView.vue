<script setup>
import router from '@/router';
</script>

<template>
  <div class="home-conainer">
    <div style="margin-top: 20px;">
      <h1>Welcome to DigiVote</h1>
      <p style="font-size: 18px;">Your vote, your voice.</p>
    </div>

    <div class="overview-container">
      <div class="overview">
        <h3>Register</h3>
        <p>
          To vote you have to register with us first as a voter. Enter correct details during registration. There is no one who is allowed to vote when they not registered. One can only have one account and vote only once.
        </p>
      </div>

      <div class="overview">
        <h3>Candidate</h3>
        <p>
          If you want to vie, create an account and register as a candidate. After passing the requirements for candidate eligibility, your name will be put on candidates list.
        </p>
      </div>

      <div class="overview">
        <h3>Voting process</h3>
        <p>
          After confirming all registered candidates, the platform will produce a simple interface where all voters can vote for teir preferred candidates. 
        </p>
      </div>

      <div class="overview">
        <h3>Votes tally</h3>
        <p>After voting exercise, tallying will be done automatically and realtime results will be displayed on the system. All registered voters will be able to track their candidates' position.</p>
      </div>

      <div class="overview">
        <h3>Accuracy</h3>
        <p>
          And since tallying is done automatically, we guarantee a 100% accuracy on our tally and results. In case of anything, the servers will be opened to track the votes.
        </p>
      </div>

      <div>
        <button class="btn" @click="router.push('/login')">Begin now</button>
      </div>
    </div>
  </div>
</template>


<style scoped>
.home-conainer{
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 40px;
  background: #fffdff;
}

.overview-container {
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 4vh 25vw;
}

.overview {
  background: rgba(255, 255, 255, 0.1);
  width: 50vw;
  height: 40vh;
  text-align: left;
  backdrop-filter: blur(10px);
  box-shadow: 2px 6px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 20px;
}

.overview p {
  margin-top: 10px;
}
</style>