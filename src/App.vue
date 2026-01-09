<script setup lang="ts">
import ProfileAvatar from './components/ProfileAvatar.vue'
</script>

<template>
  <div class="app">
    <aside class="aside">
      <nav>
        <ProfileAvatar name="Василий" />
      </nav>
    </aside>
    <main>Контент</main>
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
