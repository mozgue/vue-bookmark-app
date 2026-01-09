import { API_ROUTES, http } from '@/api';
import type { Category } from '@/interfaces/category.interface';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useCategoriesStore = defineStore('categories', () => {
  const categories = ref<Category[]>([]);
  const getCategories = async () => {
    const { data } = await http.get<Category[]>(API_ROUTES.categories);
    categories.value = data;
  };
  return { categories, getCategories };
});
