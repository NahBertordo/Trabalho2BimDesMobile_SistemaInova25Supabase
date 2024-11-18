import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://dccnfglyslddwxnxetpx.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRjY25mZ2x5c2xkZHd4bnhldHB4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE3MDU0NTAsImV4cCI6MjA0NzI4MTQ1MH0.6b96RMaYyhlis9nZFg1byp-zlorjTIAQq5nXRNkYwmo"

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})