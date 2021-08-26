<template>
  <div
    v-if="visible"
    class="
      rounded-lg
      border-gray-300 border
      inline-flex
      my-4
      py-2
      px-2
      bg-light-300
      shadow
    "
    @mouseenter="stopTime"
    @mouseleave="startTime"
  >
    {{ message }}
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
interface Props {
  message?: string;
  duration?: number;
}

const props = withDefaults(defineProps<Props>(), {
  message: '',
  duration: 3000,
});

const visible = ref(true);
const timer = ref(0);

const startTime = () => {
  timer.value = setTimeout(() => {
    visible.value = false;
  }, props.duration);
};

const stopTime = () => {
  clearTimeout(timer.value);
};

onMounted(() => {
  startTime();
});
</script>

<style scoped lang="scss"></style>
