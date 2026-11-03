import { NextResponse } from 'next/server';
import getSupabase from '@/lib/supabase';
import { notifyNewSubmission } from '@/lib/notify';

export const dynamic = 'force-dynamic';

export async function POST(req) {
  const { name, email, service, message } = await req.json();

  if (!email || !message) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  const { error } = await getSupabase()
    .from('contact_submissions')
    .insert({ name, email, service, message });

  if (error) {
    console.error('Supabase error:', error);
    return NextResponse.json({ error: 'Failed to save submission' }, { status: 500 });
  }

  await notifyNewSubmission({
    subject: `New contact message from ${name || email}`,
    replyTo: email,
    fields: [
      ['Name', name],
      ['Email', email],
      ['Service', service],
      ['Message', message],
    ],
  });

  return NextResponse.json({ success: true });
}
