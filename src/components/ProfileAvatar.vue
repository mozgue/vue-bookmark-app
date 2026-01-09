<script setup lang="ts">
import { useProfileStore } from '@/stores/profile.store';
import { onMounted } from 'vue';

const store = useProfileStore();

onMounted(() => store.getProfile());
</script>

<template>
  <div v-if="store.profile" class="profile-avatar">
    <img src="/public/avatar.jpg" class="profile-avatar__image" alt="Изображение пользователя" />
    <div>
      Привет, <strong>{{ store.profile.name }}</strong>
    </div>
  </div>
</template>

<style scoped>
.profile-avatar {
  display: flex;
  flex-direction: column;
  /* gap: 12px */
  align-items: center;
}
.profile-avatar__image {
  width: 80px;
  height: 80px;
}
</style>
