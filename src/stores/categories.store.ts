import { API_ROUTES, client } from '@/api';
import type { Category } from '@/interfaces/category.interface';
import { defineStore } from 'pinia';
import { v4 as uuidv4 } from 'uuid';
import { ref } from 'vue';

export const useCategoriesStore = defineStore('categories', () => {
  const categories = ref<Category[]>([]);
  const getCategories = async () => {
    const { data } = await client().get<Category[]>(API_ROUTES.categories);
    categories.value = data;
  };

  const createCategory = async () => {
    const { data } = await client().post<Category>(API_ROUTES.categories, {
      name: 'Новая категория',
      alias: uuidv4(),
    });
    categories.value.push(data);
  };

  const updateCategory = async (name: string, alias: string, id: number) => {
    await client().put<Category>(API_ROUTES.categories + '/' + id, {
      name,
      alias,
    });
    getCategories();
  };

  const getCategoryByAlias = (alias: string | string[]): Category | undefined => {
    if (typeof alias == 'string') {
      return categories.value.find((category) => category.alias === alias);
    }

    return;
  };

  return { categories, getCategories, createCategory, updateCategory, getCategoryByAlias };
});
