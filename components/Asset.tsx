'use client'

import {
  PieChart,
  Pie,
  Sector,
  Cell,
  Legend,
  ResponsiveContainer,
} from 'recharts'
import { Button } from './ui/button'
import { BiDotsHorizontalRounded } from 'react-icons/bi'

const data = [
  { name: 'ETH', value: 400 },
  { name: 'ADA', value: 300 },
  { name: 'Others', value: 150 },
]
const data2 = [{ name: 'BTC', value: 400 }]
const COLORS = ['#55b0ff', '#00d9ff', '#0026fc']

const Asset = () => {
  return (
    <div
      className="rounded-lg p-8 shadow justify-center sm:w-[25%] w-fit
    dark:bg-gray-900 bg-white items-center flex flex-col sm:flex-auto"
    >
      <div className="flex flex-row justify-between w-full">
        <h1 className="text-lg dark:text-white justify-start">Assets</h1>
        <Button
          className="dark:bg-gray-900 dark:text-white"
          type="button"
          variant="ghost"
        >
          <BiDotsHorizontalRounded />
        </Button>
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart className="sm:scale-125 scale-50 w-1/2 h-1/2">
          <Pie
            data={data2}
            startAngle={265}
            endAngle={10}
            innerRadius={60}
            outerRadius={80}
            fill="#0088FE"
            paddingAngle={0}
            dataKey="value"
          >
            <Legend />
          </Pie>
          <Pie
            data={data}
            startAngle={10}
            endAngle={-95}
            innerRadius={65}
            outerRadius={75}
            fill="#ffffff"
            paddingAngle={1}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
            <Legend />
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div></div>
    </div>
  )
}

export default Asset
