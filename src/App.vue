<script setup lang="ts">
import { onMounted } from 'vue';
import ProfileAvatar from './components/ProfileAvatar.vue';
import { useProfileStore } from './stores/profile.store';
import TestProfile from './components/TestProfile.vue';

const store = useProfileStore();

onMounted(() => store.getProfile());
</script>

<template>
  <div class="app">
    <aside class="aside">
      <nav>
        <ProfileAvatar v-if="store.profile" :name="store.profile.name" />
      </nav>
    </aside>
    <main>
      Контент
      <TestProfile />
    </main>
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
