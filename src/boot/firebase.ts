// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics, logEvent } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { analytics, logEvent };
