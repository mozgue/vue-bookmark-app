<script setup lang="ts">
import BookmarkCard from '@/components/BookmarkCard.vue';
import CategoryHeader from '@/components/CategoryHeader.vue';
import type { Category } from '@/interfaces/category.interface';
import { useBookmarkStore } from '@/stores/bookmark.store';
import { useCategoryStore } from '@/stores/categories.store';
import { onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const categoryStore = useCategoryStore();
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
  <CategoryHeader v-if="category" :category="category" />
  <BookmarkCard
    :id="1"
    image="/public/avatar.jpg"
    title="Free, high quality, open source icon library with over 2,000 icons."
    url="https://ya.ru"
    category_id="1"
    :created_at="new Date()"
  />
</template>

<style scoped></style>
