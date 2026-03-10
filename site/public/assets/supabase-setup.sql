-- ══════════════════════════════════════════════════════════
-- CodingInABox — Supabase Signups Table Setup
-- Run this in your Supabase SQL Editor (Dashboard → SQL Editor)
-- ══════════════════════════════════════════════════════════

CREATE TABLE IF NOT EXISTS public.signups (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  subject TEXT,
  message TEXT,
  signup_type TEXT DEFAULT 'contact' CHECK (signup_type IN ('contact', 'course_enrollment', 'newsletter')),
  selected_courses TEXT[],
  subscription_tier TEXT CHECK (subscription_tier IS NULL OR subscription_tier IN ('single', 'bundle_3', 'all_access')),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE public.signups ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts (for public form submissions)
CREATE POLICY "Allow anonymous inserts"
  ON public.signups
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Allow service role full access (for edge functions and admin)
CREATE POLICY "Service role full access"
  ON public.signups
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

-- Performance indexes
CREATE INDEX IF NOT EXISTS idx_signups_email ON public.signups (email);
CREATE INDEX IF NOT EXISTS idx_signups_created_at ON public.signups (created_at DESC);
CREATE INDEX IF NOT EXISTS idx_signups_type ON public.signups (signup_type);
