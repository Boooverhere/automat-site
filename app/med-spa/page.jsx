import { CheckCircle2, XCircle, Clock, Repeat, Smartphone, ShieldCheck } from 'lucide-react';
import {
  BookButton, btnSecondary, SectionTitle, PhoneMock, HowItWorks, Offer, Faq, FounderStrip, FinalCta,
} from '../components/landing';
import MissedCallCalculator from '../components/missed-call-calculator';

export const metadata = {
  title: { absolute: 'Missed-Call Text-Back for Med Spas | AutomatHub' },
  description:
    'When your team is with a client and a call goes to voicemail, the caller gets a text with your booking link within seconds. Plus automatic rebooking reminders. Uses your existing number. First month free.',
  alternates: { canonical: 'https://automathub.com/med-spa' },
};

const steps = [
  { title: 'A call goes unanswered', text: 'Your front desk is with a client, or it is after hours. The call rings out like it always does.' },
  { title: 'They get a text in seconds', text: 'From your business number: a friendly note and your booking link, so they can book now instead of calling the next med spa.' },
  { title: 'You get a heads-up', text: 'A text or email tells your team who called and what they replied, so you can follow up between clients.' },
  { title: 'They book, or get a nudge', text: 'If they go quiet, one polite follow-up goes out the next day. Every caller is logged in one simple list.' },
];

const features = [
  'Missed callers get a text with your booking link within seconds',
  'Works with your existing business number',
  'Works with any booking system: Boulevard, Vagaro, Mangomint, GlossGenius and others',
  'Instant alert to you or your front desk',
  'One automatic follow-up if a caller goes quiet',
  'Every missed caller logged (Google Sheets or your CRM)',
  'Optional rebooking texts when clients are due (Botox, fillers, facials)',
  'Monitoring, fixes and wording changes included',
];

const faqs = [
  ['Do I need a new phone number?', 'No. You keep your number. Missed calls are forwarded to a text line that sends the reply from a number linked to your business. Your callers and your front desk notice nothing different, except fewer lost leads.'],
  ['Will it work with my booking software?', 'Yes. The text simply includes your existing online booking link, so it works with Boulevard, Vagaro, Mangomint, GlossGenius, Zenoti, Square or anything else. Rebooking reminders can connect to most systems directly or run from a client export.'],
  ['What exactly does the text say?', 'Whatever you want. We write it with you on the call. A typical one: "Hi! Sorry we missed you, we\'re with a client right now. You can grab a time here: [link], or just text us back."'],
  ['Is texting callers allowed?', 'The text only goes to someone who just called you, as a direct reply to their call, not as marketing. Rebooking reminders only go to your existing clients, with an opt-out in every message.'],
  ['How long does setup take?', 'Usually under a week. After a short call we build it, test it together with a real call to your number, and then it runs on its own.'],
  ['What if it does not work for us?', 'Your first month of service is free and you can cancel anytime. There is no long contract.'],
];

export default function MedSpaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 text-white">
      {/* Hero */}
      <section className="pt-32 pb-16 px-6">
        <div className="container mx-auto max-w-6xl grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-center lg:text-left">
            <span className="inline-block px-4 py-2 bg-indigo-500/10 border border-indigo-500/30 rounded-full text-indigo-300 text-sm font-medium">
              For med spas &amp; aesthetic clinics
            </span>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
              Calls during treatments shouldn&apos;t cost you new clients.
            </h1>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
              When your team is with a client, the phone goes to voicemail, and most callers don&apos;t leave a message. They book with
              the next med spa on Google. We set up an automatic text that reaches every missed caller within seconds, with your booking link.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
              <BookButton id="medspa-hero" />
              <a href="#how" className={btnSecondary}>See how it works</a>
            </div>
            <ul className="flex flex-wrap gap-x-6 gap-y-2 justify-center lg:justify-start text-sm text-slate-300 pt-2">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-400" /> Keeps your number</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-400" /> Live in under a week</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-400" /> First month free</li>
            </ul>
          </div>
          <PhoneMock
            business="Glow Aesthetics"
            reply="Hi! Sorry we missed you, we're with a client right now 💆‍♀️ You can grab a time here: glowaesthetics.com/book, or just text us back."
            incoming="Hi! Do you have anything Thursday for Botox?"
            followup="We do! Thursday 3:30 or 5:00 are open. Want me to hold one for you?"
          />
        </div>
      </section>

      {/* Before / after */}
      <section className="py-16 px-6 border-y border-indigo-500/10 bg-slate-900/30">
        <div className="container mx-auto max-w-5xl grid md:grid-cols-2 gap-6">
          <div className="p-8 rounded-2xl bg-red-500/5 border border-red-500/20">
            <h3 className="text-xl font-bold mb-4 text-red-200">Today</h3>
            <ul className="space-y-3 text-slate-300">
              {['A new client calls about fillers while you are mid-treatment', 'Voicemail. They hang up without a message', 'They call the next med spa on Google and book there', 'You never even know you lost them'].map((t) => (
                <li key={t} className="flex gap-3"><XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />{t}</li>
              ))}
            </ul>
          </div>
          <div className="p-8 rounded-2xl bg-green-500/5 border border-green-500/20">
            <h3 className="text-xl font-bold mb-4 text-green-200">With text-back</h3>
            <ul className="space-y-3 text-slate-300">
              {['Same call, same voicemail', 'Within seconds they get a friendly text with your booking link', 'They book online or text back while still interested', 'Your team sees every missed caller, nothing slips'].map((t) => (
                <li key={t} className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />{t}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="py-20 px-6 scroll-mt-24">
        <div className="container mx-auto max-w-6xl">
          <SectionTitle eyebrow="How it works" title="Set up once. Works on every missed call." sub="Nothing changes for your front desk. You don't install anything." />
          <HowItWorks steps={steps} />
        </div>
      </section>

      {/* Calculator */}
      <section className="py-20 px-6 border-y border-indigo-500/10 bg-slate-900/30">
        <div className="container mx-auto max-w-5xl">
          <SectionTitle eyebrow="Quick math" title="What are missed calls costing you?" sub="Move the sliders to match your clinic." />
          <MissedCallCalculator />
          <div className="text-center mt-8"><BookButton id="medspa-calculator">Stop losing these clients</BookButton></div>
        </div>
      </section>

      {/* Rebooking */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl grid md:grid-cols-3 gap-6">
          <div className="md:col-span-3"><SectionTitle eyebrow="Optional add-on" title="Fill empty spots with clients you already have" /></div>
          {[
            [Repeat, 'Rebooking reminders', 'Botox wears off after 3–4 months. Clients get a friendly text when they are due, with your booking link.'],
            [Clock, 'Fills quiet days', 'Reminders go out ahead of slow weeks, so your calendar fills without spending more on ads.'],
            [Smartphone, 'Sounds like you', 'Every message is written with you and sent from your business, never generic spam.'],
          ].map(([Icon, t, d]) => (
            <div key={t} className="p-6 bg-slate-800/40 border border-purple-500/20 rounded-xl">
              <Icon className="w-6 h-6 text-purple-300 mb-4" />
              <h3 className="text-xl font-bold mb-2">{t}</h3>
              <p className="text-slate-300 text-sm leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Offer */}
      <section id="offer" className="py-20 px-6 border-y border-indigo-500/10 bg-slate-900/30 scroll-mt-24">
        <div className="container mx-auto max-w-5xl">
          <SectionTitle center eyebrow="The offer" title="Everything done for you" sub="Your front desk keeps doing what it does. We make sure no caller slips away." />
          <Offer id="medspa-offer" audience="For med spas & aesthetic clinics" features={features} />
          <p className="flex items-center justify-center gap-2 text-sm text-slate-400 mt-6">
            <ShieldCheck className="w-4 h-4 text-green-400" /> No contract. Cancel anytime. You own everything we set up.
          </p>
        </div>
      </section>

      {/* About */}
      <section className="py-20 px-6">
        <FounderStrip />
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 px-6 border-t border-indigo-500/10 scroll-mt-24">
        <div className="container mx-auto max-w-5xl">
          <SectionTitle center eyebrow="FAQ" title="Questions clinic owners ask" />
          <Faq items={faqs} />
        </div>
      </section>

      <FinalCta id="medspa-final" title="See it working on your own number" sub="On a short call we'll show you exactly what your missed callers would receive, and you decide if it's worth it. No pressure, no pitch deck." />
    </div>
  );
}
