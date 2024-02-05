import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyDjI2Y4dIuJM4AYy9fewR3gQw911HCGbd4",
  authDomain: "carrinho-10a88.firebaseapp.com",
  databaseURL: "https://carrinho-10a88-default-rtdb.firebaseio.com",
  projectId: "carrinho-10a88",
  storageBucket: "carrinho-10a88.appspot.com",
  messagingSenderId: "551627341437",
  appId: "1:551627341437:web:9e5d7478c8d0e170b87b14"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
