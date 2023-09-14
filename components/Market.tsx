import { ScrollArea } from '@/components/ui/scroll-area'
import MarketTable from './MarketTable'
import { Button } from '@/components/ui/button'

const Market = () => {
  return (
    <div className="col-span-1 bg-white rounded-lg flex flex-col">
      <h2 className="p-2">Market</h2>
      <ScrollArea className="h-60 rounded-md border">
        <div className="p-4">
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
