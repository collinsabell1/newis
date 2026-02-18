import { initializeApp } from 

import { getFirestore, collection, addDoc, getDocs } 


window.calculateBehavior = function(){

  let positives = document.querySelectorAll('.positive');
  let negatives = document.querySelectorAll('.negative');

  let total = 0;

  positives.forEach(p=>{
    if(p.checked){
      total += parseInt(p.value);
    }
  }])

  negatives.forEach(n=>{
    if(n.checked){
      total -= parseInt(n.value);
    }
  }])

  if(total < 0) total = 0;
  if(total > 100) total = 100;

  document.getElementById("behaviorScore").innerText = total;

};
