import { API_ROUTES, client } from '@/api';
import type { Bookmark } from '@/interfaces/bookmark.interface';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useBookmarkStore = defineStore('bookmarks', () => {
  const bookmarks = ref<Bookmark[]>([]);
  const activeSort = ref<string>('date');

  const fetchBookmarks = async (categoryId: number, sort: string) => {
    const { data } = await client().get<Bookmark[]>(API_ROUTES.bookmarks.get(categoryId), {
      params: {
        sort,
      },
    });
    bookmarks.value = data;
  };

  const deleteBookmark = async (id: number, categoryId: number) => {
    await client().delete<Bookmark[]>(API_ROUTES.bookmarks.delete(id));
    fetchBookmarks(categoryId, activeSort.value);
  };

  const addBookmark = async (url: string, category_id: number) => {
    const { data } = await client().post<Bookmark[]>(API_ROUTES.bookmarks.create, {
      url,
      category_id,
    });
    // fetchBookmarks(category_id, activeSort.value);
    bookmarks.value.push(data);
    // fetchBookmarks(categoryId, activeSort.value);
  };

  // const createBookmark = async () => {
  //   const { data } = await http.post<Bookmark>(API_ROUTES.bookmarks, {
  //     name: 'Новая категория',
  //     alias: uuidv4(),
  //   });
  //   bookmarks.value.push(data);
  // };

  return { bookmarks, fetchBookmarks, deleteBookmark, addBookmark, activeSort };
});
