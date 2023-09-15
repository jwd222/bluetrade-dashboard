import React from 'react'
import Link from 'next/link'
import { DashboardIcon } from '@radix-ui/react-icons'
import { Button, buttonVariants } from '@/components/ui/button'
import Image from 'next/image'
import Logo from '@/public/Logo.png'
import { Separator } from './ui/separator'
import { sideBarButtons } from '@/lib/data'

const Sidebar = () => {
  return (
    <div className="h-screen p-4 bg-white sm:w-1/6 hidden sm:block">
      <div className="flex flex-col items-center gap-10">
        <Image className="mt-10" src={Logo} alt="Logo" />
        {sideBarButtons.map((item, index) => (
          <React.Fragment key={index}>
            <Link
              href={'/'}
              className={`${buttonVariants({
                variant: 'outline',
              })} w-[80%] hover:bg-blue-100 hover:text-blue-600`}
            >
              <DashboardIcon className="mr-2 h-4" /> {item}
            </Link>
          </React.Fragment>
        ))}
        <Separator />
      </div>
      {}
    </div>
  )
}
export default Sidebar
