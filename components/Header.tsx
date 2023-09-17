'use client'

import React from 'react'
import ThemeSwitch from './ThemeSwitch'
import { Input } from '@/components/ui/input'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { IoMdNotificationsOutline } from 'react-icons/io'
import { Button } from './ui/button'
import { useExpanded } from '@/context/sidebar-expanded-context'
import { ChevronFirst, ChevronLast, MoreVertical } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import profileIng from '@/public/profile.png'

const Header = () => {
  const { expanded, toggleExpanded } = useExpanded()

  return (
    <div
      className="flex flex-row justify-between dark:bg-gray-900 
    dark:text-white bg-white w-full p-4 items-center"
    >
      <Button
        onClick={toggleExpanded}
        className="p-1.5 rounded-lg bg-gray-50 text-black 
        hover:bg-gray-100 dark:text-white dark:bg-black hover:scale-110 transition-all"
      >
        {expanded ? <ChevronFirst /> : <ChevronLast />}
      </Button>
      <Input
        className="basis-1/3 rounded-full dark:border-b-gray-800"
        type="search"
        placeholder="Search..."
      />
      <ThemeSwitch />
      <Popover>
        <PopoverTrigger asChild>
          <button
            className="bg-white 
    w-[2.5rem] h-[2.5rem] bg-opacity-80 backdrop:blur-[0.5rem] border
    border-black/5 dark:border-white/10 shadow-2xl rounded-full
     flex items-center justify-center hover:scale-[1.15] 
     active:scale-105 transition-all dark:bg-gray-950 dark:text-white"
          >
            <IoMdNotificationsOutline />
          </button>
        </PopoverTrigger>
        <PopoverContent
          className="text-center dark:bg-gray-950 
        dark:text-white dark:border-white/10 "
        >
          You have no notifications
        </PopoverContent>
      </Popover>
      <div
        className={`
              flex justify-between items-center
              overflow-hidden transition-all w-60 ml-3`}
      >
        <Avatar>
          <AvatarImage
            src="https://shah-jawad-islam-portfolio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdp.cc12b37a.png&w=256&q=95"
            alt="Profile picture"
          />
          <AvatarFallback>J</AvatarFallback>
        </Avatar>
        <div className="leading-4">
          <h4 className="font-semibold">Shah Jawad Islam</h4>
          <span className="text-xs text-gray-600">shahjawad@iut-dhaka.edu</span>
        </div>
        <MoreVertical size={20} />
      </div>
    </div>
  )
}
export default Header
