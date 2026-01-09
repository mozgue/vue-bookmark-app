<script setup lang="ts">
import ButtonText from '@/components/ButtonText.vue';
import InputText from '@/components/InputText.vue';
import { useAuthStore } from '@/stores/auth.store';
import { ref } from 'vue';

const form = ref<{ email?: string; password?: string }>({});
const authStore = useAuthStore();

function onSubmit(event: Event) {
  event.preventDefault();
  console.log(event);
  if (!form.value.email || !form.value.password) {
    return;
  }
  authStore.login(form.value.email, form.value.password);
  form.value = {};
}
</script>

<template>
  <main class="auth">
    <div class="auth__form_wrapper">
      <h1 class="auth__header">Bookmark App</h1>
      <form class="auth__form" @submit="onSubmit">
        <InputText v-model="form.email" placeholder="Эл. Почта" />
        <InputText v-model="form.password" placeholder="Пароль" type="password" />
        <ButtonText type="submit">Вход</ButtonText>
        {{ authStore.token }}
      </form>
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
.auth__form_wrapper,
.auth__form {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 52px;
}
</style>
