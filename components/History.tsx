import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table'
import { Button } from './ui/button'
import { historyData } from '@/lib/data'

const History = () => {
  return (
    <div
      className="rounded-lg flex flex-col shadow basis-2/4
    dark:text-white dark:bg-gray-900 bg-white p-8"
    >
      <div className="flex flex-row justify-between w-full">
        <h1 className="text-lg dark:text-white justify-start">History</h1>
        <Button
          className="dark:bg-gray-950 dark:text-white/30 text-xs 
          text-black/30 border border-black/10 scale-75"
          type="button"
          variant="ghost"
        >
          View all
        </Button>
      </div>
      <Table>
        <TableBody>
          {historyData.map((invoice) => (
            <TableRow key={invoice.invoice}>
              <TableCell className="font-medium">{invoice.invoice}</TableCell>
              <TableCell>{invoice.paymentStatus}</TableCell>
              <TableCell>{invoice.paymentMethod}</TableCell>
              <TableCell className="text-right">
                {invoice.totalAmount}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default History
