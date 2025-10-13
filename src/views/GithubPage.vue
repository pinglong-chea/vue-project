<script setup>
import { BiHomeAlt } from "react-icons/bi";


import GithubCard from '@/components/GithubCard.vue'
const usernames = ['mojombo', 'defunkt', 'pjhyett', 'torvalds', 'gaearon']
</script>
<template>
  <div class=" flex flex-col gap-y-6 md:gap-y-8">
    <div class="badge badge-xl bg-primary/40 border-none self-end">
      <h1>Github</h1>
    </div>
    <div class="grid gap-y-6 grid-cols-1">
      <GithubCard v-for="(username, index) in usernames" :key="username" :username="username"
        :align-left="index % 2 === 0" />
    </div>
    <router-link to="/" class="w-fit"><BiHomeAlt /> <button class="btn bg-success/50">Back home</button> </router-link>
  </div>
</template>
