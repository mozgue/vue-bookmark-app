<script setup lang="ts">
import ButtonText from '@/components/ButtonText.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

function redirectToMain() {
  router.push({
    name: 'main',
  });
}
</script>

<template>
  <main class="auth">
    <div class="auth__form">
      <h1 class="auth__header">Bookmark App</h1>
      <ButtonText @click="redirectToMain">Вход</ButtonText>
    </div>
  </main>
</template>

<style scoped>
.auth {
  display: grid;
  place-items: center;
  min-height: 100vh;
}
.auth__header {
  font-size: 52px;
  font-weight: 700;
}
.auth__form {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 52px;
}
</style>
