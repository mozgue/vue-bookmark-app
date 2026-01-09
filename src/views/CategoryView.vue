<script setup lang="ts">
import type { Category } from '@/interfaces/category.interface';
import { useCategoriesStore } from '@/stores/categories.store';
import { ref, watch } from 'vue';
import { onBeforeRouteUpdate, useRoute } from 'vue-router';

const route = useRoute();
const state = useCategoriesStore();
const category = ref<Category>();

watch(
  () => state.categories,
  () => {
    category.value = state.getCategoryByAlias(route.params.alias);
  },
);

onBeforeRouteUpdate((to) => {
  category.value = state.getCategoryByAlias(to.params.alias);
});
</script>

<template>
  <h1>{{ category?.name }}</h1>
</template>

<style scoped></style>
