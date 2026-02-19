import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://xnvnskxcsphbvkxhndui.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhudm5za3hjc3BoYnZreGhuZHVpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE0MjEwNjIsImV4cCI6MjA4Njk5NzA2Mn0.QMn4OHjv9CQC3RIj62aJG8JXI03gtbodtUEIP7uhwLQ'
);

const currentId = 12345;
const totalDays = 50;
const daysPresent = 47;
const risksArray = ['Bullying others','Theft'];
const totalRisk = 12.5;

async function upsertBehavior() {
  const { data, error } = await supabase.from('behavior').upsert({
    student_id: currentId,
    total_days: totalDays,
    days_present: daysPresent,
    behavior_risks: risksArray,
    total_risk: totalRisk,
    recorded_at: new Date()
  }, { onConflict: 'student_id' });

  if (error) {
    console.error('Error inserting/updating behavior:', error.message);
  } else {
    console.log('Behavior record upserted successfully:', data);
  }
}

upsertBehavior();
