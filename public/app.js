import { initializeApp } from 
"https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";

import { getFirestore, collection, addDoc, getDocs } 
from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
window.calculateAssessment = function(){

  let checkboxes = document.querySelectorAll('#assessmentForm input[type="checkbox"]');

  let total = 0;

  checkboxes.forEach(box=>{
    if(box.checked){
      total += parseInt(box.value);
    }
  });

  document.getElementById("assessmentScore").innerText = total;

};
window.calculateBehavior = function(){

  let positives = document.querySelectorAll('.positive');
  let negatives = document.querySelectorAll('.negative');

  let total = 0;

  positives.forEach(p=>{
    if(p.checked){
      total += parseInt(p.value);
    }
  });

  negatives.forEach(n=>{
    if(n.checked){
      total -= parseInt(n.value);
    }
  });

  if(total < 0) total = 0;
  if(total > 100) total = 100;

  document.getElementById("behaviorScore").innerText = total;

};
