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

const Header = () => {
  return (
    <div
      className="flex flex-row justify-between dark:bg-gray-900 
    dark:text-white bg-white w-full p-4 items-center"
    >
      <Input
        className="basis-1/3 rounded-full"
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
      <h2>Welcome, back</h2>
    </div>
  )
}
export default Header
