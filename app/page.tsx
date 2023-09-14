import Cards from '@/components/Cards'
import Chart from '@/components/Chart'
import Header from '@/components/Header'
import Market from '@/components/Market'

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen w-full">
      <Header />
      <Cards />
      <div
        className="p-4 grid lg:grid-cols-3 grid-cols-1 gap-4
       w-full"
      >
        <Chart />
        <Market />
      </div>
    </div>
  )
}
