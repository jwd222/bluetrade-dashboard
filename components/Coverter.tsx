import { Button } from './ui/button'
import { Input } from './ui/input'
import { BiDotsHorizontalRounded } from 'react-icons/bi'

const Converter = () => {
  return (
    <div
      className="flex flex-col items-start bg-white 
      dark:bg-gray-900 rounded-lg basis-1/4
    shadow p-8 gap-5"
    >
      <div className="flex flex-row justify-between w-full">
        <h1 className="text-lg dark:text-white">Convert</h1>
        <Button
          className="dark:bg-gray-900 dark:text-white"
          type="button"
          variant="ghost"
        >
          <BiDotsHorizontalRounded />
        </Button>
      </div>
      <div className="flex w-full max-w-sm items-center space-x-2">
        <Input
          className="dark:bg-black border-white/10"
          type="text"
          placeholder=""
        />
        <Button type="button">Subscribe</Button>
      </div>
      <div className="flex w-full max-w-sm items-center space-x-2">
        <Input
          className="dark:bg-black border dark:border-white/10 
          border-black/5"
          type="text"
          placeholder=""
        />
        <Button type="button">Subscribe</Button>
      </div>
      <Button className="w-full ">Convert now</Button>
      <p className=" p-0 text-xs">
        The ultimate price and output is determined by the amount of tokens in
        the pool at the time of your swap.
      </p>
    </div>
  )
}
export default Converter
