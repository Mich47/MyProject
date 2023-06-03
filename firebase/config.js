// Для роботи із firebase обовʼязково треба ініціалізувати проект
import { initializeApp } from "firebase/app";
// Функція для підключення авторизації в проект
import { getAuth } from "firebase/auth";
// Функція для підключення бази даних у проект
import { getFirestore } from "firebase/firestore";
// Функція для підключення сховища файлів в проект
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCHskZ7d1FJX4sC-i_kwK9566en7LtoEfM",
  authDomain: "my-project-f1f62.firebaseapp.com",
  databaseURL:
    "https://my-project-f1f62-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "my-project-f1f62",
  storageBucket: "my-project-f1f62.appspot.com",
  messagingSenderId: "160580727962",
  appId: "1:160580727962:web:932dfd85b7c6d19bb11b23",
  measurementId: "G-W2VSGFH902",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
