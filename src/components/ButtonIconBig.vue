<script setup lang="ts">
const { size = 48 } = defineProps<{ size?: number }>();
</script>

<template>
  <button class="button-icon-big" :style="{ width: `${size}px`, height: `${size}px` }">
    <slot></slot>
  </button>
</template>

<style scoped>
.button-icon-big {
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: 3px solid var(--color-bg);
  border-radius: 50% !important;
  color: var(--color-bg);
  cursor: pointer;
  border-radius: 50%;
}
.button-icon-big:hover {
  background-color: var(--color-bg-hover);
}
</style>
