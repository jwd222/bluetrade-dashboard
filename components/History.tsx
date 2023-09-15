import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table'
import { Button } from './ui/button'

const invoices = [
  {
    invoice: 'INV001',
    paymentStatus: 'Paid',
    totalAmount: '$250.00',
    paymentMethod: 'Credit Card',
  },
  {
    invoice: 'INV002',
    paymentStatus: 'Pending',
    totalAmount: '$150.00',
    paymentMethod: 'PayPal',
  },
  {
    invoice: 'INV003',
    paymentStatus: 'Unpaid',
    totalAmount: '$350.00',
    paymentMethod: 'Bank Transfer',
  },
  {
    invoice: 'INV004',
    paymentStatus: 'Paid',
    totalAmount: '$450.00',
    paymentMethod: 'Credit Card',
  },
  {
    invoice: 'INV005',
    paymentStatus: 'Paid',
    totalAmount: '$550.00',
    paymentMethod: 'PayPal',
  },
  {
    invoice: 'INV006',
    paymentStatus: 'Pending',
    totalAmount: '$200.00',
    paymentMethod: 'Bank Transfer',
  },
]

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
          {invoices.map((invoice) => (
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
