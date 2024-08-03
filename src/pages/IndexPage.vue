<!-- src/pages/IndexPage.vue -->
<template>
  <q-page class="ocean-theme">
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
/* 背景色: 海のような青 */
.ocean-theme {
  background: linear-gradient(to bottom, #87CEEB, #4682B4); /* 空と海のグラデーション */
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

/* コンテンツコンテナ */
.welcome-container {
  text-align: center;
  background-color: rgba(255, 255, 255, 0.9); /* 白の半透明背景 */
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* 柔らかい影の効果 */
}

h1 {
  margin-bottom: 20px;
  color: #4682B4; /* タイトルテキスト色: 海の青 */
}

.q-btn {
  display: block;
  margin: 10px auto;
  background-color: #4ba2ff; /* ボタン背景色: 青 */
  color: #fff; /* ボタンテキスト色: 白 */
}

.q-btn:hover {
  background-color: #357abd; /* ボタンホバー色: 少し濃い青 */
}
</style>
