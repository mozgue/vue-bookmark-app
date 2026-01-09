import { API_ROUTES, http } from '@/api';
import type { LoginResponse } from '@/interfaces/auth.interface';

import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useAuthStore = defineStore('auth', () => {
  const token = ref<string>();

  const login = async (email: string, password: string) => {
    const { data } = await http.post<LoginResponse>(API_ROUTES.auth.login, {
      email,
      password,
    });
    token.value = data.token;
  };
  return { token, login };
});
