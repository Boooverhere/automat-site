'use client';

import { useEffect } from 'react';
import { track } from '@vercel/analytics';

const CALENDLY = 'https://calendly.com/automathub/15min';

// Every "Book a call" button links to /book/<where-it-was-clicked>.
// Vercel Web Analytics records that as a page view (works on the Hobby plan),
// so clicks per button show up under Pages: /book/home-hero, /book/medspa-offer, ...
// Then we hand off to Calendly, passing the same label so bookings show their source there too.
export default function BookRedirect({ params }) {
  const from = String(params.from || 'unknown').slice(0, 60);
  const target = `${CALENDLY}?utm_source=automathub&utm_medium=website&utm_content=${encodeURIComponent(from)}`;

  useEffect(() => {
    try { track('book_click', { from }); } catch {}
    // short delay so the page-view beacon is sent before we leave the site
    const t = setTimeout(() => window.location.replace(target), 700);
    return () => clearTimeout(t);
  }, [from, target]);

  return (
    <main className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 text-white">
      <div className="text-center space-y-4">
        <div className="mx-auto w-10 h-10 rounded-full border-4 border-indigo-400 border-t-transparent animate-spin" aria-hidden="true" />
        <p className="text-lg text-slate-200">Opening the AutomatHub calendar…</p>
        <a href={target} className="text-indigo-300 underline text-sm">Click here if it doesn&apos;t open</a>
      </div>
    </main>
  );
}
