<script setup lang="ts">
import ButtonIcon from '@/components/ButtonIcon.vue';
import CategoryList from '@/components/CategoryList.vue';
import ProfileAvatar from '@/components/ProfileAvatar.vue';
import IconLogout from '@/icons/IconLogout.vue';
import { useAuthStore } from '@/stores/auth.store';
import { useCategoryStore } from '@/stores/categories.store';
import { useRouter } from 'vue-router';
const store = useCategoryStore();
const authStore = useAuthStore();
const router = useRouter();

const logout = () => {
  authStore.clearToken();
  router.push({ name: 'auth' });
};
</script>

<template>
  <div class="app">
    <aside class="aside">
      <div style="display: flex; flex-direction: row; justify-content: center; margin-bottom: 20px">
        <ButtonIcon @click="logout">
          <IconLogout />
        </ButtonIcon>
      </div>
      <nav>
        <ProfileAvatar />
        <CategoryList />
        <ButtonIcon @click="store.createCategory()" icon="plus">+</ButtonIcon>
      </nav>
    </aside>
    <main class="main">
      <RouterView />
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
  min-width: 200px;
}
.main {
  width: 100%;
}
</style>
