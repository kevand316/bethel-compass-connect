
-- Drop the existing permissive SELECT policy and replace with one restricted to authenticated users only
DROP POLICY IF EXISTS "Authenticated users can view submissions" ON public.contact_form_submissions;

CREATE POLICY "Authenticated users can view submissions"
ON public.contact_form_submissions FOR SELECT
TO authenticated
USING (true);
