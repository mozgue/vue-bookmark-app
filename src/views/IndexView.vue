<script setup lang="ts"></script>

<template>
  <div class="page-index">
    <h1 class="heading">Добро пожаловать в Bookmark App!</h1>
    <div class="description">
      Здесь вы можете хранить ссылки на важные ресурсы и делиться ими с другими пользователями.
    </div>
  </div>
</template>

<style scoped>
.page-index {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(100% - 400px);
  padding: 20px;
}
.heading {
  font-size: 24px;
}
.description {
  margin-top: 20px;
}
</style>
