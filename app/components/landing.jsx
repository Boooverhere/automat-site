import { CheckCircle2, ArrowRight, PhoneMissed, MessageSquareText, CalendarCheck, BellRing } from 'lucide-react';

export const btnPrimary =
  'inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 rounded-lg font-semibold text-lg transition-all shadow-lg shadow-indigo-500/40';
export const btnSecondary =
  'inline-flex items-center justify-center gap-2 px-8 py-4 bg-slate-800 hover:bg-slate-700 border border-indigo-500/30 rounded-lg font-semibold text-lg transition-colors';

// Every booking button goes through /book/<id> so each click is counted in analytics.
export function BookButton({ id, children = 'Book a free call', className = btnPrimary }) {
  return (
    <a href={`/book/${id}`} className={className}>
      {children} <ArrowRight className="w-5 h-5" />
    </a>
  );
}

export function SectionTitle({ eyebrow, title, sub, center = false }) {
  return (
    <div className={`mb-12 ${center ? 'text-center mx-auto max-w-3xl' : 'max-w-3xl'}`}>
      {eyebrow && <p className="text-xs font-semibold uppercase tracking-widest text-indigo-300 mb-3">{eyebrow}</p>}
      <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">{title}</h2>
      {sub && <p className="text-lg md:text-xl text-slate-300 leading-relaxed">{sub}</p>}
    </div>
  );
}

// A phone showing the text a missed caller receives.
export function PhoneMock({ business = 'Your business', incoming, reply, followup, time = '2:14 PM' }) {
  return (
    <div className="mx-auto w-full max-w-[320px] rounded-[2.5rem] border-[10px] border-slate-950 bg-slate-950 shadow-2xl shadow-indigo-500/30">
      <div className="rounded-[1.8rem] bg-slate-100 text-slate-900 overflow-hidden">
        <div className="px-5 pt-4 pb-3 bg-white border-b border-slate-200 text-center">
          <div className="mx-auto mb-2 h-1.5 w-16 rounded-full bg-slate-300" />
          <div className="mx-auto mb-1 w-9 h-9 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 text-white flex items-center justify-center text-sm font-bold">
            {business.slice(0, 1)}
          </div>
          <p className="text-xs font-semibold">{business}</p>
        </div>
        <div className="px-3 py-4 space-y-3 text-[13px] leading-snug min-h-[300px]">
          <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-500">
            <PhoneMissed className="w-3.5 h-3.5 text-red-500" /> Missed call · {time}
          </div>
          <div className="max-w-[85%] rounded-2xl rounded-bl-md bg-slate-200 px-3 py-2">{reply}</div>
          {incoming && <div className="ml-auto max-w-[80%] rounded-2xl rounded-br-md bg-blue-500 text-white px-3 py-2">{incoming}</div>}
          {followup && <div className="max-w-[85%] rounded-2xl rounded-bl-md bg-slate-200 px-3 py-2">{followup}</div>}
          <p className="text-center text-[11px] text-slate-400 pt-1">Sent automatically within 10 seconds</p>
        </div>
      </div>
    </div>
  );
}

export function HowItWorks({ steps }) {
  const icons = [PhoneMissed, MessageSquareText, BellRing, CalendarCheck];
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {steps.map((s, i) => {
        const Icon = icons[i % icons.length];
        return (
          <div key={s.title} className="p-6 bg-slate-800/40 border border-indigo-500/20 rounded-xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/30">
                <Icon className="w-5 h-5" />
              </span>
              <span className="text-sm font-mono text-indigo-300">Step {i + 1}</span>
            </div>
            <h3 className="text-xl font-bold mb-2">{s.title}</h3>
            <p className="text-slate-300 leading-relaxed text-sm">{s.text}</p>
          </div>
        );
      })}
    </div>
  );
}

export function Offer({ id, audience, features }) {
  return (
    <div className="max-w-3xl mx-auto relative p-8 md:p-10 bg-gradient-to-br from-indigo-600/20 to-purple-600/20 border-2 border-indigo-500 rounded-2xl shadow-xl shadow-indigo-500/20">
      <div className="absolute -top-4 left-8">
        <span className="px-4 py-1 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-xs font-bold rounded-full shadow-lg">FIRST MONTH FREE</span>
      </div>
      <p className="text-xs font-semibold uppercase tracking-widest text-indigo-300 mb-3">{audience}</p>
      <h3 className="text-3xl font-bold mb-3">Missed-Call Text-Back, done for you</h3>
      <p className="text-slate-200 mb-8">
        We set it up, test it with you and keep it running. Live in under a week, first month of service free, no contract.
      </p>
      <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3 mb-8">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-indigo-300 flex-shrink-0 mt-0.5" />
            <span className="text-slate-200 text-sm">{f}</span>
          </li>
        ))}
      </ul>
      <BookButton id={id} className={`${btnPrimary} w-full`} />
      <p className="text-xs text-slate-400 mt-4 text-center">Free call. We&apos;ll look at your setup and show you exactly how it would work.</p>
    </div>
  );
}

export function Faq({ items }) {
  return (
    <div className="max-w-3xl mx-auto divide-y divide-indigo-500/20 border-y border-indigo-500/20">
      {items.map(([q, a]) => (
        <details key={q} className="group py-5">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold">
            {q}
            <span className="text-indigo-300 transition-transform group-open:rotate-45 text-2xl leading-none">+</span>
          </summary>
          <p className="mt-3 text-slate-300 leading-relaxed">{a}</p>
        </details>
      ))}
    </div>
  );
}

// Short founder-led trust strip; the full story lives on /about.
export function FounderStrip() {
  return (
    <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center gap-5 p-6 rounded-2xl bg-slate-800/40 border border-indigo-500/20 text-center sm:text-left">
      <img src="/mehdi.jpg" alt="Mehdi Elyoussoufi" width="56" height="56" loading="lazy" className="shrink-0 w-14 h-14 rounded-full object-cover object-[50%_30%] border border-indigo-500/40" />
      <p className="flex-1 text-slate-300 leading-relaxed">
        <span className="text-white font-semibold">Founder-led.</span> Every system is planned and overseen by Mehdi Elyoussoufi, founder of AutomatHub,
        and monitored after launch. No account managers, no handoffs.
      </p>
      <a href="/about" className="whitespace-nowrap text-indigo-300 font-semibold hover:text-white">About AutomatHub →</a>
    </div>
  );
}

export function FinalCta({ id, title, sub }) {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-4xl text-center bg-gradient-to-br from-indigo-600/20 to-purple-600/20 border border-indigo-500/40 rounded-2xl p-10 md:p-14">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
        <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">{sub}</p>
        <BookButton id={id} />
        <p className="text-sm text-slate-400 mt-4">
          Prefer email? <a href="/contact" className="text-indigo-300 underline">Send a message</a> and we&apos;ll reply within one business day.
        </p>
      </div>
    </section>
  );
}
