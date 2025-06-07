import './globals.css' 
import type { Metadata } from 'next'
import { Manrope } from 'next/font/google' 
import Navbar from '../components/layout/Navbar' 
import Footer from '@/components/layout/Footer';

const manrope = Manrope({ 
  subsets: ['latin'],
  weight: ['400', '500', '700'], 
  variable: '--font-manrope', 
});

export const metadata: Metadata = {
  title: 'Fatih - Portofolio', 
  description: 'Portofolio Fatih.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html  lang="id" className={`${manrope.variable} antialiased scroll-smooth`}> 
      <body className="bg-white text-gray-800 font-sans "> 
        <Navbar />
        <main className=''> 
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}