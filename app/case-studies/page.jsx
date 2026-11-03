import { Database, Code, TrendingUp, FileText, CheckCircle2, Terminal, Server, GitBranch } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Automation Projects & Portfolio',
  description: 'Automation systems built by Mehdi Elyoussoufi: inventory sync, financial reporting pipelines, and customer onboarding workflows built with Python, n8n, and Zapier.',
  alternates: { canonical: 'https://automathub.com/case-studies' },
};

export default function CaseStudies() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 text-white">
      {/* Hero */}
      <section className="pt-32 pb-12 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="mb-8">
            <span className="px-4 py-2 bg-indigo-500/10 border border-indigo-500/30 rounded-full text-indigo-300 text-sm font-medium">
              Portfolio Builds
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">Projects I&apos;ve Built</h1>
          <p className="text-xl text-slate-300 leading-relaxed max-w-3xl">
            These are automation systems I designed and built myself to solve common business problems. They are
            personal builds, not client engagements. Each one shows the problem it tackles, the tools I used,
            and how the pieces fit together. Any of them can be adapted to your business.
          </p>
        </div>
      </section>

      {/* Case Study 1: Inventory Sync */}
      <section id="inventory-sync" className="py-16 px-6 border-t border-indigo-500/10">
        <div className="container mx-auto max-w-5xl">
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Database className="w-6 h-6 text-indigo-400" />
              <span className="text-xs font-mono text-indigo-300 uppercase tracking-wider">API Integration / Project 001</span>
            </div>
            <h2 className="text-4xl font-bold mb-4">E-Commerce Inventory Synchronization System</h2>
            <p className="text-slate-300 text-lg">Multi-platform real-time inventory management for distributed retail operations</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-indigo-500/30 rounded-xl p-6 backdrop-blur-sm hover:border-indigo-500/50 transition-all">
              <div className="text-3xl font-bold mb-2 text-indigo-200">2-way</div>
              <div className="text-slate-300 text-sm">Real-time Sync</div>
            </div>
            <div className="bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-indigo-500/30 rounded-xl p-6 backdrop-blur-sm hover:border-indigo-500/50 transition-all">
              <div className="text-3xl font-bold mb-2 text-indigo-200">Webhooks</div>
              <div className="text-slate-300 text-sm">Event-driven, No Polling</div>
            </div>
            <div className="bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-indigo-500/30 rounded-xl p-6 backdrop-blur-sm hover:border-indigo-500/50 transition-all">
              <div className="text-3xl font-bold mb-2 text-indigo-200">3</div>
              <div className="text-slate-300 text-sm">Platforms Connected</div>
            </div>
          </div>

          <div className="space-y-8">
            {/* Objective */}
            <div>
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded flex items-center justify-center">
                  <FileText className="w-4 h-4 text-white" />
                </div>
                The Problem
              </h3>
              <div className="bg-slate-800/50 border-l-4 border-indigo-500 p-6 rounded backdrop-blur-sm">
                <p className="text-slate-200 leading-relaxed">
                  Many small retailers sell across several channels, such as a Shopify storefront, a WooCommerce wholesale portal,
                  and an in-store POS, and reconcile stock between them by hand. That leads to overselling and hours of spreadsheet work.
                  I built a real-time, two-way sync so that a sale on any channel updates stock everywhere else.
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

            {/* What It Handles */}
            <div>
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 text-white" />
                </div>
                What It Handles
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-6 backdrop-blur-sm">
                  <h4 className="font-semibold mb-4 text-slate-200">Core Behaviour</h4>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-300">Stock changes on any platform propagate to the others automatically</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-300">Duplicate events are filtered out within a 60-second window</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-300">Conflicts resolved with a clear last-write-wins rule</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-6 backdrop-blur-sm">
                  <h4 className="font-semibold mb-4 text-slate-200">Reliability Safeguards</h4>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-300">Every inventory change written to a PostgreSQL audit log</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-300">Failed API calls retried with exponential backoff</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-300">Alerts fire when a sync takes longer than 10 seconds</span>
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
              <span className="text-xs font-mono text-indigo-300 uppercase tracking-wider">Data Pipeline / Project 002</span>
            </div>
            <h2 className="text-4xl font-bold mb-4">Financial Reporting Automation</h2>
            <p className="text-slate-300 text-lg">Executive dashboard with automated daily financial aggregation</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-indigo-500/30 rounded-xl p-6 backdrop-blur-sm hover:border-indigo-500/50 transition-all">
              <div className="text-3xl font-bold mb-2 text-indigo-200">Daily</div>
              <div className="text-slate-300 text-sm">Automatic Refresh</div>
            </div>
            <div className="bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-indigo-500/30 rounded-xl p-6 backdrop-blur-sm hover:border-indigo-500/50 transition-all">
              <div className="text-3xl font-bold mb-2 text-indigo-200">5</div>
              <div className="text-slate-300 text-sm">Data Sources</div>
            </div>
            <div className="bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-indigo-500/30 rounded-xl p-6 backdrop-blur-sm hover:border-indigo-500/50 transition-all">
              <div className="text-3xl font-bold mb-2 text-indigo-200">0</div>
              <div className="text-slate-300 text-sm">Manual CSV Exports</div>
            </div>
          </div>

          <div className="space-y-8">
            {/* Objective */}
            <div>
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded flex items-center justify-center">
                  <FileText className="w-4 h-4 text-white" />
                </div>
                The Problem
              </h3>
              <div className="bg-slate-800/50 border-l-4 border-indigo-500 p-6 rounded backdrop-blur-sm">
                <p className="text-slate-200 leading-relaxed">
                  Business owners often build their weekly numbers by exporting CSVs from Stripe (payments), QuickBooks (accounting),
                  Salesforce (pipeline), Google Analytics (traffic), and an internal database, then stitching them together in Excel.
                  I built a pipeline that pulls all five sources automatically and produces a ready-to-read dashboard every morning.
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

            {/* What It Handles */}
            <div>
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 text-white" />
                </div>
                What It Handles
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-6 backdrop-blur-sm">
                  <h4 className="font-semibold mb-4 text-slate-200">Core Behaviour</h4>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-300">Pulls five data sources in parallel on a daily schedule</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-300">Normalises currencies and calculates MRR, CAC, and LTV</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-300">Writes results to a formatted Google Sheets dashboard</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-6 backdrop-blur-sm">
                  <h4 className="font-semibold mb-4 text-slate-200">Reliability Safeguards</h4>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-300">Dashboard is ready before the working day starts</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-300">Handles API authentication and pagination in custom Python nodes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-300">Sends a Slack alert if any step of the workflow fails</span>
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
              <span className="text-xs font-mono text-indigo-300 uppercase tracking-wider">Workflow Automation / Project 003</span>
            </div>
            <h2 className="text-4xl font-bold mb-4">Customer Onboarding Automation</h2>
            <p className="text-slate-300 text-lg">End-to-end onboarding workflow with document processing and CRM integration</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-indigo-500/30 rounded-xl p-6 backdrop-blur-sm hover:border-indigo-500/50 transition-all">
              <div className="text-3xl font-bold mb-2 text-indigo-200">1</div>
              <div className="text-slate-300 text-sm">Trigger Starts Everything</div>
            </div>
            <div className="bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-indigo-500/30 rounded-xl p-6 backdrop-blur-sm hover:border-indigo-500/50 transition-all">
              <div className="text-3xl font-bold mb-2 text-indigo-200">OCR</div>
              <div className="text-slate-300 text-sm">Document Data Extraction</div>
            </div>
            <div className="bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-indigo-500/30 rounded-xl p-6 backdrop-blur-sm hover:border-indigo-500/50 transition-all">
              <div className="text-3xl font-bold mb-2 text-indigo-200">0</div>
              <div className="text-slate-300 text-sm">Manual Data Entry Steps</div>
            </div>
          </div>

          <div className="space-y-8">
            {/* Objective */}
            <div>
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded flex items-center justify-center">
                  <FileText className="w-4 h-4 text-white" />
                </div>
                The Problem
              </h3>
              <div className="bg-slate-800/50 border-l-4 border-indigo-500 p-6 rounded backdrop-blur-sm">
                <p className="text-slate-200 leading-relaxed">
                  Onboarding a new customer usually means chasing contracts and W9 forms, then retyping the details into a CRM
                  (HubSpot) and a project tool (Airtable). It is slow and error-prone. I built a flow where marking a deal as won
                  sends the paperwork, reads the signed documents, and fills in both systems automatically.
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

            {/* What It Handles */}
            <div>
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 text-white" />
                </div>
                What It Handles
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-6 backdrop-blur-sm">
                  <h4 className="font-semibold mb-4 text-slate-200">Core Behaviour</h4>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-300">A Closed-Won deal in HubSpot automatically sends the DocuSign paperwork</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-300">Signed PDFs are stored securely in S3</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-300">OCR extracts company name, EIN, and billing contact from the documents</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-6 backdrop-blur-sm">
                  <h4 className="font-semibold mb-4 text-slate-200">Reliability Safeguards</h4>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-300">Extracted data fills in HubSpot deal properties</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-300">An Airtable onboarding project is created with tasks assigned</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-300">Webhook signatures are validated before anything is processed</span>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">Want Something Like This for Your Business?</h2>
            <p className="text-xl text-slate-300 leading-relaxed">
              Book a free 30-minute call and I&apos;ll show you what can be automated in your day-to-day.
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
              href="https://calendly.com/automathub/30min"
              className="px-8 py-4 bg-slate-800 hover:bg-slate-700 border border-indigo-500/30 rounded-lg font-semibold text-lg transition-colors"
            >
              Book a Free Audit Call
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