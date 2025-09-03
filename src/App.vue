<script setup>
import FancyButton from './components/FancyButton.vue';
import PlanPicker from './components/PlanPicker.vue';
import GithubCard from './components/GithubCard.vue';
import { ref } from 'vue';
const show = ref(true)

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

<template>
  <div class="p-5">
    hiu
  </div>
</template>
