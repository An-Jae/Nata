// src/router/routes.ts
import { RouteRecordRaw } from 'vue-router';
import MainLayout from 'layouts/MainLayout.vue';
import Login from 'pages/LoginPage.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: MainLayout,
    children: [
      { path: '', component: Login } // ルートパスにログインページを設定
    ],
  },
  {
    path: '/home',
    component: () => import('pages/Home.vue'),
  },
  // その他のルート設定
];

export default routes;
