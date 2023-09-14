import Link from 'next/link'
import {
  DashboardIcon,
  MixerVerticalIcon,
  PersonIcon,
} from '@radix-ui/react-icons'
import { RiSettings5Fill } from 'react-icons/ri'
import { GrTransaction } from 'react-icons/gr'
import { Button, buttonVariants } from '@/components/ui/button'

const Sidebar = () => {
  return (
    <div className="h-screen p-4 bg-white">
      <div className="flex flex-col items-center gap-10">
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
  )
}
export default Sidebar
