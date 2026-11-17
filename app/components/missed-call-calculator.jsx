'use client';

import { useState } from 'react';

function Field({ label, value, onChange, min, max, step, suffix, prefix }) {
  return (
    <label className="block">
      <span className="flex justify-between text-sm text-slate-300 mb-2">
        <span>{label}</span>
        <span className="font-semibold text-white">{prefix}{value}{suffix}</span>
      </span>
      <input type="range" min={min} max={max} step={step} value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full accent-indigo-500" />
    </label>
  );
}

export default function MissedCallCalculator({ defaults = { calls: 8, rate: 25, value: 450 } }) {
  const [calls, setCalls] = useState(defaults.calls);
  const [rate, setRate] = useState(defaults.rate);
  const [value, setValue] = useState(defaults.value);
  const lostClients = (calls * 4.3 * rate) / 100;
  const lost = Math.round(lostClients * value);
  const fmt = (n) => n.toLocaleString('en-US');

  return (
    <div className="grid md:grid-cols-2 gap-8 items-center p-8 bg-slate-800/40 border border-indigo-500/20 rounded-2xl">
      <div className="space-y-6">
        <Field label="Missed calls per week" value={calls} onChange={setCalls} min={1} max={40} step={1} />
        <Field label="Callers who would have booked" value={rate} onChange={setRate} min={5} max={60} step={5} suffix="%" />
        <Field label="Average first visit" value={value} onChange={setValue} min={100} max={1500} step={50} prefix="$" />
      </div>
      <div className="text-center md:text-left">
        <p className="text-slate-300 mb-2">Revenue walking to competitors each month</p>
        <p className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent">${fmt(lost)}</p>
        <p className="text-slate-400 text-sm mt-3">
          About {lostClients.toFixed(1)} new clients a month, before counting rebookings. The service costs $197/month; winning back
          one client usually covers it.
        </p>
      </div>
    </div>
  );
}
