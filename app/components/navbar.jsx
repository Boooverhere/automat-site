'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-xl border-b border-indigo-500/20">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <img
              src="/AutomatHub-logo.svg"
              alt="Automat Logo"
              className="h-10 w-auto"
            />
            <span className="text-2xl font-bold tracking-tight"></span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/#services" className="text-slate-300 hover:text-white transition-colors">Services</a>
            <a href="/#process" className="text-slate-300 hover:text-white transition-colors">Process</a>
            <Link href="/case-studies" className="text-slate-300 hover:text-white transition-colors">Case Studies</Link>
            <a href="/#pricing" className="text-slate-300 hover:text-white transition-colors">Pricing</a>
            <a href="/#contact" className="px-6 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 rounded-lg font-medium transition-all shadow-lg shadow-indigo-500/30">
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-indigo-500/20">
            <div className="flex flex-col space-y-4">
              <a href="/#services" className="text-slate-300 hover:text-white transition-colors">Services</a>
              <a href="/#process" className="text-slate-300 hover:text-white transition-colors">Process</a>
              <Link href="/case-studies" className="text-slate-300 hover:text-white transition-colors">Case Studies</Link>
              <a href="/#pricing" className="text-slate-300 hover:text-white transition-colors">Pricing</a>
              <a href="/#contact" className="px-6 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 rounded-lg font-medium transition-all text-center shadow-lg shadow-indigo-500/30">
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
