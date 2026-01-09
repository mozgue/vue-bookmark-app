<script setup lang="ts">
const { size = 32 } = defineProps<{ size?: number }>();
</script>

<template>
  <button class="button-icon" :style="{ width: `${size}px`, height: `${size}px` }">
    <slot></slot>
  </button>
</template>

<style scoped>
.button-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-fg);
  color: var(--color-bg);
  cursor: pointer;
  border-radius: 50px;
  border: none;
}
.button-icon:hover {
  opacity: 0.8;
}
</style>
