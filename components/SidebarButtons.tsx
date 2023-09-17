import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'
import { useExpanded } from '@/context/sidebar-expanded-context'

type SidebarButton = {
  title: string
  icon: JSX.Element
}

const SidebarButton = ({ title, icon }: SidebarButton) => {
  const { expanded } = useExpanded()

  return (
    <Link
      href={'/'}
      className={`${buttonVariants({
        variant: 'outline',
      })} hover:bg-blue-100 hover:text-blue-600 shadow-none 
      dark:hover:bg-blue-100/10 gap-4 relative flex items-center py-2 px-3 
      my-1 font-medium rounded-md cursor-pointer group `}
    >
      {icon}
      <span
        className={`overflow-hidden transition-all ${
          expanded ? 'w-52 ml-3' : 'w-0'
        }`}
      >
        {title}
      </span>
      {!expanded && (
        <div
          className={`absolute left-full rounded-md px-2 py-1 ml-6 bg-white
          dark:bg-gray-950 hover:bg-blue-100 dark:hover:bg-black 
          text-sm invisible opacity-20 -translate-x-3 transition-all 
          group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
      `}
        >
          {title}
        </div>
      )}
    </Link>
  )
}
export default SidebarButton
