<script setup>
import { onMounted, ref } from 'vue'

const props = defineProps({
  username: { type: String, required: true },
  alignLeft: { type: Boolean, default: true }
})

const user = ref(null)

onMounted(async () => {
  const response = await fetch(`https://api.github.com/users/${props.username}`)
  user.value = await response.json()
})
</script>

<template>
  <div v-if="user" :class="[
    props.alignLeft
      ? 'justify-center md:justify-self-start'
      : 'justify-center md:justify-self-end'
  ]">
    <div class="card bg-secondary/30 shadow-sm card-lg md:w-96">
      <div class="card-body">
        <h2 class="card-title">{{ user.name }}</h2>
        <p><strong>Followers:</strong> {{ user.followers }}</p>
        <p><strong>Following:</strong> {{ user.following }}</p>
      </div>
    </div>
  </div>
</template>
