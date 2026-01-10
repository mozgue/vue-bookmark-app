<script setup lang="ts">
import IconEdit from '@/icons/IconEdit.vue';
import IconOk from '@/icons/IconOk.vue';
import IconTrash from '@/icons/IconTrash.vue';
import type { Category } from '@/interfaces/category.interface';
import { useCategoryStore } from '@/stores/categories.store';
import { ref } from 'vue';
import ButtonIcon from './ButtonIcon.vue';
import InputText from './InputText.vue';

const { category } = defineProps<{ category: Category }>();
const isEdited = ref<boolean>(false);
const newCategoryName = ref<string>(category.name);
const categoryStore = useCategoryStore();

function toggleEdit() {
  isEdited.value = !isEdited.value;
}

function updateCategory() {
  if (!newCategoryName.value) {
    return;
  }

  categoryStore.updateCategory(newCategoryName.value, category.alias, category.id);
  toggleEdit();
}
</script>

<template>
  <div class="category-header">
    <h1 v-if="!isEdited">{{ category.name }}</h1>
    <div v-if="isEdited" class="category-header__edit">
      <InputText v-model="newCategoryName" />
      <ButtonIcon @click="updateCategory">
        <IconOk />
      </ButtonIcon>
    </div>
    <div class="category-header__actions">
      <ButtonIcon v-if="!isEdited" @click="toggleEdit">
        <IconEdit />
      </ButtonIcon>
      <ButtonIcon>
        <IconTrash />
      </ButtonIcon>
    </div>
  </div>
</template>

<style scoped>
.category-header {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.category-header__actions {
  display: flex;
  gap: 8px;
}
.category-header__edit {
  display: flex;
  gap: 8px;
}
</style>
