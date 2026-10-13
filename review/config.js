// Firebase project settings. Paste the values from
// Firebase console → Project settings → Your apps → Web app → SDK setup (Config).
// While apiKey is empty the pages run in demo mode: everything is saved
// only in the current browser. See README.md.
export const firebaseConfig = {
  apiKey: "AIzaSyAglrkVdgebvk6POItokkrsIYzdIXr2ygM",
  authDomain: "reviews-69243.firebaseapp.com",
  projectId: "reviews-69243",
  storageBucket: "reviews-69243.firebasestorage.app",
  messagingSenderId: "878389263491",
  appId: "1:878389263491:web:957a35ef49e708e919efb6",
};

// Only this Google account can open the admin page and moderate reviews.
// Keep it in sync with ADMIN_EMAIL in firestore.rules.
export const ADMIN_EMAIL = "marco.sandroni25@gmail.com";
