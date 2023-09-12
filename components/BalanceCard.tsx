import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { list } from '@/lib/data'
import { text } from 'stream/consumers'

type BalanceCardProps = (typeof list)[number]

const BalanceCard = ({
  title,
  description,
  content,
  footer,
  icon,
  rate,
  units,
}: BalanceCardProps) => {
  return (
    <Card className="col-span-2 row-span-1 w-full h-full">
      <CardHeader>
        <div className="flex justify-start gap-2">
          {icon}
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="text-xl font-bold">
        <p>{content}</p>
      </CardContent>
      <CardFooter className="text-xs flex flex-row justify-between">
        <p>{footer}</p>
        <p className={`${units > 0 ? 'text-green-500' : 'text-red-500'}`}>
          ${units}
        </p>
        <p className={`${rate > 0 ? 'text-green-500' : 'text-red-500'}`}>
          {rate}%
        </p>
      </CardFooter>
    </Card>
  )
}
export default BalanceCard
