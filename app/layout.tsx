// app/layout.tsx
import './globals.css' // Pastikan path ini benar
import type { Metadata } from 'next'
import { Manrope } from 'next/font/google' // Ganti Poppins dengan Manrope
import Navbar from '../components/layout/Navbar' // Sesuaikan path jika perlu
import Footer from '@/components/layout/Footer';
// import Footer from '../components/layout/Footer' // Kita belum bahas footer untuk Sandbox

const manrope = Manrope({ // Konfigurasi Manrope
  subsets: ['latin'],
  weight: ['400', '500', '700'], // Sesuaikan dengan weight yang Anda gunakan dari @import
  variable: '--font-manrope', // Membuat CSS variable
});

export const metadata: Metadata = {
  title: 'Fathan - Portofolio', // Ganti dengan judul Anda
  description: 'Portofolio Fathan, Sandbox Theme.', // Ganti deskripsi Anda
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