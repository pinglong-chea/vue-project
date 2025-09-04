<script setup>
// import FancyButton from './components/FancyButton.vue';
// import PlanPicker from './components/PlanPicker.vue';
// import GithubCard from './components/GithubCard.vue';
// import AppAlert from './components/AppAlert.vue';
import SwitchGame from './components/SwitchGame.vue';
import { ref } from 'vue';
// const show = ref(true)

// const alerts = ref([
//   {
//     type: 'info',
//     message: 'Here is your purchase'
//   },
//   {
//     type: 'warning',
//     message: 'Please check your purchase again'
//   },
//   {
//     type: 'success',
//     message: 'Your purchase has been confirmed!'
//   },
//   {
//     type: 'error',
//     message: 'Error! Task failed successfully.'
//   }
// ])


</script>

<!-- <template>
  <div class="content">
    <h1 class="title">Coffee Plans</h1>

    <h2 class="subtitle">
      We travel the world to source the very best single origin coffee for you
    </h2>

    <label for="">
      <input type="checkbox" v-model="show" />
      Show plan picker
    </label>

    <PlanPicker v-if="show" />
    <FancyButton>
      <template #icon="{ hover }">
        {{ hover ? '👋' : '➡️' }}
      </template>
      Submit
    </FancyButton>
  </div>
</template> -->

<!-- <template>
  <GithubCard username="mojombo"></GithubCard>
  <GithubCard username="defunkt"></GithubCard>
  <GithubCard username="pjhyett"></GithubCard>
</template> -->

<!-- <template>
  <div class="p-5">
    <AppAlert
      v-for="alert in alerts"
      :key="alert.message"
      :type="alert.type"
      @closed="alerts = alerts.filter((a) => a.message !== alert.message)"
    >
      {{ alert.message }}
    </AppAlert>
  </div>
</template> -->

<template>
  <div v-for="n in 20" :key="n">
    <SwitchGame :id="n" />
  </div>
</template>
