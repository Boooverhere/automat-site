import './globals.css'
import Navbar from './components/navbar'
import Footer from './components/footer'
import { Analytics } from '@vercel/analytics/next'

export const metadata = {
  title: {
    default: 'Automat | Automation for Home-Service & Trades Businesses',
    template: '%s | Automat',
  },
  description: 'Automations for home-service and trades businesses: instant lead replies, quote follow-ups, booking reminders and review requests. Built and maintained by Mehdi Elyoussoufi.',
  keywords: 'automation for trades, home service business automation, missed call text back, review request automation, contractor lead follow-up, workflow automation, API engineering, Python automation, n8n workflows, Zapier integration, custom integrations, technical consulting, automation maintenance, API monitoring, small business automation, n8n consultant',
  authors: [{ name: 'Mehdi Elyoussoufi', url: 'https://linkedin.com/in/elyoussoufimehdi' }],
  creator: 'Automat',
  publisher: 'Automat',
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico' },
    ],
    apple: '/apple-touch-icon.png',
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://automathub.com'), // Replace with your actual domain
  openGraph: {
    title: 'Automat | More Booked Jobs, Less Admin',
    description: 'Automations for plumbers, electricians, HVAC, roofers and cleaners: every lead answered, every quote followed up.',
    url: 'https://automathub.com', // Replace with your actual domain
    siteName: 'Automat',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Automat | More Booked Jobs, Less Admin',
    description: 'Automations for home-service businesses: every lead answered, every quote followed up.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Additional meta tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#6366f1" />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Automat',
              url: 'https://automathub.com',
              logo: 'https://automathub.com/AutomatHub-logo.svg',
              description: 'Technical automation consultancy specializing in Python-based automation, API engineering, and lead follow-up automation for home-service and trades businesses.',
              email: 'hello@automathub.com',
              founder: { '@type': 'Person', name: 'Mehdi Elyoussoufi' },
              sameAs: [
                'https://github.com/boooverhere',
                'https://linkedin.com/in/elyoussoufimehdi',
                'https://x.com/automat_mehdi',
              ],
            }),
          }}
        />
        <Navbar />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}