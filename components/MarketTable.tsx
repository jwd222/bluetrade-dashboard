import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table'

const invoices = [
  {
    currToUsdt: 'BTCUSDT',
    currencyName: 'Bitcoin',
    currentValue: ' $26,053',
    percentage: +23.4,
  },
  {
    currToUsdt: 'ETHUSDT',
    currencyName: 'Ethereum',
    currentValue: '$1670',
    percentage: -0.3,
  },
  {
    currToUsdt: 'DOTUSDT',
    currencyName: 'Polkadot',
    currentValue: '$4.46',
    percentage: +0.5,
  },
  {
    currToUsdt: 'SOLUSDT',
    currencyName: 'Solana',
    currentValue: '$21.18',
    percentage: +11.1,
  },
  {
    currToUsdt: 'BNBUSDT',
    currencyName: 'Bianance',
    currentValue: '$209.13',
    percentage: -2.6,
  },
  {
    currToUsdt: 'ADAUSDT',
    currencyName: 'Cardano',
    currentValue: '$0.2666',
    percentage: -1.03,
  },
  {
    currToUsdt: 'TRXUSDT',
    currencyName: 'TRON',
    currentValue: '$0.07469',
    percentage: +6.3,
  },
  {
    currToUsdt: 'XRPUSDT',
    currencyName: 'Ripple',
    currentValue: '$0.5246',
    percentage: +0.11,
  },
  {
    currToUsdt: 'DAIUSDT',
    currencyName: 'Dai',
    currentValue: '$0.9998',
    percentage: +0.41,
  },
  {
    currToUsdt: 'DOGEUSDT',
    currencyName: 'Dogecoin',
    currentValue: '$0.06248',
    percentage: -5.16,
  },
]

const MarketTable = () => {
  return (
    <Table>
      <TableBody>
        {invoices.map(
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
