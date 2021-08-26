<template>
  <a href="" class="border px-1 py-1" @click="handleClick">
    <slot></slot>
  </a>
</template>

<script lang="ts" setup>
const props = defineProps<{
  to: string;
}>();

const handleClick = (e: Event) => {
  e.preventDefault();
  const currentPath = window.location.pathname;
  if (currentPath === props.to) return;

  window.history.pushState('', '', props.to);
  document.dispatchEvent(
    new CustomEvent('route', {
      detail: props.to,
    })
  );
};
</script>

<style scoped lang="scss"></style>
