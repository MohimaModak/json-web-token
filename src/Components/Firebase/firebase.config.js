import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyB37HXaLyt3rlyD3jccjQGx_UNatLJLUZ8",
  authDomain: "json-web-token-project.firebaseapp.com",
  projectId: "json-web-token-project",
  storageBucket: "json-web-token-project.appspot.com",
  messagingSenderId: "68147248884",
  appId: "1:68147248884:web:170cde2ee8c585afbde8a1",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
