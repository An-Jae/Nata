// src/firebase.ts
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyB2oYRyuXleAcPGninoYczb_FMv1A_0328',
  authDomain: 'natgo-f8b7b.firebaseapp.com',
  databaseURL: 'https://natgo-f8b7b-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'natgo-f8b7b',
  storageBucket: 'natgo-f8b7b.appspot.com',
  messagingSenderId: '1090264625716',
  appId: '1:1090264625716:web:ed2a4993d3f9e91063d061',
  measurementId: 'G-9QWXSKBDFZ'
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
