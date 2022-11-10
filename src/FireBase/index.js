import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage"
const firebaseConfig = {
  apiKey: "AIzaSyC77Imb8goO1dTjM--UI8nFAtSQeLzCQHA",
  authDomain: "story-web-2eba7.firebaseapp.com",
  projectId: "story-web-2eba7",
  storageBucket: "story-web-2eba7.appspot.com",
  messagingSenderId: "68542134780",
  appId: "1:68542134780:web:3f38f54728519ee7e01a79",
  measurementId: "G-7XTL5L175Q",
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
