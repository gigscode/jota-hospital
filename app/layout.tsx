import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Jota Care Hospital | Advanced Orthopedic & Trauma Care in Ado Ekiti',
  description: 'Leading orthopedic, trauma, and general medical care hospital in Ado Ekiti. State-of-the-art facilities with 24/7 emergency services.',
  applicationName: 'Jota Care Hospital',
  icons: {
    icon: '/jeta_icon.png',
    apple: '/jeta_icon.png',
  },
  openGraph: {
    title: 'Jota Care Hospital',
    description: 'Advanced Orthopedic, Trauma & General Medical Care in Ado Ekiti',
    images: ['/jeta_logo.png'],
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#001a4d' },
  ],
  initialScale: 1,
  width: 'device-width',
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} bg-white`}>
      <body className="font-sans antialiased bg-white text-[#1a1a1a]">
        {children}
      </body>
    </html>
  )
}
