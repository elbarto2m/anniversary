import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Alim & Oyin',
  description: 'A romantic anniversary site for Alim & Oyin',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
