<!-- src/pages/Login.vue -->
<template>
  <q-page class="flex flex-center">
    <q-form @submit.prevent="handleLogin" class="q-gutter-md">
      <q-input
        v-model="email"
        label="Email"
        type="email"
        outlined
        :rules="[val => val && val.includes('@') || 'Please enter a valid email']"
        dense
        class="custom-input"
      />
      <q-input
        v-model="password"
        label="Password"
        type="password"
        outlined
        :rules="[val => val && val.length >= 6 || 'Password must be at least 6 characters']"
        dense
        class="custom-input"
      />
      <q-btn
        type="submit"
        label="ログイン"
        class="full-width"
        :loading="loading"
        :disable="loading"
      />
    </q-form>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

const router = useRouter();
const email = ref('');
const password = ref('');
const loading = ref(false);

async function handleLogin() {
  if (email.value && password.value) {
    loading.value = true;
    try {
      await signInWithEmailAndPassword(auth, email.value, password.value);
      router.push('/home'); // ログイン成功後にホームページにリダイレクト
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error('Login failed:', error.message);
        alert('Login failed: ' + error.message); // アラートでエラーメッセージを表示
      } else {
        console.error('Login failed:', error);
        alert('Login failed: An unknown error occurred'); // アラートで不明なエラーメッセージを表示
      }
    } finally {
      loading.value = false;
    }
  } else {
    console.error('Login failed: Email and password are required');
    alert('Email and password are required'); // 入力エラーメッセージをアラートで表示
  }
}
</script>

<style scoped>
.q-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #000; /* 背景色: 黒 */
}

.q-card {
  width: 100%;
  max-width: 400px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* 柔らかい影: 黒 */
  background-color: #ffffff7c; /* カード背景色: 白 */
}

.q-card-section {
  padding: 20px;
}

.custom-input .q-input__control {
  background-color: #ffffff7c; /* 入力フィールド背景色: 白 */
  border-radius: 5px;
}

.custom-input .q-input__control input {
  color: #333; /* 入力テキスト色: ダークグレー */
  background-color: #ffffff7c; /* 入力フィールド背景色: 白 */
}

.q-btn {
  width: 100%; /* ボタン幅: 100% */
  margin-top: 10px;
  color: #fff; /* ボタンテキスト色: 白 */
  background-color: #007bff; /* ボタン背景色: ブルー */
}

.q-btn:hover {
  background-color: #0056b3; /* ホバー時のボタン背景色: ダークブルー */
}
</style>
