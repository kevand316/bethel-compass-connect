
-- Add user_id column to contacts table for ownership tracking
ALTER TABLE public.contacts ADD COLUMN user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE;

-- Drop existing RLS policies on contacts
DROP POLICY IF EXISTS "Authenticated users can view contacts" ON public.contacts;
DROP POLICY IF EXISTS "Authenticated users can insert contacts" ON public.contacts;
DROP POLICY IF EXISTS "Authenticated users can update contacts" ON public.contacts;
DROP POLICY IF EXISTS "Authenticated users can delete contacts" ON public.contacts;

-- Create ownership-based RLS policies
CREATE POLICY "Users can view own contacts"
ON public.contacts FOR SELECT
TO authenticated
USING (user_id = auth.uid());

CREATE POLICY "Users can insert own contacts"
ON public.contacts FOR INSERT
TO authenticated
WITH CHECK (user_id = auth.uid());

CREATE POLICY "Users can update own contacts"
ON public.contacts FOR UPDATE
TO authenticated
USING (user_id = auth.uid());

CREATE POLICY "Users can delete own contacts"
ON public.contacts FOR DELETE
TO authenticated
USING (user_id = auth.uid());
