// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    // apiKey: process.env.REACT_APP_apiKey,
    // authDomain: process.env.REACT_APP_authDomain,
    // projectId: process.env.REACT_APP_projectId,
    // storageBucket: process.env.REACT_APP_storageBucket,
    // messagingSenderId: process.env.REACT_APP_messagingSenderId,
    // appId: process.env.REACT_APP_appId,
    apiKey: "AIzaSyCowIBHD9M9jw9nToCsQgWGiDQlS8uKfbM",
    authDomain: "food-flow-de6d0.firebaseapp.com",
    projectId: "food-flow-de6d0",
    storageBucket: "food-flow-de6d0.appspot.com",
    messagingSenderId: "739305501134",
    appId: "1:739305501134:web:994fed868b470332c97b9f"
};
console.log(process.env.REACT_APP_apiKey)

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;