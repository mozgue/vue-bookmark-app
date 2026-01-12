<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  modelValue?: string;
  placeholder?: string;
  type?: string;
}>();

const emit = defineEmits<{
  'update:modelValue': [value: string];
}>();

const value = computed({
  get: () => props.modelValue || '',
  set: (newValue: string) => {
    emit('update:modelValue', newValue);
  },
});
</script>

<template>
  <input v-model="value" :type="type || 'text'" :placeholder="placeholder" class="input-text" />
</template>

<style scoped>
.input-text {
  width: 100%;
  padding: 0.75rem;
  border: none;
  border-bottom: 1px solid #e5e7eb;
  font-size: 1rem;
  transition: border-color 0.15s ease-in-out;
}

.input-text:focus {
  outline: none;
  border-color: var(--color-fg);
}
</style>
