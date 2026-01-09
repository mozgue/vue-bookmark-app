<script setup lang="ts">
// type ProfileAvatarProps = {
//   name: string
// }
// const { name } = defineProps<ProfileAvatarProps>()
const { name } = defineProps<{ name: string }>()
</script>

<template>
  <div class="profile-avatar">
    <img src="/public/avatar.jpg" class="profile-avatar__image" alt="Изображение пользователя" />
    <div>
      Привет, <strong>{{ name }}</strong>
    </div>
  </div>
</template>

<style scoped>
.profile-avatar {
  display: flex;
  flex-direction: column;
  /* gap: 12px */
  align-items: center;
}
.profile-avatar__image {
  width: 80px;
  height: 80px;
}
</style>
