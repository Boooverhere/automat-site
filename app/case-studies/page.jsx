'use client';

import { ArrowLeft, Database, Code, TrendingUp, FileText, CheckCircle2, Terminal } from 'lucide-react';
import Link from 'next/link';

export default function CaseStudies() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 text-white">

      {/* Hero */}
      <section className="pt-32 pb-12 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="mb-8">
            <span className="px-4 py-2 bg-indigo-500/10 border border-indigo-500/30 rounded-full text-indigo-300 text-sm font-medium">
              Technical Implementation Reports
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">Case Studies</h1>
          <p className="text-xl text-slate-300 leading-relaxed max-w-3xl">
            Detailed technical breakdowns of custom automation implementations deployed for enterprise clients. 
            Each report includes objective analysis, stack documentation, and operational metrics.
          </p>
        </div>
      </section>

      {/* Case Study 1: Inventory Sync */}
      <section id="inventory-sync" className="py-16 px-6 border-t border-indigo-500/10">
        <div className="container mx-auto max-w-5xl">
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Database className="w-6 h-6 text-indigo-400" />
              <span className="text-xs font-mono text-indigo-300 uppercase tracking-wider">API Integration / Case Study 001</span>
            </div>
            <h2 className="text-4xl font-bold mb-4">E-Commerce Inventory Synchronization System</h2>
            <p className="text-slate-300 text-lg">Multi-platform real-time inventory management for distributed retail operations</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-indigo-500/30 rounded-xl p-6 backdrop-blur-sm hover:border-indigo-500/50 transition-all">
              <div className="text-3xl font-bold mb-2 text-indigo-200">99.7%</div>
              <div className="text-slate-300 text-sm">Sync Accuracy</div>
            </div>
            <div className="bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-indigo-500/30 rounded-xl p-6 backdrop-blur-sm hover:border-indigo-500/50 transition-all">
              <div className="text-3xl font-bold mb-2 text-indigo-200">4.2s</div>
              <div className="text-slate-300 text-sm">Average Latency</div>
            </div>
            <div className="bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-indigo-500/30 rounded-xl p-6 backdrop-blur-sm hover:border-indigo-500/50 transition-all">
              <div className="text-3xl font-bold mb-2 text-indigo-200">3</div>
              <div className="text-slate-300 text-sm">Integrated Platforms</div>
            </div>
          </div>

          <div className="space-y-8">
            {/* Objective */}
            <div>
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded flex items-center justify-center">
                  <FileText className="w-4 h-4 text-white" />
                </div>
                Objective
              </h3>
              <div className="bg-slate-800/50 border-l-4 border-indigo-500 p-6 rounded backdrop-blur-sm">
                <p className="text-slate-200 leading-relaxed">
                  Client operated three separate e-commerce platforms (Shopify storefront, WooCommerce wholesale portal, custom POS system) 
                  with manual inventory reconciliation occurring daily. Goal was to implement real-time bidirectional synchronization 
                  to eliminate stock discrepancies and reduce manual data entry overhead by 90%.
                </p>
              </div>
            </div>

            {/* Technical Stack */}
            <div>
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-600 rounded flex items-center justify-center">
                  <Terminal className="w-4 h-4 text-white" />
                </div>
                Technical Stack
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-slate-800/40 border border-slate-700/50 rounded-xl p-5 backdrop-blur-sm hover:border-slate-600 transition-all">
                  <h4 className="font-semibold mb-3 text-sm text-indigo-300">Core Technologies</h4>
                  <ul className="space-y-2 text-sm text-slate-200">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full"></div>
                      Python 3.11 (Flask framework)
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full"></div>
                      Redis 7.0 (caching layer)
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full"></div>
                      PostgreSQL 15 (transaction log)
                    </li>
                  </ul>
                </div>
                <div className="bg-slate-800/40 border border-slate-700/50 rounded-xl p-5 backdrop-blur-sm hover:border-slate-600 transition-all">
                  <h4 className="font-semibold mb-3 text-sm text-indigo-300">API Integrations</h4>
                  <ul className="space-y-2 text-sm text-slate-200">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full"></div>
                      Shopify Admin API v2024-01
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full"></div>
                      WooCommerce REST API v3
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full"></div>
                      Custom POS webhook endpoints
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Implementation Logic */}
            <div>
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-600 rounded flex items-center justify-center">
                  <Code className="w-4 h-4 text-white" />
                </div>
                Implementation Logic
              </h3>
              <div className="bg-slate-800/40 border border-slate-700/50 rounded-xl p-6 backdrop-blur-sm">
                <ol className="space-y-4 text-slate-200">
                  <li className="flex gap-4">
                    <span className="font-mono text-indigo-400 font-bold">01</span>
                    <div>
                      <strong className="text-white">Webhook Registration:</strong> Configured webhook listeners on all three platforms 
                      to capture inventory_updated events in real-time
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="font-mono text-indigo-400 font-bold">02</span>
                    <div>
                      <strong className="text-white">Event Processing:</strong> Python Flask API receives webhook payloads, validates 
                      signatures, and queues updates in Redis with 60-second deduplication window
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="font-mono text-indigo-400 font-bold">03</span>
                    <div>
                      <strong className="text-white">Conflict Resolution:</strong> Last-write-wins strategy with PostgreSQL transaction 
                      log maintaining audit trail of all inventory changes
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="font-mono text-indigo-400 font-bold">04</span>
                    <div>
                      <strong className="text-white">Propagation:</strong> Worker processes consume Redis queue and dispatch updates 
                      to other platforms via their respective APIs with exponential backoff retry logic
                    </div>
                  </li>
                </ol>
              </div>
            </div>

            {/* Operational Impact */}
            <div>
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 text-white" />
                </div>
                Operational Impact
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-6 backdrop-blur-sm">
                  <h4 className="font-semibold mb-4 text-slate-200">Quantitative Results</h4>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-300">Manual reconciliation time reduced from 2 hours/day to 5 minutes/week</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-300">Overselling incidents decreased from 12/month to 0.4/month</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-300">Average sync latency: 4.2 seconds (target: &lt;5s)</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-6 backdrop-blur-sm">
                  <h4 className="font-semibold mb-4 text-slate-200">System Reliability</h4>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-300">99.7% sync accuracy measured over 90-day period</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-300">Zero data loss incidents post-deployment</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-300">Automated alerting on sync failures &gt;10s </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study 2: Financial Reporting */}
      <section id="financial-reporting" className="py-16 px-6 border-t border-indigo-500/10 bg-slate-900/30">
        <div className="container mx-auto max-w-5xl">
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <TrendingUp className="w-6 h-6 text-indigo-400" />
              <span className="text-xs font-mono text-indigo-300 uppercase tracking-wider">Data Pipeline / Case Study 002</span>
            </div>
            <h2 className="text-4xl font-bold mb-4">Financial Reporting Automation</h2>
            <p className="text-slate-300 text-lg">Executive dashboard with automated daily financial aggregation</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-indigo-500/30 rounded-xl p-6 backdrop-blur-sm hover:border-indigo-500/50 transition-all">
              <div className="text-3xl font-bold mb-2 text-indigo-200">6h → 12m</div>
              <div className="text-slate-300 text-sm">Report Generation Time</div>
            </div>
            <div className="bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-indigo-500/30 rounded-xl p-6 backdrop-blur-sm hover:border-indigo-500/50 transition-all">
              <div className="text-3xl font-bold mb-2 text-indigo-200">5</div>
              <div className="text-slate-300 text-sm">Data Sources</div>
            </div>
            <div className="bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-indigo-500/30 rounded-xl p-6 backdrop-blur-sm hover:border-indigo-500/50 transition-all">
              <div className="text-3xl font-bold mb-2 text-indigo-200">100%</div>
              <div className="text-slate-300 text-sm">Automation Rate</div>
            </div>
          </div>

          <div className="space-y-8">
            {/* Objective */}
            <div>
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded flex items-center justify-center">
                  <FileText className="w-4 h-4 text-white" />
                </div>
                Objective
              </h3>
              <div className="bg-slate-800/50 border-l-4 border-indigo-500 p-6 rounded backdrop-blur-sm">
                <p className="text-slate-200 leading-relaxed">
                  Executive team required daily financial dashboards aggregating data from Stripe (payments), QuickBooks (accounting), 
                  Salesforce (pipeline), Google Analytics (traffic), and internal database (operations). Existing process involved 
                  6 hours of manual CSV exports and Excel manipulation. Target was full automation with &lt;15 minute data freshness.
                </p>
              </div>
            </div>

            {/* Technical Stack */}
            <div>
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-600 rounded flex items-center justify-center">
                  <Terminal className="w-4 h-4 text-white" />
                </div>
                Technical Stack
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-slate-800/40 border border-slate-700/50 rounded-xl p-5 backdrop-blur-sm hover:border-slate-600 transition-all">
                  <h4 className="font-semibold mb-3 text-sm text-indigo-300">Automation Platform</h4>
                  <ul className="space-y-2 text-sm text-slate-200">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full"></div>
                      n8n (self-hosted, v1.19.4)
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full"></div>
                      Python 3.11 (custom nodes)
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full"></div>
                      Google Sheets API (dashboard output)
                    </li>
                  </ul>
                </div>
                <div className="bg-slate-800/40 border border-slate-700/50 rounded-xl p-5 backdrop-blur-sm hover:border-slate-600 transition-all">
                  <h4 className="font-semibold mb-3 text-sm text-indigo-300">Data Sources</h4>
                  <ul className="space-y-2 text-sm text-slate-200">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full"></div>
                      Stripe API v2024-01
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full"></div>
                      QuickBooks Online API v3
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full"></div>
                      Salesforce REST API v58.0
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Implementation Logic */}
            <div>
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-600 rounded flex items-center justify-center">
                  <Code className="w-4 h-4 text-white" />
                </div>
                Implementation Logic
              </h3>
              <div className="bg-slate-800/40 border border-slate-700/50 rounded-xl p-6 backdrop-blur-sm">
                <ol className="space-y-4 text-slate-200">
                  <li className="flex gap-4">
                    <span className="font-mono text-indigo-400 font-bold">01</span>
                    <div>
                      <strong className="text-white">Scheduled Triggers:</strong> n8n workflow executes daily at 6:00 AM UTC with 
                      cron scheduling and error notification to Slack
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="font-mono text-indigo-400 font-bold">02</span>
                    <div>
                      <strong className="text-white">Parallel Data Fetching:</strong> Five parallel branches query each API 
                      simultaneously with custom Python nodes handling authentication and pagination
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="font-mono text-indigo-400 font-bold">03</span>
                    <div>
                      <strong className="text-white">Data Transformation:</strong> Custom Python functions normalize currencies, 
                      calculate KPIs (MRR, CAC, LTV), and format for dashboard consumption
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="font-mono text-indigo-400 font-bold">04</span>
                    <div>
                      <strong className="text-white">Output Generation:</strong> Results written to Google Sheets template with 
                      conditional formatting and chart auto-refresh
                    </div>
                  </li>
                </ol>
              </div>
            </div>

            {/* Operational Impact */}
            <div>
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 text-white" />
                </div>
                Operational Impact
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-6 backdrop-blur-sm">
                  <h4 className="font-semibold mb-4 text-slate-200">Efficiency Gains</h4>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-300">Report generation time: 6 hours → 12 minutes (97% reduction)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-300">30 staff-hours/month reallocated to analysis vs. data entry</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-300">Zero manual errors in financial calculations post-implementation</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-6 backdrop-blur-sm">
                  <h4 className="font-semibold mb-4 text-slate-200">Business Value</h4>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-300">Executive team has real-time financial visibility before 9 AM daily</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-300">Enabled data-driven decision making with &lt;24h lag time</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-300">99.2% workflow success rate over 90-day measurement period</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study 3: Onboarding System */}
      <section id="onboarding-system" className="py-16 px-6 border-t border-indigo-500/10">
        <div className="container mx-auto max-w-5xl">
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <FileText className="w-6 h-6 text-indigo-400" />
              <span className="text-xs font-mono text-indigo-300 uppercase tracking-wider">Workflow Automation / Case Study 003</span>
            </div>
            <h2 className="text-4xl font-bold mb-4">Customer Onboarding Automation</h2>
            <p className="text-slate-300 text-lg">End-to-end onboarding workflow with document processing and CRM integration</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-indigo-500/30 rounded-xl p-6 backdrop-blur-sm hover:border-indigo-500/50 transition-all">
              <div className="text-3xl font-bold mb-2 text-indigo-200">73%</div>
              <div className="text-slate-300 text-sm">Time Reduction</div>
            </div>
            <div className="bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-indigo-500/30 rounded-xl p-6 backdrop-blur-sm hover:border-indigo-500/50 transition-all">
              <div className="text-3xl font-bold mb-2 text-indigo-200">8 → 2.2</div>
              <div className="text-slate-300 text-sm">Days to Complete</div>
            </div>
            <div className="bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-indigo-500/30 rounded-xl p-6 backdrop-blur-sm hover:border-indigo-500/50 transition-all">
              <div className="text-3xl font-bold mb-2 text-indigo-200">0</div>
              <div className="text-slate-300 text-sm">Manual Touch Points</div>
            </div>
          </div>

          <div className="space-y-8">
            {/* Objective */}
            <div>
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded flex items-center justify-center">
                  <FileText className="w-4 h-4 text-white" />
                </div>
                Objective
              </h3>
              <div className="bg-slate-800/50 border-l-4 border-indigo-500 p-6 rounded backdrop-blur-sm">
                <p className="text-slate-200 leading-relaxed">
                  B2B SaaS client's onboarding process required manual collection of contracts, W9 forms, and compliance documentation, 
                  followed by data entry into HubSpot CRM and Airtable project management system. Average onboarding took 8 business days 
                  with 15+ manual touchpoints. Target was &lt;3 days with zero-touch automation for standard customers.
                </p>
              </div>
            </div>

            {/* Technical Stack */}
            <div>
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-600 rounded flex items-center justify-center">
                  <Terminal className="w-4 h-4 text-white" />
                </div>
                Technical Stack
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-slate-800/40 border border-slate-700/50 rounded-xl p-5 backdrop-blur-sm hover:border-slate-600 transition-all">
                  <h4 className="font-semibold mb-3 text-sm text-indigo-300">Core Platform</h4>
                  <ul className="space-y-2 text-sm text-slate-200">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full"></div>
                      Zapier (Premium tier)
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full"></div>
                      Python 3.11 (webhook handlers)
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full"></div>
                      AWS Lambda (document processing)
                    </li>
                  </ul>
                </div>
                <div className="bg-slate-800/40 border border-slate-700/50 rounded-xl p-5 backdrop-blur-sm hover:border-slate-600 transition-all">
                  <h4 className="font-semibold mb-3 text-sm text-indigo-300">Integrations</h4>
                  <ul className="space-y-2 text-sm text-slate-200">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full"></div>
                      DocuSign API v2.1
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full"></div>
                      HubSpot CRM API v3
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full"></div>
                      Airtable API v0.1
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Implementation Logic */}
            <div>
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-600 rounded flex items-center justify-center">
                  <Code className="w-4 h-4 text-white" />
                </div>
                Implementation Logic
              </h3>
              <div className="bg-slate-800/40 border border-slate-700/50 rounded-xl p-6 backdrop-blur-sm">
                <ol className="space-y-4 text-slate-200">
                  <li className="flex gap-4">
                    <span className="font-mono text-indigo-400 font-bold">01</span>
                    <div>
                      <strong className="text-white">Deal Creation Trigger:</strong> HubSpot deal marked "Closed-Won" triggers Zapier 
                      workflow sending templated DocuSign envelope with contracts and forms
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="font-mono text-indigo-400 font-bold">02</span>
                    <div>
                      <strong className="text-white">Document Collection:</strong> Customer completes DocuSign remotely; webhook 
                      notifies Python endpoint which downloads signed PDFs to secure S3 bucket
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="font-mono text-indigo-400 font-bold">03</span>
                    <div>
                      <strong className="text-white">Data Extraction:</strong> AWS Lambda function with pytesseract OCR extracts 
                      key fields (company name, EIN, billing contact) from W9 and contract PDFs
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="font-mono text-indigo-400 font-bold">04</span>
                    <div>
                      <strong className="text-white">CRM/PM Update:</strong> Extracted data populates HubSpot deal properties and 
                      creates Airtable onboarding project with automated task assignments
                    </div>
                  </li>
                </ol>
              </div>
            </div>

            {/* Operational Impact */}
            <div>
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 text-white" />
                </div>
                Operational Impact
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-6 backdrop-blur-sm">
                  <h4 className="font-semibold mb-4 text-slate-200">Process Improvements</h4>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-300">Average onboarding time: 8.0 days → 2.2 days (73% reduction)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-300">Manual touchpoints eliminated: 15 → 0 for standard onboardings</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-300">Data entry errors: 8% of records → &lt;0.5% with OCR validation</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-6 backdrop-blur-sm">
                  <h4 className="font-semibold mb-4 text-slate-200">Business Metrics</h4>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-300">Customer satisfaction (onboarding NPS): +18 points post-automation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-300">Sales team capacity: +40% (time freed from onboarding admin)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-300">System uptime: 99.6% measured over 180-day period</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-indigo-900/20 to-purple-900/20 border-y border-indigo-500/20">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="mb-8">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">Start Your Technical Audit</h2>
            <p className="text-xl text-slate-300 leading-relaxed">
              Assess your automation requirements with a comprehensive technical evaluation
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/#pricing"
              className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 rounded-lg font-semibold text-lg transition-all shadow-lg shadow-indigo-500/50"
            >
              View Service Retainers
            </Link>
            <a 
              href="mailto:hello@automat.com"
              className="px-8 py-4 bg-slate-800 hover:bg-slate-700 border border-indigo-500/30 rounded-lg font-semibold text-lg transition-colors"
            >
              Schedule Consultation
            </a>
          </div>

          <div className="mt-12 pt-8 border-t border-indigo-500/20">
            <p className="text-slate-400 text-sm">
              All implementations include comprehensive technical documentation, API credentials management, and ongoing maintenance retainers
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}