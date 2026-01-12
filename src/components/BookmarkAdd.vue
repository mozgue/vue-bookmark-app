<script setup lang="ts">
import IconOk from '@/icons/IconOk.vue';
import IconPlusBig from '@/icons/IconPlusBig.vue';
import { useBookmarkStore } from '@/stores/bookmark.store';
import { ref } from 'vue';
import ButtonIcon from './ButtonIcon.vue';
import InputText from './InputText.vue';

const { category_id } = defineProps<{ category_id: number }>();
const isEdited = ref<boolean>(false);
const newUrl = ref<string>();
const bookmarkStore = useBookmarkStore();

const toggleEdit = () => {
  isEdited.value = !isEdited.value;
};
const addBookmark = () => {
  if (!newUrl.value) {
    return;
  }
  bookmarkStore.addBookmark(newUrl.value, category_id);
  newUrl.value = '';
  isEdited.value = false;
};
</script>

<template>
  <div class="bookmark-add">
    <ButtonIcon v-if="!isEdited" :size="48" @click="toggleEdit">
      <IconPlusBig />
    </ButtonIcon>
    <div v-else class="bookmar-add_edit">
      <InputText v-model="newUrl" />
      <ButtonIcon @click="addBookmark">
        <IconOk />
      </ButtonIcon>
    </div>
  </div>
</template>

<style scoped>
.bookmark-add {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  border: 1px dashed var(--color-fg);
}
.bookmar-add_edit {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
}
</style>
