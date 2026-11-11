import type { Metadata } from 'next'
import './globals.css'


export const metadata: Metadata = {
  title: 'McGill Machine Learning Group',
  description: 'A student group studying ML advancements and working on ML projects.',
  openGraph: {
    title: 'McGill Machine Learning Group',
    description: 'A student group studying ML advancements and working on ML projects.',
  },
  twitter: {
    card: 'summary',
    title: 'McGill Machine Learning Group',
    description: 'A student group studying ML advancements and working on ML projects.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
