'use client'

import { faker } from '@faker-js/faker'
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card'
import { sideBarButtons } from '@/lib/data'
import { SelectItemText } from '@radix-ui/react-select'

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
]

const { title, icon } = sideBarButtons[0]

const Chart = () => {
  return (
    <div
      className="rounded-lg pt-5  w-full shadow basis-2/3 
    dark:bg-gray-900 bg-white flex flex-col"
    >
      <div className="flex flex-row justify-between dark:text-white p-4">
        <Select>
          <SelectTrigger className="w-[180px]"></SelectTrigger>
          <SelectContent>
            <SelectItem value="light">
              <SelectItemText>{icon}</SelectItemText>
            </SelectItem>
            <SelectItem value="dark"></SelectItem>
            <SelectItem value="system"></SelectItem>
          </SelectContent>
        </Select>

        <h1>radiogroup</h1>
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          id="chart"
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
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
      </ResponsiveContainer>
    </div>
  )
}

export default Chart
