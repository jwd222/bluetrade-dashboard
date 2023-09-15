import Header from '@/components/Header'
import '../styles/globals.css'
import { Inter } from 'next/font/google'
import Sidebar from '@/components/Sidebar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'BlueTrade | Dashboard',
  description: 'Dashboard for crypto management',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-row`}>
        <Sidebar />
        {children}
      </body>
    </html>
  )
}
