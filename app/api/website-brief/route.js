import { NextResponse } from 'next/server';
import getSupabase from '@/lib/supabase';
import { notifyNewSubmission } from '@/lib/notify';

export const dynamic = 'force-dynamic';

export async function POST(req) {
  const body = await req.json();
  const { name, email, businessName, industry, businessDesc, siteType, pages, style, features, hasBranding, brandingNotes, budget, timeline, extraNotes } = body;

  if (!email || !businessName) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  const { error } = await getSupabase()
    .from('website_briefs')
    .insert({
      name,
      email,
      business_name: businessName,
      industry,
      business_desc: businessDesc,
      site_type: siteType,
      pages,
      style,
      features,
      has_branding: hasBranding,
      branding_notes: brandingNotes,
      budget,
      timeline,
      extra_notes: extraNotes,
    });

  if (error) {
    console.error('Supabase error:', error);
    return NextResponse.json({ error: 'Failed to save submission' }, { status: 500 });
  }

  await notifyNewSubmission({
    subject: `New website brief: ${businessName}`,
    replyTo: email,
    fields: [
      ['Name', name],
      ['Email', email],
      ['Business', businessName],
      ['Industry', industry],
      ['About the business', businessDesc],
      ['Site type', siteType],
      ['Pages', pages],
      ['Style', style],
      ['Features', features],
      ['Has branding', hasBranding],
      ['Branding notes', brandingNotes],
      ['Budget', budget],
      ['Timeline', timeline],
      ['Extra notes', extraNotes],
    ],
  });

  return NextResponse.json({ success: true });
}
