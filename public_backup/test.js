import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm"

const supabase = createClient(
  "https://xnvnskxcsphbvkxhndui.supabase.co",
  "YOUR_ANON_KEY"
)

const { data, error } = await supabase
  .from("students")
  .insert([{ name:"Terminal Test", studentId:"999" }])

console.log(data,error)
