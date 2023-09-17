import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { topCardList } from '@/lib/data'

type BalanceCardProps = (typeof topCardList)[number]

const BalanceCard = ({
  title,
  description,
  content,
  footer,
  icon,
  graph,
  rate,
  units,
}: BalanceCardProps) => {
  return (
    <Card className="dark:bg-gray-900 dark:text-white flex-auto w-1/4">
      <CardHeader className="flex flex-row justify-start gap-2">
        {icon}
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-row text-xl font-bold justify-between">
        <p>{content}</p>
        {graph}
      </CardContent>
      <CardFooter
        className="text-xs flex flex-row
      justify-between items-start"
      >
        <p>{footer}</p>
        <p className={`${units > 0 ? 'text-green-500' : 'text-red-500'}`}>
          ${units}
        </p>
        <p
          className={`${
            rate > 0
              ? 'bg-green-200 dark:bg-green-500/20'
              : 'bg-red-200 dark:bg-red-500/20'
          } rounded-lg p-1`}
        >
          <span className={`${rate > 0 ? 'text-green-500' : 'text-red-500'}`}>
            {rate}%
          </span>
        </p>
      </CardFooter>
    </Card>
  )
}
export default BalanceCard
