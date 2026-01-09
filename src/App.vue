<script setup lang="ts">
import { onMounted, ref } from 'vue';
import ProfileAvatar from './components/ProfileAvatar.vue';
import { API_ROUTES } from './api';
import type { Profile } from './interfaces/profile';

const profile = ref<Profile>();

async function fetchProfile() {
  const data = await fetch(API_ROUTES.profile);
  const res = (await data.json()) as Profile;

  profile.value = res;
}

onMounted(() => {
  fetchProfile();
});
</script>

<template>
  <div class="app">
    <aside class="aside">
      <nav>
        <ProfileAvatar v-if="profile" :name="profile.name" />
      </nav>
    </aside>
    <main>Контент</main>
  </div>
  <header></header>
</template>

<style scoped>
.app {
  display: flex;
  min-height: calc(100vh - 140px);
  gap: 200px;
  max-width: 1480px;
  margin: 140px auto 0;
}
.aside {
  min-width: 400px;
}
</style>
