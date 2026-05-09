'use client';

import { useState } from 'react';
import { Mail, Clock, Github, Linkedin, Twitter, ArrowLeft, Send, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', service: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('https://formspree.io/f/xbljarvo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', service: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 text-white">

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-xl border-b border-indigo-500/20">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <img src="/AutomatHub-logo.svg" alt="Automat Logo" className="h-10 w-auto" />
            </Link>
            <Link href="/" className="text-slate-300 hover:text-white transition-colors text-sm flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="pt-32 pb-12 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="mb-6">
            <span className="px-4 py-2 bg-indigo-500/10 border border-indigo-500/30 rounded-full text-indigo-300 text-sm font-medium">
              Get in Touch
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
            Contact Us
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl">
            Have a project in mind or want to discuss automation for your systems? We respond within 24 hours.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-6">
        <div className="container mx-auto max-w-5xl grid md:grid-cols-5 gap-12">

          {/* Left — Info */}
          <div className="md:col-span-2 space-y-8">
            <div>
              <h2 className="text-lg font-semibold mb-4 text-white">Contact Details</h2>
              <div className="space-y-4">
                <a
                  href="mailto:contact@automathub.com"
                  className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors"
                >
                  <div className="w-9 h-9 bg-slate-800 border border-slate-700 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4 text-indigo-400" />
                  </div>
                  contact@automathub.com
                </a>
                <div className="flex items-center gap-3 text-slate-400">
                  <div className="w-9 h-9 bg-slate-800 border border-slate-700 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-4 h-4 text-indigo-400" />
                  </div>
                  Response within 24 hours
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-4 text-white">Follow Us</h2>
              <div className="flex gap-3">
                <a
                  href="https://github.com/boooverhere"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-indigo-500 rounded-lg flex items-center justify-center transition-all group"
                >
                  <Github className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
                </a>
                <a
                  href="https://linkedin.com/in/elyoussoufimehdi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-indigo-500 rounded-lg flex items-center justify-center transition-all group"
                >
                  <Linkedin className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
                </a>
                <a
                  href="https://x.com/automat_mehdi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-indigo-500 rounded-lg flex items-center justify-center transition-all group"
                >
                  <Twitter className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
                </a>
              </div>
            </div>

            <div className="p-5 bg-indigo-500/10 border border-indigo-500/20 rounded-xl">
              <h3 className="font-semibold text-indigo-300 mb-2">What to include</h3>
              <ul className="text-slate-400 text-sm space-y-1.5">
                <li>• Your current tech stack</li>
                <li>• The problem you're solving</li>
                <li>• Timeline and budget range</li>
              </ul>
            </div>
          </div>

          {/* Right — Form */}
          <div className="md:col-span-3">
            {status === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-10 bg-slate-800/50 border border-indigo-500/20 rounded-2xl">
                <CheckCircle className="w-14 h-14 text-green-400 mb-4" />
                <h3 className="text-2xl font-bold mb-2">Message sent!</h3>
                <p className="text-slate-400 mb-6">We'll get back to you within 24 hours.</p>
                <button
                  onClick={() => setStatus('idle')}
                  className="px-6 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 rounded-lg font-medium transition-all"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-5 bg-slate-800/50 border border-indigo-500/20 rounded-2xl p-8"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-1.5">Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="w-full px-4 py-3 bg-slate-900/60 border border-slate-700 focus:border-indigo-500 rounded-lg text-white placeholder-slate-500 outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-1.5">Email</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@company.com"
                      className="w-full px-4 py-3 bg-slate-900/60 border border-slate-700 focus:border-indigo-500 rounded-lg text-white placeholder-slate-500 outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1.5">Service Interest</label>
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-900/60 border border-slate-700 focus:border-indigo-500 rounded-lg text-white outline-none transition-colors appearance-none"
                  >
                    <option value="" className="text-slate-500">Select a service…</option>
                    <option value="Custom API Integration">Custom API Integration</option>
                    <option value="Workflow Automation">Workflow Automation</option>
                    <option value="Maintenance Retainer">Maintenance Retainer</option>
                    <option value="Enterprise Consulting">Enterprise Consulting</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1.5">Message</label>
                  <textarea
                    name="message"
                    required
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Describe your project, stack, and goals…"
                    className="w-full px-4 py-3 bg-slate-900/60 border border-slate-700 focus:border-indigo-500 rounded-lg text-white placeholder-slate-500 outline-none transition-colors resize-none"
                  />
                </div>

                {status === 'error' && (
                  <p className="text-red-400 text-sm">Something went wrong. Try emailing us directly at contact@automathub.com</p>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 disabled:opacity-60 disabled:cursor-not-allowed rounded-lg font-medium transition-all shadow-lg shadow-indigo-500/30"
                >
                  <Send className="w-4 h-4" />
                  {status === 'sending' ? 'Sending…' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
