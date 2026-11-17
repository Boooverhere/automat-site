import Link from 'next/link';
import { CheckCircle2, ArrowRight, Sparkles, Wrench, Globe } from 'lucide-react';
import {
  BookButton, btnSecondary, SectionTitle, PhoneMock, HowItWorks, Pricing, Faq, FounderStrip, FinalCta,
} from './components/landing';

export const metadata = {
  title: { absolute: 'AutomatHub | Missed-Call Text-Back for Local Businesses' },
  description:
    'Every missed call gets a text back within seconds, from your own number, so callers book with you instead of a competitor. For med spas, clinics and home-service businesses. First month free.',
  alternates: { canonical: 'https://automathub.com' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'AutomatHub',
  url: 'https://automathub.com',
  logo: 'https://automathub.com/AutomatHub-logo.svg',
  description: 'Missed-call text-back and follow-up automation for med spas, clinics and home-service businesses.',
  email: 'hello@automathub.com',
  priceRange: '$197 - $497',
  founder: { '@type': 'Person', name: 'Mehdi Elyoussoufi' },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Automation Services',
    itemListElement: [
      { '@type': 'Offer', name: 'Missed-Call Text-Back: setup', price: '497.00', priceCurrency: 'USD',
        description: 'One-time setup of instant text-back for missed calls, lead logging, owner alerts and automatic follow-up.' },
      { '@type': 'Offer', name: 'Missed-Call Text-Back: monthly service', price: '197.00', priceCurrency: 'USD',
        description: 'Monitoring, fixes and changes. First month free.',
        priceSpecification: { '@type': 'UnitPriceSpecification', price: '197.00', priceCurrency: 'USD', unitText: 'MONTH' } },
    ],
  },
};

const steps = [
  { title: 'A call goes unanswered', text: "You're with a client, on a job, or closed for the day. The call rings out as usual." },
  { title: 'They get a text in seconds', text: 'From your business number, with a friendly message and your booking link, before they call a competitor.' },
  { title: 'You get a heads-up', text: 'An alert on your phone shows who called and what they replied, so you can follow up when you have a minute.' },
  { title: 'Nothing slips', text: 'Quiet callers get one polite follow-up, and every lead is logged in one simple list.' },
];

const features = [
  'Missed callers get a text back within seconds',
  'Keeps your existing business number',
  'Includes your booking link or asks what they need',
  'Instant alert to your phone for every lead',
  'One automatic follow-up if a lead goes quiet',
  'Every lead logged in Google Sheets or your CRM',
  'Monitoring, fixes and wording changes included',
  'Cancel anytime, no contract',
];

const faqs = [
  ['Do I need a new phone number?', 'No. You keep your number. Missed calls trigger a text from a line linked to your business, and nothing changes for you or your callers except fewer lost leads.'],
  ['Does it work with my software?', 'Yes. The text includes your existing booking link or simply asks what the caller needs, so it works with any booking or job software (Boulevard, Vagaro, Jobber, Housecall Pro and others).'],
  ['How long does setup take?', 'Usually under a week. After a short call we build it, test it together with a real call to your number, and then it runs on its own.'],
  ['What does it cost?', '$497 one-time setup, then $197/month for monitoring and changes, with the first month free. Phone line costs ($5–10/month) are billed by the phone provider.'],
  ['What if it does not work for us?', 'Your first month of service is free and you can cancel anytime. You own everything we set up.'],
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6">
        <div className="container mx-auto max-w-6xl grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-center lg:text-left">
            <span className="inline-block px-4 py-2 bg-indigo-500/10 border border-indigo-500/30 rounded-full text-indigo-300 text-sm font-medium">
              For med spas, clinics &amp; home-service businesses
            </span>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
              Every missed call gets a text back in seconds.
            </h1>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
              Most people who reach voicemail don&apos;t leave a message. They call the next business on Google. We set up an automatic
              text from your own number, so those callers book with you instead.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
              <BookButton id="home-hero" />
              <a href="#how" className={btnSecondary}>See how it works</a>
            </div>
            <ul className="flex flex-wrap gap-x-6 gap-y-2 justify-center lg:justify-start text-sm text-slate-300 pt-2">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-400" /> Keeps your number</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-400" /> Live in under a week</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-400" /> First month free</li>
            </ul>
          </div>
          <PhoneMock
            business="Your Business"
            reply="Hi! Sorry we missed your call, we're with a customer right now. What can we help you with? You can also book here: yourbusiness.com/book"
            incoming="Hi, I need a quote for next week. Are you available?"
            followup="Yes! We have Tuesday and Wednesday open. We'll call you back within the hour to confirm."
          />
        </div>
      </section>

      {/* Pick your business */}
      <section className="py-16 px-6 border-y border-indigo-500/10 bg-slate-900/30">
        <div className="container mx-auto max-w-5xl">
          <p className="text-center text-slate-300 mb-8 text-lg">Built for businesses where the phone rings while you&apos;re busy</p>
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/med-spa" className="group p-8 rounded-2xl bg-slate-800/40 border border-purple-500/30 hover:border-purple-400 transition-all">
              <Sparkles className="w-7 h-7 text-purple-300 mb-4" />
              <h3 className="text-2xl font-bold mb-2">Med spas &amp; aesthetic clinics</h3>
              <p className="text-slate-300 mb-4">Calls during treatments, plus rebooking reminders when clients are due for Botox or their next visit.</p>
              <span className="inline-flex items-center gap-2 text-purple-300 font-semibold group-hover:gap-3 transition-all">See the med spa setup <ArrowRight className="w-4 h-4" /></span>
            </Link>
            <a href="#how" className="group p-8 rounded-2xl bg-slate-800/40 border border-indigo-500/30 hover:border-indigo-400 transition-all">
              <Wrench className="w-7 h-7 text-indigo-300 mb-4" />
              <h3 className="text-2xl font-bold mb-2">Plumbing, HVAC &amp; home services</h3>
              <p className="text-slate-300 mb-4">Calls you miss on a job get answered instantly, before the customer rings the next company on the list.</p>
              <span className="inline-flex items-center gap-2 text-indigo-300 font-semibold group-hover:gap-3 transition-all">See how it works <ArrowRight className="w-4 h-4" /></span>
            </a>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="py-20 px-6 scroll-mt-24">
        <div className="container mx-auto max-w-6xl">
          <SectionTitle eyebrow="How it works" title="Set up once. Works on every missed call." sub="You don't install anything and nothing changes for your team." />
          <HowItWorks steps={steps} />
          <div className="mt-10 text-center"><BookButton id="home-how">See it on your own number</BookButton></div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 px-6 border-y border-indigo-500/10 bg-slate-900/30 scroll-mt-24">
        <div className="container mx-auto max-w-5xl">
          <SectionTitle center eyebrow="Pricing" title="Simple, flat pricing" sub="One recovered customer usually pays for months of service." />
          <Pricing id="home-pricing" audience="For appointment & service businesses" features={features} />
          <p className="text-center text-sm text-slate-400 mt-6">
            Need something else automated, like quote follow-ups, reminders or review requests?{' '}
            <a href="/book/home-custom" className="text-indigo-300 underline">Get a fixed-price quote</a>.
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
          <SectionTitle center eyebrow="FAQ" title="Common questions" />
          <Faq items={faqs} />
        </div>
      </section>

      <FinalCta id="home-final" title="Find out how many calls you're missing" sub="A short, free call. We'll show you what your missed callers would receive and how fast it can be live. No pressure." />

      {/* Websites (secondary service) */}
      <section className="pb-20 px-6">
        <div className="container mx-auto max-w-4xl flex flex-col sm:flex-row items-center justify-between gap-4 p-6 rounded-xl border border-emerald-500/20 bg-emerald-500/5">
          <p className="flex items-center gap-3 text-slate-300"><Globe className="w-5 h-5 text-emerald-400" /> Need a new website too? We build fast, mobile-first business sites.</p>
          <Link href="/website-brief" className="text-emerald-300 font-semibold whitespace-nowrap">Tell us about it →</Link>
        </div>
      </section>
    </div>
  );
}
