import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, onAuthStateChanged } 
from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore, doc, getDoc } 
from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig={
  apiKey:"AIzaSyCkMThRpTLJ7QC0d2OC0Neeim8bBRkzJcQ",
  authDomain:"newis-96304.firebaseapp.com",
  projectId:"newis-96304"
};

const app=initializeApp(firebaseConfig);
const auth=getAuth(app);
const db=getFirestore(app);

onAuthStateChanged(auth,async(user)=>{
  if(!user){
    location.href="login.html";
    return;
  }

  const snap=await getDoc(doc(db,"users",user.uid));
  if(!snap.exists()){
    alert("Access denied");
    location.href="login.html";
    return;
  }

  const role=snap.data().role;
  if(!window.allowedRoles.includes(role)){
    alert("Unauthorized access");
    location.href="login.html";
  }
});
