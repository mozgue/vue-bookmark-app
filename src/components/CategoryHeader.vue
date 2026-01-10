<script setup lang="ts">
import IconEdit from '@/icons/IconEdit.vue';
import IconOk from '@/icons/IconOk.vue';
import IconTrash from '@/icons/IconTrash.vue';
import type { Category } from '@/interfaces/category.interface';
import { useCategoriesStore } from '@/stores/categories.store';
import { ref } from 'vue';
import ButtonIcon from './ButtonIcon.vue';
import InputText from './InputText.vue';

const { category } = defineProps<{ category: Category }>();
const isEdited = ref<boolean>(false);
const newCategoryName = ref<string>(category.name);
const categoryStore = useCategoriesStore();

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
    <div>
      <InputText v-if="isEdited" v-model="newCategoryName" />
      <ButtonIcon v-if="isEdited" @click="updateCategory">
        <IconOk />
      </ButtonIcon>
    </div>
    <div>
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
</style>
