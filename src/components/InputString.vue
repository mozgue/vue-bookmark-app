<script setup lang="ts">
import { onMounted, useTemplateRef } from 'vue';

const data = defineModel<string>();
const input = useTemplateRef<HTMLInputElement>('input');

const { isFocused = false } = defineProps<{ isFocused?: boolean }>();

onMounted(() => {
  if (isFocused && input.value) {
    input.value.focus();
  }
});
</script>

<template>
  <input class="input-string" v-model="data" ref="input" />
</template>

<style scoped>
.input-string {
  width: 100%;
  padding: 0.75rem;
  border: none;
  border-bottom: 1px solid #e5e7eb;
  font-size: 1rem;
  transition: border-color 0.15s ease-in-out;
}

.input-string:focus {
  outline: none;
  border-color: var(--color-fg);
}
</style>
