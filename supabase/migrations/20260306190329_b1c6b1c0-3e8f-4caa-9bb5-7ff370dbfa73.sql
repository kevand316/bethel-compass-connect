
-- Add user_id to email_campaigns for ownership
ALTER TABLE public.email_campaigns ADD COLUMN user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE;

-- Add user_id to email_history for ownership
ALTER TABLE public.email_history ADD COLUMN user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE;

-- Add user_id to contact_form_submissions so admins can claim/view them
ALTER TABLE public.contact_form_submissions ADD COLUMN user_id uuid REFERENCES auth.users(id) ON DELETE SET NULL;

-- Fix email_campaigns: ownership-based policies
DROP POLICY IF EXISTS "Authenticated users can view campaigns" ON public.email_campaigns;
DROP POLICY IF EXISTS "Authenticated users can insert campaigns" ON public.email_campaigns;
DROP POLICY IF EXISTS "Authenticated users can update campaigns" ON public.email_campaigns;
DROP POLICY IF EXISTS "Authenticated users can delete campaigns" ON public.email_campaigns;

CREATE POLICY "Users can view own campaigns"
ON public.email_campaigns FOR SELECT
TO authenticated
USING (user_id = auth.uid());

CREATE POLICY "Users can insert own campaigns"
ON public.email_campaigns FOR INSERT
TO authenticated
WITH CHECK (user_id = auth.uid());

CREATE POLICY "Users can update own campaigns"
ON public.email_campaigns FOR UPDATE
TO authenticated
USING (user_id = auth.uid());

CREATE POLICY "Users can delete own campaigns"
ON public.email_campaigns FOR DELETE
TO authenticated
USING (user_id = auth.uid());

-- Fix email_history: ownership-based policies
DROP POLICY IF EXISTS "Authenticated users can view email history" ON public.email_history;
DROP POLICY IF EXISTS "Authenticated users can insert email history" ON public.email_history;

CREATE POLICY "Users can view own email history"
ON public.email_history FOR SELECT
TO authenticated
USING (user_id = auth.uid());

CREATE POLICY "Users can insert own email history"
ON public.email_history FOR INSERT
TO authenticated
WITH CHECK (user_id = auth.uid());

-- Fix contact_form_submissions: restrict SELECT to submission owner or authenticated staff
DROP POLICY IF EXISTS "Authenticated users can view submissions" ON public.contact_form_submissions;

CREATE POLICY "Users can view own submissions"
ON public.contact_form_submissions FOR SELECT
TO authenticated
USING (user_id = auth.uid());
