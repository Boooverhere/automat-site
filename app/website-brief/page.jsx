'use client';

import { useState } from 'react';
import { ArrowLeft, ArrowRight, CheckCircle, Globe, Send } from 'lucide-react';
import Link from 'next/link';

const SITE_TYPES = ['Landing Page', 'Portfolio', 'Business / Company Site', 'E-Commerce Store', 'Blog', 'SaaS / App Marketing', 'Other'];

const PAGES = ['Home', 'About', 'Services', 'Portfolio / Work', 'Pricing', 'Blog', 'Contact', 'FAQ', 'Team'];

const STYLES = [
  { label: 'Clean & Minimal', desc: 'Lots of whitespace, simple layouts, understated' },
  { label: 'Bold & Creative', desc: 'Strong colors, expressive typography, eye-catching' },
  { label: 'Professional & Corporate', desc: 'Trust-focused, structured, conservative' },
  { label: 'Dark & Modern', desc: 'Dark backgrounds, glows, tech-forward feel' },
];

const FEATURES = [
  'Contact form', 'Live chat', 'Booking / scheduling', 'Payment / checkout',
  'Blog / CMS', 'Image gallery', 'Video embed', 'Newsletter signup',
  'Multi-language', 'Client login area', 'Custom animations',
];

const BUDGETS = ['Under $500', '$500 – $1,000', '$1,000 – $2,500', '$2,500 – $5,000', '$5,000+', 'Not sure yet'];

const TIMELINES = ['ASAP (under 2 weeks)', '2–4 weeks', '1–2 months', '2–3 months', 'Flexible'];

const emptyForm = {
  businessName: '',
  industry: '',
  businessDesc: '',
  siteType: '',
  pages: [],
  style: '',
  features: [],
  hasBranding: '',
  brandingNotes: '',
  budget: '',
  timeline: '',
  extraNotes: '',
  email: '',
  name: '',
};

export default function WebsiteBriefPage() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState(emptyForm);
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const totalSteps = 4;

  function set(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function toggleArray(field, value) {
    setForm((prev) => {
      const arr = prev[field];
      return { ...prev, [field]: arr.includes(value) ? arr.filter((v) => v !== value) : [...arr, value] };
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('/api/website-brief', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      setStatus(res.ok ? 'success' : 'error');
    } catch {
      setStatus('error');
    }
  }

  function canAdvance() {
    if (step === 1) return form.businessName && form.industry && form.businessDesc;
    if (step === 2) return form.siteType && form.pages.length > 0 && form.style;
    if (step === 3) return form.budget && form.timeline;
    return true;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900/30 text-white">

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-xl border-b border-emerald-500/20">
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <img src="/AutomatHub-logo.svg" alt="Automat Logo" className="h-10 w-auto" />
          </Link>
          <Link href="/#web-design" className="text-slate-300 hover:text-white transition-colors text-sm flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back
          </Link>
        </nav>
      </header>

      {/* Hero */}
      <section className="pt-32 pb-10 px-6">
        <div className="container mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full text-emerald-300 text-sm font-medium mb-6">
            <Globe className="w-4 h-4" />
            Website Brief
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
            Tell us about your vision
          </h1>
          <p className="text-lg text-slate-300">
            Fill in the details below and we'll come back to you with a tailored proposal within 24 hours.
          </p>
        </div>
      </section>

      {/* Progress Bar */}
      <div className="px-6 mb-8">
        <div className="container mx-auto max-w-3xl">
          <div className="flex items-center gap-3 mb-2">
            {Array.from({ length: totalSteps }).map((_, i) => (
              <div
                key={i}
                className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${
                  i + 1 <= step ? 'bg-emerald-500' : 'bg-slate-700'
                }`}
              />
            ))}
          </div>
          <p className="text-slate-400 text-sm">Step {step} of {totalSteps}</p>
        </div>
      </div>

      {/* Form */}
      <section className="pb-20 px-6">
        <div className="container mx-auto max-w-3xl">
          {status === 'success' ? (
            <div className="text-center py-20 bg-slate-800/50 border border-emerald-500/20 rounded-2xl px-10">
              <CheckCircle className="w-16 h-16 text-emerald-400 mx-auto mb-5" />
              <h2 className="text-3xl font-bold mb-3">Brief received!</h2>
              <p className="text-slate-300 text-lg mb-2">Thank you, <span className="text-white font-medium">{form.name || 'there'}</span>.</p>
              <p className="text-slate-400 mb-8">We'll review your brief and send a personalised proposal to <span className="text-white">{form.email}</span> within 24 hours.</p>
              <Link href="/" className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 rounded-lg font-medium transition-all">
                Back to Home
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-slate-800/50 border border-emerald-500/20 rounded-2xl p-8 md:p-10 space-y-8">

              {/* STEP 1 — Your Business */}
              {step === 1 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold mb-1">Your Business</h2>
                    <p className="text-slate-400 text-sm">Help us understand who you are and what you do.</p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-1.5">Business / Project Name <span className="text-red-400">*</span></label>
                    <input
                      type="text"
                      value={form.businessName}
                      onChange={(e) => set('businessName', e.target.value)}
                      placeholder="e.g. Bloom Bakery"
                      className="w-full px-4 py-3 bg-slate-900/60 border border-slate-700 focus:border-emerald-500 rounded-lg text-white placeholder-slate-500 outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-1.5">Industry / Niche <span className="text-red-400">*</span></label>
                    <input
                      type="text"
                      value={form.industry}
                      onChange={(e) => set('industry', e.target.value)}
                      placeholder="e.g. Food & Hospitality, Consulting, Fitness…"
                      className="w-full px-4 py-3 bg-slate-900/60 border border-slate-700 focus:border-emerald-500 rounded-lg text-white placeholder-slate-500 outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-1.5">Describe your business in a few sentences <span className="text-red-400">*</span></label>
                    <textarea
                      value={form.businessDesc}
                      onChange={(e) => set('businessDesc', e.target.value)}
                      rows={4}
                      placeholder="What do you do, who do you serve, what makes you different?"
                      className="w-full px-4 py-3 bg-slate-900/60 border border-slate-700 focus:border-emerald-500 rounded-lg text-white placeholder-slate-500 outline-none transition-colors resize-none"
                    />
                  </div>
                </div>
              )}

              {/* STEP 2 — Website Details */}
              {step === 2 && (
                <div className="space-y-8">
                  <div>
                    <h2 className="text-2xl font-bold mb-1">Website Details</h2>
                    <p className="text-slate-400 text-sm">Tell us about the site itself — what it needs and how it should look.</p>
                  </div>

                  {/* Site type */}
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-3">Type of website <span className="text-red-400">*</span></label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {SITE_TYPES.map((t) => (
                        <button
                          type="button"
                          key={t}
                          onClick={() => set('siteType', t)}
                          className={`px-4 py-3 rounded-lg border text-sm font-medium text-left transition-all ${
                            form.siteType === t
                              ? 'border-emerald-500 bg-emerald-500/10 text-emerald-300'
                              : 'border-slate-700 bg-slate-900/40 text-slate-300 hover:border-slate-500'
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Pages */}
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-3">Pages you'll need <span className="text-red-400">*</span> <span className="text-slate-500 font-normal">(select all that apply)</span></label>
                    <div className="flex flex-wrap gap-2">
                      {PAGES.map((p) => (
                        <button
                          type="button"
                          key={p}
                          onClick={() => toggleArray('pages', p)}
                          className={`px-4 py-2 rounded-lg border text-sm transition-all ${
                            form.pages.includes(p)
                              ? 'border-emerald-500 bg-emerald-500/10 text-emerald-300'
                              : 'border-slate-700 bg-slate-900/40 text-slate-300 hover:border-slate-500'
                          }`}
                        >
                          {p}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Style */}
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-3">Design style <span className="text-red-400">*</span></label>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {STYLES.map((s) => (
                        <button
                          type="button"
                          key={s.label}
                          onClick={() => set('style', s.label)}
                          className={`p-4 rounded-lg border text-left transition-all ${
                            form.style === s.label
                              ? 'border-emerald-500 bg-emerald-500/10'
                              : 'border-slate-700 bg-slate-900/40 hover:border-slate-500'
                          }`}
                        >
                          <div className={`text-sm font-semibold mb-1 ${form.style === s.label ? 'text-emerald-300' : 'text-white'}`}>{s.label}</div>
                          <div className="text-xs text-slate-400">{s.desc}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-3">Features you need <span className="text-slate-500 font-normal">(optional)</span></label>
                    <div className="flex flex-wrap gap-2">
                      {FEATURES.map((f) => (
                        <button
                          type="button"
                          key={f}
                          onClick={() => toggleArray('features', f)}
                          className={`px-4 py-2 rounded-lg border text-sm transition-all ${
                            form.features.includes(f)
                              ? 'border-emerald-500 bg-emerald-500/10 text-emerald-300'
                              : 'border-slate-700 bg-slate-900/40 text-slate-300 hover:border-slate-500'
                          }`}
                        >
                          {f}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 3 — Budget & Timeline */}
              {step === 3 && (
                <div className="space-y-8">
                  <div>
                    <h2 className="text-2xl font-bold mb-1">Budget & Timeline</h2>
                    <p className="text-slate-400 text-sm">This helps us scope the project correctly.</p>
                  </div>

                  {/* Branding */}
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-3">Do you already have branding? (logo, colors, fonts)</label>
                    <div className="flex gap-3">
                      {['Yes, I have everything', 'Partially (some assets)', 'No, starting from scratch'].map((opt) => (
                        <button
                          type="button"
                          key={opt}
                          onClick={() => set('hasBranding', opt)}
                          className={`flex-1 px-4 py-3 rounded-lg border text-sm font-medium transition-all text-center ${
                            form.hasBranding === opt
                              ? 'border-emerald-500 bg-emerald-500/10 text-emerald-300'
                              : 'border-slate-700 bg-slate-900/40 text-slate-300 hover:border-slate-500'
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                    {form.hasBranding && (
                      <input
                        type="text"
                        value={form.brandingNotes}
                        onChange={(e) => set('brandingNotes', e.target.value)}
                        placeholder="Any notes on your brand? (e.g. colors, fonts, existing logo link)"
                        className="mt-3 w-full px-4 py-3 bg-slate-900/60 border border-slate-700 focus:border-emerald-500 rounded-lg text-white placeholder-slate-500 outline-none transition-colors"
                      />
                    )}
                  </div>

                  {/* Budget */}
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-3">Budget range <span className="text-red-400">*</span></label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {BUDGETS.map((b) => (
                        <button
                          type="button"
                          key={b}
                          onClick={() => set('budget', b)}
                          className={`px-4 py-3 rounded-lg border text-sm font-medium transition-all ${
                            form.budget === b
                              ? 'border-emerald-500 bg-emerald-500/10 text-emerald-300'
                              : 'border-slate-700 bg-slate-900/40 text-slate-300 hover:border-slate-500'
                          }`}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Timeline */}
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-3">Desired timeline <span className="text-red-400">*</span></label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {TIMELINES.map((t) => (
                        <button
                          type="button"
                          key={t}
                          onClick={() => set('timeline', t)}
                          className={`px-4 py-3 rounded-lg border text-sm font-medium transition-all ${
                            form.timeline === t
                              ? 'border-emerald-500 bg-emerald-500/10 text-emerald-300'
                              : 'border-slate-700 bg-slate-900/40 text-slate-300 hover:border-slate-500'
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Extra notes */}
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-1.5">Anything else we should know? <span className="text-slate-500 font-normal">(optional)</span></label>
                    <textarea
                      value={form.extraNotes}
                      onChange={(e) => set('extraNotes', e.target.value)}
                      rows={3}
                      placeholder="Reference sites you like, special requirements, questions…"
                      className="w-full px-4 py-3 bg-slate-900/60 border border-slate-700 focus:border-emerald-500 rounded-lg text-white placeholder-slate-500 outline-none transition-colors resize-none"
                    />
                  </div>
                </div>
              )}

              {/* STEP 4 — Contact */}
              {step === 4 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold mb-1">Almost done!</h2>
                    <p className="text-slate-400 text-sm">Where should we send your personalised proposal?</p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-1.5">Your Name <span className="text-red-400">*</span></label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => set('name', e.target.value)}
                        placeholder="Your full name"
                        className="w-full px-4 py-3 bg-slate-900/60 border border-slate-700 focus:border-emerald-500 rounded-lg text-white placeholder-slate-500 outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-1.5">Email Address <span className="text-red-400">*</span></label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => set('email', e.target.value)}
                        placeholder="you@example.com"
                        className="w-full px-4 py-3 bg-slate-900/60 border border-slate-700 focus:border-emerald-500 rounded-lg text-white placeholder-slate-500 outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Summary */}
                  <div className="p-5 bg-slate-900/40 border border-slate-700 rounded-xl text-sm space-y-2 text-slate-300">
                    <div className="font-semibold text-white mb-3">Brief summary</div>
                    <div><span className="text-slate-500">Business:</span> {form.businessName} · {form.industry}</div>
                    <div><span className="text-slate-500">Site type:</span> {form.siteType}</div>
                    <div><span className="text-slate-500">Pages:</span> {form.pages.join(', ')}</div>
                    <div><span className="text-slate-500">Style:</span> {form.style}</div>
                    {form.features.length > 0 && <div><span className="text-slate-500">Features:</span> {form.features.join(', ')}</div>}
                    <div><span className="text-slate-500">Budget:</span> {form.budget} · <span className="text-slate-500">Timeline:</span> {form.timeline}</div>
                  </div>

                  {status === 'error' && (
                    <p className="text-red-400 text-sm">Something went wrong. Email us directly at contact@automathub.com</p>
                  )}
                </div>
              )}

              {/* Navigation */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-700">
                <button
                  type="button"
                  onClick={() => setStep((s) => s - 1)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-lg border border-slate-700 text-slate-300 hover:text-white hover:border-slate-500 transition-all text-sm font-medium ${step === 1 ? 'invisible' : ''}`}
                >
                  <ArrowLeft className="w-4 h-4" /> Back
                </button>

                {step < totalSteps ? (
                  <button
                    type="button"
                    onClick={() => setStep((s) => s + 1)}
                    disabled={!canAdvance()}
                    className="flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 disabled:opacity-40 disabled:cursor-not-allowed rounded-lg font-medium transition-all text-sm shadow-lg shadow-emerald-500/20"
                  >
                    Next <ArrowRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={!form.name || !form.email || status === 'sending'}
                    className="flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 disabled:opacity-40 disabled:cursor-not-allowed rounded-lg font-medium transition-all text-sm shadow-lg shadow-emerald-500/20"
                  >
                    <Send className="w-4 h-4" />
                    {status === 'sending' ? 'Sending…' : 'Send Brief'}
                  </button>
                )}
              </div>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
