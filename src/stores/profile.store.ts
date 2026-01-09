import { API_ROUTES, http } from '@/api';
import type { Profile } from '@/interfaces/profile.interface';

import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useProfileStore = defineStore('profile', () => {
  const profile = ref<Profile>();
  const getProfile = async () => {
    const { data } = await http.get<Profile>(API_ROUTES.profile);
    profile.value = data;
  };
  return { profile, getProfile };
});
