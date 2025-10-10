<script setup>
import GithubCard from '@/components/GithubCard.vue'
</script>

<template>
  <h1>Github Page</h1>
  <GithubCard username="mojombo"></GithubCard>
  <GithubCard username="defunkt"></GithubCard>
  <GithubCard username="pjhyett"></GithubCard>

  <router-link to="/">Back home</router-link>
</template>
