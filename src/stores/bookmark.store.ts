import { API_ROUTES, client } from '@/api';
import type { Bookmark } from '@/interfaces/bookmark.interface';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useBookmarkStore = defineStore('bookmarks', () => {
  const bookmarks = ref<Bookmark[]>([]);

  const fetchBookmarks = async (categoryId: number) => {
    const { data } = await client().get<Bookmark[]>(API_ROUTES.bookmarks(categoryId));
    bookmarks.value = data;
  };

  // const createBookmark = async () => {
  //   const { data } = await http.post<Bookmark>(API_ROUTES.bookmarks, {
  //     name: 'Новая категория',
  //     alias: uuidv4(),
  //   });
  //   bookmarks.value.push(data);
  // };

  return { bookmarks, fetchBookmarks };
});
