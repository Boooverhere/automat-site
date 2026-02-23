'use client';

import { Zap, Github, Linkedin, Twitter, Mail } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
<footer className="py-12 px-6 border-t border-indigo-500/10">
  <div className="container mx-auto max-w-6xl">
    <div className="grid md:grid-cols-4 gap-8 mb-8">
      {/* Company Info */}
      <div>
        <div className="flex items-center space-x-2 mb-4">
          <img 
            src="/AutomatHub-logo.svg" 
            alt="Automat Logo"  
            className="h-11 w-auto"
          />
        </div>
        <p className="text-slate-400 text-sm mb-4">
          Technical automation consultancy for enterprise systems.
        </p>
        
        {/* Social Media Links */}
        <div className="flex items-center gap-3">
          <a 
            href="https://github.com/boooverhere" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-9 h-9 bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-indigo-500 rounded-lg flex items-center justify-center transition-all group"
            aria-label="GitHub"
          >
            <Github className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
          </a>
          
          <a 
            href="https://linkedin.com/in/elyoussoufimehdi" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-9 h-9 bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-indigo-500 rounded-lg flex items-center justify-center transition-all group"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
          </a>
          
          <a 
            href="https://x.com/automat_mehdi" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-9 h-9 bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-indigo-500 rounded-lg flex items-center justify-center transition-all group"
            aria-label="X"
          >
            <Twitter className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
          </a>
          
          <a 
            href="mailto:contact@automathub.com"
            className="w-9 h-9 bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-indigo-500 rounded-lg flex items-center justify-center transition-all group"
            aria-label="Email"
          >
            <Mail className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
          </a>
        </div>
      </div>

      {/* Services */}
      <div>
        <h4 className="font-semibold mb-4 text-sm">Services</h4>
        <ul className="space-y-2 text-slate-400 text-sm">
          <li>
            <a href="#services" className="hover:text-white transition-colors">Custom Integrations</a>
          </li>
          <li>
            <a href="#services" className="hover:text-white transition-colors">Workflow Design</a>
          </li>
          <li>
            <Link href="/case-studies" className="hover:text-white transition-colors">Case Studies</Link>
          </li>
        </ul>
      </div>

      {/* Legal */}
      <div>
        <h4 className="font-semibold mb-4 text-sm">Legal</h4>
        <ul className="space-y-2 text-slate-400 text-sm">
          <li>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </li>
          <li>
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          </li>
          <li>
            <Link href="/refunds" className="hover:text-white transition-colors">Refund Policy</Link>
          </li>
        </ul>
      </div>

      {/* Contact */}
      <div>
        <h4 className="font-semibold mb-4 text-sm">Contact</h4>
        <p className="text-slate-400 text-sm mb-2">
          <a href="mailto:contact@automathub.com" className="hover:text-white transition-colors">
            Contact@automathub.com
          </a>
        </p>
        <p className="text-slate-500 text-xs mb-4">
          24-hour response time
        </p>
        <a 
          href="https://github.com/boooverhere" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-white text-sm transition-colors"
        >
          <Github className="w-4 h-4" />
          View Portfolio
        </a>
      </div>
    </div>

    <div className="pt-8 border-t border-indigo-500/10 flex flex-col md:flex-row justify-between items-center gap-4">
      <p className="text-slate-500 text-sm text-center md:text-left">
        &copy; {new Date().getFullYear()} Automat. All rights reserved.
      </p>
      
      {/* Additional Social Links */}
      <div className="flex items-center gap-4 text-slate-500 text-sm">
        <span>Follow us:</span>
        <div className="flex gap-3">
          <a href="https://github.com/boooverhere" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            GitHub
          </a>
          <a href="https://linkedin.com/in/elyoussoufimehdi" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            LinkedIn
          </a>
          <a href="https://X.com/automat_mehdi" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            X
          </a>
        </div>
      </div>
    </div>
  </div>
</footer>
  );
}