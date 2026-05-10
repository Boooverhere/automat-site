import { NextResponse } from 'next/server';
import getSupabase from '@/lib/supabase';

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

  return NextResponse.json({ success: true });
}
