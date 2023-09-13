import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { list } from '@/lib/data'

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
    <Card className="lg:col-span-2 sm:col-span-1 w-full h-full ">
      <CardHeader className="flex flex-row justify-start gap-2">
        {icon}
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="text-xl font-bold">
        <p>{content}</p>
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
            rate > 0 ? 'bg-green-200' : 'bg-red-200'
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
