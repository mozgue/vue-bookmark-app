import { API_ROUTES } from '@/api';
import type { Profile } from '@/interfaces/profile.interface';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useProfileStore = defineStore('profile', () => {
  const profile = ref<Profile>();
  const getProfile = async () => {
    const response = await fetch(API_ROUTES.profile);
    const res = (await response.json()) as Profile;
    profile.value = res;
  };
  return { profile, getProfile };
});
