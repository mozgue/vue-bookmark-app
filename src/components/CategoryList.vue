<script setup lang="ts">
import { useCategoriesStore } from '@/stores/categories.store';
import { onMounted } from 'vue';

const store = useCategoriesStore();

onMounted(() => store.getCategories());
</script>

<template>
  <ul class="category-list">
    <li v-for="item in store.categories" :key="item.id" class="list-item">
      <a :href="`/${item.alias}`">{{ item.name }}</a>
    </li>
  </ul>
</template>

<style scoped>
.category-list {
  display: flex;
  flex-direction: column;
  gap: 34px;

  font-size: 18px;
  padding: 0;
  margin: 0;
  margin-bottom: 40px;
}
.list-item {
  list-style: none;
}
.list-item a {
  text-decoration: none;
  font-size: 14px;
  color: var(--color-fg);
  transition: all 0.5s;
}
.list-item a:hover {
  color: #000;
  font-weight: bold;
  font-size: 24px;
}
</style>
