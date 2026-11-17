import { Activity, FileText, KeyRound, Clock, Wrench, Users, Linkedin, CheckCircle2 } from 'lucide-react';
import { SectionTitle, FinalCta } from '../components/landing';

export const metadata = {
  title: 'About Us',
  description:
    'AutomatHub is a founder-led automation agency helping med spas, clinics and home-service businesses stop losing customers to voicemail and forgotten follow-ups. Founded by Mehdi Elyoussoufi.',
  alternates: { canonical: 'https://automathub.com/about' },
};

const promises = [
  [Activity, 'Monitored after launch', 'Every system we set up is monitored. If something stops working, we get alerted and fix it, usually before you notice.'],
  [FileText, 'Documented in plain English', 'You get a written guide to your setup: what it does, where it lives and how to change it. Nothing is locked in one person\'s head.'],
  [KeyRound, 'You own everything', 'Your accounts, your phone number, your data. If you ever leave, you keep everything we built and can hand it to anyone.'],
  [Clock, 'Fast, real replies', 'Questions and changes get a reply within one business day, from the person who actually built your system.'],
  [Wrench, 'Built on proven tools', 'We use reliable, widely used tools (Twilio, Google Workspace, your existing booking software), not fragile one-off code.'],
  [Users, 'The right people per project', 'Larger projects bring in freelance developers and designers we have worked with before, coordinated by AutomatHub.'],
];

const values = [
  'No long contracts. Month to month, cancel anytime.',
  'Plain English, no tech jargon.',
  'Fixed prices agreed before any work starts.',
  'We only recommend what will actually pay for itself.',
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 text-white">
      {/* Hero */}
      <section className="pt-32 pb-16 px-6">
        <div className="container mx-auto max-w-4xl text-center space-y-6">
          <span className="inline-block px-4 py-2 bg-indigo-500/10 border border-indigo-500/30 rounded-full text-indigo-300 text-sm font-medium">About AutomatHub</span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
            Good businesses shouldn&apos;t lose customers to voicemail.
          </h1>
          <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
            AutomatHub builds simple automations for med spas, clinics and home-service businesses, so every missed call gets an answer, every
            lead gets followed up and every past client gets invited back.
          </p>
        </div>
      </section>

      {/* Founder */}
      <section className="py-16 px-6 border-y border-indigo-500/10 bg-slate-900/30">
        <div className="container mx-auto max-w-5xl grid md:grid-cols-[220px_1fr] gap-10 items-center">
          <img src="/mehdi.jpg" alt="Mehdi Elyoussoufi, founder of AutomatHub" width="208" height="208"
            className="mx-auto w-44 h-44 md:w-52 md:h-52 rounded-2xl object-cover object-[50%_30%] border border-indigo-500/30 shadow-xl shadow-indigo-500/30" />
          <div className="space-y-4 text-center md:text-left">
            <p className="text-xs font-semibold uppercase tracking-widest text-indigo-300">Founder</p>
            <h2 className="text-3xl md:text-4xl font-bold">Mehdi Elyoussoufi</h2>
            <p className="text-slate-300 leading-relaxed">
              I started AutomatHub after seeing the same thing again and again: small businesses doing great work, then losing customers
              to a call nobody could pick up, a quote nobody followed up on, or a client who simply forgot to rebook. The fix usually isn&apos;t
              more staff or more ads. It&apos;s a few well-built automations that quietly do the follow-up for you.
            </p>
            <p className="text-slate-300 leading-relaxed">
              AutomatHub is founder-led on purpose. I plan and oversee every project myself and stay your point of contact after launch, so you
              always talk to someone who knows your setup. For larger builds, we bring in trusted freelance developers and designers we&apos;ve worked with before.
            </p>
            <a href="https://linkedin.com/in/elyoussoufimehdi" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-800 hover:bg-slate-700 border border-indigo-500/30 rounded-lg font-semibold transition-colors">
              <Linkedin className="w-4 h-4" /> Connect on LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <SectionTitle eyebrow="How we work" title="Built to keep running, with or without us" sub="The questions every owner should ask an automation partner, answered up front." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {promises.map(([Icon, t, d]) => (
              <div key={t} className="p-6 bg-slate-800/40 border border-indigo-500/20 rounded-xl">
                <Icon className="w-6 h-6 text-indigo-300 mb-4" />
                <h3 className="text-lg font-bold mb-2">{t}</h3>
                <p className="text-slate-300 text-sm leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-6 border-y border-indigo-500/10 bg-slate-900/30">
        <div className="container mx-auto max-w-4xl">
          <SectionTitle center eyebrow="What we believe" title="Straightforward to work with" />
          <ul className="grid sm:grid-cols-2 gap-4">
            {values.map((v) => (
              <li key={v} className="flex items-start gap-3 p-4 rounded-xl bg-slate-800/40 border border-indigo-500/20">
                <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                <span className="text-slate-200">{v}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <FinalCta id="about-final" title="Let's see what you're missing" sub="A short, free call. We'll look at how calls and follow-ups work in your business today and show you what could run on its own." />
    </div>
  );
}
