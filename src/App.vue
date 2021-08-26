<template>
  <ul class="flex">
    <li v-for="route of routers" :key="route.path">
      <router-link :to="route.path">{{ route.name }}</router-link>
    </li>
  </ul>

  <div class="my-4">
    <router-view />
  </div>
</template>

<script lang="ts" setup>
import routers from './router/routers';
</script>

<style scoped lang="scss"></style>
