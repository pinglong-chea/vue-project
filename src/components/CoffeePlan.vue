<script setup>
import { ref } from 'vue';

defineProps({
  name: { type: String, default: 'Default Plan' },
})
const emit = defineEmits(['hi-there'])

const selected = ref(false)
function selectPlan () {
  selected.value = !selected.value
  emit('hi-there')
}
</script>
<template>
  <div @click="selectPlan" class="plan" :class="{ 'active-plan': selected }">
    <div class="description">
      <span class="title">{{ name }}</span>
    </div>
  </div>
</template>
