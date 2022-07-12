import Vue from "vue";
import { createVueSupabase } from "vue-supabase";

const supabase = createVueSupabase({
  supabaseUrl: "https://pibxnftttuyvvbnbkqtf.supabase.co",
  supabaseKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBpYnhuZnR0dHV5dnZibmJrcXRmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTUyOTkyMzgsImV4cCI6MTk3MDg3NTIzOH0.zRaSuTjYt_yP-dxTlM_43PEuaq8aQQFt3fmarG3JZCk",
  supabaseOptions: undefined,
});

Vue.use(supabase);

// Inject Supabase into Nuxt Context
export default (ctx, inject) => {
  // ctx.$supabase = supabase;
  inject("supabase", supabase);
};
