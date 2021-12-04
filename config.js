import firebase  from "firebase";
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";

 const firebaseConfig={
  apiKey: "AIzaSyD_qzs5ZiKsbcd-y-p7hgEGwFSAHVKwVOE",
  authDomain: "custo-93d0a.firebaseapp.com",
  projectId: "custo-93d0a",
  storageBucket: "custo-93d0a.appspot.com",
  messagingSenderId: "931393032085",
  appId: "1:931393032085:web:126f80f9c200eef312709c",
  measurementId: "G-9CCRVFX877"
      };

      const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default db