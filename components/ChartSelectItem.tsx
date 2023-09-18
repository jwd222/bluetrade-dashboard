import { Options } from './Chart'

const ChartSelectItem = ({ title, description, content, rate }: Options) => {
  return (
    <div className="flex flex-row justify-between">
      <div className="flex flex-col">
        <h1>{title}</h1>
        <h1 className="text-xs">{description}</h1>
      </div>
      <div className="flex flex-col">
        <h1>{content}</h1>
        <h1 className="text-xs bg-green-300/10 rounded-full">{rate}</h1>
      </div>
    </div>
  )
}
export default ChartSelectItem
