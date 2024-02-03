
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/globals.css';
import { NavBar, Footer } from '@/components/common'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sufletul Familiei',
  description: 'un podcast cu si despre familie',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className={`${inter.className} min-w-64 overflow-x-hidden`}>
        <NavBar/>
        {children} 
        <Footer/>
      </body>
    </html>
    
  )
}
