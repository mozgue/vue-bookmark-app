<script setup lang="ts"></script>

<template>
  <div>
    <button class="button">
      <slot></slot>
    </button>
  </div>
</template>

<style scoped>
.button {
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-fg);
  cursor: pointer;
  border-radius: 50px;
  height: 50px;
  padding: 12px 24px;
  border: none;
  color: var(--color-bg);
  font-size: 18px;
}
.button:hover {
  opacity: 0.8;
}
</style>
