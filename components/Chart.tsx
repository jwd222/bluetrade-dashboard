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
import { chartData } from '@/lib/data'

const { title, icon } = sideBarButtons[0]

const Chart = () => {
  return (
    <div
      className="rounded-lg pt-5 shadow w-2/3 
    dark:bg-gray-900 bg-white flex flex-col flex-auto"
    >
      <div className="flex flex-row justify-between dark:text-white p-4">
        <h1>dropdown</h1>
        <h1>radiogroup</h1>
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          id="chart"
          data={chartData}
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
