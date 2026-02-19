
-- Drop the existing permissive SELECT policy and replace with one restricted to authenticated users
DROP POLICY IF EXISTS "Authenticated users can view campaigns" ON public.email_campaigns;

CREATE POLICY "Authenticated users can view campaigns"
ON public.email_campaigns FOR SELECT
TO authenticated
USING (auth.uid() IS NOT NULL);
