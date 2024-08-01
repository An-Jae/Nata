<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat round icon="menu" @click="toggleLeftDrawer" />
        <q-toolbar-title>Quasar App</q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" overlay>
      <q-list>
        <q-item to="/" clickable>
          <q-item-section>
            <q-item-label>ホーム</q-item-label>
          </q-item-section>
        </q-item>
        <q-item to="/login" clickable>
          <q-item-section>
            <q-item-label>ログイン</q-item-label>
          </q-item-section>
        </q-item>
        <q-item to="/register" clickable>
          <q-item-section>
            <q-item-label>会員登録</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';

const leftDrawerOpen = ref(false);
const timeout = ref(10 * 60 * 1000); // 10分 (ミリ秒)
let timer: NodeJS.Timeout;
const router = useRouter();

function resetTimer() {
  clearTimeout(timer);
  startTimer();
}

function startTimer() {
  timer = setTimeout(() => {
    alert('ログアウトします');
    // ログアウト処理をここに追加
    // 例: firebase.auth().signOut().then(() => router.push('/login'));
    router.push('/login');
  }, timeout.value);
}

onMounted(() => {
  startTimer();
  window.addEventListener('mousemove', resetTimer);
  window.addEventListener('keydown', resetTimer);
});

onUnmounted(() => {
  clearTimeout(timer);
  window.removeEventListener('mousemove', resetTimer);
  window.removeEventListener('keydown', resetTimer);
});

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>

<style scoped>
.q-card {
  padding: 20px;
}
</style>
