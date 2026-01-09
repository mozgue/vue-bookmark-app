import { API_ROUTES, http } from '@/api';
import type { Category } from '@/interfaces/category.interface';
import { defineStore } from 'pinia';
import { v4 as uuidv4 } from 'uuid';
import { ref } from 'vue';

export const useCategoriesStore = defineStore('categories', () => {
  const categories = ref<Category[]>([]);
  const getCategories = async () => {
    const { data } = await http.get<Category[]>(API_ROUTES.categories);
    categories.value = data;
  };

  const createCategory = async () => {
    const { data } = await http.post<Category>(API_ROUTES.categories, {
      name: 'Новая категория',
      alias: uuidv4(),
    });
    categories.value.push(data);
  };
  return { categories, getCategories, createCategory };
});
