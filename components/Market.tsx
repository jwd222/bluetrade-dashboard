import { ScrollArea } from '@/components/ui/scroll-area'
import MarketTable from './MarketTable'
import { Button } from '@/components/ui/button'

const Market = () => {
  return (
    <div
      className="rounded-lg flex flex-col flex-auto shadow sm:w-1/3 w-full 
    dark:text-white dark:bg-gray-900 bg-white"
    >
      <div className="flex flex-row p-3">
        <h2 className="p-2">Market</h2>
      </div>
      <ScrollArea className="h-60 rounded-lg ">
        <div className="px-2 rounded-lg">
          <MarketTable />
        </div>
      </ScrollArea>
      <Button className="self-end" variant="link">
        Show more
      </Button>{' '}
    </div>
  )
}
export default Market
