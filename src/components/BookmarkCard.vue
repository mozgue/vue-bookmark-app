<script setup lang="ts">
import IconLinkWhite from '@/icons/IconLinkWhite.vue';
import IconTrashWhite from '@/icons/IconTrashWhite.vue';
import type { Bookmark } from '@/interfaces/bookmark.interface';
import ButtonIconBig from './ButtonIconBig.vue';

const { id, title, image, url } = defineProps<Bookmark>();
</script>

<template>
  <div class="bookmark-card">
    <div class="bookmark-card__image" :style="{ backgroundImage: `url(${image})` }"></div>
    <div class="bookmark-card__title">
      {{ title }}
    </div>
    <div class="bookmark-card__footer">
      <ButtonIconBig>
        <IconTrashWhite />
      </ButtonIconBig>
      <ButtonIconBig>
        <IconLinkWhite />
      </ButtonIconBig>
    </div>
  </div>
</template>

<style scoped>
.bookmark-card {
  border-radius: 30px;
  max-width: 500px;
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
  border-radius: 20px;
}
.bookmark-card__footer {
  display: flex;
  justify-content: space-between;
}
</style>
