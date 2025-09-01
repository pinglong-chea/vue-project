<script setup>
import { ref, onUnmounted, onMounted } from 'vue'
import CoffeePlan from './CoffeePlan.vue'
const plans = ref(['The Single', 'The Curious', 'The Addict', 'The Hacker'])

const selectedCoffeePlan = ref();

function handleSelectCoffeePlan(name) {
  selectedCoffeePlan.value = name;
}

onUnmounted(() => {
  console.log("Bye")
})

</script>
<template>
  <div class="plans">
    {{ selectedCoffeePlan }}
    <CoffeePlan v-for="plan in plans" :key="plan" :name="plan" @selected="handleSelectCoffeePlan"
      :selected="plan === selectedCoffeePlan" />
  </div>
</template>
