<template>
  <ul class="flex">
    <li v-for="route of routes" :key="route.path">
      <router-link :to="route.path">{{ route.name }}</router-link>
    </li>
  </ul>

  <div class="my-4">
    <router-view />
  </div>
</template>

<script lang="ts" setup>
import routes from './router/routes';
</script>

<style scoped lang="scss"></style>
