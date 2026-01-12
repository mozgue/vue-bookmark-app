<script setup lang="ts">
import IconLinkWhite from '@/icons/IconLinkWhite.vue';
import IconTrashWhite from '@/icons/IconTrashWhite.vue';
import type { Bookmark } from '@/interfaces/bookmark.interface';
import { useBookmarkStore } from '@/stores/bookmark.store';
import { ref } from 'vue';
import ButtonIconBig from './ButtonIconBig.vue';
import PopupConfirm from './PopupConfirm.vue';

const { title, image, url, id, category_id } = defineProps<Bookmark>();
const bookmarkStore = useBookmarkStore();
const isOpened = ref<boolean>(false);
function openLink() {
  window.open(url, '_blank');
}

function deleteBookmark() {
  bookmarkStore.deleteBookmark(id, category_id);
  isOpened.value = !isOpened.value;
}
</script>

<template>
  <div class="bookmark-card">
    <div class="bookmark-card__image" :style="{ backgroundImage: `url(${image})` }"></div>
    <div class="bookmark-card__title">
      {{ title }}
    </div>
    <div class="bookmark-card__footer">
      <ButtonIconBig @click="isOpened = !isOpened">
        <IconTrashWhite />
      </ButtonIconBig>
      <ButtonIconBig @click="openLink">
        <IconLinkWhite />
      </ButtonIconBig>
    </div>
    <PopupConfirm
      text="Вы уверены, что хотите удалить закладку?"
      :is-opened="isOpened"
      @cancel="isOpened = !isOpened"
      @confirm="deleteBookmark"
    />
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
