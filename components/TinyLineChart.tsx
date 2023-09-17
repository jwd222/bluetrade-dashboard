'use client'
import { LineChart, Line, ResponsiveContainer } from 'recharts'
import { tinyChartData } from '@/lib/data'

const TinyLineChart = () => {
  return (
    <ResponsiveContainer width="100%" height={50} className="sm:">
      <LineChart width={150} height={50} data={tinyChartData}>
        <Line
          type="basis"
          dataKey="pv"
          stroke="#8884d8"
          strokeWidth={2}
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}
export default TinyLineChart
