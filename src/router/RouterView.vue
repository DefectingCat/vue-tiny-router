<template>
  <component :is="component"></component>
</template>

<script lang="ts" setup>
import { onUpdated, shallowRef } from 'vue';
import routers from './routers';

let currentPath = window.location.pathname;
const component = shallowRef(
  routers.find((item) => item.path === currentPath)?.component
);

const handleEvent = (e: CustomEvent<string>) => {
  console.log(e.detail);
  currentPath = e.detail;
  component.value = routers.find(
    (item) => item.path === currentPath
  )?.component;
};

document.addEventListener('route', handleEvent as EventListener);

onUpdated(() => {
  console.log(component);
});
</script>

<style scoped lang="scss"></style>
