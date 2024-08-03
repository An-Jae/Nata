<!-- src/pages/HomePage.vue -->
<template>
  <q-page>
    <div class="q-pa-md">
      <h1>ホームページ</h1>
      <p>ログインに成功しました。</p>
    </div>
  </q-page>
</template>

<script setup lang="ts">
</script>

<style scoped>
/* 背景色: 海のような青 */
.ocean-theme {
  background: linear-gradient(to bottom, #87CEEB, #4682B4); /* 空と海のグラデーション */
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  color: #fff; /* テキストの色: 白 */
}

.content {
  text-align: center;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.8); /* 白の半透明背景 */
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* 柔らかい影 */
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 10px;
}

p {
  font-size: 1.2rem;
}
</style>
