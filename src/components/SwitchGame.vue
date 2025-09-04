<script setup>
import { ref, onMounted } from 'vue';

const props = defineProps({
  id: { type: Number, required: true }
})

const game = ref(null)
const error = ref(null)

onMounted(async () => {
  try {
    const res = await fetch(`https://api.sampleapis.com/switch/games/${props.id}`)
    if (!res.ok) {
      throw new Error(`Game with ID ${props.id} not found`)
    }
    const data = await res.json()

    if (!data || Object.keys(data).length === 0) {
      throw new Error(`Game with ID ${props.id} not found`)
    }

    game.value = data
  } catch (err) {
    error.value = err.message
  }
})
</script>

<template>
  <!-- ✅ show game if found -->
  <div v-if="game" class="card w-96 bg-base-500 card-md shadow-sm">
    <div class="card-body">
      <h1 class="card-title text-3xl">#{{ game.id }} {{ game.name }}</h1>

      <h2 class="text-2xl">Genre</h2>
      <ul class="list-disc">
        <li v-for="(genre, i) in game.genre" :key="i" class="text-lg">
          {{ genre }}
        </li>
      </ul>

      <h2 class="text-2xl">Developer</h2>
      <ul class="list-disc">
        <li v-for="(dev, i) in game.developers" :key="i" class="text-lg">
          {{ dev }}
        </li>
      </ul>

      <h2 class="text-2xl">Release Dates</h2>
      <ul class="list-disc">
        <li v-for="(releaseDate, country, i) in game.releaseDates" :key="i" class="text-lg">
          {{ country }}: {{ releaseDate }}
        </li>
      </ul>
    </div>
  </div>

  <div v-else-if="error" class="alert alert-warning shadow-lg w-96">
    <span>❌ {{ error }}</span>
  </div>
</template>
