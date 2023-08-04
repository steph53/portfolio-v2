import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Logo from './components/navbar/Logo'
import Navbar from './components/navbar/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Stephane Sonkeng',
    description: 'Welcome to my world',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Navbar/>
                {children}
            </body>
        </html>
    )
}
