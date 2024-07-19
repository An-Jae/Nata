<!-- src/pages/Login.vue -->
<template>
  <q-page class="flex flex-center">
    <q-form @submit="handleLogin" class="q-gutter-md" @keydown.enter.prevent>
      <q-input
        v-model="email"
        label="Email"
        type="email"
        outlined
        :rules="[val => val && val.includes('@') || 'Please enter a valid email']"
        dense
      />
      <q-input
        v-model="password"
        label="Password"
        type="password"
        outlined
        :rules="[val => val && val.length >= 6 || 'Password must be at least 6 characters']"
        dense
      />
      <q-btn
        type="submit"
        label="Login"
        color="primary"
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

const router = useRouter();
const email = ref('');
const password = ref('');
const loading = ref(false);

function handleLogin() {
  if (email.value && password.value) {
    loading.value = true;
    // Simulate an API call for login
    setTimeout(() => {
      // Redirect to home page after successful login
      router.push('/home');
      loading.value = false;
    }, 1000); // Simulate network delay
  } else {
    console.error('Login failed');
  }
}
</script>

<style scoped>
.q-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #000; /* 페이지 배경 색: 검은색 */
}

.q-card {
  width: 100%;
  max-width: 400px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(255, 255, 255, 0.1); /* 부드러운 그림자 효과: 흰색 */
  background-color: #fff; /* 카드 배경 색: 흰색 */
  color: #000; /* 카드 텍스트 색: 검은색 */
}

.q-card-section {
  padding: 20px;
}

.q-input {
  margin-bottom: 15px;
}

.q-input input {
  color: #000; /* 입력 필드 텍스트 색: 검은색 */
  background-color: #fff; /* 입력 필드 배경 색: 흰색 */
}

.q-btn {
  width: 100px; /* 버튼 너비 */
  margin-left: 10px; /* 버튼 간격 */
  color: #fff; /* 버튼 텍스트 색: 흰색 */
  background-color: #000; /* 버튼 배경 색: 검은색 */
}

.q-btn:hover {
  background-color: #333; /* 버튼 호버 색상: 약간 밝은 검은색 */
}

.q-card-actions {
  justify-content: flex-end; /* 버튼을 오른쪽 정렬 */
}
</style>
