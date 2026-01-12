<script setup lang="ts">
import IconLinkWhite from '@/icons/IconLinkWhite.vue';
import IconTrashWhite from '@/icons/IconTrashWhite.vue';
import type { Bookmark } from '@/interfaces/bookmark.interface';
import { useBookmarkStore } from '@/stores/bookmark.store';
import ButtonIconBig from './ButtonIconBig.vue';

const { title, image, url, id, category_id } = defineProps<Bookmark>();
const bookmarkStore = useBookmarkStore();
function openLink() {
  window.open(url, '_blank');
}

function deleteBookmark(id: number, category_id: number) {
  if (confirm('Вы уверены, что хотите удалить закладку?')) {
    bookmarkStore.deleteBookmark(id, category_id);
  }
}
</script>

<template>
  <div class="bookmark-card">
    <div class="bookmark-card__image" :style="{ backgroundImage: `url(${image})` }"></div>
    <div class="bookmark-card__title">
      {{ title }}
    </div>
    <div class="bookmark-card__footer">
      <ButtonIconBig @click="() => deleteBookmark(id, category_id)">
        <IconTrashWhite />
      </ButtonIconBig>
      <ButtonIconBig @click="openLink">
        <IconLinkWhite />
      </ButtonIconBig>
    </div>
  </div>
</template>

<style scoped>
.bookmark-card {
  border-radius: 30px;
  background: var(--color-fg);
  box-shadow: 0px 10px 10px 0 rgba(245, 245, 245, 0.1);
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 24px;
}
.bookmark-card__title {
  color: var(--color-bg);
  font-size: 16px;
  font-weight: 500;
}

.bookmark-card__image {
  min-height: 160px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  border-radius: 20px;
}
.bookmark-card__footer {
  display: flex;
  justify-content: space-between;
  margin-top: auto;
}
</style>
