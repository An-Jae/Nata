<template>
  <q-page class="flex flex-center">
    <q-card class="q-mb-md" style="max-width: 400px; width: 100%;">
      <q-card-section>
        <div class="text-h6 q-mb-md">会員登録</div>
        <q-form @submit.prevent="register">
          <q-input
            v-model="username"
            label="ユーザー名"
            filled
            class="custom-input"
          />
          <q-input
            v-model="email"
            label="メールアドレス"
            type="email"
            filled
            class="custom-input"
          />
          <q-input
            v-model="password"
            :type="passwordVisible ? 'text' : 'password'"
            label="パスワード"
            filled
            class="custom-input"
          >
            <template v-slot:append>
              <q-btn
                flat
                icon="visibility"
                @click="togglePasswordVisibility"
                :aria-label="passwordVisible ? 'パスワードを隠す' : 'パスワードを表示する'"
              />
            </template>
          </q-input>
          <q-input
            v-model="confirmPassword"
            :type="passwordVisible ? 'text' : 'password'"
            label="パスワード確認"
            filled
            class="custom-input"
          >
            <template v-slot:append>
              <q-btn
                flat
                icon="visibility"
                @click="togglePasswordVisibility"
                :aria-label="passwordVisible ? 'パスワードを隠す' : 'パスワードを表示する'"
              />
            </template>
          </q-input>

          <q-btn type="submit" color="primary" class="full-width q-mt-md">登録</q-btn>
        </q-form>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';

const username = ref('');
const email = ref('');
const password = ref('');
const confirmPassword = ref('');
const passwordVisible = ref(false);
const router = useRouter();

async function register() {
  if (password.value !== confirmPassword.value) {
    alert('パスワードが一致しません。');
    return;
  }

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email.value, password.value);
    const user = userCredential.user;

    await updateProfile(user, {
      displayName: username.value
    });

    console.log('会員登録成功:', { username: username.value, email: email.value });
    router.push('/login');
  } catch (error) {
    console.error('会員登録に失敗しました:', error);
    alert('会員登録に失敗しました。');
  }
}

function togglePasswordVisibility() {
  passwordVisible.value = !passwordVisible.value;
}
</script>

<style scoped>
.q-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #000; /* ページ背景色: 黒 */
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
  width: 100%;
  margin-top: 10px;
  color: #fff; /* ボタンテキスト色: 白 */
  background-color: #007bff; /* ボタン背景色: ブルー */
}

.q-btn:hover {
  background-color: #0056b3; /* ホバー時のボタン背景色: ダークブルー */
}
</style>
