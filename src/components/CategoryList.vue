<script setup lang="ts">
import { useCategoryStore } from '@/stores/categories.store';
import { onMounted } from 'vue';

const store = useCategoryStore();

onMounted(() => store.getCategories());
</script>

<template>
  <ul class="category-list">
    <li v-for="item in store.categories" :key="item.id" class="list-item">
      <RouterLink active-class="active-link" :to="`/main/${item.alias}`">{{
        item.name
      }}</RouterLink>
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

.list-item a.active-link,
.list-item a:hover {
  color: #000;
  font-weight: bold;
  font-size: 24px;
}
</style>
