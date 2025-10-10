<script setup>
const props = defineProps({
  cardTitle: {
    type: String,
  },
  cardBody: {
    type: String
  },
  linkTo: {
    type: String
  },
  linkBody: {
    type: String
  }

})
</script>
<template>
  <div class="card bg-secondary/25 card-md xl:card-lg shadow-sm w-96">
    <div class="card-body">
      <h2 class="card-title">{{ props.cardTitle }}</h2>
      <p>{{ props.cardBody }}</p>
      <div class="justify-end card-actions">
        <button class="btn btn-info bg-info/40 rounded-lg text-white"><router-link :to="props.linkTo">{{ props.linkBody
            }}</router-link></button>
      </div>
    </div>
  </div>
</template>
