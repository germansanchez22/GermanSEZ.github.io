import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-app.js";
import { collection, getDocs, getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-firestore.js"


const firebaseConfig = {
  apiKey: "AIzaSyAfm6K6jpqnoVyRtWwKibkuMP-KLysgIic",
  authDomain: "clase-firebase-19d2f.firebaseapp.com",
  projectId: "clase-firebase-19d2f",
  storageBucket: "clase-firebase-19d2f.appspot.com",
  messagingSenderId: "871087549534",
  appId: "1:871087549534:web:414886966194b2cf3058cf"
};


const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

//funciones

export const getProducts = async () => {

const querySnapshot = await getDocs(collection(db, "products"));

const products = []

querySnapshot.forEach((doc) => {

products.push(doc);
  
});

 return products;

}

// obtener documento 

export const getProduct = async (id) => {

const docRef = doc(db, "products", id);

const docSnap = await getDoc(docRef);


if (docSnap.exists()) {
return docSnap;
} else {
console.log("No such document!");
}
}

