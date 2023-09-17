import '../styles/globals.css'
import { Inter } from 'next/font/google'
import Sidebar from '@/components/Sidebar'
import { ThemeContextProvider } from '@/context/theme-context'
import { SidebarContextProvider } from '@/context/sidebar-expanded-context'

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
      <body
        className={`${inter.className} flex flex-row dark:bg-black bg-gray-100 w-full flex-initial`}
      >
        <ThemeContextProvider>
          <SidebarContextProvider>
            <Sidebar />
            {children}
          </SidebarContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  )
}
