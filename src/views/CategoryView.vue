<script setup lang="ts">
import BookmarkAdd from '@/components/BookmarkAdd.vue';
import BookmarkCard from '@/components/BookmarkCard.vue';
import BookmarkSort from '@/components/BookmarkSort.vue';
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

function sortBookmarks(sort: string) {
  bookmarkStore.activeSort = sort;
  if (category.value) {
    bookmarkStore.fetchBookmarks(category.value.id, bookmarkStore.activeSort);
  }
}

onMounted(() => {
  if (route.params?.alias) {
    category.value = categoryStore.getCategoryByAlias(route.params.alias);
  }
  if (category.value) {
    bookmarkStore.fetchBookmarks(category.value.id, bookmarkStore.activeSort);
  }
});
watch(
  () => categoryStore.categories,
  (data) => {
    if (route.params?.alias) {
      category.value = categoryStore.getCategoryByAlias(route.params.alias);
    }
    if (category.value) {
      bookmarkStore.fetchBookmarks(category.value.id, bookmarkStore.activeSort);
    }
  },
);
</script>

<template>
  <CategoryHeader v-if="category" :category="category" />
  <div class="sort-list">
    <BookmarkSort :option="bookmarkStore.activeSort" @sort="sortBookmarks" />
  </div>
  <div class="category-list">
    <BookmarkCard v-for="item in bookmarkStore.bookmarks" :key="item.id" v-bind="item" />
    <BookmarkAdd />
  </div>
</template>

<style scoped>
.sort-list {
  margin-top: 30px;
}
.category-list {
  margin-top: 30px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}
</style>
