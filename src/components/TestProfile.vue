<script setup lang="ts">
import { useProfileStore } from '@/stores/profile.store';

const store = useProfileStore();
</script>

<template>
  {{ store.profile?.name }}
</template>

<style scoped></style>
