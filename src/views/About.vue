<template>
  <div>Hello, Here is About page.</div>
  <p>Take a message?</p>
  <input
    v-model="message"
    class="border rounded-lg outline-none px-2 py-1"
    type="text"
    @keydown.enter="handleClick"
  />
  <button class="btn card ml-2" @click="handleClick">Emit!</button>
</template>

<script lang="ts" setup>
import { ref } from '@vue/reactivity';
import Message from '../components/Message/Message';

const message = ref('');

const handleClick = () => {
  if (!message.value) return;
  Message(message.value);
  message.value = '';
};
</script>

<style scoped lang="scss"></style>
