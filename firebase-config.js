import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-analytics.js";

// Your updated Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnVw3m6tVSZFllGvI8M0KnvOelyfCNmyU",
  authDomain: "rummitechvcf.firebaseapp.com",
  databaseURL: "https://rummitechvcf-default-rtdb.firebaseio.com",
  projectId: "rummitechvcf",
  storageBucket: "rummitechvcf.firebasestorage.app",
  messagingSenderId: "478685720198",
  appId: "1:478685720198:web:8f3447fe8fdf535e7c6b07",
  measurementId: "G-ZQP9152Z5R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize and Export services
export const db = getDatabase(app);
export const auth = getAuth(app);
export const analytics = getAnalytics(app);

