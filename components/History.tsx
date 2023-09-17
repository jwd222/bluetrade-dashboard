import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table'
import { Button } from './ui/button'
import { historyData } from '@/lib/data'
import { BiUpArrowAlt, BiDownArrowAlt } from 'react-icons/bi'

const History = () => {
  return (
    <div
      className="rounded-lg flex flex-col shadow w-[45%]
    dark:text-white dark:bg-gray-900 bg-white px-2 pt-2 flex-auto"
    >
      <div className="flex flex-row justify-between w-full px-4 pt-2">
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
          {historyData.map(({ type, name, value, time, status }, index) => (
            <TableRow key={index}>
              <TableCell
                className={`${
                  type === 'in'
                    ? 'text-green-500 bg-green-400/10'
                    : 'text-red-500 bg-red-400/10'
                } rounded-full scale-50 text-[2.5rem] flex justify-center`}
              >
                {type === 'in' ? <BiDownArrowAlt /> : <BiUpArrowAlt />}
              </TableCell>
              <TableCell>{name}</TableCell>
              <TableCell
                className={`${
                  value > 0 ? 'text-green-500' : 'text-red-500'
                } text-center`}
              >
                {`${value > 0 ? `+$${value}` : `-$${value}`}`}
              </TableCell>
              <TableCell>{time}</TableCell>
              <TableCell className="text-center">{status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default History
