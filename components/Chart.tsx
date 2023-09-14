'use client'

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Line } from 'react-chartjs-2'
import { faker } from '@faker-js/faker'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {},
}

const labels = [
  'Jul 18',
  'Jul 19',
  'Jul 20',
  'Jul 21',
  'Jul 22',
  'Jul 23',
  'Jul 24',
  'Jul 25',
  'Jul 26',
  'Jul 27',
]

export const data = {
  labels,
  datasets: [
    {
      data: labels.map(() => faker.datatype.number({ min: 19000, max: 23000 })),
      borderColor: 'rgb(9, 120, 224)',
    },
  ],
}

const Chart = () => {
  return (
    <div
      className="lg:col-span-2 col-span-1 bg-white rounded-lg 
    p-2"
    >
      <Line options={options} data={data} className="max-h-1/2" />
    </div>
  )
}

export default Chart
