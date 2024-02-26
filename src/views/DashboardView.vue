<script setup>
import { ref } from 'vue';

import VoterRegistration from '@/components/VoterRegistration.vue';
import CandidateRegistration from '@/components/CandidateRegistration.vue'

let voterReg = ref(false);
let candidateReg = ref(false);

let registered = true

const registerVoter = () => {
  if (voterReg.value === false) {
    voterReg.value = true;
  } else {
    voterReg.value = false;
  }

  if (candidateReg.value === true) {
    candidateReg.value = false;
  }
}

const registerCandidate = () => {
  if (voterReg.value === true) {
    voterReg.value = false;
  }

  if (candidateReg.value === false) {
    candidateReg.value = true;
  } else {
    candidateReg.value = false;
  }
}
</script>

<template>
  <div v-if="registered===true">
    <div class="sidebar">
      <button type="button" @click="registerVoter">Register as Voter</button>
      <button type="button" @click="registerCandidate">Register as Candidate</button>
    </div>

    <div v-if="voterReg===true">
      <VoterRegistration/>
    </div>

    <div v-if="candidateReg===true">
      <CandidateRegistration/>
    </div>
  </div>

  <div v-else>
    <h3>You are registered!</h3>
    <div>
      <h4>Details</h4>
    </div>
  </div>
</template>

<style scoped>
.sidebar{
  margin-top: 20px;
}

.sidebar button {
  margin-right: 10px;
  padding: 10px;
  background-color: crimson;
  color: #fff;
  border-radius: 14px;
  outline: none;
  border: none;
  cursor: pointer;
}
</style>