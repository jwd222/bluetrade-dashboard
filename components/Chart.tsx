'use client'

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'
import { chartData } from '@/lib/data'
import CustomSelect from './CustomSelect'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

// import { optionList } from '@/lib/data'
import { useState } from 'react'

// const options = [
//   { value: 'option1', label: 'Option 1' },
//   { value: 'option2', label: 'Option 2' },
//   { value: 'option3', label: 'Option 3' },
// ]

const options = [
  {
    title: 'BTCUSDT',
    description: 'Bitcoin',
    content: '$23,738',
    rate: 14.67,
  },
  {
    title: 'ETHUSDT',
    description: 'Etherium',
    content: '$23,738',
    rate: 24.86,
  },
  {
    title: 'SOLUSDT',
    description: 'Solana',
    content: '$23,738',
    rate: 64.11,
  },
]

type Options = (typeof options)[number]

const Chart = () => {
  // const [val, setVal] = useState<Options>({
  //   value: 'option1',
  //   label: 'Option 1',
  // })
  return (
    <div
      className="rounded-lg shadow sm:w-2/3 w-full 
    dark:bg-gray-900 bg-white flex flex-col flex-auto"
    >
      <div className="flex flex-row justify-between dark:text-white p-4">
        {/* <CustomSelect options={optionList} /> */}
        <Select>
          <SelectTrigger className="w-1/2">
            <SelectValue className="bg-blue-500" placeholder="Theme" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">
              <div className="flex flex-row">
                <div className="flex flex-col">
                  '<h1>BTCUSDT</h1>
                  <h1>Bitcoin</h1>'
                </div>
                <div className="flex flex-col">
                  '<h1>$23,738</h1>
                  <h1>14.67</h1>'
                </div>
              </div>
            </SelectItem>
            <SelectItem value="dark">
              <div>
                <h1>firasdasdst</h1>
                <h1>secodasdaand</h1>
              </div>
            </SelectItem>
            <SelectItem value="system">
              <div>
                <h1>firasdadasdasddasdst</h1>
                <h1>secodasasdasdasdaddaand</h1>
              </div>
            </SelectItem>
          </SelectContent>
        </Select>
        <h1>radiogroup</h1>
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          id="chart"
          data={chartData}
          margin={{
            // top: 5,
            right: 30,
            left: 20,
            // bottom: 5,
          }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          {/* <Tooltip /> */}
          <Legend />
          <Line
            type="monotone"
            dataKey="uv"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart
