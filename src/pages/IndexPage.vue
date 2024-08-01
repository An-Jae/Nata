<!-- src/pages/IndexPage.vue -->
<template>
  <q-page class="flex flex-center">
    <div class="welcome-container">
      <h1>Test Natago</h1>
      <q-btn
        to="/register"
        label="Register"
        color="primary"
        class="q-mt-md"
      />
      <q-btn
        to="/login"
        label="Login"
        color="primary"
        class="q-mt-md"
      />
    </div>
  </q-page>
</template>

<script setup>
</script>

<style scoped>
.q-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #000000; /* 背景色: 明るいグレー */
}

.welcome-container {
  text-align: center;
  background-color: #ffffff7c; /* コンテナ背景色: 白 */
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* 柔らかい影の効果 */
}

h1 {
  margin-bottom: 20px;
  color: #000000; /* タイトルテキスト色 */
}

.q-btn {
  display: block;
  margin: 10px auto;
}
</style>
