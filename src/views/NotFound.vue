<script setup lang="ts">
import ButtonText from '@/components/ButtonText.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

function redirectToIndex() {
  router.push('/');
}
</script>

<template>
  <main class="not-found">
    <div class="not-found__form">
      <h1 class="not-found__header">404</h1>
      <ButtonText @click="redirectToIndex">На главную</ButtonText>
    </div>
  </main>
</template>

<style scoped>
.not-found {
  display: grid;
  place-items: center;
  min-height: 100vh;
}
.not-found__header {
  font-size: 128px;
  font-weight: 700;
}
.not-found__form {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 52px;
}
</style>
