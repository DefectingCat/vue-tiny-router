<template>
  <component :is="component"></component>
</template>

<script lang="ts" setup>
import { onUpdated, shallowRef } from 'vue';
import routes from './routes';

let currentPath = window.location.pathname;
const component = shallowRef(
  routes.find((item) => item.path === currentPath)?.component
);

const handleEvent = (e: CustomEvent<string>) => {
  console.log(e.detail);
  currentPath = e.detail;
  component.value = routes.find((item) => item.path === currentPath)?.component;
};

document.addEventListener('route', handleEvent as EventListener);

onUpdated(() => {
  console.log(component);
});
</script>

<style scoped lang="scss"></style>
