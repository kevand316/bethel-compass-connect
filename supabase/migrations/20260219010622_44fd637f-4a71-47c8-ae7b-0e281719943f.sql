
-- Fix overly permissive RLS policies on contacts table
DROP POLICY IF EXISTS "Authenticated users can insert contacts" ON public.contacts;
DROP POLICY IF EXISTS "Authenticated users can update contacts" ON public.contacts;
DROP POLICY IF EXISTS "Authenticated users can delete contacts" ON public.contacts;

CREATE POLICY "Authenticated users can insert contacts"
ON public.contacts FOR INSERT
TO authenticated
WITH CHECK (auth.uid() IS NOT NULL);

CREATE POLICY "Authenticated users can update contacts"
ON public.contacts FOR UPDATE
TO authenticated
USING (auth.uid() IS NOT NULL);

CREATE POLICY "Authenticated users can delete contacts"
ON public.contacts FOR DELETE
TO authenticated
USING (auth.uid() IS NOT NULL);

-- Fix overly permissive RLS policies on email_campaigns table
DROP POLICY IF EXISTS "Authenticated users can insert campaigns" ON public.email_campaigns;
DROP POLICY IF EXISTS "Authenticated users can update campaigns" ON public.email_campaigns;
DROP POLICY IF EXISTS "Authenticated users can delete campaigns" ON public.email_campaigns;

CREATE POLICY "Authenticated users can insert campaigns"
ON public.email_campaigns FOR INSERT
TO authenticated
WITH CHECK (auth.uid() IS NOT NULL);

CREATE POLICY "Authenticated users can update campaigns"
ON public.email_campaigns FOR UPDATE
TO authenticated
USING (auth.uid() IS NOT NULL);

CREATE POLICY "Authenticated users can delete campaigns"
ON public.email_campaigns FOR DELETE
TO authenticated
USING (auth.uid() IS NOT NULL);

-- Fix overly permissive RLS policies on email_history table
DROP POLICY IF EXISTS "Authenticated users can insert email history" ON public.email_history;

CREATE POLICY "Authenticated users can insert email history"
ON public.email_history FOR INSERT
TO authenticated
WITH CHECK (auth.uid() IS NOT NULL);
