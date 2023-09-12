import Link from 'next/link'
import Image from 'next/image'
import {
  DashboardIcon,
  MixerVerticalIcon,
  PersonIcon,
} from '@radix-ui/react-icons'
import { RiSettings5Fill } from 'react-icons/ri'
import { GrTransaction } from 'react-icons/gr'
import { Button, buttonVariants } from '@/components/ui/button'

const Sidebar = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex">
      <div
        className="fixed h-screen p-4 bg-white 
      border-r-[1px] flex flex-col justify-between"
      >
        <div className="flex flex-col items-center gap-5">
          <h2 className="p-5 py-10">BlueTrade</h2>
          <Link href={'/'} className={buttonVariants({ variant: 'outline' })}>
            <DashboardIcon className="mr-2 h-4" /> Dashboard
          </Link>
          <Link href={'/'} className={buttonVariants({ variant: 'outline' })}>
            <MixerVerticalIcon className="mr-2 h-4" /> Markets
          </Link>
          <Link href={'/'} className={buttonVariants({ variant: 'outline' })}>
            <GrTransaction className="mr-2 h-4" /> Transactions
          </Link>
          <Link href={'/'} className={buttonVariants({ variant: 'outline' })}>
            <PersonIcon className="mr-2 h-4" /> Profile
          </Link>
          <Link href={'/'} className={buttonVariants({ variant: 'outline' })}>
            <RiSettings5Fill className="mr-2 h-4" /> Settings
          </Link>
        </div>
      </div>
      Sidebar
      <main className="ml-28 w-full">{children}</main>
    </div>
  )
}
export default Sidebar
