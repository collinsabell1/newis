import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

/* SUPABASE CONNECTION */
const supabase = createClient(
  "https://xnvnskxcsphbvkxhndui.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhudm5za3hjc3BoYnZreGhuZHVpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE0MjEwNjIsImV4cCI6MjA4Njk5NzA2Mn0.QMn4OHjv9CQC3RIj62aJG8JXI03gtbodtUEIP7uhwLQ"
);


/* ================================
   BEHAVIOR CALCULATOR
================================ */

window.calculateBehavior = function () {

  const positives = document.querySelectorAll(".positive");
  const negatives = document.querySelectorAll(".negative");

  let total = 0;

  positives.forEach(p => {
    if (p.checked) total += Number(p.value);
  });

  negatives.forEach(n => {
    if (n.checked) total -= Number(n.value);
  });

  if (total < 0) total = 0;
  if (total > 100) total = 100;

  document.getElementById("behaviorScore").innerText = total;
};



/* ================================
   OPTIONAL SAVE FUNCTION
   (use when you add save button)
================================ */

window.saveBehavior = async function(studentId){

  const score = Number(document.getElementById("behaviorScore").innerText);

  if(!studentId){
    alert("Student ID required");
    return;
  }

  const { data, error } = await supabase
    .from("behavior")
    .insert([{
      student_id: studentId,
      score: score,
      recorded_at: new Date()
    }]);

  if(error){
    alert("Error saving");
    console.error(error);
  }else{
    alert("Saved ✔");
  }
};
