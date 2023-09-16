import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table'
import { marketData } from '@/lib/data'

const MarketTable = () => {
  return (
    <Table>
      <TableBody>
        {marketData.map(
          ({ currToUsdt, currencyName, currentValue, percentage }, index) => (
            <TableRow className="rounded-lg" key={index}>
              <TableCell className="font-medium">{currToUsdt}</TableCell>
              <TableCell>{currencyName}</TableCell>
              <TableCell className="text-right">{currentValue}</TableCell>
              <TableCell
                className={`${
                  percentage > 0
                    ? 'bg-green-200 dark:bg-green-500/20'
                    : 'bg-red-200 dark:bg-red-500/20'
                } rounded-lg text-center scale-75`}
              >
                <span
                  className={`${
                    percentage > 0 ? 'text-green-500' : 'text-red-500'
                  }`}
                >
                  {percentage}%
                </span>
              </TableCell>
            </TableRow>
          )
        )}
      </TableBody>
    </Table>
  )
}

export default MarketTable
