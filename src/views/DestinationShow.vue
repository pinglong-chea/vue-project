<template>
  <div>
    <h2>Hello Destination {{ $route.params.id }}</h2>
  </div>
</template>

<script>
import sourceData from '@/data.json'
export default {
  computed: {
    destinationId() {
      return parseInt(this.$route.params.id)
    },
    destination() {
      return sourceData.destinations.find(destination => destination.id === this.destinationId)
    }
  }
}
</script>
