<script setup>
import CardComponent from '@/components/CardComponent.vue';

</script>

<template>
  <div class=" flex flex-col gap-y-6 md:gap-y-8">
    <div class="badge badge-xl bg-primary/40 border-none self-end">
      <h1>Home</h1>
    </div>


    <div class="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 self-center xl:gap-12 md:gap-8 gap-6">
      <CardComponent card-title="Github" card-body="Go to Github Page with Username, Followers, and Followings"
        link-to="/github" link-body="View Github" />

      <CardComponent card-title="Alert" card-body="Go to Alert Page" link-to="/alert" link-body="View Alert" />
      <CardComponent card-title="Plan Picker" card-body="Go to Plan Picker Page" link-to="/plan"
        link-body="View Alert" />

    </div>
  </div>
</template>
