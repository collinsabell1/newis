import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

/* SUPABASE INIT */
const supabase = createClient(
  "https://xnvnskxcsphbvkxhndui.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhudm5za3hjc3BoYnZreGhuZHVpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE0MjEwNjIsImV4cCI6MjA4Njk5NzA2Mn0.QMn4OHjv9CQC3RIj62aJG8JXI03gtbodtUEIP7uhwLQ"
);

/* AUTH GUARD */
export async function requireAuth(){

  const { data:{ session } } = await supabase.auth.getSession();

  if(!session){
    window.location.href="login.html";
    return null;
  }

  return session.user;
}


/* OPTIONAL ROLE CHECK */
export async function requireRole(role){

  const { data:{ session } } = await supabase.auth.getSession();

  if(!session){
    window.location.href="login.html";
    return;
  }

  const userId = session.user.id;

  const { data, error } = await supabase
    .from("users")
    .select("role")
    .eq("id", userId)
    .single();

  if(error || !data){
    alert("User record missing");
    window.location.href="login.html";
    return;
  }

  if(data.role !== role){
    alert("Access denied");
    window.location.href="index.html";
  }
}


/* AUTO LISTENER (optional) */
supabase.auth.onAuthStateChange((event,session)=>{
  if(event==="SIGNED_OUT"){
    window.location.href="login.html";
  }
});
