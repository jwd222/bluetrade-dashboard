'use client'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import ChartSelectItem from './ChartSelectItem'

import { optionList } from '@/lib/data'
import BoxChart from './BoxChart'

export type Options = (typeof optionList)[number]

const Chart = () => {
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
            <SelectItem value="Bitcoin">
              <ChartSelectItem {...optionList[0]} />
            </SelectItem>
            <SelectItem value="Etherium">
              <ChartSelectItem {...optionList[1]} />
            </SelectItem>
            <SelectItem value="Solana">
              <ChartSelectItem {...optionList[2]} />
            </SelectItem>
          </SelectContent>
        </Select>
        <h1>radiogroup</h1>
      </div>
      {/* <ResponsiveContainer width="100%" height="100%">
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
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="uv"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer> */}
      <BoxChart />
    </div>
  )
}

export default Chart
