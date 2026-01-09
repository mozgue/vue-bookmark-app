<script setup lang="ts">
import type { Category } from '@/interfaces/category.interface';
import { useBookmarkStore } from '@/stores/bookmark.store';
import { useCategoriesStore } from '@/stores/categories.store';
import { onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const categoryStore = useCategoriesStore();
const bookmarkStore = useBookmarkStore();
const category = ref<Category>();

onMounted(() => {
  if (route.params?.alias) {
    category.value = categoryStore.getCategoryByAlias(route.params.alias);
  }
  if (category.value) {
    bookmarkStore.fetchBookmarks(category.value.id);
  }
});
watch(
  () => categoryStore.categories,
  (data) => {
    if (route.params?.alias) {
      category.value = categoryStore.getCategoryByAlias(route.params.alias);
    }
    if (category.value) {
      bookmarkStore.fetchBookmarks(category.value.id);
    }
  },
);
</script>

<template>
  <h1>{{ category?.name }}</h1>
  {{ bookmarkStore.bookmarks.length }}
</template>

<style scoped></style>
