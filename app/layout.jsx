import './globals.css'
import Navbar from './components/navbar'
import Footer from './components/footer'

export const metadata = {
  title: {
    default: 'Automat - Custom Workflow Automation & API Engineering Services',
    template: '%s | Automat',
  },
  description: 'Professional Python-based automation, API integration, and technical consulting for enterprises. Custom n8n workflows, system monitoring, and ongoing maintenance retainers.',
  keywords: 'workflow automation, API engineering, Python automation, n8n workflows, Zapier integration, custom integrations, technical consulting, automation maintenance, API monitoring, enterprise automation',
  authors: [{ name: 'Automat' }],
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
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Automat - Custom Workflow Automation & API Engineering',
    description: 'Professional Python-based automation and API engineering services for modern enterprises. Custom implementations, technical audits, and ongoing maintenance.',
    url: 'https://automathub.com', // Replace with your actual domain
    siteName: 'Automat',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg', // You'll need to create this image
        width: 1200,
        height: 630,
        alt: 'Automat - Workflow Automation Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Automat - Custom Workflow Automation & API Engineering',
    description: 'Professional Python-based automation and API engineering services for modern enterprises.',
    images: ['/og-image.jpg'], // Same as OpenGraph image
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
  verification: {
    google: 'your-google-verification-code', // Add after Google Search Console setup
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Additional meta tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#6366f1" />
        <link rel="canonical" href="https://automathub.com" />
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
              description: 'Technical automation consultancy specializing in Python-based automation, API engineering, and custom workflow design for enterprise systems.',
              email: 'contact@automathub.com',
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
      </body>
    </html>
  )
}