'use client'

import { Button } from './ui/button'
import { Input } from './ui/input'
import { BiDotsHorizontalRounded } from 'react-icons/bi'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useState } from 'react'

const Converter = () => {
  const [convertFrom, setConvertFrom] = useState<number>(0)
  const [convertTo, setConvertTo] = useState<number>(0)

  const [fromSelect, setFromSelect] = useState<string | ''>('USDT')
  const [toSelect, setToSelect] = useState<string | ''>('BTC')

  const fromHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConvertFrom(Number(e.target.value))
  }
  const toHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConvertTo(Number(e.target.value))
  }

  const handleConvert = () => {
    if (convertFrom !== undefined) {
      if (fromSelect === toSelect) setConvertTo(convertFrom)
      else if (fromSelect === 'USDT') {
        if (toSelect === 'BTC') {
          setConvertTo(convertFrom / 26053)
        } else if (toSelect === 'BDT') {
          setConvertTo(convertFrom * 109.67)
        }
      } else if (fromSelect === 'BDT') {
        if (toSelect === 'BTC') {
          setConvertTo(convertFrom / (26053 * 109.67))
        } else if (toSelect === 'USDT') {
          setConvertTo(convertFrom / 109.67)
        }
      } else if (fromSelect === 'BTC') {
        if (toSelect === 'USDT') {
          setConvertTo(convertFrom * 26053)
        } else if (toSelect === 'BDT') {
          setConvertTo(convertFrom * (109.67 * 26053))
        }
      }
    }
  }

  return (
    <div
      className="flex flex-col items-start bg-white 
      dark:bg-gray-900 rounded-lg w-[30%]
    shadow p-8 gap-5 flex-auto"
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
      <div className="flex w-full items-center space-x-2">
        <Input
          className="dark:bg-black border dark:border-white/30 
          border-black/30 dark:text-white"
          type="number"
          // value={convertFrom}
          onChange={fromHandleChange}
        />
        <Select value={fromSelect} onValueChange={setFromSelect}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Currency" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="USDT">USDT</SelectItem>
            <SelectItem value="BDT">BDT</SelectItem>
            <SelectItem value="BTC">BTC</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="flex w-full items-center space-x-2">
        <Input
          className="dark:bg-black border dark:border-white/30 
          border-black/30 dark:text-white"
          type="text"
          value={convertTo}
          onChange={toHandleChange}
        />
        <Select value={toSelect} onValueChange={setToSelect}>
          <SelectTrigger className="w-[180px]">
            <SelectValue className="dark:text-white" placeholder="USDT" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="USDT">USDT</SelectItem>
            <SelectItem value="BDT">BDT</SelectItem>
            <SelectItem value="BTC">BTC</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Button className="w-full" onClick={handleConvert}>
        Convert now
      </Button>
      <p className="p-0 text-[60%] dark:text-white">
        The ultimate price and output is determined by the amount of tokens in
        the pool at the time of your swap.
      </p>
    </div>
  )
}
export default Converter
