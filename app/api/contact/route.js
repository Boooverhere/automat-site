import { NextResponse } from 'next/server';
import supabase from '@/lib/supabase';

export async function POST(req) {
  const { name, email, service, message } = await req.json();

  if (!email || !message) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  const { error } = await supabase
    .from('contact_submissions')
    .insert({ name, email, service, message });

  if (error) {
    console.error('Supabase error:', error);
    return NextResponse.json({ error: 'Failed to save submission' }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
