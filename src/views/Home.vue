<template>
  <div>Hello, Here is Home page</div>
  <p>Count: {{ count }}</p>
  <button class="btn card my-2" @click="() => count++">Add one</button>
</template>

<script lang="ts" setup>
import { ref } from '@vue/reactivity';

const count = ref(0);
</script>

<style scoped lang="scss"></style>
