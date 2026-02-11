import './globals.css'

export const metadata = {
  title: 'Automat - Custom Workflow Automation & API Engineering',
  description: 'Professional workflow automation and API engineering services for modern enterprises. We build and maintain proprietary Python-based automations.',
  keywords: 'workflow automation, API engineering, Python automation, n8n, Zapier, enterprise automation',
}

export default function RootLayout(props) {
  return (
    <html lang="en">
      <body>{props.children}</body>
    </html>
  )
}
