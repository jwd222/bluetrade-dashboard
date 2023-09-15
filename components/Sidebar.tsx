'use client'

import React from 'react'
import Link from 'next/link'
import { Button, buttonVariants } from '@/components/ui/button'
import Image from 'next/image'
import Logo from '@/public/Logo.png'
import LogoDark from '@/public/logo-dark.png'
import { Separator } from './ui/separator'
import { sideBarButtons } from '@/lib/data'
import { useTheme } from '@/context/theme-context'

const Sidebar = () => {
  const { theme } = useTheme()

  return (
    <div
      className="h-screen p-4 sm:w-1/6 hidden sm:block dark:text-white 
    border border-black/5 dark:border-white/10 dark:bg-gray-900 bg-white"
    >
      <div className="flex flex-col items-center gap-10">
        <Image
          className="mt-10"
          src={theme === 'light' ? Logo : LogoDark}
          alt="Logo"
        />
        {sideBarButtons.map(({ title, icon }, index) => (
          <React.Fragment key={index}>
            <Link
              href={'/'}
              className={`${buttonVariants({
                variant: 'outline',
              })} w-[80%] hover:bg-blue-100 hover:text-blue-600 
              dark:shadow-white/5 dark:hover:bg-blue-100/10 gap-4`}
            >
              {icon}
              {title}
            </Link>
          </React.Fragment>
        ))}
        <Separator className="border border-black/10 dark:border-white/10" />
      </div>
      {}
    </div>
  )
}
export default Sidebar
