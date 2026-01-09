<script setup lang="ts">
import type { Category } from '@/interfaces/category.interface';
import { useCategoriesStore } from '@/stores/categories.store';
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const state = useCategoriesStore();
const category = ref<Category>();

watch(
  () => ({
    alias: route.params.alias,
    categories: state.categories,
  }),
  (data) => {
    category.value = state.getCategoryByAlias(data.alias);
  },
);
// console.log(state.getCategoryByAlias(route.params.alias));
</script>

<template>
  <div>Category</div>
  {{ $route.params.alias }}
  {{ category?.name }}
</template>

<style scoped></style>
