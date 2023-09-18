'use client'

import React from 'react'
import Image from 'next/image'
import { Separator } from './ui/separator'
import { sideBarButtons } from '@/lib/data'
import { useTheme } from '@/context/theme-context'
import SidebarButton from './SidebarButtons'
import { useExpanded } from '@/context/sidebar-expanded-context'

import Logo from '@/public/logo.png'
import LogoDark from '@/public/logoDark.png'

const Sidebar = () => {
  const { theme } = useTheme()
  const { expanded } = useExpanded()

  return (
    <aside className="h-screen sm:block hidden">
      <div
        className="h-full flex flex-col border-r shadow-sm dark:text-white 
        border border-black/5 dark:border-white/10 dark:bg-gray-900 bg-white p-4 gap-8"
      >
        <div className="p-4 pb-2 flex justify-between items-center ">
          <Image
            src={theme === 'light' ? Logo : LogoDark}
            className={`overflow-hidden transition-all scale-125 ${
              expanded ? 'w-32' : 'w-0'
            }`}
            alt=""
          />
        </div>
        {sideBarButtons.slice(0, 5).map(({ title, icon }, index) => (
          <React.Fragment key={index}>
            <SidebarButton title={title} icon={icon} />
          </React.Fragment>
        ))}
        <Separator className="border border-black/10 dark:border-white/10" />
        {sideBarButtons.slice(-2).map(({ title, icon }, index) => (
          <React.Fragment key={index}>
            <SidebarButton title={title} icon={icon} />
          </React.Fragment>
        ))}
      </div>
    </aside>
  )
}

export default Sidebar
