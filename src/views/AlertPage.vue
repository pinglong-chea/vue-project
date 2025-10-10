<script setup>
import { ref } from 'vue'
import AppAlert from '@/components/AppAlert.vue'

const alerts = ref([
  {
    type: 'info',
    message: 'Here is your purchase',
  },
  {
    type: 'warning',
    message: 'Please check your purchase again',
  },
  {
    type: 'success',
    message: 'Your purchase has been confirmed!',
  },
  {
    type: 'error',
    message: 'Error! Task failed successfully.',
  },
])
</script>
<template>
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
</template>
